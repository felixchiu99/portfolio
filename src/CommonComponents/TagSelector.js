import React, { useState } from "react";
import './TagDisplay.css';
import AllTags from "./Tags/AllTags"
import * as CommonComp from "../CommonComponents"

const TagSelector = ({setParentSelectedTag}) => {
    // destructuring props
    const [selectedTag, setSelectedTag] = useState('None');

    function tagChange(e) {
        setSelectedTag(e.target.value);
        setParentSelectedTag(e.target.value)
    }

    return (
        <>  
            <label>
                Filter Tag: 
                <select name="selectedTag" defaultValue={selectedTag} onChange={e => tagChange(e)}>
                    <option value="None">None</option>
                    {AllTags.map((tagName) => {
                        return (
                            <option value={tagName}>{tagName}</option>
                        );
                    })}
                </select>
            </label>
        </>
    );
};

export default TagSelector;



