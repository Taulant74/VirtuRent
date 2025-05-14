import './App.css';
import Mainpage from './Pages/Mainpage';
import AdminDashboard from './Pages/AdminDashboard';
import ListingPage from './Pages/ListingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FeedbackPage from './Pages/FeedbackPage'; 
import ProductPage from './Pages/ProductPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListingPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
