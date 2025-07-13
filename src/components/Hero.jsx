import { Zap, Award, BadgeCheck } from "lucide-react";
import heroImage from "/images/banner-home.png";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);


const Hero = () => {
  const headingRef = useRef(null);

  useEffect(() => {
  const split = new SplitText(headingRef.current, { type: "words,chars" });

  gsap.from(split.words, {
    x: 50,
    opacity: 0,
    stagger: 0.03,
    ease: "power3.out",
    duration: 1,
  });
}, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})`, backdropFilter: 'blur(30px)' }}
      >
        <div className="absolute inset-0 bg-gradient-hero/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container max-w-7xl mx-auto px-6 sm:px-4 lg:px-4">
        <div className="max-w-3xl  rounded-2xl p-4">
          <h1
          ref={headingRef} 
          className="max-w-3xl text-3xl sm:text-5xl font-bold mb-6 leading-tight">
            Powering Industries with Expert Electrical Solutions​
          </h1>
          <p className="text-sm md:text-base text-primary-foreground/90 mb-8 animate-fade-in">
            Your trusted partner for domestic, commercial, and industrial electrical solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12 max-w-fit">
            <button variant="hero" size="lg" className="text-lg flex items-center">
              <Zap className="mr-2 h-5 w-5" />
              Request a Quote
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
            <div className="flex flex-col gap-2 items-center space-x-3 text-primary-foreground/90 p-2 rounded-lg radial-gradient">
              <div className="bg-primary-glow/20">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <div className="flex flex-col items-center">
                <div className="font-semibold">Quality Guaranteed</div>
                <div className="text-sm opacity-80 text-center">100% satisfaction guarantee on all our electrical work</div>
              </div>
            </div>  
            <div className="flex flex-col gap-2 items-center space-x-3 text-primary-foreground/90 p-2 rounded-lg radial-gradient">
              <div className="bg-primary-glow/20">
                <BadgeCheck className="h-6 w-6 text-accent" />
              </div>
              <div className="flex flex-col items-center">
                <div className="font-semibold">Expert Service</div>
                <div className="text-sm opacity-80 text-center">23+ years experience</div>
              </div>
            </div>         
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;