import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Award, BadgeCheck } from "lucide-react";
import { useRef } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

const About = () => {
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    const split = new SplitText(titleRef.current, { type: "words,chars" });
    const line = new SplitText(subRef.current, { type: "lines" });

    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 1 },
      scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
        toggleActions: "play none none reset",
      },
    });

    tl.from(split.words, {
      x: 50,
      opacity: 0,
      stagger: 0.03,
    })
      .from(
        line.lines,
        {
          y: 20,
          opacity: 0,
          duration: 1.5,
        },
        "-=0.5"
      )
      .from(
        cardsRef.current,
        {
          y: 30,
          opacity: 0,
          stagger: 0.2,
          duration: 1,
        },
        "-=0.8"
      );

    return () => {
      tl.kill();
      split.revert();
      line.revert();
    };
  }, []);

  return (
    <section id="about" className="pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Left: Image and Experience Card */}
        <div className="space-y-6">
          <div className="p-6 rounded-xl bg-plain">
            <h3 className="text-xl font-semibold mb-2">23+ Years Of Experience</h3>
            <p>Decades of expertise, delivering reliable electrical solutions.</p>
          </div>

          <div className="flex gap-4">
            <div className="bg-gray-200 rounded-xl w-1/2 h-40 flex items-center justify-center">
              <button className="bg-blue-600 text-white p-4 rounded-full">▶</button>
            </div>
            <div className="bg-gray-200 rounded-xl w-1/2 h-40"></div>
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="pr-4">
          <p className="font-medium mb-2 uppercase">⚡About Us</p>
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold leading-tight mb-4"
          >
            Comprehensive Electrical Services Built on{" "}
            <span className="text-amber-500">23+ Years of Trust</span>
          </h2>
          <p ref={subRef} className="mb-6 text-justify">
            Megha Electrical Services specializes in a wide range of electrical projects, from
            domestic to industrial installations and contracting. We've successfully delivered
            major projects in collaboration with electrical consultants across India. Committed
            to quality workmanship and service excellence, our company is fully authorized and
            registered with relevant authorities. With deep industry expertise, we remain
            hands-on through every stage of each project.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div
              ref={(el) => (cardsRef.current[0] = el)}
              className="sm:border-r border-0 pr-4"
            >
              <div className="mb-2">
                <Award className="w-6 h-6" color="orange" />
              </div>
              <h4 className="text-lg font-semibold mb-1">Providing Awesome Quality</h4>
              <p className="text-gray-600 text-sm">
                Focuses on efficiency, adhering to 150+ checklists for project execution.
              </p>
            </div>
            <div
              ref={(el) => (cardsRef.current[1] = el)}
              className=""
            >
              <div className="mb-2">
                <BadgeCheck className="w-6 h-6" color="orange" />
              </div>
              <h4 className="text-lg font-semibold mb-1">Providing Awesome Service</h4>
              <p className="text-gray-600 text-sm">
                Successfully executed 300+ projects, delivering high-quality solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
