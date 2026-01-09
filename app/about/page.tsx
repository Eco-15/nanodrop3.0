import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Globe, Award, Leaf, Beaker } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className='min-h-screen pt-20 md:pt-24 pb-16 bg-white'>
        {/* Founder's Vision */}
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4 lg:px-8'>
            <div className='max-w-4xl mx-auto'>
              <div className='bg-cream rounded-2xl p-8 md:p-12 mb-12'>
                <h2 className='text-4xl font-bold text-forest mb-6'>
                  The Vision Behind DROP
                </h2>
                <p className='text-lg text-forest/80 leading-relaxed mb-4'>
                  DROP was born from a simple question: Why do we accept that supplements
                  lose most of their potency before reaching our cells?
                </p>
                <p className='text-lg text-forest/80 leading-relaxed mb-4'>
                  Our founder, after years of research in nutritional science and nanotechnology,
                  discovered that the answer wasn't better ingredients—it was better delivery.
                  Traditional supplements, no matter how pure or potent, face a fundamental
                  challenge: they're too large to be efficiently absorbed.
                </p>
                <p className='text-lg text-forest/80 leading-relaxed'>
                  This realization led to the development of NanoZorb™, a proprietary technology
                  that reduces nutrients to nano-scale particles, enabling unprecedented
                  bioavailability and cellular uptake.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className='py-20 bg-cream/50'>
          <div className='container mx-auto px-4 lg:px-8'>
            <h2 className='text-4xl md:text-5xl font-bold text-forest mb-16 text-center'>
              Our International Journey
            </h2>
            <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12'>
              {/* Israeli Sourcing */}
              <div className='bg-white rounded-2xl p-8 shadow-lg'>
                <div className='w-16 h-16 rounded-full bg-sage flex items-center justify-center mb-6'>
                  <Leaf className='w-8 h-8 text-white' />
                </div>
                <h3 className='text-2xl font-bold text-forest mb-4'>
                  Israeli Olive Groves
                </h3>
                <p className='text-forest/80 leading-relaxed'>
                  We source our premium olive leaf extract from ancient groves in Israel,
                  where olive trees have been cultivated for thousands of years. These
                  olives produce some of the most potent oleuropein-rich leaves in the world,
                  providing the foundation for our immune-supporting formula.
                </p>
              </div>

              {/* German Manufacturing */}
              <div className='bg-white rounded-2xl p-8 shadow-lg'>
                <div className='w-16 h-16 rounded-full bg-honey flex items-center justify-center mb-6'>
                  <Award className='w-8 h-8 text-white' />
                </div>
                <h3 className='text-2xl font-bold text-forest mb-4'>
                  German Precision Manufacturing
                </h3>
                <p className='text-forest/80 leading-relaxed'>
                  Our proprietary nano-processing takes place in a state-of-the-art
                  GMP-certified facility in Germany, known for its pharmaceutical-grade
                  precision. German engineering ensures consistent particle size,
                  purity, and potency in every bottle.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Nano Technology */}
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4 lg:px-8'>
            <div className='max-w-4xl mx-auto'>
              <div className='flex items-start gap-6 mb-8'>
                <div className='w-16 h-16 rounded-full bg-sage flex items-center justify-center flex-shrink-0'>
                  <Beaker className='w-8 h-8 text-white' />
                </div>
                <div>
                  <h2 className='text-4xl font-bold text-forest mb-6'>
                    Why Nano Technology?
                  </h2>
                  <p className='text-lg text-forest/80 leading-relaxed mb-4'>
                    Traditional supplements face a 40-70% loss during digestion. We knew there
                    had to be a better way.
                  </p>
                  <p className='text-lg text-forest/80 leading-relaxed mb-4'>
                    Nano technology allows us to bypass these limitations entirely. By reducing
                    nutrients to 20-80 nanometers—smaller than a virus—we enable direct
                    absorption through oral mucosa. This means:
                  </p>
                  <ul className='space-y-3 text-lg text-forest/80'>
                    <li>✓ Nutrients reach your bloodstream in 60-120 seconds</li>
                    <li>✓ Up to 90% bioavailability vs 30-60% for traditional supplements</li>
                    <li>✓ 4-10× higher cellular delivery</li>
                    <li>✓ One dose provides all-day protection</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment to Quality */}
        <section className='py-20 bg-gradient-to-br from-sage to-sage-light text-white'>
          <div className='container mx-auto px-4 lg:px-8'>
            <div className='max-w-4xl mx-auto text-center'>
              <h2 className='text-4xl md:text-5xl font-bold mb-8'>
                Our Commitment to Quality
              </h2>
              <p className='text-xl mb-12 text-white/90 leading-relaxed'>
                Every bottle of DROP is manufactured to the highest standards, with
                third-party testing to ensure purity, potency, and safety.
              </p>
              <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                {[
                  {
                    icon: <Award className='w-8 h-8' />,
                    title: 'GMP Certified',
                    desc: 'Pharmaceutical-grade facility',
                  },
                  {
                    icon: <Beaker className='w-8 h-8' />,
                    title: 'Third-Party Tested',
                    desc: 'Independent verification',
                  },
                  {
                    icon: <Leaf className='w-8 h-8' />,
                    title: 'Pure Ingredients',
                    desc: 'No fillers or additives',
                  },
                  {
                    icon: <Globe className='w-8 h-8' />,
                    title: '90-Day Guarantee',
                    desc: 'Risk-free trial',
                  },
                ].map((item, index) => (
                  <div key={index} className='bg-white/10 backdrop-blur-sm rounded-xl p-6'>
                    <div className='flex justify-center mb-4'>{item.icon}</div>
                    <h3 className='font-bold text-lg mb-2'>{item.title}</h3>
                    <p className='text-sm text-white/80'>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className='py-20 bg-cream/30'>
          <div className='container mx-auto px-4 lg:px-8'>
            <div className='max-w-4xl mx-auto'>
              <h2 className='text-4xl font-bold text-forest mb-12 text-center'>
                What We Stand For
              </h2>
              <div className='space-y-8'>
                {[
                  {
                    title: 'Scientific Integrity',
                    desc: 'Every claim we make is backed by research. We believe in transparency and honest communication about what our products can and cannot do.',
                  },
                  {
                    title: 'Innovation',
                    desc: "We never stop researching. Nano technology is just the beginning—we're constantly exploring new ways to improve bioavailability and efficacy.",
                  },
                  {
                    title: 'Sustainability',
                    desc: 'From sourcing to packaging, we prioritize environmental responsibility. Our bottles are recyclable, and we work with suppliers who share our values.',
                  },
                  {
                    title: 'Customer First',
                    desc: 'Your health is our priority. That's why we offer a 90-day money-back guarantee and responsive customer support.',
                  },
                ].map((value, index) => (
                  <div key={index} className='bg-white rounded-xl p-8 shadow-md border-l-4 border-sage'>
                    <h3 className='text-2xl font-bold text-forest mb-3'>{value.title}</h3>
                    <p className='text-forest/80 leading-relaxed'>{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4 lg:px-8 text-center'>
            <h2 className='text-4xl font-bold text-forest mb-6'>
              Join the Nano Revolution
            </h2>
            <p className='text-xl text-forest/70 mb-8 max-w-2xl mx-auto'>
              Experience the difference that true bioavailability makes. Try DROP risk-free
              for 90 days.
            </p>
            <button className='bg-honey hover:bg-honey-dark text-white text-xl font-bold py-4 px-12 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300'>
              Shop Now
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
