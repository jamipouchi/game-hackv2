import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



// We import all the components we need in our app
import Navbar from "./components/navbar";
import Home from "./components/home";
import Ranking from "./components/ranking";
import MainGame from "./components/mainGame";
import QrCall from "./components/QrCall"
import Footer from "./components/Footer";



import SnakeComp from "./components/snake";
import Group from "./components/group";
import Killer from "./components/killer";
import GraphComp from "./components/Graph";
import Logo from "./components/Logo"
import CreateRoom from "./components/createRoom";
import ShowParticipants from "./components/showParticipants";
import JoinRoom from "./components/joinRoom";
import CountdownComp from "./components/countdown";

export default function App() {
  return (

    <div>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='' element={<Logo/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/ranking' element={<Ranking/>} />
        <Route path='/mainGame' element={<MainGame/>} />
        <Route path='/snake' element={<SnakeComp/>} />
        <Route path='/killer' element={<Killer nom=""/>} />
        <Route path='/group' element={<Group/>} />
        <Route path='/scan' element={<QrCall/>} />
        <Route path='/create' element={<CreateRoom/>} />
        <Route path='/showParticipants' element={<ShowParticipants/>} />
        <Route path='/join' element={<JoinRoom/>} />
        <Route path='/theEnd' element={<GraphComp/>} />
      </Routes>
    </BrowserRouter>

    </div>
  );
};