import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  PenTool, 
  BarChart, 
  Microscope, 
  Globe, 
  BookOpen, 
  Music, 
  Heart 
} from 'lucide-react';

interface CourseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ icon, title, description, color }) => {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      className="glass-panel p-6 h-full"
    >
      <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${color}`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-secondary-800">{title}</h3>
      <p className="text-secondary-600">{description}</p>
      <div className="mt-4">
        <a 
          href="#" 
          className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center transition-colors"
        >
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

const Courses = () => {
  const courses = [
    {
      icon: <Code size={28} className="text-white" />,
      title: "Computer Science",
      description: "Learn programming, algorithms, AI, and software development.",
      color: "bg-primary-500"
    },
    {
      icon: <PenTool size={28} className="text-white" />,
      title: "Graphic Design",
      description: "Master visual communication, digital art, and design principles.",
      color: "bg-accent-500"
    },
    {
      icon: <BarChart size={28} className="text-white" />,
      title: "Business Administration",
      description: "Study management, marketing, finance, and entrepreneurship.",
      color: "bg-secondary-500"
    },
    {
      icon: <Microscope size={28} className="text-white" />,
      title: "Life Sciences",
      description: "Explore biology, chemistry, and medical sciences.",
      color: "bg-green-500"
    },
    {
      icon: <Globe size={28} className="text-white" />,
      title: "International Relations",
      description: "Understand global politics, diplomacy, and world affairs.",
      color: "bg-blue-500"
    },
    {
      icon: <BookOpen size={28} className="text-white" />,
      title: "Literature & Languages",
      description: "Study classical and modern literature, linguistics, and writing.",
      color: "bg-yellow-500"
    },
    {
      icon: <Music size={28} className="text-white" />,
      title: "Music & Performing Arts",
      description: "Develop your talents in music, theater, dance, and performance.",
      color: "bg-purple-500"
    },
    {
      icon: <Heart size={28} className="text-white" />,
      title: "Health Sciences",
      description: "Learn about nutrition, physical therapy, and healthcare systems.",
      color: "bg-red-500"
    }
  ];

  return (
    <section id="courses" className="section-padding bg-gradient-to-b from-blue-50/50 to-white/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl font-bold text-secondary-800 mb-4">Our Departments</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-secondary-600">
            Explore our diverse range of programs designed to prepare you for success in your chosen field.
            Our expert faculty and cutting-edge curriculum ensure a quality educational experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div key={index} className="reveal">
              <CourseCard
                icon={course.icon}
                title={course.title}
                description={course.description}
                color={course.color}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <a 
            href="#" 
            className="btn-primary inline-block"
          >
            View All Programs
          </a>
        </div>
      </div>
    </section>
  );
};

export default Courses;