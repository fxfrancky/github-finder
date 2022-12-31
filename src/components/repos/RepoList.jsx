import { useContext } from "react";
import Spinner from "../layout/Spinner";
import RepoItem from "./RepoItem";

function RepoList({ repos }) {
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold cad-title">
          Latest Repositories
        </h2>
        {repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
          // <h3 key={repo.id}>{repo.name}</h3>
        ))}
      </div>
    </div>
  );
}

export default RepoList;
