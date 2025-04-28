import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      name: 'Ardit',
      location: 'Prishtina',
      avatar: 'https://via.placeholder.com/100',
      quote: 'Gjeta një BMW X5 për vikend – super thjeshtë!',
      rating: '★★★★☆',
    },
    {
      name: 'Blerina',
      location: 'Tiranë',
      avatar: 'https://via.placeholder.com/100',
      quote: 'Shumë e lehtë për të gjetur një shtëpi për pushime!',
      rating: '★★★★★',
    },
    {
      name: 'Erion',
      location: 'Durrës',
      avatar: 'https://via.placeholder.com/100',
      quote: 'Platforma më e mirë për të marrë me qira pajisje!',
      rating: '★★★★☆',
    },
    {
      name: 'Lea',
      location: 'Gjakova',
      avatar: 'https://via.placeholder.com/100',
      quote: 'E thjeshtë dhe e shpejtë për të gjetur atë që kërkoja!',
      rating: '★★★★★',
    },
  ];

  return (
    <section className="testimonials py-5">
      <div className="container text-center">
        <h2 className="mb-3">What Our Users Say</h2>
        <p className="text-muted mb-5">
          Real stories from real renters all across Kosova.
        </p>
        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className="card testimonial-card shadow-sm">
                <div className="card-body text-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="rounded-circle mb-3"
                  />
                  <h5 className="card-title">{testimonial.name} • {testimonial.location}</h5>
                  <p className="card-text fst-italic">"{testimonial.quote}"</p>
                  <p className="text-warning">{testimonial.rating}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
