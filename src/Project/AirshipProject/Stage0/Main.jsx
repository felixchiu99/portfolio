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
                <h2>Airship Project: Stage 0</h2>
                <h3 class="description">
                    Status: <Status.Ongoing></Status.Ongoing>
                </h3>
                <Stage0.Introduction></Stage0.Introduction>

                <h4 class="description">Ongoing</h4>
                <ul class="description">
                    <li><Collapsible title="AI Experiements (Ongoing)"> <Stage0.AIExperiment></Stage0.AIExperiment> </Collapsible></li>
                </ul>

                <h4 class="description">Completed (New to Old)</h4>
                <ul class="description">
                    <li><Collapsible title="UI Menu (Completed)"> <Stage0.UIMenu></Stage0.UIMenu> </Collapsible></li>
                    <li><Collapsible title="Airship (Completed)"> <Stage0.Airship></Stage0.Airship> </Collapsible></li>
                    <li><Collapsible title="Weapons (Completed)"> <Stage0.Weapon></Stage0.Weapon> </Collapsible></li>
                </ul>

                <h4 class="description">Planned</h4>
                <ul class="description">
                    {/* 
                        <li><Collapsible title="Airship Movement Rewrite (Planned)"> <Stage0.AirshipMovementRewrite></Stage0.AirshipMovementRewrite> </Collapsible></li>
                    */}
                    {/* 
                        <li><Collapsible title="Airship Movement Rewrite (Planned)"> <Stage0.AirshipMovementRewrite></Stage0.AirshipMovementRewrite> </Collapsible></li>
                    */}
                </ul>

                <CommonComponents.ReturnButton></CommonComponents.ReturnButton>
            </header>

        </div>
    );
}
export default Airship;