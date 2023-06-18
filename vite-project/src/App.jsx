//import React, { useEffect } from 'react'

import {Link, Route,Routes,useNavigate} from "react-router-dom"

import Home from "./assets/component/Home";

import React,{ useState,useEffect } from "react";

import EidCard from "./assets/component/EidCard";
import EidCardName from "./assets/component/EidCardName";
           

import axios from 'axios';

function App() {

  return (
<>
<Routes>

  <Route path="/" element={<Home></Home>}></Route>
  <Route path="/EidCard" element={<EidCard></EidCard>}></Route>
  <Route path="/EidCardName/:name" element={<EidCardName></EidCardName>}></Route>
  <Route path="/EidCardName" element={<EidCardName></EidCardName>}></Route>

</Routes>



</>
  )
}

export default App
