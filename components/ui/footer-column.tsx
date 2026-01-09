import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import Link from 'next/link';

const data = {
  facebookLink: 'https://facebook.com/dropdaily',
  instaLink: 'https://instagram.com/dropdaily',
  twitterLink: 'https://twitter.com/dropdaily',
  services: {
    product: '/product',
    science: '/science',
    about: '/about',
  },
  help: {
    faqs: '/faqs',
    support: '/contact',
    shipping: '/shipping',
  },
  contact: {
    email: 'support@dropdaily.com',
    phone: '+1 (800) DROP-123',
    address: 'San Francisco, California, USA',
  },
  company: {
    name: 'DROP',
    description:
      'Premium nano-technology immune support. One drop at a time. Sourced from Israeli olive groves and manufactured with German precision.',
    logo: '/logo.png',
  },
};

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: data.facebookLink },
  { icon: Instagram, label: 'Instagram', href: data.instaLink },
  { icon: Twitter, label: 'Twitter', href: data.twitterLink },
];

const aboutLinks = [
  { text: 'Our Story', href: '/about' },
  { text: 'The Science', href: '/science' },
  { text: 'Ingredients', href: '/product' },
  { text: 'Careers', href: '/careers' },
];

const serviceLinks = [
  { text: 'Shop', href: data.services.product },
  { text: 'Science', href: data.services.science },
  { text: 'About', href: data.services.about },
];

const helpfulLinks = [
  { text: 'FAQs', href: data.help.faqs },
  { text: 'Support', href: data.help.support },
  { text: 'Shipping Info', href: data.help.shipping },
];

const contactInfo = [
  { icon: Mail, text: data.contact.email },
  { icon: Phone, text: data.contact.phone },
  { icon: MapPin, text: data.contact.address, isAddress: true },
];

export default function Footer4Col() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-forest dark:bg-forest/20 mt-16 w-full place-self-end rounded-t-2xl'>
      <div className='mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24'>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          <div>
            <div className='text-sage flex justify-center gap-2 sm:justify-start'>
              <span className='text-3xl font-bold text-white'>{data.company.name}</span>
            </div>

            <p className='text-white/70 mt-6 max-w-md text-center leading-relaxed sm:max-w-xs sm:text-left'>
              {data.company.description}
            </p>

            <ul className='mt-8 flex justify-center gap-6 sm:justify-start md:gap-8'>
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className='text-sage hover:text-honey transition'
                  >
                    <span className='sr-only'>{label}</span>
                    <Icon className='size-6' />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2'>
            <div className='text-center sm:text-left'>
              <p className='text-lg font-bold text-white'>About</p>
              <ul className='mt-8 space-y-4 text-sm'>
                {aboutLinks.map(({ text, href }) => (
                  <li key={text}>
                    <Link
                      className='text-white/70 hover:text-white transition'
                      href={href}
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className='text-center sm:text-left'>
              <p className='text-lg font-bold text-white'>Shop</p>
              <ul className='mt-8 space-y-4 text-sm'>
                {serviceLinks.map(({ text, href }) => (
                  <li key={text}>
                    <Link
                      className='text-white/70 hover:text-white transition'
                      href={href}
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className='text-center sm:text-left'>
              <p className='text-lg font-bold text-white'>Support</p>
              <ul className='mt-8 space-y-4 text-sm'>
                {helpfulLinks.map(({ text, href }) => (
                  <li key={text}>
                    <Link
                      href={href}
                      className='text-white/70 hover:text-white transition'
                    >
                      <span>{text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className='text-center sm:text-left'>
              <p className='text-lg font-bold text-white'>Contact</p>
              <ul className='mt-8 space-y-4 text-sm'>
                {contactInfo.map(({ icon: Icon, text, isAddress }) => (
                  <li key={text}>
                    <div className='flex items-center justify-center gap-1.5 sm:justify-start'>
                      <Icon className='text-sage size-5 shrink-0 shadow-sm' />
                      {isAddress ? (
                        <address className='text-white/70 -mt-0.5 flex-1 not-italic'>
                          {text}
                        </address>
                      ) : (
                        <span className='text-white/70 flex-1'>{text}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className='mt-12 border-t border-white/10 pt-6'>
          <div className='text-center sm:flex sm:justify-between sm:text-left'>
            <p className='text-sm text-white/70'>
              <span className='block sm:inline'>All rights reserved.</span>
            </p>

            <p className='text-white/70 mt-4 text-sm sm:order-first sm:mt-0'>
              &copy; {currentYear} {data.company.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
