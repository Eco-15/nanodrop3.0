import { Testimonial } from '@/components/ui/testimonial';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Wellness Coach',
      company: 'Vitality Health',
      testimonial:
        "DROP has been a game-changer for my clients. The nano-technology ensures rapid absorption, and I've seen remarkable improvements in immune response within just weeks. Highly recommend!",
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    },
    {
      name: 'Dr. James Chen',
      role: 'Integrative Medicine',
      company: 'Holistic Care Center',
      testimonial:
        'As a physician, I am impressed by the scientific approach behind DROP. The bioavailability is superior to traditional supplements, and my patients report feeling the effects almost immediately.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Fitness Trainer',
      testimonial:
        "I've tried countless immune support supplements, but DROP is the only one that delivers consistent results. The one-dose-per-day format fits perfectly into my busy lifestyle.",
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    },
  ];

  return (
    <section className='py-20 bg-white'>
      <div className='container mx-auto px-4 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl font-bold text-forest mb-4'>
            What Our Customers Say
          </h2>
          <p className='text-lg text-forest/70 max-w-2xl mx-auto'>
            Join thousands of satisfied customers who have transformed their immune health with DROP.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              testimonial={testimonial.testimonial}
              rating={testimonial.rating}
              image={testimonial.image}
              className='border-sage/20 bg-cream/30 hover:shadow-xl'
            />
          ))}
        </div>
      </div>
    </section>
  );
}
