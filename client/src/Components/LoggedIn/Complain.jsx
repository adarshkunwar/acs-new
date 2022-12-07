import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";

import axios from "axios";
// import Button from "@mui/material/Button";
import ImagePicker from "./Search/imagePicker";

const Complain = props => {
  const [imgUrl, setImgUrl] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    targetname: "",
    position: "",
    location: "",
    image: "",
    description: "",
  });

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      image: imgUrl,
    }));
    console.log(imgUrl);
  }, [imgUrl]);

  const handleOnChange = event => {
    setFormData(prev => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  // ahiley last ma explain garxuh

  const handleSubtmit = async event => {
    event.preventDefault();
    const { data } = await axios.post(
      "http://localhost:8000/target/add",
      formData
    );
    // console.log("daraalfk", adarsh);
    console.log(data, "data");
    if (data) {
      props.setActiveTab("search");
    }
  };

  // username: "",
  // targetname: "",
  // position: "",
  // location: "",
  // image: "",
  // description: "",

  useEffect(() => {
    console.log("formdata", formData);
  }, [formData]);

  // create a preview as a side effect, whenever selected file is changed

  return (
    <div className="h-screen flex items-center justify-center">
      {/* form and image preview */}
      <div className="grid grid-cols-3 px-40 py-10">
        {/* form here */}
        <form action="" className="col-span-2" onSubmit={handleSubtmit}>
          <div className="flex-col  space-y-3 locked-inner rounded-xl">
            {/* name */}
            <div>
              <TextField
                value={formData.username}
                name="username"
                required
                id="standard-required"
                label="your Name"
                className="w-96"
                variant="standard"
                onChange={handleOnChange}
              />
            </div>
            {/* target */}
            <div>
              <TextField
                required
                id="standard-required"
                label="Your target"
                name="targetname"
                variant="standard"
                value={formData.targetname}
                onChange={handleOnChange}
              />
            </div>
            {/* position */}
            <div>
              <TextField
                required
                id="standard-required"
                label="position of the target"
                variant="standard"
                name="position"
                value={formData.position}
                onChange={handleOnChange}
              />
            </div>
            {/* location */}
            <div>
              <TextField
                value={formData.location}
                name="location"
                required
                id="standard-required"
                label="location of the encounter"
                variant="standard"
                onChange={handleOnChange}
              />
            </div>
            <div>
              <TextField
                id="standard-multiline-static"
                label="description"
                multiline
                // rows={4}
                className="w-96"
                variant="standard"
                name="description"
                value={formData.description}
                onChange={handleOnChange}
              />
            </div>
            {/* image upload */}
            <div className="flex items-center">
              <ImagePicker
                setImgUrl={setImgUrl}
                name="image"
                value={formData.image}
                onChange={handleOnChange}
                // setSelectedFile={setSelectedFile}
              />
              <div className="text-red-400 text-md px-2">
                * image size should be lower 100kb
              </div>
            </div>
            <div className="flex justify-end">
              <button type="submit" className="bigbtn bg-yellow-300">
                Submit
              </button>
            </div>
          </div>
        </form>
        <div className="w-80 h-80 border-2 flex locked-inner rounded-3xl jusify-center items-center text-2xl">
          {!imgUrl ? (
            <div>Image is previewed here</div>
          ) : (
            <img src={imgUrl} alt="" className="w-80 h-80 object-cover " />
          )}
        </div>
      </div>
    </div>
  );
};

export default Complain;
