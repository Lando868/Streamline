"use client";

import { useState, useEffect, useRef, forwardRef } from 'react';
import faker from 'faker';
import Header from "@components/Header";
import LineChart from './LineChart';
import Analytic from './Analytic';
import ProdEntry from './ProdEntry';
import ProdTable from './ProdTable';
import ProdCard from './ProdCard';

const Production = (props) => {

    const days = Array.from({ length: 31 }, (_, index) => index + 1);

    return (
        <div className="dash-prod">
            <Header page="prod" />

            <div className="prod-section-title">
                <span className="section-title-site">Urea Plant:</span>
                <span className="section-title">Production Summary for</span>
                <span className="prod-month">June</span>
                <span className="prod-date">27<span className="prod-date-suffix">th</span>

                </span>
            </div>

            <LineChart
                className="prod-chart"
                title="Urea Production (ST)" />

            <div className="prod-aggregates">
                <div className="table-title-block">
                    <span className="sub-text">MTD Analytics</span>
                    <h1 className="table-title"> June 2023</h1>
                </div>
                <Analytic
                    className="analytic-block"
                    title="Actual"
                    value={30145}
                    unit="ST"
                />
                <Analytic
                    className="analytic-block"
                    title="budgeted"
                    value={62262.000}
                    unit="ST"
                />
                <Analytic
                    className="analytic-block"
                    title="shortfall"
                    value={29307}
                    unit="ST"
                />
                <Analytic
                    className="analytic-block"
                    title="Synthesis"
                    value={212}
                    unit="HRS"
                />
                <Analytic
                    className="analytic-block"
                    title="'A' Train"
                    value={197}
                    unit="HRS"
                />
                <Analytic
                    className="analytic-block"
                    title="'B' Train"
                    value={209}
                    unit="HRS"
                />

            </div>


            <div className="extrapolated-section">
                <div className="table-title-block">
                    <span className="sub-text">Daily</span>
                    <h1 className="table-title">Insights</h1>
                </div>
                <Analytic
                    className="analytic-block"
                    title="Min. Rate req'd"
                    value={92.6}
                    unit="%"
                />
                <Analytic
                    className="analytic-block"
                    title="Min. Avg. req'd"
                    value={2011}
                    unit="ST"
                />

                <Analytic
                    className="analytic-block"
                    title="exp. daily"
                    value={2260}
                    unit="ST"
                />
                <Analytic
                    className="analytic-block"
                    title="exp. MTD"
                    value={65077}
                    unit="ST"
                />
                <Analytic
                    className="analytic-block"
                    title="exp. surplus"
                    value={4116}
                    unit="ST"
                />



            </div>


            {/* <div className="prod-date-section">
                <span className="section-title">Production Details for</span>

             
            </div> */}



            <section className="daily-production-section">

                <ProdCard
                    card="prod-day-card"
                    title="Day"
                    importValue={612.583}
                    energy={7.3}
                />
                {/* <ProdCard
                    card="prod-day-card"
                    title="Day"
                    importValue={612.583}
                    energy={7.3}
                /> */}

                <ProdCard
                    card="prod-night-card"
                    title="Night"
                    importValue={576.741}
                    energy={6.1}
                />

                <ProdCard
                    card="prod-24-card"
                    title="24 HRS"
                    importValue={1189.322}
                    energy={7.6}
                />

            </section>

            {/* <div className="prod-card prod-night-card"></div>
            <div className="prod-card prod-24-card"></div> */}


            {/* <div className="min-avg"></div>
            <div className="prod-extrapolated"></div> */}

        </div>
    )
}

export default Production;