import React, { useState } from 'react';
import axios from 'axios';
import './Dashboard.css';
import { useNavigate } from 'react-router';

export default function Dashboard() {
  const navigate = useNavigate();

  const [showForm, setShowForm] = useState(false);
  const [showAllTurfs, setShowAllTurfs] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

  const [turfs, setTurfs] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [formData, setFormData] = useState({
    Id: '',
    Name: '',
    Address: '',
    location: '',
    Price: '',
    image: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8787/turfs', formData);
      alert('Turf added successfully!');
      setFormData({ Id: '', Name: '', Address: '', location: '', Price: '', image: '' });
      setShowForm(false);
      fetchTurfs();
    } catch (error) {
      alert('Error adding turf.');
    }
  };

  const fetchTurfs = async () => {
    try {
      const response = await axios.get('http://localhost:8787/turfs');
      setTurfs(response.data);
      setShowAllTurfs(true);
      setShowForm(false);
      setShowFeedback(false);
      setShowBooking(false);
    } catch (error) {
      alert('Error fetching turfs.');
    }
  };

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get('http://localhost:8787/contacts');
      setFeedbacks(response.data);
      setShowFeedback(true);
      setShowAllTurfs(false);
      setShowForm(false);
      setShowBooking(false);
    } catch (error) {
      alert('Error fetching feedback.');
    }
  };

  const handleLogout = () => {
    navigate('/login');
  };

  const resetDashboard = () => {
    setShowForm(false);
    setShowAllTurfs(false);
    setShowFeedback(false);
    setShowBooking(false);
  };

  return (
    <div className="container-fluid">
      {/* Topbar */}
      <div className="row bg-dark text-white p-2">
        <div className="col">
          <h2 className="mb-0" style={{ cursor: 'pointer' }} onClick={resetDashboard}>TurfEase</h2>
        </div>
        <div className="col text-end">
          <button onClick={handleLogout} className="btn btn-outline-light btn-sm">
            Logout
          </button>
        </div>
      </div>

      <div className="row min-vh-100">
        {/* Sidebar */}
        <aside className="col-md-3 col-lg-2 bg-dark text-white p-4">
          <nav className="nav flex-column">
            <button
              className="nav-link text-white bg-transparent border-0 text-start"
              onClick={() => {
                setShowForm(true);
                setShowAllTurfs(false);
                setShowFeedback(false);
                setShowBooking(false);
              }}
            >
              Turf Details
            </button>
            <button
              className="nav-link text-white bg-transparent border-0 text-start"
              onClick={fetchFeedbacks}
            >
              Feedback History
            </button>
            <button
              className="nav-link text-white bg-transparent border-0 text-start"
              onClick={() => {
                setShowBooking(true);
                setShowAllTurfs(false);
                setShowForm(false);
                setShowFeedback(false);
              }}
            >
              Booking History
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="col-md-9 col-lg-10 p-4 bg-light">
          <h1 className="mb-4">Welcome Admin</h1>

          {/* Dashboard Cards */}
          {!showForm && !showAllTurfs && !showFeedback && !showBooking && (
            <div className="row g-4 mb-4">
              <div className="col-md-6 col-lg-4">
                <div className="card text-dark bg-warning h-100">
                  <div className="card-body">
                    <h5 className="card-title">Turf Details</h5>
                    <ul className="list-unstyled">
                      <li>
                        <button
                          onClick={() => {
                            setShowForm(true);
                            setShowAllTurfs(false);
                          }}
                          className="btn btn-link text-dark p-0 text-decoration-none"
                        >
                          ➕ Add Turf
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={fetchTurfs}
                          className="btn btn-link text-dark p-0 text-decoration-none"
                        >
                          📋 All Turfs
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card text-white bg-primary h-100">
                  <div className="card-body">
                    <h5 className="card-title">Feedback History</h5>
                    <p className="card-text">View user feedback and ratings.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card text-white bg-success h-100">
                  <div className="card-body">
                    <h5 className="card-title">Booking History</h5>
                    <p className="card-text">Check all booking records.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Add Turf Form */}
          {showForm && (
            <div className="card shadow p-4 bg-white mb-4">
              <h3 className="mb-4">Add New Turf</h3>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Turf ID</label>
                    <input
                      type="number"
                      className="form-control"
                      name="Id"
                      value={formData.Id}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Turf Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="Name"
                      value={formData.Name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      name="Address"
                      value={formData.Address}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Location</label>
                    <input
                      type="text"
                      className="form-control"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Price</label>
                    <input
                      type="number"
                      className="form-control"
                      name="Price"
                      value={formData.Price}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Image URL</label>
                    <input
                      type="text"
                      className="form-control"
                      name="image"
                      value={formData.image}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-success btn-sm w-100">
                      Submit Turf
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}

          {/* All Turfs Table */}
          {showAllTurfs && (
            <div className="card shadow p-4 bg-white">
              <h3 className="mb-4">All Turfs</h3>
              <table className="table table-bordered table-striped">
                <thead className="table-dark">
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Location</th>
                    <th>Price</th>
                    <th>Image</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {turfs.map((turf) => (
                    <tr key={turf.Id}>
                      <td>{turf.Id}</td>
                      <td>{turf.Name}</td>
                      <td>{turf.Address}</td>
                      <td>{turf.location}</td>
                      <td>{turf.Price}</td>
                      <td><img src={turf.image} alt="Turf" width="100" /></td>
                      <td>
                        <button className="btn btn-sm btn-primary me-2">Edit</button>
                        <button className="btn btn-sm btn-danger">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Feedback History */}
          {showFeedback && (
            <div className="card shadow p-4 bg-white">
              <h3 className="mb-4">User Feedback History</h3>
              <table className="table table-bordered">
                <thead className="table-primary">
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                  </tr>
                </thead>
                <tbody>
                  {feedbacks.map((fb) => (
                    <tr key={fb.id}>
                      <td>{fb.id}</td>
                      <td>{fb.name}</td>
                      <td>{fb.email}</td>
                      <td>{fb.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Booking History */}
          {showBooking && (
            <div className="card shadow p-4 bg-white">
              <h3 className="mb-4">Booking History</h3>
              <table className="table table-striped">
                <thead className="table-success">
                  <tr>
                    <th>Booking ID</th>
                    <th>User</th>
                    <th>Turf</th>
                    <th>Date</th>
                    <th>Slot</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td colSpan="5" className="text-center">No data available (to be implemented)</td></tr>
                </tbody>
              </table>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
