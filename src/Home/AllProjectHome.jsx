import '../App.css';
import React, { useState } from "react";
import * as CommonComp from "../CommonComponents";
import AllProject from "./AllProjects"

function AllProjectHome() {
    const [selectedTag, setSelectedTag] = useState('None')
    return (
        <div className="App">
            <header className="Main Title">
                <h1> Felix Chiu's Portfolio</h1>
                <header className="Project">
                    <p class="description">
                        This is the whole of my projects.
                    </p>
                    <p class="description">
                        No deletions, No modifications.
                    </p>
                    <CommonComp.ReturnButton link='/portfolio' title="Home"></CommonComp.ReturnButton>
                </header>
            </header>

            <CommonComp.TagSelector setParentSelectedTag={setSelectedTag}></CommonComp.TagSelector>

            <AllProject selectedTag={selectedTag}></AllProject>

            <CommonComp.ReturnButton link='/portfolio'></CommonComp.ReturnButton>
        </div>
    );
}
export default AllProjectHome;