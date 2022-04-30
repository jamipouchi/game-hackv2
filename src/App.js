import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


// We import all the components we need in our app
import Navbar from "./components/navbar";
import Home from "./components/home";
import Ranking from "./components/ranking";
import MainGame from "./components/mainGame";
import SnakeComp from "./components/snake";
import Group from "./components/group";
import Killer from "./components/killer";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/ranking' element={<Ranking/>} />
        <Route path='/mainGame' element={<MainGame/>} />
        <Route path='/snake' element={<SnakeComp/>} />
        <Route path='/killer' element={<Killer/>} />
        <Route path='/group' element={<Group/>} />
      </Routes>
    </BrowserRouter>
  );
};