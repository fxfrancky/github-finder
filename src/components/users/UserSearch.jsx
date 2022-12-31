import { useState, useContext } from "react";
import UserContext from "../../context/githubContext/UserContext";
import AlertContext from "../../context/alert/AlertContext";
import { searchGithubUsers } from "../../context/githubContext/GithubActions";

function UserSearch() {
  const [text, setText] = useState("");
  // Get Data from UserContext
  const { users, dispatch } = useContext(UserContext);
  //Get Data from AlertContext
  const { alert, setAlert } = useContext(AlertContext);
  const handleChange = (e) => setText(e.target.value);
  // const handleClearUsers = (e) => {
  //   e.preventDefault();
  //   clearUsers();
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text === "") {
      setAlert("Please enter something", "error");
      // alert("Please enter something");
    } else {
      dispatch({ type: "SET_LOADING" });
      const users = await searchGithubUsers(text);
      dispatch({ type: "GET_USERS", payload: users });
      setText(""); // Clear the field after search
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8 ">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search GitHub Users"
                value={text}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="absolute top-0 -right-1 rounded-l-none w-36 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* Only show the clear button when we have users */}
      {users.length > 0 && (
        <div>
          <button
            onClick={() => {
              dispatch({ type: "CLEAR_USERS" });
            }}
            className="btn btn-ghost btn-lg"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
