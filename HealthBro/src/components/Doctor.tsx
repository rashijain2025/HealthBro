

const Doctor = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">Doctor Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-blue-100">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">Profile</h2>
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-700 text-2xl font-bold">DR</span>
            </div>
            <div>
              <p className="font-medium">Dr. Sarah Johnson</p>
              <p className="text-gray-600 text-sm">Cardiologist</p>
              <p className="text-gray-600 text-sm">MD, PhD</p>
            </div>
          </div>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Hospital:</span>
              <span className="font-medium">City Medical Center</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">License:</span>
              <span className="font-medium">#MED-458792</span>
            </div>
          </div>
          <button className="w-full bg-blue-100 text-blue-700 py-2 rounded-lg hover:bg-blue-200 transition-colors font-medium">
            Edit Profile
          </button>
        </div>

        {/* Patients */}
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-blue-100">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">Patients</h2>
          <div className="space-y-3 mb-4">
            <div className="flex justify-between items-center bg-blue-50 p-3 rounded-lg">
              <div>
                <p className="font-medium">John Smith</p>
                <p className="text-gray-600 text-sm">Last visit: 2 days ago</p>
              </div>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Active</span>
            </div>
            <div className="flex justify-between items-center bg-blue-50 p-3 rounded-lg">
              <div>
                <p className="font-medium">Maria Garcia</p>
                <p className="text-gray-600 text-sm">Last visit: 1 week ago</p>
              </div>
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Follow-up</span>
            </div>
            <div className="flex justify-between items-center bg-blue-50 p-3 rounded-lg">
              <div>
                <p className="font-medium">Robert Chen</p>
                <p className="text-gray-600 text-sm">Last visit: 3 weeks ago</p>
              </div>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">New</span>
            </div>
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            View All Patients
          </button>
        </div>

        {/* Prescription */}
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-blue-100">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">Prescription</h2>
          <div className="mb-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-medium text-gray-700">Recent Prescriptions</h3>
              <span className="text-blue-600 text-sm">5 today</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 bg-blue-50 rounded-lg">
                <span className="font-medium">Lisinopril</span>
                <span className="text-sm bg-blue-200 px-2 py-1 rounded">10mg</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-blue-50 rounded-lg">
                <span className="font-medium">Atorvastatin</span>
                <span className="text-sm bg-blue-200 px-2 py-1 rounded">20mg</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-blue-50 rounded-lg">
                <span className="font-medium">Metformin</span>
                <span className="text-sm bg-blue-200 px-2 py-1 rounded">500mg</span>
              </div>
            </div>
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6z" />
              <path fillRule="evenodd" d="M13 5a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            New Prescription
          </button>
        </div>

        {/* Voice-notes */}
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-blue-100">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">Voice-notes</h2>
          <div className="mb-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-medium text-gray-700">Recent Notes</h3>
              <span className="text-blue-600 text-sm">3 unread</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                <div className="bg-blue-200 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-medium">Patient follow-up</p>
                  <p className="text-gray-600 text-sm">2:45 min • Today</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                <div className="bg-blue-200 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-medium">Case review</p>
                  <p className="text-gray-600 text-sm">4:12 min • Yesterday</p>
                </div>
              </div>
            </div>
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
            </svg>
            Record New Note
          </button>
        </div>

        {/* Review text results */}
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-blue-100">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">Review Test Results</h2>
          <div className="mb-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-medium text-gray-700">Pending Review</h3>
              <span className="text-red-600 text-sm">4 urgent</span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <div>
                  <p className="font-medium">Blood Work</p>
                  <p className="text-gray-600 text-sm">Patient: John Smith</p>
                </div>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">Urgent</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <div>
                  <p className="font-medium">MRI Scan</p>
                  <p className="text-gray-600 text-sm">Patient: Maria Garcia</p>
                </div>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">New</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <div>
                  <p className="font-medium">ECG</p>
                  <p className="text-gray-600 text-sm">Patient: Robert Chen</p>
                </div>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Normal</span>
              </div>
            </div>
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clipRule="evenodd" />
            </svg>
            View All Results
          </button>
        </div>

        {/* Calendar/Appointments (Bonus) */}
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow border border-blue-100">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">Today's Appointments</h2>
          <div className="space-y-3 mb-4">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-800 p-2 rounded-lg text-center min-w-[50px]">
                <p className="font-bold">10:00</p>
                <p className="text-xs">AM</p>
              </div>
              <div className="flex-1">
                <p className="font-medium">Annual Checkup</p>
                <p className="text-gray-600 text-sm">Patient: Emily Wilson</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-800 p-2 rounded-lg text-center min-w-[50px]">
                <p className="font-bold">2:30</p>
                <p className="text-xs">PM</p>
              </div>
              <div className="flex-1">
                <p className="font-medium">Follow-up</p>
                <p className="text-gray-600 text-sm">Patient: Michael Brown</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 text-blue-800 p-2 rounded-lg text-center min-w-[50px]">
                <p className="font-bold">4:15</p>
                <p className="text-xs">PM</p>
              </div>
              <div className="flex-1">
                <p className="font-medium">New Patient</p>
                <p className="text-gray-600 text-sm">Patient: David Kim</p>
              </div>
            </div>
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            View Full Schedule
          </button>
        </div>
      </div>
    </div>
  );
};

export default Doctor;