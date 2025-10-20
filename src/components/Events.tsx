import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Calendar, Clock, MapPin } from 'lucide-react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

gsap.registerPlugin(ScrollTrigger)

const events = [
  {
    title: 'Sunday Worship Service',
    date: 'Every Sunday',
    time: '9:00 AM & 11:00 AM',
    location: 'Main Sanctuary',
    image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=2070&auto=format&fit=crop',
    description: 'Join us for inspiring worship, powerful messages, and fellowship.',
  },
  {
    title: 'Youth Night',
    date: 'Friday, October 25',
    time: '7:00 PM',
    location: 'Youth Center',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop',
    description: 'Games, worship, and fellowship for middle and high school students.',
  },
  {
    title: 'Community Outreach',
    date: 'Saturday, October 28',
    time: '10:00 AM',
    location: 'Downtown Area',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2073&auto=format&fit=crop',
    description: 'Serve our community through food distribution and prayer.',
  },
  {
    title: 'Women\'s Bible Study',
    date: 'Wednesdays',
    time: '6:30 PM',
    location: 'Fellowship Hall',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2049&auto=format&fit=crop',
    description: 'Dive deep into Scripture with fellow sisters in faith.',
  },
  {
    title: 'Fall Festival',
    date: 'Saturday, November 2',
    time: '2:00 PM',
    location: 'Church Grounds',
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=2031&auto=format&fit=crop',
    description: 'Family-friendly activities, food, and fun for all ages.',
  },
]

const Events = () => {
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
      className="py-24 px-4 md:px-8 lg:px-16 bg-secondary-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-16">
          <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">
            What's Happening
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mt-4 mb-6">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join us for these exciting opportunities to worship, learn, and connect
          </p>
        </div>

        {/* Events Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="events-swiper pb-12"
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl overflow-hidden shadow-xl h-full flex flex-col">
                {/* Event Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                {/* Event Details */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-serif text-gray-900 mb-4">
                    {event.title}
                  </h3>

                  <div className="space-y-2 mb-4 flex-1">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2 text-primary-600" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-primary-600" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-primary-600" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">
                    {event.description}
                  </p>

                  <button className="w-full bg-secondary-600 hover:bg-secondary-700 text-white py-2 rounded-lg font-semibold transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* View All Events */}
        <div className="text-center mt-12">
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
            View Full Calendar
          </button>
        </div>
      </div>

      <style>{`
        .events-swiper .swiper-button-next,
        .events-swiper .swiper-button-prev {
          color: white;
          background: rgba(197, 138, 60, 0.8);
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }

        .events-swiper .swiper-button-next:after,
        .events-swiper .swiper-button-prev:after {
          font-size: 20px;
        }

        .events-swiper .swiper-pagination-bullet {
          background: white;
          opacity: 0.5;
        }

        .events-swiper .swiper-pagination-bullet-active {
          background: #c58a3c;
          opacity: 1;
        }
      `}</style>
    </section>
  )
}

export default Events

