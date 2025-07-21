import React, { useState } from 'react';

interface SymptomCheck {
  id: string;
  symptoms: string[];
  possibleDiseases: string[];
  severityLevel: 'Low' | 'Medium' | 'High';
  doctorSuggestion: string;
  date: string;
}

const SymptomsChecker: React.FC = () => {
  const [symptomChecks, setSymptomChecks] = useState<SymptomCheck[]>([
    {
      id: 'SC-001',
      symptoms: ['Headache', 'Fever', 'Fatigue'],
      possibleDiseases: ['Common cold', 'Flu', 'COVID-19'],
      severityLevel: 'Medium',
      doctorSuggestion: 'Rest, hydrate, and monitor symptoms. Contact doctor if fever persists beyond 3 days.',
      date: '2023-05-15'
    },
    {
      id: 'SC-002',
      symptoms: ['Chest pain', 'Shortness of breath'],
      possibleDiseases: ['Angina', 'Heart attack', 'Anxiety'],
      severityLevel: 'High',
      doctorSuggestion: 'Seek emergency medical attention immediately.',
      date: '2023-06-22'
    }
  ]);

  const [newSymptom, setNewSymptom] = useState<string>('');
  const [currentSymptoms, setCurrentSymptoms] = useState<string[]>([]);

  const addSymptom = () => {
    if (newSymptom.trim() && !currentSymptoms.includes(newSymptom)) {
      setCurrentSymptoms([...currentSymptoms, newSymptom.trim()]);
      setNewSymptom('');
    }
  };

  const removeSymptom = (symptomToRemove: string) => {
    setCurrentSymptoms(currentSymptoms.filter(symptom => symptom !== symptomToRemove));
  };

  const analyzeSymptoms = () => {
    const newCheck: SymptomCheck = {
      id: `SC-${Math.floor(1000 + Math.random() * 9000)}`,
      symptoms: [...currentSymptoms],
      possibleDiseases: getPossibleDiseases(currentSymptoms),
      severityLevel: determineSeverity(currentSymptoms),
      doctorSuggestion: getSuggestion(currentSymptoms),
      date: new Date().toISOString().split('T')[0]
    };
    
    setSymptomChecks([newCheck, ...symptomChecks]);
    setCurrentSymptoms([]);
  };

  const getPossibleDiseases = (symptoms: string[]): string[] => {
    if (symptoms.includes('Fever') && symptoms.includes('Cough')) {
      return ['Common cold', 'Flu', 'COVID-19'];
    }
    if (symptoms.includes('Chest pain')) {
      return ['Angina', 'Heart attack', 'Anxiety'];
    }
    return ['Unknown condition - please consult doctor'];
  };

  const determineSeverity = (symptoms: string[]): 'Low' | 'Medium' | 'High' => {
    if (symptoms.includes('Chest pain') || symptoms.includes('Difficulty breathing')) {
      return 'High';
    }
    if (symptoms.length > 3) {
      return 'Medium';
    }
    return 'Low';
  };

  const getSuggestion = (symptoms: string[]): string => {
    if (determineSeverity(symptoms) === 'High') {
      return 'Seek emergency medical attention immediately.';
    }
    if (determineSeverity(symptoms) === 'Medium') {
      return 'Schedule an appointment with your doctor within 24-48 hours.';
    }
    return 'Monitor symptoms and consult doctor if they persist beyond 3 days.';
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Symptoms Checker</h1>
      
      {/* Symptom Input Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Check Your Symptoms</h2>
        
        <div className="flex flex-col space-y-4">
          <div>
            <label htmlFor="symptom-input" className="block text-sm font-medium text-gray-700 mb-1">
              Add Symptom
            </label>
            <div className="flex">
              <input
                type="text"
                id="symptom-input"
                className="flex-1 rounded-l-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="e.g. Headache, Fever..."
                value={newSymptom}
                onChange={(e) => setNewSymptom(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addSymptom()}
              />
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={addSymptom}
              >
                Add
              </button>
            </div>
          </div>
          
          {currentSymptoms.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Current Symptoms</h3>
              <div className="flex flex-wrap gap-2">
                {currentSymptoms.map((symptom) => (
                  <span
                    key={symptom}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                  >
                    {symptom}
                    <button
                      type="button"
                      className="ml-1.5 inline-flex items-center justify-center w-4 h-4 rounded-full text-blue-400 hover:bg-blue-200 hover:text-blue-500 focus:outline-none"
                      onClick={() => removeSymptom(symptom)}
                    >
                      
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}
          
          <button
            type="button"
            className="inline-flex justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50"
            disabled={currentSymptoms.length === 0}
            onClick={analyzeSymptoms}
          >
            Analyze Symptoms
          </button>
        </div>
      </div>
      
      {/* Previous Checks Section */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-700">Previous Symptom Checks</h2>
        
        {symptomChecks.length === 0 ? (
          <p className="text-gray-500">No symptom checks recorded yet.</p>
        ) : (
          symptomChecks.map((check) => (
            <div key={check.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Check #{check.id}</h3>
                    <p className="text-sm text-gray-500">{check.date}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    check.severityLevel === 'High' ? 'bg-red-100 text-red-800' :
                    check.severityLevel === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {check.severityLevel} severity
                  </span>
                </div>
                
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Symptoms</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {check.symptoms.map((symptom) => (
                        <li key={symptom} className="text-gray-900">{symptom}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Possible Conditions</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {check.possibleDiseases.map((disease) => (
                        <li key={disease} className="text-gray-900">{disease}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Doctor's Suggestion</h4>
                  <div className="bg-blue-50 p-4 rounded-md">
                    <p className="text-blue-800">{check.doctorSuggestion}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SymptomsChecker;