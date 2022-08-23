import { existsSync, writeFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import fetch from 'node-fetch'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename).split('/scripts')[0]

const DATA_FILE = join(__dirname, 'orgContributors.json')
const PROJECTS_TO_TRACK = ['PlayCover', 'PlaySite', 'PlayTools', 'PlayBook', 'Puck']
// 'https://api.github.com/repos/PlayCover/PlayCover/contributors?anon=1
const REPOS_PAGE = 'https://api.github.com/users/Playcover/repos'

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

const filterRepos = (data) => {
  return data.map((repo) => {
    // if repo.name is not in PROJECTS_TO_TRACK, skip it
    if (!PROJECTS_TO_TRACK.includes(repo.name))
      return null
    if (repo.archived)
      return null
    if (repo.fork)
      return null
    return repo
  })
}

(async () => {
  const collection = await getCollection()
  const repos = filterRepos(collection)

  // remove nulls from repos array
  const filteredReposData = repos.filter(Boolean)
  const repoContrinutors = await Promise.all(filteredReposData.map(async (r) => {
    const response = await fetch(`https://api.github.com/repos/PlayCover/${r.name}/contributors?anon=1`)
    const contributors = await response.json()
    return contributors
  }))

  // CHECK IF repoInformation.json EXISTS ON PROJECT ROOT
  if (!existsSync(join(__dirname, '/orgContributors.json')))
    writeFileSync('orgContributors.json', '')

  // WRITE DATA TO repoInformation.json
  writeFileSync(DATA_FILE, JSON.stringify(repoContrinutors))
  console.log('Collection generated')
})().catch(e => console.error(e))
