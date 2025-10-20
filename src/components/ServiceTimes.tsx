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
                    <p className="font-semibold">First Service: 9:00 AM</p>
                    <p className="font-semibold">Second Service: 11:00 AM</p>
                    <p className="text-sm text-gray-600 mt-2">
                      Children's ministry available during all services
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
                  <p>Friday Youth Night: 7:00 PM</p>
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
                    123 Church Street<br />
                    Cityville, ST 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-5 h-5 text-primary-600 mt-1 mr-3" />
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-5 h-5 text-primary-600 mt-1 mr-3" />
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">info@soteriachurch.org</p>
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
              {/* Placeholder for map - Replace with actual Google Maps embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2176046179505!2d-73.98731492346667!3d40.75797033522475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Church location map"
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

