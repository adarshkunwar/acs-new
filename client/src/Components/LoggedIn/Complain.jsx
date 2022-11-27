import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Complain = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      {/* form and image preview */}
      <div className="grid grid-cols-3 px-40 py-10">
        {/* form here */}
        <form action="" className="col-span-2">
          <div className="flex-col  space-y-3 locked-inner rounded-xl">
            {/* name */}
            <div>
              <TextField
                required
                id="standard-required"
                label="your Name"
                className="w-96"
                variant="standard"
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
                required
                id="standard-required"
                label="location of the encounter"
                variant="standard"
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
