import '../../App.css';
import React from 'react';
import YoutubeEmbed from "../../YoutubeEmbed";
import * as Status from '../../ProjectStatus';

export default function Project() {
    return (
        <header className="Project">
            <h3>CSC8508 InkHell (Team Project)</h3>
            <h4>Status: <Status.Completed></Status.Completed></h4>
            <div class="row">
                <div class="column">
                    <div class="round">
                        <h4 class="description">
                            Game Engine: Custom C++ Engine
                        </h4>

                        <p class="description">
                            This is the team project I worked on with 7 other teammates for the CSC8508 course.
                            The requirement is for us to ultilies a "paint" mechanic as a core gameplay feature.
                            The game we made is a 3D bullet hell where you need to survive the paint and defeat the boss.
                            <br></br><br></br>
                            My Main Contribution is the network multiplayer, player controller and general bugfixes/balancing. More in the details.
                            <br></br><br></br>

                            <br></br>

                            <a href="/portfolio/#/CSC8508">
                                <button class="button">Read More</button>
                            </a>
                        </p>
                    </div>
                </div>
                <div class="column" >
                    <div class="round" style={{ background: "white", color: "black" }}>
                        <h4>Ink Hell</h4>
                        <YoutubeEmbed embedId="TUJYlqpcz34" />
                        <p class="description">
                            Can you dodge your way to success?
                        </p>
                        <div>
                            <a href="https://github.com/blacktack2/MastersGroupProject2023">
                                <button class="button">Repository</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
