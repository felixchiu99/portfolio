import '../../Project.css';
import React from 'react';
import YoutubeEmbed from "../../../YoutubeEmbed";
import Collapsible from "../../../Collapsible";
import * as Status from '../../../ProjectStatus';
import * as CommonComponents from "./CommonComponents"
import * as Stage0 from "./Section"

function Airship() {
    return (
        <div className="App">
            
            <header className="Project">
                <h3>Airship Project: Stage 0</h3>
                <h4 class="description">
                    Status: <Status.Ongoing></Status.Ongoing>
                </h4>
                <Stage0.Introduction></Stage0.Introduction>

                <ul class="description">
                    <li><Collapsible title="Weapons (Completed)"> <Stage0.Weapon></Stage0.Weapon> </Collapsible></li>
                    <li><Collapsible title="Airship (Ongoing)"> <Stage0.Airship></Stage0.Airship> </Collapsible></li>
                    <li><Collapsible title="UI Menu (Planning)"> <Stage0.UIMenu></Stage0.UIMenu> </Collapsible></li>
                </ul>

                <CommonComponents.ReturnButton></CommonComponents.ReturnButton>
            </header>

        </div>
    );
}
export default Airship;