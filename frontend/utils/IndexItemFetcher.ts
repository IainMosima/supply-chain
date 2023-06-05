import { Services } from "@/models/Services";

export default function IndexItemFetcher(indexes: number[], results: any[]) {
    let result:Services[] = [];
    if (indexes.length > 0) {
        for (const i of indexes) {
            result.push(results[i]);
        }
    }
    return result;
}