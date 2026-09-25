# NextWave

## Smart Rural Healthcare Access Platform

NextWave is a web-based healthcare platform designed to improve access to public healthcare services for people in rural and underserved areas.

The platform connects patients, doctors, pharmacists, and laboratory staff through a single system. It provides patient medical records, prescriptions, laboratory orders, and role-based healthcare workflows.

## Features

### Patient Portal
- Patient login using ABHA ID
- Patient profile and personal information
- View medical records
- View prescriptions
- View laboratory reports
- Multilingual interface

### Doctor Portal
- Doctor login
- Search patients using ABHA ID
- Request patient consent
- View patient medical history
- Add clinical records
- Create e-prescriptions
- Create laboratory test orders

### Pharmacist Portal
- Pharmacist login
- View prescription queue
- Dispense medicines
- Manage prescription status

### Laboratory Portal
- Laboratory staff login
- View laboratory orders
- Update sample status
- Add laboratory results
- Print laboratory results

## Technology Stack

### Frontend
- HTML
- CSS
- JavaScript
- Tailwind CSS
- Font Awesome

### Backend
- Node.js
- Express.js
- REST APIs

### Database
- MongoDB Atlas
- Mongoose

### Authentication & Security
- JWT authentication
- bcrypt password hashing
- Role-based access
- Environment variables for sensitive configuration

## System Architecture

```text
Patient / Doctor / Pharmacist / Lab Staff
                    |
                    v
              Frontend
                    |
                    v
             Node.js + Express
                    |
                    v
              REST APIs
                    |
                    v
              MongoDB Atlas
