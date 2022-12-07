// import { makeStyles } from "@material-ui/core";
import React, { useCallback, useState } from "react";

// const useStyles = makeStyles(() => ({
//   labelLogo: {
//     display: "flex",
//     flexDirection: "row-reverse",
//     width: "292px",
//     margin: "auto",
//     justifyContent: "space-between",
//     color: "#9A9A9C",
//     font: "inherit",
//     fontSize: "1.18676em",
//   },
//   logoContainer: {
//     margin: "auto",
//     marginTop: "40px",
//   },
//   buttonContainer: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   button: {
//     display: "flex",
//     flexDirection: "row",
//   },
//   buttonText: {
//     margin: "auto",
//   },
//   pictureContainer: {
//     height: "100px",
//     background: "white",
//     width: "100px",
//     whiteSpace: "nowrap",
//     overflow: "hidden",
//     textOverflow: "ellipsis",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundSize: "contain",
//     border: "1px solid black",
//     margin: "auto",
//   },
//   picture: {
//     maxWidth: "100%",
//     maxHeight: "100%",
//   },
// }));

const ImagePicker = ({ setImgUrl }) => {
  const [logo, setLogo] = useState("");
  // const [ selectedFile, setSelectedFile ] = useState(null)

  // const classes = useStyles();

  const handleCreateBase64 = useCallback(
    async e => {
      const file = e.target.files[0];
      const base64 = await convertToBase64(file);
      // setLogo(base64);
      setImgUrl(base64);
      e.target.value = "";
    },
    [setImgUrl]
  );

  const convertToBase64 = file => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      if (!file) {
        alert("Please select an image");
      } else {
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          resolve(fileReader.result);
        };
      }
      fileReader.onerror = error => {
        reject(error);
      };
    });
  };

  const deleteImage = e => {
    e.preventDefault();
    setLogo(null);
  };

  return (
    <div>
      <div>
        <label htmlFor="contained-button-file">
          <div>
            <div className="px-5 py-2 bigbtn bg-blue-300 rounded-xl w-fit cursor-pointer">
              <p>Choose Image</p>
            </div>
            {logo ? (
              <div>
                <p onClick={deleteImage}>Delete Image</p>
              </div>
            ) : null}
          </div>
          {logo ? (
            <span>
              <div>
                <img src={logo} alt="logo" />
              </div>
            </span>
          ) : null}
        </label>
      </div>

      <input
        id="contained-button-file"
        type="file"
        accept="image/*, png, jpeg, jpg"
        style={{ display: "none" }}
        name="logo"
        className="px-5 py-2 bg-blue-500 rounded-xl"
        onChange={handleCreateBase64}
        // onChange={onSelectFile}
      />
    </div>
  );
};

export default ImagePicker;
