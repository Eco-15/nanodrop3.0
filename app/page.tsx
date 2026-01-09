'use client';

import { useEffect, useState } from 'react';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Gallery4 } from '@/components/Gallery4';
import { Feature108 } from '@/components/Feature108';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Droplets, Zap, Shield, Leaf, Grape, Sun, Atom, Sprout, ChevronDown, ChevronUp } from 'lucide-react';

interface IngredientCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  content: string;
}

const IngredientCard = ({ icon, title, subtitle, content }: IngredientCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className='bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-sage/20 hover:border-sage'>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className='w-full p-6 text-left'
      >
        <div className='flex items-start gap-4'>
          <div className='w-12 h-12 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0 text-sage'>
            {icon}
          </div>
          <div className='flex-1'>
            <h3 className='text-xl font-bold text-forest mb-2'>{title}</h3>
            <p className='text-sm text-sage font-medium'>{subtitle}</p>
          </div>
          <div className='text-sage'>
            {isExpanded ? <ChevronUp /> : <ChevronDown />}
          </div>
        </div>
      </button>

      {isExpanded && (
        <div className='px-6 pb-6 pt-2'>
          <p className='text-forest/80 leading-relaxed'>{content}</p>
          <div className='mt-4 bg-honey/10 rounded-lg p-4 border-l-4 border-honey'>
            <p className='text-sm font-semibold text-forest'>Why Nano Matters</p>
            <p className='text-sm text-forest/80 mt-1'>
              Nano delivery enhances cellular uptake and bioavailability by 4-10×.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

const HeroContent = () => {
  return null;
};

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main className='min-h-screen'>
        <ScrollExpandMedia
          mediaType='video'
          mediaSrc='https://lyz5cvfr0h.ufs.sh/f/tLx4hl5ikmOny3mFejLBxJ6Wp3uhtwUIodn1FZi50b7MyELA'
          posterSrc='https://lyz5cvfr0h.ufs.sh/f/tLx4hl5ikmOnEXu5TAmqSPpoJ2e6DMAi7Z5HO8rdj3ItNTRV'
          bgImageSrc='https://lyz5cvfr0h.ufs.sh/f/tLx4hl5ikmOnXTFklzfLN6JShn8GERoTUArHPOi9YaVIlBKu'
          title=''
          date=''
          scrollToExpand=''
          textBlend={false}
        >
          <HeroContent />
        </ScrollExpandMedia>
        <Gallery4 />
        <Feature108 />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
