import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChatService } from '../chat.service';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}
interface Chat {
  id: number;
  message: string;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: Message[] = [];
  chats: Chat[] = [];
  newMessage: string = '';
  loading: boolean = false;
  private lastId: number = 0;  // Maintains the last ID used for a message

  @ViewChild('messageInput', { static: true }) messageInput!: ElementRef<HTMLInputElement>;

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {}

  navigateToChat(chatId: string): void {
    // Implement the logic to handle chat navigation or loading of chat details
    console.log('Navigate to chat with ID:', chatId);
    // Here you might load messages related to a particular chat ID
  }

  sendMessage(input: string, semantic_search: boolean = false): void {
    if (input.trim()) {
      const message: Message = {
        id: ++this.lastId,
        text: input,
        sender: 'user'
      };
      this.messages.push(message); // Add new user message to messages array

      this.loading = true;

      // Simulating a response from the chat service
      this.chatService.queryChat(input, semantic_search).subscribe(response => {
        const botResponse: Message = {
          id: ++this.lastId,
          text: response.result,
          sender: 'bot'
        };
        this.messages.push(botResponse); // Add bot response to messages array
        this.messageInput.nativeElement.value = ''; // Clear the actual input field
        this.loading = false;
      }, error => {
        console.error('Error occurred while fetching the response:', error);
        this.loading = false;
      });
    }
  }
}