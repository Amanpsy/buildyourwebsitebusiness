import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Contact() {
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        delay: 0.3,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section
      id="Contact"
      ref={sectionRef}
      className="
        relative  text-white
        py-32 px-6 md:px-20
        border-t border-[#D4AF37]/10
      "
    >
      {/* Heading */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        
        {/* Left Content */}
        <div>
          <p className="text-sm tracking-widest uppercase text-[#D4AF37] mb-4">
            Get in touch
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Let’s build something
            <span className="block text-[#D4AF37] mt-2">exceptional together</span>
          </h2>

          <p className="mt-6 text-white/70 max-w-lg">
            Whether you need a high-conversion website, a complete brand system,
            or a strategic digital revamp — we’re ready when you are.
          </p>

          <p className="mt-8 text-sm text-white/50">
            Typically respond within 24 hours.
          </p>
        </div>

        {/* Form */}
      <form
  ref={formRef}
  action="https://formsubmit.co/amankr97111@gmail.com"
  method="POST"
  className="
    bg-white/5 backdrop-blur-xl
    border border-white/10
    rounded-2xl p-10
    space-y-6
  "
>
  {/* Hidden FormSubmit configs */}
  <input type="hidden" name="_subject" value="New Contact Request — Big Business Guide" />
<input type="hidden" name="_captcha" value="false" />
<input type="hidden" name="_template" value="table" />

  {/* Optional redirect after submit */}
  {/* <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" /> */}

  <div>
    <label className="block text-sm text-white/60 mb-2">
      Your Name
    </label>
    <input
      type="text"
      name="name"
      required
      placeholder="John Doe"
      className="
        w-full bg-transparent
        border border-white/20
        rounded-lg px-4 py-3
        text-white
        focus:outline-none focus:border-[#D4AF37]
      "
    />
  </div>

  <div>
    <label className="block text-sm text-white/60 mb-2">
      Email Address
    </label>
    <input
      type="email"
      name="email"
      required
      placeholder="you@example.com"
      className="
        w-full bg-transparent
        border border-white/20
        rounded-lg px-4 py-3
        text-white
        focus:outline-none focus:border-[#D4AF37]
      "
    />
  </div>

  <div>
    <label className="block text-sm text-white/60 mb-2">
      Project Details
    </label>
    <textarea
      name="message"
      rows="4"
      required
      placeholder="Tell us about your project..."
      className="
        w-full bg-transparent
        border border-white/20
        rounded-lg px-4 py-3
        text-white
        focus:outline-none focus:border-[#D4AF37]
        resize-none
      "
    />
  </div>

  <button
    type="submit"
    className="
      w-full mt-4 py-4 rounded-lg
      bg-[#D4AF37] text-black
      font-medium tracking-wide
      transition-all duration-300
      hover:bg-[#c9a227]
    "
  >
    Send Message
  </button>
</form>

      </div>

      {/* Bottom line */}
      <p className="text-center text-sm text-white/30 mt-24">
        © {new Date().getFullYear()} Big Business Guide. All rights reserved.
      </p>
    </section>
  );
}
