export function WavyUnderline({ className = "", color = "#6C47FF", variant = "subtle" }) {
  // Define custom paths for our two different styles on a 0-100 canvas
  const paths = {
    // Left tip low, rises to peak, falls to trough, rises to peak
    subtle: "M 2 16 C 30 8, 70 20, 98 8", 
    
    // Deeper dip, higher peak, dramatic finish
    wavy: "M 2 18 C 20 26, 45 4, 75 18 C 85 22, 95 10, 98 6" 
  };

  return (
    <svg
      viewBox="0 0 100 24"
      preserveAspectRatio="none"
      className={`absolute left-0 w-full ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={paths[variant] || paths.subtle}
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke" /* Crucial for stretched SVGs */
      />
    </svg>
  );
}