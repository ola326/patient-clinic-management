import React from 'react';

export default function PatientList({ patients = [], onDelete }) {
  return (
    <div style={{ marginTop: 12 }}>
      <h3>Patients ({patients.length})</h3>
      {patients.length === 0 && <div>No patients yet.</div>}
      <ul style={{ paddingLeft: 18 }}>
        {patients.map(p => (
          <li key={p.id} style={{ marginBottom: 8 }}>
            <strong>{p.firstName} {p.lastName}</strong> — {p.email} — {p.age} yrs
            <button onClick={() => onDelete(p.id)} style={{ marginLeft: 10 }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}