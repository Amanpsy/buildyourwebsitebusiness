import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Link } from "react-scroll";
import { useGSAP } from "@gsap/react";

export default function Navbar() {
  const navRef = useRef(null);
  const buttonRef = useRef(null);
  const emblemRef = useRef(null);
  const underlineRef = useRef(null);
  const linksRef = useRef([]);
  const menuRef = useRef(null);
  const topLineRef = useRef(null);
  const bottomLineRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const tl = useRef(null);
  const iconTl = useRef(null);

  const closeMenu = () => {
    tl.current.reverse();
    iconTl.current.reverse();
    setIsOpen(false);
  };

  const [showBurger, setShowBurger] = useState(true);

  useGSAP(() => {
    gsap.set(menuRef.current, { xPercent: 100 });
    gsap.set(linksRef.current, { autoAlpha: 0, x: -30 });

    tl.current = gsap.timeline({ paused: true })
      .to(menuRef.current, {
        xPercent: 0,
        duration: 0.9,
        ease: "power3.out",
      })
      .to(
        linksRef.current,
        {
          autoAlpha: 1,
          x: 0,
          stagger: 0.12,
          duration: 0.6,
          ease: "power2.out",
        },
        "<+0.2"
      );

    iconTl.current = gsap.timeline({ paused: true })
      .to(topLineRef.current, {
        rotate: 45,
        y: 4,
        duration: 0.3,
      })
      .to(
        bottomLineRef.current,
        {
          rotate: -45,
          y: -4,
          duration: 0.3,
        },
        "<"
      );
  }, []);

  const toggleMenu = () => {
    if (isOpen) {
      tl.current.reverse();
      iconTl.current.reverse();
    } else {
      tl.current.play();
      iconTl.current.play();
    }
    setIsOpen(!isOpen);
  };

  const logoHover = () => {
    gsap.to(emblemRef.current, {
      scale: 1.05,
      boxShadow: "0 0 20px rgba(212,175,55,0.4)",
      duration: 0.3,
      ease: "power2.out",
    });

    gsap.to(underlineRef.current, {
      width: "100%",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const logoLeave = () => {
    gsap.to(emblemRef.current, {
      scale: 1,
      boxShadow: "0 0 0 rgba(0,0,0,0)",
      duration: 0.3,
    });

    gsap.to(underlineRef.current, {
      width: "0%",
      duration: 0.3,
    });
  };

  return (
    <nav
      ref={navRef}
      className="
        fixed top-0 w-full z-50
        backdrop-blur-xl border-b border-[#D4AF37]/10 flex
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-4 sm:py-6 flex justify-between items-center">
        {/* LOGO */}
        <div
          onMouseEnter={logoHover}
          onMouseLeave={logoLeave}
          className="relative flex items-center gap-3 sm:gap-4 cursor-pointer select-none"
        >
          {/* emblem */}
          <div
            ref={emblemRef}
            className="
              w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center
              border border-[#D4AF37]
              text-[#D4AF37] text-xs sm:text-sm font-semibold
              tracking-widest rounded-2xl
            "
          >
            BB
          </div>

          {/* brand */}
          <div className="leading-none">
            <h1 className="text-xs sm:text-sm font-medium tracking-[0.2em] sm:tracking-[0.25em] text-white">
              BIG BUSINESS
            </h1>
            <p className="text-[8px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] text-[#D4AF37] mt-1">
              GUIDE
            </p>

            {/* underline */}
            <span
              ref={underlineRef}
              className="block h-[1px] w-0 bg-[#D4AF37] mt-1 sm:mt-2"
            />
          </div>
        </div>

        {/* Hamburger menu for mobile */}
        <div
          onClick={toggleMenu}
          className="
            fixed z-50 flex flex-col items-center justify-center gap-1 
            transition-all duration-300 rounded-full cursor-pointer 
            w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20
            top-4 right-4 sm:top-4 sm:right-10
          "
        >
          <span
            ref={topLineRef}
            className="block w-6 sm:w-8 h-0.5 bg-white rounded-full origin-center"
          ></span>
          <span
            ref={bottomLineRef}
            className="block w-6 sm:w-8 h-0.5 bg-white rounded-full origin-center"
          ></span>
        </div>

        {/* Menu (mobile + desktop) */}
        <nav
          ref={menuRef}
          className="
            fixed top-0 right-0 h-screen w-3/4 sm:w-1/4
            z-40 px-6 sm:px-10 py-20 sm:py-28 bg-black/80 backdrop-blur-md
          "
        >
          <div className="flex flex-col mt-6 text-2xl sm:text-3xl md:text-6xl lg:text-8xl gap-y-2">
            {["Project", "Services", "Features", "Contact"].map(
              (section, index) => (
                <div
                  key={index}
                  ref={(el) => (linksRef.current[index] = el)}
                  className="my-2"
                >
                  <Link
                    className="transition-all duration-300 cursor-pointer text-white hover:text-[#D4AF37]"
                    to={`${section}`}
                    smooth
                    offset={-100} // 🔥 key fix
                    duration={800}
                    onClick={closeMenu}
                  >
                    {section}
                  </Link>
                </div>
              )
            )}
          </div>
        </nav>
      </div>
    </nav>
  );
}
