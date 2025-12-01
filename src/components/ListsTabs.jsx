// src/components/ListsTabs.jsx
import React, { useState } from 'react';
import PatientList from './PatientList';
import ClinicList from './ClinicList';
import AppointmentList from './AppointmentList';

export default function ListsTabs(props) {
  const { patients, clinics, appointments, onDeletePatient, onDeleteClinic, onDeleteAppointment, onUpdateAppointmentStatus } = props;
  const [active, setActive] = useState('patients');

  return (
    <div className="lists-tabs">
      <div className="tab-headers">
        <button className={active === 'patients' ? 'active' : ''} onClick={() => setActive('patients')}>
          Patients ({patients.length})
        </button>

        <button className={active === 'clinics' ? 'active' : ''} onClick={() => setActive('clinics')}>
          Clinics ({clinics.length})
        </button>

        <button className={active === 'appointments' ? 'active' : ''} onClick={() => setActive('appointments')}>
          Appointments ({appointments.length})
        </button>
      </div>

      <div className="tab-content">
        {active === 'patients' && (
          <PatientList patients={patients} onDelete={onDeletePatient} />
        )}

        {active === 'clinics' && (
          <ClinicList clinics={clinics} onDelete={onDeleteClinic} />
        )}

        {active === 'appointments' && (
          <AppointmentList
            appointments={appointments}
            patients={patients}
            clinics={clinics}
            onDelete={onDeleteAppointment}
            onUpdateStatus={onUpdateAppointmentStatus}
          />
        )}
      </div>
    </div>
  );
}
