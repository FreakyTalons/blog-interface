import React, { useState } from "react";
import Editor from "react-medium-editor"; // make a alltypes.d.ts containing "declare module 'react-medium-editor';" file in @types

require("medium-editor/dist/css/medium-editor.css");
require("medium-editor/dist/css/themes/beagle.css");

export default function TextareaMaker({ handleSaveText, setType }) {
  const [text, setText] = useState();

  const handleChange = (rxdValue) => {
    setText(rxdValue);
  };

  const handleSaveClick = () => {
    setType(null);
    handleSaveText(text);
  };

  const handleDeleteClick = () => {
    setType(null);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Editor
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
      />
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
