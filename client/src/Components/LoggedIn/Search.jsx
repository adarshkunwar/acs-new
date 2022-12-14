import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchResult from "./Search/SearchResult";
import SearchList from "./Search/SearchList";
import back from "../../img/coa.jpg";
const Search = () => {
  const [searchKeyWord, setSearchKeyWord] = useState("");
  const [searchActive, setSearchActive] = useState(false);
  const [dataPresent, setDataPresent] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [data, setData] = useState([]);
  {
    /* 
  const [search, setSearch] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  const [users, setUsers] = useState([]);
  */
  }
  const getUsers = async () => {
    const result = await axios.get("http://localhost:8000/target");
    console.log(result.data);
    setData(result.data);
    {
      /* 
    const res = await fetch("http://localhost:8000/target");
    const users = await res.json();
    console.log(users);
    setUsers(users); 
    */
    }
  };

  const clearData = event => {
    event.preventDefault();

    setSearchActive(false);
    setDataPresent(false);
    setFilteredData(null);
    setSearchKeyWord("");
  };

  const handleSearch = event => {
    const searchWord = event.target.value;
    setSearchKeyWord(event.target.value);
    const newFilter = data.filter(value => {
      return value.targetname.includes(searchWord);
    });

    if (!searchWord) {
      setSearchActive(false);
      setDataPresent(false);
      setFilteredData(null);
    } else {
      setSearchActive(true);
      setDataPresent(true);
      setFilteredData(newFilter);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="w-screen h-screen relative">
      <div className="absolute select-none">
        <img
          src={back}
          alt=""
          className="w-screen select-none h-screen object-contain mt-10 opacity-10"
        />
      </div>
      <div
        className={`flex absolute transition-all duration-300 left-1/2 -translate-x-1/2 ${
          searchActive ? "top-16" : "top-1/2 -translate-x-1/2"
        } `}
      >
        <div className="">
          <div>
            <div className={`flex`}>
              <input
                type="text"
                name=""
                id=""
                className="w-96 border-2 px-5 py-2 rounded-l-full border-gray-500 focus:outline-none"
                onChange={handleSearch}
              />
              <button
                value="Search"
                className="bg-yellow-500 rounded-r-full px-4 py-2"
                onClick={() => setDataPresent(!dataPresent)}
              >
                search
              </button>
            </div>
          </div>
          <div
            className={`flex justify-center py-16 ${
              dataPresent ? "block" : "hidden"
            }`}
          >
            <div className="flex-col space-y-3">
              {filteredData?.map(item => (
                <SearchList
                  key={item.id}
                  username={item.username}
                  targetname={item.targetname}
                  location={item.location}
                  position={item.position}
                  description={item.description}
                  image={item.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
