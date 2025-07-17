import './Regs.css';
import { useState } from 'react'; 

export default function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: '',
    dob: ''
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.userType) newErrors.userType = 'Please select user type';
    if (!formData.dob) newErrors.dob = 'Date of birth is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setLoading(true);
      try {
        const response = await fetch('/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        if (!response.ok) throw new Error('Signup failed');
        alert('Signup successful!');
      } catch (error) {
        console.error('Signup error:', error);
        setErrors({ ...errors, form: error.message });
      } finally {
        setLoading(false);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      userType: '',
      dob: ''
    });
    setErrors({});
  };

  return (
    <>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label><br />
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <div className="error">{errors.name}</div>}
        <br />

        <label htmlFor="email">Email address</label><br />
        <input
          placeholder="abc@example.com"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <div className="error">{errors.email}</div>}
        <br />

        <label htmlFor="password">Password</label><br />
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {errors.password && <div className="error">{errors.password}</div>}
        <br />

        <label htmlFor="confirmPassword">Confirm password</label><br />
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
        <br />

        <label htmlFor="userType">Are you a:</label><br />
        <select
          id="userType"
          name="userType"
          value={formData.userType}
          onChange={handleChange}
        >
          <option value="">--Please choose an option--</option>
          <option value="doctor">Doctor</option>
          <option value="patient">Patient</option>
        </select>
        {errors.userType && <div className="error">{errors.userType}</div>}
        <br />

        <label htmlFor="dob">Date of Birth</label><br />
        <input
          type="date"
          id="dob"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />
        {errors.dob && <div className="error">{errors.dob}</div>}
        <br />

        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Sign Up"}
        </button>
        <p>Already have an account?<button type="button">Sign in</button></p>
      </form>
    </>
  );
}