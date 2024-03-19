import '../../App.css';
import React from 'react';
import YoutubeEmbed from "../../YoutubeEmbed";
import * as Status from '../../ProjectStatus';

export default function Project() {
    return (
        <header className="Project">
            <h3>CSC8599 StuBrew: A VR Brewing experience</h3>
            <h4>Status: <Status.Completed></Status.Completed></h4>
            <div class="row">
                <div class="column">
                    <div class="round">
                        <div>
                            <h4 class="description">
                                Game Engine: Unity
                            </h4>

                            <p class="description">
                                This project serve as the dissertation project for my game engineering masters degree.
                                StuBrew is a student-run microbrewery in newcastle university
                                and this project was created with their use when they attend brewing festivals in mind.
                            </p>
                            <p class="description">
                                It is a single person project about showing people the in's and out's of brewing beer.
                                The player can brew beers and sell it at a "stall", which was similar to the StuBrew's regular operations.
                            </p>
                            <p class="description">
                                The Final game is playable in both VR and in standard PC.
                            </p>

                            <br></br>

                            <a href="/portfolio/#/CSC8599" class="description">
                                <button class="button">Read More</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="column" >
                    <div class="round" style={{ background: "white", color: "black" }}>
                        <h4>StuBrew: Demo</h4>
                        <YoutubeEmbed embedId="DK0heSvBuV8" />
                        <p class="description">
                            Brewing and Selling to your hearts content.
                        </p>
                        <div>
                            <a href="https://github.com/felixchiu99/StuBrew">
                                <button class="button">Repository</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
