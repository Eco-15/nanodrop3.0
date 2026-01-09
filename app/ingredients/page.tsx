import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Leaf, Droplets, Sun, Zap, Waves } from 'lucide-react';
import Link from 'next/link';

export default function IngredientsPage() {
  const ingredients = [
    {
      name: 'Nano Olive Leaf Extract',
      icon: Leaf,
      color: 'sage',
      dosage: 'Standardized Extract',
      description: 'Sourced from ancient olive groves in Israel, our olive leaf extract is rich in oleuropein, a powerful polyphenol with potent antiviral and antimicrobial properties.',
      benefits: [
        'Supports respiratory health',
        'Natural antiviral properties',
        'Rich in antioxidants',
        'Anti-inflammatory effects',
      ],
    },
    {
      name: 'Nano Elderberry Extract',
      icon: Droplets,
      color: 'honey',
      dosage: 'High-Potency Extract',
      description: 'Black elderberries have been used for centuries in traditional medicine. Our nano-sized elderberry extract has been clinically proven to reduce cold and flu duration.',
      benefits: [
        'Blocks viral entry into cells',
        'Reduces cold/flu duration by up to 50%',
        'Supports immune cell function',
        'High in flavonoids and anthocyanins',
      ],
    },
    {
      name: 'Nano Vitamin D3',
      icon: Sun,
      color: 'honey',
      dosage: '120 mcg (600% DV)',
      description: 'Often called the "sunshine vitamin," Vitamin D3 is essential for immune system regulation and T-cell activation. Our nano formulation ensures optimal absorption.',
      benefits: [
        'Activates T-cells for immune response',
        'Regulates inflammatory responses',
        'Supports bone and cardiovascular health',
        'Essential for over 200 biological processes',
      ],
    },
    {
      name: 'Nano Zinc',
      icon: Zap,
      color: 'sage',
      dosage: '30 mg (272% DV)',
      description: 'Our dual-form zinc blend combines zinc gluconate and zinc citrate for maximum bioavailability. Zinc is critical for immune cell development and function.',
      benefits: [
        'Disrupts viral replication',
        'Enhances mucosal immunity',
        'Supports wound healing',
        'Essential for over 300 enzymes',
      ],
    },
    {
      name: 'Nano Magnesium',
      icon: Waves,
      color: 'sage',
      dosage: '120 mg (28% DV)',
      description: 'Magnesium plays a crucial role in immune cell signaling and anti-inflammatory response. Our nano formulation bypasses common absorption issues.',
      benefits: [
        'Supports immune cell communication',
        'Regulates inflammatory responses',
        'Promotes relaxation and sleep',
        'Critical for energy production',
      ],
    },
  ];

  return (
    <>
      <Header />
      <main className='min-h-screen pt-20 md:pt-24 pb-16 bg-white'>
        {/* Hero Section */}
        <section className='py-20 bg-gradient-to-br from-sage/10 to-cream'>
          <div className='container mx-auto px-4 lg:px-8'>
            <div className='max-w-4xl mx-auto text-center'>
              <h1 className='text-5xl md:text-6xl font-bold text-forest mb-6'>
                Natural & Powerful Ingredients
              </h1>
              <p className='text-xl text-forest/70 mb-8'>
                From Israeli olive leaf extract to German-precision manufactured nano particles, every ingredient is chosen for maximum efficacy.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className='py-20'>
          <div className='container mx-auto px-4 lg:px-8'>
            <div className='max-w-5xl mx-auto'>
              <div className='text-center mb-16'>
                <h2 className='text-4xl font-bold text-forest mb-4'>
                  Five Synergistic Ingredients
                </h2>
                <p className='text-lg text-forest/70 max-w-3xl mx-auto'>
                  Each ingredient in DROP is carefully selected based on scientific evidence and transformed using NanoZorb™ technology for superior absorption and effectiveness.
                </p>
              </div>

              {/* Ingredients List */}
              <div className='space-y-12'>
                {ingredients.map((ingredient, index) => {
                  const Icon = ingredient.icon;
                  const bgColor = ingredient.color === 'sage' ? 'bg-sage' : 'bg-honey';
                  const borderColor = ingredient.color === 'sage' ? 'border-sage' : 'border-honey';
                  const textColor = ingredient.color === 'sage' ? 'text-sage' : 'text-honey';

                  return (
                    <div key={index} className={`border-2 ${borderColor} rounded-2xl p-8 bg-white shadow-lg hover:shadow-xl transition-all duration-300`}>
                      <div className='flex items-start gap-6'>
                        <div className={`${bgColor} w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0`}>
                          <Icon className='w-8 h-8 text-white' />
                        </div>
                        <div className='flex-1'>
                          <h3 className='text-2xl font-bold text-forest mb-2'>{ingredient.name}</h3>
                          <p className={`text-sm font-semibold ${textColor} mb-4`}>{ingredient.dosage}</p>
                          <p className='text-forest/80 leading-relaxed mb-6'>{ingredient.description}</p>

                          <h4 className='font-bold text-forest mb-3'>Key Benefits:</h4>
                          <ul className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                            {ingredient.benefits.map((benefit, idx) => (
                              <li key={idx} className='flex items-start gap-2 text-forest/80'>
                                <span className={`${textColor} mt-1`}>✓</span>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Why Nano Matters */}
              <div className='mt-16 bg-gradient-to-br from-sage/10 to-honey/10 rounded-2xl p-8 md:p-12'>
                <h2 className='text-3xl font-bold text-forest mb-6 text-center'>
                  Why Nano-Sizing Matters
                </h2>
                <p className='text-forest/80 leading-relaxed mb-6 text-center max-w-3xl mx-auto'>
                  Traditional supplements lose much of their potency during digestion. Our NanoZorb™ technology transforms these powerful ingredients into particles 20-80 nanometers in size—small enough to:
                </p>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
                  <div className='text-center'>
                    <div className='text-4xl font-bold text-sage mb-2'>4-10×</div>
                    <p className='text-forest/70'>Higher cellular uptake</p>
                  </div>
                  <div className='text-center'>
                    <div className='text-4xl font-bold text-honey mb-2'>90%</div>
                    <p className='text-forest/70'>Bioavailability rate</p>
                  </div>
                  <div className='text-center'>
                    <div className='text-4xl font-bold text-sage mb-2'>60-120s</div>
                    <p className='text-forest/70'>Absorption time</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className='mt-16 bg-gradient-to-r from-sage to-sage-light rounded-2xl p-8 text-center text-white'>
                <h3 className='text-2xl font-bold mb-4'>Experience Premium Ingredients</h3>
                <p className='mb-6 text-white/90'>
                  Try DROP and feel the difference that nano-sized, premium ingredients can make.
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
