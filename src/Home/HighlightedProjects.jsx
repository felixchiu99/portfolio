import React, { useState } from "react";
import * as CommonComp from "../CommonComponents"
import InfoList from "../Project/indexIntroHighlight";

function SortTest (data){
    data = data.sort((a, b) => {
        if (a.Date_Start > b.Date_Start) {
            return -1;
        }
    })
    return data;
}

const HighlightedProjects = ({ selectedTag }) => {
    // destructuring props
    SortTest(InfoList);
    return (
        <>
            {
                InfoList.map((data) => {
                    return (
                        <>
                            <CommonComp.HidableWTag key={data.Intro.Title} selectedTag={selectedTag} tags={data.Tag}>
                                <CommonComp.IntroTemplate key={data.Intro.Title} Info={data}></CommonComp.IntroTemplate>
                            </CommonComp.HidableWTag>
                        </>
                    );
                })
            }
        </>
    );
};

export default HighlightedProjects;