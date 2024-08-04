import '../../Project.css';
import React from 'react';
import * as CommonComp from "../../../CommonComponents";
import * as Status from '../../../ProjectStatus';
import * as Section from "./Section"

function Airship() {
    return (
        <div className="App">
            
            <header className="Project">
                <h2>Airship Project: Stage 1</h2>
                <h3 class="description">
                    Status: <Status.Planning></Status.Planning>
                </h3>
                <Section.Introduction></Section.Introduction>

                

                <CommonComp.ReturnButton link='/portfolio/#/AirshipProject'></CommonComp.ReturnButton>
            </header>

        </div>
    );
}
export default Airship;