export async function fetchData(url: RequestInfo, init?: RequestInit) {
    let endPoint;
    if (process.env.BACKENDIP) {
        // endPoint = process.env.BACKENDIP + url;
        // console.log(endPoint);
        const response = await fetch(url, init);
        if (response.ok) {
            return response;
        } else {
            throw Error(`Request failed with status ${response.status}`);
        }
    }

}