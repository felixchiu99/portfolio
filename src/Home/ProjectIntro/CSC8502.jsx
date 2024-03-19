import '../../App.css';
import React from 'react';
import YoutubeEmbed from "../../YoutubeEmbed";
import * as Status from '../../ProjectStatus';

export default function Project() {
    return (
        <header className="Project">
            <h3>CSC8502 Game Graphic Coursework</h3>
            <h4>Status: <Status.Completed></Status.Completed></h4>
            <div class="row">
                <div class="column">
                    <div class="round">
                        <p class="description">
                            This is the coursework for the Advanced Graphic for Games module.
                            The main goal of this coursework is to make use of graphic and rendering concept learnt during the module to create a scene themed around the game Elden Rings.
                            <br></br><br></br>
                            The scene uses:
                            <br></br>
                            -Scene nodes for fast mesh placement
                            <br></br>
                            -Deferred rendering for efficient rendering of multiple lights.
                            <br></br>
                            -Day night cycle created by moving a direction light
                            <br></br>
                            -Blending textures in a heightmap created terrain based on normals and height.
                            <br></br><br></br>
                            The result is more of a display of different concept I have learnt rather than a carefully created scene.
                            That being said, it was a good experience to understand a part of game creation that I otherwise would not be interested in learning about.

                            <br></br><br></br>
                            (A skeleton framework is provided as a starting off point. The program is written in c++ and uses opengl for rendering)
                        </p>
                    </div>
                </div>
                <div class="column">
                    <div class="round" style={{ background: "white", color: "black" }}>
                        <h4>(Not) Elden Rings</h4>
                        <YoutubeEmbed embedId="dwNtbS591bI" />
                        <p class="description">
                            This is supposed to be elden rings...
                            <br></br>
                            I don't even know what game it looks like now...
                            <br></br>
                            It sure looks like a fantasy setting, with those weird light emitting trees and floating sphere.
                        </p>
                        <div>
                            <a href="https://github.com/felixchiu99/CSC8502-Game-Graphic-Coursework">
                                <button class="button">Repository</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header> 
    );
}
