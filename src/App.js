import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/account/login/Login";

import Layout from "./layouts/Layout";


import Note from "./layouts/Note";
import SignUp from "./pages/account/signUp/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} /> {/* 기본 홈 페이지 설정 */}

        {/* Header를 기본으로 모든 페이지에 표시 */}
        <Route path="/" element={<Layout />}>


          <Route index element={<Login />} />

          <Route path="/note" element={<Note />} />
          <Route path="/signUp" element={<SignUp />} />


        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
