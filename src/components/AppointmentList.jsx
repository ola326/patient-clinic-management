// src/components/AppointmentList.jsx
import React from 'react';

export default function AppointmentList({
  appointments = [],
  patients = [],
  clinics = [],
  onDelete,
  onUpdateStatus
}) {
  const findName = (id, list) =>
    list.find(x => x.id === id)?.firstName ||
    list.find(x => x.id === id)?.name ||
    'Unknown';

  return (
    <div style={{ padding: '8px 4px' }}>
      <h3 style={{ marginBottom: 8 }}>Appointments ({appointments.length})</h3>
      {appointments.length === 0 && <div>No appointments yet.</div>}

      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {appointments.map(a => {
          const patientName = findName(a.patientId, patients);
          const clinicName = findName(a.clinicId, clinics);
          const isDone = a.status === 'done';

          return (
            <li
              key={a.id}
              className={isDone ? 'appointment-item completed' : 'appointment-item'}
              style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, alignItems: 'center' }}
            >
              <div style={{ textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <strong>{patientName} @ {clinicName}</strong>

                  {/* Completed badge */}
                  {isDone && <span className="done-badge">Completed</span>}
                </div>

                <div style={{ fontSize: 13, color: '#666', marginTop: 6 }}>
                  {a.datetime ? new Date(a.datetime).toLocaleString() : 'No date'} {a.reason ? ` • ${a.reason}` : ''}
                </div>
              </div>

              <div style={{ display: 'flex', gap: 8 }}>
                {/* Mark done / Undo */}
                <button
                  className="small-btn list-action-btn"
                  onClick={() => onUpdateStatus?.(a.id, isDone ? 'pending' : 'done')}
                >
                  {isDone ? 'Undo' : 'Mark done'}
                </button>

                <button
                  className="small-btn list-action-btn"
                  onClick={() => onDelete?.(a.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}