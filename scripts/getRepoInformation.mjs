import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { githubJson } from './github.mjs'

const DATA_FILE = fileURLToPath(new URL('../orgContributors.json', import.meta.url))
const PROJECTS_TO_TRACK = ['PlayCover', 'PlaySite', 'PlayTools', 'PlayBook', 'Puck']
const REPOS_URL = 'https://api.github.com/users/PlayCover/repos?per_page=100'

const repos = (await githubJson(REPOS_URL))
  .filter(repo => PROJECTS_TO_TRACK.includes(repo.name) && !repo.archived && !repo.fork)

const repoContributors = await Promise.all(repos.map(repo =>
  githubJson(`https://api.github.com/repos/PlayCover/${repo.name}/contributors?anon=1`),
))

writeFileSync(DATA_FILE, JSON.stringify(repoContributors))
console.log('Collection generated')
