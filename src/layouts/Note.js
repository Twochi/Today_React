import React from "react";
import "./Note.css";
import notebookImage from "../images/Notebook.png";

function Note({ children }) {
  return (
    <div className="note-container">
      <img src={notebookImage} alt="Notebook" className="note-image" />
      <div> {children} </div>
    </div>
  );
}

export default Note;
