import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Program } from './components/Program';
import { WhySpecial } from './components/WhySpecial';
import { Requirements } from './components/Requirements';
import { Schedule } from './components/Schedule';
import { Pricing } from './components/Pricing';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <Features />
      <Program />
      <WhySpecial />
      <Requirements />
      <Schedule />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}
