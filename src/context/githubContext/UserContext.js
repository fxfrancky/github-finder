import { createContext, useReducer } from "react";
import gitHubReducer from "./GithubReducer";

const UserContext = createContext();

// const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const UserContextProvider = ({ children }) => {
  // const [loading, setLoading] = useState(true);
  // const [users, setUsers] = useState([]);
  //Create an initial state
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(gitHubReducer, initialState);

  // useEffect(() => {
  //   fetchGithubUsers();
  // }, []);

  // const fetchGithubUsers = async () => {
  //   setLoading();
  //   const response = await fetch(`${GITHUB_URL}/users`, {
  //     headers: {
  //       "Content-Type": "application-json",
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });
  //   const data = await response.json();
  //   // setUsers(data);
  //   // setLoading(false);
  //   dispatch({
  //     type: "GET_USERS",
  //     payload: data,
  //   });
  // };

  //Set loading
  // const setLoading = () =>
  //   dispatch({
  //     type: "SET_LOADING",
  //   });
  // //Clear Users
  // const clearUsers = () =>
  //   dispatch({
  //     type: "CLEAR_USERS",
  //   });

  return (
    <UserContext.Provider
      value={{
        ...state,
        dispatch,
        // searchGithubUsers,
        // clearUsers,
        // getGitUser,
        // getUserRepos,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
