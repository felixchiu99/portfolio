import '../App.css';
import React, { useState } from "react";
import * as CommonComp from "../CommonComponents";
import HighlightedProjects from "./HighlightedProjects"
import InfoList from "../Project/indexIntroHighlight";

function Home() {
    const [selectedTag, setSelectedTag] = useState('None')
    const [sortDir, setSortDir] = useState('None')
    const [displayInfo, setDisplayInfo] = useState(InfoList);
    function SortTest(list, sortDir) {
        list = list.sort((a, b) => {
            if (sortDir) {
                if (a.Date_Start > b.Date_Start) {
                    return -1;
                }
            } else {
                if (a.Date_Start < b.Date_Start) {
                    return -1;
                }
            }

        })
        return list;
    }

    function FilterTag(list, tag) {
        var list = list.filter((data) => tag==="None"?true:data.Tag.includes(tag));
        return list;
    }
    function OnSortDirChange(dir){
        setSortDir(dir);
        OnChange(dir, selectedTag);
    }

    function OnSetSelectedTag(tag) {
        setSelectedTag(tag);
        OnChange(sortDir, tag);
    }

    function OnChange(sort,tag) {
        var filtered = FilterTag(InfoList, tag);
        var sorted = SortTest(filtered, sort);
        console.log(sorted);
        setDisplayInfo(sorted);
    }

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

            <CommonComp.TagSelector setParentSelectedTag={OnSetSelectedTag}></CommonComp.TagSelector>
            <CommonComp.SortDirectionSelector setParentSortDir={OnSortDirChange}></CommonComp.SortDirectionSelector>

            <HighlightedProjects selectedTag={selectedTag} InfoList={displayInfo}></HighlightedProjects>

            <div className="ProjectAlt">
                <a href="/portfolio/#/AllProjects" >
                    <button class="button" >All Projects / Older Works</button>
                </a>
            </div>
        </div>
    );
}
export default Home;