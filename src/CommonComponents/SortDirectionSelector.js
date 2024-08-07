import React, { useState } from "react";
import './TagDisplay.css';
import * as CommonComp from "../CommonComponents"

const SortDirectionSelector = ({setParentSortDir}) => {
    const [sortDir, setSortDir] = useState(false);
    function OnDirClick() {
        setSortDir(!sortDir);
        setParentSortDir(sortDir);
    }

    return (
        <>  
            <label>
                Sort By: <button onClick={OnDirClick}>
                    {sortDir?"Oldest":"Latest"}
                </button>
            </label>
        </>
    );
};

export default SortDirectionSelector;



