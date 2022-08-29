import React from "react";

export default function ImagePreview({ handleDeleteLink, id, content }) {
  const handleDeleteClick = () => {
    handleDeleteLink(id);
  };

  return (
    <div className="ImagePreview--div">
      <img src={content} className="ImagePreview--img" alt={""} />
      <i
        onClick={handleDeleteClick}
        className="submitIcon fa-solid fa-xmark fa-2x"
      ></i>
    </div>
  );
}
