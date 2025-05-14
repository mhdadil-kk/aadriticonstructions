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
            src: "https://media-hosting.imagekit.io/d88251b7a9ec447f/WhatsApp%20Image%202025-05-14%20at%2010.20.06_1091db45.jpg?Expires=1841808900&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=U1IrgqoBwitqVyyv92GocAm-WOyOKUx6xlKekmXiXciSHgdtdZf3udGxYvmAHeos~iQUW99-sixzNZXbos696YAKA~KEmuNj~hNYtpwcW6bLfowUXj-4CP6l2nH~~g4EI8hiP5TxbJufyK1Qi2VTskA0lZAoLYACoSYaLx0glgUPOMK8SM9F53fONiw4JL~P6LpVK9zig7PYjqQJMMBwgrJDW3IeQRrU6SmJDiFGxo9bfgpTXmY2CvbBa3BH4aGLQ8-eCsiv93aPqGooI2-9dCk2mAgzBehlxDgfm9ff2JoOb5Dztg6MfKtMcIsg6j134ooPWC~FD5va-G6r88V-2Q__",
            alt: "Felicitated for charitable donation"
        },
        {
            src: "https://media-hosting.imagekit.io/bc9f250173884e2c/WhatsApp%20Image%202025-05-14%20at%2010.23.30_57b0c688.jpg?Expires=1841808920&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=fg07xYBQc0OG6YMiLH0-KF8UvyQBNk7LEKFnM~dvCl4-lqizB~kQTFm0SZeCnyNdRRz7iSdxGujBfYg67HdeU5bacugzi3v5hrVcqyJtHO18096pyZzJQbdp8iB5bdDCJdzMpGeJsTsEHY49iL80EVBYnAyU1agK-mNkHfvxvwnPXFI4jV8biE2pjSrx4XF0mZEgk1~o90euoOR2Iekz83xWRiGaE5DVsNY4hjw1lp4mOEZ6lz1TkQQq2jA4jfjfY7k9pQwJ75YcBIG39FiBfm07w8YASPaP-~h4jmPa393XZu7lGntARGvbP6IclBye6kBDicvvr-KS~6q8xQZXiw__",
            alt: "Felicitated for charitable donation"
        },
        {
            src: "https://media-hosting.imagekit.io/855ed5845b7c4184/WhatsApp%20Image%202025-05-14%20at%2010.23.30_bbfb7707.jpg?Expires=1841808922&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=0fjLvti~Gg6cJzutL7bELSVWwgN8BBKOUxwXWWzyjlbwvCAGOaxgbI9eYqcSUPkMZdQO1ANWkSAVFtibmrwrn--dsTyXmJdj8Hn-GIdV0pyUWG7lKntrrvIcNok8r14bNMTPw-qXTRj17hOOhnSj-LCuEyYLaWV5Z0~pe14~0YIlk5yWq6Cbp~QOjwubScW4I14wFkReUsQVa5jeXG9b~ufuLLBGew3oFaXJ60JEsuSB91A7SNr0RT8LBF8Fyv8s9NeS2Rj~iX8b2lMDACsRoCzB8ks7a4OwDanuvUWYCgADYJ67AgII7SCUCMnu6gmWvWey2lXb-HqgYVAiM8nHyA__",
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
            src: "https://media-hosting.imagekit.io/d288fa8e9eb04ca6/IMG-20250514-WA0016[1].jpg?Expires=1841813009&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=1vUFCcreEVFMwFCo1GthPn-9etYKROwoidH0d1IXxO~2WV~unrgVWJoIL6uCjz9ANe3As-nH9ZPLfvK2blOOgiEhqhYGJ3IxmM6AwZt2y6uGJokdIimirJzRFZUXk93KNdoKq5DcIgd45MiCjZ515DOnpK~NnPdk1eFZ-6~J2yXdvV-ZftUxXsOELoYssyNuxl4kWpyy0PWwMw43U0MFtrOq1jCpoqQ~s48tLLv~Ljpn9RiLy7RR3hPus-8jXnAcecbYQRxNRG30JYzuYFmzfKsem0svI1UwXO8Ll2M4vojgbltaLAIooqTKDovPfOclvdwZ~T77uWpUUZKCWC8lPQ__",
            alt: "Director 1",
            name: "Anil Reddy Annula",
            position: "Managing Director & CEO"
        },
        {
            src: "https://media-hosting.imagekit.io/6e882376e5c64b8b/IMG-20250514-WA0018[1].jpg?Expires=1841813023&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=rJOXXV41zZ3AoUcmGmHuKEkG6zay219i3pNZH40muceKqKHGndqkzdSTXdLrh-94K4TSHbcn47lRjCxu~owJeKoNi59yzJyjsFsRAGgOA0Zuxb7q2ozoNAq4Gve1BDljO9Q5P4oe1Sx9kqTXNtWuzYuWOh86PEpT57pDMcHxBGif9mudMVpNd5AxRow020mREUTsoeDSiGwHoAGGjybtS8ZXgtJ0W3KkaJmmjxZLxnZ0hxCXzDNWcgO3WOd7kEAZfhoL0FRnNbQ04QViHxW0er77w-5kSUjQREAa0oIY-bd9NCd~hrvx0YuvqC9Llk1Ai4LNkZ6~g~FSc2Moo8XFCg__",
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