import '../../../App.css';
import React from 'react';
import * as CommonComp from "../../../CommonComponents";
import * as Status from '../../../ProjectStatus';
import Info from "../Info"

export default function Project() {
    return (
        <header className="Project">
            <h3>CSC8503 Game Technologies Coursework</h3>
            <h4>Status: <Status.Completed></Status.Completed></h4>
            <div class="row">
                <div class="column">
                    <div class="round">
                        <CommonComp.InfoDisplay class="description" Info={Info}></CommonComp.InfoDisplay>
                        <h4 class="description">
                            Game Engine: Custom C++ Engine
                        </h4>
                        <p class="description">
                            This is the coursework for the Advanced game Technologies module.
                            The main goal of this coursework is to explore the concept behind physics, AI and networked gaming mechanics.
                            <br></br><br></br>
                            My Main focus is on the networking part.
                            I spent a week implementing how to move the character and spawn players in server,
                            which I had some difficulty understanding at the beginning as the given material has left out quite a lot.
                            I have to work out quite a lot of missing feature by searching suggestion on the web and adpoting them in c++.
                            Unfortunately, due to time limitation, I could only create the bare minimum multiplayer functionality.
                            <br></br><br></br>
                            Other parts that i have made as well:
                            <br></br> -Sleeping physics object if the object is stationary for too long.
                            <br></br> -Simple Wandering AI which fled when approached.
                            <br></br> -Pathfinding AI which Pathfind to player if player is in maze.
                            <br></br><br></br>
                            The final result is a simple sandbox that had the capability of 4 simultaneous client connection, with disconnection process included.
                            <br></br><br></br>
                            (A skeleton framework is provided as a starting off point where rendering were already completed.
                            The program is written in c++ and used enet for networking)
                        </p>


                    </div>
                </div>
                <div class="column">
                    <div class="round" style={{ background: "white", color: "black" }}>
                        <h4>Goat simulator simulator</h4>
                        <CommonComp.YoutubeEmbed embedId="4VB93oPm0m0" />
                        <CommonComp.YoutubeEmbed embedId="BxJtYHKY5F4" />
                        <p class="description">
                            Basicly a shameless low quality ripoff of the original goat simulator... With a barely usable multiplayer feature.
                        </p>
                        <div>
                            <a href="https://github.com/felixchiu99/CSC8503-Game-Technologies-Coursework">
                                <button class="button">Repository</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
