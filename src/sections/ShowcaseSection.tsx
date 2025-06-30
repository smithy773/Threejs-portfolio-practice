import { useRef } from "react";

export default function ShowcaseSection() {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
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
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                {/* PUT IMAGE OF HANGMAN */}
                {/* <img src="" alt="Hangman Game" /> */}
              </div>
              <h2>Hangman Game</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
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
