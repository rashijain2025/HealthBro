import React, { useState } from 'react';

interface PatientData {
  id: string;
  age: number;
  vitals: {
    heartRate: number;
    bloodPressure: string;
    temperature: number;
    oxygenSaturation: number;
    respiratoryRate?: number;
  };
}

const RiskPredictor: React.FC = () => {
  const [patient, setPatient] = useState<PatientData>({
    id: '',
    age: 0,
    vitals: {
      heartRate: 0,
      bloodPressure: '120/80',
      temperature: 37,
      oxygenSaturation: 98,
      respiratoryRate: 16
    }
  });
  const [recommendation, setRecommendation] = useState<string>('');
  const [quickSolution, setQuickSolution] = useState<string>('');
  const [severity, setSeverity] = useState<'low'|'moderate'|'high'>('low');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === 'id' || name === 'age') {
      setPatient(prev => ({ ...prev, [name]: name === 'age' ? parseInt(value) || 0 : value }));
    } else {
      setPatient(prev => ({
        ...prev,
        vitals: {
          ...prev.vitals,
          [name]: name === 'temperature' || name === 'heartRate' || name === 'oxygenSaturation' || name === 'respiratoryRate'
            ? parseFloat(value) || 0 
            : value
        }
      }));
    }
  };

  const assessRisk = () => {
    const { vitals } = patient;
    const [systolic, diastolic] = vitals.bloodPressure.split('/').map(Number);

    // Risk assessment logic
    if (vitals.oxygenSaturation < 90) {
      setSeverity('high');
      setRecommendation('Immediate medical attention required - severe hypoxemia (SpO2 < 90%)');
      setQuickSolution('Administer supplemental oxygen at 2-6L/min via nasal cannula, monitor response');
    } else if (vitals.oxygenSaturation < 94) {
      setSeverity('moderate');
      setRecommendation('Close monitoring required - mild hypoxemia (SpO2 90-94%)');
      setQuickSolution('Consider supplemental oxygen, assess for respiratory distress');
    } else if (systolic > 180 || diastolic > 120) {
      setSeverity('high');
      setRecommendation('Hypertensive urgency - risk of end-organ damage');
      setQuickSolution('Administer antihypertensives per protocol, monitor for neurological symptoms');
    } else if (systolic > 160 || diastolic > 100) {
      setSeverity('moderate');
      setRecommendation('Stage 2 hypertension - requires evaluation');
      setQuickSolution('Recheck BP after 15 min rest, consider medication adjustment');
    } else if (vitals.heartRate > 120) {
      setSeverity('moderate');
      setRecommendation('Tachycardia - assess for underlying cause');
      setQuickSolution('Check for dehydration, infection, or arrhythmia. Consider ECG if persistent');
    } else if (vitals.heartRate < 50) {
      setSeverity('moderate');
      setRecommendation('Bradycardia - evaluate for cardiac causes');
      setQuickSolution('Assess perfusion, consider atropine if symptomatic');
    } else if (vitals.temperature > 38.5) {
      setSeverity('moderate');
      setRecommendation('Febrile - investigate source of infection');
      setQuickSolution('Administer antipyretics (acetaminophen/ibuprofen), obtain cultures if indicated');
    } else if (vitals.respiratoryRate && vitals.respiratoryRate > 24) {
      setSeverity('moderate');
      setRecommendation('Tachypnea - assess for respiratory distress');
      setQuickSolution('Evaluate for pulmonary embolism, pneumonia, or metabolic acidosis');
    } else {
      setSeverity('low');
      setRecommendation('Vitals within normal parameters - routine monitoring indicated');
      setQuickSolution('Continue standard monitoring protocol');
    }
  };

  const getSeverityColor = () => {
    switch(severity) {
      case 'high': return 'bg-red-100 border-red-500 text-red-800';
      case 'moderate': return 'bg-yellow-100 border-yellow-500 text-yellow-800';
      default: return 'bg-green-100 border-green-500 text-green-800';
    }
  };

  return (
    <div className="min-h-screen p-4 bg-gray-50">
      <div className="mx-auto rounded-xl shadow-lg overflow-hidden p-6 max-w-4xl bg-white">
        {/* Medical Header */}
        <div className="flex items-center mb-6">
          <div className="mr-4 p-2 rounded-full bg-blue-50">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Risk Predictor Assessment Tool</h1>
            <p className="text-sm text-gray-600">Enter patient vitals to evaluate clinical risk status</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Patient Information Column */}
          <div className="md:col-span-1 space-y-4">
            <div className="p-4 border border-gray-200 rounded-lg bg-white">
              <h3 className="font-medium text-gray-700 mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Patient Demographics
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Patient ID</label>
                  <input
                    type="text"
                    name="id"
                    value={patient.id}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="MRN-12345"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Age (years)</label>
                  <input
                    type="number"
                    name="age"
                    value={patient.age}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="45"
                  />
                </div>
              </div>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg bg-white">
              <h3 className="font-medium text-gray-700 mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Quick Reference
              </h3>
              <div className="text-xs text-gray-600 space-y-2">
                <p><span className="font-medium">Normal Ranges:</span></p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>BP: 120/80 mmHg</li>
                  <li>HR: 60-100 bpm</li>
                  <li>SpO2: ≥95%</li>
                  <li>Temp: 36.5-37.5°C</li>
                  <li>RR: 12-20/min</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Vitals Input Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="p-4 border border-gray-200 rounded-lg bg-white">
              <h3 className="font-medium text-gray-700 mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Vital Signs
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Heart Rate (bpm)</label>
                  <input
                    type="number"
                    name="heartRate"
                    value={patient.vitals.heartRate}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="72"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Blood Pressure (mmHg)</label>
                  <input
                    type="text"
                    name="bloodPressure"
                    value={patient.vitals.bloodPressure}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="120/80"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Temperature (°C)</label>
                  <input
                    type="number"
                    name="temperature"
                    value={patient.vitals.temperature}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="37.0"
                    step="0.1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">SpO2 (%)</label>
                  <input
                    type="number"
                    name="oxygenSaturation"
                    value={patient.vitals.oxygenSaturation}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="98"
                    min="0"
                    max="100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Respiratory Rate (/min)</label>
                  <input
                    type="number"
                    name="respiratoryRate"
                    value={patient.vitals.respiratoryRate}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-sm"
                    placeholder="16"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={assessRisk}
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Assess Clinical Risk
            </button>

            {recommendation && (
              <div className="space-y-4">
                <div className={`p-4 border rounded-lg ${getSeverityColor()}`}>
                  <h3 className="font-medium mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    Clinical Assessment
                  </h3>
                  <p className="text-sm">{recommendation}</p>
                </div>

                <div className="p-4 border border-blue-200 rounded-lg bg-blue-50">
                  <h3 className="font-medium text-blue-800 mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Immediate Actions
                  </h3>
                  <p className="text-sm text-blue-700">{quickSolution}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskPredictor;
