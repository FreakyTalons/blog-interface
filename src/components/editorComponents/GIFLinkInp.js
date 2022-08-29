import React, { useState } from "react";

export default function GIFLinkInp({ handleSaveLink, setType }) {
  const [linkValue, setLinkValue] = useState();

  const handleChange = (event) => {
    const link = event.target.value;
    setLinkValue(link);
  };

  const handleSaveClick = () => {
    setType(null);
    handleSaveLink(linkValue);
  };

  const handleDeleteClick = () => {
    setType(null);
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <textarea
          onChange={handleChange}
          className="section--textInput"
          placeholder="Image/ GIF link"
          value={linkValue}
        />
        <i
          onClick={handleSaveClick}
          className="submitIcon fa-solid fa-check fa-2x"
        ></i>
        <i
          onClick={handleDeleteClick}
          className="submitIcon fa-solid fa-xmark fa-2x"
        ></i>
      </div>
      <img className="ImagePreview--img" src={linkValue} alt={""}/>
    </div>
  );
}
