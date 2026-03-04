import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import HowWeWork from '@/components/HowWeWork';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="bg-slate-950 text-slate-100">
      <Header />
      <Hero />
      <Services />
      <HowWeWork />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
