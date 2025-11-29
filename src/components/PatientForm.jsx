import React, { useState } from 'react';
import Notification from './Notification';

function makeId() {
  return 'p_' + Date.now().toString(36) + Math.floor(Math.random() * 1000);
}

export default function PatientForm({ onAdd }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  function validate() {
    if (!firstName.trim() || !lastName.trim()) return 'First and last name are required.';
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email)) return 'Enter a valid email address.';
    const numAge = Number(age);
    if (!age || Number.isNaN(numAge) || numAge < 18) return 'Age is required and must be 18 or older.';
    return null;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError('');
    const err = validate();
    if (err) {
      setError(err);
      return;
    }
    const newPatient = {
      id: makeId(),
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      age: Number(age),
      phone: phone.trim()
    };
    onAdd(newPatient);
    setFirstName(''); setLastName(''); setEmail(''); setAge(''); setPhone('');
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
      <h3 style={{ marginBottom: 8 }}>Add patient</h3>
      <Notification type="error" message={error} />
      <div style={{ display: 'grid', gap: 8 }}>
        <input placeholder="First name" value={firstName} onChange={e => setFirstName(e.target.value)} />
        <input placeholder="Last name" value={lastName} onChange={e => setLastName(e.target.value)} />
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input placeholder="Age" value={age} onChange={e => setAge(e.target.value)} />
        <input placeholder="Phone (optional)" value={phone} onChange={e => setPhone(e.target.value)} />
        <button type="submit">Add patient</button>
      </div>
    </form>
  );
}