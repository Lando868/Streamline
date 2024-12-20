export const tungsten = {
    tokenUrl: process.env.TUNGSTEN_TOKEN_URL,
    clinetID: process.env.TUNGSTEN_CLIENT_ID,
    clientSecret: process.env.TUNGSTEN_CLIENT_SECRET,
    scope: process.env.TUNGSTEN_SCOPE,
    bearer: process.env.TUNGSTEN_BEARER,
    baseUrl: "https://tungsten-api.nutrien.com/v1/operations/tungsten/",

    latest: "system/trinidadphd/tag/value/latest?tagName",

    latestValue: "https://tungsten-api.nutrien.com/v1/operations/tungsten/system/trinidadphd/tag/value/latest?tagName",

    tags: "https://tungsten-api.nutrien.com/v1/operations/tungsten/system/trinidadphd/tags/value/latest?",

    suez: "https://tungsten-api.nutrien.com/v1/operations/tungsten/system/suez/tags/value?",

    multipleTagsValues: "https://tungsten-api.nutrien.com/v1/operations/tungsten/system/trinidadphd/tags/values?",

    drest: "startTime=7%2F1%2F2023%2010%3A00%3A00%20AM&endTime=7%2F28%2F2023%2011%3A00%3A00%20AM&reductionType=snapshot&reductionOffset=after&reductionFrequency=43200&size=75&page=1&fields=TagName%2C%20DoubleValue%2C%20StringValue%2C%20TimeStamp%2C%20Confidence",

    latestFields: "fields=TagName%2C%20TimeStamp%2C%20DoubleValue%2C%20StringValue%2C%20Confidence",

    tagsFields: "fields=TagName%2C%20DoubleValue",


    //tungsten-api.nutrien.com/v1/operations/tungsten/system/trinidadphd/tags/value/latest?tagName=01_PI_5.DACA.PV&tagName=01_PI_5A.DACA.PV&page=1&size=20&fields=TagName%2C%20DoubleValue%2C%20StringValue%2C%20Confidence" 


    multipleTagsValuesX: "https://tungsten-api.nutrien.com/v1/operations/tungsten/system/trinidadphd/tags/values?tagName=01_FI_104.01_FQI_104.PV&tagName=04_FI_1A.04_FQI_1A.PV&startTime=7%2F1%2F2023%2010%3A00%3A00%20AM&endTime=7%2F28%2F2023%2011%3A00%3A00%20AM&reductionType=snapshot&reductionOffset=after&reductionFrequency=43200&size=75&page=1&fields=TagName%2C%20DoubleValue%2C%20StringValue%2C%20TimeStamp%2C%20Confidence"
}

