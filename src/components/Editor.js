import React, { useState } from "react";
import Header from "./Header";
import Main from "./editorComponents/Main";
import Preview from "./Preview";
import Publish from "./Publish";
import Published from "./Published";

export default function Editor() {
  const [blog, setBlog] = useState({});
  const [blogSections, setBlogSections] = useState([]);
  const [editorDisplay, setEditorDisplay] = useState(true);
  const [publishPage, setPublishPage] = useState(false);
  const [publishSuccess, setPublishSuccess] = useState(false);

  const togglePreview = () =>
  {
    setEditorDisplay( prevValue => !prevValue)
  }

  const togglePublish = () =>
  {
    setPublishPage(prevValue => !prevValue)
  }

  const handlePublishBlog = (prevDeets) =>
  {
    const newBlog = {...prevDeets,...blogSections}
    setBlog(newBlog)
    setPublishSuccess(prevValue => !prevValue)
  }

  return (
    <div className="editor">
      <Header togglePreview={togglePreview} togglePublish={togglePublish} setPublishSuccess={setPublishSuccess}/>
      {editorDisplay? <Main blogSections={blogSections} setBlogSections={setBlogSections} />:(publishPage?(publishSuccess?<Published/>:<Publish handlePublishBlog={handlePublishBlog} />):<Preview blogSections={blogSections}/>)}
    </div>
  );
}
