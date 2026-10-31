const items = [
  { number: '01', title: 'Come curious', text: 'Every major and every experience level is welcome.' },
  { number: '02', title: 'Learn by doing', text: 'Explore tools, share ideas, and build alongside others.' },
  { number: '03', title: 'Make connections', text: 'Find people who want to make something meaningful.' },
];
export default function AtAGlance() {
  return <section className="bg-[#e99778] px-6 py-12 text-[#191716] sm:px-10 sm:py-16 xl:px-16"><div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3 md:gap-0">{items.map((item) => <div key={item.number} className="border-t border-[#191716]/30 pt-5 md:border-l md:border-t-0 md:px-8 md:first:border-l-0 md:first:pl-0"><span className="font-mono text-xs">/{item.number}</span><h2 className="mt-5 font-heading text-2xl sm:text-3xl">{item.title}</h2><p className="mt-3 max-w-xs font-ui text-sm leading-relaxed text-[#191716]/75">{item.text}</p></div>)}</div></section>;
}
