import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import Navbar from "./components/navbar";
import Home from "./components/home";
import Ranking from "./components/ranking";
import MainGame from "./components/mainGame";
import Footer from "./components/Footer";


export default function App() {
  return (

    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/ranking' element={<Ranking/>} />
            <Route path='mainGame' element={<MainGame/>} />
        </Routes>
    </BrowserRouter>
        <Footer></Footer>
    </div>
  );
};