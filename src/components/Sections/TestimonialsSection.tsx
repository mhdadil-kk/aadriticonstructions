import React from 'react';
import Slider from 'react-slick';
import SectionHeader from '../UI/SectionHeader';

const testimonials = [
  {
    name: "Mahesh",
    title: "Exceptional Quality and Service",
    review: "My experience with Aadriti Constructions has been outstanding from start to finish. The quality of construction is top-notch, and the attention to detail in every aspect of the project is truly impressive. The team was professional, responsive, and went above and beyond to ensure my satisfaction. I highly recommend Mr.Reddy's team to anyone looking for a builder who delivers on their promises with excellence.",
    photo: "" // Placeholder for the image or URL
  },
  {
    name: "Samyukta",
    title: "They helped me realize my dream of owning a perfect home.",
    review: "I like their designs especially elevations. The entire process was smooth and transparent, and the team was always available to address any queries. I am incredibly happy with the quality of my new home and the overall experience with AADRITI CONSTRUCTIONS. Five stars all the way.",
    photo: "" // Placeholder for the image or URL
  },
  {
    name: "KLR Dunno",
    title: "Choosing these people was the best decision I took.",
    review: "They are a trustworthy and reliable builder whose priority is customer satisfaction. The project was completed on time, and the quality exceeded my expectations. Anytime I visit the site, I see progress, not like other builders who do so much delay and give one or the other reasons only.",
    photo: "" // Placeholder for the image or URL
  },
  {
    name: "Santosh",
    title: "From the initial consultation to the final handover.",
    review: "Their team was professional, courteous, and always willing to help. The quality of the finishing and the amenities provided are excellent. Thank you guys for building my beautiful home.",
    photo: "" // Placeholder for the image or URL
  },
  {
    name: "Aduth",
    title: "I have checked so many options.",
    review: "Finally purchased from this company because I have seen the way they built the apartment from day one. So much care was taken in construction, and quality material was used. When I see the condition of other buildings of the same age, I know I made the right decision.",
    photo: "" // Placeholder for the image or URL
  },
  {
    name: "Kiran Reddy",
    title: "Go-to place for quality home and apartment construction contracts.",
    review: "Very professional and value for money pricing.",
    photo: "" // Placeholder for the image or URL
  },
  {
    name: "Suresh",
    title: "Very good builders.",
    review: "They added shelves and other things I needed after purchase, and the finish was seamless, even though it was added later.",
    photo: "" // Placeholder for the image or URL
  },
];

// Function to generate initials from name
const getInitials = (name: string) => {
  const nameParts = name.split(" ");
  const firstInitial = nameParts[0].charAt(0).toUpperCase();
  const lastInitial = nameParts.length > 1 ? nameParts[1].charAt(0).toUpperCase() : "";
  return `${firstInitial}${lastInitial}`;
};

const TestimonialsSection: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section id="testimonials" className="py-24 bg-black text-white">
      <div className="container mx-auto px-5">
        <SectionHeader
          title="What Our Clients Say"
          description="Hear from our satisfied customers about their experience working with us"
        />

        <div className="mt-12 flex justify-center items-center">
          <Slider {...settings} className="w-full max-w-4xl">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card py-8 px-6 border border-gray-700 rounded-lg shadow-lg mx-auto">
                <div className="flex items-center mb-4">
                  {/* Profile Picture or Initials */}
                  <div className="w-16 h-16 rounded-full bg-gray-600 flex items-center justify-center text-white text-2xl font-bold">
                    {testimonial.photo ? (
                      <img
                        src={testimonial.photo}
                        alt={`${testimonial.name} profile`}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <span>{getInitials(testimonial.name)}</span>
                    )}
                  </div>

                  <div className="ml-4">
                    <h3 className="text-2xl font-bold">{testimonial.name}</h3>
                    <h4 className="text-lg italic">{testimonial.title}</h4>
                  </div>
                </div>
                <p className="text-lg">{testimonial.review}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
