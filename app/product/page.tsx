'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { ShoppingCart, Check, Star, Leaf, Droplets, Sun, Zap, Waves } from 'lucide-react';
import { useCart } from '@/lib/CartContext';

export default function ProductPage() {
  const [selectedPackage, setSelectedPackage] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();

  const packages = [
    { bottles: 1, pricePerBottle: 59, total: 59, savings: 0 },
    { bottles: 2, pricePerBottle: 54, total: 108, savings: 10 },
    { bottles: 4, pricePerBottle: 49, total: 196, savings: 40 },
    { bottles: 12, pricePerBottle: 39, total: 468, savings: 240, popular: true },
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'ingredients', label: 'Ingredients' },
    { id: 'science', label: 'Science' },
    { id: 'howto', label: 'How to Use' },
    { id: 'facts', label: 'Supplement Facts' },
  ];

  const handleAddToCart = () => {
    const pkg = packages[selectedPackage];
    addToCart({
      id: '',
      bottles: pkg.bottles,
      pricePerBottle: pkg.pricePerBottle,
      total: pkg.total,
      quantity: 1,
    });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <>
      <Header />
      <main className='min-h-screen pt-20 md:pt-24 pb-16 bg-cream/30'>
        <div className='container mx-auto px-4 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16'>
            {/* Product Images */}
            <div className='space-y-4'>
              <div className='bg-white rounded-2xl p-8 shadow-lg aspect-square flex items-center justify-center overflow-hidden'>
                <Image
                  src='https://lyz5cvfr0h.ufs.sh/f/tLx4hl5ikmOnEXu5TAmqSPpoJ2e6DMAi7Z5HO8rdj3ItNTRV'
                  alt='Drop Immune Support Bottle'
                  width={600}
                  height={600}
                  className='object-contain w-full h-full'
                  priority
                />
              </div>
            </div>

            {/* Product Info */}
            <div className='space-y-6'>
              <div>
                <h1 className='text-4xl md:text-5xl font-bold text-forest mb-4'>
                  Drop Nano Immune Support
                </h1>
                <div className='flex items-center gap-2 mb-4'>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className='w-5 h-5 fill-honey text-honey' />
                  ))}
                  <span className='text-forest/70'>(247 reviews)</span>
                </div>
              </div>

              {/* Pricing */}
              <div className='bg-white rounded-xl p-6 shadow-md'>
                <h3 className='text-lg font-bold text-forest mb-4'>Select Your Package</h3>

                <div className='space-y-3 mb-6'>
                  {packages.map((pkg, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedPackage(index)}
                      className={`w-full p-4 rounded-lg border-2 transition-all duration-300 text-left relative ${
                        selectedPackage === index
                          ? 'border-sage bg-sage/5'
                          : 'border-sage/20 hover:border-sage/40'
                      }`}
                    >
                      {pkg.popular && (
                        <span className='absolute -top-3 right-4 bg-honey text-white text-xs font-bold px-3 py-1 rounded-full'>
                          MOST POPULAR
                        </span>
                      )}
                      <div className='flex items-center justify-between'>
                        <div>
                          <p className='font-bold text-forest'>
                            {pkg.bottles} Bottle{pkg.bottles > 1 ? 's' : ''}
                          </p>
                          <p className='text-sm text-forest/70'>
                            ${pkg.pricePerBottle} each
                          </p>
                          {pkg.savings > 0 && (
                            <p className='text-xs text-sage font-semibold mt-1'>
                              Save ${pkg.savings}
                            </p>
                          )}
                        </div>
                        <div className='text-right'>
                          <p className='text-2xl font-bold text-forest'>
                            ${pkg.total}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                <button 
                  onClick={handleAddToCart}
                  className={`w-full font-bold py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                    addedToCart
                      ? 'bg-sage hover:bg-sage-dark text-white'
                      : 'bg-honey hover:bg-honey-dark text-white'
                  }`}
                >
                  <ShoppingCart className='w-5 h-5' />
                  {addedToCart ? 'Added to Cart!' : `Add to Cart - $${packages[selectedPackage].total}`}
                </button>

                <div className='mt-4 space-y-2'>
                  <div className='flex items-center gap-2 text-sm text-forest/70'>
                    <Check className='w-4 h-4 text-sage' />
                    Free shipping on orders over $50
                  </div>
                  <div className='flex items-center gap-2 text-sm text-forest/70'>
                    <Check className='w-4 h-4 text-sage' />
                    90-day money-back guarantee
                  </div>
                  <div className='flex items-center gap-2 text-sm text-forest/70'>
                    <Check className='w-4 h-4 text-sage' />
                    15 servings per bottle
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className='bg-white rounded-2xl shadow-lg overflow-hidden'>
            {/* Tab Headers */}
            <div className='flex border-b border-sage/20 overflow-x-auto'>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-4 font-semibold whitespace-nowrap transition-colors duration-300 ${
                    activeTab === tab.id
                      ? 'text-sage border-b-2 border-sage'
                      : 'text-forest/60 hover:text-forest'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className='p-8 md:p-12'>
              {activeTab === 'overview' && (
                <div className='prose max-w-none'>
                  <h2 className='text-3xl font-bold text-forest mb-6'>
                    Revolutionary Nano-Technology Immune Support
                  </h2>
                  <p className='text-lg text-forest/80 leading-relaxed mb-6'>
                    DROP combines ancient wisdom with cutting-edge nano technology to deliver
                    superior immune support. Sourced from Israeli olive groves and manufactured
                    with German precision, each bottle contains 15 servings of concentrated
                    immune-boosting nutrients.
                  </p>
                  <h3 className='text-2xl font-bold text-forest mb-4'>
                    Why Choose DROP?
                  </h3>
                  <p className='text-forest/80 leading-relaxed'>
                    Unlike traditional supplements that lose 40-70% of their potency during
                    digestion, DROP's NanoZorb™ technology ensures up to 90% bioavailability.
                    Our nano-sized particles (20-80nm) absorb directly through oral mucosa,
                    delivering active ingredients to your cells in minutes, not hours.
                  </p>
                </div>
              )}

              {activeTab === 'ingredients' && (
                <div>
                  <h2 className='text-3xl font-bold text-forest mb-6'>
                    5 Powerful Ingredients
                  </h2>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
                    {[
                      {
                        name: 'Nano Olive Leaf Extract',
                        desc: 'Rich in oleuropein, a powerful antiviral polyphenol that supports respiratory health.',
                        icon: Leaf,
                        color: 'sage',
                      },
                      {
                        name: 'Nano Elderberry',
                        desc: 'Clinically proven to reduce cold and flu duration by blocking viral entry into cells.',
                        icon: Droplets,
                        color: 'honey',
                      },
                      {
                        name: 'Nano Vitamin D3 (120 mcg)',
                        desc: 'Essential for T-cell activation and immune system regulation. 600% DV.',
                        icon: Sun,
                        color: 'honey',
                      },
                      {
                        name: 'Nano Zinc (30 mg)',
                        desc: 'Dual-form zinc that disrupts viral replication and enhances mucosal immunity. 272% DV.',
                        icon: Zap,
                        color: 'sage',
                      },
                      {
                        name: 'Nano Magnesium (120 mg)',
                        desc: 'Critical for immune cell signaling and anti-inflammatory response. 28% DV.',
                        icon: Waves,
                        color: 'sage',
                      },
                    ].map((ingredient, index) => {
                      const IconComponent = ingredient.icon;
                      const bgColorClass = ingredient.color === 'sage' ? 'bg-sage' : 'bg-honey';
                      const borderColorClass = ingredient.color === 'sage' ? 'border-sage' : 'border-honey';
                      return (
                        <div key={index} className={`${borderColorClass} border rounded-xl p-6 bg-white shadow-md hover:shadow-lg transition-shadow duration-300`}>
                          <div className={`${bgColorClass} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                            <IconComponent className='w-6 h-6 text-white' />
                          </div>
                          <h3 className='text-lg font-bold text-forest mb-2'>
                            {ingredient.name}
                          </h3>
                          <p className='text-sm text-forest/70'>{ingredient.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {activeTab === 'science' && (
                <div className='prose max-w-none'>
                  <h2 className='text-3xl font-bold text-forest mb-6'>
                    The Science of NanoZorb™
                  </h2>
                  <p className='text-lg text-forest/80 leading-relaxed mb-6'>
                    NanoZorb™ technology reduces nutrients to 20-80 nanometers—up to 50 times
                    smaller than traditional supplements. This microscopic size enables:
                  </p>
                  <ul className='space-y-3 text-forest/80'>
                    <li>Direct absorption through oral mucosa</li>
                    <li>Bypass of digestive breakdown</li>
                    <li>4-10× higher intracellular delivery</li>
                    <li>Activation within 60-120 seconds</li>
                    <li>Peak bloodstream levels in 15-20 minutes</li>
                  </ul>
                </div>
              )}

              {activeTab === 'howto' && (
                <div>
                  <h2 className='text-3xl font-bold text-forest mb-6'>
                    How to Use DROP
                  </h2>
                  <div className='bg-cream rounded-xl p-8 mb-6'>
                    <h3 className='text-2xl font-bold text-forest mb-4'>
                      Daily Dosage
                    </h3>
                    <p className='text-xl text-forest/80 mb-4'>
                      Take <span className='font-bold text-sage'>6 pumps</span> once daily
                    </p>
                    <p className='text-forest/70'>
                      Best taken on an empty stomach in the morning for optimal absorption.
                      Hold under tongue for 30 seconds before swallowing.
                    </p>
                  </div>
                  <div className='space-y-4 text-forest/80'>
                    <p>
                      <strong>Why only once daily?</strong> NanoZorb™ delivers sustained
                      protection for 24 hours. Higher bioavailability means lower dose,
                      stronger effect.
                    </p>
                    <p>
                      <strong>Can I take more?</strong> Do not exceed the recommended
                      daily dose. Consult your healthcare provider before use if pregnant,
                      nursing, or taking medications.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'facts' && (
                <div>
                  <h2 className='text-3xl font-bold text-forest mb-6'>
                    Supplement Facts
                  </h2>
                  <div className='border-2 border-forest rounded-lg overflow-hidden'>
                    <div className='bg-forest text-white p-4 font-bold'>
                      Serving Size: 4 ml (6 pumps) | Servings Per Container: 15
                    </div>
                    <table className='w-full'>
                      <thead>
                        <tr className='bg-sage/10'>
                          <th className='text-left p-4 font-semibold text-forest'>
                            Ingredient
                          </th>
                          <th className='text-right p-4 font-semibold text-forest'>
                            Amount
                          </th>
                          <th className='text-right p-4 font-semibold text-forest'>
                            % DV
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { name: 'Vitamin D3', amount: '120 mcg', dv: '600%' },
                          { name: 'Magnesium', amount: '120 mg', dv: '28%' },
                          { name: 'Zinc', amount: '30 mg', dv: '272%' },
                          {
                            name: 'Proprietary Nano Immune Blend',
                            amount: '2,996 mg',
                            dv: '†',
                          },
                        ].map((item, index) => (
                          <tr key={index} className='border-t border-sage/20'>
                            <td className='p-4 text-forest'>{item.name}</td>
                            <td className='p-4 text-right text-forest'>{item.amount}</td>
                            <td className='p-4 text-right font-bold text-forest'>
                              {item.dv}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className='p-4 bg-cream text-sm text-forest/70'>
                      † Daily Value not established
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
