import { Zap, Award, BadgeCheck, Projector } from "lucide-react";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);


const Hero = () => {
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const split = new SplitText(headingRef.current, { type: "words,chars" });
    const line = new SplitText(subtitleRef.current, { type: "lines" });

    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 1 }
    });

    tl.from(split.words, {
      x: 50,
      opacity: 0,
      stagger: 0.03,
    })
      .from(line.lines, {
        y: 20,
        opacity: 0,
        duration: 1.5,
      }, "-=0.5");
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          src="/videos/background.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div className="absolute inset-0 bg-gray-900/80"></div> */}

      <div className="absolute inset-0 overflow-hidden">
        
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            // ref={addToRefs}
            className="absolute opacity-20 electric-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${15 + Math.random() * 30}px`,
              height: `${15 + Math.random() * 30}px`,
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full shadow-lg shadow-orange-500/50"></div>
          </div>
        ))}
        
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,165,0,0.3) 2px, transparent 1px), linear-gradient(90deg, rgba(255,165,0,0.3) 2px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>

        
        <div className="absolute top-20 left-10 w-32 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-30 animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-10 text-center w-full mt-16">
        <div className="flex flex-col items-center justify-center">
          <h1
            ref={headingRef}
            className="max-w-3xl text-3xl sm:text-5xl font-bold mb-4 leading-tight">
            Powering Industries with Expert Electrical Solutions
          </h1>
          <p
            ref={subtitleRef}
            className="text-sm md:text-base mb-4 pr-4">
            Your trusted partner for domestic, commercial, and industrial electrical solutions.
          </p>
          <button className="text-lg flex items-center mb-4">
            <Zap className="mr-2 h-5 w-5" color="orange" />
            Request a Quote
          </button>
        </div>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col gap-2 items-center space-x-3 p-4 rounded-lg bg-plain">
              <div className="bg-primary-glow/20">
                <Award className="h-6 w-6" color="orange" />
              </div>
              <div className="flex flex-col items-center">
                <div className="font-semibold">Quality Guaranteed</div>
                <div className="text-sm opacity-80 text-center">100% satisfaction guarantee on work</div>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center space-x-3 p-4 rounded-lg bg-plain">
              <div className="bg-primary-glow/20">
                <BadgeCheck className="h-6 w-6" color="orange" />
              </div>
              <div className="flex flex-col items-center">
                <div className="font-semibold">Expert Service</div>
                <div className="text-sm opacity-80 text-center">23+ years experience</div>
              </div>
            </div>
            <div className="flex flex-col gap-2 items-center space-x-3 p-4 rounded-lg bg-plain">
              <div className="bg-primary-glow/20">
                <Projector className="h-6 w-6" color="orange" />
              </div>
              <div className="flex flex-col items-center">
                <div className="font-semibold">Projects</div>
                <div className="text-sm opacity-80 text-center">300+ projects completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

