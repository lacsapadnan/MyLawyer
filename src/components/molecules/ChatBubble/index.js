import React from 'react';
import IsMe from './IsMe';
import Other from './Other';

export default function ChatBubble({isMe}) {
  if (isMe) {
    return <IsMe />;
  }
  return <Other />;
}
