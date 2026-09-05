import Hero from '../components/hero/Hero';
import Brands from '../components/brands/Brands';
import Services from '../components/services/Services';
import Sectors from '../components/sectors/Sectors';
import Process from '../components/process/Process';
import About from '../components/about/About';
import WhatsAppButton from '../components/common/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <Services />
      <Sectors />
      <Process />
      <About />
      <WhatsAppButton />
    </>
  );
}
