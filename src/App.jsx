import React from "react";
import Login from "./Components/Login";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Profile from "./Components/Profile";
import Post from "./Components/Post";
import Gallery from "./Components/Gallery";
import ToDo from "./Components/ToDO";
import SecondProfile from "./Components/SecondProfile";

const App = () => {
    return ( 
        <BrowserRouter>
            <div id="app-container">
               <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/profile" element = {<Profile/>}/>
                  <Route path="/post"  element = {<Post/>}/>
                  <Route path="/gallery" element = {<Gallery/>}/>
                  <Route path="/todo" element = {<ToDo/>}/>
                  <Route path="/anotherProfile" element ={<SecondProfile/>}/>
               </Routes>
            </div>
        </BrowserRouter>
     );
}

export default App;