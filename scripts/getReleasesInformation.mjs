import { existsSync, writeFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import fetch from 'node-fetch'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename).split('/scripts')[0]

const DATA_FILE = join(__dirname, 'releases.json')
const REPOS_PAGE = 'https://api.github.com/repos/PlayCover/PlayCover/releases'

const getCollection = async () => {
  let data = null
  try {
    const response = await fetch(REPOS_PAGE)
    data = await response.json()
  }
  catch (e) {
    throw new Error('Error fetching data:', e)
  }
  return data
}

const filterReleases = (data) => {
  return data.map((release) => {
    // if repo.name is not in PROJECTS_TO_TRACK, skip it
    if (release.draft)
      return null
    return release
  })
}

(async () => {
  const collection = await getCollection()
  // Remove any null/invalid elements in the collection
  const releases = filterReleases(collection).filter(Boolean)

  // CHECK IF releases.json EXISTS ON PROJECT ROOT
  if (!existsSync(join(__dirname, '/releases.json')))
    writeFileSync('releases.json', '')

  // WRITE DATA TO releases.json
  writeFileSync(DATA_FILE, JSON.stringify(releases))
  console.log('Collection generated')
})().catch(e => console.error(e))
