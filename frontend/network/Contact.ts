import { Contact } from "@/models/Contact";
import { fetchData } from "./FetchData";

interface MessageResponse {
    message: string,
    status: boolean,
}

export async function sendMessage(messageInfo: Contact): Promise<MessageResponse> {
    const response = await fetchData('/api/emails', 
    {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(messageInfo)
    });
    return response?.json();
}