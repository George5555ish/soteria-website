import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import { Quote } from 'lucide-react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    quote: "Soteria Bible Church has been a true blessing to our family. The warmth and genuine love we've experienced here has deepened our faith and given us a community we can truly call home.",
    name: "Sarah Johnson",
    role: "Member since 2018",
  },
  {
    quote: "The youth ministry changed my life. I found friends who share my faith and mentors who genuinely care about my growth. This church is more than a building—it's a family.",
    name: "Michael Chen",
    role: "Youth Ministry Participant",
  },
  {
    quote: "As a new believer, I was nervous about finding a church. The welcoming atmosphere and biblical teaching at Soteria helped me grow in my understanding of God's love.",
    name: "Emily Rodriguez",
    role: "New Member",
  },
  {
    quote: "The small groups here are incredible. We've formed deep friendships and have been able to support each other through life's challenges. I'm grateful for this community.",
    name: "David Thompson",
    role: "Small Group Leader",
  },
]

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-primary-50 to-secondary-50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-16">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-4 mb-6">
            Stories of Faith
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from members of our community about their journey with Soteria Bible Church
          </p>
        </div>

        {/* Testimonials Slider */}
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="testimonials-swiper pb-16"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-2xl p-12 md:p-16 relative">
                {/* Quote Icon */}
                <div className="absolute top-8 left-8 text-primary-200">
                  <Quote className="w-16 h-16" />
                </div>

                {/* Testimonial Content */}
                <div className="relative z-10">
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center text-white font-serif text-2xl">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .testimonials-swiper .swiper-pagination-bullet {
          background: #c58a3c;
          opacity: 0.5;
          width: 12px;
          height: 12px;
        }

        .testimonials-swiper .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </section>
  )
}

export default Testimonials

