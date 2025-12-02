# ClinicCare — Patient & Clinic Management

A small React + Vite project implementing a simple patient & clinic management app for the assignment.

## Project summary
This project demonstrates controlled React forms, validation and local data persistence using React hooks. Core features:
- Add / list patients (first name, last name, email, age, phone) with validation (age ≥18, email format).
- Add / list clinics.
- Create appointments linking patients and clinics, with scheduled date/time.
- Mark appointments completed or cancelled.
- Data stored in `localStorage` so it persists between refreshes.

## Demo / Run locally

```bash
# clone (if you haven't)
git clone https://github.com/ola326/patient-clinic-management.git
cd patient-clinic-management

# install deps
npm install

# start dev server
npm run dev

# open the Vite URL (usually http://localhost:5173)