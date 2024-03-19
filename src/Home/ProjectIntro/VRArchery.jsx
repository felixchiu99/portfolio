import '../../App.css';
import React from 'react';
import YoutubeEmbed from "../../YoutubeEmbed";
import * as Status from '../../ProjectStatus';

export default function Project() {
    return (
        <header className="Project">
            <h3>Archery VR</h3>
            <h4>Status: <Status.Completed></Status.Completed></h4>
            <div class="row">
                <div class="column">
                    <div class="round">
                        <h4 class="description">
                            Game Engine: Unity
                        </h4>
                        <p class="description">
                            This is a personal project I did in january 2023 during the winter break (~10 days or 80 hours).
                            <br></br>
                            The idea is to make a VR game to mimic the process of a archery competition and see if VR can help with training archery.
                            <br></br><br></br>

                            <br></br>

                            <a href="/portfolio/#/ArcheryVR">
                                <button class="button">Read More</button>
                            </a>
                        </p>
                    </div>
                </div>
                <div class="column" >
                    <div class="round" style={{ background: "white", color: "black" }}>
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
    );
}
