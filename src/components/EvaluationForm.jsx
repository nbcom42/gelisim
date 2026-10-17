import React from 'react';
import { ratingOptions } from '../data/mockData';

const EvaluationForm = ({ student, questions, answers, onAnswerChange, onSave, onClear, isSaving }) => {
  const allAnswered = questions.every(q => answers[q.id] !== null && answers[q.id] !== undefined);
  
  const calculateScore = () => {
    const values = Object.values(answers).filter(v => v !== null);
    if (values.length === 0) return 0;
    const sum = values.reduce((acc, val) => acc + val, 0);
    return Math.round((sum / (values.length * 4)) * 100);
  };

  const groupedQuestions = questions.reduce((acc, question) => {
    if (!acc[question.category]) {
      acc[question.category] = [];
    }
    acc[question.category].push(question);
    return acc;
  }, {});

  return (
    <div className="flex-1 overflow-y-auto bg-gray-50">
      <div className="max-w-5xl mx-auto p-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{student.name}</h1>
              <p className="text-gray-600 mt-1">Sınıf: {student.class} • Numara: {student.number}</p>
            </div>
            
            {Object.keys(answers).length > 0 && (
              <div className="text-right">
                <div className="text-3xl font-bold text-blue-600">{calculateScore()}%</div>
                <p className="text-sm text-gray-500">Genel Başarı</p>
              </div>
            )}
          </div>
        </div>

        {/* Form Title */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900">Gelişim Değerlendirme Formu</h2>
          <p className="text-gray-600 mt-1">Lütfen her soruyu değerlendirin ({questions.length} soru)</p>
        </div>

        {/* Questions by Category */}
        {Object.entries(groupedQuestions).map(([category, categoryQuestions]) => (
          <div key={category} className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-blue-500 rounded"></span>
              {category}
            </h3>
            
            <div className="space-y-3">
              {categoryQuestions.map((question) => (
                <div key={question.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 hover:shadow-md transition-shadow">
                  <div className="mb-4">
                    <label className="text-gray-900 font-medium block">
                      {question.id}. {question.text}
                    </label>
                  </div>
                  
                  <div className="flex gap-6">
                    {ratingOptions.map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center gap-2 cursor-pointer group"
                      >
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          value={option.value}
                          checked={answers[question.id] === option.value}
                          onChange={() => onAnswerChange(question.id, option.value)}
                          className={`custom-radio ${option.color}`}
                        />
                        <span className={`text-sm font-medium transition-colors ${
                          answers[question.id] === option.value
                            ? 'text-gray-900'
                            : 'text-gray-600 group-hover:text-gray-900'
                        }`}>
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Action Buttons */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6 rounded-xl shadow-lg mt-8">
          <div className="flex items-center justify-between max-w-5xl mx-auto">
            <div className="text-sm text-gray-600">
              {Object.keys(answers).filter(k => answers[k] !== null).length} / {questions.length} soru cevaplandı
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={onClear}
                disabled={isSaving}
                className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                Temizle
              </button>
              
              <button
                onClick={onSave}
                disabled={!allAnswered || isSaving}
                className="px-8 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium shadow-md hover:shadow-lg flex items-center gap-2"
              >
                {isSaving ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Kaydediliyor...
                  </>
                ) : (
                  'Kaydet'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvaluationForm;
