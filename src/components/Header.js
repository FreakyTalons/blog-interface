import React, { useState } from "react";
import logo from "../assets/blog_logo.png";
export default function Header({
  togglePreview,
  togglePublish,
  setPublishSuccess,
}) {
  const [btText, setBtText] = useState(true);
  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    setBtText((prevValue) => !prevValue);
    togglePreview();
  };

  const handlePublish = () => {
    togglePublish();
    setVisible((prevValue) => !prevValue);
  };

  const handleBack = () => {
    togglePublish();
    setVisible((prevValue) => !prevValue);
    setPublishSuccess();
  };

  return (
    <header>
      <div className="header--planeDiv">
        <img className="header--logoImg" src={logo} alt={""} />
      </div>
      {visible ? (
        <>
          <button className="bt" onClick={handleClick}>
            {btText ? "Preview" : "Editor"}
          </button>
          {!btText && (
            <button className="bt" onClick={handlePublish}>
              Publish
            </button>
          )}
        </>
      ) : (
        <button className="bt" onClick={handleBack}>
          Back
        </button>
      )}
    </header>
  );
}
