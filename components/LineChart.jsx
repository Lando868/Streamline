import { useState, useContext, useEffect } from "react";
import HistorianContext from "@context/HistorianContext";
import StatusContext from "@context/StatusLayoutContext";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Line, Bar } from 'react-chartjs-2';
import faker from 'faker';
import { date } from '@utils/date';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);



export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
        },
        title: {
            display: false,
            text: 'Production Summary',
        },
    },
    maintainAspectRatio: false,
    borderWidth: 1.5,
    tension: 0,


};

const days = new Date().getDate();


const label = Array.from({ length: days }, (_, index) => index + 1);
const labels = Array.from({ length: 31 }, (_, index) => index + 1);


export const data = {
    labels,
    datasets: [
        {
            label: "Urea",
            data: label.map(() => faker.datatype.number({ min: 1580, max: 2120 })),
            borderColor: '#b7ff00',
            backgroundColor: '#2b2f2f',
        },
        {
            label: "Budgeted",
            data: labels.map(() => faker.datatype.number({ min: 2124, max: 2124 })),
            borderColor: '#cccccc33',
            backgroundColor: '#333',
        },

    ],
};

const LineChart = (props) => {

    const { ureaProd } = useContext(HistorianContext);
    const { expanded, toggleView, site, setSite } = useContext(StatusContext);

    const ureaProduction = ureaProd
        .filter(item => item?.TimeStamp?.includes('10:00:00Z'))
        .map(item => item?.DoubleValue);

    console.log("Urea Production: ", ureaProduction);


    return (
        <div className={props.className}>
            <Line options={options} data={data} />
        </div>
    )
}


export default LineChart;