import React, { useState } from 'react';

function makeId() {
  return 'c_' + Date.now().toString(36) + Math.floor(Math.random() * 1000);
}

export default function ClinicForm({ onAdd }) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setError('');
    if (!name.trim()) {
      setError('Clinic name is required.');
      return;
    }
    onAdd({ id: makeId(), name: name.trim(), address: address.trim(), contact: contact.trim() });
    setName(''); setAddress(''); setContact('');
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 12 }}>
      <h3>Add clinic</h3>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <div style={{ display: 'grid', gap: 8 }}>
        <input placeholder="Clinic name" value={name} onChange={e => setName(e.target.value)} />
        <input placeholder="Address (optional)" value={address} onChange={e => setAddress(e.target.value)} />
        <input placeholder="Contact (optional)" value={contact} onChange={e => setContact(e.target.value)} />
        <button type="submit">Add clinic</button>
      </div>
    </form>
  );
}