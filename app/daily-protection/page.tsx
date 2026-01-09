import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Shield, Clock, Sun, Moon, Zap } from 'lucide-react';
import Link from 'next/link';

export default function DailyProtectionPage() {
  return (
    <>
      <Header />
      <main className='min-h-screen pt-20 md:pt-24 pb-16 bg-white'>
        {/* Hero Section */}
        <section className='py-20 bg-gradient-to-br from-sage/10 to-cream'>
          <div className='container mx-auto px-4 lg:px-8'>
            <div className='max-w-4xl mx-auto text-center'>
              <h1 className='text-5xl md:text-6xl font-bold text-forest mb-6'>
                24-Hour Daily Protection
              </h1>
              <p className='text-xl text-forest/70 mb-8'>
                One dose provides all-day immunity with sustained protection. Simplify your supplement routine with DROP.
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
                  All-Day Protection, Once Daily
                </h2>
                <p className='text-forest/80 leading-relaxed mb-6'>
                  In today's fast-paced world, simplicity matters. That is why DROP is designed to provide comprehensive immune support with just one daily dose. No need to remember multiple pills throughout the day or carry supplement bottles everywhere you go.
                </p>
                <p className='text-forest/80 leading-relaxed mb-6'>
                  Our advanced NanoZorb™ technology combined with carefully calibrated dosages ensures sustained release and consistent protection for a full 24 hours.
                </p>
              </div>

              {/* Timeline */}
              <div className='my-12 bg-gradient-to-br from-sage/10 to-honey/10 rounded-2xl p-8'>
                <h3 className='text-2xl font-bold text-forest mb-8 text-center'>
                  Your 24-Hour Protection Timeline
                </h3>
                <div className='space-y-6'>
                  <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 rounded-full bg-sage flex items-center justify-center flex-shrink-0'>
                      <Zap className='w-6 h-6 text-white' />
                    </div>
                    <div className='flex-1'>
                      <div className='font-bold text-forest mb-1'>0-2 Minutes: Rapid Absorption</div>
                      <p className='text-forest/70'>
                        NanoZorb™ particles begin absorbing through oral mucosa immediately after taking DROP.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 rounded-full bg-honey flex items-center justify-center flex-shrink-0'>
                      <Sun className='w-6 h-6 text-white' />
                    </div>
                    <div className='flex-1'>
                      <div className='font-bold text-forest mb-1'>15-20 Minutes: Peak Levels</div>
                      <p className='text-forest/70'>
                        Active ingredients reach peak concentration in your bloodstream, activating immune defenses.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 rounded-full bg-sage flex items-center justify-center flex-shrink-0'>
                      <Clock className='w-6 h-6 text-white' />
                    </div>
                    <div className='flex-1'>
                      <div className='font-bold text-forest mb-1'>1-12 Hours: Active Protection</div>
                      <p className='text-forest/70'>
                        Sustained immune support throughout your active day, maintaining therapeutic levels.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-start gap-4'>
                    <div className='w-12 h-12 rounded-full bg-honey flex items-center justify-center flex-shrink-0'>
                      <Moon className='w-6 h-6 text-white' />
                    </div>
                    <div className='flex-1'>
                      <div className='font-bold text-forest mb-1'>12-24 Hours: Overnight Support</div>
                      <p className='text-forest/70'>
                        Continued protection while you sleep, ensuring your immune system stays vigilant 24/7.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits of Once-Daily Dosing */}
              <div className='prose prose-lg max-w-none'>
                <h2 className='text-3xl font-bold text-forest mb-6 mt-12'>
                  Why Once Daily Works Better
                </h2>
                <p className='text-forest/80 leading-relaxed mb-6'>
                  Traditional supplements often require multiple doses throughout the day because of poor bioavailability and rapid degradation. DROP's superior formulation eliminates this inconvenience while providing better results:
                </p>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-8'>
                <div className='bg-cream rounded-xl p-6'>
                  <h4 className='font-bold text-forest mb-3 flex items-center gap-2'>
                    <Shield className='w-5 h-5 text-sage' />
                    Better Compliance
                  </h4>
                  <p className='text-forest/70'>
                    One daily dose is easier to remember and stick to than multiple doses, ensuring consistent protection.
                  </p>
                </div>

                <div className='bg-cream rounded-xl p-6'>
                  <h4 className='font-bold text-forest mb-3 flex items-center gap-2'>
                    <Zap className='w-5 h-5 text-honey' />
                    Sustained Levels
                  </h4>
                  <p className='text-forest/70'>
                    Advanced formulation maintains stable nutrient levels rather than peaks and valleys of multiple dosing.
                  </p>
                </div>

                <div className='bg-cream rounded-xl p-6'>
                  <h4 className='font-bold text-forest mb-3 flex items-center gap-2'>
                    <Sun className='w-5 h-5 text-sage' />
                    Simplified Routine
                  </h4>
                  <p className='text-forest/70'>
                    Fits seamlessly into your morning routine—no need to carry supplements or interrupt your day.
                  </p>
                </div>

                <div className='bg-cream rounded-xl p-6'>
                  <h4 className='font-bold text-forest mb-3 flex items-center gap-2'>
                    <Clock className='w-5 h-5 text-honey' />
                    Cost Effective
                  </h4>
                  <p className='text-forest/70'>
                    Superior bioavailability means lower doses achieve better results, providing better value.
                  </p>
                </div>
              </div>

              <div className='prose prose-lg max-w-none'>
                <h2 className='text-3xl font-bold text-forest mb-6 mt-12'>
                  How to Take DROP
                </h2>
                <div className='bg-sage/10 rounded-xl p-8 border-l-4 border-sage mb-8'>
                  <h4 className='font-bold text-forest mb-4 text-xl'>Recommended Daily Dosage</h4>
                  <p className='text-forest/80 mb-4'>
                    <strong className='text-2xl text-sage'>6 pumps</strong> once daily, preferably in the morning
                  </p>
                  <p className='text-forest/70 text-sm'>
                    For best results, take on an empty stomach and hold under your tongue for 30 seconds before swallowing to maximize sublingual absorption.
                  </p>
                </div>

                <h3 className='text-2xl font-bold text-forest mb-4'>Frequently Asked Questions</h3>

                <div className='space-y-6 mb-8'>
                  <div>
                    <h4 className='font-bold text-forest mb-2'>Can I take DROP with other supplements?</h4>
                    <p className='text-forest/70'>
                      Yes! DROP works synergistically with most other supplements. However, consult your healthcare provider if you are taking prescription medications.
                    </p>
                  </div>

                  <div>
                    <h4 className='font-bold text-forest mb-2'>What if I miss a dose?</h4>
                    <p className='text-forest/70'>
                      Simply take your next dose at the regular time. Do not double up to make up for a missed dose.
                    </p>
                  </div>

                  <div>
                    <h4 className='font-bold text-forest mb-2'>Can I take more than the recommended dose?</h4>
                    <p className='text-forest/70'>
                      We recommend sticking to the suggested dosage of 6 pumps daily. More is not necessarily better, and our formulation is precisely calibrated for optimal results.
                    </p>
                  </div>

                  <div>
                    <h4 className='font-bold text-forest mb-2'>How long until I see results?</h4>
                    <p className='text-forest/70'>
                      Many users report feeling the effects within the first dose, but optimal immune support builds over 2-4 weeks of consistent use.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className='mt-12 bg-gradient-to-r from-sage to-sage-light rounded-2xl p-8 text-center text-white'>
                <h3 className='text-2xl font-bold mb-4'>Simplify Your Immune Support</h3>
                <p className='mb-6 text-white/90'>
                  Experience the convenience and effectiveness of once-daily immune protection with DROP.
                </p>
                <Link
                  href='/product'
                  className='inline-block bg-honey hover:bg-honey-dark text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl'
                >
                  Get Started Today
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
