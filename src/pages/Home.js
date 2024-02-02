// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import your CSS file

const HomePage = () => {
  const courses = [
    { id: 1, title: 'Introduction to React', instructor: 'John Doe' },
    { id: 2, title: 'JavaScript Fundamentals', instructor: 'Jane Smith' },
    // Add more courses as needed
  ];

  return (
    <div className="container">
      <header>
        <h1>Student Learning Courses</h1>
      </header>

      <section className="courses">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <h2>{course.title}</h2>
            <p>Instructor: {course.instructor}</p>
            <Link to={`/courses/${course.id}`}>Learn More</Link>
          </div>
        ))}
      </section>

      <footer>
        <p>&copy; 2024 Learning Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
