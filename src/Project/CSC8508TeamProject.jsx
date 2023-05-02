import './Project.css';
import React from 'react';
import YoutubeEmbed from "../YoutubeEmbed";

function CSC8508() {
    return (
        <div className="App">
            
            <header className="Project">
                <h3>CSC8508</h3>
                <div class="row">
                    <div class="column">
                        <div class="round">
                            <div class="round" style={{background:"white", color: "black", width: "40%", float: "Right", margin: "3%", "left-margin": "6%"}}>
                                <h4>Ink Hell</h4>
                                <YoutubeEmbed embedId="TUJYlqpcz34" />
                                <YoutubeEmbed embedId="OOixs-0MfTs" />
                                <p class="description">
                                    Can you dodge your way to success?
                                </p>
                                <div>
                                    <a href="https://github.com/felixchiu99/VR_Archery">
                                    <button class="button">Repository</button>
                                    </a>
                                </div>
                            </div>
                            <h4>Sumary</h4>
                            <p class="description"  style={{ "padding-left": "0%", "padding-right": "6%"}}>
                                
                            </p>
                            <h4>Personal Contributions</h4>
                            <ul>
                                <li>Networked Multiplayer</li>
                                <li>Player Controller</li>
                                <li>Base for graphical menu</li>
                                <li>Modified health/damage system</li>
                                <li>General bugfixes</li>
                            </ul>

                            <h4>Networked Multiplayer</h4>
                            <div style={{ "padding-left": "1%" }}> 
                                <h5>Method</h5>
                                <p>
                                    The Networked multiplayer is built based on Enet.
                                    As the game would not require many player online at the same time, I have chosen to employ a peer to peer approach.
                                    The host would be playing on his world and at the same time will deal with the incoming client's data.
                                </p>
                            </div> 

                            <div style={{ "padding-left": "1%" }}> 
                                <h5>Networking steps</h5>
                                <ol>
                                    <li>Host: Create a play area</li>
                                    <li>Client: Join the host</li>
                                    <li>Host: Send host player's position and client's ID to client, and spawns in a client player object.</li>
                                    <li>Client: Save it's id, spawns in the host player and send it's keypress to host</li>
                                    <li>Host: Receive client's keypress and move the client object on host accordingly</li>
                                    <li>Host: For each dynamic object, send the position data to client. If the object has animations or behaviour tree, send the state to client as well.</li>
                                    <li>Host: If the game state has changed (player win/lose), the host will broadcast the game state change to all connected client.</li>
                                    <li>Client: Receive the position data from server and move the objects accordingly.</li>
                                    <li>Client: If there is additional animation and AI state, then change the specific object's state. (such as starting an animation)</li>
                                    <li>Client: If the game has ended, the client will show the corresponding state to the client.</li>
                                </ol>

                                <h5>Potential Problem</h5>
                                <p>
                                    The way I have solve the multiplayer problem have some potential problem.
                                </p>
                                <ol>
                                    <li>The client networked object would not move if there is connection issue with the server.</li>
                                    <li>The paint on the client is slightly behind the server, which meant I need to send an additional message to sync up the paint splater.</li>
                                    <li>The </li>
                                    
                                </ol>
                            </div> 

                            <div style={{ "padding-left": "1%" }}> 
                                <h5>Network object jitter</h5>
                                <p>
                                    At the start of the project, I tried updating the position of a networked object directly to sync between host and client. 
                                    However, the result is quite jittery. 
                                    <br></br>
                                    After adding some debug lines to visualize how the player object looks jittery, I have concluded that the reason of the jitter is two-folded.
                                    <br></br>
                                    First, the position of the player object is sent to the client at a set interval, which meant that the position itself would only be updated at a certain points.
                                    And so, as the player object is moved to these points, the screen shows that the player is "Teleporting" between these points, which caused some jitter of the character.
                                    <br></br>
                                    Second, the camera position is also causing jitter on the whole frame. 
                                    The camera is position directly on the character, so if the character is jittering, then the camera would too.
                                    Also, I just set the camera rotation with the mouse position. 
                                    This meant that if the mouse is move quickly, then there would be significant difference between the previous frame and the next, which add jitterness.
                                </p>
                                <h5>Non-jitter network object</h5>
                                <p>
                                    To counter jitter of the client object, I implemented two feature. 
                                    The first is to store the latest position of the client player from the server.
                                    Then the move the client player object using slerp a little frame by frame.
                                    That can remove the jitter for movement of player object.
                                    The Second is to remove the camera jittering. 
                                    Which I resolved by creating a seperate render transform that is smooth moving from it's previous position to it's supposed position.
                                    This meant that the camera is moving smoothly, but will still center at the player.
                                </p>
                                <h5>Potential Problem</h5>
                                <ul>
                                    <li>There might be some delay on the camera and might cause some motion sickness if the player is moving too fast.</li>
                                    <li>Might have some difficulty if we want to add velocity to client object when connection fail.</li>
                                </ul>
                            </div>

                            <h4>Player controller</h4>
                            <div style={{ "padding-left": "1%" }}> 
                                <h5>Method</h5>
                                <p>
                                    The player is being moved by appling force to the game object. 
                                    The direction for force applied is from the pressing of the key "W", "A", "S", "D", which add up a direction vector for the final force direction applied.
                                    The direction is then multiplied by the movement speed.
                                    <br></br>
                                    After the movement, the camera is centered to the player (with a fixed offset to the left) and then the player object is then rotated to the direction of the camera.
                                    This is to ensure the image rendered would not wobble from frame to frame and cause visual bugs.
                                    The player object was quite bouncy and slippery at the start as we have a uniform physics setting.
                                    With help from our teammate, we managed to change the player object to have customable damping and friction, which you can see in the youtube video.
                                    <br></br>
                                    I have created a input management system so that all actions for the player is controlled by the an enum.
                                    That meant the player's movement can be rigged to different keybind quite easily,
                                    and we have used it for rigging controller controls for player.
                                    <br></br>
                                </p>
                            </div> 

                            <h4>Menu base</h4>
                            <div style={{ "padding-left": "1%" }}> 
                                <h5>Method</h5>
                                <p>
                                    I took up the task of making the functional base of the menu system so that one of my teammate can focus on the visual while i work on other aspects.
                                    I created a system where the menu can be "navigated" by clicking within a "button", which is just a simple image with a rectanglar boundary.
                                    The menu can be change by changing the "menu template" specified in the menu controller.
                                    <br></br>
                                    The starting menu is a image with four smaller image displayed on it.
                                    If the mouse is hovering on a "button" when being clicked, the function related to it will be triggered.
                                    For example, the starting menu has the single player button, when click, will start the game.
                                    <br></br>
                                    <br></br>
                                    There are some other part of the menu system that is implemented by my teammates since and I only part take in bugfixing.
                                 </p>
                            </div>

                            <h4>Made using: </h4>
                            <p>Modified course C++ engine from CSC8503</p>
                        </div>
                    </div>
                    
                </div>
                <a href="/portfolio">
                    <button class="button">Return</button>
                </a>
            </header>

        </div>
    );
}
export default CSC8508;