import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Users, Target } from 'lucide-react';

const AboutCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="glass-panel p-6 h-full">
    <div className="text-primary-500 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-secondary-800">{title}</h3>
    <p className="text-secondary-600">{description}</p>
  </div>
);

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl font-bold text-secondary-800 mb-4">About Modern Academy</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-secondary-600">
            Founded in 2005, Modern Academy has been at the forefront of educational innovation. 
            We combine traditional teaching methods with cutting-edge technology to provide 
            an unparalleled learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="reveal">
            <AboutCard 
              icon={<BookOpen size={40} />} 
              title="Quality Education" 
              description="Our curriculum is designed by experts to provide comprehensive and up-to-date knowledge in all subjects."
            />
          </div>

          <div className="reveal">
            <AboutCard 
              icon={<Award size={40} />} 
              title="Expert Faculty" 
              description="Learn from industry experts and experienced educators who are passionate about student success."
            />
          </div>

          <div className="reveal">
            <AboutCard 
              icon={<Users size={40} />} 
              title="Diverse Community" 
              description="Join a vibrant community of learners from different backgrounds, cultures, and perspectives."
            />
          </div>

          <div className="reveal">
            <AboutCard 
              icon={<Target size={40} />} 
              title="Career Focused" 
              description="Our programs are designed to prepare you for real-world challenges and opportunities."
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <h3 className="text-2xl font-bold text-secondary-800 mb-4">Our Mission</h3>
            <p className="text-secondary-600 mb-6">
              To provide accessible, innovative, and high-quality education that empowers students 
              to achieve their full potential and make meaningful contributions to society.
            </p>
            <h3 className="text-2xl font-bold text-secondary-800 mb-4">Our Vision</h3>
            <p className="text-secondary-600">
              To be a leading educational institution recognized for academic excellence, 
              innovative teaching methods, and producing graduates who are well-prepared for 
              the challenges of the 21st century.
            </p>
          </div>

          <div className="reveal">
            <div className="glass-panel p-6 overflow-hidden relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <img 
                  src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg" 
                  alt="Modern Academy Campus" 
                  className="rounded-lg w-full h-auto"
                />
              </motion.div>
              <div className="absolute top-6 right-6 bg-primary-500 text-white px-4 py-2 rounded-lg shadow-lg">
                <p className="font-semibold">Since 2005</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;