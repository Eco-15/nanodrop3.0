'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, Menu, X, Trash2 } from 'lucide-react';
import { useCart } from '@/lib/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { cartItems, cartCount, removeFromCart, clearCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (showCart) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showCart]);

  const navLinks = [
    { href: '/product', label: 'Shop' },
    { href: '/science', label: 'The Science' },
  ];

  const cartTotal = cartItems.reduce((sum, item) => sum + item.total * item.quantity, 0);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/20 backdrop-blur-sm'
      }`}
    >
      <div className='container mx-auto px-4 lg:px-8'>
        <div className='flex items-center justify-between h-16 md:h-20'>
          {/* Logo */}
          <Link href='/' className='flex items-center'>
            <Image
              src='https://lyz5cvfr0h.ufs.sh/f/tLx4hl5ikmOnc2rRRVXABiZ5cudwgVeLkIK6oqazNlQhtEn2'
              alt='DROP Logo'
              width={160}
              height={53}
              className='h-12 md:h-16 w-auto'
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-8'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='text-forest hover:text-sage transition-colors duration-300 font-medium'
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Cart Icon */}
          <div className='flex items-center gap-4'>
            <button
              onClick={() => setShowCart(true)}
              aria-label='Shopping cart'
              className='p-2 text-forest hover:text-sage transition-colors duration-300 relative'
            >
              <ShoppingCart className='w-6 h-6' />
              {cartCount > 0 && (
                <span className='absolute -top-1 -right-1 bg-honey text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center'>
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className='md:hidden p-2 text-forest'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label='Toggle menu'
            >
              {isMobileMenuOpen ? (
                <X className='w-6 h-6' />
              ) : (
                <Menu className='w-6 h-6' />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className='md:hidden py-4 border-t border-sage/20'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='block py-3 text-forest hover:text-sage transition-colors duration-300 font-medium'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {showCart && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setShowCart(false)}
              className='fixed inset-0 bg-black/40 backdrop-blur-sm z-40'
            />

            {/* Cart Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className='fixed right-0 top-0 h-screen w-full md:w-96 bg-gradient-to-b from-white to-cream/50 shadow-2xl z-40 flex flex-col overflow-hidden'
            >
              {/* Cart Header */}
              <div className='bg-gradient-to-r from-sage to-sage-light text-white p-6 flex items-center justify-between'>
                <h2 className='text-2xl font-bold'>Shopping Cart</h2>
                <button
                  onClick={() => setShowCart(false)}
                  className='p-2 hover:bg-white/20 rounded-lg transition-all duration-300'
                  aria-label='Close cart'
                >
                  <X className='w-6 h-6' />
                </button>
              </div>

              {/* Cart Items */}
              <div className='flex-1 overflow-y-auto px-6 py-6'>
                {cartItems.length === 0 ? (
                  <div className='flex flex-col items-center justify-center h-full text-center'>
                    <ShoppingCart className='w-16 h-16 text-sage/30 mb-4' />
                    <p className='text-forest/70 text-lg font-medium'>Your cart is empty</p>
                    <p className='text-forest/50 text-sm mt-2'>Add items to get started</p>
                  </div>
                ) : (
                  <div className='space-y-4'>
                    {cartItems.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className='bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-sage/10'
                      >
                        <div className='flex items-start justify-between mb-3'>
                          <div className='flex-1'>
                            <p className='font-semibold text-forest text-lg'>
                              {item.bottles} Bottle{item.bottles > 1 ? 's' : ''}
                            </p>
                            <p className='text-sm text-forest/60'>
                              ${item.pricePerBottle}/each
                            </p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className='p-2 text-honey hover:bg-honey/10 rounded-lg transition-all duration-300'
                            aria-label='Remove item'
                          >
                            <Trash2 className='w-5 h-5' />
                          </button>
                        </div>
                        <div className='flex items-center justify-between bg-sage/5 rounded-lg px-4 py-2'>
                          <span className='text-forest/70'>Quantity:</span>
                          <span className='font-bold text-forest'>{item.quantity}</span>
                        </div>
                        <div className='mt-3 flex items-center justify-between'>
                          <span className='text-forest/70'>Subtotal:</span>
                          <span className='text-lg font-bold text-sage'>
                            ${(item.total * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Cart Footer */}
              {cartItems.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='border-t border-sage/20 bg-white p-6 space-y-4'
                >
                  <div className='space-y-2'>
                    <div className='flex justify-between text-forest/70'>
                      <span>Subtotal:</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className='flex justify-between text-forest/70 text-sm'>
                      <span>Shipping:</span>
                      <span>FREE</span>
                    </div>
                    <div className='border-t border-sage/20 pt-3 flex justify-between text-xl font-bold text-forest'>
                      <span>Total:</span>
                      <span className='text-sage'>${cartTotal.toFixed(2)}</span>
                    </div>
                  </div>
                  <button className='w-full bg-gradient-to-r from-sage to-sage-light hover:shadow-lg hover:shadow-sage/30 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105'>
                    Proceed to Checkout
                  </button>
                  <button
                    onClick={() => {
                      clearCart();
                      setShowCart(false);
                    }}
                    className='w-full bg-forest/10 hover:bg-forest/20 text-forest font-semibold py-3 rounded-lg transition-all duration-300'
                  >
                    Clear Cart
                  </button>
                  <button
                    onClick={() => setShowCart(false)}
                    className='w-full text-forest/60 hover:text-forest font-medium py-2 transition-colors duration-300'
                  >
                    Continue Shopping
                  </button>
                </motion.div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
