import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Login from "./pages/login/Login";
import Header from "./layouts/Header";
import Layout from "./layouts/Layout";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Header를 기본으로 모든 페이지에 표시 */}
        <Route path="/" element={<Layout />}>
        
          
          <Route path="/login" element={<Login />} />
          
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
