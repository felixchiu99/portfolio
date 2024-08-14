import '../Project.css';
import React from 'react';
import * as CommonComp from "../../CommonComponents";
import * as Subsection from "./Section"

function Main() {
    return (
        <div className="App">
            <Subsection.V010></Subsection.V010>
            <CommonComp.ReturnButton link='/portfolio'></CommonComp.ReturnButton>
            <br></br>
            <br></br>
        </div>
    );
}
export default Main;