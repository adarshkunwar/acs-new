import React from "react";

const SearchList = ({
  username,
  targetname,
  position,
  location,
  description,
  image,
}) => {
  return (
    <div className="w-[30rem]">
      <div className="flex items-center border-2 py-1 px-1 gap-10 rounded-xl">
        <div className="imgw w-36 h-36 border-2 rounded-lg">
          <img
            src={image}
            alt="image not present"
            className="w-36 h-36 object-cover"
          />
        </div>
        <div className="text">
          <div>Target name: {targetname}</div>
          <div>Target Location: {location}</div>
          <div>Description {description}</div>
        </div>
      </div>
    </div>
  );
};

export default SearchList;
