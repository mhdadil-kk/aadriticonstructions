import React from 'react';
import GoogleReviewsWidget from 'google-reviews-widget';
import SectionHeader from '../UI/SectionHeader';

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-gray-800">
      <div className="container mx-auto px-5">
        <SectionHeader 
          title="What Our Clients Say" 
          description="Hear from our satisfied customers about their experience working with us"
        />

        <div className="mt-12">
          <GoogleReviewsWidget instanceId="g1UO4mKepE5JfGRotNVq" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
