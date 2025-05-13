import React from 'react';
import './ListingPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function ListingPage() {
  const listings = [
    {
      id: 1,
      title: 'Apple iPhone 14 Pro Max',
      price: '€1,299',
      image: 'https://source.unsplash.com/400x300/?iphone',
    },
    {
      id: 2,
      title: 'Sony WH-1000XM5 Headphones',
      price: '€399',
      image: 'https://source.unsplash.com/400x300/?headphones',
    },
    {
      id: 3,
      title: 'Samsung Galaxy S23 Ultra',
      price: '€1,199',
      image: 'https://source.unsplash.com/400x300/?samsung',
    },
    {
      id: 4,
      title: 'Dell XPS 15 Laptop',
      price: '€1,899',
      image: 'https://source.unsplash.com/400x300/?laptop',
    },
    {
      id: 5,
      title: 'GoPro HERO11 Black',
      price: '€499',
      image: 'https://source.unsplash.com/400x300/?camera',
    },
  ];

  return (
    <div className="listing-page">
      <div className="container">
        <h1 className="text-center mb-4">Listings</h1>
        <div id="listingCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {listings.map((listing, index) => (
              <div
                key={listing.id}
                className={`carousel-item ${index === 0 ? 'active' : ''}`}
              >
                <div className="card listing-card mx-auto">
                  <img src={listing.image} alt={listing.title} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{listing.title}</h5>
                    <p className="card-text text-primary fw-bold">{listing.price}</p>
                    <button className="btn btn-warning btn-sm w-100">Buy Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#listingCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#listingCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListingPage;
