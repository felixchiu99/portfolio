import React from "react";
import TagDisplay from './TagDisplay';

const InfoDisplay = ({ Info }) => {
    // destructuring props
    return (
        <>
            <TagDisplay tagNames={Info.Tag}></TagDisplay>
            <h5>Start Date: {Info.Date_Start}</h5>
            <h5>End Date: {Info.Date_End}</h5>
        </>
    );
};

export default InfoDisplay;



