import '../Project.css';
import React from 'react';
import YoutubeEmbed from "../../YoutubeEmbed";
import Collapsible from "../../Collapsible";
import * as Status from '../../ProjectStatus';
import * as CommonComponents from "../CommonComponents"
import * as Subsection from "./Section"

function Airship() {
    return (
        <div className="App">
            <Subsection.V012></Subsection.V012>
            <Subsection.V010></Subsection.V010>
            {/* 
            <div class="description">
                <Collapsible title="2024-06-06 InteriorDeco 1st Iteration"><Subsection.V010></Subsection.V01> </Collapsible>
            </div>
            */}
            <CommonComponents.ReturnButton></CommonComponents.ReturnButton>
            <br></br>
            <br></br>
        </div>
    );
}
export default Airship;