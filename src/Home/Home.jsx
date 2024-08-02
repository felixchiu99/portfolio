import '../App.css';
import React from 'react';
import Collapsible from "../Collapsible";
import * as Intro from "../Project/index";

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

            <Intro.InteriorDeco></Intro.InteriorDeco>

            <Intro.AirshipProject></Intro.AirshipProject>

            <Intro.StuBrew></Intro.StuBrew>

            <Intro.InkHell></Intro.InkHell>

            <Intro.ArcheryVR></Intro.ArcheryVR>

            <div className="ProjectAlt">
                <Collapsible title="Older Works">
                    <Intro.CSC8503></Intro.CSC8503>
                    <Intro.CSC8502></Intro.CSC8502>
                </Collapsible>
            </div>
        </div>
    );
}
export default Home;