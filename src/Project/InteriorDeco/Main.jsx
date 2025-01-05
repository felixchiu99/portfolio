import '../Project.css';
import React from 'react';
import * as CommonComp from "../../CommonComponents";
import * as Status from '../../ProjectStatus';
import * as Subsection from "./Section"

function Main() {
    return (
        <div className="App">
            <Subsection.V013></Subsection.V013>
            <Subsection.V012></Subsection.V012>
            <Subsection.V011></Subsection.V011>
            <CommonComp.ReturnButton link='/portfolio' title='Back to Highlights'></CommonComp.ReturnButton>
            <br></br>
            <br></br>
        </div>
    );
}
export default Main;