import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Home/home";
import Auth from "../Auth/auth";
import Action from "../Action/action";
import About from "../About/about";
import Details from "../Details/details";
import Header from "../Common/Header";
import Globe from "../Globes/globe";
import Register from "../Register/register";
import Dashboard from "../Dashboard/dashboard";
import Pabout from "../Pabout/pabout";
import Certificate from "../Certificate/certificate";
import Projectview from "../Projectview/project";
import Upload from "../Upload/uploadcert";
import Project from "../Project/uploadpro";
import Footer from "../Footer/footer";


const Pages = () => {
  return (
    <Router>       
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/about' element={<About />} />
        <Route path='/details' element={<Details />} />
        <Route path='/header' element={<Header />} />
        <Route path='/globe' element={< Globe />} />
        <Route path='/register' element={< Register />} />
        <Route path='/dashboard' element={< Dashboard />} />
        <Route path='/pabout' element={< Pabout />} />
        <Route path='/certificate' element={< Certificate />} />
        <Route path='/project' element={< Projectview />} />
        <Route path='/uploadcert' element={< Upload />} />
        <Route path='/action' element={< Action />} />
        <Route path='/uploadpro' element={< Project />} />
        <Route path='/footer' element={< Footer />} />
      </Routes>
    </Router>
    
  );
};

export default Pages;
