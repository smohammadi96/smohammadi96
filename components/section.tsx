import { type ReactNode } from "react";
import { cx } from "class-variance-authority";

interface HeaderedSectionProps {
  id: string;
  header: string;
  children: ReactNode;
  className?: string;
  colorScheme?: string;
}

export function HeaderedSection({
  id,
  header,
  className,
  colorScheme,
  children,
}: HeaderedSectionProps) {
  return (
    <article
      id={id}
      className={cx(
        "w-full flex flex-col justify-start items-center bg-white text-1blue-900 p-12 border-t-2 border-gray-300 [--text]:red dark:bg-gray-950",
        colorScheme === "dark" && "bg-slate-900 text-white",
        className
      )}
    >
      <section className="flex justify-center border-b border-gray-300 p-4">
        <h3 className="text-[var(--text)] font-bold text-3xl uppercase px-4 lg:px-0">
          {header}
        </h3>
      </section>

      <section className="flex flex-col items-center justify-start w-2/3 education-section">
        {children}
      </section>
    </article>
  );
}
