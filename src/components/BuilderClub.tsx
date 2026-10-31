const projects = [
  { number: '01', name: 'Orbit', category: 'Focus timer', description: 'Make space for one thing at a time.', url: 'https://claude-nyu-orbit.vercel.app/', color: '#e99778', mark: '◉' },
  { number: '02', name: 'Pocket', category: 'Study tool', description: 'Turn your notes into a flashcard deck.', url: 'https://claude-nyu-pocket.vercel.app/', color: '#c9b7e8', mark: '✳' },
  { number: '03', name: 'Choice Lab', category: 'Decision tool', description: 'Compare your options with clarity.', url: 'https://claude-nyu-choice.vercel.app/', color: '#d8d7a9', mark: '↗' },
  { number: '04', name: 'Studio Board', category: 'Project planner', description: 'Organize tasks from idea to done.', url: 'https://claude-nyu-studio.vercel.app/', color: '#b8c9df', mark: '▦' },
  { number: '05', name: 'Grade Lab', category: 'Grade planner', description: 'See what you need to reach your goal.', url: 'https://claude-nyu-grade.vercel.app/', color: '#c9d9bf', mark: '◒' },
];

export default function BuilderClub() {
  return (
    <section id="build" className="scroll-mt-24 bg-claude-cream px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-4 font-ui text-xs font-semibold uppercase tracking-[0.2em] text-claude-terracotta">
          <span>03 / The work</span><span className="h-px flex-1 bg-claude-light-gray" />
        </div>
        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-heading text-5xl leading-[1.02] tracking-tight text-claude-dark sm:text-6xl">Ideas in <em className="text-claude-terracotta">action.</em></h2>
          <p className="max-w-xs font-body text-base text-claude-dark/70">Tools and ideas for NYU builders.</p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a key={project.name} href={project.url} target="_blank" rel="noopener noreferrer" className="group flex min-h-72 flex-col rounded-2xl border border-claude-dark/10 bg-claude-warm-white p-7 text-claude-dark transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-claude-terracotta motion-reduce:transition-none motion-reduce:hover:translate-y-0">
              <div className="flex items-start justify-between"><span className="font-mono text-xs text-claude-dark/55">{project.number} / {project.category}</span><span aria-hidden="true" className="text-2xl">↗</span></div>
              <div className="mt-10 flex h-14 w-14 items-center justify-center rounded-full text-2xl text-[#20211f]" style={{ backgroundColor: project.color }} aria-hidden="true">{project.mark}</div>
              <h3 className="mt-6 font-heading text-3xl">{project.name}</h3>
              <p className="mt-2 font-body text-sm text-claude-dark/70">{project.description}</p>
              <span className="mt-auto pt-6 font-ui text-xs font-semibold uppercase tracking-wider text-claude-terracotta">Try it <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></span>
            </a>
          ))}
        </div>
        <a href="https://claude-showcase.vercel.app/" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 border-b border-claude-terracotta pb-1 font-ui text-sm font-semibold text-claude-dark hover:text-claude-terracotta">Explore the wider Claude Showcase <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>
      </div>
    </section>
  );
}
