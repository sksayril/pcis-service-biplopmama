import React, { useState } from 'react';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  ConversationHeader,
  Avatar,
  TypingIndicator
} from '@chatscope/chat-ui-kit-react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import ReactMarkdown from 'react-markdown';

// Define a custom message type that matches what the chat UI kit expects
interface ChatMessage {
  message: string;
  sentTime: string;
  sender: string;
  direction: 'incoming' | 'outgoing';
  position?: 'normal' | 'single' | 'first' | 'last' | 0 | 1 | 2 | 3;
  isMarkdown?: boolean;
}

// Interface for API request
interface ApiMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

// Interface for API response
interface ApiResponse {
  completion: string;
}

interface ChatWidgetProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

// Custom component to render markdown messages
const MarkdownMessage: React.FC<{ content: string }> = ({ content }) => {
  return (
    <div className="markdown-message">
      <ReactMarkdown
        components={{
          p: (props) => <p className="text-blue-600" {...props} />,
          a: (props) => <a className="text-blue-600 underline" {...props} />,
          h1: (props) => <h1 className="text-blue-600 text-xl font-bold my-2" {...props} />,
          h2: (props) => <h2 className="text-blue-600 text-lg font-bold my-2" {...props} />,
          h3: (props) => <h3 className="text-blue-600 text-md font-bold my-1" {...props} />,
          ul: (props) => <ul className="list-disc pl-5 my-2" {...props} />,
          ol: (props) => <ol className="list-decimal pl-5 my-2" {...props} />,
          li: (props) => <li className="text-blue-600 my-1" {...props} />,
          code: (props) => <code className="bg-gray-100 px-1 rounded text-blue-600" {...props} />,
          pre: (props) => <pre className="bg-gray-100 p-2 rounded my-2 overflow-auto text-blue-600" {...props} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

const ChatWidget: React.FC<ChatWidgetProps> = ({ open, setOpen }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      message: "Hello, I'm Gami, your PCIS Services business assistant. How can I help you today?",
      sentTime: "just now",
      sender: "Gami",
      direction: "incoming",
      isMarkdown: true
    }
  ]);
  const [typing, setTyping] = useState(false);
  const [apiMessages, setApiMessages] = useState<ApiMessage[]>([
    { role: "system", content: "You are a helpful business assistant named Gami representing PCIS Services. Always answer questions related to business registration, company formation, legal compliance, and other business services. Keep responses concise and professional. Format important information in markdown to highlight key points. When discussing business structures, always mention the following options: sole proprietorship, partnership, corporation, and limited liability company (LLC). Include pros and cons for each business structure when relevant. Always format your responses in markdown with blue text for emphasis." }
  ]);

  const handleSend = async (message: string) => {
    // Add user message
    const newUserMessage: ChatMessage = {
      message,
      sentTime: "just now",
      sender: "User",
      direction: "outgoing",
      position: "single"
    };
    
    setMessages([...messages, newUserMessage]);
    setTyping(true);
    
    // Add user message to API messages
    const updatedApiMessages = [...apiMessages, { role: "user" as const, content: message }];
    setApiMessages(updatedApiMessages);
    
    try {
      // Call the API
      const response = await fetch('https://api.a0.dev/ai/llm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: updatedApiMessages
        })
      });
      
      if (!response.ok) {
        throw new Error('API request failed');
      }
      
      const data: ApiResponse = await response.json();
      
      // Add AI response to messages
      const aiResponse: ChatMessage = {
        message: data.completion,
        sentTime: "just now",
        sender: "Gami",
        direction: "incoming",
        position: "single",
        isMarkdown: true
      };
      
      // Add assistant response to API messages
      setApiMessages([...updatedApiMessages, { role: "assistant" as const, content: data.completion }]);
      setMessages(prev => [...prev, aiResponse]);
    } catch (err) {
      // Handle error
      console.error('API request failed:', err);
      const errorResponse: ChatMessage = {
        message: "I'm sorry, I couldn't process your request at the moment. Please try again later.",
        sentTime: "just now",
        sender: "Gami",
        direction: "incoming",
        position: "single"
      };
      
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setTyping(false);
    }
  };

  if (!open) {
    return (
      <button 
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 bg-primary-600 text-white p-4 rounded-full shadow-lg hover:bg-primary-700 transition-all z-50"
        aria-label="Open chat"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
    );
  }

  return (
    <div className="fixed bottom-5 right-5 w-80 h-96 z-50 shadow-xl rounded-lg overflow-hidden">
      <MainContainer>
        <ChatContainer>
          <ConversationHeader>
            <Avatar src="https://via.placeholder.com/40x40?text=AI" name="Gami" />
            <ConversationHeader.Content userName="Gami" info="PCIS Services Assistant" />
            <ConversationHeader.Actions>
              <button onClick={() => setOpen(false)} className="text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </ConversationHeader.Actions>
          </ConversationHeader>
          <MessageList
            typingIndicator={typing ? <TypingIndicator content="Gami is typing" /> : null}
          >
            {messages.map((message, i) => (
              <Message key={i} model={message}>
                {message.isMarkdown ? (
                  <MarkdownMessage content={message.message} />
                ) : (
                  message.message
                )}
              </Message>
            ))}
          </MessageList>
          <MessageInput placeholder="Type message here" onSend={handleSend} />
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default ChatWidget;
