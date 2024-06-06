import './App.css';
import React from 'react';
import { Route, Routes, Link } from "react-router-dom";
import Home from './Home/Home';
import ArcheryVR from './Project/ArcheryVR';
import CSC8508 from './Project/CSC8508TeamProject';
import CSC8599 from './Project/CSC8599StuBrew';
import AirshipProject from './Project/AirshipProject/Main';
import AirshipDesign from './Project/AirshipProject/Design/Main';
import AirshipStage0 from './Project/AirshipProject/Stage0/Main';
import AirshipStage1 from './Project/AirshipProject/Stage1/Main';
import AirshipStage2 from './Project/AirshipProject/Stage2/Main';
import AirshipStage3 from './Project/AirshipProject/Stage3/Main';

import InteriorDeco from './Project/InteriorDeco/Main';

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
                <Route path="/AirshipProject" element={<AirshipProject />} >
                </Route>
                <Route path="/AirshipProject/Design" element={<AirshipDesign />} >
                </Route>
                <Route path="/AirshipProject/Stage0" element={<AirshipStage0 />} >
                </Route>
                <Route path="/AirshipProject/Stage1" element={<AirshipStage1 />} >
                </Route>
                <Route path="/AirshipProject/Stage2" element={<AirshipStage2 />} >
                </Route>
                <Route path="/AirshipProject/Stage3" element={<AirshipStage3 />} >
                </Route>
                <Route path="/InterDeco" element={<InteriorDeco />} >
                </Route>
            </Routes>
        </div>
    );
}

export default App;
