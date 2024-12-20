export const date = (dateInput) => {

    const today = new Date();

    const dateUsed = dateInput ? dateInput : today;

    const ordinal = (d) => {
        const n = d.getDate();
        if (n > 3 && n < 21) return 'th';
        switch (n % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";

        }
    };

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

    const optionsDayShort = {
        day: "numeric",
    }

    const optionsDay = {
        weekday: 'long',
    };

    const optionsMonthShort = {
        month: "short"
    }

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

    const optionsMonthLong = {
        month: 'long'
    }



    const header = dateUsed.toLocaleString("en-US", optionsHeader);
    const DT = dateUsed.toLocaleString("en-US", optionsDT);
    const long = dateUsed.toLocaleDateString("en-US", optionsLong);
    const medium = dateUsed.toLocaleDateString("en-US", optionsMedium);
    const short = dateUsed.toLocaleDateString("en-UK", optionsShort);
    const day = dateUsed.toLocaleDateString("en-US", optionsDay);
    const time = dateUsed.toLocaleTimeString("en-US", optionsTime);
    const dayShort = dateUsed.toLocaleTimeString("en-US", optionsDayShort);
    const monthShort = dateUsed.toLocaleTimeString("en-US", optionsMonthShort);
    const monthLong = dateUsed.toLocaleTimeString("en-US", optionsMonthLong);


    const date = dateUsed.getDate();
    const nth = ordinal(dateUsed);
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][dateUsed.getMonth()];
    const mnth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][dateUsed.getMonth()];
    const year = dateUsed.getFullYear();

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
        dayShort,
        monthShort,
        monthLong,

        date,
        nth,
        mnth,
        month,
        year
    }
}


export const times = (timePeriod) => {
    
    const now = new Date();
    const isoString = now.toISOString(); // eg. "2024-12-15T21:00:00.000Z"

    // Adjust for the local timezone offset
    const timezoneOffset = -now.getTimezoneOffset(); // Offset in minutes
    const offsetHours = String(Math.floor(Math.abs(timezoneOffset) / 60)).padStart(2, "0");
    const offsetMinutes = String(Math.abs(timezoneOffset) % 60).padStart(2, "0");
    const sign = timezoneOffset >= 0 ? "+" : "-";

    // Construct the ISO8601 timestamp with timezone
    const localIsoString = `${isoString.slice(0, -1)}${sign}${offsetHours}:${offsetMinutes}`;


    // Format local date and time
    const formattedTimestamp = now.toLocaleString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });


    // Encode the timestamp for the API call
    const encUTC = encodeURIComponent(localIsoString);
    const encLocale = encodeURIComponent(formattedTimestamp);

    console.log("Local ISO8601 Timestamp:", localIsoString);
    console.log("Encoded Timestamp:", encUTC);

    return {localIsoString, encUTC, encLocale};
}

