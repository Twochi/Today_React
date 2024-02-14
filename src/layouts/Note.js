import React from "react";
import "./Note.css";
import notebookImage from "../images/Notebook.png";

function Note() {
  return (
    <div className="note-container">
      <img src={notebookImage} alt="Notebook" className="note-image" draggable="false" />
      
    </div>
  );
}

export default Note;
