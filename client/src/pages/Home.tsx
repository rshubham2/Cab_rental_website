import Hero from '@/sections/Hero';
import Features from '@/sections/Features';
import About from '@/sections/About';
import Services from '@/sections/Services';
import Booking from '@/sections/Booking';
import Testimonials from '@/sections/Testimonials';
import FAQ from '@/sections/FAQ';
import Contact from '@/sections/Contact';
import CTA from '@/sections/CTA';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>RoadTrip India - Pan-India Chauffeur Driven Cab Services</title>
        <meta name="description" content="Experience premium chauffeur-driven cab services across 2000+ cities in India. Outstation trips, local travel, airport transfers, and one-way drops." />
        <meta property="og:title" content="RoadTrip India - Pan-India Chauffeur Driven Cab Services" />
        <meta property="og:description" content="Premium cab services for outstation trips, local travel, airport transfers, and one-way drops across 2000+ cities in India." />
        <meta property="og:type" content="website" />
      </Helmet>
      <main>
        <Hero />
        <Features />
        <About />
        <Services />
        <Booking />
        <Testimonials />
        <FAQ />
        <Contact />
        <CTA />
      </main>
    </>
  );
};

export default Home;
