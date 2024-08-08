import './SortAndFilter.css';
import React, { useState } from "react";
import * as CommonComp from "../CommonComponents";

const SortAndFilter = ({ setParentDisplayList, dataList }) => {
    const [selectedTag, setSelectedTag] = useState('None')
    const [sortDir, setSortDir] = useState('None')

    function SortTest(list, sortDir) {
        list = list.sort((a, b) => {
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
        return list;
    }

    function FilterTag(list, tag) {
        var list = list.filter((data) => tag === "None" ? true : data.Tag.includes(tag));
        return list;
    }
    function OnSortDirChange(dir) {
        setSortDir(dir);
        OnChange(dir, selectedTag);
    }

    function OnSetSelectedTag(tag) {
        setSelectedTag(tag);
        OnChange(sortDir, tag);
    }

    function OnChange(sort, tag) {
        var filtered = FilterTag(dataList, tag);
        var sorted = SortTest(filtered, sort);
        console.log(sorted);
        setParentDisplayList(sorted);
    }
    return (
        <>
            <header className="SortAndFilter">
                <CommonComp.TagSelector setParentSelectedTag={OnSetSelectedTag}></CommonComp.TagSelector>
                <>{" "}</>
                <CommonComp.SortDirectionSelector setParentSortDir={OnSortDirChange}></CommonComp.SortDirectionSelector>
            </header>
        </>
    );
};

export default SortAndFilter;



