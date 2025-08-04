import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import CourseOverviewPage from './components/CourseOverviewPage';
import PartnersImpactPage from './components/PartnersImpactPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/course-overview" element={<CourseOverviewPage />} />
          <Route path="/partners-impact" element={<PartnersImpactPage />} />
        </Routes>
      </div>
    </Router>
  );
}
