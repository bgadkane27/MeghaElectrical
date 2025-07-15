import { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { Phone, Menu, X, Zap } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { navLinks } from '../constants';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useGSAP(() => {
    // Header entrance animation
    gsap.fromTo(headerRef.current, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    // Logo animation with electric effect
    gsap.fromTo(logoRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, ease: "elastic.out(1, 0.3)", delay: 0.3 }
    );

    // Navigation items stagger animation
    gsap.fromTo(navRef.current?.children || [],
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out", delay: 0.5 }
    );

    // Continuous glow animation for the lightning bolt
    gsap.to(".lightning-glow", {
      textShadow: "0 0 20px #fbbf24, 0 0 30px #f59e0b, 0 0 40px #d97706",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
    if (!isMenuOpen) {
      // Opening animation
      gsap.fromTo(mobileMenuRef.current,
        { opacity: 0, y: -20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  };

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-lg"
    >
      <div className="container max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <div ref={logoRef} className="flex items-center space-x-3 group">
            {/* <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
              <Zap className="h-6 w-6 text-yellow-300 lightning-glow" />
            </div> */}
            <span className="sm:text-2xl text-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-500">
              Megha⚡Electrical
            </span>
          </div>

          {/* Enhanced Navigation */}
          <nav ref={navRef} className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="relative font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 group"
              >
                {link.title}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            
            {/* Enhanced CTA Button */}
            <a
              href="tel:+1234567890"
              className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Phone className="h-4 w-4 relative z-10 group-hover:animate-pulse" />
              <span className="relative z-10">Call Now</span>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
          </nav>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-3 text-gray-700 hover:text-blue-600 transition-all duration-300 hover:bg-blue-50 rounded-lg"
          >
            <div className="relative">
              {isMenuOpen ? (
                <X className="h-6 w-6 transform rotate-90 transition-transform duration-300" />
              ) : (
                <Menu className="h-6 w-6 hover:scale-110 transition-transform duration-300" />
              )}
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div 
            ref={mobileMenuRef}
            className="md:hidden mt-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 border border-gray-200/50"
          >
            <nav className="flex flex-col space-y-5">
              {navLinks.map((link, index) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 py-2 px-4 rounded-lg hover:bg-blue-50 transform hover:translate-x-2"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {link.title}
                </a>
              ))}
              <a
                href="tel:+1234567890"
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-medium text-center mt-4 hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;