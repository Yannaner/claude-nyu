const stats = [
  { label: 'All majors welcome', symbol: '∞' },
  { label: 'No experience needed', symbol: '0' },
  { label: 'Free to join', symbol: '$0' },
];

export default function AtAGlance() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-center divide-y divide-claude-light-gray sm:flex-row sm:divide-x sm:divide-y-0">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center px-8 py-4">
            <span className="font-heading text-4xl text-claude-dark sm:text-5xl">{stat.symbol}</span>
            <span className="mt-2 font-body text-sm italic text-claude-mid-gray">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
