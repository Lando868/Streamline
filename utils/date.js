export const date = (dateInput) => {

    const today = new Date();

    const dateUsed = dateInput ? dateInput : today;

    const optionsHeader = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        weekday: 'long',
    }

    const optionsLong = {
        weekday: 'long',
        day: "numeric",
        month: "long",
        year: "numeric"
    };

    const optionsMedium = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    }


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


    const header = dateUsed.toLocaleString("en-US", optionsHeader);
    const DT = dateUsed.toLocaleString("en-US", optionsDT);
    const long = dateUsed.toLocaleDateString("en-US", optionsLong);
    const medium = dateUsed.toLocaleDateString("en-US", optionsMedium);
    const short = dateUsed.toLocaleDateString("en-US", optionsShort);
    const day = dateUsed.toLocaleDateString("en-US", optionsDay);
    const time = dateUsed.toLocaleTimeString("en-US", optionsTime);


    return {
        long,
        medium,
        short,
        day,
        time,
        DT,
        header,
        optionsHeader,
        optionsLong,
        optionsMedium,
        optionsShort,
        optionsDay,
        optionsTime,
        optionsDT,
    }
}

