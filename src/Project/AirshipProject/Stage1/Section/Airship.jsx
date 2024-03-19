import '../../../Project.css';
import YoutubeEmbed from "../../../../YoutubeEmbed";
import Collapsible from "../../../../Collapsible";
import React from 'react';

export default function Component() {
    return (
        <div className="App">
            
            <h4 class="description" style={{ "padding-left": "0%", "padding-right": "6%" }}>
                Airship Prototype
            </h4>
            <h5 class="description">Status: <strong style={{ "color": "cyan" }}>Ongoing</strong></h5>


            <div class="row">
                <div class="column">
                    <p class="description">
                        The Airship is the key for this project, where the player should be staying for most of their time.
                        There are a few system I wanted to make in this prototype
                    </p>
                    <ul class="description">
                        <li>
                            <Collapsible title="Basic Movement">
                                <p>
                                    The first priority would be having an Airship-like movement system for the Airship system working.
                                    This will probably be spilt into two parts: The Airship Helm and The airship itself.
                                </p>
                                <p>
                                    The Helm would be the in-game transition block for the receiving the airship inputs.
                                </p>
                                <p>
                                    The Airship translate the input and converts to movement.
                                </p>
                                <p>
                                    The movement will only consist of Forward/Backwards and Up/Down movements,
                                    whereas the left/right movement will only be activated with some forward or backwards movement.
                                </p>
                                <p>
                                    I will also only consider a fully balanced airship at first,
                                    but I do want to modify it further down the line so that mass distribution will affect flight characteristics as well.
                                </p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible title="On board Walkaround">
                                <p>
                                    I imagined that the player should be allowed to walk around on the ship.
                                    However, there are some stories about UE character not doing well natively in moving platforms.
                                </p>
                                <p>
                                    Will need to test if this is true, and if so, come up with a solution.
                                </p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible title="Mount / Ship Components">
                                <p>
                                    If the character can walk around the ship with ease,
                                    then I will also work on the bases for adding Ship components on the ship.
                                    These will be expanded for future ship customisation systems.
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