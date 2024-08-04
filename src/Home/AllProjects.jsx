import React, { useState } from "react";
import * as CommonComp from "../CommonComponents"
import * as Intro from "../Project/index";
import * as InfoIndexes from "../Project/indexInfo";

const AllProjects = ({ selectedTag }) => {
    // destructuring props
    return (
        <>
            <CommonComp.HidableWTag selectedTag={selectedTag} tags={InfoIndexes.InteriorDeco.Tag}>
                <Intro.InteriorDeco></Intro.InteriorDeco>
            </CommonComp.HidableWTag>

            <CommonComp.HidableWTag selectedTag={selectedTag} tags={InfoIndexes.AirshipProject.Tag}>
                <Intro.AirshipProject></Intro.AirshipProject>
            </CommonComp.HidableWTag>

            <CommonComp.HidableWTag selectedTag={selectedTag} tags={InfoIndexes.StuBrew.Tag}>
                <Intro.StuBrew></Intro.StuBrew>
            </CommonComp.HidableWTag>

            <CommonComp.HidableWTag selectedTag={selectedTag} tags={InfoIndexes.InkHell.Tag}>
                <Intro.InkHell></Intro.InkHell>
            </CommonComp.HidableWTag>

            <CommonComp.HidableWTag selectedTag={selectedTag} tags={InfoIndexes.ArcheryVR.Tag}>
                <Intro.ArcheryVR></Intro.ArcheryVR>
            </CommonComp.HidableWTag>

            <CommonComp.HidableWTag selectedTag={selectedTag} tags={InfoIndexes.CSC8503.Tag}>
                <Intro.CSC8503></Intro.CSC8503>
            </CommonComp.HidableWTag>

            <CommonComp.HidableWTag selectedTag={selectedTag} tags={InfoIndexes.CSC8502.Tag}>
                <Intro.CSC8502></Intro.CSC8502>
            </CommonComp.HidableWTag>

        </>
    );
};

export default AllProjects;