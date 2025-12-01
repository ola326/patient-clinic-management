// src/components/AppointmentList.jsx
import React from 'react';
export default function AppointmentList({ appointments = [], patients = [], clinics = [], onDelete, onUpdateStatus }) {
  const findName = (id, list) => list.find(x => x.id === id)?.firstName || list.find(x => x.id === id)?.name || 'Unknown';

  return (
    <div style={{ padding: '8px 4px' }}>
      <h3 style={{ marginBottom: 8 }}>Appointments ({appointments.length})</h3>
      {appointments.length === 0 && <div>No appointments yet.</div>}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {appointments.map(a => (
          <li key={a.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
            <div style={{ textAlign: 'left' }}>
              <strong>{findName(a.patientId, patients)} @ {findName(a.clinicId, clinics)}</strong>
              <div style={{ fontSize: 13, color: '#666' }}>{new Date(a.datetime).toLocaleString()} • {a.reason || ''}</div>
            </div>

            <div style={{ display: 'flex', gap: 8 }}>
              <button className="small-btn" onClick={() => onUpdateStatus?.(a.id, a.status === 'done' ? 'pending' : 'done')}>
                {a.status === 'done' ? 'Undo' : 'Mark done'}
              </button>
              <button className="small-btn" onClick={() => onDelete(a.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
