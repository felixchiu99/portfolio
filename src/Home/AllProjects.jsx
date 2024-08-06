import React, { useState } from "react";
import * as CommonComp from "../CommonComponents"
import InfoList from "../Project/indexIntroAll";

const AllProjects = ({ selectedTag }) => {
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
        </>
    );
};

export default AllProjects;