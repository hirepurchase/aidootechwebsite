import type { ReactNode } from "react";

const controlBase =
  "w-full border bg-paper-raised px-4 py-3 text-[0.9375rem] text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-accent focus:ring-2 focus:ring-accent/20";

export function Field({
  id,
  label,
  error,
  hint,
  optional,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  optional?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="flex items-baseline justify-between gap-3 text-[0.8125rem] font-medium text-ink"
      >
        {label}
        {optional && (
          <span className="text-[0.6875rem] font-normal text-ink-faint">Optional</span>
        )}
      </label>
      {hint && <p className="mt-1 text-[0.75rem] text-ink-faint">{hint}</p>}
      <div className="mt-2">{children}</div>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-[0.75rem] text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

export function inputClass(error?: string) {
  return `${controlBase} ${error ? "border-red-700" : "border-rule-strong"}`;
}

export function selectClass(error?: string) {
  return `${inputClass(error)} select-control`;
}
