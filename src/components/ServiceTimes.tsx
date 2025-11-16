import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Clock, MapPin, Phone, Mail } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const ServiceTimes = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      })

      gsap.from(mapRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
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
      className="py-24 px-4 md:px-8 lg:px-16 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Service Times & Contact Info */}
          <div ref={contentRef}>
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
              Visit Us
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mt-4 mb-8">
              Service Times & Location
            </h2>

            {/* Service Times */}
            <div className="bg-gradient-to-br from-secondary-50 to-primary-50 rounded-2xl p-8 mb-8">
              <div className="flex items-start mb-6">
                <Clock className="w-6 h-6 text-primary-600 mt-1 mr-4" />
                <div>
                  <h3 className="text-xl font-serif text-gray-900 mb-3">
                    Sunday Services
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <p className="font-semibold">Sunday Service: 11:00 AM</p>
                    <p className="text-sm text-gray-600 mt-2">
                      Children's ministry is available
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Midweek Services
                </h4>
                <div className="space-y-2 text-gray-700">
                  <p>Wednesday Bible Study: 6:30 PM</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-600 mt-1 mr-3" />
                <div>
                  <p className="font-semibold text-gray-900">Address</p>
                  <p className="text-gray-600">
                    Ashland Burghley<br />
                    Tufnell Park London
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-5 h-5 text-primary-600 mt-1 mr-3" />
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p className="text-gray-600">07380 432206</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-5 h-5 text-primary-600 mt-1 mr-3" />
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">ukparish@soteriabiblechurch.org</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Get Directions
              </button>
            </div>
          </div>

          {/* Map */}
          <div ref={mapRef} className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              {/* Google Maps embed for Ashland Burghley, Tufnell Park, London */}
              <iframe
                src="https://www.google.com/maps?q=Ashland+Burghley+Tufnell+Park+London&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Church location map - Ashland Burghley, Tufnell Park, London"
              ></iframe>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-secondary-100 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceTimes

