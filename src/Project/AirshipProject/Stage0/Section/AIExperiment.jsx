import '../../../Project.css';
import YoutubeEmbed from "../../../../YoutubeEmbed";
import Collapsible from "../../../../Collapsible";
import * as Status from "../../../../ProjectStatus";
import React from 'react';

export default function Component() {
    return (
        <div className="App">
            
            <h4 class="description" style={{ "padding-left": "0%", "padding-right": "6%" }}>
                AI Experiments
            </h4>
            <h5 class="description">Status: <Status.Planning></Status.Planning></h5>
            <h5>Last update : 2024-04-30</h5>

            <div class="row">
                <div class="column">
                    <p class="description">
                        A Experiment with UE5's AI System.
                    </p>
                    <p class="description">
                        
                    </p>
                    <ul class="description">
                        <li>
                            <Collapsible title="Main Menu">
                                <p>
                                    The Main Menu should have the following button.
                                    <ul class="description">
                                        <li>
                                            Level Select : For choosing a scene to load.
                                        </li>
                                        <li>
                                            Settings : For Changing the settings.
                                        </li>
                                        <li>
                                            Quit : For Quiting the game.
                                        </li>
                                    </ul>
                                </p>
                                <p>
                                    The level Select should show all related prototype for stage 0.
                                    Which can be changed later on in stage 1.
                                </p>
                            </Collapsible>
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