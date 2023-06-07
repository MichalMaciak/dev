import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ fetch }) => {
    const username = 'MichalMaciak';
    const token = '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';
    const url = `https://api.github.com/users/${username}/repos`;
    const response = await fetch(url, {
      headers: {
        Authorization: `token ${token}`,
      },
    });
  
    const data = await response.json();
  
    const repos = data.map((repo) => repo.name);
  
    const fetchRepoData = async (repo) => {
      const response = await fetch(`https://api.github.com/repos/${username}/${repo}`);
      const data = await response.json();
      return data;
    };
  
    const fetchData = async () => {
      const repoData = await Promise.all(repos.map((repo) => fetchRepoData(repo)));
      return repoData;
    };
  
    const repoData = await fetchData();
  
    return {  data: repoData };
  };