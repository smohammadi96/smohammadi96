import Image from "next/image";
import { ReactNode } from "react";

import { education, experiences } from "./data";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <article className="w-full flex flex-col justify-center items-center gap-4 bg-slate-800 text-blue-900 p-24">
        <div className="bg-white flex">
          <div className="grayscale hover:grayscale-0">
            <Image
              src="/profile.png"
              width={500}
              height={500}
              alt="Picture of Sanaz Mohammadi"
            />
          </div>
          <div className="flex flex-col justify-center items-start p-12 w-[500px] h-[500px] gap-12">
            <div className="flex flex-col gap-1">
              <h1 className="font-bold text-3xl">Sanaz Mohammadi</h1>
              <p className="font-semibold">AI researcher</p>
            </div>

            <div className="flex flex-col leading-4">
              <span className="font-semibold">Email</span>
              <span className="text-gray-700 font-light">
                <a href="mailto:smohammadi7175@gmail.com">
                  smohammadi7175@gmail.com
                </a>
              </span>
            </div>
          </div>
        </div>
      </article>

      <article className="w-full flex flex-col justify-center items-center gap-12 bg-gray-200 text-blue-900 p-24">
        <h2 className="text-blue-950 font-light text-4xl">
          Hello! I&apos;m Sanaz Mohammadi
        </h2>
        <p className="max-w-3xl text-gray-800">
          I am an Artificial Intelligence researcher with 3 years of experience
          working as a data scientist in the computer software industry. My
          expertise lies in Deep Learning, Machine Learning, Neural networks,
          Computer Vision, and Medical Imaging Analysis. I have a strong passion
          for advancing in the fields of Deep Learning and Machine Learning. A
          quick learner who is able to absorb new ideas and communicate clearly
          and effectively. My objective is to involve in cutting-edge projects
          and utilize my knowledge and skills.
        </p>
      </article>

      <HeaderedSection header="Experience">
        <ol className="w-full [&>li]:m-0">
          {experiences.map((ex, idx) => (
            <TimelineStep
              key={idx}
              title={ex.title}
              subtitle={ex.subtitle}
              description={ex.description}
              time={ex.time}
            />
          ))}
        </ol>
      </HeaderedSection>

      <HeaderedSection header="education">
        <ol className="w-full [&>li]:m-0">
          {education.map((ex, idx) => (
            <TimelineStep
              key={idx}
              title={ex.title}
              subtitle={ex.subtitle}
              description={ex.description}
              time={ex.time}
            />
          ))}
        </ol>
      </HeaderedSection>

      <section className="w-full flex flex-col justify-center items-center gap-12 text-blue-900 p-24">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <h3 className="text-blue-950 font-light text-3xl">
              Programming Languages
            </h3>
            <div className="flex flex-row gap-4">
              <div className="flex flex-col gap-2">
                <span className="text-gray-800 font-semibold">Python</span>
                <span className="text-gray-800 font-semibold">C++</span>
                <span className="text-gray-800 font-semibold">C</span>
                <span className="text-gray-800 font-semibold">Java</span>
                <span className="text-gray-800 font-semibold">SQL</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-gray-800 font-semibold">JavaScript</span>
                <span className="text-gray-800 font-semibold">TypeScript</span>
                <span className="text-gray-800 font-semibold">HTML</span>
                <span className="text-gray-800 font-semibold">CSS</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-blue-950 font-light text-3xl">
              Frameworks and Libraries
            </h3>
            <div className="flex flex-row gap-4">
              <div className="flex flex-col gap-2 [&>span]:font-semibold [&>span]:text-gray-800">
                <span>TensorFlow</span>
                <span>PyTorch</span>
                <span>Keras</span>
                <span>OpenCV</span>
                <span>NumPy</span>
                <span>Pandas</span>
                <span>Matplotlib</span>
                <span>Scikit-learn</span>
                <span>NLTK</span>
                <span>Flask</span>
                <span>Django</span>
                <span>React</span>
                <span>Next.js</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

interface HeaderedSectionProps {
  header: string;
  children: ReactNode;
}

function HeaderedSection({ header, children }: HeaderedSectionProps) {
  return (
    <article className="w-full flex flex-col justify-center items-center bg-white text-blue-900 p-12">
      <section className="flex justify-center border-b-2 border-gray-300 p-4">
        <h3 className="text-blue-950 font-bold text-3xl uppercase">{header}</h3>
      </section>

      <section className="flex flex-col items-start justify-start w-2/3">
        {children}
      </section>
    </article>
  );
}

interface TimelineStepProps {
  title: string;
  subtitle: string;
  description: ReactNode;
  time: string;
  children?: ReactNode;
}

function TimelineStep({
  title,
  subtitle,
  description,
  time,
  children,
}: TimelineStepProps) {
  return (
    <li className="mb-10 ml-4">
      <div className="w-ull flex justify-center items-center">
        <div className="flex flex-col gap-3 w-1/2 items-end p-12 justify-center">
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {time}
          </time>
          <p>{subtitle}</p>
        </div>

        <div className=" relative flex flex-col gap-3 border-l border-gray-200 dark:border-gray-700 w-1/2 p-12">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </li>
  );
}
