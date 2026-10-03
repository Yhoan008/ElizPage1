export function Spiral({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" aria-hidden="true">
      <path
        d="M50 50 m0 -3 a3 3 0 0 1 3 3 a7 7 0 0 1 -7 7 a12 12 0 0 1 -12 -12 a18 18 0 0 1 18 -18 a25 25 0 0 1 25 25 a33 33 0 0 1 -33 33 a42 42 0 0 1 -42 -42 a48 48 0 0 1 18 -38"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
