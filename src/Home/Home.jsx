import '../App.css';
import React from 'react';
import YoutubeEmbed from "../YoutubeEmbed";

function Home() {
    return (
        <div className="App">
            <header className="Main Title">
                <h1> Felix Chiu's Portfolio</h1>
                <header className="Project">
                    <p class="description">
                        Hi! I am Felix and I am a graduate of Newcastle University in MSc Computer Game Engineering.
                        <br></br> 
                        The course specialise in teaching student game graphic via shaders, game engine physics and various other game Technologies such as game AI and networking.
                        <br></br>
                        I am currently seeking employment in the video game industry as a graduate programer.
                        <br></br>
                        This is a place for me to store and show my projects during my studies.
                    </p>
                </header>
            </header>

            <header className="Project">
                <h3>CSC8599 StuBrew: A VR Brewing experience</h3>
                <div class="row">
                    <div class="column">
                        <div class="round">
                            <div>
                                <p class="description">
                                    This project serve as the dissertation project for my game engineering masters degree.
                                    StuBrew is a student-run microbrewery in newcastle university 
                                    and this project was created with their use when they attend brewing festivals in mind.
                                </p>
                                <p class="description">
                                    It is a single person project about showing people the in's and out's of brewing beer. 
                                    The player can brew beers and sell it at a "stall", which was similar to the StuBrew's regular operations.
                                </p>
                                <p class="description">
                                    The Final game is playable in both VR and in standard PC.
                                </p>
                                
                                <a href="/portfolio/#/CSC8599" class="description">
                                    <button class="button">Read More</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="column" >
                        <div class="round" style={{background:"white", color: "black"}}>
                            <h4>StuBrew: Demo</h4>
                            <YoutubeEmbed embedId="DK0heSvBuV8" />
                            <p class="description">
                                Brewing and Selling to your hearts content.
                            </p>
                            <div>
                                <a href="https://github.com/felixchiu99/StuBrew">
                                    <button class="button">Repository</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <header className="Project">
                <h3>CSC8508 InkHell (Team Project)</h3>
                <div class="row">
                    <div class="column">
                        <div class="round">
                            <p class="description">
                                This is the team project I worked on with 7 other teammates for the CSC8508 course.
                                The requirement is for us to ultilies a "paint" mechanic as a core gameplay feature.
                                The game we made is a 3D bullet hell where you need to survive the paint and defeat the boss.
                                <br></br><br></br>
                                My Main Contribution is the network multiplayer, player controller and general bugfixes/balancing. More in the details.
                                <br></br><br></br>
                                <a href="/portfolio/#/CSC8508">
                                    <button class="button">Read More</button>
                                </a>
                            </p>
                        </div>
                    </div>
                    <div class="column" >
                        <div class="round" style={{background:"white", color: "black"}}>
                            <h4>Ink Hell</h4>
                            <YoutubeEmbed embedId="TUJYlqpcz34" />
                            <p class="description">
                                Can you dodge your way to success?
                            </p>
                            <div>
                                <a href="https://github.com/blacktack2/MastersGroupProject2023">
                                    <button class="button">Repository</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <header className="Project">
                <h3>Archery VR</h3>
                <div class="row">
                    <div class="column">
                        <div class="round">
                            <p class="description">
                                This is a personal project I did in january 2023 during the winter break (~10 days or 80 hours).
                                <br></br>
                                The idea is to make a VR game to mimic the process of a archery competition and see if VR can help with training archery.
                                <br></br><br></br>
                                <a href="/portfolio/#/ArcheryVR">
                                    <button class="button">Read More</button>
                                </a>
                            </p>
                        </div>
                    </div>
                    <div class="column" >
                        <div class="round" style={{background:"white", color: "black"}}>
                            <h4>Archery VR</h4>
                            <YoutubeEmbed embedId="2Tk4htBoEQo" />
                            <p class="description">
                                Can you get 300 points in total? 
                                If you fail, try using a opposite handed bow, you might just be using the wrong bow!
                            </p>
                            <div>
                                <a href="https://github.com/felixchiu99/VR_Archery">
                                    <button class="button">Repository</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <header className="Project">
                <h3>CSC8503 Game Technologies Coursework</h3>
                <div class="row">
                    <div class="column">
                        <div class="round">
                            <p class="description">
                                This is the coursework for the Advanced game Technologies module.
                                The main goal of this coursework is to explore the concept behind physics, AI and networked gaming mechanics.
                                <br></br><br></br>
                                My Main focus is on the networking part. 
                                I spent a week implementing how to move the character and spawn players in server, 
                                which I had some difficulty understanding at the beginning as the given material has left out quite a lot.
                                I have to work out quite a lot of missing feature by searching suggestion on the web and adpoting them in c++.
                                Unfortunately, due to time limitation, I could only create the bare minimum multiplayer functionality.
                                <br></br><br></br>
                                Other parts that i have made as well:
                                <br></br> -Sleeping physics object if the object is stationary for too long.
                                <br></br> -Simple Wandering AI which fled when approached.
                                <br></br> -Pathfinding AI which Pathfind to player if player is in maze.
                                <br></br><br></br>
                                The final result is a simple sandbox that had the capability of 4 simultaneous client connection, with disconnection process included.
                                <br></br><br></br>
                                (A skeleton framework is provided as a starting off point where rendering were already completed. 
                                The program is written in c++ and used enet for networking)
                            </p>
                        </div>
                    </div>
                    <div class="column">
                        <div class="round" style={{background:"white", color: "black"}}>
                            <h4>Goat simulator simulator</h4>
                            <YoutubeEmbed embedId="4VB93oPm0m0" />
                            <YoutubeEmbed embedId="BxJtYHKY5F4" />
                            <p class="description">
                                Basicly a shameless low quality ripoff of the original goat simulator... With a barely usable multiplayer feature.
                            </p>
                            <div>
                                <a href="https://github.com/felixchiu99/CSC8503-Game-Technologies-Coursework">
                                <button class="button">Repository</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <header className="Project">
                <h3>CSC8502 Game Graphic Coursework</h3>
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
                        <div class="round" style={{background:"white", color: "black"}}>
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
        </div>
    );
}
export default Home;