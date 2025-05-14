import React, { useState } from 'react';
import './FeedbackPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import HeroBanner from '../Sections/HeroBanner';
import CallToActionBanner from '../Sections/CallToActionBanner';
import Footer from '../Sections/Footer';

function FeedbackPage() {
  const [feedback, setFeedback] = useState('');
  const [reviews, setReviews] = useState([
    {
      name: 'John Doe',
      review: 'Great platform! Found exactly what I needed.',
    },
    {
      name: 'Jane Smith',
      review: 'Easy to use and very reliable.',
    },
    {
      name: 'Alice Johnson',
      review: 'Highly recommend this service to everyone.',
    },
  ]);

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim()) {
      setReviews([...reviews, { name: 'Anonymous', review: feedback }]);
      setFeedback('');
    }
  };

  return (
    <div>
      <HeroBanner />
      <div className="feedback-page container py-5">
        <h1 className="text-center mb-4">We Value Your Feedback</h1>
        <form onSubmit={handleFeedbackSubmit} className="mb-5">
          <div className="mb-3">
            <textarea
              className="form-control"
              rows="4"
              placeholder="Write your feedback here..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">Submit Feedback</button>
        </form>

        <h2 className="text-center mb-4">What Others Are Saying</h2>
        <Carousel>
          {reviews.map((review, index) => (
            <Carousel.Item key={index}>
              <div className="review-card text-center p-4">
                <p className="review-text">"{review.review}"</p>
                <p className="review-author">- {review.name}</p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <CallToActionBanner />
      <Footer />
    </div>
  );
}

export default FeedbackPage;
