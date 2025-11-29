import React from 'react';

export default function ClinicList({ clinics = [], onDelete }) {
  return (
    <div style={{ marginTop: 12 }}>
      <h3>Clinics ({clinics.length})</h3>
      {clinics.length === 0 && <div>No clinics yet.</div>}
      <ul style={{ paddingLeft: 18 }}>
        {clinics.map(c => (
          <li key={c.id} style={{ marginBottom: 8 }}>
            <strong>{c.name}</strong> — {c.address || 'no address'} {c.contact ? `— ${c.contact}` : null}
            <button onClick={() => onDelete(c.id)} style={{ marginLeft: 10 }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}