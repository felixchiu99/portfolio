import React, { useState } from "react";
import * as CommonComp from "../CommonComponents"

function SortTest(data, sortDir) {
    data = data.sort((a, b) => {
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
    return data;
}

function FilterTag(data, selectedTag) {
    data = data.sort((a, b) => {
        if (data.tags) {
            if (selectedTag === "None") {
                return data;
            } else if (this.props.tags.includes(this.props.selectedTag)) {
                return data;
            } else {
                return false;
            }
        }
    })
    return data;
}

const HighlightedProjects = ({ selectedTag, InfoList }) => {
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