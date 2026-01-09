import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Atom, Zap, Target } from 'lucide-react';
import Link from 'next/link';

export default function NanoDeliveryPage() {
  return (
    <>
      <Header />
      <main className='min-h-screen pt-20 md:pt-24 pb-16 bg-white'>
        {/* Hero Section */}
        <section className='py-20 bg-gradient-to-br from-sage/10 to-cream'>
          <div className='container mx-auto px-4 lg:px-8'>
            <div className='max-w-4xl mx-auto text-center'>
              <h1 className='text-5xl md:text-6xl font-bold text-forest mb-6'>
                Nano Delivery Technology
              </h1>
              <p className='text-xl text-forest/70 mb-8'>
                Explore how our proprietary NanoZorb™ technology reduces nutrients to 20-80 nanometers for unprecedented bioavailability and cellular uptake.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className='py-20'>
          <div className='container mx-auto px-4 lg:px-8'>
            <div className='max-w-4xl mx-auto'>
              <div className='prose prose-lg max-w-none'>
                <h2 className='text-3xl font-bold text-forest mb-6'>
                  What is NanoZorb™ Technology?
                </h2>
                <p className='text-forest/80 leading-relaxed mb-6'>
                  NanoZorb™ is DROP's revolutionary delivery system that transforms traditional supplement ingredients into nano-sized particles measuring just 20-80 nanometers. To put this in perspective, these particles are up to 50 times smaller than conventional supplements, enabling them to bypass digestive barriers and deliver nutrients directly to your cells.
                </p>
                <p className='text-forest/80 leading-relaxed mb-6'>
                  Traditional supplements lose 40-70% of their potency during digestion. NanoZorb™ changes this by enabling direct absorption through oral mucosa, achieving up to 90% bioavailability compared to the 30-60% typical of pills and capsules.
                </p>
              </div>

              {/* Features Grid */}
              <div className='grid grid-cols-1 md:grid-cols-3 gap-8 my-12'>
                <div className='bg-cream rounded-xl p-6 text-center'>
                  <div className='w-16 h-16 mx-auto mb-4 rounded-full bg-sage flex items-center justify-center'>
                    <Atom className='w-8 h-8 text-white' />
                  </div>
                  <h3 className='text-xl font-bold text-forest mb-2'>20-80nm Particles</h3>
                  <p className='text-forest/70'>Ultra-small size for maximum absorption</p>
                </div>

                <div className='bg-cream rounded-xl p-6 text-center'>
                  <div className='w-16 h-16 mx-auto mb-4 rounded-full bg-honey flex items-center justify-center'>
                    <Zap className='w-8 h-8 text-white' />
                  </div>
                  <h3 className='text-xl font-bold text-forest mb-2'>60-120 Seconds</h3>
                  <p className='text-forest/70'>Rapid activation time</p>
                </div>

                <div className='bg-cream rounded-xl p-6 text-center'>
                  <div className='w-16 h-16 mx-auto mb-4 rounded-full bg-sage flex items-center justify-center'>
                    <Target className='w-8 h-8 text-white' />
                  </div>
                  <h3 className='text-xl font-bold text-forest mb-2'>90% Bioavailability</h3>
                  <p className='text-forest/70'>Superior nutrient delivery</p>
                </div>
              </div>

              <div className='prose prose-lg max-w-none'>
                <h2 className='text-3xl font-bold text-forest mb-6 mt-12'>
                  How It Works
                </h2>
                <ol className='space-y-4 text-forest/80'>
                  <li><strong>Nano-Sizing:</strong> Active ingredients are reduced to 20-80 nanometers using advanced nanotechnology</li>
                  <li><strong>Oral Absorption:</strong> Tiny particles absorb directly through oral mucosa, bypassing the digestive system</li>
                  <li><strong>Cellular Delivery:</strong> Nano-particles penetrate cell membranes efficiently, delivering nutrients where they are needed</li>
                  <li><strong>Sustained Release:</strong> Advanced formulation provides 24-hour protection from a single daily dose</li>
                </ol>

                <h2 className='text-3xl font-bold text-forest mb-6 mt-12'>
                  The Science Behind Nano-Delivery
                </h2>
                <p className='text-forest/80 leading-relaxed mb-6'>
                  Research shows that particle size directly impacts bioavailability. When nutrients are reduced to the nanoscale, several advantages emerge:
                </p>
                <ul className='space-y-3 text-forest/80 mb-8'>
                  <li>Increased surface area for better absorption</li>
                  <li>Ability to cross biological barriers more easily</li>
                  <li>Enhanced solubility in bodily fluids</li>
                  <li>Protection from degradation in the digestive tract</li>
                  <li>Targeted delivery to specific cells and tissues</li>
                </ul>
              </div>

              {/* CTA */}
              <div className='mt-12 bg-gradient-to-r from-sage to-sage-light rounded-2xl p-8 text-center text-white'>
                <h3 className='text-2xl font-bold mb-4'>Experience the Nano Difference</h3>
                <p className='mb-6 text-white/90'>
                  Try DROP today and feel the power of NanoZorb™ technology working in your body.
                </p>
                <Link
                  href='/product'
                  className='inline-block bg-honey hover:bg-honey-dark text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl'
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
