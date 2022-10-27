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
    if (release.prerelease)
      return null
    if (release.draft)
      return null
    return release
  })
}

(async () => {
  const collection = await getCollection()
  const releases = filterReleases(collection).filter(Boolean)

  // remove nulls from repos array
  // const filteredReposData = repos.filter(Boolean)
  // const repoContrinutors = await Promise.all(filteredReposData.map(async (r) => {
  //   const response = await fetch(`https://api.github.com/repos/PlayCover/${r.name}/contributors?anon=1`)
  //   const contributors = await response.json()
  //   return contributors
  // }))

  // CHECK IF repoInformation.json EXISTS ON PROJECT ROOT
  if (!existsSync(join(__dirname, '/releases.json')))
    writeFileSync('releases.json', '')

  // WRITE DATA TO repoInformation.json
  writeFileSync(DATA_FILE, JSON.stringify(releases))
  console.log('Collection generated')
})().catch(e => console.error(e))
