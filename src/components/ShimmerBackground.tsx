export default function ShimmerBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="shimmer-orb-1 absolute top-[10%] left-[15%] h-[500px] w-[500px] rounded-full opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(217,119,87,0.3) 0%, transparent 70%)',
          filter: 'blur(80px)',
          mixBlendMode: 'multiply',
        }}
      />
      <div
        className="shimmer-orb-2 absolute top-[30%] right-[10%] h-[400px] w-[400px] rounded-full opacity-35"
        style={{
          background: 'radial-gradient(circle, rgba(120,140,93,0.25) 0%, transparent 70%)',
          filter: 'blur(80px)',
          mixBlendMode: 'multiply',
        }}
      />
      <div
        className="shimmer-orb-3 absolute bottom-[15%] left-[40%] h-[450px] w-[450px] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(106,155,204,0.25) 0%, transparent 70%)',
          filter: 'blur(80px)',
          mixBlendMode: 'multiply',
        }}
      />
    </div>
  );
}
