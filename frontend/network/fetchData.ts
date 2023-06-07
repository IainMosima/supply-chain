export async function fetchData(url: RequestInfo, init?: RequestInit) {
    let endPoint;
    if (process.env.BACKENDIP) {
        endPoint = process.env.BACKENDIP + url;
        const response = await fetch(endPoint, init);
        if (response.ok) {
            return response;
        } else {
            throw Error(`Request failed with status ${response.status}`);
        }
    }

}