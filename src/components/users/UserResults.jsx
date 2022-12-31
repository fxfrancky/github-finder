import { useContext } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import UserContext from "../../context/githubContext/UserContext";

function UserResults() {
  const { users, loading } = useContext(UserContext);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          // <h3 key={user.login}>{user.login}</h3>
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;
