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
            <h5>Last update : 2024-04-29</h5>

            <div class="row">
                <div class="column">
                    <p class="description">
                        A experiment with UE5's UI system, with the minimum goal was to start, exit, and change some systems in-game.
                        During this, I have experiemented with creating UIs using pure blueprint, SlateUI and Blueprints with c++ via bind widgets.
                    </p>
                    <Collapsible title="My Learning journey">
                        <p class="description">
                            I first started to experiement on UI creation by following some tutorial relying on blueprints.
                            Creating UI with blueprints is great for layout, but for a programmer, it is painful to create all functionality in blueprints.
                            Besides, it would be difficult to auto-populate some buttons in pure blueprints, so I went and see if there is any coding specific tutorials.
                        </p>
                        <p class="description">
                            I then Stumbled upon the SlateUI tutorial and was delighted that this can be made to populate some layout component based on dynamic requirements,
                            such as the number of levels in a directory. However, while I have successfully created a function level loader widget by using slate,
                            I have difficulty understanding how I should format / layout using Slate. So I decided to put this down for now and find a different tutorial.
                        </p>
                        <p class="description">
                            I finally found the amazing series from [] about creating UIs.
                        </p>
                    </Collapsible>
                    <br></br>
                    <ul class="description">
                        <li>
                            <Collapsible title="Main Menu">
                                <p>
                                    The Main Menu has the following button.
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
                                <p>
                                    Note: The settings currently can set the SFX volume.
                                    However, as I have not created a "save" function for game settings,
                                    so the settings will not persist over restarting the game.
                                </p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible title="Pause Menu">
                                <p>
                                    A Menu that can be opened in game.
                                    <ul class="description">
                                        <li>
                                            Resume : Back to game
                                        </li>
                                        <li>
                                            Main Menu : Return to Main Menu
                                        </li>
                                        <li>
                                            Settings : For Changing the settings.
                                        </li>
                                        <li>
                                            Save : For Saving the level. (Not Implemmented Yet)
                                        </li>
                                        <li>
                                            Quit : Quit game completely.
                                        </li>
                                    </ul>
                                </p>
                                <p>
                                    The pause menu is created with the player charactor, which will be added to the viewport but be invisible.
                                    On Pressing the pause key (Tab for debugging purpose), the pause menu will became visible,
                                    Set game input to be UI only and pause the game from running in the background.
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
                                            Keybinds (Not Implemented Yet)
                                        </li>
                                        <li>
                                            font size/ui size (Not Implemented Yet)
                                        </li>
                                        <li>
                                            Volume (Partial Implemented)
                                        </li>
                                    </ul>
                                    A "back" button is also required in the settings menu.
                                </p>

                                <p>
                                    A pointer to a userwidget is used to store which menu has called on the setting menus.
                                    This allows me to show the setting from different menus while keeping the "Back" function functioning the same.
                                </p>

                                <p>
                                    I have focused on the layout of the settings menus in this.
                                    As most of the functionality in settings requires additional attention in other aspects.
                                    For example, font size/ui scaling might need graphical knowledge.
                                    As I want to focus on how a UI is created and used in game for this prototype, the functionalities are mostly omitted.
                                </p>
                                <p>
                                    The next time I revisit settings UI, I probably will learn about saving UI options, then coding general game save. 
                                </p>
                            </Collapsible>
                        </li>
                        <li>
                            <Collapsible title="Tooltips">
                                <p>
                                    One of the comments I had from my last project was the lack of directions.
                                    So this time, when shown how to implemment a health bar in tutorials,
                                    I have modified it to be a tooltip widget.
                                </p>
                                <h5>How it works:</h5>
                                <p>
                                   Each interactable Object inherits from a common interactable pawn, which has the following components/variable:
                                </p>
                                <ul class="description">
                                    <li>
                                        Arrow component: Marking the place to show a tooltip
                                    </li>
                                    <li>
                                        FText: Storing the "action" word, for example, "Enter" for a vehicle.
                                    </li>
                                </ul>
                                <p>
                                    The Player controller Spawns with a tooltip widget added to the viewport on begin play.
                                    The tooltip widget is invisible by default.
                                </p>
                                <p>
                                    When looking at an interactable object, the related Action keys are retrived and added to the "action".
                                </p>
                                <p>
                                    The tooltip widget is then teleported to the Arrow component's world location for display, and then is set to visible.
                                </p>
                                <p>
                                    Unless the player removes their gaze, the tooltip will keep updating it's location to the display point.
                                </p>
                                <p>
                                    Once the player removes their gaze, the tooltip will be set to in visible.
                                </p>
                            </Collapsible>
                        </li>
                    </ul>
                    
                    <h5 class="description">Resources:</h5>
                    <p class="description"> </p>
                </div>
                <div class="column">
                    <div class="round">
                        <div class="round_video" style={{ background: "gray", color: "black", width: "75%", float: "Right" }}>
                            <div style={{ width: "100%", "padding-right": "1%", float: "Left" }}>
                                <div style={{ width: "100%", "padding-right": "1%", float: "Left" }}>
                                    <YoutubeEmbed embedId="-GuVPsxYj6w" />
                                    <p style={{ "text-align": "center", color: 'white' }}>Showcase of the current Menus</p>
                                </div>
                                <div style={{ width: "100%", "padding-right": "1%", float: "Left" }}>
                                    <YoutubeEmbed embedId="nGKzXMNkUQ0" />
                                    <p style={{ "text-align": "center", color: 'white' }}>Showcase of the Tooltip widget</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}