import React, { useState } from "react";
import * as CommonComp from "../CommonComponents"
import * as Intro from "../Project/index";
import * as InfoIndexes from "../Project/indexInfo";
import InfoList from "../Project/indexIntro";

const HighlightedProjects = ({ selectedTag }) => {
    // destructuring props
    return (
        <>
            {
                InfoList.map((data) => {
                    return (
                        <>
                            <CommonComp.HidableWTag selectedTag={selectedTag} tags={data.Tag}>
                                <CommonComp.IntroTemplate Info={data}></CommonComp.IntroTemplate>
                            </CommonComp.HidableWTag>
                        </>
                    );
                })
            }

            <Intro.StuBrew></Intro.StuBrew>

            <Intro.InkHell></Intro.InkHell>

            <Intro.ArcheryVR></Intro.ArcheryVR>
        </>
    );
};

export default HighlightedProjects;