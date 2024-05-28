const EMA_RECORDS_FETCH_ENDPOINT = "https://be.emascreener.bloombyte.dev/api/v1/ema-records/";
const CURRENCY_FETCH_ENDPOINT = "https://be.emascreener.bloombyte.dev/api/v1/currencies/";


async function fetchEmaRecords(headers, queryParams) {
    const url = new URL(EMA_RECORDS_FETCH_ENDPOINT);
    if (queryParams) {
        Object.keys(queryParams).forEach(key => url.searchParams.append(key, queryParams[key]));
    }
    const response = await fetch(url, {
        headers: headers
    });
    if (!response.ok) {
        throw new Error('Failed to fetch EMA records');
    }
    return await response.json();
}


async function fetchCurrencies(headers) {
    const response = await fetch(CURRENCY_FETCH_ENDPOINT, {
        headers: headers
    });
    if (!response.ok) {
        throw new Error('Failed to fetch currencies');
    }
    return await response.json();
}


async function main() {
    const headers = {
        "Content-Type": "application/json",
        "X-API-KEY": "oRbqUmrt.NaM8xCtfNVa2gTS7w2M6Ru9TUQ6IJxaf",
    };

    try {
        const emaRecords = await fetchEmaRecords(headers);
        const currencies = await fetchCurrencies(headers);

        console.log(emaRecords);
        console.log(currencies);
    } catch (error) {
        console.error(error.message);
    }
}

main();

