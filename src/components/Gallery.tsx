'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

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
    <section className="bg-claude-warm-white px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-4 font-ui text-xs font-semibold uppercase tracking-[0.2em] text-claude-terracotta"><span>04 / Community</span><span className="h-px flex-1 bg-claude-light-gray" /></div>
        <div className="mt-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-heading text-5xl leading-[1.02] tracking-tight text-claude-dark sm:text-6xl lg:text-7xl">The people<br /><em className="text-claude-terracotta">behind the ideas.</em></h2>
          <p className="max-w-sm font-body text-lg leading-relaxed text-claude-dark/75">A few moments from the rooms where we learn, meet, and make things together.</p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-4">
          {photos.map((photo, i) => (
            <button key={photo.src} type="button" onClick={() => openPhoto(i)} aria-label={`View photo: ${photo.alt}`} className="group relative block aspect-[3/4] w-full overflow-hidden bg-claude-sand text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-claude-terracotta">
              <Image src={photo.src} alt="" fill sizes="(max-width: 767px) 50vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
              <span aria-hidden="true" className="absolute bottom-3 left-3 bg-[#1c1b19]/90 px-2 py-1 font-mono text-xs text-white">{String(i + 1).padStart(2, '0')} / 08</span>
              <span aria-hidden="true" className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#1c1b19]/90 text-white">↗</span>
            </button>
          ))}
        </div>
        <dialog ref={dialogRef} aria-label="Community photo viewer" onKeyDown={(event) => { if (event.key === 'ArrowRight') move(1); if (event.key === 'ArrowLeft') move(-1); }} className="m-auto max-h-[94dvh] w-[min(94vw,960px)] overflow-hidden rounded-2xl bg-claude-cream p-0 text-claude-dark shadow-2xl backdrop:bg-black/80">
          <div className="flex items-center justify-between gap-4 border-b border-claude-light-gray px-5 py-4 font-ui text-sm">
            <span>Community moments · {selected + 1} / {photos.length}</span>
            <button type="button" onClick={() => dialogRef.current?.close()} className="rounded-full px-3 py-2 hover:bg-claude-sand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-claude-terracotta" aria-label="Close photo viewer">Close ✕</button>
          </div>
          <div className="relative h-[min(65dvh,700px)] bg-[#171717]">
            <Image src={photos[selected].src} alt={photos[selected].alt} fill sizes="(max-width: 960px) 94vw, 960px" className="object-contain" />
          </div>
          <div className="flex items-center justify-between gap-3 px-5 py-4 font-ui text-sm">
            <button type="button" onClick={() => move(-1)} className="rounded-full border border-claude-light-gray px-4 py-2 hover:bg-claude-sand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-claude-terracotta" aria-label="Previous photo">← Previous</button>
            <span className="hidden text-claude-dark/60 sm:block">{photos[selected].alt}</span>
            <button type="button" onClick={() => move(1)} className="rounded-full border border-claude-light-gray px-4 py-2 hover:bg-claude-sand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-claude-terracotta" aria-label="Next photo">Next →</button>
          </div>
        </dialog>
      </div>
    </section>
  );
}
