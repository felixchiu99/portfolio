import React from "react";
import './TagDisplay.css';

const TagDisplay = ({ tagNames }) => {
    // destructuring props
    return (
        <>
            <div className="tagDisplay">
                <h5> Tags: </h5>
                <div className="tagDiv">
                    {tagNames.map((tagName) => {
                        return (
                            <div key={tagName} className="tag">
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



