import { useEffect, useRef } from "react";
import { heroAnimation } from "./../animantions/gsapAnimations";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import gsap from "gsap";

gsap.registerPlugin(ScrollToPlugin);

export default function Hero() {
  const heroRef = useRef(null);
  const blobRefs = useRef([]);

  useEffect(() => {
    // Hero entrance animation
    heroAnimation(heroRef.current);

    // Floating blobs animation
    blobRefs.current.forEach((el, i) => {
      gsap.to(el, {
        y: "+=30",
        repeat: -1,
        yoyo: true,
        duration: 8 + i,
        ease: "sine.inOut",
      });

      gsap.to(el, {
        scale: 1.12,
        repeat: -1,
        yoyo: true,
        duration: 10 + i,
        ease: "sine.inOut",
      });
    });

    // Mouse parallax
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;

      blobRefs.current.forEach((blob, i) => {
        gsap.to(blob, {
          x: x * (i + 1),
          y: y * (i + 1),
          duration: 1.5,
          ease: "power3.out",
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleScrollToContact = () => {
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: "#Contact", offsetY: 100 },
      ease: "power3.inOut",
    });
  };

  return (
    <section
      id="Project"
      className="
        relative flex items-center justify-center
        text-center overflow-hidden
        pt-24 mt-28
        bg-gradient-to-br from-[#0B0B0B] via-[#111111] to-[#0B0B0B]
        text-[#F5F5F5]
        min-h-[500px] sm:min-h-[600px] md:min-h-[700px]
      "
    >
      {/* 🔮 PREMIUM BACKGROUND BLOBS */}
      <div
        ref={(el) => (blobRefs.current[0] = el)}
        className="
          absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[420px] md:h-[420px]
          bg-gradient-to-br from-[#D4AF37]/40 to-[#D4AF37]/10
          rounded-full top-[-80px] sm:top-[-100px] md:top-[-120px]
          left-[-80px] sm:left-[-100px] md:left-[-120px]
          blur-2xl
        "
      />
      <div
        ref={(el) => (blobRefs.current[1] = el)}
        className="
          absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px]
          bg-gradient-to-br from-[#D4AF37]/35 to-transparent
          rounded-full bottom-[-80px] sm:bottom-[-90px] md:bottom-[-100px]
          right-[-80px] sm:right-[-90px] md:right-[-100px]
          blur-2xl
        "
      />
      <div
        ref={(el) => (blobRefs.current[2] = el)}
        className="
          absolute w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px]
          bg-gradient-to-br from-[#D4AF37]/30 to-transparent
          rounded-full top-1/3 right-1/4 blur-xl
        "
      />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center px-4 sm:px-6 md:px-6 lg:px-8">
        {/* Eyebrow */}
        <p className="mb-4 sm:mb-6 text-xs sm:text-sm tracking-widest uppercase text-[#D4AF37]">
          Premium Web & Brand Systems
        </p>

        {/* Heading */}
        <h1
          ref={heroRef}
          className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            font-semibold leading-snug sm:leading-tight md:leading-tight
            max-w-xs sm:max-w-lg md:max-w-4xl
          "
        >
          We turn growing businesses into
          <span className="block text-[#D4AF37] mt-2">
            premium digital brands
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-white/70 max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-2xl">
          High-conversion websites and brand systems designed to
          attract clients, build trust, and scale your business —
          without chasing leads.
        </p>

        {/* CTA */}
        <div className="mt-6 sm:mt-10">
          <button
            onClick={handleScrollToContact}
            className="
              px-6 sm:px-10 py-3 sm:py-4 rounded-lg
              border border-[#D4AF37]
              text-sm sm:text-base md:text-lg
              text-[#D4AF37]
              font-medium tracking-wide
              transition-all duration-300
              hover:bg-[#D4AF37]
              hover:text-black
            "
          >
            Start Your Project
          </button>
        </div>

        {/* Trust line */}
        <p className="mt-6 sm:mt-12 text-xs sm:text-sm md:text-sm text-white/40 max-w-xs sm:max-w-md md:max-w-lg">
          Trusted by startups, agencies & service businesses worldwide
        </p>
      </div>
    </section>
  );
}
