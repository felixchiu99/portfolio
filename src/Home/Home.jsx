import '../App.css';
import React from 'react';
import Collapsible from "../Collapsible";
import * as Projects from "./ProjectIntro";

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
                        This is a place for me to store and show my projects.
                    </p>
                </header>
            </header>

            <Projects.InteriorDeco></Projects.InteriorDeco>

            <Projects.AirshipProject></Projects.AirshipProject>

            <Projects.StuBrew></Projects.StuBrew>

            <Projects.InkHell></Projects.InkHell>

            <Projects.VRArchery></Projects.VRArchery>

            <div className="ProjectAlt">
                <Collapsible title="Older Works">
                    <Projects.CSC8503></Projects.CSC8503>
                    <Projects.CSC8502></Projects.CSC8502>
                </Collapsible>
            </div>
        </div>
    );
}
export default Home;