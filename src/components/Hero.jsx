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

    // Mouse parallax (premium effect)
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
        relative h-[500px]
        flex items-center justify-center
        text-center overflow-hidden
        pt-24 mt-30
        bg-gradient-to-br from-[#0B0B0B] via-[#111111] to-[#0B0B0B]
        text-[#F5F5F5]
      "
    >
      {/* 🔮 PREMIUM BACKGROUND BLOBS */}
      <div
        ref={(el) => (blobRefs.current[0] = el)}
        className="
          absolute w-[420px] h-[420px]
          bg-gradient-to-br from-[#D4AF37]/40 to-[#D4AF37]/10
          rounded-full top-[-120px] left-[-120px]
          blur-2xl
        "
      />
      <div
        ref={(el) => (blobRefs.current[1] = el)}
        className="
          absolute w-[320px] h-[320px]
          bg-gradient-to-br from-[#D4AF37]/35 to-transparent
          rounded-full bottom-[-100px] right-[-100px]
          blur-2xl
        "
      />
      <div
        ref={(el) => (blobRefs.current[2] = el)}
        className="
          absolute w-[240px] h-[240px]
          bg-gradient-to-br from-[#D4AF37]/30 to-transparent
          rounded-full top-1/3 right-1/4
          blur-xl
        "
      />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center px-6">
        {/* Eyebrow */}
        <p className="mb-6 text-sm tracking-widest uppercase text-[#D4AF37]">
          Premium Web & Brand Systems
        </p>

        {/* Heading */}
        <h1
          ref={heroRef}
          className="text-5xl md:text-6xl font-semibold leading-tight max-w-4xl"
        >
          We turn growing businesses into
          <span className="block text-[#D4AF37] mt-2">
            premium digital brands
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg text-white/70 max-w-2xl">
          High-conversion websites and brand systems designed to
          attract clients, build trust, and scale your business —
          without chasing leads.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <button
            onClick={handleScrollToContact}
            className="
              px-10 py-4 rounded-lg
              border border-[#D4AF37]
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
        <p className="mt-12 text-sm text-white/40">
          Trusted by startups, agencies & service businesses worldwide
        </p>
      </div>
    </section>
  );
}
