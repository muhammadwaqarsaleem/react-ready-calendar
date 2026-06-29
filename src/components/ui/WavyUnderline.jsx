export function WavyUnderline({ className = "", color = "#6C47FF" }) {
  return (
    <svg
      viewBox="0 0 120 12"
      preserveAspectRatio="none"
      className={`absolute left-0 w-full h-2 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 6 Q 7.5 0, 15 6 T 30 6 T 45 6 T 60 6 T 75 6 T 90 6 T 105 6 T 120 6"
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}