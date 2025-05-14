import React, { useState, useEffect } from 'react';
import AnimatedSection from '../components/UI/AnimatedSection';
import { HeartHandshake, Globe2, HelpingHand, Landmark, ChevronLeft, ChevronRight } from 'lucide-react';

const PhilanthropyPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // State for the image slider
    const [currentSlide, setCurrentSlide] = useState(0);

    // Felicitation images with real URLs
    const felicitationImages = [
        {
            src: "https://media-hosting.imagekit.io/d88251b7a9ec447f/WhatsApp%20Image%202025-05-14%20at%2010.20.06_1091db45.jpg?Expires=1841808900&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=U1IrgqoBwitqVyyv92GocAm-WOyOKUx6xlKekmXiXciSHgdtdZf3udGxYvmAHeos~iQUW99-sixzNZXbos696YAKA~KEmuNj~hNYtpwcW6bLfowUXj-4CP6l2nH~~g4EI8hiP5TxbJufyK1Qi2VTskA0lZAoLYACoSYaLx0glgUPOMK8SM9F53fONiw4JL~P6LpVK9zig7PYjqQJMMBwgrJDW3IeQRrU6SmJDiFGxo9bfgpTXmY2CvbBa3BH4aGLQ8-eCsiv93aPqGooI2-9dCk2mAgzBehlxDgfm9ff2JoOb5Dztg6MfKtMcIsg6j134ooPWC~FD5va-G6r88V-2Q__",
            alt: "felicitated for charitable donation for durga pooja",
            caption: "felicitated for charitable donation for durga pooja"
        },
        {
            src: "https://media-hosting.imagekit.io/bc9f250173884e2c/WhatsApp%20Image%202025-05-14%20at%2010.23.30_57b0c688.jpg?Expires=1841808920&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=fg07xYBQc0OG6YMiLH0-KF8UvyQBNk7LEKFnM~dvCl4-lqizB~kQTFm0SZeCnyNdRRz7iSdxGujBfYg67HdeU5bacugzi3v5hrVcqyJtHO18096pyZzJQbdp8iB5bdDCJdzMpGeJsTsEHY49iL80EVBYnAyU1agK-mNkHfvxvwnPXFI4jV8biE2pjSrx4XF0mZEgk1~o90euoOR2Iekz83xWRiGaE5DVsNY4hjw1lp4mOEZ6lz1TkQQq2jA4jfjfY7k9pQwJ75YcBIG39FiBfm07w8YASPaP-~h4jmPa393XZu7lGntARGvbP6IclBye6kBDicvvr-KS~6q8xQZXiw__",
            alt: "felicitated for charitable donation for durga pooja",
            caption: "felicitated for charitable donation for durga pooja"
        },
        {
            src: "https://media-hosting.imagekit.io/855ed5845b7c4184/WhatsApp%20Image%202025-05-14%20at%2010.23.30_bbfb7707.jpg?Expires=1841808922&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=0fjLvti~Gg6cJzutL7bELSVWwgN8BBKOUxwXWWzyjlbwvCAGOaxgbI9eYqcSUPkMZdQO1ANWkSAVFtibmrwrn--dsTyXmJdj8Hn-GIdV0pyUWG7lKntrrvIcNok8r14bNMTPw-qXTRj17hOOhnSj-LCuEyYLaWV5Z0~pe14~0YIlk5yWq6Cbp~QOjwubScW4I14wFkReUsQVa5jeXG9b~ufuLLBGew3oFaXJ60JEsuSB91A7SNr0RT8LBF8Fyv8s9NeS2Rj~iX8b2lMDACsRoCzB8ks7a4OwDanuvUWYCgADYJ67AgII7SCUCMnu6gmWvWey2lXb-HqgYVAiM8nHyA__",
            alt: "felicitated for charitable donation for durga pooja",
            caption: "felicitated for charitable donation for durga pooja"
        }
    ];

    // Navigate to next slide
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === felicitationImages.length - 1 ? 0 : prev + 1));
    };

    // Navigate to previous slide
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? felicitationImages.length - 1 : prev - 1));
    };

    // Auto-rotate slides
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // Director images
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
            icon: <HeartHandshake className="w-8 h-8 text-red-500" />,
            title: 'Community Outreach',
            description: 'We actively engage in local communities to provide support for education, sanitation, and women empowerment programs.'
        },
        {
            icon: <Globe2 className="w-8 h-8 text-red-500" />,
            title: 'Environmental Responsibility',
            description: 'Our green building practices reduce environmental impact and contribute to sustainable urban development.'
        },
        {
            icon: <HelpingHand className="w-8 h-8 text-red-500" />,
            title: 'Disaster Relief',
            description: 'In times of natural disasters, we provide immediate aid including materials, funds, and volunteer manpower.'
        },
        {
            icon: <Landmark className="w-8 h-8 text-red-500" />,
            title: 'Affordable Housing',
            description: 'We support government and private initiatives to create affordable housing options for underprivileged families.'
        },
    ];

    return (
        <div className="pt-[calc(32px+var(--header-height,180px))] bg-gray-900 overflow-x-hidden">
            {/* Hero Section */}
            <AnimatedSection animation="fade-in-section" className="relative py-16 bg-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6 animate-fadeInDown">
                        Building a Better Tomorrow
                    </h1>
                    <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto animate-fadeInUp">
                        At Aadriti Constructions, our commitment goes beyond building structures — we build stronger, empowered communities through focused philanthropic efforts.
                    </p>
                </div>
            </AnimatedSection>

            {/* Durga Pooja Felicitation Slider */}
            <section className="py-16 bg-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white text-center mb-6">
                        <span className="text-red-500">Durga Pooja</span> Charitable Contributions
                    </h2>
                    <p className="text-gray-400 text-center max-w-3xl mx-auto mb-12">
                        We are honored to be felicitated for our charitable donations towards Durga Pooja celebrations, supporting cultural traditions and community gatherings.
                    </p>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Image Slider */}
                        <div className="relative overflow-hidden rounded-lg shadow-xl h-96 md:h-112">
                            {felicitationImages.map((image, index) => (
                                <div
                                    key={index}
                                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                                        }`}
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-contain bg-gray-800"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4">
                                        <p className="text-white text-sm md:text-base">{image.caption}</p>
                                    </div>
                                </div>
                            ))}

                            {/* Navigation buttons */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Indicator dots */}
                        <div className="flex justify-center mt-4">
                            {felicitationImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`mx-1 w-3 h-3 rounded-full ${index === currentSlide ? 'bg-red-500' : 'bg-gray-600'
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-gray-400 max-w-3xl mx-auto">
                            We're proud to be recognized for our contributions to community's cultural celebrations. Our support helps preserve traditions and bring joy to many.
                        </p>
                    </div>
                </div>
            </section>

            {/* Initiatives Section */}
            <section className="py-16 bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white text-center mb-12">Our Philanthropic Initiatives</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {initiatives.map((item, index) => (
                            <AnimatedSection
                                key={index}
                                animation={index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}
                                className="bg-gray-800 p-6 sm:p-8 rounded-lg border border-gray-700 hover:border-red-500 transition-colors duration-300 hover:shadow-lg"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="p-3 bg-gray-700 rounded-full mr-4">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                                </div>
                                <p className="text-gray-400">{item.description}</p>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Directors Section - MOVED HERE after initiatives */}
            <section className="py-16 bg-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white text-center mb-12">Our <span className="text-red-500">Leadership</span></h2>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {directorImages.map((director, index) => (
                            <div key={index} className="text-center">
                                <div className="relative overflow-hidden rounded-lg mb-4 mx-auto max-w-sm">
                                    <img
                                        src={director.src}
                                        alt={director.alt}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-white">{director.name}</h3>
                                <p className="text-gray-400">{director.position}</p>
                            </div>
                        ))}
                    </div>

                    {/* From the Director's Desk */}
                    <div className="bg-gray-800 p-8 rounded-lg border border-gray-700 mb-12">
                        <h3 className="text-2xl font-bold text-white mb-4 text-center">From the Director's Desk</h3>
                        <div className="flex justify-center mb-4">
                            <div className="w-16 h-1 bg-red-500"></div>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            At Aadriti Constructions, we believe in building more than just structures; we're committed to building a better future for our communities. Our philanthropic endeavors are a testament to this belief. We actively support causes focused on underprivileged, child welfare and environmental sustainability initiatives. Through partnerships with local organizations and dedicated employee involvement, we strive to make a meaningful and lasting impact. We see this as an integral part of who we are and the legacy we aim to create.
                        </p>
                    </div>
                </div>
            </section>



        </div>
    );
};

export default PhilanthropyPage;