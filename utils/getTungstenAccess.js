export async function getTungstenAccess() {
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
        throw new Error("Failed to fetch Tungsten access token");
    }

    const data = await response.json();
    return data.access_token;
}