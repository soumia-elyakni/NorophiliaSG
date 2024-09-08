import React from 'react';

const Step2 = ({ formData, setFormData, errors, handleNext, handlePrev }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form className="step-form">
      <div className="form-group">
        <input type="email" name="email" placeholder="Mail" value={formData.email} onChange={handleChange} required />
        {errors.email && <span className="error">{errors.email}</span>}
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        {errors.password && <span className="error">{errors.password}</span>}
        <input type="password" name="confirmPassword" placeholder="Confirmation Password" value={formData.confirmPassword} onChange={handleChange} required />
        {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
      </div>
      <div className="form-footer">
        <button type="button" className="icon-button" onClick={handlePrev}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <button type="button" className="icon-button" onClick={handleNext}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </form>
  );
};

export default Step2;
