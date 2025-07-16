import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { cards } from "../constants";

const Services = () => {
  return (
    <div id="services">
      <div className="h-52 flex flex-col sm:items-center justify-center items-start px-4">
        <p className="font-medium mb-2 uppercase sm:text-start">⚡Our Services</p>
        <h2
            // ref={titleRef}
            className="text-3xl md:text-4xl font-bold leading-tight mb-4"
          >
            Specialized Electrical Services - From
            <span className="text-amber-500"> Domestic to Industrial Projects</span>
          </h2>
      </div>
      <HorizontalScroll />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold Capitalize text-neutral-500">
          Professional electrical solutions for every need.
        </span>
      </div>
    </div>
  );
};

const HorizontalScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
        <div className="absolute inset-0 overflow-hidden">
        
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
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
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-6">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative sm:h-[450px] sm:w-[450px] h-[250px] w-[250px] overflow-hidden rounded-2xl"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-xl font-black uppercase backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default Services;