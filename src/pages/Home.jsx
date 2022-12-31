import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";

function Home() {
  return (
    <>
      <UserSearch />
      <UserResults />
      {/* <h3>{process.env.REACT_APP_GITHUB_TOKEN}</h3> */}
    </>
  );
}

export default Home;
