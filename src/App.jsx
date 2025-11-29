import React from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import PatientForm from './components/PatientForm';
import PatientList from './components/PatientList';
import ClinicForm from './components/ClinicForm';
import ClinicList from './components/ClinicList';
import AppointmentForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList';
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
    // also remove appointments for that patient
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

      <main className="container">
        <section className="card">
          <PatientForm onAdd={addPatient} />
          <PatientList patients={patients} onDelete={deletePatient} />
        </section>

        <section className="card">
          <ClinicForm onAdd={addClinic} />
          <ClinicList clinics={clinics} onDelete={deleteClinic} />
        </section>

        <section className="card">
          <AppointmentForm patients={patients} clinics={clinics} onAdd={addAppointment} />
          <AppointmentList appointments={appointments} patients={patients} clinics={clinics}
            onUpdateStatus={updateAppointmentStatus} onDelete={deleteAppointment} />
        </section>
      </main>

      <footer className="footer">
        <small>Developed by Olamide — eHA Project</small>
      </footer>
    </div>
  );
}