"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollMotion() {
  useEffect(() => {
    const context = gsap.context(() => {
      const sections = gsap.utils.toArray(
        "main section:not(#home)"
      );

      sections.forEach((section) => {
        const elements = section.querySelectorAll(
          "h2, h3, article"
        );

        if (!elements.length) return;

        gsap.fromTo(
          elements,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.08,
            ease: "power3.out",

            scrollTrigger: {
              trigger: section,
              start: "top 78%",
              once: true,
            },
          }
        );
      });
    });

    return () => context.revert();
  }, []);

  return null;
}