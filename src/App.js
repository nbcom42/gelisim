import React, { useState } from 'react';
import StudentSidebar from './components/StudentSidebar';
import EvaluationForm from './components/EvaluationForm';
import Toast from './components/Toast';
import { students, questions } from './data/mockData';

function App() {
  const [selectedStudent, setSelectedStudent] = useState(students[0]);
  const [evaluations, setEvaluations] = useState({});
  const [currentAnswers, setCurrentAnswers] = useState({});
  const [isSaving, setIsSaving] = useState(false);
  const [toast, setToast] = useState(null);

  const handleSelectStudent = (student) => {
    setSelectedStudent(student);
    // Load saved evaluation for this student
    const savedEvaluation = evaluations[student.id] || {};
    setCurrentAnswers(savedEvaluation);
  };

  const handleAnswerChange = (questionId, value) => {
    setCurrentAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Save evaluation
    setEvaluations(prev => ({
      ...prev,
      [selectedStudent.id]: {
        ...currentAnswers,
        savedAt: new Date().toISOString()
      }
    }));
    
    setIsSaving(false);
    setToast({
      message: `${selectedStudent.name} için değerlendirme başarıyla kaydedildi!`,
      type: 'success'
    });
  };

  const handleClear = () => {
    if (window.confirm('Tüm cevapları temizlemek istediğinizden emin misiniz?')) {
      setCurrentAnswers({});
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <StudentSidebar
        students={students}
        selectedStudent={selectedStudent}
        onSelectStudent={handleSelectStudent}
        evaluations={evaluations}
      />
      
      <EvaluationForm
        student={selectedStudent}
        questions={questions}
        answers={currentAnswers}
        onAnswerChange={handleAnswerChange}
        onSave={handleSave}
        onClear={handleClear}
        isSaving={isSaving}
      />
      
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}

export default App;
