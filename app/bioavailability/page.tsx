import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { TrendingUp, Zap, Target, Clock } from 'lucide-react';
import Link from 'next/link';

export default function BioavailabilityPage() {
  return (
    <>
      <Header />
      <main className='min-h-screen pt-20 md:pt-24 pb-16 bg-white'>
        {/* Hero Section */}
        <section className='py-20 bg-gradient-to-br from-honey/10 to-cream'>
          <div className='container mx-auto px-4 lg:px-8'>
            <div className='max-w-4xl mx-auto text-center'>
              <h1 className='text-5xl md:text-6xl font-bold text-forest mb-6'>
                Superior Bioavailability
              </h1>
              <p className='text-xl text-forest/70 mb-8'>
                Achieve up to 90% bioavailability compared to 30-60% for traditional supplements. See results in minutes, not hours.
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
                  What is Bioavailability?
                </h2>
                <p className='text-forest/80 leading-relaxed mb-6'>
                  Bioavailability refers to the proportion of a nutrient or supplement that enters your bloodstream and is available for your body to use. Even if a supplement contains high doses of nutrients, poor bioavailability means much of it is wasted during digestion.
                </p>
                <p className='text-forest/80 leading-relaxed mb-6'>
                  Traditional supplements face multiple absorption barriers: stomach acid breakdown, poor solubility, limited cell membrane permeability, and first-pass metabolism in the liver. These factors can reduce bioavailability to as low as 30-60%.
                </p>
              </div>

              {/* Comparison Chart */}
              <div className='my-12 bg-cream rounded-2xl p-8'>
                <h3 className='text-2xl font-bold text-forest mb-8 text-center'>
                  Bioavailability Comparison
                </h3>
                <div className='space-y-6'>
                  <div>
                    <div className='flex justify-between items-center mb-2'>
                      <span className='font-semibold text-forest'>DROP (NanoZorb™)</span>
                      <span className='text-sage font-bold'>90%</span>
                    </div>
                    <div className='w-full bg-sage/20 rounded-full h-6'>
                      <div className='bg-sage h-6 rounded-full' style={{ width: '90%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className='flex justify-between items-center mb-2'>
                      <span className='font-semibold text-forest'>Liquid Supplements</span>
                      <span className='text-honey font-bold'>50-60%</span>
                    </div>
                    <div className='w-full bg-honey/20 rounded-full h-6'>
                      <div className='bg-honey h-6 rounded-full' style={{ width: '60%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className='flex justify-between items-center mb-2'>
                      <span className='font-semibold text-forest'>Capsules/Tablets</span>
                      <span className='text-forest/50 font-bold'>30-40%</span>
                    </div>
                    <div className='w-full bg-forest/20 rounded-full h-6'>
                      <div className='bg-forest/50 h-6 rounded-full' style={{ width: '40%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className='flex justify-between items-center mb-2'>
                      <span className='font-semibold text-forest'>Gummies</span>
                      <span className='text-forest/30 font-bold'>20-30%</span>
                    </div>
                    <div className='w-full bg-forest/20 rounded-full h-6'>
                      <div className='bg-forest/30 h-6 rounded-full' style={{ width: '30%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits Grid */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-12'>
                <div className='bg-sage/10 rounded-xl p-6 border-l-4 border-sage'>
                  <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 rounded-full bg-sage flex items-center justify-center flex-shrink-0'>
                      <Target className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <h3 className='text-xl font-bold text-forest mb-2'>Precision Delivery</h3>
                      <p className='text-forest/70'>
                        Nano-particles target cells directly, delivering nutrients exactly where they are needed.
                      </p>
                    </div>
                  </div>
                </div>

                <div className='bg-honey/10 rounded-xl p-6 border-l-4 border-honey'>
                  <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 rounded-full bg-honey flex items-center justify-center flex-shrink-0'>
                      <Clock className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <h3 className='text-xl font-bold text-forest mb-2'>Rapid Absorption</h3>
                      <p className='text-forest/70'>
                        Absorbs in 60-120 seconds through oral mucosa, bypassing the digestive system entirely.
                      </p>
                    </div>
                  </div>
                </div>

                <div className='bg-sage/10 rounded-xl p-6 border-l-4 border-sage'>
                  <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 rounded-full bg-sage flex items-center justify-center flex-shrink-0'>
                      <TrendingUp className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <h3 className='text-xl font-bold text-forest mb-2'>Higher Peak Levels</h3>
                      <p className='text-forest/70'>
                        Achieves 4-10× higher peak nutrient concentrations in your bloodstream.
                      </p>
                    </div>
                  </div>
                </div>

                <div className='bg-honey/10 rounded-xl p-6 border-l-4 border-honey'>
                  <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 rounded-full bg-honey flex items-center justify-center flex-shrink-0'>
                      <Zap className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <h3 className='text-xl font-bold text-forest mb-2'>Sustained Release</h3>
                      <p className='text-forest/70'>
                        Maintains therapeutic levels for 24 hours from a single daily dose.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='prose prose-lg max-w-none'>
                <h2 className='text-3xl font-bold text-forest mb-6 mt-12'>
                  How NanoZorb™ Achieves Superior Bioavailability
                </h2>
                <p className='text-forest/80 leading-relaxed mb-6'>
                  Our patented NanoZorb™ technology overcomes traditional absorption barriers through several mechanisms:
                </p>

                <div className='space-y-6 mb-8'>
                  <div className='bg-white rounded-lg p-6 border-2 border-sage/20 shadow-sm'>
                    <h4 className='font-bold text-forest mb-2'>1. Oral Mucosal Absorption</h4>
                    <p className='text-forest/80'>
                      Nano-sized particles absorb directly through the thin membrane under your tongue and inside your cheeks, entering the bloodstream immediately without passing through the digestive system.
                    </p>
                  </div>

                  <div className='bg-white rounded-lg p-6 border-2 border-sage/20 shadow-sm'>
                    <h4 className='font-bold text-forest mb-2'>2. Enhanced Surface Area</h4>
                    <p className='text-forest/80'>
                      At 20-80 nanometers, our particles have a dramatically increased surface area-to-volume ratio, allowing for more efficient interaction with absorption sites.
                    </p>
                  </div>

                  <div className='bg-white rounded-lg p-6 border-2 border-sage/20 shadow-sm'>
                    <h4 className='font-bold text-forest mb-2'>3. Cell Membrane Permeability</h4>
                    <p className='text-forest/80'>
                      Nano-particles can cross cell membranes more easily than larger molecules, ensuring nutrients reach their targets inside cells.
                    </p>
                  </div>

                  <div className='bg-white rounded-lg p-6 border-2 border-sage/20 shadow-sm'>
                    <h4 className='font-bold text-forest mb-2'>4. Protection from Degradation</h4>
                    <p className='text-forest/80'>
                      By bypassing the stomach, our formula avoids degradation by stomach acid and digestive enzymes that destroy traditional supplements.
                    </p>
                  </div>
                </div>

                <h2 className='text-3xl font-bold text-forest mb-6 mt-12'>
                  The Bottom Line
                </h2>
                <p className='text-forest/80 leading-relaxed mb-6'>
                  Higher bioavailability means you get more benefit from every dose. With DROP, you are not just taking more nutrients—you are actually absorbing and using them. This translates to:
                </p>
                <ul className='space-y-3 text-forest/80 mb-8'>
                  <li>Faster immune response activation</li>
                  <li>More consistent therapeutic effects</li>
                  <li>Better value for your investment</li>
                  <li>Lower required doses for same effect</li>
                  <li>Reduced waste and better sustainability</li>
                </ul>
              </div>

              {/* CTA */}
              <div className='mt-12 bg-gradient-to-r from-honey to-honey-dark rounded-2xl p-8 text-center text-white'>
                <h3 className='text-2xl font-bold mb-4'>Experience Maximum Bioavailability</h3>
                <p className='mb-6 text-white/90'>
                  Get more from every drop with our revolutionary nano-delivery system.
                </p>
                <Link
                  href='/product'
                  className='inline-block bg-sage hover:bg-sage-dark text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl'
                >
                  Try DROP Today
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
