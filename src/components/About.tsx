import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface AboutProps {
  id?: string
}

const About = ({ id }: AboutProps) => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate image from left
      gsap.from(imageRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 50%',
          toggleActions: 'play none none reverse',
        },
      })

      // Animate content from right
      gsap.from(contentRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 50%',
          toggleActions: 'play none none reverse',
        },
      })

      // Animate individual elements within content
      gsap.from(contentRef.current?.querySelectorAll('.animate-item') || [], {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id={id}
      ref={sectionRef}
      className="py-24 px-4 md:px-8 lg:px-16 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop"
                alt="Church community"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-100 rounded-2xl -z-10"></div>
          </div>

          {/* Content */}
          <div ref={contentRef}>
            <div className="animate-item">
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-4 mb-6">
                A Place to Call Home
              </h2>
            </div>

            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p className="animate-item">
                For over 50 years, Soteria Bible Church has been a beacon of hope and faith in our community. 
                Our name, derived from the Greek word for "salvation," reflects our mission to bring 
                God's love and grace to all who enter our doors.
              </p>
              <p className="animate-item">
                We believe in creating a welcoming environment where people from all walks of life can 
                come together to worship, grow in faith, and serve one another. Whether you're seeking 
                answers, looking for community, or wanting to deepen your relationship with God, you'll 
                find a home here.
              </p>
              <p className="animate-item">
                Our diverse congregation is united by a common purpose: to love God, love people, and 
                make a difference in the world around us.
              </p>
            </div>

            <div className="animate-item mt-8">
              <button className="bg-secondary-600 hover:bg-secondary-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Learn More About Our Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

