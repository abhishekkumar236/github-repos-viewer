import React, { useState } from "react";
import { getRepos } from "./Github/index";
import Card from "./components/Card";

function App() {
  const [keywords, setKeywords] = useState("");
  const [repos, setRepos] = useState([]);

  function handleSearch(e) {
    e.preventDefault();
    getRepos(keywords).then((data) => {
      setRepos(data.items);
    });
  }
  return (
    <>
      <form
        className="flex justify-center gap-3 items-center h-24"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          placeholder="Enter keywords..."
          className="border border-sky-500 placeholder:italic placeholder:text-slate-400 block bg-slate-800 w-6/12 rounded-md py-2 pl-9 pr-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-lg"
          onChange={(e) => setKeywords(e.target.value)}
        />
        <button
          type="submit"
          value="Search"
          className="bg-sky-600 py-2 px-4 rounded-xl font-semibold text-lg"
          onClick={handleSearch}
        >
          Search
        </button>
      </form>
      <div className="flex flex-col gap-6 justify-center items-center fkex-wrap w-full">
        {repos.length > 0 &&
          repos.map((repo) => <Card repo={repo} key={repo.id} />)}
      </div>
    </>
  );
}

export default App;
