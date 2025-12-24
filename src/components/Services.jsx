import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { FaLaptopCode, FaBullseye, FaPalette, FaTachometerAlt } from "react-icons/fa"

gsap.registerPlugin(ScrollTrigger)

export default function Services() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  const services = [
    {
      icon: <FaLaptopCode className="text-4xl text-[#D4AF37] mb-4" />,
      title: "Premium Websites",
      desc: "Big-brand design that builds trust, authority, and converts visitors into loyal customers.",
    },
    {
      icon: <FaBullseye className="text-4xl text-[#D4AF37] mb-4" />,
      title: "Conversion Landing Pages",
      desc: "High-performing pages designed with data-backed strategies to maximize leads and sales.",
    },
    {
      icon: <FaPalette className="text-4xl text-[#D4AF37] mb-4" />,
      title: "UI/UX & Brand Strategy",
      desc: "We craft designs aligned with your business goals, ensuring clarity, usability, and impact.",
    },
    {
      icon: <FaTachometerAlt className="text-4xl text-[#D4AF37] mb-4" />,
      title: "Custom Dashboards",
      desc: "Powerful internal tools to manage your operations, analytics, and reporting efficiently.",
    },
  ]

  useLayoutEffect(() => {
    cardsRef.current = []

    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 60,
        stagger: 0.2,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
    id='Services'
      ref={sectionRef}
      className="py-32  text-[#F5F5F5]"
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="h-[3px] w-24 bg-[#D4AF37] mx-auto mb-6 rounded-full" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How We Help Your Business Grow
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            We combine strategy, design, and cutting-edge technology to create impactful solutions that drive growth, increase conversions, and build brand authority.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((s, i) => (
            <div
              key={i}
              ref={(el) => el && cardsRef.current.push(el)}
              className="group bg-[#111111] p-10 rounded-2xl border border-[#D4AF37]/10 hover:border-[#D4AF37]/40 transition-all duration-500 shadow-xl hover:shadow-2xl"
            >
              <div className="mb-4">{s.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-[#D4AF37] transition">
                {s.title}
              </h3>
              <p className="text-white/60 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
