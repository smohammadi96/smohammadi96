import Image from "next/image";

import { HeaderedSection } from "@/components/section";
import Timeline from "@/components/timeline";
import Skills from "@/components/skills";
import Projects from "@/components/projects";

import { education, experiences, projects } from "./data";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <nav className="w-full flex justify-start items-center bg-white p-6 py-8 text-blue-900 sticky top-0 z-10 dark:bg-gray-950 dark:text-blue-400">
        <h3 className="text-2xl">Sanaz Mohammadi</h3>
        <div className="w-max grow" />
        <ul className="flex justify-start items-center gap-12">
          {["About", "Experience", "Education", "Skills", "Projects"].map(
            (item, idx) => (
              <li key={idx} className="hover:opacity-70">
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            )
          )}
        </ul>
      </nav>

      <article className="w-full flex flex-col justify-center items-center gap-4 bg-slate-800 text-blue-900 p-24 pb-0">
        <div className="bg-white flex dark:bg-gray-900 dark:text-blue-400">
          <div className="grayscale hover:grayscale-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Image
              className="object-cover w-[500px] h-[500px]"
              src="/profile.png"
              width={500}
              height={500}
              alt="Picture of Sanaz Mohammadi"
            />
          </div>
          <div className="flex flex-col justify-center items-start p-12 w-[500px] h-[500px] gap-24">
            <div className="flex flex-col gap-1">
              <h1 className="font-bold text-3xl">Sanaz Mohammadi</h1>
              <p className="">AI researcher</p>
            </div>

            <div className="flex flex-col gap-8">
              <div className="flex flex-col leading-4">
                <span className="font-semibold">Email</span>
                <span className="text-gray-700 font-light dark:text-gray-100">
                  <a href="mailto:smohammadi7175@gmail.com">
                    smohammadi7175@gmail.com
                  </a>
                </span>
              </div>

              <div className="flex flex-col leading-4">
                <span className="font-semibold">Address</span>
                <span className="text-gray-700 font-light dark:text-gray-100">
                  Tehran, Iran
                </span>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article className="px-24 w-full text-blue-900 flex justify-center bg-gray-200 dark:bg-gray-950">
        <div className="w-[1000px] flex justify-center items-center gap-8 p-6 bg-slate-800 dark:bg-gray-900">
          <a
            href="https://www.linkedin.com/in/sanaz-mohammadi"
            target="_blank"
            className="text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
              />
            </svg>
          </a>

          <a
            href="https://github.com/smohammadi96"
            target="_blank"
            className="text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
              />
            </svg>
          </a>
        </div>
      </article>

      <article
        id="about"
        className="w-full flex flex-col justify-center items-center gap-12 bg-gray-200 p-24 dark:bg-gray-950"
      >
        <h2 className="text-blue-950 font-light text-4xl text-center dark:text-blue-400">
          Hello! I&apos;m Sanaz Mohammadi
        </h2>
        <p className="max-w-3xl text-gray-800 text-center dark:text-gray-100">
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

      <HeaderedSection id="experience" header="Experience">
        <Timeline items={experiences} />
      </HeaderedSection>

      <HeaderedSection id="education" header="Education">
        <Timeline items={education} />
      </HeaderedSection>

      <HeaderedSection
        id="skills"
        header="Technical Skills"
        colorScheme="slate"
      >
        <div className="w-full grid grid-cols-2 gap-12 mt-12 items-start content-center">
          <Skills
            title="Frameworks and Libraries"
            items={[
              "TensorFlow",
              "PyTorch",
              "Keras",
              "Matplotlib",
              "NumPy",
              "OpenCV",
              "Scikit-learn",
              "Pandas",
              "Flask",
              "FastAPI",
            ]}
          />

          <Skills
            title="Deep Learning"
            items={[
              "CNNs (Resnet, VGG, mobilenet and etc)",
              "RNNs (LSTM, GRU)",
              "U-Net",
              "Auto Encoders",
              "GANs (conditional GAN, cycle GAN)",
              "Transformers (BERT, GPT2)",
              "Transfer Learning",
              "Contrastive learning",
            ]}
          />

          <Skills
            title="Neural Language Processing"
            items={[
              "Tokenization",
              "Morphological analysis",
              "Stemming, Lematizing",
              "Part of Speech (POS) Tagging",
              "embeddings (tf-idf, Word2vec)",
              "Text classification",
              "Semantic Analysis (Lexical, Compositional)",
            ]}
          />

          <Skills
            title="Classification and Regression"
            items={[
              "KNN",
              "Decision Trees",
              "RF",
              "SVM",
              "Naive Bayes",
              "Linear Regression",
              "Logistic Regression",
              "SoftMax Regression",
            ]}
          />

          <Skills
            title="Dimension reduction"
            items={["Projection (PCA)", "Manifold Learning"]}
          />

          <Skills
            title="Unsupervised Learning"
            items={["Clustering (k-Mean, Fuzzy c-means, DBScan, OPTICS)"]}
          />
        </div>
      </HeaderedSection>

      <HeaderedSection id="projects" header="Projects">
        <div className="flex flex-col">
          <Projects data={projects} />
        </div>
      </HeaderedSection>
    </main>
  );
}
