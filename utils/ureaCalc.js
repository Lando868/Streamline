import { shift } from "./shift";


// CONSTANTS
const ST_to_MT = 1.1023;
const nh3Conv = 0.58;
const production_24_ST = 2272;
const production_12_ST = 1136;
const production_24_MT = 2061.14487888959;
const production_12_MT = 1030.57243944480;
const hoursInDay = 24;
const minutesInDay = 1440;
const secsInday = 86400;
const usage_24 = production_24_MT * nh3Conv;
const usage_12 = production_12_MT * nh3Conv;

const rateByHour = usage_24 / hoursInDay;
const rateByMinute = usage_24 / minutesInDay;
const rateBySecond = usage_24 / secsInday;


// UREA RATE CALCULATION
export const ureaCalc = (FI_104) => {
    const importFlow = Number(FI_104);
    const currentRate = (importFlow / rateByHour) * 100;
    const prod = (importFlow / nh3Conv) * ST_to_MT;
    const rate_12 = (importFlow / ((production_24_ST / ST_to_MT) / 24)) * 100;
    const rate_24 = (prod / production_24_ST) * 100;

    return { currentRate, prod, rate_12, rate_24 };
}



// PRODUCTION TARGETS
export const ureaBudgeted = [
    { Jan: 57187 },
    { Feb: 3500 },
    { Mar: 31580 },
    { Apr: 63600 },
    { May: 65720 },
    { Jun: 63600 },
    { Jul: 65720 },
    { Aug: 65720 },
    { Sep: 63600 },
    { Oct: 65720 },
    { Nov: 63600 },
    { Dec: 65720 },
]


// TIME VARIABLES
const shiftCheck = shift();
const RD7A = shiftCheck.RD7A;
const RD7P = shiftCheck.RD7P;
const ND7A = RD7A + 86400000;
const dateDelta = ND7A - Date.now();


const deltaT = shiftCheck.currentHour >= 7 && shiftCheck.currentHour <= 19 ? RD7P - Date.now() : ND7A - Date.now();

const deltaT_hrs = (deltaT / 3600000)
const importFlow = 47.5;
const expectedImport = deltaT_hrs * importFlow;

const extImport = (FI104) => {
    // const importFlow = 47.5;
    // const expectedImport = deltaT_hrs * importFlow;
}

export const prodExt = () => {
    console.log({
        RD7A: new Date(RD7A),
        RD7P: new Date(RD7P),
        ND7A: new Date(ND7A),
        dateDelta: dateDelta,
        deltaT: deltaT,
        deltaT_hrs: deltaT_hrs,
        expectedImport: expectedImport
    })
}


prodExt();












