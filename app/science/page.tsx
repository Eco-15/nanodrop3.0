import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Zap, Droplets, Leaf, Sun, Waves, Clock } from 'lucide-react';
import { Gallery4 } from '@/components/Gallery4';

export default function SciencePage() {
  const ingredients = [
    {
      icon: Leaf,
      name: 'Nano Olive Leaf Extract',
      size: '20-80nm',
      compound: 'Oleuropein (20% standardization)',
      benefits: 'Antiviral activity, respiratory support, antioxidant protection',
      whyNano: 'Protects oleuropein from digestive degradation; 4× better cellular uptake',
      color: 'sage',
    },
    {
      icon: Droplets,
      name: 'Nano Elderberry',
      size: '20-80nm',
      compound: 'Organic Sambucus nigra concentrate',
      benefits: 'Reduces cold/flu duration, blocks viral entry, antioxidant-rich',
      whyNano: 'Rapid absorption, efficient targeting to respiratory tissues',
      color: 'honey',
    },
    {
      icon: Sun,
      name: 'Nano Vitamin D3',
      size: '20-80nm',
      compound: '120 mcg (4,800 IU / 600% DV)',
      benefits: 'Activates immune cells, modulates inflammation, supports lung defense',
      whyNano: '3-4× higher serum levels than oil-based softgels; faster onset',
      color: 'sage',
    },
    {
      icon: Zap,
      name: 'Nano Zinc (Dual Form)',
      size: '20-80nm',
      compound: '30mg elemental zinc (272% DV)',
      benefits: 'Rapid viral inhibition, mucosal immunity, immune cell support',
      whyNano: 'Efficient intracellular delivery; minimal digestive side effects',
      color: 'honey',
    },
    {
      icon: Waves,
      name: 'Nano Magnesium Hydroxide',
      size: '30-120nm',
      compound: '120mg elemental magnesium (28% DV)',
      benefits: 'Immune regulation, inflammation balance, cellular energy support',
      whyNano: 'Rapid intracellular uptake; higher surface area for inflammatory mediator interaction',
      color: 'sage',
    },
  ];


  return (
    <>
      <Header />
      <main className='min-h-screen pt-20 md:pt-24 pb-16 bg-white'>
        {/* Comprehensive Immune Defense */}
        <section className='py-20 bg-cream/50'>
          <div className='container mx-auto px-4 lg:px-8'>
            <div className='max-w-5xl mx-auto'>
              <h2 className='text-4xl md:text-5xl font-bold text-forest mb-6 text-center'>
                Comprehensive Immune Defense
              </h2>
              <p className='text-2xl text-forest/70 text-center mb-16'>Five Essential Ingredients, Nano-Enhanced</p>

              <p className='text-lg text-forest/80 leading-relaxed mb-12 text-center'>
                DROP combines five scientifically-backed immune defenders, all delivered using NanoZorb™ technology:
              </p>

              <div className='space-y-8'>
                {ingredients.map((ingredient, index) => {
                  const Icon = ingredient.icon;
                  const bgColor = ingredient.color === 'sage' ? 'bg-sage' : 'bg-honey';
                  const borderColor = ingredient.color === 'sage' ? 'border-sage' : 'border-honey';
                  const bgLight = ingredient.color === 'sage' ? 'bg-sage/10' : 'bg-honey/10';

                  return (
                    <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg border-2 ${borderColor}`}>
                      <div className='flex items-start gap-6'>
                        <div className={`${bgColor} w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0`}>
                          <Icon className='w-8 h-8 text-white' />
                        </div>
                        <div className='flex-1'>
                          <h3 className='text-2xl font-bold text-forest mb-2'>{ingredient.name}</h3>
                          <div className='space-y-2 text-sm text-forest/70 mb-4'>
                            <p><span className='font-semibold'>Particle size:</span> {ingredient.size}</p>
                            <p><span className='font-semibold'>Key compound:</span> {ingredient.compound}</p>
                          </div>
                          <p className='text-forest/80 mb-4'><span className='font-semibold'>Benefits:</span> {ingredient.benefits}</p>
                          <div className={`${bgLight} rounded-lg p-4 border-l-4 ${borderColor}`}>
                            <p className='text-forest'><span className='font-semibold'>Why nano:</span> {ingredient.whyNano}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* The Synergy Effect */}
        <section className='py-20 bg-white'>
          <div className='container mx-auto px-4 lg:px-8'>
            <div className='max-w-5xl mx-auto'>
              <h2 className='text-4xl md:text-5xl font-bold text-forest mb-6 text-center'>
                The Synergy Effect
              </h2>
              <p className='text-2xl text-forest/70 text-center mb-12'>Why These Five Work Together</p>

              <p className='text-lg text-forest/80 leading-relaxed mb-12 text-center'>
                Each ingredient supports a different aspect of immune function:
              </p>

              <div className='grid md:grid-cols-2 gap-8'>
                <div className='bg-sage/10 rounded-xl p-8 border-l-4 border-sage'>
                  <h3 className='text-xl font-bold text-forest mb-4'>Layer 1: Viral Interference</h3>
                  <p className='text-forest/80'>
                    Olive leaf extract and elderberry work at the earliest infection stages, interfering with viral attachment and replication.
                  </p>
                </div>

                <div className='bg-honey/10 rounded-xl p-8 border-l-4 border-honey'>
                  <h3 className='text-xl font-bold text-forest mb-4'>Layer 2: Immune Activation</h3>
                  <p className='text-forest/80'>
                    Vitamin D3 and zinc activate your immune cells, preparing them to respond effectively.
                  </p>
                </div>

                <div className='bg-sage/10 rounded-xl p-8 border-l-4 border-sage'>
                  <h3 className='text-xl font-bold text-forest mb-4'>Layer 3: Regulation & Balance</h3>
                  <p className='text-forest/80'>
                    Magnesium ensures your immune response is appropriately regulated, preventing excessive inflammation while maintaining defensive capability.
                  </p>
                </div>

                <div className='bg-honey/10 rounded-xl p-8 border-l-4 border-honey'>
                  <h3 className='text-xl font-bold text-forest mb-4'>Layer 4: Antioxidant Protection</h3>
                  <p className='text-forest/80'>
                    All five ingredients provide antioxidant benefits, protecting your cells from oxidative stress during immune responses.
                  </p>
                </div>
              </div>

              <div className='mt-12 bg-sage rounded-2xl p-8 text-center text-white'>
                <p className='text-2xl font-bold'>Together, they create comprehensive, multi-layered immune support.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Speed of Action */}
        <section className='py-20 bg-cream/50'>
          <div className='container mx-auto px-4 lg:px-8'>
            <div className='max-w-5xl mx-auto'>
              <h2 className='text-4xl md:text-5xl font-bold text-forest mb-6 text-center'>
                Speed of Action: Minutes, Not Hours
              </h2>
              <p className='text-2xl text-forest/70 text-center mb-16'>Traditional vs. Nano Timeline</p>

              <div className='grid md:grid-cols-2 gap-8'>
                {/* Traditional Timeline */}
                <div className='bg-white rounded-2xl p-8 shadow-lg border-2 border-forest/20'>
                  <h3 className='text-2xl font-bold text-forest mb-6'>Traditional Supplement Capsule</h3>
                  <div className='space-y-4'>
                    <div className='flex gap-4'>
                      <div className='w-12 h-12 rounded-full bg-forest/20 flex items-center justify-center flex-shrink-0'>
                        <Clock className='w-6 h-6 text-forest/60' />
                      </div>
                      <div>
                        <p className='font-semibold text-forest'>0-30 minutes</p>
                        <p className='text-sm text-forest/70'>Dissolves in stomach, begins degrading from acid</p>
                      </div>
                    </div>
                    <div className='flex gap-4'>
                      <div className='w-12 h-12 rounded-full bg-forest/20 flex items-center justify-center flex-shrink-0'>
                        <Clock className='w-6 h-6 text-forest/60' />
                      </div>
                      <div>
                        <p className='font-semibold text-forest'>30-120 minutes</p>
                        <p className='text-sm text-forest/70'>Partially broken-down nutrients reach intestines</p>
                      </div>
                    </div>
                    <div className='flex gap-4'>
                      <div className='w-12 h-12 rounded-full bg-forest/20 flex items-center justify-center flex-shrink-0'>
                        <Clock className='w-6 h-6 text-forest/60' />
                      </div>
                      <div>
                        <p className='font-semibold text-forest'>120-240 minutes</p>
                        <p className='text-sm text-forest/70'>Small fraction successfully absorbed reaches bloodstream</p>
                      </div>
                    </div>
                    <div className='bg-forest/10 rounded-lg p-4 mt-4'>
                      <p className='font-bold text-forest'>Peak levels: 3-4 hours after dosing</p>
                    </div>
                  </div>
                </div>

                {/* Nano Timeline */}
                <div className='bg-gradient-to-br from-sage/10 to-honey/10 rounded-2xl p-8 shadow-lg border-2 border-sage'>
                  <h3 className='text-2xl font-bold text-forest mb-6'>DROP Nano Technology</h3>
                  <div className='space-y-4'>
                    <div className='flex gap-4'>
                      <div className='w-12 h-12 rounded-full bg-sage flex items-center justify-center flex-shrink-0'>
                        <Zap className='w-6 h-6 text-white' />
                      </div>
                      <div>
                        <p className='font-semibold text-forest'>0-60 seconds</p>
                        <p className='text-sm text-forest/80'>Nano particles begin sublingual absorption</p>
                      </div>
                    </div>
                    <div className='flex gap-4'>
                      <div className='w-12 h-12 rounded-full bg-honey flex items-center justify-center flex-shrink-0'>
                        <Zap className='w-6 h-6 text-white' />
                      </div>
                      <div>
                        <p className='font-semibold text-forest'>60-120 seconds</p>
                        <p className='text-sm text-forest/80'>Cellular uptake begins throughout oral mucosa</p>
                      </div>
                    </div>
                    <div className='flex gap-4'>
                      <div className='w-12 h-12 rounded-full bg-sage flex items-center justify-center flex-shrink-0'>
                        <Zap className='w-6 h-6 text-white' />
                      </div>
                      <div>
                        <p className='font-semibold text-forest'>15-20 minutes</p>
                        <p className='text-sm text-forest/80'>Peak bloodstream levels achieved</p>
                      </div>
                    </div>
                    <div className='bg-sage/20 rounded-lg p-4 mt-4 border-l-4 border-sage'>
                      <p className='font-bold text-forest'>Sustained activity: 4-6 hours of immune support</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='mt-12 bg-honey/10 rounded-xl p-8 border-l-4 border-honey text-center'>
                <p className='text-xl font-bold text-forest'>
                  The advantage: When you need immune support, you need it NOW. Nano delivery provides it.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Articles Section */}
      <Gallery4
        title="Explore DROP Science & Benefits"
        description="Discover the innovation and research behind DROP's nano-enhanced immune support technology."
      />
      <Footer />
    </>
  );
}
