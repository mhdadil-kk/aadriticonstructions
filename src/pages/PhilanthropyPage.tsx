import React, { useState, useEffect } from 'react';
import AnimatedSection from '../components/UI/AnimatedSection';
import { HeartHandshake, Globe2, HelpingHand, Landmark, ChevronLeft, ChevronRight, Mail, Phone, BookOpen, Droplet, Heart, Users, Briefcase, Leaf } from 'lucide-react';

const PhilanthropyPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [currentSlide, setCurrentSlide] = useState(0);

    const felicitationImages = [
        {
            src: "https://ik.imagekit.io/ln0l6bblz/WhatsApp%20Image%202025-05-14%20at%2010.20.06_4479c997.jpg?updatedAt=1747472752408",
            alt: "Felicitated for charitable donation"
        },
        {
            src: "https://ik.imagekit.io/ln0l6bblz/WhatsApp%20Image%202025-05-14%20at%2010.23.30_b3c5b192.jpg?updatedAt=1747472752102",
            alt: "Felicitated for charitable donation"
        },
        {
            src: "https://ik.imagekit.io/ln0l6bblz/WhatsApp%20Image%202025-05-14%20at%2010.23.30_a26d7062.jpg?updatedAt=1747472752140",
            alt: "Felicitated for charitable donation"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === felicitationImages.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? felicitationImages.length - 1 : prev - 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const directorImages = [
        {
            src: "https://ik.imagekit.io/ln0l6bblz/WhatsApp%20Image%202025-05-14%20at%2009.57.32_b7dc06d7.jpg?updatedAt=1747471337422",
            alt: "Director 1",
            name: "Anil Reddy Annula",
            position: "Managing Director & CEO"
        },
        {
            src: "https://ik.imagekit.io/ln0l6bblz/WhatsApp%20Image%202025-05-14%20at%2009.57.33_cb3bdc7d.jpg?updatedAt=1747471337452",
            alt: "Director 2",
            name: "Ajitha Reddy Annula",
            position: "Director & CTO"
        }
    ];

    const initiatives = [
  { 
    icon: BookOpen, 
    text: "Supported salaries of all employees throughout the pandemic for an entire year." 
  },
  { 
    icon: Droplet, 
    text: "Sponsored charitable causes, with donations given to the PM Relief Fund to assist in national recovery efforts." 
  },
  { 
    icon: Heart, 
    text: "Food served during Ganesh Chaturthi celebrations, fostering community togetherness." 
  },
  { 
    icon: Users, 
    text: "Charitable donations made during Durga Pooja, contributing to the community’s cultural and spiritual activities." 
  },
  { 
    icon: Briefcase, 
    text: "Food served for 1,300+ people at the TTD temple, ensuring no one goes hungry during significant religious events." 
  },
  { 
    icon: Leaf, 
    text: "Monthly grocery food supplies and toys sponsored for orphanages, supporting vulnerable children." 
  },
  { 
    icon: HelpingHand, 
    text: "Many more community development initiatives, tailored to local needs and aspirations."
  }
];

    return (
        <>
            <style>
                {`
          html, body {
            overflow-x: hidden;
            overflow-y: auto;
            width: 100%;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          *, *:before, *:after {
            box-sizing: inherit;
          }
          img {
            max-width: 100%;
            height: auto;
          }
          .container, .container > *, [class*="max-w-"] {
            max-width: 100%;
            width: 100%;
            overflow: hidden;
          }
        `}
            </style>
            <div className="pt-[calc(32px+var(--header-height,180px))] bg-gray-900 font-sans w-full min-h-screen">
                {/* Hero Section */}
                <AnimatedSection className="relative bg-gray-900 py-24 w-full">
                    <div className="absolute inset-0  w-full"></div>
                    <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-full w-full">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 drop-shadow-lg">
                            Building Communities, Transforming Lives
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-7">
                            At Aadriti Constructions, our commitment to philanthropy drives meaningful change through education, health, and sustainability initiatives.
                        </p>
                    </div>
                </AnimatedSection>

                {/* From the Director's Desk */}
                <AnimatedSection className="py-16 bg-gradient-to-b from-gray-900 to-gray-800 w-full">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full w-full">
                        <div className="bg-gray-800 p-8 md:p-12 rounded-xl border border-gray-700 shadow-lg max-w-4xl mx-auto">
                            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6 text-center drop-shadow-sm">
                                From the Director's Desk
                            </h3>
                            <div className="flex justify-center mb-8">
                                <div className="w-24 h-1 bg-red-500 rounded"></div>
                            </div>
                            <p className="text-gray-300 leading-7 text-lg md:text-xl text-center">
                                At Aadriti Constructions, we believe in building more than just structures; we're committed to building a better future for our communities. Our philanthropic endeavors are a testament to this belief. We actively support causes focused on underprivileged , child welfare and environmental sustainability initiatives.  Through partnerships with local organizations and dedicated employee involvement, we strive to make a meaningful and lasting impact. We see this as an integral part of who we are and the legacy we aim to create.
                            </p>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="bg-gray-900 text-white py-16 px-4 md:px-8 lg:px-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership</h2>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            The driving force behind our philanthropic vision.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-7xl w-full">
                            {directorImages.map((image, index) => (
                                <div key={index} className="flex flex-col items-center text-center">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-80 h-80 object-cover rounded-full mb-4" 
                                    />
                                    <h3 className="text-xl font-semibold text-white">{image.name}</h3>
                                    <p className="text-gray-300">{image.position}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>







                {/* Image Slideshow */}
                <AnimatedSection className="py-16 bg-gray-900 w-full">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full w-full">
                        <div className="relative max-w-5xl mx-auto w-full">
                            <div className="relative rounded-xl shadow-2xl h-80 md:h-112 w-full">
                                {felicitationImages.map((image, index) => (
                                    <div
                                        key={index}
                                        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                                        style={{ transform: `translateY(${index === currentSlide ? 0 : 10}px)` }}
                                    >
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-full object-contain bg-gray-800 rounded-xl"
                                        />
                                    </div>
                                ))}
                                <button
                                    onClick={prevSlide}
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 hover:bg-opacity-80 text-white p-3 rounded-full transition-colors duration-300"
                                    aria-label="Previous slide"
                                >
                                    <ChevronLeft className="w-8 h-8" />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 hover:bg-opacity-80 text-white p-3 rounded-full transition-colors duration-300"
                                    aria-label="Next slide"
                                >
                                    <ChevronRight className="w-8 h-8" />
                                </button>
                            </div>
                            <div className="flex justify-center mt-6 space-x-2">
                                {felicitationImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentSlide ? 'bg-red-500' : 'bg-gray-500 hover:bg-gray-400'}`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Initiatives */}
                <AnimatedSection className="py-16 bg-gray-800 w-full">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full w-full">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white text-center mb-12">
                            Our <span className="text-red-500">Initiatives</span>
                        </h2>
                        <div className="max-w-4xl mx-auto bg-gray-900 p-8 md:p-12 rounded-xl shadow-lg border border-gray-700 w-full">
                            <ul className="space-y-6 text-gray-300 text-lg md:text-xl">
                                {initiatives.map((initiative, index) => (
                                    <li key={index} className="flex items-start transition-transform duration-300 hover:scale-105">
                                        <initiative.icon className="w-6 h-6 text-red-500 mr-4 mt-1 flex-shrink-0" />
                                        <span className="leading-7">{initiative.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Contact to Contribute */}
                <AnimatedSection className="py-16 bg-gradient-to-t from-gray-900 to-gray-800 w-full">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full w-full">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white text-center mb-12">
                            Join Us in <span className="text-red-500">Making a Difference</span>
                        </h2>
                        <div className="max-w-3xl mx-auto bg-gray-800 p-8 md:p-12 rounded-xl border border-gray-700 shadow-lg w-full">
                            <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-6">
                                <div className="flex items-center">
                                    <Mail className="w-6 h-6 text-red-500 mr-3" />
                                    <span className="text-gray-300 text-lg md:text-xl">aadriticonstructions@gmail.com</span>
                                </div>
                                <div className="flex items-center">
                                    <Phone className="w-6 h-6 text-red-500 mr-3" />
                                    <span className="text-gray-300 text-lg md:text-xl">+91 9908222749</span>
                                </div>
                            </div>
                            <p className="text-gray-300 text-center text-lg md:text-xl mb-8 leading-7">
                                Join our mission to create lasting change. Whether through partnerships, donations, or volunteering, your support can transform lives. Reach out today to explore how we can collaborate.
                            </p>
                            <div className="flex justify-center gap-4">
                                <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-3 px-10 rounded-lg transition duration-300 shadow-md hover:shadow-lg">
                                    Contact Us to Contribute
                                </button>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </>
    );
};

export default PhilanthropyPage;