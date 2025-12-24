import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Features() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])
  const dividerRef = useRef(null)

  const items = [
    { number: "01", title: "Instant Authority", desc: "Your website positions you as a serious brand in seconds — before visitors even read a word." },
    { number: "02", title: "Crystal-Clear Messaging", desc: "Visitors instantly understand what you offer, who it’s for, and why they should care." },
    { number: "03", title: "Designed to Convert", desc: "Every layout and interaction is crafted to guide users toward action." },
    { number: "04", title: "Premium Brand Perception", desc: "Your business looks established, trustworthy, and worth higher prices." },
    { number: "05", title: "Built for Growth", desc: "Scalable structure, fast performance, future-ready design." },
    { number: "06", title: "Strategy Before Design", desc: "We design systems that attract, convince, and convert." },
  ]

  useLayoutEffect(() => {
    cardsRef.current = []

    const ctx = gsap.context(() => {
      // Animate full-width divider
      if (dividerRef.current) {
        gsap.fromTo(
          dividerRef.current,
          { width: 0 },
          {
            width: "100%",
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 95%",
              toggleActions: "play none none none",
            },
          }
        )
      }

      // Animate cards
      if (cardsRef.current.length) {
        gsap.from(cardsRef.current, {
          opacity: 0,
          y: 80,
          stagger: 0.25,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
    id='Features'
    ref={sectionRef} className=" text-[#F5F5F5] px-11 py-32">
      {/* HEADING */}
      <div className="max-w-4xl mx-auto text-center mb-20 relative">
        {/* Full-width animated divider */}
        <div
          ref={dividerRef}
          className="h-[3px] bg-[#D4AF37] mx-auto mb-6 block"
        />

        <p className="text-sm tracking-[0.3em] uppercase text-[#D4AF37] mb-6">
          Why it works
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
          Websites built to
          <span className="block text-[#D4AF37] mt-2">earn trust & drive action</span>
        </h2>

        <p className="mt-6 text-lg text-white/60">
          Design alone doesn’t convert. Strategy does.
        </p>
      </div>

      {/* CARDS */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {items.map((item, i) => (
          <div
            key={item.number}
            ref={(el) => (cardsRef.current[i] = el)}
            className="group relative p-10 rounded-2xl bg-[#111111] border border-[#D4AF37]/10 transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/40"
          >
            <span className="absolute top-6 right-6 text-6xl font-bold text-[#D4AF37]/10 transition">
              {item.number}
            </span>

            <h3 className="text-xl font-medium mb-4">{item.title}</h3>
            <p className="text-white/60 leading-relaxed">{item.desc}</p>

            <div className="mt-8 h-[1px] w-0 bg-[#D4AF37] transition-all duration-500 group-hover:w-full" />
          </div>
        ))}
      </div>
    </section>
  )
}
