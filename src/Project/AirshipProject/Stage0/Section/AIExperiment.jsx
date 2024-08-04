import '../../../Project.css';
import * as CommonComp from "../../../../CommonComponents";
import * as Status from "../../../../ProjectStatus";
import React from 'react';

export default function Component() {
    return (
        <div className="App">
            
            <h4 class="description" style={{ "padding-left": "0%", "padding-right": "6%" }}>
                AI Experiments
            </h4>
            <h5 class="description">Status: <Status.Ongoing></Status.Ongoing></h5>
            <h5>Last update : 2024-05-22</h5>

            <div class="row">
                <div class="column">
                    <p class="description">
                        A Experiment with UE5's AI System.
                    </p>
                    <p class="description">
                        To have a living world, I would like to add some AI NPC in game.
                    </p>
                    <CommonComp.Collapsible title="My AI initial findings : ">
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
                    </CommonComp.Collapsible>

                    <br></br>

                    <CommonComp.Collapsible title="Details / To Do List: ">  
                        <ul class="description">
                            <li>
                                <CommonComp.Collapsible title="Roaming AI (Explored)">   
                                    <h4>Vision: </h4>
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

                                    <h5>Current Experiments/Prototypes </h5>
                                    <p>
                                        After following Ryan Laley's AI Tutorial, I have a brief understanding of UE5's Wonderfull AI system.
                                        With Smart objects, EQS system and AI senses, I can see how customisable and easy setting up simple, convincing NPC character can be.
                                        I have currently left the NPCs as is, so that more work can be done with the Weapon and Airship Ai.
                                    </p>

                                </CommonComp.Collapsible>
                            </li>
                            <li>
                                <CommonComp.Collapsible title="Turret AI (Explored)">          
                                    <h4>Vision: </h4>
                                    <p>
                                        The Weapon AI would be an AI that when given a target, it will rotate a turret to face that target, and will fire once it is "On target".
                                    </p>
                                    <p>
                                        If there is a fire director, the targeting will come from the fire director.
                                        However, the individual turrets would still have a targeting system which would not be as sensitive as the fire director.
                                    </p>

                                    <h5>Current Experiments/Prototypes </h5>
                                    <p>
                                        I have developed a simple Aiming AI for the Turret. The Current Method works well for stationary targets but needs better moving target tweaks.
                                    </p>
                                    <p class="description">
                                        The current Aim AI follows the logic below:
                                        <ol class="description">
                                            <li>
                                                Check if there is a fire director (Currently always false)
                                            </li>
                                            <li>
                                                <p>If there is no fire director, then If there is has a target and is not Aimed correctly, </p>
                                                then Rotate the turret Azimuth first, Then Elevation
                                            </li>
                                            <li>
                                                <p>If there is has a target and both azimuth and Elevation is Aimed correctly, </p>
                                                then Fire cannon.
                                            </li>
                                        </ol>
                                    </p>
                                    <p class="description">
                                        The current Find Target AI follows the logic below:
                                        <ol class="description">
                                            <li>
                                                If there is a Targetable object within range, Add it to a "known target list".
                                            </li>
                                            <li>
                                                Each second, the turret sorts the target by assigning scores to each target in a Map. (If a Target is Destroyed, it will be deleted from the map.)
                                                <p> (Score is based on distance, existing target, and turret limits. With favourable factor like closer distance being awarded more points and deduction for out of bounds targets)</p>
                                            </li>
                                            <li>
                                                The Target with the largest score is chosen to be the Aim target.
                                            </li>
                                            <li>
                                                Each 0.1 second, if the target is set, then it's location is stored in a FVector which the Aim Ai will use to calculate the Aim.
                                            </li>
                                        </ol>
                                    </p>

                                </CommonComp.Collapsible>
                            </li>
                            <li>
                                <CommonComp.Collapsible title="Ship AI (Ongoing)">                             
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
                                </CommonComp.Collapsible>
                            </li>
                        </ul>
                    </CommonComp.Collapsible>

                    <br></br>

                    <CommonComp.Collapsible title="Resources :">        
                        <ul class="description">
                            <li>
                                <p class="description">
                                    Ryan Laley's AI tutorial: https://www.youtube.com/watch?v=IDZh0epFTRY&list=PL4G2bSPE_8uklDwraUCMKHRk2ZiW29R6e
                                </p>
                                <p class="description">
                                    Wikipedia Projectile Motion: https://en.wikipedia.org/wiki/Projectile_motion#Angle_%CE%B8_required_to_hit_coordinate_(x,_y)
                                </p>
                            </li>

                        </ul>
                    </CommonComp.Collapsible>

                </div>
                <div class="column">
                    <div class="round">
                        <div class="round_video" style={{ background: "gray", color: "black", width: "75%", float: "Right" }}>
                            <div style={{ width: "100%", "padding-right": "1%", float: "Left" }}>
                                <CommonComp.YoutubeEmbed embedId="Lbz8k-rxJac" />
                                <p style={{ "text-align": "center", color: 'white' }}>A first look at the Turret AI</p>
                            </div>
                        </div>
                    </div>
                    <div class="round">
                        <div class="round_video" style={{ background: "gray", color: "black", width: "75%", float: "Right" }}>
                            <div style={{ width: "100%", "padding-right": "1%", float: "Left" }}>
                                <CommonComp.YoutubeEmbed embedId="nhVLTipaa5s" />
                                <p style={{ "text-align": "center", color: 'white' }}>
                                    (NPCs) The result of following Ryan Laley's AI tutorial
                                    <ol class="description">
                                        <li>
                                            Blue: smart object user (chair)
                                        </li>

                                        <li>
                                            Silver: patrol with sound interruption
                                        </li>
                                        <li>
                                            Red: Cover finding hide from player (Quite buggy)
                                        </li>
                                    </ol>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}