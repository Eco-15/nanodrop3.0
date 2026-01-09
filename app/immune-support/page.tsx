import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Shield, Zap, Clock, Leaf, Sun } from 'lucide-react';
import Link from 'next/link';

export default function ImmuneSupportPage() {
  return (
    <>
      <Header />
      <main className='min-h-screen pt-20 md:pt-24 pb-16 bg-white'>
        {/* Hero Section */}
        <section className='py-20 bg-gradient-to-br from-honey/10 to-cream'>
          <div className='container mx-auto px-4 lg:px-8'>
            <div className='max-w-4xl mx-auto text-center'>
              <h1 className='text-5xl md:text-6xl font-bold text-forest mb-6'>
                Immune System Support
              </h1>
              <p className='text-xl text-forest/70 mb-8'>
                Discover how DROP's five powerful ingredients work together to activate your immune response in 60-120 seconds for all-day protection.
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
                  Comprehensive Immune Defense
                </h2>
                <p className='text-forest/80 leading-relaxed mb-6'>
                  Your immune system is your body's natural defense mechanism, constantly working to protect you from harmful pathogens, viruses, and bacteria. DROP provides comprehensive support through a synergistic blend of five powerful ingredients, each chosen for its unique immune-boosting properties.
                </p>
              </div>

              {/* Key Benefits */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-12'>
                <div className='bg-cream rounded-xl p-6'>
                  <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 rounded-full bg-sage flex items-center justify-center flex-shrink-0'>
                      <Zap className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <h3 className='text-xl font-bold text-forest mb-2'>Rapid Activation</h3>
                      <p className='text-forest/70'>
                        NanoZorb™ technology activates your immune response in just 60-120 seconds, providing immediate support when you need it most.
                      </p>
                    </div>
                  </div>
                </div>

                <div className='bg-cream rounded-xl p-6'>
                  <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 rounded-full bg-honey flex items-center justify-center flex-shrink-0'>
                      <Clock className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <h3 className='text-xl font-bold text-forest mb-2'>24-Hour Protection</h3>
                      <p className='text-forest/70'>
                        One daily dose provides sustained immune support throughout your entire day and night.
                      </p>
                    </div>
                  </div>
                </div>

                <div className='bg-cream rounded-xl p-6'>
                  <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 rounded-full bg-sage flex items-center justify-center flex-shrink-0'>
                      <Shield className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <h3 className='text-xl font-bold text-forest mb-2'>Multi-Layer Defense</h3>
                      <p className='text-forest/70'>
                        Five synergistic ingredients work together to support multiple aspects of immune function.
                      </p>
                    </div>
                  </div>
                </div>

                <div className='bg-cream rounded-xl p-6'>
                  <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 rounded-full bg-honey flex items-center justify-center flex-shrink-0'>
                      <Leaf className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <h3 className='text-xl font-bold text-forest mb-2'>Natural Formula</h3>
                      <p className='text-forest/70'>
                        Derived from natural sources including Israeli olive leaf and elderberry extracts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='prose prose-lg max-w-none'>
                <h2 className='text-3xl font-bold text-forest mb-6 mt-12'>
                  How DROP Supports Your Immune System
                </h2>
                <p className='text-forest/80 leading-relaxed mb-6'>
                  DROP works through multiple mechanisms to strengthen and support your immune system:
                </p>

                <div className='space-y-6 mb-8'>
                  <div className='bg-sage/10 rounded-lg p-6 border-l-4 border-sage'>
                    <h4 className='font-bold text-forest mb-2'>T-Cell Activation</h4>
                    <p className='text-forest/80'>
                      Vitamin D3 and Zinc work together to activate T-cells, your body's frontline immune defenders that identify and eliminate threats.
                    </p>
                  </div>

                  <div className='bg-honey/10 rounded-lg p-6 border-l-4 border-honey'>
                    <h4 className='font-bold text-forest mb-2'>Antiviral Protection</h4>
                    <p className='text-forest/80'>
                      Olive leaf extract and elderberry contain powerful compounds that interfere with viral replication and prevent pathogens from entering cells.
                    </p>
                  </div>

                  <div className='bg-sage/10 rounded-lg p-6 border-l-4 border-sage'>
                    <h4 className='font-bold text-forest mb-2'>Inflammation Control</h4>
                    <p className='text-forest/80'>
                      Magnesium helps regulate inflammatory responses, ensuring your immune system responds appropriately without overreacting.
                    </p>
                  </div>
                </div>

                <h2 className='text-3xl font-bold text-forest mb-6 mt-12'>
                  Clinical Evidence
                </h2>
                <p className='text-forest/80 leading-relaxed mb-6'>
                  Studies on nano-delivery systems have shown remarkable improvements in immune function markers:
                </p>
                <ul className='space-y-3 text-forest/80 mb-8'>
                  <li>Faster immune response activation (60-120 seconds vs 2-4 hours for traditional supplements)</li>
                  <li>Higher peak nutrient concentrations in bloodstream</li>
                  <li>Reduced duration and severity of cold and flu symptoms</li>
                  <li>Enhanced T-cell and B-cell activity</li>
                  <li>Improved mucosal immunity in respiratory tract</li>
                </ul>
              </div>

              {/* CTA */}
              <div className='mt-12 bg-gradient-to-r from-honey to-honey-dark rounded-2xl p-8 text-center text-white'>
                <h3 className='text-2xl font-bold mb-4'>Strengthen Your Immune System Today</h3>
                <p className='mb-6 text-white/90'>
                  Give your body the support it needs with DROP's advanced immune formula.
                </p>
                <Link
                  href='/product'
                  className='inline-block bg-sage hover:bg-sage-dark text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl'
                >
                  Order Now
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
