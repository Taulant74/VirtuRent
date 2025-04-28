import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HowItWorks.css';

function HowItWorks() {
  const steps = [
    {
      icon: '🔍',
      title: 'Find Your Item',
      description: 'Browse thousands of listings across Kosova by category, location, and price.',
    },
    {
      icon: '💬',
      title: 'Chat & Book',
      description: 'Connect with verified sellers instantly, ask questions, and confirm your rental.',
    },
    {
      icon: '✅',
      title: 'Pick Up & Enjoy',
      description: 'Meet at your arranged time, grab your rental, and enjoy — no hassle.',
    },
  ];

  return (
    <section className="how-it-works py-5">
      <div className="container text-center">
        <h2 className="mb-3">How It Works</h2>
        <p className="text-muted mb-5">
          Renting has never been this easy. Just 3 simple steps.
        </p>
        <div className="row justify-content-center">
          {steps.map((step, index) => (
            <div key={index} className="col-12 col-md-4 mb-4">
              <div className="card step-card shadow-sm">
                <div className="card-body">
                  <div className="step-icon mb-3">{step.icon}</div>
                  <h5 className="card-title">{step.title}</h5>
                  <p className="card-text">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
