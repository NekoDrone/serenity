export class teleResponse {
    chat_id: string;
    text: string;

    constructor (chat_id: string, text: string){
        this.chat_id = chat_id;
        this.text = text;
    }
}