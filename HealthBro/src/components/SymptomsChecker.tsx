import React, { useState } from 'react';
import { FiPlus, FiX, FiAlertTriangle, FiInfo, FiClock, FiActivity } from 'react-icons/fi';

interface SymptomCheck {
  id: string;
  symptoms: string[];
  possibleConditions: string[];
  severityLevel: 'Low' | 'Medium' | 'High';
  clinicalRecommendation: string;
  date: string;
  time: string;
}

const SymptomsChecker: React.FC = () => {
  const [symptomChecks, setSymptomChecks] = useState<SymptomCheck[]>([
    {
      id: 'SC-001',
      symptoms: ['Headache', 'Fever (38.5°C+)', 'Fatigue'],
      possibleConditions: ['Influenza', 'Viral infection', 'COVID-19'],
      severityLevel: 'Medium',
      clinicalRecommendation: 'Recommend rest, hydration, and antipyretics. Monitor for respiratory symptoms. Consider PCR test if COVID suspected.',
      date: '2023-05-15',
      time: '14:30'
    },
    {
      id: 'SC-002',
      symptoms: ['Chest pain (non-radiating)', 'Dyspnea', 'Diaphoresis'],
      possibleConditions: ['Acute coronary syndrome', 'Pulmonary embolism', 'GERD'],
      severityLevel: 'High',
      clinicalRecommendation: 'EMERGENCY EVALUATION REQUIRED: Obtain ECG, troponin, CXR. Consider STEMI protocol if ECG changes present.',
      date: '2023-06-22',
      time: '09:15'
    }
  ]);

  const [newSymptom, setNewSymptom] = useState<string>('');
  const [currentSymptoms, setCurrentSymptoms] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);

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
    setIsAnalyzing(true);
    
    // Simulate analysis delay
    setTimeout(() => {
      const newCheck: SymptomCheck = {
        id: `SC-${Math.floor(1000 + Math.random() * 9000)}`,
        symptoms: [...currentSymptoms],
        possibleConditions: getPossibleConditions(currentSymptoms),
        severityLevel: determineSeverity(currentSymptoms),
        clinicalRecommendation: getClinicalRecommendation(currentSymptoms),
        date: new Date().toISOString().split('T')[0],
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setSymptomChecks([newCheck, ...symptomChecks]);
      setCurrentSymptoms([]);
      setIsAnalyzing(false);
    }, 1500);
  };

  const getPossibleConditions = (symptoms: string[]): string[] => {
    // Enhanced clinical decision logic
    const hasFever = symptoms.some(s => s.toLowerCase().includes('fever'));
    const hasRespiratory = symptoms.some(s => 
      ['cough', 'dyspnea', 'shortness of breath'].some(term => s.toLowerCase().includes(term))
    );
    const hasCardiac = symptoms.some(s => 
      ['chest pain', 'palpitations', 'diaphoresis'].some(term => s.toLowerCase().includes(term))
    );

    if (hasFever && hasRespiratory) {
      return ['Influenza', 'COVID-19', 'Community-acquired pneumonia'];
    }
    if (hasCardiac) {
      return ['Acute coronary syndrome', 'Pulmonary embolism', 'Cardiac arrhythmia'];
    }
    if (symptoms.includes('Headache') && symptoms.includes('Photophobia')) {
      return ['Migraine', 'Meningitis', 'Tension headache'];
    }
    return ['Further evaluation required'];
  };

  const determineSeverity = (symptoms: string[]): 'Low' | 'Medium' | 'High' => {
    const redFlags = [
      'chest pain', 'difficulty breathing', 'altered mental status', 
      'severe pain', 'uncontrolled bleeding'
    ];
    
    if (redFlags.some(flag => symptoms.some(s => s.toLowerCase().includes(flag)))) {
      return 'High';
    }
    if (symptoms.length >= 3 || symptoms.some(s => s.toLowerCase().includes('fever'))) {
      return 'Medium';
    }
    return 'Low';
  };

  const getClinicalRecommendation = (symptoms: string[]): string => {
    const severity = determineSeverity(symptoms);
    
    if (severity === 'High') {
      return 'URGENT: Immediate medical evaluation required. Consider emergency department referral.';
    }
    if (severity === 'Medium') {
      return 'Recommend clinical evaluation within 24 hours. Consider basic labs (CBC, CRP) and symptomatic treatment.';
    }
    return 'May monitor with supportive care. Follow up if symptoms persist >72 hours or worsen.';
  };

  const getSeverityIcon = (level: 'Low' | 'Medium' | 'High') => {
    switch(level) {
      case 'High': return <FiAlertTriangle className="text-red-500" />;
      case 'Medium': return <FiActivity className="text-yellow-500" />;
      default: return <FiInfo className="text-green-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          <div className="mr-4 p-3 rounded-lg bg-blue-50 text-blue-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Clinical Symptoms Analyzer</h1>
            <p className="text-gray-600">Comprehensive symptom assessment tool for healthcare providers</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Symptom Input */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <FiPlus className="mr-2 text-blue-500" />
                Patient Symptom Input
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Add Symptom</label>
                  <div className="flex rounded-md shadow-sm">
                    <input
                      type="text"
                      className="flex-1 min-w-0 block w-full px-3 py-2 rounded-l-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      placeholder="e.g., Fever >38°C, Dyspnea..."
                      value={newSymptom}
                      onChange={(e) => setNewSymptom(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && addSymptom()}
                    />
                    <button
                      onClick={addSymptom}
                      className="inline-flex items-center px-3 py-2 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    >
                      <FiPlus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {currentSymptoms.length > 0 && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Symptoms</label>
                    <div className="flex flex-wrap gap-2">
                      {currentSymptoms.map((symptom) => (
                        <span
                          key={symptom}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700"
                        >
                          {symptom}
                          <button
                            type="button"
                            className="ml-1.5 inline-flex text-blue-400 hover:text-blue-600 focus:outline-none"
                            onClick={() => removeSymptom(symptom)}
                          >
                            <FiX className="h-3 w-3" />
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <button
                  onClick={analyzeSymptoms}
                  disabled={currentSymptoms.length === 0 || isAnalyzing}
                  className={`w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    currentSymptoms.length === 0 
                      ? 'bg-gray-300 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'
                  }`}
                >
                  {isAnalyzing ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Analyzing...
                    </>
                  ) : (
                    'Analyze Symptoms'
                  )}
                </button>
              </div>
            </div>

            {/* Quick Reference */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <FiInfo className="mr-2 text-blue-500" />
                Clinical Quick Reference
              </h2>
              <div className="space-y-3">
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-1">Red Flag Symptoms</h3>
                  <ul className="text-xs text-gray-600 space-y-1 list-disc pl-5">
                    <li>Chest pain with diaphoresis</li>
                    <li>Sudden severe headache</li>
                    <li>Shortness of breath at rest</li>
                    <li>Altered mental status</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-1">Common Presentations</h3>
                  <ul className="text-xs text-gray-600 space-y-1 list-disc pl-5">
                    <li>Fever + cough → Consider respiratory infection</li>
                    <li>Abdominal pain + nausea → GI evaluation</li>
                    <li>Headache + photophobia → Neurological assessment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Results */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-lg font-semibold text-gray-800 flex items-center">
              <FiClock className="mr-2 text-blue-500" />
              Recent Clinical Assessments
            </h2>

            {symptomChecks.length === 0 ? (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center text-gray-500">
                No symptom assessments recorded yet
              </div>
            ) : (
              <div className="space-y-4">
                {symptomChecks.map((check) => (
                  <div key={check.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className={`px-4 py-2 ${
                      check.severityLevel === 'High' ? 'bg-red-50 border-b border-red-100' :
                      check.severityLevel === 'Medium' ? 'bg-yellow-50 border-b border-yellow-100' :
                      'bg-green-50 border-b border-green-100'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          {getSeverityIcon(check.severityLevel)}
                          <span className="ml-2 text-sm font-medium">
                            Case #{check.id} • {check.date} at {check.time}
                          </span>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          check.severityLevel === 'High' ? 'bg-red-100 text-red-800' :
                          check.severityLevel === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {check.severityLevel} Priority
                        </span>
                      </div>
                    </div>

                    <div className="p-4 md:p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div>
                          <h3 className="text-sm font-medium text-gray-500 mb-2">PRESENTING SYMPTOMS</h3>
                          <ul className="space-y-1">
                            {check.symptoms.map((symptom) => (
                              <li key={symptom} className="flex items-start">
                                <span className="flex-shrink-0 h-2 w-2 mt-2 mr-2 bg-blue-500 rounded-full"></span>
                                <span className="text-sm text-gray-800">{symptom}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-sm font-medium text-gray-500 mb-2">POSSIBLE CONDITIONS</h3>
                          <ul className="space-y-1">
                            {check.possibleConditions.map((condition) => (
                              <li key={condition} className="flex items-start">
                                <span className="flex-shrink-0 h-2 w-2 mt-2 mr-2 bg-purple-500 rounded-full"></span>
                                <span className="text-sm text-gray-800">{condition}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <h3 className="text-sm font-medium text-gray-500 mb-2">CLINICAL RECOMMENDATION</h3>
                        <div className={`p-3 rounded-lg ${
                          check.severityLevel === 'High' ? 'bg-red-50 text-red-800' :
                          check.severityLevel === 'Medium' ? 'bg-yellow-50 text-yellow-800' :
                          'bg-green-50 text-green-800'
                        }`}>
                          <p className="text-sm font-medium">{check.clinicalRecommendation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SymptomsChecker;
