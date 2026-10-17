import React from 'react';

const StudentSidebar = ({ students, selectedStudent, onSelectStudent, evaluations }) => {
  const getStudentProgress = (studentId) => {
    const evaluation = evaluations[studentId];
    if (!evaluation) return 0;
    
    const answered = Object.values(evaluation).filter(v => v !== null).length;
    return Math.round((answered / 26) * 100);
  };

  return (
    <div className="w-80 bg-white border-r border-gray-200 h-screen overflow-y-auto">
      <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-500 to-blue-600">
        <h2 className="text-xl font-bold text-white">Öğrenci Listesi</h2>
        <p className="text-blue-100 text-sm mt-1">{students.length} öğrenci</p>
      </div>
      
      <div className="p-3">
        {students.map((student) => {
          const progress = getStudentProgress(student.id);
          const isSelected = selectedStudent?.id === student.id;
          
          return (
            <button
              key={student.id}
              onClick={() => onSelectStudent(student)}
              className={`w-full text-left p-4 rounded-lg mb-2 transition-all duration-200 ${
                isSelected
                  ? 'bg-blue-50 border-2 border-blue-500 shadow-md'
                  : 'bg-white border border-gray-200 hover:border-blue-300 hover:shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${
                  isSelected ? 'bg-blue-500' : 'bg-gray-400'
                }`}>
                  {student.name.charAt(0)}
                </div>
                
                <div className="flex-1 min-w-0">
                  <p className={`font-semibold truncate ${isSelected ? 'text-blue-900' : 'text-gray-900'}`}>
                    {student.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {student.class} • No: {student.number}
                  </p>
                  
                  {progress > 0 && (
                    <div className="mt-2">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-green-500 transition-all duration-300"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                        <span className="text-xs font-medium text-gray-600">{progress}%</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default StudentSidebar;
