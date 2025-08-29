import React, { useState } from 'react';
import ConversationList from '../components/messages/ConversationList';
import MessageChat from '../components/messages/MessageChat';
import { MessageSquare } from 'lucide-react';

const MessagesPage: React.FC = () => {
  const [selectedConversationId, setSelectedConversationId] = useState<string | null>(null);
  
  return (
    <div className="container mx-auto p-4 h-[calc(100vh-64px)]">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden h-full flex flex-col md:flex-row">
        <div className="w-full md:w-80 lg:w-96 border-b md:border-b-0 md:border-r border-gray-200">
          <ConversationList 
            onSelectConversation={setSelectedConversationId}
            selectedConversationId={selectedConversationId}
          />
        </div>
        
        <div className="flex-grow flex">
          {selectedConversationId ? (
            <MessageChat conversationId={selectedConversationId} />
          ) : (
            <div className="flex-grow flex flex-col items-center justify-center p-6 text-center text-gray-500">
              <MessageSquare className="h-16 w-16 mb-4 text-gray-300" />
              <h3 className="text-lg font-medium text-gray-700 mb-2">Your Messages</h3>
              <p className="max-w-xs">
                Select a conversation to start chatting or connect with other users to make plans.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;