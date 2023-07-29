export const shift = () => {

    const refDate = new Date('December 31, 2016 7:00');
    const now = new Date();
    const currentHour = now.getHours();
    let shiftDate, RD7A, RD7P, ND7A, source, daysDiff, shiftCode, shift, rotation, period, prevDay;

    prevDay = now.getDate() - 1;
    period = currentHour < 12 ? "am" : "pm";
    shiftDate = new Date();

    currentHour < 7 && shiftDate.setDate(prevDay);

    RD7A = shiftDate.setHours(7, 0, 0, 0);
    RD7P = shiftDate.setHours(19, 0, 0, 0);

    source = currentHour >= 7 && currentHour <= 19 ? RD7A - refDate : RD7P - refDate;
    daysDiff = source / (1000 * 60 * 60 * 24);
    shiftCode = (daysDiff % 8);


    switch (shiftCode) {
        case 0.0:
            shift = "A";
            rotation = "1st Daylight"
            break;
        case 0.5:
            shift = "B";
            rotation = "1st Night"
            break;
        case 1.0:
            shift = "A";
            rotation = "2nd Daylight"
            break;
        case 1.5:
            shift = "B";
            rotation = "2nd Night"
            break;
        case 2.0:
            shift = "D";
            rotation = "1st Daylight"
            break;
        case 2.5:
            shift = "A";
            rotation = "1st Night"
            break;
        case 3.0:
            shift = "D";
            rotation = "2nd Daylight"
            break;
        case 3.5:
            shift = "A";
            rotation = "2nd Night"
            break;
        case 4.0:
            shift = "C";
            rotation = "1st Daylight"
            break;
        case 4.5:
            shift = "D";
            rotation = "1st Night"
            break;
        case 5.0:
            shift = "C";
            rotation = "2nd Daylight"
            break;
        case 5.5:
            shift = "D";
            rotation = "2nd Night"
            break;
        case 6.0:
            shift = "B";
            rotation = "1st Daylight"
            break;
        case 6.5:
            shift = "C";
            rotation = "1st Night"
            break;
        case 7.0:
            shift = "B";
            rotation = "2nd Daylight"
            break;
        case 7.5:
            shift = "C";
            rotation = "2nd Night"
            break;
        default:
            shift = "This";
            rotation = "does not exist"
            break;
    }


    return {
        refDate,
        now,
        currentHour,
        RD7A,
        RD7P,
        shiftDate,
        source,
        daysDiff,
        shiftCode,
        shift,
        rotation,
        period,
        prevDay
    }

}


