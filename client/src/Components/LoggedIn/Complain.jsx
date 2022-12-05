import React, { useEffect , useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios"
import Button from "@mui/material/Button";

const Complain = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
  });

  const handleOnChange =(event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  }

  // ahiley last ma explain garxuh

  const handleSubtmit = async (event) => {
    event.preventDefault()
    const { data } = await axios.post("http://localhost:8000/target/add", formData)
    console.log(data,  "data")
  } 

  useEffect( () => {
    console.log("formdaa", formData)
  }, [formData])
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
                value={formData.name}
                name="name"
                required
                id="standard-required"
                label="your Name"
                className="w-96"
                variant="standard"
                onChange={handleOnChange}
              />
            </div>
            <div>
              {/* title */}
              <TextField
                required
                id="standard-required"
                label="title"
                className="w-[30rem]"
                variant="standard"
              />
            </div>
            {/* target */}
            <div>
              <TextField
                required
                id="standard-required"
                label="Your target"
                variant="standard"
              />
            </div>
            {/* position */}
            <div>
              <TextField
                required
                id="standard-required"
                label="position of the target"
                variant="standard"
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
              />
            </div>
            {/* image upload */}
            <div>
              <Button variant="contained" component="label">
                Upload the image
                <input hidden accept="image/*" multiple type="file" />
              </Button>
            </div>
            <div className="flex justify-end">
              <button type="submit" className="bigbtn bg-yellow-300">
                Submit
              </button>
            </div>
          </div>
        </form>
        <div className="h-96 border-2 flex locked-inner rounded-3xl jusify-center items-center text-2xl">
          <div>Image is previewed here</div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Complain;
