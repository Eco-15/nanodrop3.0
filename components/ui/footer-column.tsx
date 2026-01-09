import {
  Facebook,
  Instagram,
  Twitter,
} from 'lucide-react';
import Link from 'next/link';

const data = {
  facebookLink: 'https://facebook.com/dropdaily',
  instaLink: 'https://instagram.com/dropdaily',
  twitterLink: 'https://twitter.com/dropdaily',
  company: {
    name: 'DROP',
  },
};

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: data.facebookLink },
  { icon: Instagram, label: 'Instagram', href: data.instaLink },
  { icon: Twitter, label: 'Twitter', href: data.twitterLink },
];

const footerLinks = [
  { text: 'Shop', href: '/product' },
  { text: 'Science', href: '/science' },
  { text: 'About', href: '/about' },
  { text: 'Contact', href: '/contact' },
];

export default function Footer4Col() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-950 w-full'>
      <div className='mx-auto max-w-screen-xl px-6 py-8'>
        <div className='flex flex-col items-center justify-between gap-6 md:flex-row'>
          <div className='flex items-center gap-8'>
            <span className='text-xl font-bold text-white'>{data.company.name}</span>
            <nav className='hidden md:flex items-center gap-6'>
              {footerLinks.map(({ text, href }) => (
                <Link
                  key={text}
                  href={href}
                  className='text-sm text-gray-400 hover:text-white transition'
                >
                  {text}
                </Link>
              ))}
            </nav>
          </div>

          <div className='flex items-center gap-6'>
            <div className='flex gap-4'>
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className='text-gray-400 hover:text-white transition'
                >
                  <span className='sr-only'>{label}</span>
                  <Icon className='size-5' />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <nav className='flex md:hidden justify-center gap-6 mt-6 pb-6 border-b border-gray-800'>
          {footerLinks.map(({ text, href }) => (
            <Link
              key={text}
              href={href}
              className='text-sm text-gray-400 hover:text-white transition'
            >
              {text}
            </Link>
          ))}
        </nav>

        <div className='mt-6 pt-6 border-t border-gray-800'>
          <p className='text-center text-xs text-gray-500'>
            &copy; {currentYear} {data.company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
