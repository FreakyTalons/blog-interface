import React from "react";

export default function ImagePreview({ strgKey, id, handleDeleteImg }) {
  const handleDeleteClick = () => {
    handleDeleteImg(id);
  };

  return (
    <div className="ImagePreview--div">
      <img
        src={sessionStorage.getItem(strgKey)}
        className="ImagePreview--img"
        alt={""}/>
      <i
        onClick={handleDeleteClick}
        className="submitIcon fa-solid fa-xmark fa-2x"
      ></i>
    </div>
  );
}
