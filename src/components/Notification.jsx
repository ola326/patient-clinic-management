import React from 'react';

export default function Notification({ type = 'info', message }) {
  if (!message) return null;
  const bg = type === 'error' ? '#ffdddd' : type === 'success' ? '#e6ffef' : '#e8f0ff';
  const border = type === 'error' ? '#ff9b9b' : type === 'success' ? '#63d28a' : '#9fb8ff';
  return (
    <div style={{
      background: bg,
      border: `1px solid ${border}`,
      padding: '10px 12px',
      borderRadius: 6,
      marginBottom: 12,
      color: '#1b2330'
    }}>
      {message}
    </div>
  );
}