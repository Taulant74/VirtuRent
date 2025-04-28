import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainSection.css';

function MainSection() {
  return (
    <section className="main-section d-flex align-items-center justify-content-center text-center">
      <div className="container">
        <h1 className="display-4 text-white">
          Welcome to <span className="text-warning">VirtuRent</span>
        </h1>
        <p className="lead text-white mt-3">
          Your all-in-one rental marketplace — Cars that roar, homes that hug, tech that powers up — all just a click away.
        </p>
        <div className="mt-4">
          <a href="/explore" className="btn btn-warning btn-lg me-3">
            🔍 Explore Rentals
          </a>
          <a href="/list" className="btn btn-outline-light btn-lg">
            ➕ List Your Item
          </a>
        </div>
        <p className="text-white-50 fst-italic mt-4">
          Over 5,000+ successful rentals in Kosova , Albania , Montenegro — yours could be next.
        </p>
      </div>
    </section>
  );
}

export default MainSection;
