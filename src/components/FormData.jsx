import  { useState } from 'react';
import "./FormData.css"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    surname: '',
    business: '',
    phoneNumber: '',
    email: '',
    isSupplier: false,
    isFarmer: false,
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (you can send data to a server, etc.)
    console.log('Form submitted:', formData);
  };

  return (
    <div className='container mb-5 mt-5 text-white'>4.
            <h1 className="font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-green-600 mb-5 ">Contact Us</h1>
      <form onSubmit={handleSubmit} className="form-border">

      <div className="row ml-5 py-5">
        <div className="col-md-6"> 
          <label className="form-label">
            Title:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="form-control"
            />
          </label>
        </div>

        <div className="col-md-6">
          <label className="form-label">
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
            />
          </label>
        </div>
      </div>

      <div className="row ml-5">
        <div className="col-md-6">
          <label className="form-label">
            Surname:
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              className="form-control"
            />
          </label>
        </div>

        <div className="col-md-6">
          <label className="form-label">
            Business:
            <input
              type="text"
              name="business"
              value={formData.business}
              onChange={handleChange}
              className="form-control"
            />
          </label>
        </div>
      </div>

      <div className="row ml-5 py-5">

        <div className="col-md-6">
          <label className="form-label">
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="form-control"
            />
          </label>
        </div>

        <div className="col-md-6">
          <label className="form-label">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
            />
          </label>
        </div>
      </div>

      <div className='row ml-5 py-5'>
        <div className='col-md-6'>
        <div className="form-check mt-3">
        <input
          type="checkbox"
          name="isSupplier"
          checked={formData.isSupplier}
          onChange={handleChange}
          className="form-check-input"
        />
        <label className="form-check-label">Are you a supplier?</label>
      </div>

      <div className="form-check mt-3">
        <input
          type="checkbox"
          name="isFarmer"
          checked={formData.isFarmer}
          onChange={handleChange}
          className="form-check-input"
        />
        <label className="form-check-label">Are you a farmer?</label>
      </div>

      <label className="form-label mt-3">
        Comments:
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          className="form-control"
        />
      </label>
        </div>
        <div className='col-md-6'>
        <button type="submit" className="btn btn-outline-light rounded-none mt-5">
        Submit
      </button>
        </div>
      </div>




    </form>

    </div>
    
  );
};

export default ContactForm;

