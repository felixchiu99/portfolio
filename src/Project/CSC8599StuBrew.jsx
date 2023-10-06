import './Project.css';
import React from 'react';
import YoutubeEmbed from "../YoutubeEmbed";
import Collapsible from "../Collapsible";

import StuBrew_Brewery from '../images/StuBrew_Brewery.png'
import StuBrew_Stall from '../images/StuBrew_Stall.png'

import StuBrew_Stall_serving from '../images/StuBrew_Stall_serving.png'

import StuBrew_Grab1 from '../images/Grab_1.png'
import StuBrew_Grab2 from '../images/Grab_2.jpg'
import StuBrew_Grab3 from '../images/Grab_3.jpg'

import UI_1 from '../images/Outline.png'
import UI_2 from '../images/PC_Pointers.png'
import UI_3 from '../images/PC_Pointers_2.png'
import UI_4 from '../images/VR UI.png'
import UI_5 from '../images/Guidence_1.png'
import UI_6 from '../images/Guidence_2.png'

import StuBrew_Tablet_VR from '../images/StuBrew_Tablet_VR.mp4'
import StuBrew_Tablet_VR_2 from '../images/StuBrew_Tablet_VR_2.mp4'
function CSC8599() {
    return (
        <div className="App">
            
            <header className="Project">
                <h3>CSC8599 StuBrew: A VR Brewing experience.</h3>
                <div class="row">
                    <div class="column">
                        <div class="round">                            
                            <h4>Project period: </h4>
                            <p>13 weeks (May – Aug 2023)</p>

                            <div class="round_video" style={{background:"gray", color: "black", width: "30%", float: "Right"}}>
                                <YoutubeEmbed embedId="DK0heSvBuV8" />
                                <h4 style={{color: "white"}}>Extras:</h4>
                                <Collapsible title="A Uncut VR Gameplay Demo">
                                    <YoutubeEmbed embedId="aMS2xU2jjCs" />
                                </Collapsible>
                                <Collapsible title="A Uncut PC Gameplay Demo">
                                    <YoutubeEmbed embedId="TEwctvyq4vY" />
                                </Collapsible>
                            </div>

                            <h4>Sumary</h4>
                            <p class="description"  style={{ "padding-left": "0%", "padding-right": "6%"}}>
                                This is the dissertation project of the game engineering course. 
                                StuBrew is a student-run microbrewery in Newcastle university, 
                                and they would like to have a game for showing the process of their regular brewing session. 
                                In my initial evaluation, 
                                the brewing process itself can be quite boring as most of it is repeating adding ingredients and waiting. 
                                That led to the development of the stall minigame section and the money system in order to diversify the gaming experience, 
                                with varying success. Another highlight is including a PC (mouse & keyboard) option to play the game. 
                                This comes from my personal experience of friends who can’t play VR games 
                                because of cybersickness and/or lack of equipment. 
                                While there is room for improvement for the PC version, 
                                I think that the PC player controller was a successful attempt for this project 
                                and can be easily extended to suit future projects.

                            </p>

                            <h4 class="clear-float">Achievements: </h4>
                            <div>
                                <Collapsible title="•	Two complete Scene">
                                    <div> 
                                        <div class="round_video" style={{background:"gray", color: "black", width: "25%", float: "Right"}}>
                                            <img src={StuBrew_Brewery} style={{width: "100%"}} alt="The Brewery"></img>
                                            <p style={{"text-align": "center", color: 'white'}}>
                                                The Brewery
                                            </p>
                                        </div>
                                        <div class="round_video" style={{background:"gray", color: "black", width: "25%", float: "Right"}}>
                                            <img src={StuBrew_Stall} style={{width: "100%"}} alt="The Stall"></img>
                                            <p style={{"text-align": "center", color: 'white'}}>
                                                The Stall
                                            </p>
                                        </div>
                                        <p>The brewery and the vending stall</p>
                                        <p>
                                            At the end of the project, I completed two scenes each with its main feature completed. 
                                            The brewing scene involves the player interacting with brewing equipment to make a brew. 
                                            The brew properties can be affected by the amount of ingredients and the type of ingredients used. 
                                            The player can then transfer to the stall scene where they can “sell” their brew to NPC for a profit.
                                        </p>
                                    </div>
                                </Collapsible>

                                <Collapsible title="•	PC compatiablity">
                                    <div> 
                                        <p>Mouse and keyboard controller</p>

                                        <p>
                                            The PC controller was born out of two experiences. 
                                            First, when developing the archery project, 
                                            the need to test every mechanic in VR really hampered the pace of development. 
                                            If there is a way to test the mechanics using a mouse and keyboard, 
                                            it should help with reducing the need to put on and take off the headset. 
                                            Secondly, a friend of mine once got sick after playing a VR game for 15 minutes. 
                                            It would be a shame if the game excluded a major part of the possible audience because it is designed to be VR only. 
                                            While this method would not work for all VR games, 
                                            this project is suitable as the main gameplay loop is not deeply linked to the full body movement VR provides. 
                                        </p>

                                        <h4 class="clear-float">The Plan </h4>
                                        <p>
                                            A version of the PC controller is ported from a tech test I did during easter holiday. 
                                            The controller is structured into two parts: movement, 
                                            and object interaction. 
                                        </p>

                                        <h4 class="clear-float">Movement</h4>
                                        <p>
                                            For movements, the controller maps a keyboard key to a different move function. 
                                            For example, the “W” key is mapped to giving a force to the player object. 
                                        </p>
                                        <p>
                                            The system has inherited the option of switching control scheme if needed, 
                                            for example, movement control is frozen when the player is interacting with an object, 
                                            but it seems like the control is too confusing, 
                                            so it was dropped for this project. 
                                        </p>
                                        <p>
                                            At the end, I have mapped the common "WASD" as movement modules, "ctnl" for crouching, and mouse X/Y for camera controls.
                                            This "Look" module actually has an additional hook for identifing and triggering different object interaction based on the object type of what the player is looking at,
                                            which we will look into in the next session.
                                        </p>

                                        <h4 class="clear-float">Object Interactions</h4>

                                        <p>
                                            The object interaction depends on what the main camera is looking at, 
                                            and what the object interaction does depends on the object type. 
                                            For example, an object that can be picked up has a script which dictates how the object moves when being held. 
                                            The player can initiate the pickup by clicking the left mouse button, 
                                            which passes the related data to the pickup script to hold the object in place. 
                                            Additional interaction can be added to the script for extra control, 
                                            such as the rotating object for the pickup script activated by scrolling the scroll wheel. 
                                            Using this interaction framework, I can make any new interaction I come across quickly, 
                                            be it a button press, or an unlocking a door handle. 
                                        </p>

                                        <div class="round_video" style={{background:"gray", color: "black", width: "98%", float: "Right"}}>
                                            <p style={{"text-align": "center", color: 'white'}}>Interaction examples:</p>
                                            <div style={{width: "50%", float: "Left"}}>
                                                <div style={{width: "49%", "padding-right": "1%", float: "Left"}}>
                                                    <YoutubeEmbed embedId="kRvrhW-CDak" />
                                                    <p style={{"text-align": "center", color: 'white'}}>Item pickup</p>
                                                </div>
                                                <div style={{width: "49%", float: "Right", "padding-right": "1%"}}>
                                                    <YoutubeEmbed embedId="kjdVFiSXM0w" />
                                                    <p style={{"text-align": "center", color: 'white'}}>Dials and Switches</p>
                                                </div>
                                            </div>
                                            <div style={{width: "50%", float: "Right"}}>
                                                <div style={{width: "49%", "padding-right": "1%", float: "Left"}}>
                                                    <YoutubeEmbed embedId="b4WopA1Fgu8" />
                                                    <p style={{"text-align": "center", color: 'white'}}>Buttons (w/sound)</p>
                                                </div>
                                                <div style={{width: "49%", float: "Right", "padding-right": "1%"}}>
                                                    <YoutubeEmbed embedId="n-dGd0zhiP8" />
                                                    <p style={{"text-align": "center", color: 'white'}}>Beer Pump</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </Collapsible>

                                <Collapsible title="•	A tablet (touch) style UI for VR">
                                    <div> 
                                        <h4 class="clear-float">Initial thoughts</h4>
                                        <p>
                                            One of the weird discomforts I found when trying out different VR games is not being able to “touch” the in-game UI when it is literally in arms reach. 
                                            While I do understand that pointing and interacting with the UI through a “laser pointer” from the hands is much more reliable and precise for most situations
                                            (plus it is much easier to implement), 
                                            not being to flip a page by touching when the UI is shaped like a book, 
                                            or a smartwatch is slightly jarring to me. 
                                            So, when thinking about how the player can tell the game what to do, 
                                            I immediately thought of some tablet that they could use directly in-game.
                                        </p> 

                                        <h4 class="clear-float">Prototype and Implementation</h4>
                                        <div class="round_video" style={{background:"gray", color: "black", width: "50%", float: "Right"}}>
                                            {/*<YoutubeEmbed embedId="aMS2xU2jjCs" />*/}
                                            <video loop autoPlay muted controls style={{width: "49%", "padding-right": "1%"}}>
                                                <source src={StuBrew_Tablet_VR} type="video/mp4"></source>
                                                <p>Your browser does not support the video tag.</p>
                                            </video>
                                            {/*<YoutubeEmbed embedId="aMS2xU2jjCs" />*/}
                                            <video loop autoPlay muted controls style={{width: "49%", "padding-left": "1%"}}>
                                                <source src={StuBrew_Tablet_VR_2} type="video/mp4"></source>
                                                <p>Your browser does not support the video tag.</p>
                                            </video>
                                            <p style={{"text-align": "center", color: 'white'}}>A sample of the tablet UI</p>
                                        </div>
                                        <p>
                                            The first thing I need to figure out is whether the collision system is compatible with the unity UI space. 
                                            It took me a few hours to figure out that only the trigger system is compatible with the UI system,
                                            but I eventually got it working. 
                                            Then, I noticed that there is inconsistency between each “press”, 
                                            where sometimes the menus switch multiple times. 
                                            Turns out, the touch button on the next menu is triggering when the menu switches. 
                                            I eventually coded an additional requirement of menu switching where the hand must leave the trigger area before the next action can be triggered.

                                        </p>
                                        <p>
                                            The menu switching is made possible by enabling/disabling related UI. 
                                            When a player presses a button in the UI (touch/laser), the menu switches accordingly. 
                                            A sound is also played so that the player can acknowledge that the button has triggered correctly. 
                                        </p>
                                        <p>
                                            Some menus are added later including the save/load scene UI and the option page. 
                                            All of those are built upon the same UI system mentioned above.
                                        </p>
                                        <br></br>
                                        <p>
                                            The Tablet UI surely is something interesting to use. 
                                            However, the current Implementation did have some flaws that are not ironed out.
                                            The "key" press are sometimes missed, the sliders cannot be slided by touch, 
                                            and the grabbing controls interfere with the point control when near the tablet.
                                            These are some of the problems that I need to solve in the future.
                                        </p>
                                    </div>
                                </Collapsible>

                                <Collapsible title="•	Screen-fading for scene change">
                                    <div> 
                                        <h4 class="clear-float">Experimenting with the PC version</h4>
                                        <div class="round_video" style={{background:"gray", color: "black", width: "25%", float: "Right"}}>
                                            <YoutubeEmbed embedId="ABWMa-nrrBw" />
                                            <p style={{"text-align": "center", color: 'white'}}>PC version</p>
                                        </div>

                                        <p>
                                            When experimenting with changing scenes in game, 
                                            I found that the default scene change ability of unity can be quite abrupt. 
                                            This is a problem for both pc and VR version as it removes some immersion when playing the game. 
                                            I first tried to tackle it in pc version where the framework can be created and tested rapidly. 
                                            A coroutine activated on trigger will spawn a black UI overlay component and change the transparency factor to be opaque. 
                                            A scene change is then triggered, and the black overlay is transferred to the next scene. 
                                            After the coroutine confirmed that the scene change is completed, it then slowly increases the transparency until it is completely transparent. 
                                            After that, the fade is considered finished and will wait until the next scene changes.
                                        </p>

                                        <h4 class="clear-float">Problem with VR</h4>

                                        <div class="round_video" style={{background:"gray", color: "black", width: "25%", float: "Right"}}>
                                            <YoutubeEmbed embedId="bpLwfFClJ1M" />
                                            <p style={{"text-align": "center", color: 'white'}}>VR version</p>
                                        </div>

                                        <p>
                                            The method works well in pc environment, so I added some dynamic fade timing variables and started converting it to adapt to VR as well. 
                                            This, however, is where problems show up. 
                                            I noticed that the overlay is not visible in-game. 
                                            A quick check on the inspector did show the overlay existed, it just never shows up on the VR display. 
                                            Perplexed, I started experimenting with the unity UI settings, but nothing worked. 
                                            I then looked up the issue on the internet to see if anyone has similar issue, and there, 
                                            I found out that UI overlay does not work in VR display mode. 
                                            Seeing I have already spent three days on this, I come up with a quick fix for this project. 
                                            While the overlay doesn’t work, a screen 0.1 unit in front of the camera can cover all the display. 
                                            Using this knowledge, the fade script was modified to differentiate between VR and PC environments and can switch to the VR type fading when it needed to. 
                                        </p>
                                        <br></br>
                                        <h4 class="clear-float">Problems with this solution</h4>
                                        <p>
                                            While the new fade screen worked for this project, it will cause problems in future projects. 
                                            The major one would be a “screen” will be visible in “third person”, should the need arise. 
                                            While this can be fixed by some rendering magic so that it appears to be transparent to other cameras, 
                                            a better and more uniform solution would need to be devised when using it in a new project.
                                        </p>
                                        <h4 class="clear-float">Aesthetics</h4>
                                        <p>A door type trigger is then added so that the scene change can be triggered in a more immersed fashion.</p>
                                    </div>
                                </Collapsible>
                                
                                <Collapsible title="•	Functional save game">
                                    <div> 
                                        <h4 class="clear-float">Save System</h4>

                                        <div class="round_video" style={{background:"gray", color: "black", width: "25%", float: "Right"}}>
                                            <YoutubeEmbed embedId="2f_rVQ0Vlnc" />
                                            <p style={{"text-align": "center", color: 'white'}}>A example of save/load system</p>
                                        </div>

                                        <p>
                                            During testing, I found that the process of replaying the brewing scene 
                                            just to test some minor adjustment at the end of the process quite tedious. 
                                            That’s when the thought of the save game feature comes in. 
                                        </p>

                                        <h4 >First attempts</h4>

                                        <p>
                                            The first goal was to create a save system for objects. 
                                            This is because objects are the result of the brewing process and should be 
                                            (at least I thought it was) a simpler and more unified system, 
                                            which I could build upon for the brewing process itself afterwards. 
                                            To start, I found a tutorial online for making a Json save file via unity. 
                                            The tutorial lays out the nature of a save system, 
                                            a scene data wrapping around each individual object type data. 
                                            I didn’t completely copy the tutorial as I feel it was too rigid and will be cumbersome to modify later, 
                                            but the concept remains. 
                                            The save system is activated as follows:
                                        </p>
                                        <p>
                                            When the “save” button was pressed, 
                                            the save system calls a save function in the scene save script to save a scene. 
                                            The scene save script will find all savable objects and call a save function for that object’s type to convert necessary data to Json format. 
                                            It is then store in a List, 
                                            which returns to the higher levels. 
                                            When the “load” button was pressed, the system can then retrieve the data from the save file, 
                                            change to the saved scene and spawn the object with the correct properties type by type, 
                                            object by object. 
                                        </p>
                                        <p>
                                            I built the system from the smallest data pattern I thought of at the time, 
                                            which was the barrels used to store the “brew” after a brewing session. 
                                            The barrel save data consists of the position of the object and the “brew properties” (volume, fill, colour etc.). 
                                            A reference to barrel prefab allows the system to spawn the barrel when loading. 
                                            A similar data structure was introduced for the player object as well. 
                                        </p>

                                        <h4 class="clear-float">Recording the scene</h4>

                                        <p>
                                            Problem arises halfway through development as the initial test only considers one scene. 
                                            That meant that while the barrel can be saved, 
                                            which scene it is saved from wasn’t.
                                            An extra layer is added to store the current scene and consists of a list of the same scene save structure mentioned above. 
                                        </p>

                                        <h4 class="clear-float">Object Persistence</h4>

                                        <p>
                                            Another problem was data persistence in-game. 
                                            The player should be able to observe that the items should be roughly at the same place when they leave and return to a scene. 
                                            An extra variable was passed from the save function call so that if the player is transferring from one scene to another, 
                                            their work will be saved automatically so that it can be loaded when they travel back.
                                            A trick I need to include is that the transition between the scenes will not load 
                                            the player’s location so that the player always spawn facing away from the door they just ”walk though”. 
                                        </p>

                                        <h4 class="clear-float">Interacting with the saves</h4>

                                        <p>
                                            A final detail added four save slot (one for autosave, three for manual save) 
                                            and the relevant data to display the date and scene name being saved finished the implemented save function I got in game.  
                                        </p>

                                        <h4 class="clear-float">The initial problem remains...</h4>

                                        <p>
                                            So, you might have noticed that the save function did not include saving the brewing progress during brewing, 
                                            and in the end, 
                                            I didn’t solve my original problem (oops). 
                                            The reason was twofold, I thought that the save feature would be relatively straightforward, 
                                            and thus focused on the object side first. 
                                            However, the scope of a functional save game feature did go out of control pretty quickly and once all of that was developed, 
                                            the system was looking like an incoherent mess and further developing it would be complicated. 
                                            The remaining project time is also concerning as some of the playtest shows that the game can be hard to follow, 
                                            and I had to allocate time to fix that issue. 
                                        </p>
                                        <p>
                                            The fix should be relatively straightforward, is just that the time needed to modify the system could be put to better use, so that was what I did.
                                        </p>
                                        <h4 class="clear-float">Looking foward</h4>
                                        <p>
                                            I did learn how to make a functional save game feature and have a glimpse of how I should approach it when starting a new project. 
                                            Next time I’ll definitely plan on the save game feature when I start the project and build around it. 

                                        </p>
                                    </div>
                                </Collapsible>
                            </div>

                            <h4>Room for improvements: </h4>
                            <div>
                                <Collapsible title="•	Extending the gameplay loop">
                                    <div>
                                        <div class="round_video" style={{background:"gray", color: "black", width: "25%", float: "Right"}}>
                                            <img src={StuBrew_Stall_serving} style={{width: "100%"}} alt="Beer selling minigame: An attempt at diversifing gameplay to maintain interest."></img>
                                            <p style={{"text-align": "center", color: 'white'}}>
                                                Beer selling minigame: An attempt at diversifing gameplay to maintain interest.
                                            </p>
                                        </div>
                                        
                                        <h4>Lacking powerful hooks in game</h4>
                                        
                                        <p>
                                            While the final game did have a complete gameplay loop, 
                                            I did notice that the loop might not be effective in keeping player attention for a longer period. 
                                            This seems to stem from the single “hook” of the game which basically boils down to “the desire to earn money”. 
                                            However, the money in the game does not enable diverse options due to the time constraints of the project. 
                                            This means that even if the base monetary system is in place, 
                                            it cannot achieve its full potential at its current form. 
                                        </p>
                                        <h4>Improved economy</h4>
                                        <p>
                                            A remedy is to extend the use of in game money. If the current problem of the monetary system is the lack of purpose,
                                            then it would be useful if there are game mechanics that can only be unlocked by accumulating wealth. 
                                            That way the player will be hooked on to the game longer based on the curiosity of what could be explored.
                                            In this project, it could be recipes and/or ingredients that can be unlocked by "buying" the right to buy them,
                                            or unlocking better, more efficient equipment. 
                                        </p>
                                        <h4>Popularity</h4>
                                        <p>
                                           A further idea is to tie in the "quality" of the beer to the number of visitors via "Popularity". 
                                           If the player can match the beer flavour to the NPC's need, then more visitor would spawn, increasing revenue.
                                           This can also encourage players to pay attention to what aspects of the brewing process affect which part of flavour,
                                           which will also increse the effectiveness of the education side of the game.
                                        </p>
                                        <p>
                                           If I would put more time in this project in the future, this would be the first part I'd start.
                                        </p>
                                    </div>
                                </Collapsible>

                                <Collapsible title="•	Overhauling item system">
                                    <div>
                                        <div class="round_video" style={{background:"gray", color: "black", width: "25%", float: "Right"}}>
                                            <img src={StuBrew_Grab1} style={{width: "50%"}} alt="Player Grabbing a can of malt"></img>
                                            <img src={StuBrew_Grab2} style={{width: "50%"}} alt="Player Grabbing a glass of beer"></img>
                                            <img src={StuBrew_Grab3} style={{width: "50%"}} alt="Player Grabbing a barrel using mouse and keyboard"></img>
                                            <p style={{"text-align": "center", color: 'white'}}>
                                                The only common thing between these items are how they are picked up.
                                            </p>
                                        </div>

                                        <h4>Overhauling item system</h4>
                                        <p>
                                            The development of the save system wasn’t a nice experience due to the item system being kind of messy. 
                                            The current item system is basically a custom prefab for each type of Object the game needs. 
                                            If there is a need for a specific data structure, 
                                            a new script is added to the object which contains the variable and functions that object needs. 
                                            This only works because there are not a lot of object types in the project, 
                                            but it is already troublesome to work a save system for each type one by one.
                                        </p>
                                        <p>
                                            One improvement I come by, when searching for options, was utilizing “scriptable objects”. 
                                            Every object will have its own related static data stored in a scriptable object for quick type check and functionality check. 
                                            A item instance script will be attached to GameObject instances so that dynamic variables need for individual functionalities can be implemented. 
                                            If the object needed to be instantiated in-game, 
                                            then there will be a reference to the prefab game object in the scriptable object as the prefab is shared among the object type.
                                        </p>
                                        <p>
                                            This currently is still a very early thought on how I will deal with this in the future. 
                                            I might start a project later just to play around and test this idea before committing to this on my next project.

                                        </p>
                                    </div>
                                </Collapsible>

                                <Collapsible title="•	An intuitive tutorial">
                                    <div>
                                        <div class="round_video" style={{background:"gray", color: "black", width: "30%", float: "Right"}}>
                                            <h5 style={{color: 'white'}}>Outlines:</h5>
                                            <img src={UI_1} style={{width: "50%"}} alt="Outlines highlighting objects within bounds"></img>

                                            <h5 style={{color: 'white'}}>Pointers:</h5>
                                            <img src={UI_2} style={{width: "50%"}} alt="A floating pointer on top of the screen pointing to interest points"></img>
                                            <img src={UI_3} style={{width: "50%"}} alt="A floating pointer on the interest points"></img>
                                            <img src={UI_4} style={{width: "30%"}} alt="A floating pointer on the player's hand in VR"></img>

                                            <h5 style={{color: 'white'}}>Guidelines:</h5>
                                            <img src={UI_6} style={{width: "43%"}} alt="Guidelines on the tablet in PC mode"></img>
                                            <img src={UI_5} style={{width: "57%"}} alt="Guidelines on the tablet in VR mode"></img>

                                            <p style={{"text-align": "center", color: 'white'}}>
                                                Attempts of adding guidence in game.
                                            </p>
                                        </div>
                                        <h4>An intuitive tutorial</h4>
                                        <p>
                                            This project does not have good user experience as I kind of forgot to tell the player what to do in order to play. 
                                            This stems from my initial belief that I should not directly tell people what to do in games as players will feel being ordered around. 
                                            In my mind, 
                                            I was hoping to let the player discover the process by messing around with the equipment and/or trying mixing ingredients together. 
                                            However, I didn’t think of whether the player can piece together the process without any context/tips. 
                                            A playtest with two of my friends told me the game is barely playable (because of confusion) without any external instruction. 
                                            They eventually get it, but it definitely not the smoothest gaming experience they had. 
                                            Some corrective measures had been added since the playtest, such as simplifying labels, 
                                            objective markers, and an in-game walkthrough, which did help, but still feels off.
                                        </p>
                                        <p>
                                            The problem is that the player may not be familiar with both the game controls and the brewing process. 
                                            It would be a bad idea to get throw instructions directly at the player, 
                                            so I did think of ways to solve this problem. 
                                        </p>
                                        <p>
                                            First, to let the player get used to the controls, 
                                            the ”main menu” could be changed to a sandbox like area where the players can interact with buttons, 
                                            lever and such to get used to how items can be interacted. 
                                            In game pop-up, 
                                            like the one in the PC version could also be scripted for each interactable object so show that the items can be interacted. 
                                        </p>
                                        <p>
                                            Second, objective markers can be modified to only appear when nothing starts after a while of gameplay. 
                                            The time marker should allow plenty of time for exploration while acting as a guide when the player is confused. 
                                        </p>
                                        <p>
                                            One problem remains and I have yet to solve: 
                                            How tips can be displayed in VR. 
                                            For the PC version, information can be neatly displayed on an overlay. 
                                            However, in VR, the HUD idea seems to be quite nauseating so directly copying it from PC game isn’t the best idea. 
                                            The Tablet idea was one of the ways I tried to get around this, 
                                            but it is not suitable for push notifications. 
                                            Maybe I could make a “smartwatch” display that buzzes when new info is updated, 
                                            but I imagine it would be quite tiring to hold your arms long enough to read it all. 
                                            This also ignores the idea that reading small text in VR isn’t pleasant. 
                                            Anyways, this remains to be an aspect to be experimented on in future projects.
                                        </p>
                                    </div>
                                </Collapsible>
                            </div>

                            <h4 class="clear-float">Final thoughts: </h4>
                            <p>
                                This project was a challenging one, there are lots of different aspect i need to solve by my own.
                                While there are a lot of stuff I would like to improve if given a bit more time, 
                                I really enjoy the process of making it.
                            </p>
                            <p>
                                The project has given me chance to test some of my ideas: 
                                PC-compatibilities, Tablets, and save-games are something I thought of before this project even started, 
                                but the details can only be tested in a project.
                                The ability to see the flaws and adjust my ideas to fix it was very enjoyable and i did learn a lot through the process.
                            </p>
                            <p>
                                The project also shows another important aspects of a game to me. 
                                Sound effects aren't what i thought would matter too much in a game, but the difference with them added was immense.
                                Same with the visual confirmations in interactions. 
                                You would not mind if it wasn't implemented yet, but once you seen it in action, you would not want to go back.
                                (both of them took me a week together...).
                            </p>
                            <p>
                                All in all, I like the concept of the project, I enjoy the challenge, and I had great fun trying new ideas.
                                I look forward to the many more projects like this to come.
                            </p>

                            <h4 class="clear-float">Made using: </h4>
                            <p>Unity</p>
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
export default CSC8599;