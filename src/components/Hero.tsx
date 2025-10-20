import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronDown } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on background
      gsap.to(bgRef.current, {
        yPercent: 50,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      // Fade out content on scroll
      gsap.to(contentRef.current, {
        opacity: 0,
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    })
  }

  return (
    <section
      ref={heroRef}
      className="relative h-screen overflow-hidden"
    >
      {/* Background with parallax */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 text-shadow-lg">
          Welcome Home
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-100 mb-4 max-w-3xl text-shadow">
          Soteria Church
        </p>
        <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl text-shadow">
          A community of faith, hope, and love where everyone belongs
        </p>
        
        <button className="group bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
          Join Us This Sunday
          <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
        </button>

        {/* Scroll indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          aria-label="Scroll to content"
        >
          <ChevronDown className="w-8 h-8 text-white" />
        </button>
      </div>
    </section>
  )
}

export default Hero

