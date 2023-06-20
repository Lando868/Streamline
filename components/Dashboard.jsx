'use client';

import { useSession } from "next-auth/react";
import { useState, useRef, useEffect, Suspense } from 'react';
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";

import { date } from '@utils/date';
import { shift } from '@utils/shift';
import { usePathname, useRouter } from "next/navigation";
import { FontAwesomeIcon } from "fontAwesome";
import { faRightFromBracket, faCaretDown, faCalendarDays, faMagnifyingGlass, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import Clock from "./Clock";
import Input1 from "./Input1";
import TextArea1 from "./TextArea1";
import Feed from "./Feed";
import RecentFeed from "./RecentFeed";
import UpdateFeed from "./UpdateFeed";
import SearchFeed from "./SearchFeed";



const Dashboard = () => {
    const router = useRouter();

    const { data: session } = useSession();
    {/*console.log("Session values: ", session ? session : "whyyyy!!!!");*/ }

    const userLoggedIn = session?.user.name;
    const userImg = session?.user.image;
    const picSize = '25';

    const shiftCheck = shift();
    const streamDate = date();
    console.log("streamDate: ", streamDate)

    const profileDropdown = {
        opacity: "1",
        transform: "scaleY(1)",
        transition: "all cubic-bezier(0.175, 0.885, 0.32, 1.275) 500ms",
        pointerEvents: "all"
    }

    const profileHidden = {
        transform: "scaleY(0)",
        transition: "all cubic-bezier(0.175, 0.885, 0.32, 1.275) 500ms",
        pointerEvents: "none",
    }



    const dropdownRef = useRef(null);
    const menuRef = useRef(null);
    const uploadRef = useRef([])
    const searchRef = useRef("");

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [site, setSite] = useState("");
    const [asset, setAsset] = useState("");
    const [content, setContent] = useState("");
    const [assetID, setAssetID] = useState("");
    const [assetComment, setAssetComment] = useState("");
    const [assetDesc, setAssetDesc] = useState("");
    const [assetJargon, setAssetJargon] = useState([]);
    const [commentTag, setCommentTag] = useState([]);
    const [assetSearch, setAssetSearch] = useState("");
    const [searchResult, setSearchResult] = useState("");
    const [queries, setQueries] = useState("");
    const [querySearch, setQuerySearch] = useState("");




    {/*const [profileToggle, setProfileToggle] = useState(false);*/ }




    const uploaded = uploadRef.current;
    {/*console.log("Initial filelist: ", uploaded.files);*/ }


    const handleClickOutside = (e) => {
        if (
            dropdownRef.current && !dropdownRef.current.contains(e.target) &&
            menuRef.current && !menuRef.current.contains(e.target)
        ) {
            setIsDropdownOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    }, []);


    const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);


    useEffect(() => {
        console.log("Site: ", site);
    }, [site]);






    const submitComment = async (e) => {
        e.preventDefault();
        console.log("Comment submitting in progress...");
        //const tags = commentTag.split(/,\s*/)
        const tags = commentTag.split(/,\s*|\s+/);
        const tagFilter = tags.filter(substring => substring !== "")
        {/*tagFilter.forEach((tag) => {

        })*/}

        console.log("tags split: ", tags);

        try {
            const res = await fetch("../api/asset-log/new", {
                method: 'POST',
                body: JSON.stringify({
                    asset: assetID,
                    content: assetComment,
                    createdBy: userLoggedIn,
                    jobType: "OPS",
                    tag: tagFilter
                })

            })

            if (res.ok) {
                router.push("/dashboard");
                setAssetComment("");
                setAsset("");
                setCommentTag("");
                console.log("Comment submitted!");

            }

        } catch (error) {
            console.log(error)
        } finally {
            console.log("Comment submission attempt complete...");
        }
    }




    const submitAsset = async (e) => {
        e.preventDefault();

        const fromUploads = uploaded.files;
        try {

            console.log("Asset submission in progress...");
            {/*            console.log("Final filelist: ", uploaded.files);
            console.log("Spread filelist: ", ...uploaded.files);
            console.log("First filename: ", ...uploaded.files[0].name);
            console.log("Number of files: ", uploaded.files.length)
            console.log("Type:", typeof uploaded.files);*/}

            const uploadedFiles = [];
            {/*const jargon = assetJargon.replace(", ", ",").split(/[,]/);*/ }
            const jargon = assetJargon.split(/,\s*/);
            const jargonFilter = jargon.filter(substring => substring !== "")
            console.log("jargon split: ", jargon);
            const staticFiles = ["assets/images/drawing_1.jpg", "assets/images/drawing_2.webp", "assets/images/drawing_3.jpg",]
            staticFiles.forEach(file => {
                uploadedFiles.push(file)
            });

            console.log("Uploaded array", uploadedFiles)

            const res = await fetch("../api/asset/new", {
                method: 'POST',
                body: JSON.stringify({
                    title: assetID,
                    desc: assetDesc,
                    site: site,
                    drawings: uploadedFiles,
                    jargon: jargon
                })

            })

            if (res.ok) {
                router.push("/dashboard");
                setAssetComment("");
                setAssetDesc("");
                setAssetJargon("");
                console.log("Asset submitted!");

            }

        } catch (error) {
            console.log(error)
        } finally {
            console.log("Asset submission attempt complete...");
        }
    }












    const delay = 50;
    let timer;
    const handleSearchChange = () => {

        clearTimeout(timer)
        console.log("before timer - assetSearch: ", assetSearch);


        timer = setTimeout(async () => {

            try {
                const res = await fetch(`../api/asset?title=${assetSearch}`);
                const data = await res.json();

                setSearchResult(data);
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
        <div>
            <div className="dash-overall">
                <div className="dash-header">
                    <select name="site"
                        className="site-select"
                        onChange={(e) => { e.preventDefault(); setSite(e.target.value) }}
                        value={site}
                    >
                        <option className="dropdown" value="default" >Select your site...</option>
                        <option className="dropdown">01/02/OSBL</option>
                        <option className="dropdown">03 Plant</option>
                        <option className="dropdown">04 Plant</option>
                        <option className="dropdown">Urea Plant</option>
                        <option className="dropdown">Demin Plant</option>
                        <option className="dropdown">UFC-85</option>
                        <option className="dropdown">Product Handling</option>
                    </select>
                    <div className="shift-block">
                        {/*<p className="shift"> {date("day")}</p>*/}
                        <span className="shift"> {shiftCheck.shift} </span>
                        <span className="shift-word">Shift</span>
                        <span className="rotation">{shiftCheck.rotation} </span>
                    </div>
                    <div className="date-block">
                        <FontAwesomeIcon
                            className="calendar"
                            icon={faCalendarDays}
                        />
                        <div className="date-and-time">
                            <p className="date">{streamDate.header}</p>
                            <Suspense fallback={<div className="time">Synchronizing...</div>}>
                                <Clock className="time" />
                            </Suspense>
                            <span className="period">{shiftCheck.period}</span>
                        </div>


                    </div>
                    <div
                        ref={dropdownRef}
                        className="profile"
                        onClick={toggleDropdown}
                    >
                        <Image
                            style={{ borderRadius: "50%" }}
                            src={userImg}
                            width={picSize}
                            height={picSize}
                            alt="profile-image"
                        />
                        <p className="logged-in-as">{userLoggedIn}</p>
                        <FontAwesomeIcon
                            className="dropdown-arrow"
                            style={isDropdownOpen ? { transform: "rotateX(180deg)", transition: "all ease 600ms" } : { transition: "all ease 800ms" }}
                            icon={faCaretDown}
                        />
                        <div
                            ref={menuRef}
                            className="profile-menu"
                            style={isDropdownOpen ? { ...profileDropdown } : { ...profileHidden }}
                        >
                            <div
                                className="log-out"
                                onClick={signOut}
                            >
                                <FontAwesomeIcon
                                    className="log-out-icon"
                                    icon={faRightFromBracket}
                                />
                                <span className="log-out-text">Log Out</span>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="dash-entry">
                    <form
                        className="search-form"
                        onSubmit={(e) => {
                            e.preventDefault();
                            console.log(e)
                        }}>
                        <input
                            ref={searchRef}
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
                                    setAssetID(result.title);
                                    setAssetDesc(result.desc);
                                    setSearchResult("");
                                }}
                            >
                                {console.log("Mapped result: ", result)}
                                {console.log("Mapped title: ", result.title)}
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


                    <TextArea1
                        name="assetComment"
                        className="comment-entry-text-area"
                        value={assetComment}
                        onChange={(e) => { e.preventDefault(); setAssetComment(e.target.value); console.log("comment: ", assetComment) }}
                        placeholder="Comment"
                        fade={assetID}


                    />
                    <Input1
                        type="text"
                        className="comment-entry-tag-input"
                        value={commentTag}
                        onChange={(e) => { e.preventDefault(); setCommentTag(e.target.value) }}
                        placeholder="Tag"
                        fade={assetID}

                    />



                    <button
                        className="btn-add"
                        onClick={submitComment}
                        style={assetID == "" ? { opacity: "0" } : { opacity: "1" }}
                    >
                        +
                    </button>

                </div>

                <div className="dash-updates">
                    <div
                        className="latest-updates"
                        style={assetID ? {} : { fontSize: "1.5rem" }}>
                        {assetID ?
                            <h1>
                                Recent logs for <span className="recent-asset">{assetID}</span>
                            </h1>
                            :
                            <h1>The most recent logs for your selected asset will show up below...</h1>
                        }
                    </div>
                    <RecentFeed
                        className="comment-feed"
                        commentSubmit={assetComment}
                        handleTagClick={handleTagClick}
                        query={assetID}
                        fade={assetID}
                    />
                </div>
                <div
                    className="all-updates"
                    style={assetID ? {} : { fontSize: "1.5rem" }}>
                    {site ?
                        <h1>
                            Recent logs for <span className="recent-site">{site}</span>
                        </h1>
                        :
                        <h1>The most recent logs for your site will show up below...</h1>
                    }
                </div>
                <div className="dash-feed">
                    <UpdateFeed
                        className="comment-feed"
                        site={site}
                        commentSubmit={assetComment}
                        handleTagClick={handleTagClick}

                    />
                </div>
                <div className="dash-query">
                    <form
                        className="query-form"
                        onSubmit={(e) => {
                            e.preventDefault();
                            console.log(e)
                        }}>
                        <input
                            type="text"
                            placeholder="Search for a word, phrase, tag, jargon"
                            className="query-bar"
                            value={querySearch}
                            onInput={handleQuery}
                            onKeyUp={handleQueryInput}
                        />
                        <FontAwesomeIcon
                            className="query-icon"
                            icon={faCircleQuestion}
                        />
                    </form>
                    <SearchFeed
                        className="query-feed"
                        commentSubmit={assetComment}
                        handleTagClick={handleTagClick}
                        query={queries}

                    />
                </div>


            </div>
        </div>
    )
}

export default Dashboard;
{/*


<form className="comment-entry-form" onSubmit={submitComment}>
                        <Input1
                            type="text"
                            name="asset"
                            placeholder="Asset"
                            value={asset}
                            onChange={(e) => { e.preventDefault(); setAsset(e.target.value) }}
                        />

                        <Input1
                            type="text"
                            name="comment"
                            placeholder="Comment"
                            value={content}
                            onChange={(e) => { e.preventDefault(); setContent(e.target.value) }}
                        />


                        <TextArea1
                            type="text"
                            name="comment"
                            placeholder="Comment"
                            value={content}
                            onChange={(e) => { e.preventDefault(); setContent(e.target.value) }}
                        />
                        <button type="submit" className='btn comment-btn'>Submit comment</button>
                    </form>*/}


{/*   <Input1
                        type="text"
                        value={assetDesc}
                        onChange={(e) => { e.preventDefault(); setAssetDesc(e.target.value) }}
                        placeholder="Description"
                    />*/}


{/*<input type="file" ref={uploadRef} id="upload-field" accept="images/*" multiple name="uploaded" />*/ }




