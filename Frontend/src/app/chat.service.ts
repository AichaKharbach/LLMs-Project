import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ChatRequest {
  input: string;
  semantic_search: boolean;
}

interface ChatResponse {
  result: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private apiUrl = 'http://127.0.0.1:8000/query';  // Ensure this matches your FastAPI endpoint

  constructor(private http: HttpClient) { }

  queryChat(input: string, semantic_search: boolean): Observable<ChatResponse> {
    const request: ChatRequest = { input, semantic_search };
    return this.http.post<ChatResponse>(this.apiUrl, request);
  }
}
