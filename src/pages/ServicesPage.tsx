import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { 
  HardHat, Home, Leaf, Ruler, DraftingCompass, 
  Hammer, Wrench, ClipboardCheck, ShieldCheck 
} from 'lucide-react';

const ServicesPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const serviceCategories = [
    {
      title: "Construction Services",
      services: [
        {
          icon: <Home className="w-8 h-8 text-red-600" />,
          title: "New Construction",
          description: "Design and build services for residential, commercial, and industrial projects.",
          details: [
            "Custom-built homes",
            "Office spaces",
            "Retail centers",
            "Timely project delivery"
          ]
        },
        {
          icon: <Hammer className="w-8 h-8 text-red-600" />,
          title: "Renovation & Remodeling",
          description: "Comprehensive renovations for residential and commercial properties.",
          details: [
            "Kitchen & bathroom remodels",
            "Basement finishing",
            "Full-home transformations",
            "Commercial space redesigns"
          ]
        }
      ]
    },
    {
      title: "Specialized Services",
      services: [
        {
          icon: <Wrench className="w-8 h-8 text-red-600" />,
          title: "Maintenance Services",
          description: "Complete maintenance solutions for buildings.",
          details: [
            "Preventive maintenance programs",
            "HVAC, electrical & plumbing",
            "Roofing & structural elements",
            "Regular inspections & upgrades"
          ]
        },
        {
          icon: <ShieldCheck className="w-8 h-8 text-red-600" />,
          title: "Structural Repairs",
          description: "Comprehensive structural repair services.",
          details: [
            "Foundation repairs",
            "Wall stabilization",
            "Structural reinforcements",
            "Safety compliance"
          ]
        }
      ]
    },
    {
      title: "Design & Sustainability",
      services: [
        {
          icon: <Leaf className="w-8 h-8 text-red-600" />,
          title: "Sustainable Construction",
          description: "Eco-friendly building practices.",
          details: [
            "Green building standards",
            "Energy-efficient designs",
            "Sustainable materials",
            "Environmental impact reduction"
          ]
        },
        {
          icon: <DraftingCompass className="w-8 h-8 text-red-600" />,
          title: "Design & Architecture",
          description: "Collaboration with architects.",
          details: [
            "Architectural planning",
            "Interior design integration",
            "Functionality alignment",
            "Regulatory compliance"
          ]
        }
      ]
    }
  ];

  const cardVariants = {
    offscreenLeft: { x: -100, opacity: 0 },
    offscreenRight: { x: 100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden" ref={containerRef}>
      {/* Animated background elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        className="fixed inset-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"></div>
      </motion.div>

      <motion.section
        initial="hidden"
        animate="show"
        className="pt-64 pb-12 px-5 relative"
      >
        {/* Header with animation */}
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sticky top-24 z-10 bg-gray-900/80 backdrop-blur-sm py-4"
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600"
          >
            OUR SERVICES
          </motion.h1>
        </motion.div>

        {/* Company Mission Enhancement */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-20 px-4"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600"
          >
            Shaping Communities, Driving Progress
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-300 leading-relaxed"
          >
            We are dedicated to shaping vibrant communities by developing both comfortable residential neighborhoods 
            and dynamic commercial hubs. Our commitment extends beyond private sector projects — we proudly contribute to public welfare 
            through vital government infrastructure initiatives, managing both their construction and ongoing maintenance. 
            This balanced approach reflects our mission to foster holistic growth, building spaces where people live, work, 
            and thrive while ensuring the essential infrastructure that supports society's progress.
          </motion.p>
        </motion.div>

        {/* Service categories with scroll-triggered animations */}
        {serviceCategories.map((category, index) => (
          <div key={index} className="mb-16">
            <motion.h2 
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-semibold mb-8 text-gray-200 border-b-2 border-red-600 pb-2 inline-block"
            >
              {category.title}
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {category.services.map((service, sIndex) => (
                <motion.div
                  key={sIndex}
                  initial={sIndex % 2 === 0 ? "offscreenLeft" : "offscreenRight"}
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 25px 50px -12px rgba(239, 68, 68, 0.25)"
                  }}
                  className="bg-gray-800 p-8 rounded-lg shadow-lg transition-all duration-300 border-l-4 border-red-500 relative overflow-hidden group"
                >
                  {/* Hover glow effect */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.1 }}
                    className="absolute inset-0 bg-red-500 rounded-lg pointer-events-none transition-opacity duration-300"
                  />
                  
                  <div className="flex items-start mb-6 relative z-10">
                    <motion.div
                      whileHover={{ 
                        rotate: [0, 15, -15, 0],
                        transition: { 
                          duration: 0.8,
                          type: "spring"
                        }
                      }}
                      className="mr-4"
                    >
                      {service.icon}
                    </motion.div>
                    <div>
                      <motion.h3 
                        whileHover={{ color: '#f87171' }}
                        className="text-xl font-bold mb-2 text-red-400 transition-colors duration-300"
                      >
                        {service.title}
                      </motion.h3>
                      <motion.p 
                        whileHover={{ x: 5 }}
                        className="text-gray-300 mb-4 transition-all duration-300"
                      >
                        {service.description}
                      </motion.p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-300">
                        {service.details.map((detail, dIndex) => (
                          <motion.li 
                            key={dIndex}
                            whileHover={{ x: 5, color: '#ef4444' }}
                            className="transition-all duration-300"
                          >
                            {detail}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* Floating decorative elements */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.3 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          viewport={{ once: true }}
          className="absolute left-10 top-1/4 w-32 h-32 rounded-full bg-red-500 blur-3xl -z-10"
        />
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.3 }}
          transition={{ delay: 0.7, duration: 1.5 }}
          viewport={{ once: true }}
          className="absolute right-10 bottom-1/4 w-40 h-40 rounded-full bg-red-600 blur-3xl -z-10"
        />
      </motion.section>
    </div>
  );
};

export default ServicesPage;
