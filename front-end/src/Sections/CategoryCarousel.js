import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CategoryCarousel.css';

function CategoryCarousel() {
  const categories = [
    { name: 'Cars', icon: '🚗', description: 'Zoom around in style' },
    { name: 'Houses', icon: '🏠', description: 'Find your cozy corner' },
    { name: 'Bikes', icon: '🚴', description: 'Pedal your way to fun' },
    { name: 'Tech', icon: '💻', description: 'Gadgets that power up' },
    { name: 'More', icon: '✨', description: 'Discover hidden gems' },
  ];

  return (
    <section className="category-carousel py-5">
      <div className="container">
        <h2 className="text-center mb-4">Explore Categories</h2>
        <div id="categoryCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
              >
                <div className="row justify-content-center">
                  <div className="col-10 col-md-4 col-lg-3">
                    <div className="card category-card text-center shadow-sm">
                      <div className="card-body">
                        <div className="category-icon mb-3">{category.icon}</div>
                        <h5 className="card-title">{category.name}</h5>
                        <p className="card-text">{category.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#categoryCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#categoryCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default CategoryCarousel;
