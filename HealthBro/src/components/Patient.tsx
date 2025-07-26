import { useState } from "react";
import Profile from "./Profile";
import MedicalHistory from "./MedicalHistory";
import Prescription from "./Prescription";
import RiskPredictor from "./RiskPredictor";
import SymptomsChecker from "./SymptomsChecker";
import { 
  FaUser, 
  FaHistory, 
  FaChartLine, 
  FaStethoscope, 
  FaPills 
} from "react-icons/fa";

const Patient = () => {  
  const [activeTab, setActiveTab] = useState<string>('profile');

  const [patientData] = useState({
    name: 'John Doe',
    dob: '1990-01-01',
    email: 'john.doe@example.com',
    phone: '+1234567890',
    Occupation: 'Patient',
    location: 'New York, USA',
  });

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return <Profile 
                 patientData={patientData} 
                 onBack={() => console.log("Back button clicked")} 
               />;
      case 'history':
        return <MedicalHistory emergencies={[]} />;
      case 'risk':
        return <RiskPredictor/>;
      case 'symptoms':
        return <SymptomsChecker />;
      case 'prescription':
        return <Prescription prescriptions={[]} />;
      default:
        return <Profile 
                 patientData={patientData} 
                 onBack={() => console.log("Back button clicked")} 
               />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F1EDF4' }}>
      {/*  Header Section */}
      <div className="text-black p-4 shadow-md" style={{ backgroundColor: '#d099d9' }}>
        <h1 className="text-2xl font-bold text-center">Patient Dashboard</h1>
      </div>

      <div className="flex flex-1">
        {/* Sidebar Navigation */}
        <div className="w-48 bg-[#F1EDF4] p-2 shadow">
          <nav className="space-y-2">
            <button
              className={`w-full flex items-center p-2 text-sm rounded transition font-semibold ${activeTab === 'profile' ? 'font-bold' : 'hover:bg-[#b8a9c9]'}`}
              style={{ 
                backgroundColor: activeTab === 'profile' ? '#d099d9' : 'transparent',
                color: activeTab === 'profile' ? 'white' : 'black'
              }}
              onClick={() => setActiveTab('profile')}
            >
              <FaUser className="mr-2" />
              Profile
            </button>
            <button
              className={`w-full flex items-center p-2 text-sm rounded transition font-semibold ${activeTab === 'history' ? 'font-bold' : 'hover:bg-[#b8a9c9]'}`}
              style={{ 
                backgroundColor: activeTab === 'history' ? '#d099d9' : 'transparent',
                color: activeTab === 'history' ? 'white' : 'black'
              }}
              onClick={() => setActiveTab('history')}
            >
              <FaHistory className="mr-2" />
              Medical History
            </button>
            <button
              className={`w-full flex items-center p-2 text-sm rounded transition font-semibold ${activeTab === 'risk' ? 'font-bold' : 'hover:bg-[#b8a9c9]'}`}
              style={{ 
                backgroundColor: activeTab === 'risk' ? '#d099d9' : 'transparent',
                color: activeTab === 'risk' ? 'white' : 'black'
              }}
              onClick={() => setActiveTab('risk')}
            >
              <FaChartLine className="mr-2" />
              Risk Assessment
            </button>
            <button
              className={`w-full flex items-center p-2 text-sm rounded transition font-semibold ${activeTab === 'symptoms' ? 'font-bold' : 'hover:bg-[#b8a9c9]'}`}
              style={{ 
                backgroundColor: activeTab === 'symptoms' ? '#d099d9' : 'transparent',
                color: activeTab === 'symptoms' ? 'white' : 'black'
              }}
              onClick={() => setActiveTab('symptoms')}
            >
              <FaStethoscope className="mr-2" />
              Symptoms Checker
            </button>
            <button
              className={`w-full flex items-center p-2 text-sm rounded transition font-semibold ${activeTab === 'prescription' ? 'font-bold' : 'hover:bg-[#b8a9c9]'}`}
              style={{ 
                backgroundColor: activeTab === 'prescription' ? '#d099d9' : 'transparent',
                color: activeTab === 'prescription' ? 'white' : 'black'
              }}
              onClick={() => setActiveTab('prescription')}
            >
              <FaPills className="mr-2" />
              Prescriptions
            </button>
          </nav>
        </div>

        {/* Main Content Area*/}
        <div className="flex-1 bg-white p-6 overflow-auto">
          <div className="max-w-4xl mx-auto mt-4">
            {renderTabContent()}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-1 px-2 border-t text-xs text-center text-gray-600" style={{ backgroundColor: '#F1EDF4' }}>
        <span>Last updated: {new Date().toLocaleDateString()} | </span>
        <span style={{ color: '#d099d9' }}>Patient ID: P-{patientData.phone.slice(-4)}</span>
      </div>
    </div>
  );
};

export default Patient;
