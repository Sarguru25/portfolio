"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { IconCloud } from "./Intro";

const slugs = [
  "typescript", "javascript", "dart", "java", "react", "flutter",
  "android", "html5", "css3", "nodedotjs", "express", "nextdotjs",
  "prisma", "amazonaws", "postgresql", "firebase", "nginx", "vercel",
  "testinglibrary", "jest", "cypress", "docker", "git", "jira",
  "github", "gitlab", "visualstudiocode", "androidstudio",
  "sonarqube", "figma",
];

export function IconCloudDemo({ onComplete }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          onComplete?.(); 
        }
      });

      tl.fromTo(
        containerRef.current,
        { scale: 0.1, opacity: 0 },
        {
          scale: 1.2,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
        }
      )
        .to({}, { duration: 1.7 })
        .to(containerRef.current, {
          scale: 40,
          opacity: 0,
          duration: 2,
          ease: "power4.inOut",
        });

    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg bg-transparent px-20 pb-20 pt-8"
    >
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
