export default function BackgroundAtmosphere() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Grid */}
      <div className="digital-grid absolute inset-0 opacity-70" />

      {/* Purple atmospheric light */}
      <div className="absolute -right-[15rem] -top-[18rem] h-[45rem] w-[45rem] rounded-full bg-[var(--purple)] opacity-[0.11] blur-[150px]" />

      {/* Secondary violet field */}
      <div className="absolute -left-[20rem] top-[40%] h-[40rem] w-[40rem] rounded-full bg-[var(--purple-deep)] opacity-[0.08] blur-[160px]" />

      {/* Cyan energy source */}
      <div className="absolute right-[15%] top-[25%] h-[18rem] w-[18rem] rounded-full bg-[var(--cyan)] opacity-[0.035] blur-[120px]" />

      {/* Very subtle top vignette */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,3,8,0.15),transparent_25%,transparent_75%,rgba(5,3,8,0.85))]" />
    </div>
  );
}