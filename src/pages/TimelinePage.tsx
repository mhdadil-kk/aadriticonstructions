import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { 
  Calendar, ClipboardCheck, Building, 
  TrendingUp, BarChart2, Award 
} from 'lucide-react';

const TimelinePage = () => {
  const timelineData = [
    {
      year: "2019",
      icon: <Calendar className="w-6 h-6 text-red-600" />,
      title: "Company Foundation",
      description: "Company incorporated, first residential project started."
    },
    {
      year: "2021",
      icon: <ClipboardCheck className="w-6 h-6 text-red-600" />,
      title: "First Major Success",
      description: "Completed first project with over 70% units sold despite Covid recession."
    },
    {
      year: "2022",
      icon: <Building className="w-6 h-6 text-red-600" />,
      title: "Service Expansion",
      description: "Added renovation and home interior projects to services."
    },
    {
      year: "2023",
      icon: <TrendingUp className="w-6 h-6 text-red-600" />,
      title: "Industry Recognition",
      description: "Recognized as industry pioneer, received foreign investments."
    },
    {
      year: "2024",
      icon: <BarChart2 className="w-6 h-6 text-red-600" />,
      title: "Government Contracts",
      description: "Started taking government tenders as Class V Contractor."
    },
    {
      year: "2025",
      icon: <Award className="w-6 h-6 text-red-600" />,
      title: "Rapid Growth",
      description: "Growing strong with 25+ project inventory for sale , promoted to class III contractor, more than 50000 sft in planning stage solely owned and developed by the company and few lakhs sft for maintenance , repairs and development as contractors."
    }
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Scroll-driven animations
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const headerScale = useTransform(scrollYProgress, [0, 0.1], [1.2, 1]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  // Glow effect for cards
  const CardGlow = ({ index }: { index: number }) => (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.3 }}
      transition={{ duration: 1, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="absolute inset-0 bg-red-500 rounded-xl blur-xl -z-10"
    />
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden" ref={containerRef}>
      {/* Animated background particles */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
        className="fixed inset-0 pointer-events-none overflow-hidden"
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              x: Math.random() * 200 - 100,
              y: Math.random() * 200 - 100,
              transition: {
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: 'reverse'
              }
            }}
            className="absolute rounded-full bg-red-500"
            style={{
              width: `${Math.random() * 5 + 2}px`,
              height: `${Math.random() * 5 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </motion.div>

      {/* Main content section */}
      <section className="pt-64 pb-12 px-5 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header with parallax effect */}
          <motion.div 
            style={{ scale: headerScale, opacity: headerOpacity }}
            className="text-center mb-16 mt-8 sticky top-24 z-10"
          >
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 100 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600"
            >
              OUR JOURNEY
            </motion.h1>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Milestones that shaped our growth and success
            </motion.p>
          </motion.div>

          <div className="relative">
            {/* Scroll-driven timeline line with pulse effect */}
            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-1/2 w-1 bg-gradient-to-b from-red-600 to-red-400 transform -translate-x-1/2 top-8"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(239, 68, 68, 0.7)',
                    '0 0 0 10px rgba(239, 68, 68, 0)',
                    '0 0 0 20px rgba(239, 68, 68, 0)'
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeOut'
                }}
                className="absolute bottom-0 left-0 w-full h-4 rounded-full"
              />
            </motion.div>

            {/* Timeline items with advanced animations */}
            <div className="space-y-8">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 100, opacity: 0, rotateX: 30 }}
                  whileInView={{ 
                    y: 0, 
                    opacity: 1,
                    rotateX: 0,
                    transition: { 
                      duration: 0.8,
                      delay: index * 0.15,
                      ease: [0.16, 1, 0.3, 1]
                    }
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ 
                    scale: 1.03,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center perspective-1000`}
                >
                  <div className="md:w-1/2 px-4 py-6 relative">
                    <CardGlow index={index} />
                    <motion.div
                      whileHover={{ boxShadow: "0 25px 50px -12px rgba(239, 68, 68, 0.25)" }}
                      className="bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 border-l-4 border-red-500 relative overflow-hidden"
                    >
                      {/* Floating particles inside card */}
                      <motion.div 
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 0.1 }}
                        className="absolute inset-0 pointer-events-none"
                      >
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{
                              x: Math.random() * 100 - 50,
                              y: Math.random() * 100 - 50,
                              transition: {
                                duration: Math.random() * 5 + 5,
                                repeat: Infinity,
                                repeatType: 'reverse'
                              }
                            }}
                            className="absolute rounded-full bg-red-400"
                            style={{
                              width: `${Math.random() * 4 + 2}px`,
                              height: `${Math.random() * 4 + 2}px`,
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                            }}
                          />
                        ))}
                      </motion.div>
                      
                      <div className="flex items-center mb-3">
                        <motion.div
                          whileInView={{
                            rotate: [0, 15, -15, 0],
                            scale: [1, 1.2, 1],
                            transition: { 
                              delay: 0.5 + index * 0.1,
                              duration: 1 
                            } 
                          }}
                          viewport={{ once: true }}
                          className="origin-center"
                        >
                          {item.icon}
                        </motion.div>
                        <motion.h3 
                          whileHover={{ color: '#f87171' }}
                          className="text-xl font-bold text-red-400 ml-3 transition-colors duration-300"
                        >
                          {item.title}
                        </motion.h3>
                      </div>
                      <div className="flex items-start">
                        <motion.div
                          whileHover={{ scale: 1.15, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-red-600 text-white font-bold px-3 py-1 rounded-full mr-4 cursor-pointer transition-all duration-300"
                        >
                          {item.year}
                        </motion.div>
                        <motion.p 
                          whileHover={{ x: 5 }}
                          className="text-gray-300 transition-all duration-300"
                        >
                          {item.description}
                        </motion.p>
                      </div>
                    </motion.div>
                  </div>
                  <div className="hidden md:block md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating decorative elements */}
        <motion.div
          initial={{ x: -100, opacity: 0, scale: 0.8 }}
          whileInView={{ x: 0, opacity: 0.3, scale: 1 }}
          transition={{ delay: 0.5, duration: 1.5, type: 'spring' }}
          viewport={{ once: true }}
          className="absolute left-10 top-1/4 w-32 h-32 rounded-full bg-red-500 blur-3xl -z-10"
        />
        <motion.div
          initial={{ x: 100, opacity: 0, scale: 0.8 }}
          whileInView={{ x: 0, opacity: 0.3, scale: 1 }}
          transition={{ delay: 0.7, duration: 1.5, type: 'spring' }}
          viewport={{ once: true }}
          className="absolute right-10 bottom-1/4 w-40 h-40 rounded-full bg-red-600 blur-3xl -z-10"
        />
      </section>
    </div>
  );
};

export default TimelinePage;