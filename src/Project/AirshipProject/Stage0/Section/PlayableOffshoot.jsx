import '../../../Project.css';
import * as CommonComp from "../../../../CommonComponents";
import * as Status from "../../../../ProjectStatus";
import React from 'react';

export default function Component() {
    return (
        <div className="App">
            
            <h4 class="description" style={{ "padding-left": "0%", "padding-right": "6%" }}>
                Playable Offshoot Minigame
            </h4>
            <h5 class="description">Status: <Status.Planning></Status.Planning></h5>
            <h5>Last update : 2024-05-22</h5>

            <div class="row">
                <div class="column">
                    <p class="description">
                        With "Walking on deck" being a considerable obstacle,
                        I wanted to make something to show my ability to "complete" a playable experience before I start battling that problem.
                        I therefore came up of a basic idea of a base defence game using the current explored systems.
                    </p>
                    <p class="description">
                        The Player is a general directing an anti-air company against various invasion forces.
                        The invasion force will come in waves and in between, the player will have time to upgrade and prepare for the defences.
                    </p>

                    <p class="description">
                        
                    </p>
                    <h5 class="description">Player's role</h5>
                    <p class="description">
                        The Player will have Four main duty. 
                        <ol class="description">
                            <li>
                                <CommonComp.Collapsible title="Buy / Upgrade Anti-Air Turrets On the Island during Preparation phase.">
                                    <p>
                                        There will be slots on the island that the player can unlock with the rewards from each wave.
                                    </p>
                                </CommonComp.Collapsible>
                            </li>
                            <li>
                                <CommonComp.Collapsible title="Recruit more workers during Preparation phase.">
                                    <p>
                                        Each turret needs to be manned. As the player adds more Turrets in the area, more man power will be needed.
                                    </p>
                                </CommonComp.Collapsible>
                            </li>
                            <li>
                                <CommonComp.Collapsible title="Toogle Turret availability to react to real time threat in Defence phase.">
                                    <p>
                                        During the Invasion, I plan to have three spawn point that the invasion force will spawn at, with each wave unlocking one.
                                    </p>
                                    <p>
                                        The use of toogling each turret in defence phase is that manpower can be focused on the most needed area.
                                    </p>
                                    <p>
                                        Whichever is the most useful will be determined by the player.
                                    </p>
                                </CommonComp.Collapsible>
                            </li>
                            <li>
                                <CommonComp.Collapsible title="Man the turret to increase efficiency of a turret.">
                                    <p>
                                        As the AI controlled Turret as still quite inaccurate,
                                        the player should be allowed to man the turret themselves and boost the defences of that area.
                                    </p>
                                    <p>
                                        But that would leave other areas unmanaged and might lose the battle.
                                    </p>
                                </CommonComp.Collapsible>
                            </li>
                        </ol>
                    </p>

                    <h5 class="description">Invasion Forces</h5>
                    <p class="description">
                        I plan that the invasion force will have three types of airships.
                        <ol class="description">
                            <li>
                                A normal speed airship that carries one slow moving cannon.
                            </li>
                            <li>
                                A fast moving airship that carries one small bomb.
                            </li>
                            <li>
                                A Slow moving airship that carries multiple bomb and will win the invasion if the airship reaches the centre of the base.
                            </li>
                        </ol>
                    </p>

                    <h5 class="description">NPC</h5>
                    <p class="description">
                        There will be NPC that represents the manpower in game.
                    </p>
                    <p class="description">
                        They will have two "duties"
                        <ol class="description">
                            <li>
                                Manning the Guns
                            </li>
                            <li>
                                Carrying Ammunition to cannons.
                            </li>
                        </ol>
                    </p>

                    <h5 class="description">How this helps the next phase of development</h5>
                    <p class="description">
                        <ul class="description">
                            <li>
                                Assuming the "Move on deck" problem will be solve, I did plan on having NPC man different station on the ship.
                                This "Offshoot" will allow me to polish NPC movement related problems to prepare for that.
                            </li>
                            <li>
                                The Turret placement system will form the base of the customisable ship component system I wanted to have in Stage 2.
                            </li>
                            <li>
                                This will give me further chance to explore the limits of UE5 and be better planned for future idea.
                            </li>
                        </ul>
                    </p>

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