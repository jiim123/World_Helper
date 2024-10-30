export interface Message {
    content: string;
    role: 'assistant' | 'user';
  }
  
  export interface ChatResponse {
    message: string;
    conversationId?: string;
  }