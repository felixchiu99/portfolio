import './Project.css';
import React from 'react';
import YoutubeEmbed from "../YoutubeEmbed";
import Collapsible from "../Collapsible";

function CSC8508() {
    return (
        <div className="App">
            
            <header className="Project">
                <h3>CSC8508: InkHell</h3>
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
                                    <a href="https://github.com/blacktack2/MastersGroupProject2023">
                                    <button class="button">Repository</button>
                                    </a>
                                </div>
                            </div>
                            <h4>Sumary</h4>
                            
                            <p class="description"  style={{ "padding-left": "0%", "padding-right": "6%"}}>
                                InkHell is a 3d bullet hell game where the player needs to kill the boss by spraying damage dealing ink on the floor.
                                If the boss is standing on the ink, then he takes damage.
                                The boss's ink (orange) will damage the player and the player's ink (blue) will damage the boss.
                                The game ends when either the boss dies, or if the player dies.
                            </p>
                            <p class="description"  style={{ "padding-left": "0%", "padding-right": "6%"}}>
                                A co-op PVE mode is avaliable up to 4 players.
                            </p>

                            <h4>Personal Contributions</h4>
                            <div>
                                <Collapsible title="•	Networked Multiplayer">
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
                                            <li>Extending this system would be hard as there are too many special cases.</li>
                                        </ul>
                                    </div>
                                </Collapsible>

                                <Collapsible title="•	Player controller">
                                    <div style={{ "padding-left": "1%" }}> 
                                        <h5>Method</h5>
                                        <p>
                                            The player is being moved by appling force to the game object. 
                                            The direction for force applied is from the pressing of the key "W", "A", "S", "D", which add up a direction vector for the final force direction applied.
                                            The direction is then multiplied by the movement speed.
                                        </p>
                                        <p>
                                            After the movement, the camera is centered to the player (with a fixed offset to the left) and then the player object is then rotated to the direction of the camera.
                                            This is to ensure the image rendered would not wobble from frame to frame and cause visual bugs.
                                            The player object was quite bouncy and slippery at the start as we have a uniform physics setting.
                                            With help from our teammate, we managed to change the player object to have customable damping and friction, which you can see in the youtube video.
                                        </p>
                                        <p>
                                            I have created a input management system so that all actions for the player is controlled by the an enum.
                                            That meant the player's movement can be rigged to different keybind quite easily,
                                            and we have used it for rigging controller controls for player.
                                        </p>
                                        <p>
                                            My teammate has then successfully extended this control scheme for an xbox controller.
                                        </p>
                                    </div> 
                                    
                                </Collapsible>

                                <Collapsible title="•	Base for graphical menu">
                                    <div style={{ "padding-left": "1%" }}> 
                                        <h5>Method</h5>
                                        <p>
                                            I took up the task of making the functional base of the menu system so that one of my teammate can focus on the visual while i work on other aspects.
                                            I created a system where the menu can be "navigated" by clicking within a "button", which is just a simple image with a rectanglar boundary.
                                            The menu can be change by changing the "menu template" specified in the menu controller.
                                        </p>
                                        <p>
                                            The starting menu is a image with four smaller image displayed on it.
                                            If the mouse is hovering on a "button" when being clicked, the function related to it will be triggered.
                                            For example, the starting menu has the single player button, when click, will start the game.
                                        </p>
                                        <p>
                                            There are some other part of the menu system that is implemented by my teammates after this stage, 
                                            whilst I when on to work on a different part. 
                                            My remaining involvement in UI was bugfixes and adding minor improvements in the code.
                                        </p>
                                    </div>
                                    
                                </Collapsible>
                                
                                <Collapsible title="•	Modified health/damage system">
                                    <div style={{ "padding-left": "1%" }}> 
                                        <p>
                                            While the visuals of the ink spray wasn't created by me, how it affect other objects in game was.
                                            In our game, the mechanics and the visual are two seperate systems.
                                        </p>
                                        <p>
                                            When the ink has landed, it's coordinates are sent to both the visual and the mechanic ink systems.
                                            For the mechanics part, the ink is seperated into a 100 by 100 point grid, with each grid 0.5 unit apart.
                                            When given a world coordinate, 
                                            the ink system translate it to the grid coordinates and change the corresponding grid status to be inked with an ink type.
                                            If a grid cannot cover the whole play space, multiple grid can be created to cover a larger area, 
                                            with a grid manager class helping to pass the required coordinates to individual grids.
                                        </p>
                                        <p>
                                            When a player/boss needs to query wheither it is standing on ink, 
                                            it will pass it's coordinates to the grid manager and then to the individual grids. 
                                            If the coordinates are within any "inked" grid, then it will return "true" to the player/boss "check inked" function, 
                                            indicating that they are standing in ink and can be damaged.
                                        </p>
                                        <p>
                                            Appropriate amount of health can then be deducted from the player/boss, completing the health/damage system.
                                        </p>
                                    </div>
                                    
                                </Collapsible>

                                <Collapsible title="•	General bugfixes">
                                    <div style={{ "padding-left": "1%" }}> 
                                        <p>
                                            I helped out on fixing several bugs involving merges and new functions. 
                                            One of the main job I have is to ensure that new features can work in multiplayer, 
                                            as well as making sure everyone's merges works well with pre-existing parts.
                                        </p>
                                        <p>
                                            If there is any huge merge conflicts, then I would talk with the teammate in charge to work out a solution.
                                        </p>
                                    </div>
                                    
                                </Collapsible>
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