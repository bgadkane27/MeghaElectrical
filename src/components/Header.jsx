import { useState } from 'react';
import { gsap } from 'gsap';
import { Zap, Phone, Menu, X } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { navLinks } from '../constants';


const Header = () => {
  //   const headerRef = useRef<HTMLHeaderElement>(null);
  //   const logoRef = useRef<HTMLDivElement>(null);
  //   const navRef = useRef<HTMLNavElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //   useEffect(() => {
  //     const tl = gsap.timeline({ delay: 0.2 });

  //     tl.fromTo(logoRef.current,
  //       { y: -50, opacity: 0 },
  //       { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
  //     )
  //     .fromTo(navRef.current?.children || [],
  //       { y: -30, opacity: 0 },
  //       { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
  //       "-=0.4"
  //     );

  //     // Header scroll effect
  //     const handleScroll = () => {
  //       const scrollY = window.scrollY;
  //       if (scrollY > 100) {
  //         gsap.to(headerRef.current, {
  //           backgroundColor: 'rgba(255, 255, 255, 0.95)',
  //           backdropFilter: 'blur(10px)',
  //           boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  //           duration: 0.3
  //         });
  //       } else {
  //         gsap.to(headerRef.current, {
  //           backgroundColor: 'rgba(255, 255, 255, 0)',
  //           backdropFilter: 'blur(0px)',
  //           boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
  //           duration: 0.3
  //         });
  //       }
  //     };

  //     window.addEventListener('scroll', handleScroll);
  //     return () => window.removeEventListener('scroll', handleScroll);
  //   }, []);

  useGSAP(() => {
    gsap.from
  })

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      //   ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#001e29]/80"
    >
      <div className="container max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div
            //   ref={logoRef} 
            className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-pink-700 p-2 rounded-lg">
              <Zap className="h-6 w-6 text-yellow-300" />
            </div>
            <span className="sm:text-2xl text-base font-bold">Megha Electrical</span>
          </div>

          <nav
            //   ref={navRef}
            className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="hover:text-yellow-400 transition-colors duration-300"
              >
                {link.title}
              </a>
            ))}
            <a
              href="tel:+1234567890"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
            >
              <Phone className="h-4 w-4" />
              <span>Call Now</span>
            </a>
          </nav>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300"
                >
                  {link.title}
                </a>
              ))}
              <a
                href="tel:+1234567890"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full font-medium text-center"
              >
                Call Now
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;