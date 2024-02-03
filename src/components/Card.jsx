import React from "react";

function Card({ repo }) {
  return (
    <>
      <div className="bg-slate-700 w-9/12 h-auto p-4 my-4 justify-center items-center mx-auto">
        <h3>Repo Name: {repo.name}</h3>
        <p>Repo Description: {repo.description}</p>
        <p>Repo URL: {repo.html_url}</p>
        <p>Repo Stars: {repo.stars}</p>
        <p>Repo Forks: {repo.forks}</p>
        <p>Repo Watchers: {repo.watchers}</p>
        <p>Repo Language: {repo.language}</p>
      </div>
    </>
  );
}

export default Card;
