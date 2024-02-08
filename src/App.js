import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import Header from "./layouts/Header";
import Layout from "./layouts/Layout";


import Note from "./Note";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} /> {/* 기본 홈 페이지 설정 */}
        <Route path="/note" element={<Note />} />
        {/* Header를 기본으로 모든 페이지에 표시 */}
        <Route path="/" element={<Layout />}>
        
          
          <Route path="/login" element={<Login />} />
          
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
