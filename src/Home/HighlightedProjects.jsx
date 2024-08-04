import React, { useState } from "react";
import * as CommonComp from "../CommonComponents"
import * as Intro from "../Project/index";
import * as InfoIndexes from "../Project/indexInfo";

const HighlightedProjects = ({ selectedTag }) => {
    // destructuring props
    return (
        <>
            <CommonComp.HidableWTag selectedTag={selectedTag} tags={InfoIndexes.InteriorDeco.Tag}>
                <Intro.InteriorDeco></Intro.InteriorDeco>
            </CommonComp.HidableWTag>

            <CommonComp.HidableWTag selectedTag={selectedTag} tags={InfoIndexes.AirshipProject.Tag}>
                <Intro.AirshipProject></Intro.AirshipProject>
            </CommonComp.HidableWTag>

            <Intro.StuBrew></Intro.StuBrew>

            <Intro.InkHell></Intro.InkHell>

            <Intro.ArcheryVR></Intro.ArcheryVR>
        </>
    );
};

export default HighlightedProjects;