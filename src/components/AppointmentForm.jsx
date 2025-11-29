import React, { useState } from 'react';

function makeId() {
  return 'a_' + Date.now().toString(36) + Math.floor(Math.random() * 1000);
}

export default function AppointmentForm({ patients = [], clinics = [], onAdd }) {
  const [patientId, setPatientId] = useState('');
  const [clinicId, setClinicId] = useState('');
  const [date, setDate] = useState('');
  const [reason, setReason] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setError('');
    if (!patientId) return setError('Select a patient.');
    if (!clinicId) return setError('Select a clinic.');
    if (!date) return setError('Select a date and time.');
    const newAppt = {
      id: makeId(),
      patientId,
      clinicId,
      date,
      reason: reason.trim(),
      status: 'scheduled'
    };
    onAdd(newAppt);
    setPatientId(''); setClinicId(''); setDate(''); setReason('');
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 12 }}>
      <h3>Schedule appointment</h3>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <div style={{ display: 'grid', gap: 8 }}>
        <select value={patientId} onChange={e => setPatientId(e.target.value)}>
          <option value="">-- choose patient --</option>
          {patients.map(p => <option key={p.id} value={p.id}>{p.firstName} {p.lastName}</option>)}
        </select>

        <select value={clinicId} onChange={e => setClinicId(e.target.value)}>
          <option value="">-- choose clinic --</option>
          {clinics.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
        </select>

        <input type="datetime-local" value={date} onChange={e => setDate(e.target.value)} />
        <input placeholder="Reason (optional)" value={reason} onChange={e => setReason(e.target.value)} />
        <button type="submit">Add appointment</button>
      </div>
    </form>
  );
}