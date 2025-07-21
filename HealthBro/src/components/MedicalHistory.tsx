import React from 'react';

interface Hospital {
  name: string;
  address: string;
  distance: string;
}

interface Location {
  address: string;
  coordinates?: [latitude: number, longitude: number];
}

interface MedicalEmergency {
  id: string; 
  diseaseProblem: string;
  medication: string;
  duration: string;
  attendedBy: string;
  attendedAt: string | Date;
  reports: string[];
  testResults: string[];
  location: Location;
  nearestHospital: Hospital;
}

interface MedicalHistoryProps {
  emergencies: MedicalEmergency[];
}

const MedicalHistory: React.FC<MedicalHistoryProps> = ({ emergencies }) => {
  const formatDate = (date: string | Date): string => {
    if (typeof date === 'string') {
      return new Date(date).toLocaleString();
    }
    return date.toLocaleString();
  };

  return (
    <div className="medical-history">
      <h2>Medical History</h2>
      
      {emergencies.length === 0 ? (
        <p className="no-records">No records found</p>
      ) : (
        emergencies.map((emergency) => (
          <div key={emergency.id} className="emergency-record">
            <h3>Emergency Record: {emergency.diseaseProblem}</h3>
            
            <div className="emergency-details">
              <div className="detail-item">
                <strong>Disease/Problem:</strong>
                <span>{emergency.diseaseProblem}</span>
              </div>
              
              <div className="detail-item">
                <strong>Medication:</strong>
                <span>{emergency.medication}</span>
              </div>
              
              <div className="detail-item">
                <strong>Duration:</strong>
                <span>{emergency.duration}</span>
              </div>
              
              <div className="detail-item">
                <strong>Attended by:</strong>
                <span>{emergency.attendedBy}</span>
              </div>
              
              <div className="detail-item">
                <strong>Attended at:</strong>
                <span>{formatDate(emergency.attendedAt)}</span>
              </div>
              
              <div className="reports-section">
                <strong>Reports:</strong>
                <ul>
                  {emergency.reports.map((report, i) => (
                    <li key={`${emergency.id}-report-${i}`}>{report}</li>
                  ))}
                </ul>
              </div>
              
              <div className="test-results">
                <strong>Test Results:</strong>
                <ul>
                  {emergency.testResults.map((result, i) => (
                    <li key={`${emergency.id}-result-${i}`}>{result}</li>
                  ))}
                </ul>
              </div>
              
              <div className="location">
                <strong>Location:</strong>
                <address>{emergency.location.address}</address>
              </div>
              
              <div className="nearest-hospital">
                <strong>Nearest Hospital:</strong>
                <div className="hospital-info">
                  <div>{emergency.nearestHospital.name}</div>
                  <address>{emergency.nearestHospital.address}</address>
                  <div>{emergency.nearestHospital.distance} away</div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};


 


export default MedicalHistory;




