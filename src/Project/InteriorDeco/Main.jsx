import '../Project.css';
import React from 'react';
import * as CommonComp from "../../CommonComponents";
import * as Status from '../../ProjectStatus';
import * as Subsection from "./Section"

function Main() {
    return (
        <div className="App">
            <Subsection.V012></Subsection.V012>
            <Subsection.V010></Subsection.V010>
            {/* 
            <div class="description">
                <Collapsible title="2024-06-06 InteriorDeco 1st Iteration"><Subsection.V010></Subsection.V01> </Collapsible>
            </div>
            */}
            <CommonComp.ReturnButton link='/portfolio'></CommonComp.ReturnButton>
            <br></br>
            <br></br>
        </div>
    );
}
export default Main;