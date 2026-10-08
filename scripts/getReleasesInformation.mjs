import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { githubJson } from './github.mjs'

const DATA_FILE = fileURLToPath(new URL('../releases.json', import.meta.url))
const RELEASES_URL = 'https://api.github.com/repos/PlayCover/PlayCover/releases'

const releases = await githubJson(RELEASES_URL)
writeFileSync(DATA_FILE, JSON.stringify(releases.filter(release => !release.draft)))
console.log('Collection generated')
