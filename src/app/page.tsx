import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import BookingForm from '@/components/BookingForm'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <BookingForm />
      <Contact />
      <Footer />
    </main>
  )
}