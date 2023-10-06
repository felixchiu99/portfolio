import './App.css';
import React from 'react';
import { Route, Routes, Link } from "react-router-dom";
import Home from './Home/Home';
import ArcheryVR from './Project/ArcheryVR';
import CSC8508 from './Project/CSC8508TeamProject';
import CSC8599 from './Project/CSC8599StuBrew';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} >
                </Route>
                <Route path="/CSC8599" element={<CSC8599 />} >
                </Route>
                <Route path="/ArcheryVR" element={<ArcheryVR />} >
                </Route>
                <Route path="/CSC8508" element={<CSC8508 />} >
                </Route>
            </Routes>
        </div>
    );
}

export default App;
