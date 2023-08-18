import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Button from "./button";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  time: string;
  place: string;
  github?: string;
}

interface Props {
  data: Project[];
}

export default function Projects({ data }: Props) {
  return (
    <div className="mt-12 flex flex-col gap-12">
      {data.map((datum, idx) => (
        <ProjectItem key={idx} {...datum} />
      ))}
    </div>
  );
}

export function ProjectItem({
  title,
  description,
  place,
  subtitle,
  time,
  github,
}: Project) {
  return (
    <div className="flex items-center justify-between gap-12">
      <div className="flex flex-col gap-3">
        <p className="text-lg font-bold">{title}</p>
        <p className="prose text-sm text-gray-700 dark:text-gray-200 dark:prose-invert">
          <ReactMarkdown>{description}</ReactMarkdown>
        </p>
      </div>
      <a href={github} target="_blank" className="inline-flex shrink-0">
        <Button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
            />
          </svg>{" "}
          Source Code
        </Button>
      </a>
    </div>
  );
}
