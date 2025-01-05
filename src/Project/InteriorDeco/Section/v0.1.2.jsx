import '../../Project.css';
import * as CommonComp from "../../../CommonComponents";
import React from 'react';

export default function Component() {
    return (
        <header className="Project">
            <div className="App">
            
                <header className="Project">
                    <h2>InteriorDeco V0.1.2</h2>
                    <h5 class="description">Updated : 2024-06-16</h5>
                    <h4 class="description">
                        Background:
                    </h4>
                    <p class="description">
                        With the first iteration done, I collected feedback and suggestion from my relative, added some of my own and sorted the importance of each feature.
                    </p>
                    <div style={{ width: "40%", "padding": "2%", float: "Right" }}>
                        <div class="round" style={{ background: "white", color: "black" }}>
                            <h4>Version 0.1.2 (Moving and Saving)</h4>
                            <div style={{ width: "100%", "padding-right": "1%", float: "Left" }}>
                                <CommonComp.YoutubeEmbed embedId="YQHa2gsCk7I" />
                                <p>The version 0.1.2 of this project</p>
                            </div>
                            <div>
                                <a href="https://github.com/Felix-Own-Gaming/UKRoomDecoration/releases/tag/0.1.2">
                                    <button class="button">Link to Release Download</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <h4 class="description">
                        Suggestions:
                    </h4>
                    <ol class="description">
                        <li>
                            <CommonComp.Collapsible title="Save Game System">
                                <p>
                                    Feedback: My Relative stress that the Save game feature would be the most useful to her as she can load and compare different placement settings.
                                </p>
                                <p>
                                    Additional Thought: I think this is something very important. However, given that Save structure affects future saves, it maybe benefitial to work on this with build parts.
                                </p>
                            </CommonComp.Collapsible>
                        </li>
                        <li>
                            <CommonComp.Collapsible title="Ability to move placed object">
                                <p>
                                    Feedback: My Relative suggest to add the ability to move an object so that object can be moved as close to the wall as possible.
                                </p>
                                <p>
                                    Additional Thought: This feature will be worked on in this sprint as this is one of the requested feature.
                                </p>
                            </CommonComp.Collapsible>
                        </li>
                        <li>
                            <CommonComp.Collapsible title="More Placeables">
                                <p>
                                    Feedback: I thought that the cube might limit our perception, I'd like to add the function for different shapes.
                                </p>
                                <p>
                                    Additional Thought: This feature will be worked on in this sprint along save structure.
                                </p>
                            </CommonComp.Collapsible>
                        </li>
                        <li>
                            <CommonComp.Collapsible title="Place Item on top of other">
                                <p>
                                    Feedback: I thought Place Item on top of other is a very simple yet useful feature.
                                </p>
                                <p>
                                    Additional Thought: This feature will be worked on, Should be easy enough.
                                </p>
                            </CommonComp.Collapsible>
                        </li>
                        <li>
                            <CommonComp.Collapsible title="Colour Object">
                                <p>
                                    Feedback: My Relative think that displaying coloured object would help visualise the final look. 
                                </p>
                            </CommonComp.Collapsible>
                        </li>
                        <li>
                            <CommonComp.Collapsible title="Colour Wall">
                                <p>
                                    Feedback: My Relative think that displaying coloured walls would help visualise the final look.
                                </p>
                            </CommonComp.Collapsible>
                        </li>
                        <li>
                            <CommonComp.Collapsible title="Better user experience: keybind/layout">
                                <p>
                                    Feedback: My Relative reported some difficulty using the Layout.
                                    I personally also feel like there is large improvement opputunity in user experience and Layout.
                                </p>
                            </CommonComp.Collapsible>
                        </li>
                        <li>
                            <CommonComp.Collapsible title="Better user experience: Tutorial">
                                <p>
                                    Feedback: I Observed that my relative had difficult understanding basic game ideas (WASD to move).
                                    It would be good if I can add some sort of tutorial to this.
                                </p>
                            </CommonComp.Collapsible>
                        </li>
                    </ol>
                    <h4 class="description">
                        Focuses This Sprint:
                    </h4>
                    <ul class="description">
                        <li>Save Game System</li>
                        <li>Move Object</li>
                        <li>More Placeables</li>
                        <li>Place on Object</li>
                    </ul>
                    <div class="description">
                        <CommonComp.Collapsible title="Implementation">
                            <CommonComp.Collapsible title="Move Object">
                                <p>When presented the task of moving a placed object, I thought of possessing the placed object as a pawn, then manipulating it.</p>
                                <p>However, the vanilla camera will clip through the walls. Adding a spring arm does not seem to help as well.</p>
                                <p>In Addition, considering my user is not familiar with game like systems, I am worried that she might be disorientated if the camera changes this drastically</p>
                                <p>
                                    I decided finally to keep the camera on the player character's camera angle, and perform at look at transform to the object each frame.
                                    If the object moves too far, the user can just move closer and repeat the process.
                                </p>
                            </CommonComp.Collapsible>
                            <CommonComp.Collapsible title="Move Object UI">
                                <p>
                                    One thing I have noticed with te implemented Move system is that it is not very clear where the "local" move axis is.
                                    Therefore, I wanted to add a visual aid to the block for better block manipulation.
                                </p>
                                <p> I did not find a preset way of adding a 3D axis on an actor, so I made a simple world space UI to display the axis.</p>
                                <p> While I am not very pleased with how the "UI" looks, I think it can serve it's purpose and we can focus on bring more feature to this project.</p>
                            </CommonComp.Collapsible>
                            
                            <CommonComp.Collapsible title="Save Game UI">
                                <p>With more menu UIs needed, I have created a parent "menu Widget" to handle all Opening/closing menu functions.</p>
                                <p>I then added the Save and Load game widget, which will update according to the save/load status.</p>
                                <p>Note: I might add some save input validation logic in the input box later</p>
                                <p>Note: The menu have problems with using Esc to return to last menus, will investigate later.</p>
                            </CommonComp.Collapsible>
                            <CommonComp.Collapsible title="Save Game System">
                                <p>I currently have the transform and type of PlaceableObject Saved on the save game. </p>
                                <p>For future-proofing, I have added a slot for storing colours as well.</p>
                                <p>Story: During development, I forgot to wipe existing items before loading a save, leading to the massive confusion where there is a duplication left in the original place after moving the object.</p>
                            </CommonComp.Collapsible>
                            <CommonComp.Collapsible title="Placeable">
                                <p>I implemented the Placeable selection by creating a data table consisting the following items:</p>
                                <ul>
                                    <li>Display Name</li>
                                    <li>Placeable Mesh</li>
                                    <li>Placeable Class</li>
                                    <li>Placeable Preview Render</li>
                                </ul>
                                <p>When the user click the desired placeable type, the system will load the corresponding Build class and mesh for build preview and placement.</p>
                                <p>This data structure is also used to save and load what type of the object is being saved.</p>
                            </CommonComp.Collapsible>
                            <CommonComp.Collapsible title="Placeable UI/preview">
                                <p>I needed a UI widget to display what the user is building.</p>
                                <p>I chose the combobox for it's familiarity with normal computer user.</p>
                                <p>A render texture is used to preview the actor being place.</p>
                                <p>However, the render texture is missing in the release version. This has been added to Jira backlog and will be looked into later.</p>
                            </CommonComp.Collapsible>
                            <CommonComp.Collapsible title="Place On Top">
                                <p>
                                    The implementation was relative simple, add placeable as a type for valid placement target, and then once spawned, parent the new object to the existing object.
                                </p>
                                <p>
                                    Note: There seem to be bug where the looking at point is not updating when looking at different objects, will add to Jira backlog and look into it later.
                                </p>
                                <p>
                                    Note: I forgot to add the parent relation to the save, this will be rectify later.
                                </p>
                            </CommonComp.Collapsible>
          
                           
                        </CommonComp.Collapsible>
                    </div>
                    <h4 class="description">
                        Result:
                    </h4>
                    <p class="description">
                        Updated the planned feature safely, there might be minor bugs, but no major bug was seen.
                    </p>
                    <p class="description">
                        Start next sprint focus on colours.
                    </p>
                    
                
                </header>

            </div>
        </header>
    );
}