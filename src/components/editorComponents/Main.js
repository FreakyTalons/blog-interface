import React, { useState } from "react";
import AddSection from "./AddSection";

export default function Main({ blogSections, setBlogSections }) {
  let val = "";

  if (blogSections[0]) {
    val = blogSections[0].content;
  }

  const [blogTitle, setBlogTitle] = useState(val);
  const [symbolType, setSymbolType] = useState(true);

  const titleEdited = (event) => {
    let titleVal = event.target.value;
    setBlogTitle(titleVal);
  };

  const handleTitleSubmit = () => {
    setBlogSections((prevValue) => {
      return [{ id: 0, type: "title", content: blogTitle }, ...prevValue];
    });
    setSymbolType((prevValue) => {
      return !prevValue;
    });
  };

  const handleTitleRemove = () => {
    const newBlogSections = blogSections.filter(
      (blogSection) => blogSection.id !== 0
    );
    setBlogSections(newBlogSections);
    setSymbolType((prevValue) => {
      setBlogTitle("");
      return !prevValue;
    });
  };
  return (
    <div className="main">
      <form onSubmit={(e) => e.preventDefault()}>
        <div style={{ display: "flex" }}>
          <input
            type="text"
            className="main--titleInput"
            placeholder="Title..."
            value={blogTitle}
            onChange={titleEdited}
          />
          {blogTitle &&
            (symbolType ? (
              <i
                onClick={handleTitleSubmit}
                className="submitIcon fa-solid fa-check fa-2x"
              ></i>
            ) : (
              <i
                onClick={handleTitleRemove}
                className="submitIcon fa-solid fa-xmark fa-2x"
              ></i>
            ))}
        </div>
        <AddSection
          blogSections={blogSections}
          setBlogSections={setBlogSections}
        />
      </form>
    </div>
  );
}
