import '../../App.css';
import * as Status from '../../ProjectStatus';
import React from 'react';
import YoutubeEmbed from "../../YoutubeEmbed";

export default function Project() {
    return (
        <header className="Project">
            <h3>Interior Decoration V1</h3>
            <h4>Status: <Status.Completed></Status.Completed></h4>
            <h5>Last update : 2024-06-06</h5>
            <div class="row">
                <div class="column">
                    <div class="round">
                        <div>
                            <h4 class="description">
                                Game Engine: Unreal Engine 5
                            </h4>
                            <h5 class="description">
                                Time Taken: 18 Hrs (3 days)
                            </h5>
                            <p class="description">
                                A relative of mine need to decorate her room, she have several idea of bed placement but has difficulty visualising the spatial placement of the room.
                            </p>
                            <p class="description">
                                I offered her my help in creating a simple yet detailed 3D model in blender, which then spiraled to became a seperate game/tool using unreal engine.
                            </p>
                            <p class="description">
                                The First functioning version includes:
                            </p>
                            <ul>
                                <li>Modeled room</li>
                                <li>Interactable elements: lights and doors</li>
                                <li>Placeable cubes with customisable dimension</li>
                                <li>Removal of cubes</li>
                                <li>Simple HUD and UI</li>
                            </ul>
                            <p class="description">
                                More in detail page.
                            </p>

                            <br></br>

                            <a href="/portfolio/#/InterDeco" class="description">
                                <button class="button">Read More</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="column" >
                    <div class="round" style={{ background: "white", color: "black" }}>
                        <h4>Latest Clips</h4>
                        <div style={{ width: "100%", "padding-right": "1%", float: "Left" }}>
                            <YoutubeEmbed embedId="bdKNY9oh43s" />
                            <p>The version 1 of this project</p>
                        </div>
                        <div>
                            <a href="https://github.com/Felix-Own-Gaming/UKRoomDecoration">
                                <button class="button">Repository</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
