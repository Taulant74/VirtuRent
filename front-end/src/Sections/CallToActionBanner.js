import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CallToActionBanner.css';

function CallToActionBanner() {
  return (
    <section className="bg-primary text-white py-4">
      <div className="container text-center">
        <h2 className="fw-bold">Got something to rent?</h2>
        <p className="mb-4">List it in under 60 sec!</p>
        <button className="btn btn-light btn-lg shadow-sm hover-grow">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default CallToActionBanner;
