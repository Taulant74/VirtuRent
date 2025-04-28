import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FeaturedListings.css';

function FeaturedListings() {
  const featuredListings = [
    {
      title: 'Audi A4 Quattro – Prishtina',
      description: 'Cruise in class. Perfect for business or a spontaneous weekend getaway.',
      image: 'https://source.unsplash.com/400x300/?car',
      category: '🚗',
      price: 'From €49/day',
      badge: '🔥 3 people booked this today!',
    },
    {
      title: 'Cozy Apartment – Gjakova',
      description: 'Your home away from home. Ideal for families or solo travelers.',
      image: 'https://source.unsplash.com/400x300/?apartment',
      category: '🏠',
      price: 'From €29/night',
      badge: '🔥 Popular choice!',
    },
    {
      title: 'Mountain Bike – Peja',
      description: 'Explore the trails. Perfect for adventure seekers.',
      image: 'https://source.unsplash.com/400x300/?bike',
      category: '🚴',
      price: 'From €15/day',
      badge: '',
    },
    {
      title: 'MacBook Pro – Prishtina',
      description: 'Power up your productivity. Ideal for work or study.',
      image: 'https://source.unsplash.com/400x300/?laptop',
      category: '💻',
      price: 'From €25/day',
      badge: '',
    },
    {
      title: 'Luxury Villa – Ulqin',
      description: 'Relax in style. Perfect for vacations or special occasions.',
      image: 'https://source.unsplash.com/400x300/?villa',
      category: '🏖️',
      price: 'From €199/night',
      badge: '🔥 Trending now!',
    },
    {
      title: 'Electric Scooter – Prishtina',
      description: 'Zip through the city. Eco-friendly and fun.',
      image: 'https://source.unsplash.com/400x300/?scooter',
      category: '🛴',
      price: 'From €10/hour',
      badge: '',
    },
  ];

  return (
    <section className="featured-listings py-5">
      <div className="container">
        <h2 className="text-center mb-3">Featured Rentals</h2>
        <p className="text-center text-muted mb-5">
          Handpicked gems, loved by renters across Kosova. Book your favorite before it’s gone!
        </p>
        <div className="row g-4">
          {featuredListings.map((listing, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className="card listing-card shadow-sm">
                <img src={listing.image} className="card-img-top" alt={listing.title} />
                <div className="card-body">
                  <div className="d-flex align-items-center mb-2">
                    <span className="category-icon me-2">{listing.category}</span>
                    <h5 className="card-title mb-0">{listing.title}</h5>
                  </div>
                  <p className="card-text">{listing.description}</p>
                  <p className="text-primary fw-bold">{listing.price}</p>
                  {listing.badge && (
                    <span className="badge bg-danger text-white animate-badge">
                      {listing.badge}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
          <button className="btn btn-primary btn-lg">Browse All Rentals</button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedListings;
