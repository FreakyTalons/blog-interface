import React, { useState } from "react";

export default function ImageUpload({ handleSaveImg, setType, imgId }) {
  const [filePreviewURL, setFilePreviewURL] = useState();
  let base64String = "";
  const handleChange = (event) => {
    var file = event.target.files[0];
    setFilePreviewURL(URL.createObjectURL(file));
    var reader = new FileReader();
    reader.onload = () => {
      base64String = reader.result;
      sessionStorage.setItem(imgId, base64String);
    };
    reader.readAsDataURL(file);
  };

  const handleSaveClick = () => {
    handleSaveImg(imgId);
    setType(null);
  };

  const handleDeleteClick = () => {
    setType(null);
  };

  return (
    <div className="ImageUpload--div">
      <div className="inlineAdd">
        <label htmlFor="imageInput">
          <i className="main--customIcon fa-solid fa-arrow-up-from-bracket fa-2x"></i>
          Choose your Image
        </label>
        <input
          id="imageInput"
          type="file"
          accept="image/*"
          onChange={handleChange}
        />
      </div>
      <img style={{ width: "40%" }} src={filePreviewURL} alt={""}/>
      <div className="inlineAdd">
        <i
          onClick={handleSaveClick}
          className="submitIcon fa-solid fa-check fa-2x"
        ></i>
        <i
          onClick={handleDeleteClick}
          className="submitIcon fa-solid fa-xmark fa-2x"
        ></i>
      </div>
    </div>
  );
}
