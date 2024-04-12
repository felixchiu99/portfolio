import '../../../Project.css';
import YoutubeEmbed from "../../../../YoutubeEmbed";
import Collapsible from "../../../../Collapsible";
import * as Status from "../../../../ProjectStatus";
import React from 'react';

export default function Component() {
    return (
        <div className="App">
            
            <h4 class="description" style={{ "padding-left": "0%", "padding-right": "6%" }}>
                UI Menu Prototype
            </h4>
            <h5 class="description">Status: <Status.Ongoing></Status.Ongoing></h5>
            <h5>Last update : 2024-04-10</h5>

            <div class="row">
                <div class="column">
                    <p class="description">
                        A experiment with UE5's UI system, with the minimum goal was to start, exit, and change some systems in-game.
                        Currently planning on learning about blueprint UI first, then take a deeper look on SlateUI for more complex application.
                    </p>
                    <p class="description">
                        Will also experiment with setting saving as well.
                    </p>
                    <ul class="description">
                        <li>
                            <Collapsible title="Main Menu">
                                <p>
                                    The Main Menu should have the following button.
                                    <ul class="description">
                                        <li>
                                            Level Select : For choosing a scene to load.
                                        </li>
                                        <li>
                                            Settings : For Changing the settings.
                                        </li>
                                        <li>
                                            Quit : For Quiting the game.
                                        </li>
                                    </ul>
                                </p>
                                <p>
                                    The level Select should show all related prototype for stage 0.
                                    Which can be changed later on in stage 1.
                                </p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible title="Pause Menu">
                                <p>
                                    A Menu that can be opened in game.
                                    <ul class="description">
                                        <li>
                                            Settings : For Changing the settings.
                                        </li>
                                        <li>
                                            Back to Menu : For returning to main menu.
                                        </li>
                                    </ul>
                                </p>
                                <p>
                                    Should also investigate pausing the game when this menu is opened.
                                </p>

                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible title="Settings Menu">
                                <p>
                                    A Menu that save settings in game.
                                    I haven't come up with much settings for now, but here are some ideas.
                                    <ul class="description">
                                        <li>
                                            Keybinds
                                        </li>
                                        <li>
                                            font size/ui size
                                        </li>
                                        <li>
                                            Volume
                                        </li>
                                    </ul>
                                </p>

                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible title="HUD">
                                <p>
                                    A simple HUD for displaying health and hotbar.
                                    Not sure if hotbar mechanics will be implemmented at this point, but I will attempt a dummy UI for now.
                                </p>

                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible title="Ship Customisation Table">
                                <p>
                                    A In-game interactable table that changes a ship's component.
                                    It should allow players to choose which component a slot should have.
                                </p>

                            </Collapsible>
                        </li>
                    </ul>
                    

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