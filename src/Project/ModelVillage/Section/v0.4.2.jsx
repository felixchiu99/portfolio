import '../../Project.css';
import * as CommonComp from "../../../CommonComponents";
import React from 'react';

export default function Component() {
    return (
        <header className="Project">
            <div className="App">
            
                <header className="Project">
                    <h2>Model Village V0.4.2</h2>
                    <h3>Submission for GMTK 2024</h3>
                    <h5 class="description">Updated : 2025-01-04</h5>
                    <h4 class="description">
                        Theme : Fit to Scale
                    </h4>

                    <h4 class="description">
                        Background:
                    </h4>
                    <p class="description">
                        I entered a game jam to during job hunting to encourage myself to have more example.
                    </p>
                    <p class="description">
                        I did not expect I will be employed before this game jam so I was a little bit under prepared for this game jam.
                    </p>

                    <div style={{ width: "40%", "padding": "2%", float: "Right" }}>
                        <div class="round" style={{ background: "white", color: "black" }}>
                            <h4>Version 0.4.2 (Game Jam Version)</h4>
                            <div style={{ width: "100%", "padding-right": "1%", float: "Left" }}>
                                <CommonComp.YoutubeEmbed embedId="Y9fB1D7mtvQ" />
                                <p>The Submitted version of this project</p>
                            </div>
                            <div>
                                <a href="https://yogchiu.itch.io/the-last-present">
                                    <button class="button">Link to Itch page</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <h4 class="description">
                        Initial Ideas (did not finish):
                    </h4>
                    <p class="description">
                        I wanted to make a game where you are helping a small scaled Ai village grow.
                    </p>
                    <p class="description">
                        You will get different tiles and building cards by a vending machine to provide the npc different resources and land to expand.
                    </p>
                    <p class="description">
                        I was hoping to create an ai that will do their own thing, gathering resources, and building. If the Npc are living "good", points will be provided to the player and allow them to "buy" cards.
                    </p>
                    <p class="description">
                        I planned for the ending where if the you "did good", the npcs will setup a festival to celebrate their massive overlord.
                        Whereas if you "did bad", the npcs will revolt and a "giant" will open up the place you are in and throw you out.
                    </p>
                    <p class="description">
                        Well, I did not manage to finish all of that, so lets see what I have actually done.
                    </p>

                    <div class="description">
                        <CommonComp.Collapsible title="Implementation / The Process">
                            <p>
                                I spend the first ~6 hrs tinkering with a grid placing system, 
                                allowing me to add and remove tiles on the "table."
                            </p>  
                            <p>
                                The next ~ 8 hrs was making a system for selecting different tile types and the related HUD card selector for it.
                            </p>
                            <p>
                                Then, I spend ~ 6 hrs time recreating a simple Ai system (waiting to random points) and scaling the grid tile system to fit the ai pathfinding of Unreal engine.
                                I remember having trouble finding a precise enough scale for the pathfinding while fixing some scaling issues on placement.
                            </p>
                            <p>
                                After waking up and returning from church the next morning, I started crafting the Ai system, 
                                hoping to make a system work for the AI to search for resources and going to "harvast".
                                And end up wasting ~3 hrs re-learning UE5's smart object systems.
                            </p>
                            <p>
                                4 hrs later I made a very crude system for the "town" to manage what resources are being harvested,
                                 and the npc will go and stand by the resource to "harvest" it. 
                                 But some where in this code I must have introduced a reference error and it caused the game to crash.
                            </p>
                            <p>
                                By then, I knew I wouldn't be able to finish my inital vision, 
                                so I just spent the rest of the time trying to fix the memory issue and improve the AI behavior tree, 
                                but with not much improvement.
                            </p>
                        </CommonComp.Collapsible>
                    </div>
                    <h4 class="description">
                        Result:
                    </h4>
                    <ul class="description">
                        <li>Place tiles on table grid</li>
                        <li>Ai walk to interest point</li>
                        <li>Card HUD</li>
                        <li>Sound FX for some interaction</li>
                        
                    </ul>
                    
                    <h4 class="description">
                        Bugs:
                    </h4>
                    <ul class="description">
                        <li>BUG - Crash when the NPC moves for a while</li>
                    </ul>
                    <h4 class="description">Some Comments:</h4>
                    <p class="description">
                        This Game Jam has been one of my most focused activity so far. 
                        Despite slower than expected progress,
                        when factoring the game jam period, 
                        I am surprised by how fast I can come up with the implemented system considering I worked more than 60 hours in my last project to achieve similar result. 
                        While it is a shame that I can't finish on time, 
                        I think this is a good base for me to experiment with UE5's AI system and prepare for my long term project. 
                        I will definitely use this as a tool to learn Ai system.
                    </p>
                    <p class="description">
                        What I should do next time is to limit the scope of the idea and focus on making the product "complete".
                    </p>
                    <p class="description">
                        To see the result of my second gamejam, click here.
                    </p>
                    <p>
                        To see the result of my second gamejam, click here: <br></br>
                        <a href="/portfolio/#/TheLastPresent">
                            <button >Next Gamejam project: "The Last Present"</button>
                        </a>
                    </p>
                    
                    <h5>P.s. Will not "finish" ModelVillage with the original idea, instead treating it a sandbox for learning Ai systems.</h5>
                </header>

            </div>
        </header>
    );
}