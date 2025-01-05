import '../Project.css';
import React from 'react';
import * as CommonComp from "../../CommonComponents";
import * as Status from '../../ProjectStatus';
import * as Subsection from "./Section"

function Main() {
    return (
        <div className="App">
            <Subsection.V030></Subsection.V030>
            <CommonComp.ReturnButton link='/portfolio' title='Back to Highlights'></CommonComp.ReturnButton>
            <br></br>
            <br></br>
        </div>
    );
}
export default Main;