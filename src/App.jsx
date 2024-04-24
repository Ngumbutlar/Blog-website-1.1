import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import BlogDetail from "./pages/BlogDetail";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="blog-detail/:id" element={<BlogDetail />}></Route>
      </Routes>
    </>
  );
}

export default App;
