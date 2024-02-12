import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import Note from "./Note";
import DiaryPage from "./pages/diary/DiaryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} /> {/* 기본 홈 페이지 설정 */}
        <Route path="/note" element={<Note />} />
        <Route path="/diarypage" element={<DiaryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
