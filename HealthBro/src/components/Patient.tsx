
const Patient = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-blue-800 mb-8">Patient Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">Profile</h2>
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center">
              <span className="text-blue-600 text-2xl font-bold">JD</span>
            </div>
            <div>
              <p className="font-medium">John Doe</p>
              <p className="text-gray-500 text-sm">Age: 35</p>
              <p className="text-gray-500 text-sm">Blood Type: O+</p>
            </div>
          </div>
          <button className="w-full bg-blue-100 text-blue-700 py-2 rounded-md hover:bg-blue-200 transition-colors">
            View Full Profile
          </button>
        </div>

        {/* History Tracking */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">History Tracking</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Last Visit:</span>
              <span className="font-medium">15 Jan 2023</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Medication Adherence:</span>
              <span className="font-medium text-green-600">92%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tests Completed:</span>
              <span className="font-medium">5/6</span>
            </div>
          </div>
          <button className="w-full mt-4 bg-blue-100 text-blue-700 py-2 rounded-md hover:bg-blue-200 transition-colors">
            View History
          </button>
        </div>

        {/* Prescription */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">PRESCRIPTION</h2>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between items-center bg-blue-50 p-2 rounded">
              <span className="font-medium">Metformin</span>
              <span className="text-sm bg-blue-200 px-2 py-1 rounded">500mg</span>
            </div>
            <div className="flex justify-between items-center bg-blue-50 p-2 rounded">
              <span className="font-medium">Lisinopril</span>
              <span className="text-sm bg-blue-200 px-2 py-1 rounded">10mg</span>
            </div>
            <div className="flex justify-between items-center bg-blue-50 p-2 rounded">
              <span className="font-medium">Atorvastatin</span>
              <span className="text-sm bg-blue-200 px-2 py-1 rounded">20mg</span>
            </div>
          </div>
          <button className="w-full bg-blue-100 text-blue-700 py-2 rounded-md hover:bg-blue-200 transition-colors">
            View All Medications
          </button>
        </div>

        {/* Risk Predictor */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">Risk Predictor</h2>
          <div className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="text-gray-600">Diabetes Risk:</span>
              <span className="font-medium">Medium</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-yellow-500 h-2.5 rounded-full" style={{width: '60%'}}></div>
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="text-gray-600">Cardiac Risk:</span>
              <span className="font-medium">Low</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-green-500 h-2.5 rounded-full" style={{width: '30%'}}></div>
            </div>
          </div>
          <button className="w-full bg-blue-100 text-blue-700 py-2 rounded-md hover:bg-blue-200 transition-colors">
            Assess Risks
          </button>
        </div>

        {/* Emergency Alert */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">Emergency Alert</h2>
          <p className="text-gray-600 mb-4">In case of emergency, find the nearest hospital or alert your doctor.</p>
          <div className="space-y-3">
            <button className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Emergency Button
            </button>
            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Find Nearest Hospital
            </button>
          </div>
        </div>

        {/* Symptom Checker */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">SYMPTOM CHECKER</h2>
          <div className="mb-4">
            <input 
              type="text" 
              placeholder="Enter your symptoms..." 
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="grid grid-cols-2 gap-2 mb-4">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Fever</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Headache</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Cough</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Fatigue</span>
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
            Check Symptoms
          </button>
        </div>
      </div>
    </div>
  );
};

export default Patient;