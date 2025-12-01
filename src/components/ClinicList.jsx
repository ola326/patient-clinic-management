// src/components/ClinicList.jsx
import React from 'react';
export default function ClinicList({ clinics = [], onDelete }) {
  return (
    <div style={{ padding: '8px 4px' }}>
      <h3 style={{ marginBottom: 8 }}>Clinics ({clinics.length})</h3>
      {clinics.length === 0 && <div>No clinics yet.</div>}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {clinics.map(c => (
          <li key={c.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
            <div style={{ textAlign: 'left' }}>
              <strong>{c.name}</strong>
              <div style={{ fontSize: 13, color: '#666' }}>{c.address || 'No address'} • {c.contact || 'No contact'}</div>
            </div>
            <div>
              <button className="small-btn" onClick={() => onDelete(c.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
