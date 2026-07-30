import Hero from '../components/hero/Hero';
import Services from '../components/services/Services';
import Process from '../components/process/Process';
import About from '../components/about/About';
import WhatsAppButton from '../components/common/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <About />
      <WhatsAppButton />
    </>
  );
}
