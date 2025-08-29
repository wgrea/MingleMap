import React from 'react';
import { Conversation } from '../../types/location';
import { mockConversations } from '../../data/mockData';

interface ConversationListProps {
  onSelectConversation: (conversationId: string) => void;
  selectedConversationId: string | null;
}

const ConversationList: React.FC<ConversationListProps> = ({ 
  onSelectConversation, 
  selectedConversationId 
}) => {
  const conversations = mockConversations;

  return (
    <div className="overflow-y-auto h-full border-r border-gray-200">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Messages</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search messages..."
            className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
      </div>
      
      <div className="divide-y divide-gray-200">
        {conversations.map((conversation) => {
          // This assumes the first participant who is not the current user (id: '1') is the other user
          const otherParticipantId = conversation.participants.find(id => id !== '1') || '';
          const isSelected = selectedConversationId === conversation.id;
          
          return (
            <div
              key={conversation.id}
              className={`p-4 cursor-pointer transition-colors ${
                isSelected ? 'bg-orange-50' : 'hover:bg-gray-50'
              }`}
              onClick={() => onSelectConversation(conversation.id)}
            >
              <div className="flex items-center">
                <div className="relative">
                  <img
                    src={`https://i.pravatar.cc/150?u=${otherParticipantId}`}
                    alt="User avatar"
                    className="h-12 w-12 rounded-full"
                  />
                  {conversation.unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {conversation.unreadCount}
                    </span>
                  )}
                </div>
                
                <div className="ml-3 flex-1 overflow-hidden">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-medium text-gray-900 truncate">
                      {otherParticipantId === '101' ? 'Emma Johnson' : 'Michael Smith'}
                    </h3>
                    <span className="text-xs text-gray-500">
                      {new Date(conversation.lastMessage.timestamp).toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </span>
                  </div>
                  
                  <p className={`text-sm truncate ${
                    conversation.unreadCount > 0 ? 'font-semibold text-gray-900' : 'text-gray-500'
                  }`}>
                    {conversation.lastMessage.content}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConversationList;