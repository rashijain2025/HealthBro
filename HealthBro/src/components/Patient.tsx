import { useState } from "react";
import Profile from "./Profile";
import MedicalHistory from "./MedicalHistory";
import Prescription from "./Prescription";
import RiskPredictor from "./RiskPredictor";
import SymptomsChecker from "./SymptomsChecker";
import { 
  FaUser, 
  FaChartLine, 
  FaStethoscope, 
  FaPills,
  FaChevronRight,
  FaHospital,
  FaNotesMedical
} from "react-icons/fa";

const Patient = () => {  
  const [activeTab, setActiveTab] = useState<string>('profile');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

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
        return <Profile patientData={patientData} onBack={() => console.log("Back button clicked")} />;
      case 'history':
        return <MedicalHistory emergencies={[]} />;
      case 'risk':
        return <RiskPredictor/>;
      case 'symptoms':
        return <SymptomsChecker />;
      case 'prescription':
        return <Prescription prescriptions={[]} />;
      default:
        return <Profile patientData={patientData} onBack={() => console.log("Back button clicked")} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-blue-50">
      {/* Header Section */}
      <header className="bg-white border-b border-blue-100 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <div className="flex items-center space-x-3">
            <FaHospital className="text-blue-600 text-2xl" />
            <h1 className="text-2xl font-bold text-blue-800">HealthBro</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
              {patientData.name}
            </span>
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
              <FaUser className="text-sm" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar Navigation */}
        <div 
          className={`bg-white border-r border-blue-100 transition-all duration-300 ease-in-out ${sidebarCollapsed ? 'w-16' : 'w-56'}`}
        >
          <div className="p-3 flex justify-between items-center border-b border-blue-50">
            {!sidebarCollapsed && <span className="text-xs font-medium text-blue-400"></span>}
            <button 
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-1 rounded-md hover:bg-blue-50 text-blue-400"
            >
              <FaChevronRight className={`transition-transform ${sidebarCollapsed ? '' : 'rotate-180'}`} />
            </button>
          </div>
          <nav className="space-y-1 p-2">
            {[
              { id: 'profile', icon: <FaUser className="text-blue-500" />, label: 'Patient Profile' },
              { id: 'history', icon: <FaNotesMedical className="text-blue-500" />, label: 'Medical History' },
              { id: 'risk', icon: <FaChartLine className="text-blue-500" />, label: 'Health Assessment' },
              { id: 'symptoms', icon: <FaStethoscope className="text-blue-500" />, label: 'Symptom Tracker' },
              { id: 'prescription', icon: <FaPills className="text-blue-500" />, label: 'Medications' }
            ].map((item) => (
              <button
                key={item.id}
                className={`w-full flex items-center p-3 rounded-lg transition-all duration-200 ${
                  activeTab === item.id 
                    ? 'bg-blue-600 text-white shadow-sm' 
                    : 'text-gray-600 hover:bg-blue-50 hover:text-blue-700'
                }`}
                onClick={() => setActiveTab(item.id)}
              >
                <span className="text-lg">{item.icon}</span>
                {!sidebarCollapsed && (
                  <span className="ml-3 font-medium text-sm">{item.label}</span>
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content Area*/}
        <div className="flex-1 p-6 overflow-auto bg-blue-50">
          <div className={`max-w-5xl mx-auto ${sidebarCollapsed ? 'ml-2' : 'ml-4'}`}>
            <div className="bg-white rounded-lg shadow-sm border border-blue-100 p-6">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-3 px-4 border-t border-blue-100 bg-white text-xs text-center text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <span>© {new Date().getFullYear()} MedCare Health Systems</span>
          <div className="space-x-4 mt-2 md:mt-0">
            <span>Last updated: {new Date().toLocaleDateString()}</span>
            <span className="font-medium text-blue-600">
              Patient ID: P-{patientData.phone.slice(-4)}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Patient;
