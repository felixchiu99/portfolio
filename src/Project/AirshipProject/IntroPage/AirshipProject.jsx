import '../../../App.css';
import * as Status from '../../../ProjectStatus';
import React, { useState } from "react";
import * as CommonComp from "../../../CommonComponents";
import Info from "../Info"

export default function Project() {
    return (
        <header className="Project">
            <h3>Airship Project</h3>
            <h4>Status: <Status.Ongoing></Status.Ongoing></h4>
            <h5>Last update : 2024-05-22</h5>
            <div class="row">
                <div class="column">
                    <div class="round">
                        <div>
                            <CommonComp.InfoDisplay class="description" Info={Info}></CommonComp.InfoDisplay>
                            <h4 class="description">
                                Game Engine: Unreal Engine 5
                            </h4>
                            <h5 class="description">
                                Current Focus: AI
                            </h5>
                            <p class="description">
                                I have always wanted to make a Airship based game in the past.
                                I started to brainstorm this idea in Unity during easter 2023, but the coursework has paused the game making process.
                            </p>
                            <p class="description">
                                Now with ongoing job Hunting, I wanted to expand my skillset.
                                So I started this project to force myself into learning how to properly use Unreal Engine 5.
                            </p>
                            <p class="description">
                                The Final Vision: A Open world first person game where the player is tasked with the controlling an Airship,
                                while the world around them has been dragged into war.
                                The player will need to choose to continue on a busisness or a military focused path in the war torned world.
                            </p>
                            <p class="description">
                                More in detail page.
                            </p>

                            <br></br>

                            <a href="/portfolio/#/AirshipProject" class="description">
                                <button class="button">Read More</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="column" >
                    <div class="round" style={{ background: "white", color: "black" }}>
                        <h4>Latest Clips</h4>
                        <div style={{ width: "100%", "padding-right": "1%", float: "Left" }}>
                            <CommonComp.YoutubeEmbed embedId="Lbz8k-rxJac" />
                            <p>A Sneakpeak to the Weapons AI System I have created.</p>
                        </div>
                        <div>
                            <a href="https://github.com/felixchiu99/AeroKingdom_Airships">
                                <button class="button">Repository</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
