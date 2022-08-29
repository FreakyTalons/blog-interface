import React, { useState } from "react";
import ImagePreview from "./ImagePreview";
import ImageUpload from "./ImageUpload";
import TextareaMaker from "./TextareaMaker";
import ParaMaker from "./ParaMaker";
import GIFLinkInp from "./GIFLinkInp";
import GIFPreview from "./GIFPreview";
import { nanoid } from "nanoid";

export default function AddSection({ blogSections, setBlogSections }) {
  const [addSectionsTab, setAddSectionsTab] = useState(false);
  const [type, setType] = useState(null);
  const [count, setCount] = useState(0);
  const handlePlusClick = () => {
    document.getElementById("plus").classList.toggle("tilt");
    setAddSectionsTab((prevValue) => {
      return !prevValue;
    });
  };

  const addTextSection = () => {
    setType("text");
  };

  const addImageSection = () => {
    setCount(count + 1);
    setType("image");
  };

  const addGIFSection = () => {
    setType("gif");
  };

  const handleSaveText = (textValue) => {
    let sectionIdTxt = nanoid();
    let tempObj = { id: sectionIdTxt, type: "text", content: textValue };
    setBlogSections(() => [...blogSections, tempObj]);
  };

  const handleEditText = ({ contents, id }) => {
    const newBlogSections = [];
    const editorFunction = (sec) => {
      if (sec.id === id) {
        let tempObj = {
          id: id,
          type: "text",
          content: contents,
        };
        newBlogSections.push(tempObj);
      } else {
        let tempObj = { ...sec };
        newBlogSections.push(tempObj);
      }
    };
    blogSections.forEach(editorFunction);
    setBlogSections(newBlogSections);
  };

  const handleDeleteSection = (id) => {
    const newBlogSections = blogSections.filter(
      (blogSection) => blogSection.id !== id
    );
    setBlogSections(newBlogSections);
  };

  //image

  const handleSaveImg = (id) => {
    let sectionIdImg = nanoid();
    let tempObj = { id: sectionIdImg, type: "image", strgKey: id };
    console.log(id);
    setBlogSections(() => [...blogSections, tempObj]);
  };


  //GIF link

  const handleSaveLink = (linkValue) => {
    let sectionIdTxt = nanoid();
    let tempObj = { id: sectionIdTxt, type: "gif", content: linkValue };
    setBlogSections(() => [...blogSections, tempObj]);
  };


  const createSection = (section) => {
    switch (section.type) {
      case "text": {
        return (
          <ParaMaker
            id={section.id}
            handleEditText={handleEditText}
            handleDeleteText={handleDeleteSection}
            content={section.content}
          />
        );
      }
      case "image": {
        return (
          <ImagePreview
            strgKey={section.strgKey}
            handleDeleteImg={handleDeleteSection}
            id={section.id}
          />
        );
      }
      case "gif": {
        return (
          <GIFPreview
            handleDeleteLink={handleDeleteSection}
            id={section.id}
            content={section.content}
          />
        );
      }
    }
  };
  console.log(blogSections);
  return (
    <div>
      {blogSections.map(createSection)}
      <i
        id="plus"
        onClick={handlePlusClick}
        className="main--customIcon fa-solid fa-plus fa-2x"
      ></i>
      <div style={{ display: addSectionsTab ? "inline" : "none" }}>
        <i
          onClick={addTextSection}
          className="main--customIcon fa-regular fa-file-lines fa-2x"
        ></i>
        <i
          onClick={addGIFSection}
          className="main--customIcon fa-solid fa-link fa-2x"
        ></i>
        <i
          onClick={addImageSection}
          className="main--customIcon fa-regular fa-file-image fa-2x"
        ></i>
      </div>
      <div style={{ margin: "3vh auto" }}>
        {type === "text" ? (
          <TextareaMaker handleSaveText={handleSaveText} setType={setType} />
        ) : type === "image" ? (
          <ImageUpload
            handleSaveImg={handleSaveImg}
            setType={setType}
            imgId={"IMG" + count}
          />
        ) : type === "gif" ? (
          <GIFLinkInp handleSaveLink={handleSaveLink} setType={setType} />
        ) : null}
      </div>
    </div>
  );
}
