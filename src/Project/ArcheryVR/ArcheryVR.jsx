import '../Project.css';
import React from 'react';
import YoutubeEmbed from "../../YoutubeEmbed";

function ArcheryVR() {
    return (
        <div className="App">
            
            <header className="Project">
                <h3>Archery VR</h3>
                <div class="row">
                    <div class="column">
                        <div class="round">
                            <div class="round" style={{background:"white", color: "black", width: "40%", float: "Right", margin: "3%", "left-margin": "6%"}}>
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
                            <h4>Sumary</h4>
                            <p class="description"  style={{ "padding-left": "0%", "padding-right": "6%"}}>
                                This is a personal project I did in january 2023 during the winter break (~10 days or 80 hours).
                                <br></br>
                                The idea is to make a VR game to mimic the process of a archery competition and see if VR can help with training archery.
                                <br></br><br></br>
                                This project is the first game that I "finished" with all initial feature implemented. 
                                Of course the features was not perfect and there is a couple of bugs that I have not got time to iron out, 
                                but I did learn a lot in prototyping game ideas.
                                <br></br><br></br>
                                Unfortunately, the concept of it helping real life archery did not work out in the end.
                                This is not because of the game mechanics, 
                                but because the physical limitation of the VR headset cannot replicate the feeling of real life archery.
                            </p>
                            <h4>Acheievements </h4>
                            <ul>
                                <li>A completed game with all major mechanics working</li>
                            </ul>
                            <h4>Flaws </h4>
                            <ul class="projectList">
                                <li>The mechanics is kind of buggy</li>
                                <p>The Bow string is made using unity's Configurable Joint,
                                which is configured to be stay within a set distance with the bow limb.
                                When the string hand "releases" the arrow will be shot from the bow,
                                and the string is free to return to it's original position.
                                </p>
                                <li>Cannot replicate real life archery due to physical limitation.</li>
                            </ul>
                            <h4>Made using: </h4>
                            <p>Unity</p>
                            <p>Auto hand (VR interaction plugin)</p>
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
export default ArcheryVR;