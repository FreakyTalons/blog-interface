import React, { useState } from "react";
import Editor from "react-medium-editor";
import parse from "html-react-parser";

export default function ParaMaker({
  id,
  handleEditText,
  handleDeleteText,
  content,
}) {
  const [editable, setEditable] = useState(false);
  const [text, setText] = useState(content);
  const handleChange = (rxdValue) => {
    setText(rxdValue);
  };

  const handleDeleteClick = () => {
    handleDeleteText(id);
  };

  const handleEditClick = () => {
    setEditable((prevValue) => !prevValue);
  };

  const handleResaveClick = () => {
    setEditable((prevValue) => !prevValue);
    const tempObj = { contents: text, id: id };
    handleEditText(tempObj);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {editable ? (
        <div style={{margin:"2vh 0 2vh", width:"100%"}}><Editor
          text={text}
          onChange={handleChange}
          options={{
            placeholder: {
              text: "your text here...",
              hideOnClick: true,
            },
            toolbar: {
              buttons: [
                "bold",
                "italic",
                "anchor",
                {
                  name: "h1",
                  action: "append-h2",
                  aria: "header type 1",
                  tagNames: ["h2"],
                  contentDefault: "<b>H1</b>",
                  classList: ["custom-class-h1"],
                  attrs: {
                    "data-custom-attr": "attr-value-h1",
                  },
                },
                {
                  name: "h2",
                  action: "append-h3",
                  aria: "header type 2",
                  tagNames: ["h3"],
                  contentDefault: "<b>H2</b>",
                  classList: ["custom-class-h2"],
                  attrs: {
                    "data-custom-attr": "attr-value-h2",
                  },
                },
                "orderedlist",
                "unorderedlist",
              ],
            },
          }}
        /></div>
      ) : (
        <div style={{ width: "100%" }}>{parse(content)}</div>
      )}
      {editable ? (
        <i
          onClick={handleResaveClick}
          className="submitIcon fa-solid fa-check fa-2x"
        ></i>
      ) : (
        <i
          onClick={handleEditClick}
          className="submitIcon fa-regular fa-pen-to-square fa-2x"
        ></i>
      )}
      <i
        onClick={handleDeleteClick}
        className="submitIcon fa-solid fa-xmark fa-2x"
      ></i>
    </div>
  );
}
