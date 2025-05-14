import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductPage.css';

function ProductPage() {
  const products = [
    { id: 1, name: 'Product 1', image: 'https://via.placeholder.com/300', price: '$100' },
    { id: 2, name: 'Product 2', image: 'https://via.placeholder.com/300', price: '$200' },
    { id: 3, name: 'Product 3', image: 'https://via.placeholder.com/300', price: '$300' },
    { id: 4, name: 'Product 4', image: 'https://via.placeholder.com/300', price: '$400' },
  ];

  return (
    <div className="product-page container mt-5">
      <h1 className="text-center mb-4">Products</h1>
      <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <div className="d-flex flex-column align-items-center">
                <img
                  src={product.image}
                  className="d-block w-50"
                  alt={product.name}
                />
                <h3 className="mt-3">{product.name}</h3>
                <p className="text-muted">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default ProductPage;
