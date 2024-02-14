import React from "react";
import "./Note.css";
import notebookImage from "../images/Notebook.png";

<<<<<<< HEAD
function Note({ children }) {
    return (
        <div className="note-container">
            <img src={notebookImage} alt="Notebook" className="note-image" />
            <div> {children} </div>
        </div>
    );
=======
function Note() {
  return (
    <div className="note-container">
      <img src={notebookImage} alt="Notebook" className="note-image" />
      
    </div>
  );
>>>>>>> giwon
}

export default Note;
