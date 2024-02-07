// Note.js

import React from "react";
import "./Note.css"; // CSS 파일을 import
import notebookImage from "./images/Notebook.png"; // 이미지를 import

function Note() {
  return (
    <div className="note-container">
      <img src={notebookImage} alt="Notebook" className="note-image" />
    </div>
  );
}

export default Note;
