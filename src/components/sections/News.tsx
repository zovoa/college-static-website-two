import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  summary: string;
  image: string;
  category: string;
}

const NewsCard: React.FC<{ news: NewsItem }> = ({ news }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass-panel h-full overflow-hidden"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={news.image} 
          alt={news.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-secondary-500">{news.date}</span>
          <span className="text-xs px-2 py-1 bg-primary-100 text-primary-600 rounded-full">{news.category}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-secondary-800">{news.title}</h3>
        <p className="text-secondary-600 mb-4">{news.summary}</p>
        <a 
          href="#" 
          className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center transition-colors"
        >
          Read More
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

const News = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "New Technology Lab Opening Ceremony",
      date: "May 15, 2025",
      summary: "Join us for the grand opening of our state-of-the-art technology lab featuring the latest equipment.",
      image: "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg",
      category: "Events"
    },
    {
      id: 2,
      title: "Student Research Wins National Award",
      date: "May 10, 2025",
      summary: "Our computer science students have won the national competition with their innovative AI project.",
      image: "https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg",
      category: "Achievements"
    },
    {
      id: 3,
      title: "Summer Arts Program Registration Open",
      date: "May 5, 2025",
      summary: "Register now for our summer arts program featuring workshops in painting, music, and theater.",
      image: "https://images.pexels.com/photos/7992458/pexels-photo-7992458.jpeg",
      category: "Programs"
    },
    {
      id: 4,
      title: "New Partnership with Tech Industry Leader",
      date: "April 28, 2025",
      summary: "We're excited to announce our new partnership providing internship opportunities for students.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
      category: "Partnerships"
    },
    {
      id: 5,
      title: "Annual Sports Tournament Next Month",
      date: "April 20, 2025",
      summary: "Get ready for our annual sports tournament featuring basketball, soccer, and swimming competitions.",
      image: "https://images.pexels.com/photos/8363135/pexels-photo-8363135.jpeg",
      category: "Sports"
    },
    {
      id: 6,
      title: "New Scholarship Program Announced",
      date: "April 15, 2025",
      summary: "Applications are now open for our new merit-based scholarship program for incoming students.",
      image: "https://images.pexels.com/photos/4778621/pexels-photo-4778621.jpeg",
      category: "Scholarships"
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getItemsPerPage = () => {
    if (windowWidth >= 1024) return 3;
    if (windowWidth >= 768) return 2;
    return 1;
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % (newsItems.length - getItemsPerPage() + 1)
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? newsItems.length - getItemsPerPage() : prevIndex - 1
    );
  };

  const itemsPerPage = getItemsPerPage();
  const visibleItems = newsItems.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section id="news" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl font-bold text-secondary-800 mb-4">Latest News</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-secondary-600">
            Stay updated with the latest events, achievements, and announcements from Modern Academy.
          </p>
        </div>

        <div className="relative reveal">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleItems.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>

          <button 
            onClick={prevSlide}
            className="absolute -left-4 md:-left-6 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors z-10"
            aria-label="Previous news"
          >
            <ChevronLeft size={24} className="text-secondary-700" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute -right-4 md:-right-6 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors z-10"
            aria-label="Next news"
          >
            <ChevronRight size={24} className="text-secondary-700" />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2 reveal">
          {Array.from({ length: newsItems.length - itemsPerPage + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentIndex === index ? 'bg-primary-500' : 'bg-secondary-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;