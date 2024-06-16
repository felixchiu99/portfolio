import '../../App.css';
import * as Status from '../../ProjectStatus';
import React from 'react';
import YoutubeEmbed from "../../YoutubeEmbed";

export default function Project() {
    return (
        <header className="Project">
            <h3>InteriorDeco</h3>
            <h4>Status: Sprint 3 - <Status.Ongoing></Status.Ongoing></h4>
            <h5>Last update : 2024-06-16</h5>
            <div class="row">
                <div class="column">
                    <div class="round">
                        <div>
                            <h4 class="description">
                                Game Engine: Unreal Engine 5
                            </h4>
                            <h5 class="description">
                                Time Taken:
                            </h5>
                            <ul>
                                <li>Sprint 2 - 16 Hrs (10 days)</li>
                                <li>Minimal Delivery - 18 Hrs (3 days)</li>
                            </ul>
                            <p class="description">
                                A relative of mine need to decorate her room, she have several idea of bed placement but has difficulty visualising the spatial placement of the room.
                            </p>
                            <p class="description">
                                I offered her my help in creating a simple yet detailed 3D model in blender, which then (because of me) spiraled to became a seperate game/tool using unreal engine.
                            </p>
                            <p class="description">
                                Currently Working on Sprint 3.
                            </p>
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
                        <h4>Version 0.1.2 (Moving and Saving)</h4>
                        <div style={{ width: "100%", "padding-right": "1%", float: "Left" }}>
                            <YoutubeEmbed embedId="YQHa2gsCk7I" />
                            <p>The version 0.1.2 of this project</p>
                        </div>
                        <div>
                            <a href="https://github.com/Felix-Own-Gaming/UKRoomDecoration">
                                <button class="button">Repository</button>
                            </a>
                        </div>
                        <div>
                            <a href="https://github.com/Felix-Own-Gaming/UKRoomDecoration/releases/tag/0.1.2">
                                <button class="button">Link to Latest Release Download</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
