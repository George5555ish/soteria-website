import { Facebook, Instagram, Twitter, Youtube, ChevronUp } from 'lucide-react'
import { useState, useEffect } from 'react'

interface FooterProps {
  id?: string
}

const Footer = ({ id }: FooterProps) => {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const element = document.querySelector(href)
      if (element) {
        const offset = 80 // Account for fixed navbar
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })
      }
    }
  }

  return (
    <>
      <footer id={id} className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* About Column */}
            <div>
              <h3 className="text-2xl font-serif text-white mb-4">
              Soteria Bible Church
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                A community of faith, hope, and love where everyone belongs.
                Come as you are, grow in grace, and go to serve.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary-600 flex items-center justify-center transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary-600 flex items-center justify-center transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary-600 flex items-center justify-center transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-primary-600 flex items-center justify-center transition-colors duration-300"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-primary-400 transition-colors cursor-pointer">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#events" onClick={(e) => handleLinkClick(e, '#events')} className="hover:text-primary-400 transition-colors cursor-pointer">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#gallery" onClick={(e) => handleLinkClick(e, '#gallery')} className="hover:text-primary-400 transition-colors cursor-pointer">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="hover:text-primary-400 transition-colors cursor-pointer">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" onClick={(e) => handleLinkClick(e, '#')} className="hover:text-primary-400 transition-colors cursor-pointer">
                    Give
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Resources
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" onClick={(e) => handleLinkClick(e, '#')} className="hover:text-primary-400 transition-colors cursor-pointer">
                    Prayer Requests
                  </a>
                </li>
                <li>
                  <a href="#" onClick={(e) => handleLinkClick(e, '#')} className="hover:text-primary-400 transition-colors cursor-pointer">
                    Bible Study
                  </a>
                </li>
                <li>
                  <a href="#" onClick={(e) => handleLinkClick(e, '#')} className="hover:text-primary-400 transition-colors cursor-pointer">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="hover:text-primary-400 transition-colors cursor-pointer">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Stay Connected
              </h4>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for updates and inspiration.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-primary-500 focus:outline-none text-white placeholder-gray-500"
                />
                <button
                  type="submit"
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Soteria Bible Church. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-500 hover:text-primary-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-500 hover:text-primary-400 transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-primary-500 hover:bg-primary-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 z-40"
          aria-label="Back to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </>
  )
}

export default Footer

