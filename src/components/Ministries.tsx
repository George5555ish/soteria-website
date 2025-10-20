import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Heart, Users, BookOpen, Music, Baby, HandHeart } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const ministries = [
  {
    icon: Heart,
    title: 'Worship & Prayer',
    description: 'Experience powerful worship and join us in prayer as we seek God together.',
    color: 'text-rose-600',
    bgColor: 'bg-rose-100',
  },
  {
    icon: Users,
    title: 'Community Groups',
    description: 'Connect with others through small groups focused on fellowship and spiritual growth.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    icon: BookOpen,
    title: 'Bible Study',
    description: 'Dive deeper into Scripture with our weekly Bible study programs for all ages.',
    color: 'text-amber-600',
    bgColor: 'bg-amber-100',
  },
  {
    icon: Music,
    title: 'Youth Ministry',
    description: 'Engaging programs designed to help young people grow in faith and friendship.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    icon: Baby,
    title: "Children's Ministry",
    description: 'Age-appropriate teaching and activities to help children discover God\'s love.',
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    icon: HandHeart,
    title: 'Outreach & Missions',
    description: 'Serve our local community and support global missions to spread the Gospel.',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100',
  },
]

const Ministries = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      })

      // Stagger animate cards
      gsap.from(cardsRef.current?.querySelectorAll('.ministry-card') || [], {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 md:px-8 lg:px-16 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-16">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Get Involved
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-4 mb-6">
            Our Ministries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover opportunities to connect, grow, and serve in our vibrant community
          </p>
        </div>

        {/* Cards Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry, index) => {
            const Icon = ministry.icon
            return (
              <div
                key={index}
                className="ministry-card group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
              >
                <div className={`${ministry.bgColor} ${ministry.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-serif text-gray-900 mb-4">
                  {ministry.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {ministry.description}
                </p>

                <div className="mt-6 text-secondary-600 font-semibold flex items-center group-hover:text-secondary-700">
                  Learn More
                  <span className="inline-block ml-2 transition-transform group-hover:translate-x-2">→</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Explore All Ministries
          </button>
        </div>
      </div>
    </section>
  )
}

export default Ministries

