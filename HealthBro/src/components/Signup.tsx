import React, { useState } from 'react';

interface FormData {
  name: string;
  dob: string;
  email: string;
  Occupation: string;
  location: string;
  gender: string;
  Phone: string; 
}

const Signup: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    dob: '',
    email: '',
    Occupation: '',
    location: '',
    gender: '',
    Phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#F1EDF4]">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-[#d099d9] py-4 px-6">
          <div className="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-800 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            <h1 className="text-2xl font-bold text-gray-800">HealthBro</h1>
          </div>
          <p className="text-gray-600 text-center mt-1">Create your account</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b8a9c9] focus:border-transparent"
              placeholder="John Doe"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="dob">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b8a9c9] focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="Occupation">
                Role
              </label>
              <select
                id="Occupation"
                name="Occupation"
                value={formData.Occupation}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b8a9c9] focus:border-transparent"
                required
              >
                <option value="">Select Role</option>
                <option value="doctor">Doctor</option>
                <option value="patient">Patient</option>    
              </select>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="email">
              Email 
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b8a9c9] focus:border-transparent"
              placeholder="email@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="Phone">
              Phone
            </label>
            <input
              type="tel"
              id="Phone"
              name="Phone"
              value={formData.Phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b8a9c9] focus:border-transparent"
              placeholder="+1234567890"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="location">
              Location (City/State)
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b8a9c9] focus:border-transparent"
              placeholder="New York, NY"
            />
          </div>

           <div>
              <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="gender">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b8a9c9] focus:border-transparent"
                required
              >
                <option value="">Select your Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>  
                <option value="Other">Other</option>    
              </select>
            </div>



          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-[#d099d9] hover:bg-[#d099d9] text-gray-800 font-medium py-2 px-4 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-[#c9c9f0] focus:ring-offset-2"
            >
              Sign Up
            </button>
          </div>

          <div className="text-center text-sm text-gray-500 pt-2">
            Already have an account? 
            <a href="#" className="text-[#d099d9] hover:text-gray-800 pl-1">Sign in</a>
          </div>
        </form>
       
      </div>
    </div>
  );
};

export default Signup;
