import '../App.css';
import React, { useState } from "react";
import * as CommonComp from "../CommonComponents";
import ProjectIntros from "./ProjectIntros"
import InfoList from "../Project/indexIntroAll";

function AllProjectHome() {
    const [displayInfo, setDisplayInfo] = useState(InfoList);
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

            <CommonComp.SortAndFilter setParentDisplayList={setDisplayInfo} dataList={InfoList}></CommonComp.SortAndFilter>

            <ProjectIntros InfoList={displayInfo}></ProjectIntros>

            <CommonComp.ReturnButton link='/portfolio'></CommonComp.ReturnButton>
        </div>
    );
}
export default AllProjectHome;