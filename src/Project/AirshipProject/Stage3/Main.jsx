import '../../Project.css';
import React from 'react';
import YoutubeEmbed from "../../../YoutubeEmbed";
import Collapsible from "../../../Collapsible";
import * as Status from '../../../ProjectStatus';
import * as CommonComponents from "./CommonComponents"
import * as Section from "./Section"

function Airship() {
    return (
        <div className="App">
            
            <header className="Project">
                <h2>Airship Project: Stage 3</h2>
                <h3 class="description">
                    Status: <Status.Planning></Status.Planning>
                </h3>
                <Section.Introduction></Section.Introduction>

                <CommonComponents.ReturnButton></CommonComponents.ReturnButton>
            </header>

        </div>
    );
}
export default Airship;