import React from "react";
import "./Note.css";
import notebookImage from "../images/Notebook.png";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
function Note({ children }) {
  return (
    <div className="note-container">
      <img src={notebookImage} alt="Notebook" className="note-image" />
        <div className="note-header">
            오늘의 하루
        </div>
        <div className="note-weather">
            (오늘의 날씨)
        </div>
        <div className="note-todoList">
            TodoList
        </div>
        <div className="note-calendar">
            <Calendar/>
        </div>
    </div>
  );
}

export default Note;
