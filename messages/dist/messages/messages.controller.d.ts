import { MessagesService } from "./messages.service";
import { CreateMessageDto } from "./dtos/create-message.dto";
export declare class MessagesController {
    messagesService: MessagesService;
    constructor();
    listMessages(): Promise<any>;
    createMessage(body: CreateMessageDto): Promise<void>;
    getMessage(id: string): Promise<any>;
}
