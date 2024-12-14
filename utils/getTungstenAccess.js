
let cachedToken = null;
let tokenExpiryTime = 0;

export async function getTungstenAccess() {

    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    const currentTime = Date.now();

    console.log("Checking token validity...");

    if(cachedToken && currentTime < tokenExpiryTime){
        console.log("Using cached token.");
        return cachedToken;
    }

    console.log("Fetching new token...");
    const response = await fetch(`${process.env.TUNGSTEN_TOKEN_URL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
            grant_type: process.env.TUNGSTEN_GRANT_TYPE,
            client_id: process.env.TUNGSTEN_CLIENT_ID,
            client_secret: process.env.TUNGSTEN_CLIENT_SECRET,
        }),
    });

    if (!response.ok) {
        throw new Error("Failed to fetch Tungsten access token!");
    }

    const data = await response.json();

    cachedToken = data.access_token;

    console.log(`Expires in: ${data.expires_in}`)
    // tokenExpiryTime = 86400 * 1000;
    tokenExpiryTime = currentTime + data.expires_in * 1000;

    let fTime = new Date(currentTime).toLocaleTimeString("en-US",{
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'});

    let fNow = new Date(Date.now()).toLocaleTimeString("en-US",{
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'});

    console.log(`CURRENT TIME: New token fetched and cached at ${fTime}`);
    console.log(`NOW: New token fetched and cached at ${fNow}`);
    console.log(`Token Expiry Time (ms): ${tokenExpiryTime}`);
    console.log(`Token Expiry Time (formatted): ${new Date(tokenExpiryTime).toLocaleTimeString("en-US",{
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'})}`);

    return cachedToken;
}