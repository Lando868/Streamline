"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link.js";
import Header from "./Header.jsx";
import Search from "./Search.jsx";
import DetailFeed from "./DetailFeed";
import { assetDetails } from "@utils/assetDetails";
import Detail from "./Detail.jsx";
import DetailDocs from "./DetailDocs.jsx";



const Asset = () => {

    const fadeIn = { opacity: "1", transition: "all cubic-bezier(0.19, 1, 0.22, 1) 3000ms" };
    const fadeOut = { opacity: "0", transition: "all cubic-bezier(0.19, 1, 0.22, 1) 1000ms" };

    const [searchedAsset, setSearchedAsset] = useState("");
    const [searchedDetails, setSearchedDetails] = useState("");


    const searchResult = (data) => {
        console.log("Searched ID from <Search />: ", data);
        const queryDetails = assetDetails.find((details) => details.title === data.title);
        setSearchedAsset(data);
        setSearchedDetails(queryDetails)
        console.log("Query details: ", queryDetails);

        return (data, queryDetails);
    }



    return (
        <div className="asset-details">
            <div className="header-holder">
                <Header />
            </div>

            <div className="asset-search">
                <Search
                    searchedID={searchResult}
                />
            </div>
            <div
                className="asset-data"
                style={searchedDetails ? fadeIn : fadeOut}
            >
                <div className="detail-dual detail">
                    <Detail

                        details={searchedDetails}
                        title="site"
                        value="site"
                    />
                    <Detail
                        details={searchedDetails}
                        title="area"
                        value="area"
                    />
                </div >
                <div className="detail detail-dual">
                    <Detail
                        details={searchedDetails}
                        title="category"
                        value="category"
                    />
                    <Detail
                        details={searchedDetails}
                        title="type"
                        value="type"
                    />
                </div >
                <Detail
                    className="detail"
                    details={searchedDetails}
                    title="service"
                    value="service"
                />
                <div className="detail-dual detail">
                    <Detail

                        details={searchedDetails}
                        title="motor"
                        value="motorVoltage"
                    />
                    <Detail
                        details={searchedDetails}
                        title="design capacity"
                        value="desCap"
                    />
                </div >
                <div className="detail-dual detail">
                    <Detail
                        details={searchedDetails}
                        title="design temperature"
                        value="desTemp"
                    />
                    <Detail
                        details={searchedDetails}
                        title="operating temperature"
                        value="opTemp"
                    />
                </div>
                <div className="detail-dual detail">
                    <Detail
                        details={searchedDetails}
                        title="design pressure"
                        value="desPress"
                    />
                    <Detail
                        details={searchedDetails}
                        title="operating pressure"
                        value="opPress"
                    />
                </div>
                <Detail
                    className="detail"
                    details={searchedDetails}
                    title="material of construction"
                    value="matOfConst_case"
                />


                <Detail
                    className="detail"
                    details={searchedDetails}
                    title="number of stages"
                    value="numOfStages"
                />

                <Detail
                    className="detail"
                    details={searchedDetails}
                    title="number of tubes"
                    value="numOfTubes"
                />
                <Detail
                    className="detail"
                    details={searchedDetails}
                    title="number of tubes"
                    value="numOfTubes"
                />



            </div>

            <div
                className="asset-drawings"
                style={searchedDetails ? fadeIn : fadeOut}

            >
                {searchedDetails?.drawings?.map((src, index) => (
                    <Link
                        href={src}
                        target="_blank"
                        key={index}
                    >
                        <div className="drawing">
                            <Image
                                className="drawings"
                                src={src}
                                width={400}
                                height={500}
                                alt="asset-drawing"
                                loading="lazy"
                            />
                        </div>
                    </Link>

                ))}

            </div>
            <div
                className="asset-docs"
                style={searchedDetails ? fadeIn : fadeOut}
            >
                <DetailDocs
                    className="detail doc-detail"
                    details={searchedDetails}
                    title="P&ID's"
                    value="pids"
                />
                <DetailDocs
                    className="detail doc-detail"
                    details={searchedDetails}
                    title="Associated Documents"
                    value="docs"
                />
            </div>
            <div
                className="asset-comments"
                style={searchedDetails ? fadeIn : fadeOut}
            >
                <DetailFeed
                    query={searchedAsset?.title}
                />
            </div>

        </div>
    )
}

export default Asset;


// {searchedAsset.drawings?.map((src, index) => (
//     <>



//         <div className="drawings">
//             <Image
//                 className="drawing"
//                 key={index}
//                 src={"/" + src}
//                 width={350}
//                 height={150}
//                 alt="asset-drawing"
//             />
//         </div>
//     </>

// ))}