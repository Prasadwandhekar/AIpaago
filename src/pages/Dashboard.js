// src/components/Dashboard.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Import your CSS file

const Dashboard = () => {
  const [courses, setCourses] = useState([]);
  const [selectedTheme, setSelectedTheme] = useState('default');

  // Function to add a course to the dashboard
  const addCourseToDashboard = (course) => {
    setCourses([...courses, course]);
  };

  return (
    <div className={`dashboard-container ${selectedTheme}`}>
      <header>
        <h1>Student Dashboard</h1>
      </header>

      <section className="dashboard-content">
        {/* Dashboard options, including theme selection */}
        <div className="dashboard-options">
          <h2>Themes</h2>
          <div className="theme-buttons">
            <button onClick={() => setSelectedTheme('default')}>Default Theme</button>
            <button onClick={() => setSelectedTheme('dark')}>Dark Theme</button>
            {/* Add more theme options as needed */}
          </div>
        </div>

        {/* Displaying purchased courses */}
        <div className="purchased-courses">
          <h2>Purchased Courses</h2>
          {courses.length === 0 ? (
            <p>No courses added to the dashboard yet.</p>
          ) : (
            <ul>
              {courses.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Footer with a link back to the home page */}
      <footer>
        <Link to="/">Back to Home</Link>
      </footer>
    </div>
  );
};

export default Dashboard;
