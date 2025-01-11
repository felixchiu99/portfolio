import '../../Project.css';
import * as CommonComp from "../../../CommonComponents";
import React from 'react';

export default function Component() {
    return (
        <header className="Project">
            <div className="App">
            
                <header className="Project">
                    <h2>The Last Present V0.3.0</h2>
                    <h3>Submission for "Devs That Jam 36hr Challenge #9"</h3>
                    <h5 class="description">Updated : 2025-01-04</h5>
                    <h4 class="description">
                        Background:
                    </h4>
                    <p class="description">
                        I entered a small game jam to encourage myself making projects for portfolio.
                    </p>
                    <p class="description">
                        As I did not finish the game last time I entered a game jam, I want to focus on finishing the game within the time limit.
                    </p>

                    <div style={{ width: "40%", "padding": "2%", float: "Right" }}>
                        <div class="round" style={{ background: "white", color: "black" }}>
                            <h4>Version 0.3.0 (Game Jam Version)</h4>
                            <div style={{ width: "100%", "padding-right": "1%", float: "Left" }}>
                                <CommonComp.YoutubeEmbed embedId="Od5BqqAO56k" />
                                <p>Showcase of this project (edited for easier understanding)</p> 
                            </div>
                            <div>
                                <a href="https://yogchiu.itch.io/the-last-present">
                                    <button class="button">Link to Itch page</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <h4 class="description">
                        Initial thoughts:
                    </h4>
                    <p class="description">
                        When I saw the single word "present", I was at a lost for what I wanted to do.
                    </p>
                    <p class="description">
                        Then I remembered seeing a youtube commment about wanting a to see a game from "the ring" from "the lord of the rings"'s perspective.
                        Where you as the player can only achieve your goal by influencing NPC characters around you passively.
                    </p>
                    <p class="description">
                        I thought that I could adopt this concept into a present delivery game where the player need to get NPCs to help reaching a point on the map.
                    </p>
                    <p class="description">
                        This idea should be easy enough to be finished within 36 hrs and can add/remove some mechanics depending on the time limit.
                    </p>

                    <h4 class="description">
                        Requirements:
                    </h4>
                    <ul class="description">
                        <li>Game should end when player reached goal.</li>
                        <li>The player should have some indicator to help locate the end goal.</li>
                        <li>The player should be incentivised to be picked up by NPC rather than rolling on it's own.</li>
                        <li>Game should have decent graphic (not box like)</li>
                        <li>Game should have an end</li>
                    </ul>
                    <div class="description">
                        <CommonComp.Collapsible title="Implementation / The Process">
                            <CommonComp.Collapsible title="The First ~5 hrs">
                                <h4>
                                    Movement
                                </h4>
                                <p>
                                    Once I have a rough idea of what I wanted to make, I decided to focus the first few hours to how the player will move.
                                </p>
                                <p>
                                    I envisioned having a third person view on the player avatar (present), 
                                    while controlling it with a point and click system to apply a force on the box to nudge it in the desired direction.
                                </p>
                                <p>
                                    The is also a "willpower" gauge that limit what players can do in a consecutively. 
                                    This is a way to allow the player to do "last mile" delivery while showing that being picked up should be more efficient than moving on your own.
                                </p>
                                <p>
                                    The present is presented with a force offset and angled slighty upward to give the movement a "rolling" feeling.
                                </p>
                                <p>
                                    I added a willpower bar to the HUD at this time as well.
                                </p>
                                <h4>
                                    Goal (Delivery Point)
                                </h4>
                                <p>
                                    I then added a simple actor in the world to trigger the "end" of a level.
                                </p>
                                <p>
                                    I decided at this point a "stopwatch" system should be a fair score for ranking a playthough.
                                    This is easy to implement, encourages player to play again (if the game is complete), and would remove the need of a complex save system.
                                </p>
                                <p>
                                    I added a timer (in seconds) to the HUD and allow the goal to stop the stopwatch.
                                </p>
                                <p>
                                    A brief test show that the timer in sec would not be accurated enough for counting the attempts.
                                    So I adapted the timer to use miliseconds.
                                </p>
                            </CommonComp.Collapsible>
                            <CommonComp.Collapsible title="The next second sprint (~8 hrs)">
                                <p>
                                    The idea of recording the time of each attempt did raise the need of a leaderboard and a menu system.
                                </p>
                                <p>
                                    So I spent the next few hours making menus and linking them with button redirections and making the save time / load time functions.
                                </p>
                                <p>
                                    Having worked for ~ 13 hrs (not counting rest time), I decided to go the bed and resume when I wake up. 
                                </p>
                            </CommonComp.Collapsible>
                            
                            <CommonComp.Collapsible title="Map and AI (~ 6 hrs)">
                                <h4>The Map</h4>
                                <p>
                                    I started the new day by first replacing the default level with a custom landscape.
                                </p>
                                <p>
                                    I used some free asset on the fab marketplace to add some character to the game.
                                </p>
                                <p>
                                    My main focus is two fold. One, is to make a valley so that the player will not go out of bound.
                                    And secondly is to make a populated area so that Npcs will be expected to appear.
                                </p>
                                <p>
                                    Once I am happy with the general look of the landscape, 
                                    I added a hard boundary around the area just in case the player can somehow reach it and started working on Ai.
                                </p>
                                <h4>NPCs</h4>
                                <p>
                                    When I started this, I was hoping to have some time building an Ai System that move with some purpose.
                                </p>
                                <p>
                                    However, considering I only have ~ 9 hrs left at this point, 
                                    I opted for the easy "random" destination of NPCs, Hoping that if enough npc spawns, it will make a difference.
                                </p>
                            </CommonComp.Collapsible>

                            <CommonComp.Collapsible title="Fixing github and Pickup ability(~ 4 hrs)">
                                <p>
                                    At this time, I have added quite a lot of "asset" in the game, and was having trouble uploading the changes to github.
                                </p>
                                <p>
                                    Afraid of losing all changes, I spent about an hour fixing this.
                                </p>
                                <p>
                                    Then, spend the rest of the time allowing the present to be set to floating in front of the Npc when being picked up.
                                </p>
                                <p>
                                    Each Npc will be randomly assigned a preference.
                                    If the player activates their "tempt" action, 
                                    and if the npcs nearby have the same preference, 
                                    the NPC will pick it up.
                                </p>
                            </CommonComp.Collapsible>
                            <CommonComp.Collapsible title="The Last ~4 hours">
                                <p>
                                    With time ticking, I have uploaded this version as v0.2.0 to itch in case I did not make it in time.
                                    And have dinner during it was building and uploading.
                                </p>
                                <p>
                                    After the break, I prioritise making a floating goal pointer to aid players identifying where they should head for clear game direction.
                                </p>
                                <p>
                                    Then I painted the npc in different colour to allow players to identify which "ablitity" to tempt npcs to pick them up.
                                </p>
                                <p>
                                    Realizing I don't have time to fix the broken timer, I took a quick look at the map, 
                                    adjusted npc spawner positions, 
                                    then raced the clock to submit the latest version on itch with ~ 5 mins to spare.
                                </p>
                            </CommonComp.Collapsible>
                            
            
                            
                        </CommonComp.Collapsible>
                    </div>
                    <h4 class="description">
                        Result:
                    </h4>
                    <ul class="description">
                        <li>The player can move by clicking at where they are want to go.</li>
                        <li>Timer (if not bugged) will stop and be saved when present reached destination.</li>
                        <li>Leaderboard is present for tracking player "acheivement".</li>
                        <li>Basic NPC movement</li>
                        <li>Basic Menu system</li>
                    </ul>
                    <div style={{ width: "40%", "padding": "2%", float: "Right" }}>
                        <div class="round" style={{ background: "white", color: "black" }}>
                            
                            <div style={{  width: "49%", "padding-right": "1%", float: "Left" }}>
                                <img style={{ width: "100%" }} src="https://drive.google.com/thumbnail?id=1H4bwEsMxcbVrHR5F0S7aVTVkPTjaducJ" alt="Normal view from when playing" />
                                <p style={{ "text-align": "center"}}>Player's View when playing.</p>
                            </div>
                            <div style={{  width: "49%", "padding-right": "1%", float: "Left" }}>
                                <img style={{ width: "100%" }} src="https://drive.google.com/thumbnail?id=1x8hE4zSHSNaITdHfLzIp6uNmDDvphBny" alt="Normal view from when playing" />
                                <p style={{ "text-align": "center"}}>Player's Being Picked up.</p>
                            </div>
                            <div>
                                <img style={{ width: "50%" }} src="https://drive.google.com/thumbnail?id=1bHBrIfkL7q--m4Xtt1E5cRfwXvDwE_xR" alt="Normal view from when playing" />
                                <p style={{ "text-align": "center"}}>Example of Simple Menus</p>
                            </div>
                        </div>
                    </div>
                    
                    <h4 class="description">
                        Room for improvement:
                    </h4>
                    <ul class="description">
                        <li>BUG - Timer overflow after ~ 3 minutes</li>
                        <li>BUG - NPC not always spawn </li>
                        <li>BUG - Being picked up even with incorrect temptation effect </li>
                        <li>Improvement - Lure VFX </li>
                        <li>Improvement - Temptation VFX </li>
                        <li>Improvement - General SFX </li>
                        <li>Improvement - NPC Slightly Better Pickup mechanic (pause & think animation) </li>
                        <li>Improvement - Logical NPC Path (Able to predict where they want to go.)</li>
                        <li>Improvement - NPC destination preview</li>
                    </ul>
                    <h4 class="description">Some Comments:</h4>
                    <p class="description">I am quite proud of what I have acheived with this submission.</p>
                    <p class="description">
                        While there are a lot of stuff I was not able to add during the game jam, 
                        I have managed to finish most of the essential feature within the time limit.
                    </p>
                    <p class="description">
                        Considering I didn't manage to even finish with more time allowed in the last game jam, 
                        there is significant improvement in my game making ability.
                    </p>
                    <p class="description">
                        Next time, I want to maintain this ability for finishing in time, 
                        allocate myself at least 2 hrs for polishing bugs, 
                        and allowing more depth in game mechanics/goals.
                    </p>
                    <p class="description">
                        I plan to achieve this via consolidating some reusable systems (menu, saves, character, AI),
                        so that I can reduce time used to setup these system and instead focus on making a more cohersive experience.
                    </p>

                    <h5>P.s. Will work on finishing this with a fix later on.</h5>
                </header>

            </div>
        </header>
    );
}