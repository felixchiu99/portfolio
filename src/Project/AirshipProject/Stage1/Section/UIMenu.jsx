import '../../../Project.css';
import * as CommonComp from "../../../../CommonComponents";
import React from 'react';

export default function Component() {
    return (
        <div className="App">
            
            <h4 class="description" style={{ "padding-left": "0%", "padding-right": "6%" }}>
                UI Menu Prototype
            </h4>
            <h5 class="description">Status: <strong style={{ "color": "darkcyan" }}> Planning</strong></h5>


            <div class="row">
                <div class="column">
                    <p class="description">
                        A experiment with UE5's UI system, with the minimum goal was to start, exit, and change some systems in-game.
                    </p>
                    <p class="description">
                        Will also experiment with setting saving as well.
                    </p>
                    <ul class="description">
                        <li>
                            <CommonComp.Collapsible title="TBC">
                                
                               
                            </CommonComp.Collapsible>
                        </li>
                       
                    </ul>
                    

                </div>
                <div class="column">
                    <div class="round">
                        <div class="round_video" style={{ background: "gray", color: "black", width: "75%", float: "Right" }}>
                            <div style={{ width: "100%", "padding-right": "1%", float: "Left" }}>
                                <p style={{ "text-align": "center", color: 'white' }}>Nothing to Show yet...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}