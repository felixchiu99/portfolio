import React from "react";
import './TagDisplay.css';

const TagDisplay = ({ tagNames }) => {
    // destructuring props
    return (
        <>
            <div className="tagDisplay">
                <h4> Tags: </h4>
                <div className="tagDiv">
                    {tagNames.map((tagName) => {
                        return (
                            <div className="tag">
                                {tagName}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default TagDisplay;



