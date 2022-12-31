import axios from "axios";
const GITHUB_URL = "https://api.github.com";

const githubAxios = axios.create({
  baseURL: GITHUB_URL,
  // headers: { Authorization: `token ${GITHUB_TOKEN}` },
});

//Get a List Of Users
export const searchGithubUsers = async (text) => {
  // URL Parameter
  const params = new URLSearchParams({
    q: text,
  });

  //Axios version on getUsers
  // const response = await githubAxios.get(`/search/users?${params}`);
  const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    headers: {
      "Content-Type": "application-json",
      // Authorization: `token ${GITHUB_TOKEN}`,
    },
  });
  const { items } = await response.json();

  return items;
  // return response.data.items;
};

// //Get a Single User
export const getGitUser = async (login) => {
  const response = await fetch(`${GITHUB_URL}/users/${login}`, {
    headers: {
      "Content-Type": "application-json",
      // Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  // If the user is not found, redirect
  if (response.status === 404) {
    window.location = "/notfound";
  } else {
    const data = await response.json();
    return data;

    // dispatch({
    //   type: "GET_USER",
    //   payload: data,
    // });
  }
};

//Get user the latests repos
export const getUserRepos = async (login) => {
  // URL Parameter
  const params = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });

  const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
    headers: {
      "Content-Type": "application-json",
      // Authorization: `token ${GITHUB_TOKEN}`,
    },
  });
  const data = await response.json();
  console.log(`User repos results are ${data}`);
  return data;
  // setUsers(data);
  // setLoading(false);
  // dispatch({
  //   type: "GET_REPOS",
  //   payload: data,
  // });
};

// export const getUserAndRepos = async (login) => {
//   //   // URL Parameter
//   const params = new URLSearchParams({
//     sort: "created",
//     per_page: 10,
//   });
//   const [user, repos] = await Promise.all([
//     githubAxios.get(`/users/${login}`),
//     githubAxios.get(`/users/${login}/repos`),
//   ]);
//   return { user: user.data, repos: repos.data };
// };
