import React from 'react';

interface UserProfile {
 
  name: string;
  dob: string;
  email: string;
  phone: string;
  Occupation: string;
  location: string;
  
}

const Profile: React.FC = () => {
  const [userProfile] = React.useState<UserProfile>(() => {
    const savedProfile = localStorage.getItem('userProfile');
    
    return savedProfile ? JSON.parse(savedProfile) : {
      name: 'John Doe',
      dob: '1990-01-01',
      email: 'john.doe@example.com',
      phone: '+1234567890',
      Occupation: 'Patient',
      location: 'New York, USA',
      
    };
  });

  return (
    <div className="profile-container max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Profile</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal Information Section */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Personal Information</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-500">Name</label>
              <p className="mt-1 text-lg font-medium text-gray-900">{userProfile.name}</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-500">Date of Birth</label>
              <p className="mt-1 text-lg text-gray-900">{userProfile.dob}</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-500"> Occupation</label>
              <p className="mt-1 text-gray-900">{userProfile. Occupation}</p>
            </div>
          </div>
        </div>
        
        {/* Contact Information Section */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Contact Information</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-500">Email</label>
              <p className="mt-1 text-lg text-gray-900">{userProfile.email}</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-500">Phone</label>
              <p className="mt-1 text-lg text-gray-900">{userProfile.phone}</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-500">Location</label>
              <p className="mt-1 text-gray-900">{userProfile.location}</p>
            </div>
          </div>
        </div>
        
        {/* Preferences Section */}
        
         </div>
      
      {/* Edit Button */}
      <div className="mt-6 flex justify-end">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          onClick={() => {
            alert('Edit functionality would go here');
          }}
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;