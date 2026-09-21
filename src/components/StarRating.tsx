"use client";

import { useState } from "react";

/** Five-star input. Renders as a real radio group so it is keyboard-usable. */
export function StarRating({
  value,
  onChange,
  invalid,
}: {
  value: number;
  onChange: (n: number) => void;
  invalid?: boolean;
}) {
  const [hovered, setHovered] = useState(0);
  const shown = hovered || value;

  return (
    <div
      role="radiogroup"
      aria-label="Rating out of five"
      aria-invalid={invalid}
      className="flex items-center gap-1"
      onMouseLeave={() => setHovered(0)}
    >
      {[1, 2, 3, 4, 5].map((n) => {
        const filled = n <= shown;
        return (
          <button
            key={n}
            type="button"
            role="radio"
            aria-checked={value === n}
            aria-label={`${n} ${n === 1 ? "star" : "stars"}`}
            onClick={() => onChange(n)}
            onMouseEnter={() => setHovered(n)}
            onFocus={() => setHovered(n)}
            onBlur={() => setHovered(0)}
            className="p-0.5 transition-transform duration-200 ease-out hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <svg width="30" height="30" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.4 6.2 20.5l1.1-6.5L2.6 9.4l6.5-.9L12 2.6z"
                fill={filled ? "var(--accent)" : "none"}
                stroke={filled ? "var(--accent)" : "var(--rule-strong)"}
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        );
      })}
      <span className="ml-2 text-[0.8125rem] text-ink-faint">
        {value ? `${value} out of 5` : "Tap to rate"}
      </span>
    </div>
  );
}

/** Read-only star row used on published reviews. */
export function StarDisplay({ rating }: { rating: number }) {
  return (
    <p className="flex items-center gap-0.5" aria-label={`Rated ${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <svg key={n} width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.4 6.2 20.5l1.1-6.5L2.6 9.4l6.5-.9L12 2.6z"
            fill={n <= rating ? "var(--accent)" : "none"}
            stroke={n <= rating ? "var(--accent)" : "var(--rule-strong)"}
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </p>
  );
}
