import Image from "next/image";

import { HeaderedSection } from "@/components/section";
import Timeline from "@/components/timeline";
import Skills from "@/components/skills";
import Projects from "@/components/projects";

import { education, experiences, projects } from "./data";

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

            <div className="flex flex-col gap-4">
              <div className="flex flex-col leading-4">
                <span className="font-semibold">Email</span>
                <span className="text-gray-700 font-light">
                  <a href="mailto:smohammadi7175@gmail.com">
                    smohammadi7175@gmail.com
                  </a>
                </span>
              </div>

              <div className="flex flex-col leading-4">
                <span className="font-semibold">Address</span>
                <span className="text-gray-700 font-light">Tehran, Iran</span>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article className="w-full flex flex-col justify-center items-center gap-12 bg-gray-200 text-blue-900 p-24">
        <h2 className="text-blue-950 font-light text-4xl">
          Hello! I&apos;m Sanaz Mohammadi
        </h2>
        <p className="max-w-3xl text-gray-800 text-center">
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
              "Semantic Analysis (Lexical semantics, Compositional semantics)",
              "embeddings (tf-idf, Word2vec)",
              "Text classification",
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
