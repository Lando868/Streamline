

export const date = (format) => {
    const today = new Date();

    const optionsLong = {
        weekday: 'long',
        day: "numeric",
        month: "long",
        year: "numeric"
    };


    const optionsShort = {
        day: "numeric",
        month: "short"
    };

    const optionsDay = {
        weekday: 'long',
    };

    const optionsTime = {
        hour: "numeric",
        minute: "numeric"
    };

    const optionsDT = {
        hour: 'numeric',
        minute: 'numeric',
        // second: 'numeric',
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
    };


    const DT = today.toLocaleString("en-US", optionsDT);
    const dateLong = today.toLocaleDateString("en-US", optionsLong);
    const dateShort = today.toLocaleDateString("en-US", optionsShort);
    const dateDay = today.toLocaleDateString("en-US", optionsDay);
    const time = today.toLocaleTimeString("en-US", optionsTime);


    if (format === "long") {
        return dateLong;
    } else if (format === "short") {
        return dateShort;
    } else if (format === "day") {
        return dateDay;
    } else if (format === "time") {
        return time;
    } else if (format === "DT") {
        return DT;
    }


}


