// src/App.jsx
import React from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import PatientForm from './components/PatientForm';
import PatientList from './components/PatientList';
import ClinicForm from './components/ClinicForm';
import ClinicList from './components/ClinicList';
import AppointmentForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList';
import ListsTabs from './components/ListsTabs';
import './App.css';

export default function App() {
  const [patients, setPatients] = useLocalStorage('clinic:patients', []);
  const [clinics, setClinics] = useLocalStorage('clinic:clinics', []);
  const [appointments, setAppointments] = useLocalStorage('clinic:appointments', []);

  // patients
  function addPatient(p) {
    setPatients(prev => [p, ...prev]);
  }
  function deletePatient(id) {
    setPatients(prev => prev.filter(x => x.id !== id));
    setAppointments(prev => prev.filter(a => a.patientId !== id));
  }

  // clinics
  function addClinic(c) {
    setClinics(prev => [c, ...prev]);
  }
  function deleteClinic(id) {
    setClinics(prev => prev.filter(x => x.id !== id));
    setAppointments(prev => prev.filter(a => a.clinicId !== id));
  }

  // appointments
  function addAppointment(a) {
    setAppointments(prev => [a, ...prev]);
  }
  function updateAppointmentStatus(id, status) {
    setAppointments(prev => prev.map(a => a.id === id ? { ...a, status } : a));
  }
  function deleteAppointment(id) {
    setAppointments(prev => prev.filter(a => a.id !== id));
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>ClinicCare — Patient & Clinic Management</h1>
        <p className="muted">Add patients, clinics, and schedule appointments (persisted to localStorage).</p>
      </header>

      <main className="forms-row">
        <section className="form-card">
          <div className="form-body">
            <PatientForm onAdd={addPatient} />
          </div>
          <div className="form-footer" />
        </section>

        <section className="form-card">
          <div className="form-body">
            <ClinicForm onAdd={addClinic} />
          </div>
          <div className="form-footer" />
        </section>

        <section className="form-card">
          <div className="form-body">
            <AppointmentForm patients={patients} clinics={clinics} onAdd={addAppointment} />
          </div>
          <div className="form-footer" />
        </section>
      </main>

      {/* lists panel (shared) */}
      <div className="lists-panel-wrapper">
        <ListsTabs
          patients={patients}
          clinics={clinics}
          appointments={appointments}
          onDeletePatient={deletePatient}
          onDeleteClinic={deleteClinic}
          onDeleteAppointment={deleteAppointment}
          onUpdateAppointmentStatus={updateAppointmentStatus}
        />
      </div>

      <footer className="footer">
        <small>Developed by Olamide — eHA Project</small>
      </footer>
    </div>
  );
}
