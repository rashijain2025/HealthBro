import React from 'react';
import { 
  FiUser, FiMail, FiPhone, FiMapPin, FiEdit2, 
  FiCalendar, FiDroplet, FiHeart, FiShield 
} from 'react-icons/fi';
import { FaUserMd, FaNotesMedical } from 'react-icons/fa';

interface UserProfile {
  name: string;
  dob: string;
  email: string;
  phone: string;
  Occupation: string; 
  location: string;
  bloodType?: string;
  primaryCarePhysician?: string;
  allergies?: string;
  lastVisit?: string;
  nextAppointment?: string;
}

interface ProfileProps {
  patientData?: UserProfile;
  onEdit?: () => void;
}

const Profile: React.FC<ProfileProps> = ({ onEdit }) => {
  const [userProfile] = React.useState<UserProfile>(() => {
    const savedProfile = localStorage.getItem('userProfile');
    
    return savedProfile ? JSON.parse(savedProfile) : {
      name: 'Sarah Johnson',
      dob: 'April 22, 1992',
      email: 'sarah.johnson@example.com',
      phone: '+1 (555) 987-6543',
      Occupation: ' Patient', 
      location: 'Chicago, IL',
      bloodType: 'O+',
      primaryCarePhysician: 'Dr. Robert Chen',
      allergies: 'Penicillin, Peanuts',
      lastVisit: 'June 15, 2023',
      nextAppointment: 'September 8, 2023'
    };
  });

  const InfoCard: React.FC<{ 
    title: string; 
    icon: React.ReactNode;
    accentColor?: 'blue' | 'teal' | 'indigo' | 'purple' | 'amber';
    children: React.ReactNode;
    className?: string;
  }> = ({ title, icon, accentColor = 'blue', children, className = '' }) => {
    const colors = {
      blue: { 
        bg: 'bg-blue-50/80', 
        border: 'border-blue-200', 
        text: 'text-blue-700',
        iconBg: 'bg-blue-100'
      },
      teal: { 
        bg: 'bg-teal-50/80', 
        border: 'border-teal-200', 
        text: 'text-teal-700',
        iconBg: 'bg-teal-100'
      },
      indigo: { 
        bg: 'bg-indigo-50/80', 
        border: 'border-indigo-200', 
        text: 'text-indigo-700',
        iconBg: 'bg-indigo-100'
      },
      purple: { 
        bg: 'bg-purple-50/80', 
        border: 'border-purple-200', 
        text: 'text-purple-700',
        iconBg: 'bg-purple-100'
      },
      amber: { 
        bg: 'bg-amber-50/80', 
        border: 'border-amber-200', 
        text: 'text-amber-700',
        iconBg: 'bg-amber-100'
      }
    };

    return (
      <div className={`bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100/70 transition-all duration-200 hover:shadow-md ${className}`}>
        <div className={`px-5 py-4 ${colors[accentColor].bg} border-b ${colors[accentColor].border}`}>
          <h2 className={`text-lg font-semibold ${colors[accentColor].text} flex items-center`}>
            <span className={`p-2 mr-3 rounded-lg ${colors[accentColor].iconBg} ${colors[accentColor].text}`}>
              {icon}
            </span>
            {title}
          </h2>
        </div>
        <div className="p-5 space-y-4">
          {children}
        </div>
      </div>
    );
  };

  const InfoField: React.FC<{ 
    label: string; 
    value: string; 
    icon?: React.ReactNode;
    important?: boolean;
    className?: string;
  }> = ({ label, value, icon, important = false, className = '' }) => (
    <div className={`flex ${className}`}>
      {icon && (
        <div className={`flex-shrink-0 mr-3 mt-0.5 ${important ? 'text-rose-500' : 'text-gray-400'}`}>
          {icon}
        </div>
      )}
      <div className="flex-1 min-w-0">
        <h3 className={`text-xs font-medium tracking-wider ${important ? 'text-rose-600' : 'text-gray-500'} uppercase`}>
          {label}
        </h3>
        <p className={`mt-1 text-sm ${important ? 'font-medium text-gray-900' : 'text-gray-700'} truncate`}>
          {value}
        </p>
      </div>
    </div>
  );

  const MedicalBadge: React.FC<{ 
    label: string; 
    value: string; 
    icon: React.ReactNode;
    color?: 'red' | 'green' | 'blue' | 'amber';
  }> = ({ label, value, icon, color = 'blue' }) => {
    const colors = {
      red: 'bg-rose-50 text-rose-700 border-rose-200',
      green: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      blue: 'bg-blue-50 text-blue-700 border-blue-200',
      amber: 'bg-amber-50 text-amber-700 border-amber-200'
    };
    
    return (
      <div className={`flex items-center p-3 rounded-lg border ${colors[color]}`}>
        <div className="p-2 mr-3 rounded-full bg-white">
          {icon}
        </div>
        <div>
          <h4 className="text-xs font-medium uppercase tracking-wider opacity-80">{label}</h4>
          <p className="text-sm font-medium">{value}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-xl bg-white shadow-xs border border-gray-100 mr-4">
                <FiUser className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-light text-gray-900">
                  {userProfile.name}
                </h1>
                <p className="text-gray-600 text-sm">
                  Member since {new Date().getFullYear() - 5}
                </p>
              </div>
            </div>
          </div>
          
          <button
            onClick={onEdit}
            className="inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-lg shadow-xs text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
          >
            <FiEdit2 className="mr-2 h-4 w-4" />
            Edit Profile
          </button>
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          <MedicalBadge 
            label="Blood Type" 
            value={userProfile.bloodType || 'Unknown'} 
            icon={<FiDroplet className="w-5 h-5 text-rose-500" />}
            color="red"
          />
          <MedicalBadge 
            label="Last Visit" 
            value={userProfile.lastVisit || 'No records'} 
            icon={<FaNotesMedical className="w-5 h-5 text-blue-500" />}
            color="blue"
          />
          <MedicalBadge 
            label="Next Appointment" 
            value={userProfile.nextAppointment || 'Not scheduled'} 
            icon={<FiCalendar className="w-5 h-5 text-emerald-500" />}
            color="green"
          />
          <MedicalBadge 
            label="Allergies" 
            value={userProfile.allergies ? 'Present' : 'None'} 
            icon={<FiShield className="w-5 h-5 text-amber-500" />}
            color="amber"
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Personal Information */}
          <InfoCard 
            title="Personal Details" 
            icon={<FiUser className="w-5 h-5" />}
            accentColor="blue"
          >
            <InfoField 
              label="Full Name" 
              value={userProfile.name} 
              icon={<FiUser className="w-4 h-4" />} 
            />
            <InfoField 
              label="Date of Birth" 
              value={userProfile.dob} 
              icon={<FiCalendar className="w-4 h-4" />} 
            />
            <InfoField 
              label="Patient Type" 
              value={userProfile.Occupation} 
            />
            <InfoField 
              label="Location" 
              value={userProfile.location} 
              icon={<FiMapPin className="w-4 h-4" />} 
            />
          </InfoCard>

          {/* Medical Information */}
          <InfoCard 
            title="Medical Information" 
            icon={<FiHeart className="w-5 h-5" />}
            accentColor="teal"
          >
            <InfoField 
              label="Blood Type" 
              value={userProfile.bloodType || 'Not specified'} 
              icon={<FiDroplet className="w-4 h-4" />} 
              important
            />
            <InfoField 
              label="Primary Physician" 
              value={userProfile.primaryCarePhysician || 'Not specified'} 
              icon={<FaUserMd className="w-4 h-4" />} 
            />
            <InfoField 
              label="Allergies" 
              value={userProfile.allergies || 'None reported'} 
              important={!!userProfile.allergies}
              className="mb-4"
            />
          </InfoCard>

          {/* Contact & Appointments */}
          <div className="space-y-6">
            <InfoCard 
              title="Contact Information" 
              icon={<FiMail className="w-5 h-5" />}
              accentColor="indigo"
            >
              <InfoField 
                label="Email Address" 
                value={userProfile.email} 
                icon={<FiMail className="w-4 h-4" />} 
              />
              <InfoField 
                label="Phone Number" 
                value={userProfile.phone} 
                icon={<FiPhone className="w-4 h-4" />} 
              />
            </InfoCard>

            <InfoCard 
              title="Appointment History" 
              icon={<FiCalendar className="w-5 h-5" />}
              accentColor="purple"
            >
              <InfoField 
                label="Last Visit" 
                value={userProfile.lastVisit || 'No records'} 
              />
              <InfoField 
                label="Next Appointment" 
                value={userProfile.nextAppointment || 'Not scheduled'} 
              />
            </InfoCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
