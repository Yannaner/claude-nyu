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
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-claude-sand">
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 767px) 50vw, 25vw" className="object-cover transition-transform duration-500 hover:scale-105" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
