import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar } from 'lucide-react';

interface ClassInfo {
  id: string;
  title: string;
  instructor: string;
  time: string;
  location: string;
  department: string;
}

const Schedule = () => {
  const [activeDay, setActiveDay] = useState('monday');
  
  const days = [
    { id: 'monday', label: 'Monday' },
    { id: 'tuesday', label: 'Tuesday' },
    { id: 'wednesday', label: 'Wednesday' },
    { id: 'thursday', label: 'Thursday' },
    { id: 'friday', label: 'Friday' },
  ];

  const scheduleData: Record<string, ClassInfo[]> = {
    monday: [
      { id: 'm1', title: 'Introduction to Computer Science', instructor: 'Dr. Alan Turing', time: '9:00 AM - 10:30 AM', location: 'Hall A', department: 'Computer Science' },
      { id: 'm2', title: 'Modern Literature', instructor: 'Prof. Jane Austen', time: '11:00 AM - 12:30 PM', location: 'Room 101', department: 'Literature' },
      { id: 'm3', title: 'Calculus I', instructor: 'Dr. Isaac Newton', time: '1:30 PM - 3:00 PM', location: 'Math Lab', department: 'Mathematics' },
      { id: 'm4', title: 'Introduction to Psychology', instructor: 'Dr. Sigmund Freud', time: '3:30 PM - 5:00 PM', location: 'Room 202', department: 'Psychology' },
    ],
    tuesday: [
      { id: 't1', title: 'Principles of Economics', instructor: 'Dr. Adam Smith', time: '9:00 AM - 10:30 AM', location: 'Hall B', department: 'Economics' },
      { id: 't2', title: 'World History', instructor: 'Prof. Herodotus', time: '11:00 AM - 12:30 PM', location: 'Room 105', department: 'History' },
      { id: 't3', title: 'Organic Chemistry', instructor: 'Dr. Marie Curie', time: '1:30 PM - 3:00 PM', location: 'Chemistry Lab', department: 'Chemistry' },
      { id: 't4', title: 'Digital Art & Design', instructor: 'Prof. Leonardo da Vinci', time: '3:30 PM - 5:00 PM', location: 'Design Studio', department: 'Art & Design' },
    ],
    wednesday: [
      { id: 'w1', title: 'Data Structures & Algorithms', instructor: 'Dr. Alan Turing', time: '9:00 AM - 10:30 AM', location: 'Computer Lab', department: 'Computer Science' },
      { id: 'w2', title: 'Creative Writing', instructor: 'Prof. Jane Austen', time: '11:00 AM - 12:30 PM', location: 'Room 101', department: 'Literature' },
      { id: 'w3', title: 'Linear Algebra', instructor: 'Dr. Isaac Newton', time: '1:30 PM - 3:00 PM', location: 'Math Lab', department: 'Mathematics' },
      { id: 'w4', title: 'Cognitive Psychology', instructor: 'Dr. Sigmund Freud', time: '3:30 PM - 5:00 PM', location: 'Room 202', department: 'Psychology' },
    ],
    thursday: [
      { id: 'th1', title: 'Macroeconomics', instructor: 'Dr. Adam Smith', time: '9:00 AM - 10:30 AM', location: 'Hall B', department: 'Economics' },
      { id: 'th2', title: 'European History', instructor: 'Prof. Herodotus', time: '11:00 AM - 12:30 PM', location: 'Room 105', department: 'History' },
      { id: 'th3', title: 'Biochemistry', instructor: 'Dr. Marie Curie', time: '1:30 PM - 3:00 PM', location: 'Chemistry Lab', department: 'Chemistry' },
      { id: 'th4', title: '3D Modeling', instructor: 'Prof. Leonardo da Vinci', time: '3:30 PM - 5:00 PM', location: 'Design Studio', department: 'Art & Design' },
    ],
    friday: [
      { id: 'f1', title: 'Web Development', instructor: 'Dr. Tim Berners-Lee', time: '9:00 AM - 10:30 AM', location: 'Computer Lab', department: 'Computer Science' },
      { id: 'f2', title: 'Poetry Analysis', instructor: 'Prof. Emily Dickinson', time: '11:00 AM - 12:30 PM', location: 'Room 101', department: 'Literature' },
      { id: 'f3', title: 'Statistics', instructor: 'Dr. Carl Gauss', time: '1:30 PM - 3:00 PM', location: 'Math Lab', department: 'Mathematics' },
      { id: 'f4', title: 'Music Theory', instructor: 'Prof. Wolfgang Mozart', time: '3:30 PM - 5:00 PM', location: 'Music Hall', department: 'Performing Arts' },
    ],
  };

  return (
    <section id="schedule" className="section-padding bg-gradient-to-b from-white/50 to-blue-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl font-bold text-secondary-800 mb-4">Class Schedule</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-secondary-600">
            Browse our weekly class schedule to plan your academic journey.
          </p>
        </div>

        <div className="reveal">
          <div className="glass-panel p-6 overflow-hidden">
            <div className="flex flex-wrap items-center justify-center mb-8 gap-2">
              {days.map((day) => (
                <button
                  key={day.id}
                  onClick={() => setActiveDay(day.id)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeDay === day.id
                      ? 'bg-primary-500 text-white'
                      : 'bg-white/50 text-secondary-600 hover:bg-primary-100'
                  }`}
                >
                  {day.label}
                </button>
              ))}
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-secondary-100/60">
                    <th className="py-3 px-4 text-left text-secondary-700 font-semibold">Course</th>
                    <th className="py-3 px-4 text-left text-secondary-700 font-semibold">Instructor</th>
                    <th className="py-3 px-4 text-left text-secondary-700 font-semibold">
                      <div className="flex items-center">
                        <Clock size={16} className="mr-2" />
                        Time
                      </div>
                    </th>
                    <th className="py-3 px-4 text-left text-secondary-700 font-semibold">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        Location
                      </div>
                    </th>
                    <th className="py-3 px-4 text-left text-secondary-700 font-semibold">Department</th>
                  </tr>
                </thead>
                <tbody>
                  {scheduleData[activeDay].map((cls, index) => (
                    <motion.tr
                      key={cls.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={index % 2 === 0 ? 'bg-white/30' : 'bg-white/10'}
                    >
                      <td className="py-3 px-4 text-secondary-800 font-medium">{cls.title}</td>
                      <td className="py-3 px-4 text-secondary-600">{cls.instructor}</td>
                      <td className="py-3 px-4 text-secondary-600">{cls.time}</td>
                      <td className="py-3 px-4 text-secondary-600">{cls.location}</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-primary-100 text-primary-600 rounded-full text-xs">
                          {cls.department}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;