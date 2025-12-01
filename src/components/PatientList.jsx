// src/components/PatientList.jsx
import React from 'react';

export default function PatientList({ patients = [], onDelete }) {
  return (
    <div style={{ padding: '8px 4px' }}>
      <h3 style={{ marginBottom: 8 }}>Patients ({patients.length})</h3>

      {patients.length === 0 && <div>No patients yet.</div>}

      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {patients.map(p => (
          <li key={p.id} style={{ marginBottom: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ textAlign: 'left' }}>
              <strong>{p.firstName} {p.lastName}</strong>
              <div style={{ fontSize: 13, color: '#666' }}>{p.email} • {p.age} yrs</div>
            </div>

            <div style={{ display: 'flex', gap: 8 }}>
              {/* Example buttons: you can style these by adding classes */}
              <button onClick={() => onDelete(p.id)} className="small-btn">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
