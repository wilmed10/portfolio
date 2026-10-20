import type { ReactNode } from "react";

export function Section({
  id,
  label,
  compact = false,
  children,
}: {
  id?: string;
  label?: string;
  /** Tighter vertical padding, for pages that stack many short sections. */
  compact?: boolean;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`border-t border-line ${compact ? "py-6 sm:py-7" : "py-10 sm:py-12"}`}>
      {label && (
        <h2 className="mb-5 font-mono text-xs font-normal uppercase tracking-wider text-muted">
          {label}
        </h2>
      )}
      {children}
    </section>
  );
}
