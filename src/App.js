import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// We import all the components we need in our app
import Navbar from "./components/navbar";
import Home from "./components/home";
import Ranking from "./components/ranking";
import MainGame from "./components/mainGame";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/ranking' element={<Ranking/>} />
        <Route path='mainGame' element={<MainGame/>} />
      </Routes>
    </BrowserRouter>
  );
};