import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const LoadingScreen = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const verseRef = useRef<HTMLDivElement>(null)
  const crossRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timeline = gsap.timeline()

    // Initial setup
    gsap.set(verseRef.current, { opacity: 0, scale: 0.5, rotationY: -180 })
    gsap.set(crossRef.current, { opacity: 0, scale: 0 })

    // Animation sequence
    timeline
      // Fade in cross first
      .to(crossRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'back.out(1.7)',
      })
      // Then animate the verse
      .to(verseRef.current, {
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 1.2,
        ease: 'power3.out',
      }, '-=0.2')
      // Rotate verse continuously
      .to(verseRef.current, {
        rotationY: 360,
        duration: 2,
        ease: 'power1.inOut',
        repeat: 0,
      })
      // Fade out everything
      .to([containerRef.current, verseRef.current, crossRef.current], {
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        ease: 'power2.in',
      }, '+=0.3')

    return () => {
      timeline.kill()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900"
      style={{ perspective: '1000px' }}
    >
      <div className="relative flex flex-col items-center">
        {/* Cross symbol */}
        <div
          ref={crossRef}
          className="mb-8 text-6xl md:text-8xl text-primary-400 font-serif"
          aria-hidden="true"
        >
          ✝
        </div>
        
        {/* Animated verse */}
        <div
          ref={verseRef}
          className="text-center px-8"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-4 text-shadow-lg">
            John 3:16
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl leading-relaxed">
            "For God so loved the world that he gave his one and only Son,
            that whoever believes in him shall not perish but have eternal life."
          </p>
        </div>
      </div>

      {/* Loading indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-3 h-3 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-3 h-3 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen

