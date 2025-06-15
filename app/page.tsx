import Header from '@/components/Header'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import About from '@/components/sections/About'
import CarOptions from '@/components/sections/CarOptions'
import ScrollingMap from '@/components/ScrollingMap'
import TourPackages from '@/components/sections/TourPackages'
import Booking from '@/components/sections/Booking'
import FAQ from '@/components/sections/FAQ'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <About />
      <CarOptions />
      <ScrollingMap />
      <TourPackages />
      <Booking />
      <FAQ />
      <CTA />
      <Footer />
      <BackToTop />
    </main>
  )
}