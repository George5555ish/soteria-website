import { useState, useEffect } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Ministries from './components/Ministries'
import Events from './components/Events'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import ServiceTimes from './components/ServiceTimes'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate initial load time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading && <LoadingScreen />}
      <div className={`transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Navigation />
        <Hero />
        <About id="about" />
        <Ministries />
        <Events id="events" />
        <Gallery id="gallery" />
        <Testimonials />
        <ServiceTimes />
        <Footer id="contact" />
      </div>
    </>
  )
}

export default App

