import '../App.css';
import React, { useState } from "react";
import * as CommonComp from "../CommonComponents";
import ProjectIntros from "./ProjectIntros"
import InfoList from "../Project/indexIntroHighlight";

function Home() {
    const [displayInfo, setDisplayInfo] = useState(InfoList);

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

            <CommonComp.SortAndFilter setParentDisplayList={setDisplayInfo} dataList={InfoList}></CommonComp.SortAndFilter>

            <ProjectIntros InfoList={displayInfo}></ProjectIntros>

            <div className="ProjectAlt">
                <a href="/portfolio/#/AllProjects" >
                    <button class="button" >All Projects / Older Works</button>
                </a>
            </div>
        </div>
    );
}
export default Home;