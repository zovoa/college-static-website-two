import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';
import GlassSphere from '../3d/GlassSphere';
import GlassCube from '../3d/GlassCube';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10 opacity-50">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Suspense fallback={null}>
            <GlassSphere position={[-2, 0, -2]} scale={1.2} color="#88ccff" speed={0.5} />
            <GlassCube position={[2, 1, -1]} scale={0.8} color="#a0d7ff" speed={0.3} />
            <GlassSphere position={[3, -1, -3]} scale={1.5} color="#c4e0ff" speed={0.2} />
            <GlassCube position={[-3, -1.5, -2]} scale={0.6} color="#e1f1ff" speed={0.4} />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        </Canvas>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-secondary-800 mb-4">
            Modern <span className="text-primary-600">Academy</span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-secondary-600 max-w-2xl mx-auto mb-8"
          >
            Empowering minds through innovative education and cutting-edge learning experiences
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="#courses" className="btn-primary">
              Explore Courses
            </a>
            <a 
              href="#contact" 
              className="px-6 py-2 border border-primary-500 text-primary-600 hover:bg-primary-50 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              Contact Us
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-secondary-400 hover:text-primary-500 transition-colors">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;