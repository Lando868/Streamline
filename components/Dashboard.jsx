'use client';


import { useSession } from "next-auth/react";
import { useState, useRef, useEffect, Suspense } from 'react';
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";

import { date } from '@utils/date';
import { shift } from '@utils/shift';
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "fontAwesome";
import { faRightFromBracket, faCaretDown, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import Clock from "./Clock";
import Input1 from "./Input1";
import TextArea1 from "./TextArea1";
import Feed from "./Feed";




const Dashboard = () => {
    const router = useRouter();
    const { data: session } = useSession();
    {/*console.log("Session values: ", session ? session : "whyyyy!!!!");*/ }

    const userLoggedIn = session?.user.name;
    const userImg = session?.user.image;

    const shiftCheck = shift();

    {/*console.log("refDate: ", shiftCheck.refDate);
    console.log("now: ", shiftCheck.now);
    console.log("currentHour: ", shiftCheck.currentHour);
    console.log("shiftDate: ", shiftCheck.shiftDate);
    console.log("RD7A: ", shiftCheck.RD7A);
    console.log("RD7P: ", shiftCheck.RD7P);
    console.log("source: ", shiftCheck.source);
    console.log("shiftCode: ", shiftCheck.shiftCode);
    console.log("daysDiff: ", shiftCheck.daysDiff);
    console.log("shift: ", shiftCheck.shift);
    console.log("rotation: ", shiftCheck.rotation);
    console.log("period: ", shiftCheck.period);
    console.log("prevDay: ", shiftCheck.prevDay);*/}


    {/*
    
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum laboriosam adipisci maiores, cupiditate ipsam fuga nesciunt quia unde sint sed repellendus, eius, ipsum magni vel! Nesciunt reprehenderit at, eius commodi itaque sapiente repellendus culpa, numquam laboriosam nostrum, officia modi molestiae.

    #validated, #finally, #lorem, #test

*/}

    const picSize = '25';
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

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [site, setSite] = useState("");
    const [asset, setAsset] = useState("");
    const [content, setContent] = useState("");
    const [assetID, setAssetID] = useState("");
    const [assetComment, setAssetComment] = useState("");
    const [assetDesc, setAssetDesc] = useState("");
    const [assetJargon, setAssetJargon] = useState([]);
    const [commentTag, setCommentTag] = useState([]);



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
        console.log("Site: ", site);
    }, [site]);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    }, []);


    const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);



    const submitComment = async (e) => {
        e.preventDefault();
        console.log("Comment submitting in progress...");
        const tags = commentTag.split(/,\s*/);
        const tagFilter = tags.filter(substring => substring !== "")
        console.log("tags split: ", tags);

        try {
            const res = await fetch("api/asset-log/new", {
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

            const res = await fetch("api/asset/new", {
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
                            <p className="date">{date("long")}</p>
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
                            <button
                                className="log-out-btn"
                                onClick={signOut}
                            ><FontAwesomeIcon icon={faRightFromBracket} /> Log Out</button>
                        </div>
                    </div>


                </div>

                <div className="dash-entry">

                    <select
                        name="asset"
                        className="asset-select"
                        value={assetID}
                        onChange={(e) => { e.preventDefault(); setAssetID(e.target.value) }}
                    >
                        <option className="dropdown" value="default" >Select an asset</option>
                        <option className="dropdown">01MP02C</option>
                        <option className="dropdown">01MP03B</option>
                        <option className="dropdown">02MK01A</option>
                        <option className="dropdown">02MME5A</option>
                        <option className="dropdown">07MP02B</option>
                    </select>

                    <TextArea1
                        name="assetComment"
                        className="textArea1"
                        value={assetComment}
                        onChange={(e) => { e.preventDefault(); setAssetComment(e.target.value) }}
                        placeholder="Comment"

                    />
                    <Input1
                        type="text"
                        value={commentTag}
                        onChange={(e) => { e.preventDefault(); setCommentTag(e.target.value) }}
                        placeholder="Tag"
                    />



                    <button
                        className="btn-add"
                        onClick={submitComment}
                    >
                        +
                    </button>

                    {/*<input type="file" ref={uploadRef} id="upload-field" accept="images/*" multiple name="uploaded" />*/}


                </div>
                <div className="dash-feed">
                    {/*   <Input1
                        type="text"
                        value={assetDesc}
                        onChange={(e) => { e.preventDefault(); setAssetDesc(e.target.value) }}
                        placeholder="Description"
                    />*/}
                    <Suspense fallback={<div className="fallback">Synchronizing...</div>}>

                        <Feed
                            className="comment-feed"
                            commentSubmit={assetComment}
                        />
                    </Suspense>
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



