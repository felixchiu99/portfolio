import '../../../Project.css';
import YoutubeEmbed from "../../../../YoutubeEmbed";
import Collapsible from "../../../../Collapsible";
import * as Status from "../../../../ProjectStatus";
import React from 'react';

export default function Component() {
    return (
        <div className="App">
            
            <h4 class="description" style={{ "padding-left": "0%", "padding-right": "6%" }}>
                Rewriting Airship movement to be non-physics based.
            </h4>
            <h5 class="description">Status: <Status.Planning></Status.Planning></h5>
            <h5>Last update : 2024-04-10</h5>

            <div class="row">
                <div class="column">
                    <p class="description">
                        Given the nature of AI NPC running on deck & future networking possibility,
                        I wanted to make the movement of the airship based not on physics.
                    </p>
                    <p class="description">
                        Some Consideration include:
                    </p>
                    <ul class="description">
                        <li>
                            <Collapsible title="Basic Movements">
                                <p>
                                    TBC
                                </p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible title="Collision Simulation">
                                <p>
                                    While a simple collision check is possible, I do think that would not be immersive enough.
                                    A simple "reaction" to the collision should be included as well.
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