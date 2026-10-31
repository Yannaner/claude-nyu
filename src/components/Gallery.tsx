'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

const photos = [
  { src: '/gallery/img_1512.webp', alt: 'A group of students gathered around a table at a Claude event' },
  { src: '/gallery/img_1506.webp', alt: 'Attendees talking in a Claude event space' },
  { src: '/gallery/img_1517.webp', alt: 'Two people standing together at an event' },
  { src: '/gallery/img_2814.webp', alt: 'Audience watching a presentation' },
  { src: '/gallery/img_2815.webp', alt: 'A speaker presenting to an audience' },
  { src: '/gallery/img_2816.webp', alt: 'Attendees seated together during an event' },
  { src: '/gallery/img_1499.webp', alt: 'Claude signage in an event space' },
  { src: '/gallery/img_2817.webp', alt: 'Claude sign in a bright event venue' },
];

export default function Gallery() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState(0);
  const openPhoto = (index: number) => {
    setSelected(index);
    dialogRef.current?.showModal();
  };
  const move = (direction: number) => setSelected((current) => (current + direction + photos.length) % photos.length);
  return (
    <section className="bg-claude-warm-white px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="font-ui text-xs uppercase tracking-[0.2em] text-claude-mid-gray">
            In the community
          </p>
          <h2 className="mt-3 font-heading text-4xl text-claude-dark sm:text-5xl">
            Moments together.
          </h2>
          <p className="mt-4 max-w-xl font-body text-lg text-claude-dark/60">
            A look at the people and ideas that bring our community together.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {photos.map((photo, i) => (
            <ScrollReveal key={photo.src} delay={i * 0.04}>
              <button type="button" onClick={() => openPhoto(i)} aria-label={`View photo: ${photo.alt}`} className="group relative block aspect-[3/4] w-full overflow-hidden rounded-xl bg-claude-sand text-left">
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 767px) 50vw, 25vw" className="object-cover transition-transform duration-500 hover:scale-105" />
              </button>
            </ScrollReveal>
          ))}
        </div>
        <dialog ref={dialogRef} aria-label="Community photo viewer" onKeyDown={(event) => { if (event.key === 'ArrowRight') move(1); if (event.key === 'ArrowLeft') move(-1); }} className="m-auto max-h-[94dvh] w-[min(94vw,960px)] overflow-hidden rounded-2xl bg-claude-cream p-0 text-claude-dark shadow-2xl backdrop:bg-black/80">
          <div className="flex items-center justify-between gap-4 border-b border-claude-light-gray px-5 py-4 font-ui text-sm">
            <span>Community moments · {selected + 1} / {photos.length}</span>
            <button type="button" onClick={() => dialogRef.current?.close()} className="rounded-full px-3 py-2 hover:bg-claude-sand" aria-label="Close photo viewer">Close ✕</button>
          </div>
          <div className="relative h-[min(65dvh,700px)] bg-[#171717]">
            <Image src={photos[selected].src} alt={photos[selected].alt} fill sizes="(max-width: 960px) 94vw, 960px" className="object-contain" />
          </div>
          <div className="flex items-center justify-between gap-3 px-5 py-4 font-ui text-sm">
            <button type="button" onClick={() => move(-1)} className="rounded-full border border-claude-light-gray px-4 py-2 hover:bg-claude-sand" aria-label="Previous photo">← Previous</button>
            <span className="hidden text-claude-dark/60 sm:block">{photos[selected].alt}</span>
            <button type="button" onClick={() => move(1)} className="rounded-full border border-claude-light-gray px-4 py-2 hover:bg-claude-sand" aria-label="Next photo">Next →</button>
          </div>
        </dialog>
      </div>
    </section>
  );
}
