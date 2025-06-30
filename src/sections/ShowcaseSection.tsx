import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ShowcaseSection() {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const cards = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    cards.forEach((card, idx) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (idx + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={project1Ref} className="first-project-wrapper">
            <div className="image-wrapper">
              {/* PUT IMAGE OF PORTFOLIO */}
              {/* <img src="" alt="Previous Portfolio website" /> */}
            </div>
            <div className="text-content">
              <h2>Previous Portfolio website</h2>
              <p className="text-white-50 md:text-xl">
                My basic portfolio built with React, TypeScript & TailwindCSS.
                Its responsive design and usage of JavaScript libraries allows
                users to contact me whether they are on a Desktop device or on
                Mobile.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#FFEFDB]">
                {/* PUT IMAGE OF HANGMAN */}
                {/* <img src="" alt="Hangman Game" /> */}
              </div>
              <h2>Hangman Game</h2>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#FFE7EB]">
                {/* PUT IMAGE OF VIA-Outdoors */}
                {/* <img src="" alt="VIA-Outdoors - Forum" /> */}
              </div>
              <h2>VIA-Outdoors - Forum</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
