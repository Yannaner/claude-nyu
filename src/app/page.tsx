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
      <Navbar />
      <main>
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
