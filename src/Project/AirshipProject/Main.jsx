import '../Project.css';
import React from 'react';
import YoutubeEmbed from "../../YoutubeEmbed";
import Collapsible from "../../Collapsible";
import * as Status from '../../ProjectStatus';
import * as CommonComponents from "../CommonComponents"
import * as Section from "./Section"

function Airship() {
    return (
        <div className="App">
            
            <header className="Project">
                <h2>Airship Project</h2>
                <Section.Introduction></Section.Introduction>
                <header className="Project">
                    <div class="description" style={{ "padding-left": "0%", "padding-right": "6%" }}>

                        <a href="/portfolio/#/AirshipProject/Design">
                            <p className="Hyperlink">Design/Theme</p>
                        </a>
                        <a href="/portfolio/#/AirshipProject/Stage0">
                            <p className="Hyperlink">Stage 0: Prototypes (<Status.Ongoing></Status.Ongoing>)</p>
                        </a>
                        <a href="/portfolio/#/AirshipProject/Stage1">
                            <p className="Hyperlink">Stage 1: First Playable Level (<Status.Planning></Status.Planning>)</p>
                        </a>
                        <a href="/portfolio/#/AirshipProject/Stage2">
                            <p className="Hyperlink">Stage 2: Open World (Local) (<Status.Planning></Status.Planning>)</p>
                        </a>
                        <a href="/portfolio/#/AirshipProject/Stage3">
                            <p className="Hyperlink">Stage 3: Open World (Regional) (<Status.Planning></Status.Planning>)</p>
                        </a>
                     
                    </div>
                </header>
                <CommonComponents.ReturnButton></CommonComponents.ReturnButton>
            </header>

        </div>
    );
}
export default Airship;