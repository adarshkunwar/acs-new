import React, { useState, useEffect } from "react";
import SearchResult from "./Search/SearchResult";

const Search = () => {
  const [search, setSearch] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const res = await fetch("http://localhost:8000/target");
    const user = await res.json();
    console.log(user);
    setUsers(user);
  };

  const searchChange = (e) => {
    setSearchKey(e.target.value);
  };

  useEffect(() => {
    getUsers();
  }, [searchKey]);

  return (
    <div className="w-screen h-screen relative">
      <div
        className={`flex justify-center ${search ? "py-10" : "items-center"}`}
      >
        <div className="">
          <div>
            {users.map((props) => {
              const { name } = props;
              let searchLower = searchKey.toLowerCase();
              let nameLower = name.toLowerCase();
              if (nameLower === searchLower) {
                return (
                  <div>
                    <p>{name}</p>
                  </div>
                );
              }
            })}
            <div className={`flex ${kk}`}>
              <input
                type="text"
                name=""
                id=""
                className="w-96 border-2 px-5 py-2 rounded-l-full border-gray-500 focus:outline-none"
                value={searchKey}
                onChange={(e) => setSearchKey(e.target.value)}
              />
              <button
                value="Search"
                className="bg-yellow-500 rounded-r-full px-4 py-2"
                onClick={() => setSearch(!search)}
              >
                search
              </button>
            </div>
          </div>
          {<SearchResult />}
        </div>
      </div>
    </div>
  );
};

export default Search;
