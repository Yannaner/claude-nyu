import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AtAGlance from '@/components/AtAGlance';
import WhatWeDo from '@/components/WhatWeDo';
import Events from '@/components/Events';
import BuilderClub from '@/components/BuilderClub';
import WhyJoin from '@/components/WhyJoin';
import Gallery from '@/components/Gallery';
import GetInvolved from '@/components/GetInvolved';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-claude-cream focus:px-4 focus:py-3 focus:font-ui focus:text-claude-dark">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <AtAGlance />
        <WhatWeDo />
        <Events />
        <BuilderClub />
        <WhyJoin />
        <Gallery />
        <GetInvolved />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
