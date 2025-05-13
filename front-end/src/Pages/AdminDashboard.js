import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AdminDashboard.css';

function AdminDashboard() {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'users':
        return <p>Users Section Content</p>;
      case 'rentals':
        return <p>Rentals Section Content</p>;
      case 'reports':
        return <p>Reports Section Content</p>;
      default:
        return <p>Welcome to the Admin Dashboard</p>;
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-2 d-none d-md-block bg-dark sidebar">
            <div className="sidebar-sticky">
              <ul className="nav flex-column text-white">
                <li className="nav-item">
                  <button
                    className={`nav-link ${activeSection === 'dashboard' ? 'active' : ''}`}
                    onClick={() => setActiveSection('dashboard')}
                  >
                    Dashboard
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${activeSection === 'users' ? 'active' : ''}`}
                    onClick={() => setActiveSection('users')}
                  >
                    Users
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${activeSection === 'rentals' ? 'active' : ''}`}
                    onClick={() => setActiveSection('rentals')}
                  >
                    Rentals
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${activeSection === 'reports' ? 'active' : ''}`}
                    onClick={() => setActiveSection('reports')}
                  >
                    Reports
                  </button>
                </li>
              </ul>
            </div>
          </nav>
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Admin Dashboard</h1>
            </div>
            <div>{renderContent()}</div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
