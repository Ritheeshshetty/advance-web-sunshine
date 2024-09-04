// import logo from './logo.svg';
// import "./App.css";
import React, { useState } from 'react'
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
// eslint-disable-next-line 
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import News from "./components/News";
import About from './components/About';
import Contact from './components/Contact';


const App=()=>{
  const pageSize=8;
  const apiKey=process.env.REACT_APP_NEWS_API
  // eslint-disable-next-line
  const [progress, setProgress] = useState(0)
  // const setProgress=0
  return (
    <div>
      <BrowserRouter>
      <NavBar />
      <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}/>
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/>}/>
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}/>
            <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}/>
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/>}/>
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/>}/>
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/>}/>
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/>}/>
            <Route exact path="/home" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}/>
            <Route exact path="/about" element={<About category="About"/> } />
            <Route exact path="/contact" element={<Contact category="contact"/> }/>
          </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
