/**
 * @copyright 2025 Alice Dias
 * @license Apache-2.0
 */

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Review from "./components/Review";
import Skill from "./components/Skill";
import Work from "./components/Work";
import { ReactLenis } from 'lenis/react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import Education from "./components/Education";
import Experience from "./components/Experience";


gsap.registerPlugin(useGSAP, ScrollTrigger); // register the hook to avoid React version discrepancies 


const App = () => {
  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up');

    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: '-200 bottom',
          end: 'bottom 80%',
          scrub: true
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      })
    });
  });

  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Experience />
        <Education />
        <Work />
        <Volunteer />
        <Review />
        <Contact />
      </main>
      <Footer />
    </ReactLenis >
  )
}

export default App;