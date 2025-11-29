import React from 'react';

export default function AppointmentList({ appointments = [], patients = [], clinics = [], onUpdateStatus, onDelete }) {
  function findPatient(id) {
    return patients.find(p => p.id === id) || { firstName: 'Unknown', lastName: '' };
  }
  function findClinic(id) {
    return clinics.find(c => c.id === id) || { name: 'Unknown' };
  }

  return (
    <div style={{ marginTop: 12 }}>
      <h3>Appointments ({appointments.length})</h3>
      {appointments.length === 0 && <div>No appointments yet.</div>}
      <ul style={{ paddingLeft: 18 }}>
        {appointments.map(a => {
          const p = findPatient(a.patientId);
          const c = findClinic(a.clinicId);
          return (
            <li key={a.id} style={{ marginBottom: 10 }}>
              <div>
                <strong>{p.firstName} {p.lastName}</strong> — {c.name}
              </div>
              <div>{new Date(a.date).toLocaleString()} — {a.reason || 'No reason'} — <em>{a.status}</em></div>
              <div style={{ marginTop: 6 }}>
                {a.status !== 'completed' && <button onClick={() => onUpdateStatus(a.id, 'completed')}>Complete</button>}
                {a.status !== 'cancelled' && <button onClick={() => onUpdateStatus(a.id, 'cancelled')} style={{ marginLeft: 8 }}>Cancel</button>}
                <button onClick={() => onDelete(a.id)} style={{ marginLeft: 8 }}>Delete</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}