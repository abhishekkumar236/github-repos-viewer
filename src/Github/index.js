import { Octokit } from "octokit";

async function getUser(username) {
  const response = await octokit.request("GET /users/{username}", {
    username: username,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  return response.data;
}

async function getRepos(repos) {
  const response = await octokit.request("GET /search/repositories", {
    q: repos,
    per_page: 10,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  return response.data;
}

export { getUser, getRepos };
