// Shared helper for the site-data scripts. Uses Node's built-in fetch (Node 18+).
// GITHUB_TOKEN is optional locally; in Actions it raises the API rate limit.
import process from 'node:process'

export async function githubJson(url) {
  const headers = {
    'Accept': 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2026-03-10',
    'User-Agent': 'PlaySite-data-updater',
  }
  if (process.env.GITHUB_TOKEN)
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`

  const response = await fetch(url, { headers })
  if (!response.ok)
    throw new Error(`GitHub API ${response.status} ${response.statusText} for ${url}`)
  return response.json()
}
