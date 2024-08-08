import React, { useState } from "react";
import * as CommonComp from "../CommonComponents"

const ProjectIntros = ({ selectedTag, InfoList }) => {
    return (
        <>
            {
                InfoList.map((data) => {
                    return (
                        <>  
                            <CommonComp.IntroTemplate key={data.Intro.Title} Info={data}></CommonComp.IntroTemplate>
                        </>
                    );
                })
            }
        </>
    );
};

export default ProjectIntros;