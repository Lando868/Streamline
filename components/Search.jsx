'use client';

import { useState, useRef, useEffect, Suspense } from 'react';
import Image from "next/image";
import { date } from '@utils/date';
import { shift } from '@utils/shift';
import { FontAwesomeIcon } from "fontAwesome";
import { faRightFromBracket, faCaretDown, faCalendarDays, faMagnifyingGlass, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import Input1 from "./Input1";
import TextArea1 from "./TextArea1";
import { assetDetails } from "@utils/assetDetails";



const Search = (props) => {

    const shiftCheck = shift();
    const streamDate = date();
    const searchRef = useRef("");
    const [assetID, setAssetID] = useState("");
    const [assetComment, setAssetComment] = useState("");
    const [assetDesc, setAssetDesc] = useState("");
    const [assetJargon, setAssetJargon] = useState([]);
    const [commentTag, setCommentTag] = useState([]);
    const [assetSearch, setAssetSearch] = useState("");
    const [searchResult, setSearchResult] = useState("");
    const [queries, setQueries] = useState("");
    const [querySearch, setQuerySearch] = useState("");






    const delay = 50;
    let timer;

    const handleSearchChange = () => {

        clearTimeout(timer)
        console.log("before timer - assetSearch: ", assetSearch);


        timer = setTimeout(async () => {

            try {
                {/*const res = await fetch(`../api/asset?title=${assetSearch}`);
                const data = await res.json();*/}
                // setSearchResult(data);



                // Searching using assetDetail from utils to test no database conditions during demo

                const data = assetDetails.filter(asset => {
                    const regex = new RegExp(assetSearch, 'i');
                    return (
                        asset.title.match(regex) ||
                        asset.desc.match(regex) ||
                        asset.jargon.some(jargonItem => jargonItem.match(regex))
                    );
                });
                if (assetSearch.length > 0) {
                    setSearchResult(data);

                } else {
                    setSearchResult([]);

                }



                console.log("searchResult: ", searchResult);

            } catch (error) {
                console.log("Search error: ", error)
            }



        }, delay);
    }
    useEffect(() => {

        console.log("after timer - assetSearch: ", assetSearch);
        handleSearchChange();

        {/* setAssetID(assetSearch)*/ }

        return () => {
            clearTimeout(timer);
        };

    }, [assetSearch]);




    const handleInput = (e) => {
        e.preventDefault();
        setAssetSearch(e.target.value)
        console.log("handleInput - assetSearch: ", assetSearch);

        ;
    }

    const handleSearchInput = (e) => {
        console.log("handleSearchInput - assetSearch: ", assetSearch);
        ;
    }



    const handleSelect = (e) => {
        console.log(e.target);
        const resultData = e.target.dataset.result;
        console.log("resultTitle: ", resultData);
        {/*console.log("resultTitle: ", result.title);*/ }
        {/* setAssetID(assetSearch);*/ }
    }




    const handleTagClick = (e) => {
        console.log("Tag clicked: ", e);
        setQueries(e);
    }




    const handleQueryChange = () => {

        clearTimeout(timer)
        console.log("before timer - querySearch: ", querySearch);


        timer = setTimeout(async () => {

            try {
                setQueries(querySearch);

            } catch (error) {
                console.log("Search error: ", error)
            }



        }, delay);
    }
    useEffect(() => {

        console.log("after timer - querySearch: ", querySearch);
        handleQueryChange();
        {/* setAssetID(assetSearch)*/ }

        return () => {
            clearTimeout(timer);
        };

    }, [querySearch]);




    const handleQuery = (e) => {
        e.preventDefault();
        setQuerySearch(e.target.value)
        console.log("handleQuery - querySearch: ", querySearch);

        ;
    }

    const handleQueryInput = (e) => {
        console.log("handleQueryInput - querySearch: ", querySearch);
        setQueries(querySearch);

    }





    return (
        <div className="search-entry">
            <form
                className="search-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log(e)
                }}>
                <input
                    type="text"
                    placeholder="Search for an asset  (jargon accepted)"
                    className="search-bar"
                    value={assetSearch}
                    onInput={handleInput}
                    onKeyUp={handleSearchInput}
                />
                <FontAwesomeIcon
                    className="search-icon"
                    icon={faMagnifyingGlass}
                />
            </form>
            <div
                className="search-results"
            >
                {searchResult && searchResult.map((result, index) => (
                    <p
                        key={index}
                        className="result"
                        onClick={() => {
                            // setAssetID(result.title);
                            setAssetID(result.title);
                            props.searchedID(result);
                            setAssetDesc(result.desc);
                            setSearchResult("");
                        }}
                    >
                        {result.title}:
                        <span
                            className="result-desc"

                        >
                            {result.desc.substring(0, 70)}
                        </span>
                    </p>

                ))}
            </div>

            <div className="selected">
                <p
                    name="asset"
                    className="asset-ID"
                >
                    {assetID}
                </p>
                <span
                    className="asset-desc"
                    style={assetID == "" ? {} : { borderLeft: "1px dashed var(--light-grey)" }}> {assetDesc.substring(0, 70)}</span>
            </div>



        </div>
    )
}

export default Search;