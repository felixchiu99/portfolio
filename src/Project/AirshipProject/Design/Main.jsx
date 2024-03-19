import '../../Project.css';
import React from 'react';
import YoutubeEmbed from "../../../YoutubeEmbed";
import Collapsible from "../../../Collapsible";
import * as CommonComponents from "./CommonComponents"
import * as Design from "./Section"

function Airship() {
    return (
        <div className="App">
            
            <header className="Project">
                <h3>Airship Project: Design</h3>
                <Design.Introduction></Design.Introduction>
                <div class="row">
                    <div class="column">
                        <Design.Theme></Design.Theme>
                        
                    </div>
                    <div class="column">
                        <Design.World></Design.World>
                        
                    </div>
                    <div class="column">
                        <Design.Mechanics></Design.Mechanics>
                        
                    </div>
                </div>
                
                

                <CommonComponents.ReturnButton></CommonComponents.ReturnButton>
            </header>

        </div>
    );
}
export default Airship;