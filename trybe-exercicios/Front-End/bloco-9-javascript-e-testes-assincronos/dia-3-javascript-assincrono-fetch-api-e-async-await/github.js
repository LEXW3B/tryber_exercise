const fetch =require('node-fetch');

const getUserReposUrl = (username) => `https://api.github.com/users/${username}`;

const getGithubUserInfos = async (username) => {
  const url = getUserReposUrl(username);

  const response = await fetch(url);
  const data = await response.json();

  const { name, company, twitter_user: twitter, bio, location } = data;

  return {
    name,
    company,
    twitter,
    bio,
    location,
  };
};
getGithubUserInfos('gfpoliva').then((data) => console.log(data));

module.exports = {
  getGithubUserInfos,
  getUserReposUrl,
};
