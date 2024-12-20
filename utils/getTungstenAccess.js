
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
    // cachedToken = "eyJraWQiOiJsR3ZDNkJ6VGFMdHQ2SGxYb2M3SlNic21WaVhwODhvOWZmcER0dU10TWxzPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI2cmJvaXF1MzFjbzM0dDFiZWtjZGtoY3VoNSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoidHJhbnNhY3Rpb25zXC9wb3N0IHRyYW5zYWN0aW9uc1wvZ2V0IiwiYXV0aF90aW1lIjoxNzM0MzIzOTc0LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0yLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMl9ZQlRobW94UXgiLCJleHAiOjE3MzQ0MTAzNzQsImlhdCI6MTczNDMyMzk3NCwidmVyc2lvbiI6MiwianRpIjoiYmZlMzZjMjItODBkNy00YTE3LTgwZjgtMjg3ZTU3ZWYyODMxIiwiY2xpZW50X2lkIjoiNnJib2lxdTMxY28zNHQxYmVrY2RraGN1aDUifQ.O7Z8VICAwuauBzVyubk6FVPk-G4uPKRmuQ_8_78oeYT86wVHxAO5GsAB4PKfuRAH94TaBj0wmnDs_IPbqAJ3xz3NwbgEMeDo7StaeHlvddPUbanEPVAtpfrafi36f5Y97IVskvAm6GU_5gVmuI0_hncSEYQjhURgm78QsgiMesIgtRmI9SB0z6fX6GSXhuckhk_KKadSNUu4S6kEcMdH-hW741Q9NKBmyj2PkfaSObRYroWKaquJZD1YaRSZvthF0IWpXTYwXu6b_veZ5amEgZzI_NdoPcYjUNWSnCyBvAmDphM3xMm_NZZs9N2BZ4thvDGXeP8q_TRJWbZATo9Mvw";

    console.log(`Expires in: ${data.expires_in}`)
    // tokenExpiryTime = 86400 * 1000;
    tokenExpiryTime = currentTime + data.expires_in * 1000;

    let fTime = new Date(currentTime).toLocaleTimeString("en-US",{
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'});

    

    
    console.log(`Token Expiry Time (ms): ${tokenExpiryTime}`);
    console.log(`Token Expiry Time (formatted): ${new Date(tokenExpiryTime).toLocaleTimeString("en-US",{
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'})}`);

    return cachedToken;
}