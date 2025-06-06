import Hero from '@/sections/Hero';
import Features from '@/sections/Features';
import About from '@/sections/About';
import Services from '@/sections/Services';
import CarOptions from '@/sections/CarOptions';
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
        <title>Gautham Tours and Travels - Premium Cab Services Across Maharashtra</title>
        <meta name="description" content="Experience premium chauffeur-driven cab services throughout Maharashtra. Outstation trips, local travel, airport transfers, and one-way drops to all major destinations." />
        <meta property="og:title" content="Gautham Tours and Travels - Premium Cab Services Across Maharashtra" />
        <meta property="og:description" content="Premium cab services for outstation trips, local travel, airport transfers, and one-way drops to all major destinations in Maharashtra." />
        <meta property="og:type" content="website" />
      </Helmet>
      <main>
        <Hero />
        <Features />
        <About />
        <Services />
        <CarOptions />
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
