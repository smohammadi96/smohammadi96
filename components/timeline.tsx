import { type ReactNode } from "react";

interface TimelineStepProps {
  title: string;
  subtitle: string;
  description: ReactNode;
  time: string;
  link?: string;
}

export default function Timeline({ items }: { items: TimelineStepProps[] }) {
  return (
    <ol className="w-full [&>li]:m-0 [&>li]:list-none gap-0">
      {items.map((ex, idx) => (
        <TimelineStep
          key={idx}
          title={ex.title}
          subtitle={ex.subtitle}
          description={ex.description}
          time={ex.time}
          link={ex.link}
        />
      ))}
    </ol>
  );
}

export function TimelineStep({
  title,
  subtitle,
  description,
  time,
  link,
}: TimelineStepProps) {
  return (
    <li className="mb-10 ml-4 relative">
      <div className="w-ull flex justify-center items-start">
        <div className="flex gap-3 w-1/5 items-center p-2 ps-6 justify-center sticky top-20 lg:w-1/2 [writing-mode:vertical-rl] lg:[writing-mode:unset] lg:flex-col lg:items-end lg:p-12 lg:py-6 lg:ps-0">
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {time}
          </time>
          <p className="font-semibold">
            <a href={link} className="hover:underline">
              {subtitle}
            </a>
          </p>
        </div>

        <div className="border-left relative flex flex-col gap-3 w-4/5 p-6 font-normal lg:w-1/2 lg:p-12 lg:py-6">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
          <div className="mb-4 text-base font-medium text-gray-500 dark:text-gray-400 leading-7">
            {description}
          </div>
        </div>
      </div>
    </li>
  );
}
