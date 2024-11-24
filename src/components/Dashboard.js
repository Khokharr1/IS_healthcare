// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/Dashboard.css';
// const Dashboard = () => {
//     return (
//         <div className="dashboard">
//             <h2>Welcome to DataGuard Dashboard</h2>
//             <ul>
//                 <li><Link to="/upload">Upload Healthcare Data</Link></li>
//                 <li><Link to="/results">View Computation Results</Link></li>
//                 <li><Link to="/settings">Privacy Settings</Link></li>
//             </ul>
//         </div>
//     )
// }
// export default Dashboard

import React, { useState, useEffect } from 'react';
import '../styles/Dashboard.css';

const Dashboard = () => {
  // Mock data for available doctors and their timeslots
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: 'Dr. Sarah Jameel',
      specialization: 'Cardiologist',
      timeslots: ['10:00 AM - 11:00 AM', '01:00 PM - 02:00 PM', '03:00 PM - 04:00 PM']
    },
    {
      id: 2,
      name: 'Dr. Badiee Idrees',
      specialization: 'Neurologist',
      timeslots: ['09:00 AM - 10:00 AM', '12:00 PM - 01:00 PM', '02:00 PM - 03:00 PM']
    },
    {
      id: 3,
      name: 'Dr. Emily Davis',
      specialization: 'General Physician',
      timeslots: ['11:00 AM - 12:00 PM', '04:00 PM - 05:00 PM']
    }
  ]);

  const handleBooking = (doctorName, timeslot) => {
    alert(`You have booked an appointment with ${doctorName} at ${timeslot}.`);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-card">
        <h2>Available Doctors</h2>
        <div className="doctors-list">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="doctor-card">
              <h3>{doctor.name}</h3>
              <p>Specialization: {doctor.specialization}</p>
              <ul>
                {doctor.timeslots.map((timeslot, index) => (
                  <li key={index}>
                    {timeslot}{' '}
                    <button
                      className="book-btn"
                      onClick={() => handleBooking(doctor.name, timeslot)}
                    >
                      Book Now
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
