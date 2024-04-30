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
            <h5 class="description">Status: <Status.Ongoing></Status.Ongoing></h5>
            <h5>Last update : 2024-04-30</h5>

            <div class="row">
                <div class="column">
                    <p class="description">
                        A Experiment with UE5's AI System.
                    </p>
                    <p class="description">
                        To have a living world, I would like to add some AI NPC in game.
                    </p>
                    <Collapsible title="My AI initial findings : ">
                        <p class="description">
                            With some testing, I have found out that nav meshs can not be atteched to moving objects (Technically you can, but it is resource consuming).
                            So the image of NPC walking around the ship cannot be easily done currently.
                        </p>
                        <p class="description">
                            With some more research, I have concluded that the airship part would need a major rethink, which will be discussed in a seperate page.
                        </p>
                        <p class="description">
                            Other than that, I also found that it would be easier to design the behaviour tree in blueprints with it's visual approach.
                            However, I would like to keep some complicated AI sensing / task in c++ for a more coherrent programming experience,
                            which also lets me to code more complex systems without being confused by the lines in blueprint coding.
                        </p>
                    </Collapsible>

                    <br></br>

                    <Collapsible title="Details / To Do List: ">  
                        <ul class="description">
                            <li>
                                <Collapsible title="Roaming AI">                             
                                    <p>
                                        NPC should be able to roam around on islands and on ship. 
                                    </p>
                                    <p>
                                        Each island would have a "Point of interest" subsystem storing related point of interest (e.g. Docks, taverns, workplace)
                                    </p>
                                    <p>
                                        Each NPC will then query the POI system for fulfilling a specific need. On getting the related location, if it has a different "AI",
                                        then the NPC will fake doing action while the actual AI handles actually doing it.
                                    </p>
                                </Collapsible>
                            </li>
                            <li>
                                <Collapsible title="Weapon AI">                             
                                    <p>
                                        The Weapon AI would be an AI that when given a target, it will rotate a turret to face that target, and will fire once it is "On target".
                                    </p>
                                    <p>
                                        If there is a fire director, the targeting will come from the fire director.
                                        However, the individual turrets would still have a targeting system which would not be as sensitive as the fire director.
                                    </p>
                                </Collapsible>
                            </li>
                            <li>
                                <Collapsible title="Ship AI">                             
                                    <p>
                                        The ship AI should have the ability to navigate to waypoints automatically.
                                        For now, I thought the best way to do it is to let the AI spawn waypoints that points towards the destination. 
                                        To Keep it simple, it would only spawn a handful of waypoint ahead of the ship with gentle curves to ensure the ship can point toward it.
                                    </p>
                                    <p>
                                        When islands are finally coded in,
                                        I planned to create static waypoints around the island so that if the path will hit the island (using a collision box around the island),
                                        the AI system should follow the static waypoints to navigate around the island.
                                    </p>
                                </Collapsible>
                            </li>
                        </ul>
                    </Collapsible>

                    <br></br>

                    <Collapsible title="Resources :">        
                        <ul class="description">
                            <li>
                                <p class="description">
                                    Ryan Laley's AI tutorial: https://www.youtube.com/watch?v=IDZh0epFTRY&list=PL4G2bSPE_8uklDwraUCMKHRk2ZiW29R6e
                                </p>
                            </li>

                        </ul>
                    </Collapsible>

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