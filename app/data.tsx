import ReactMarkdown from "react-markdown";
import dedent from "dedent";

import Education from "@/components/education";

export const experiences = [
  {
    title: "Data Scientist",
    subtitle: "Max Holding",
    link: "https://maxholding.co",
    description: (
      <article className="prose dark:prose-invert">
        <ReactMarkdown>{dedent`
**Extract personal information from Iranian 
National Identification card**

- Generated various image datasets with 
different augmentations
- Languages: English and Persian
- Fine-tuned *PPOCR-V3* and *Paddle-OCR (Arabic 
Language)* for Recognition  

  

**Voice Assistant chatbot**

- R&D on Text to Speech (TTS) and Automatic 
Speech Recognition (ASR)
- Languages: English and Persian
- TTS methods: Tacotron, FastSpeech, Flowtron, 
LightSpeech, and Priorgrad
- ASR methods: Wav2vec (XLSR), Nvidia Nemo, 
Kaldi (Vosk), and DeepSpeech
          `}</ReactMarkdown>
      </article>
    ),
    time: "Sep 2022 - Now",
  },
  {
    title: "Machine Learning Engineer",
    subtitle: "FarasatSoft",
    link: "https://farasatsoft.ir",
    description: (
      <article className="prose dark:prose-invert">
        <ReactMarkdown>{dedent`
**Fake Sign Verification on Cheque (Informatics Services Corporation)**

- Collected signs by volunteers
- Trained Siamese Networks for fake sign recognition
- Installed software on Oracle Linux via docker

**Implimenting an Image Browser via Machine 
Learning Algorithms**

- Object detections (Yolo9000, Faster RCNN, 
  SSD ResNet), and API on Ubuntu Linux
- Served Faster RCNN and SSD-ResNet via TensorFlow serving (gRPC)
- Extracted words relationship via WordNET
          `}</ReactMarkdown>
      </article>
    ),
    time: "Jan 2022 - Sep 2022",
  },
  {
    title: "Deep Learning Developer",
    subtitle: "Shenasa AI",
    link: "https://shenasa.ai",
    description: (
      <article className="prose dark:prose-invert">
        <ReactMarkdown>{dedent`
**Implementing Face Recognition and Tracking System for Roll-Call Systems**

- Face detection and verification via RetinaNet
- Face Anti-Spoofing
- Face Blurring API (docker-compose + nginx)
- Hand Gesture Recognition API (YOLOv4, 
YOLOV3-tiny)
- Serving TensorFlow Models (gRPC and RestFull APIs) and MxNet Models

**Diagnosing COVID-19 from CT-Scan images (Classification and Segmentation)**

- Data Preparation: removed closed lungs and extracted edges in CT-Scan slices
- Classification: Fine-Tuned ResNet and DenseNet for COVID-19 classification
- Segmentation: Trained U-net for infection 
segmentation
          `}</ReactMarkdown>
      </article>
    ),
    time: "Jan 2019 - Jan 2022",
  },
];

export const education = [
  {
    title: "Shahid Beheshti University, Tehran, Iran",
    subtitle: "MSC",
    description: (
      <Education
        description="Artificial Intelligence"
        descriptionModal={
          <article className="prose">
            <ReactMarkdown>{dedent`
### Brain tissue segmentation in the presence of MS lesions and INU artifact

Supervisor: Prof. Mohsen Ebrahimi Moghaddam

- **Brain tissue segmentation challenges**: Intensity non-uniformity Ss a crucial factor 
for quantitative Magnetic Resonance 
Imaging (MRI).

- The proposed method is an End-to-End method that is a
combination of **Adversarial Generative Networks** and a
**Segmentation Module** to achieve better performance in Brain
Tissue Segmentation without any additional pre-processing to
remove noise and artifacts.

- Datasets: **Brainweb**, **IBSR**, **CombiRX**

#### Paper

**CycleFormer: Brain tissue 
segmentation in the
presence of MS lesions 
and intensity non-uniformity artifact** (to 
  be submitted) 

S. Mohammadi, M. Ebrahimi Moghaddam, A. 
Aghaei (2023)
          `}</ReactMarkdown>
          </article>
        }
      />
    ),
    time: "2020 - 2023",
  },
  {
    title: "Shahid Rajayi University, Tehran, Iran",
    subtitle: "BSC",
    description: (
      <Education
        description="Computer Science & Eng."
        descriptionModal={
          <article className="prose">
            <ReactMarkdown>{dedent`
### Hand Gesture Recognition

Supervisor: Dr. Masoume Safkhani, Mr. Alireza Akhavanpour

-  Collected dataset that included 8000 
images in **Static Hand Gesture Classes** in 
complex background via different 
volunteers.

- **Fine-Tuned *ImageNet* models** such as **VGG16**, **ResNet**, **Xception-v3**, **Inception** and **MobileNet** to classify the proposed hand gesture
dataset.

- Trained Object Detections (**YOLOv4**, **YOLOv3-Tiny**, **SSD MobileNet** and **EfficientDet**) on diverse hand gesture dataset.

- Demo using **YOLO-v3** on LinkedIn: [Video](https://www.linkedin.com/posts/sanaz-mohammadi_one-of-projects-that-i-worked-on-in-intership-activity-6596420523805155328-ySHQ/?utm_source=linkedin_share&utm_medium=ios_app)  
  source available on GitHub: [dataset](https://github.com/smohammadi96/Diverse_hand_gesture_dataset) and [code](https://github.com/smohammadi96/handGesture_Recognition-Detection)

#### Paper

**Diverse Hand Gesture Dataset** (Under revision in Multimedia tools and 
  applications)

S. Mohammadi, M. Sabokrou, A. Akhavanpour, and R.Rastgo (2022)


          `}</ReactMarkdown>
          </article>
        }
      />
    ),
    time: "2015 - 2019",
  },
];

export const projects = [
  {
    title: "Brain tissue segmentation by UNet",
    subtitle: "(MSc) Deep Learning/ Project Supervisor: Dr. Hamed Malek",
    description: "T1-weighted MRI segmentation (WM, GM, CSF)",
    time: "May 2022",
    place: "Shahid Beheshti University",
    github: "https://github.com/smohammadi96/brainweb_tissue_segmentation_unet",
  },
  {
    title: "Classification by using ParseBERT",
    subtitle: "(MSc) Deep Learning/ Project Supervisor: Dr. Hamed Malek",
    description:
      "Classification users comment in Taghche software by **ParsBERT**",
    time: "May 2022",
    place: "Shahid Beheshti University",
    github: "https://github.com/smohammadi96/ParsBERT_Taghche",
  },
  {
    title: "Train NLU by RASA",
    subtitle:
      "(MSc) Neural Language Processing/ Project Supervisor: Dr. Mehrnoosh Shamsfard",
    description: "Used RASA framework to train NLU on **ATIS dataset**",
    time: "Jan 2022",
    place: "Shahid Beheshti University",
    github: "https://github.com/smohammadi96/NLU_ATIS_dataset_RASA",
  },
  {
    title: "Solve TSP problem by GA",
    subtitle:
      "(MSc) Computational Evolution/ Project Supervisor: Dr. Hamed Malek",
    description: "Implemented Genetic algorithm to solve **TSP problem**",
    time: "Dec 2021",
    place: "Shahid Beheshti University",
    github:
      "https://github.com/smohammadi96/computational_evolution/tree/main/TSP_Genetic",
  },
  {
    title: "Implementation PSO, ES, and DS to solve multi-objective functions",
    subtitle:
      "(MSc) Computational Evolution/ Project Supervisor: Dr. Hamed Malek",
    description:
      "Implemented **PSO**, **Evolution Strategies**, **Differential Evolution on Rastrigin**, **Schwefel and Griewangk**",
    time: "Nov 2021",
    place: "Shahid Beheshti University",
    github:
      "https://github.com/smohammadi96/computational_evolution/tree/main/PSO_ES_DS",
  },
  {
    title: "Earthquake prediction",
    subtitle:
      "(MSc) Pattern Recognition/ Project Supervisor: Dr. Ahmad Ali Abin",
    description: "Extracted some planets features to earthquake prediction",
    time: "Dec 2020",
    place: "Shahid Beheshti University",
    github: "https://github.com/smohammadi96/Earthquake_prediction",
  },
  {
    title: "Clustering points dataset by FCM-PSO",
    subtitle: "(MSc) Deep Learning/ Project Supervisor: Dr. Hamed Malek",
    description: dedent`
- Implemented combination **PSO** and **Fuzzy c-means to improve clustering performance**.
- In this method, used Fuzzy c-means activation function and points as particles in PSO algorithm
    `,
    time: "Mar 2022",
    place: "Shahid Beheshti University",
  },
];
