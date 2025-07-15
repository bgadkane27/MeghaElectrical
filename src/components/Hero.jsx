// import { Zap, Award, BadgeCheck, Projector } from "lucide-react";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import SplitText from "gsap/SplitText";

// gsap.registerPlugin(SplitText);


// const Hero = () => {
//   const headingRef = useRef(null);
//   const subtitleRef = useRef(null);

//   useEffect(() => {
//     const split = new SplitText(headingRef.current, { type: "words,chars" });
//     const line = new SplitText(subtitleRef.current, { type: "lines" });

//     const tl = gsap.timeline({
//       defaults: { ease: "power3.out", duration: 1 }
//     });

//     tl.from(split.words, {
//       x: 50,
//       opacity: 0,
//       stagger: 0.03,
//     })
//       .from(line.lines, {
//         y: 20,
//         opacity: 0,
//         duration: 1.5,
//       }, "-=0.5");
//   }, []);

//   return (
//     <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
//       <div className="absolute inset-0 z-0">
//         <video
//           className="w-full h-full object-cover"
//           src="/videos/background.mp4"
//           autoPlay
//           loop
//           muted
//           playsInline
//         />
//       </div>
//       <div className="absolute inset-0 bg-gray-900/80"></div>

//       <div className="relative z-10 text-center w-full mt-16">
//         <div className="flex flex-col items-center justify-center">
//           <h1
//             ref={headingRef}
//             className="max-w-3xl text-3xl sm:text-5xl font-bold mb-4 leading-tight">
//             Powering Industries with Expert Electrical Solutions
//           </h1>
//           <p
//             ref={subtitleRef}
//             className="text-sm md:text-base text-primary-foreground/90 mb-4 animate-fade-in">
//             Your trusted partner for domestic, commercial, and industrial electrical solutions.
//           </p>
//           <button className="text-lg flex items-center mb-4">
//             <Zap className="mr-2 h-5 w-5" color="orange" />
//             Request a Quote
//           </button>
//         </div>
//         <div className="flex items-center justify-center">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div className="flex flex-col gap-2 items-center space-x-3 p-4 rounded-lg bg-plain">
//               <div className="bg-primary-glow/20">
//                 <Award className="h-6 w-6" color="orange" />
//               </div>
//               <div className="flex flex-col items-center">
//                 <div className="font-semibold">Quality Guaranteed</div>
//                 <div className="text-sm opacity-80 text-center">100% satisfaction guarantee on work</div>
//               </div>
//             </div>
//             <div className="flex flex-col gap-2 items-center space-x-3 p-4 rounded-lg bg-plain">
//               <div className="bg-primary-glow/20">
//                 <BadgeCheck className="h-6 w-6" color="orange" />
//               </div>
//               <div className="flex flex-col items-center">
//                 <div className="font-semibold">Expert Service</div>
//                 <div className="text-sm opacity-80 text-center">23+ years experience</div>
//               </div>
//             </div>
//             <div className="flex flex-col gap-2 items-center space-x-3 p-4 rounded-lg bg-plain">
//               <div className="bg-primary-glow/20">
//                 <Projector className="h-6 w-6" color="orange" />
//               </div>
//               <div className="flex flex-col items-center">
//                 <div className="font-semibold">Projects</div>
//                 <div className="text-sm opacity-80 text-center">300+ projects completed</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { Zap, Award, BadgeCheck, Projector } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const Hero = () => {
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);
  const heroRef = useRef(null);
  const floatingElementsRef = useRef([]);

  useEffect(() => {
    const split = new SplitText(headingRef.current, { type: "words,chars" });
    const line = new SplitText(subtitleRef.current, { type: "lines" });

    floatingElementsRef.current.forEach((el, index) => {
      gsap.to(el, {
        y: "random(-40, 40)",
        x: "random(-30, 30)",
        rotation: "random(-20, 20)",
        duration: "random(4, 8)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.3
      });
    });

    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 1 }
    });

    tl.fromTo(heroRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8 }
    )
    .from(split.words, {
      x: 100,
      y: 50,
      opacity: 0,
      rotationY: 90,
      transformOrigin: "center center",
      stagger: 0.05,
      duration: 1.2,
    }, 0.5)
    .from(line.lines, {
      y: 30,
      opacity: 0,
      duration: 1.5,
    }, "-=0.8")
    .fromTo(ctaRef.current,
      { y: 50, opacity: 0, scale: 0.8 },
      { y: 0, opacity: 1, scale: 1, duration: 1 },
      "-=0.5"
    )
    .fromTo(statsRef.current?.children || [],
      { y: 60, opacity: 0, rotationX: 45 },
      { 
        y: 0, 
        opacity: 1, 
        rotationX: 0,
        duration: 1, 
        stagger: 0.2,
        ease: "back.out(1.7)"
      },
      "-=0.3"
    );

    
    gsap.to(".electric-pulse", {
      scale: 1.15,
      filter: "brightness(1.3)",
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });

    gsap.to(".glow-text", {
      textShadow: "0 0 30px rgba(255, 165, 0, 0.8), 0 0 60px rgba(255, 165, 0, 0.4)",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });

    gsap.to(".icon-float", {
      y: -10,
      rotation: 5,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: 0.3
    });

    return () => {
      split.revert();
      line.revert();
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !floatingElementsRef.current.includes(el)) {
      floatingElementsRef.current.push(el);
    }
  };

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-orange-900/20 to-gray-900"
    >
      
      {/* <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover opacity-40"
          src="/videos/background.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-orange-900/30 to-slate-900/95"></div>
      </div> */}

      
      <div className="absolute inset-0 overflow-hidden">
        
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            ref={addToRefs}
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
            backgroundImage: `linear-gradient(rgba(255,165,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,165,0,0.3) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>

        
        <div className="absolute top-20 left-10 w-32 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-30 animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-10 text-center w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-24">
        <div className="flex flex-col items-center justify-center mb-16">
          <h1
            ref={headingRef}
            className="max-w-4xl text-4xl sm:text-6xl font-bold mb-2 glow-text drop-shadow-2xl"
          >
            Powering Industries with Expert Electrical Solutions
          </h1>
          
          <p
            ref={subtitleRef}
            className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-4xl leading-relaxed drop-shadow-lg"
          >
            Your trusted partner for domestic, commercial, and industrial electrical solutions.
          </p>
          
          <div ref={ctaRef}>
            <button className="group relative px-10 py-5 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-300 overflow-hidden transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center">
                <Zap className="mr-3 h-6 w-6 icon-float group-hover:scale-110 transition-transform duration-300" />
                Request a Quote
              </div>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>
        </div>

        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="group p-8 rounded-2xl bg-black/30 backdrop-blur-lg border border-orange-500/20 hover:bg-black/40 hover:border-orange-400/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
            <div className="flex flex-col items-center">
              <div className="mb-6 p-5 rounded-full bg-gradient-to-br from-orange-500 to-yellow-600 group-hover:shadow-2xl group-hover:shadow-orange-500/50 transition-all duration-500 icon-float">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div className="font-bold text-white text-center">
                <div className="text-2xl sm:text-3xl mb-2">Quality Guaranteed</div>
                <div className="text-sm sm:text-base opacity-80">100% satisfaction guarantee on work</div>
              </div>
            </div>
          </div>

          <div className="group p-8 rounded-2xl bg-black/30 backdrop-blur-lg border border-orange-500/20 hover:bg-black/40 hover:border-orange-400/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
            <div className="flex flex-col items-center">
              <div className="mb-6 p-5 rounded-full bg-gradient-to-br from-orange-500 to-red-600 group-hover:shadow-2xl group-hover:shadow-orange-500/50 transition-all duration-500 icon-float">
                <BadgeCheck className="h-8 w-8 text-white" />
              </div>
              <div className="font-bold text-white text-center">
                <div className="text-2xl sm:text-3xl mb-2">Expert Service</div>
                <div className="text-sm sm:text-base opacity-80">23+ years experience</div>
              </div>
            </div>
          </div>

          <div className="group p-8 rounded-2xl bg-black/30 backdrop-blur-lg border border-orange-500/20 hover:bg-black/40 hover:border-orange-400/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
            <div className="flex flex-col items-center">
              <div className="mb-6 p-5 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 group-hover:shadow-2xl group-hover:shadow-orange-500/50 transition-all duration-500 icon-float">
                <Projector className="h-8 w-8 text-white" />
              </div>
              <div className="font-bold text-white text-center">
                <div className="text-2xl sm:text-3xl mb-2">Projects</div>
                <div className="text-sm sm:text-base opacity-80">300+ projects completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-orange-400/60 rounded-full flex justify-center bg-black/20 backdrop-blur-sm">
            <div className="w-1 h-3 bg-orange-400 rounded-full mt-2 animate-pulse shadow-lg shadow-orange-400/50"></div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;