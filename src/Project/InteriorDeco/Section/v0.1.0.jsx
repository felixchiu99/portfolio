import '../../Project.css';
import Collapsible from "../../../Collapsible";
import YoutubeEmbed from "../../../YoutubeEmbed";
import React from 'react';

export default function Component() {
    return (
        <header className="Project">
            <div className="App">
            
                <header className="Project">
                    <h2>InteriorDeco V0.1.0</h2>
                    <h5 class="description">Updated : 2024-06-06</h5>
                    <h4 class="description">
                        Background:
                    </h4>
                    <p class="description">
                        A relative of mine need to decorate her room, she have several idea of bed placement but has difficulty visualising the spatial placement of the room.
                    </p>
                    <p class="description">
                        I offered her my help in creating a simple yet detailed 3D model in blender.
                        I started creating the room for about three hours, when i felt that it might be hard for me to show her an accurate perspective of her room using blender's fixed camera paths.
                        I wanted to let her "move" around to feel the spatial property of the room. So, I decided to import the model to a Unreal first person project and continue there.
                    </p>
                    <div style={{ width: "40%", "padding": "2%", float: "Right" }}>
                        <div class="round" style={{ background: "white", color: "black" }}>
                            <h4>Version 0.1.0 (Minimum Delivery)</h4>
                            <div style={{ width: "100%", "padding-right": "1%", float: "Left" }}>
                                <YoutubeEmbed embedId="bdKNY9oh43s" />
                                <p>The version 1 of this project</p>
                            </div>
                            <div>
                                <a href="https://github.com/Felix-Own-Gaming/UKRoomDecoration/releases/tag/0.1.0">
                                    <button class="button">Link to Release Download</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <h4 class="description">
                        Reason for Blueprints:
                    </h4>
                    <p class="description">
                        Coming from a programmer's background, I do like the control of using c++ for creating deep and complex game mechanics.
                        However, this project's primary goal is to create a usable product in the shortest time possible, therefore, I choose to primarily use Blueprints for this project.
                    </p>
                    <h4 class="description">
                        Requirements:
                    </h4>
                    <ul class="description">
                        <li>A Scale accurate room</li>
                        <li>A resizable cube representing furnitures</li>
                        <li>Simple placement system with changable location and rotation</li>
                        <li>Product is redistributable</li>
                    </ul>
                    <div class="description">
                        <Collapsible title="Implementation">
                            <h5>
                                Scale accurate room
                            </h5>
                            <p>
                                I created the scale accurate room using blender. I think there might be 1-2 cm of different with the corners, but it is within acceptable range.
                            </p>
                            <h5>
                                Resizable cube
                            </h5>
                            <p>
                                At first, I wanted to create different models for different furniture, I dismissed this quite quickly as I want to make something usable quickly. It will be implemented later on.
                            </p>
                            <p>
                                The Resizing is via a toggleable menu with three input box that will update the placement scale when the input value changes.
                                A check for numerical value is placed so that the input will not corrupt the scale settings.
                            </p>
                            <h5>
                                Placement system
                            </h5>
                            <p>
                                The placement system is based on the player's gaze. If the player is looking at the floor, a placement preview is show.
                                If the preview placement is clipping another object, then the preview will change to a red-ish colour.
                                If the preview placement is valid, then clicking the left mouse button will spawn a new cube with the specified scale.
                            </p>
                        </Collapsible>
                    </div>
                    <h4 class="description">
                        Result:
                    </h4>
                    <p class="description">
                        I have created a game that allows the player to resize, place and remove a cube in a room. It has been tested on my relative's computer and it is running smoothly.
                    </p>
                    <div class="round">
                        <div class="round_video" style={{ background: "gray", color: "black", width: "95%", float: "Left" }}>
                            <div style={{ width: "24%", "padding-right": "1%", float: "Left" }}>
                                <img style={{ width: "50%" }} src="https://drive.google.com/thumbnail?id=1Vjc56-Au_cKXYNtbU2ssUrULe1O3jn7T" alt="IRL Room View Toward door" />
                                <img style={{ width: "50%" }} src="https://drive.google.com/thumbnail?id=1YYGGSfveyLr6QzHlPMaK-CYKaNh9d7gu" alt="In Game Room View Toward door" />
                                <p style={{ "text-align": "center", color: 'white' }}>Room View towards the door (Left IRL, Right In Game)</p>
                            </div>
                            <div style={{ width: "24%", "padding-right": "1%", float: "Left" }}>
                                <img style={{ width: "50%" }} src="https://drive.google.com/thumbnail?id=1qVCBYCzIVtUbycvB6lM--8mYZEXX8f22" alt="IRL Room View Toward Windows" />
                                <img style={{ width: "50%" }} src="https://drive.google.com/thumbnail?id=1b_hv5DrDSxMb7UrLiS7btigKhhrzlAbt" alt="In Game Room View Toward Windows" />
                                <p style={{ "text-align": "center", color: 'white' }}>Room View towards the windows (Left IRL, Right In Game)</p>
                            </div>
                            <div style={{ width: "24%", "padding-right": "1%", float: "Left" }}>
                                <img style={{ width: "50%" }} src="https://drive.google.com/thumbnail?id=14c2qm3iDMk2JW0cckYmpO1dqULjAfM0Y" alt="IRL Room View From wardrobe" />
                                <img style={{ width: "50%" }} src="https://drive.google.com/thumbnail?id=1hqcMnQItqa0zyA1kZcNV-ZRcCt7sLSu5" alt="In Game Room View From wardrobe" />
                                <p style={{ "text-align": "center", color: 'white' }}>Room View from wardrobe (Left IRL, Right In Game)</p>
                            </div>
                            <div style={{ width: "24%", "padding-right": "1%", float: "Right" }}>
                                <img style={{ width: "50%" }} src="https://drive.google.com/thumbnail?id=1NHkj_vNLT62-H1v-V84E58LiFRxZZ_dD" alt="IRL Room View From Door" />
                                <img style={{ width: "50%" }} src="https://drive.google.com/thumbnail?id=12p-bODOENAyqDRQhT_K1LiP5eWpCIYdu" alt="In Game Room View From Door" />
                                <p style={{ "text-align": "center", color: 'white' }}>Room View from entrance (Left IRL, Right In Game)</p>
                            </div>

                        </div>
                    </div>
                    <h4 class="description">
                        Room for improvement:
                    </h4>
                    <ul class="description">
                        <li>Missing placement refinement for placed object</li>
                        <li>Missing Save/load room setting</li>
                        <li>Ability to stack placeable on tip of each other</li>
                        <li>Instruction unclear</li>
                        <li>Some case where clipping object is allowed to be placed</li>
                        <li>Missing ability to change place asset in game</li>
                        <li>Ability to change object colour</li>
                        <li>Ability to change room colour</li>
                        <li>Ability to customise room layout (Custom room)</li>
                    </ul>
                
                </header>

            </div>
        </header>
    );
}