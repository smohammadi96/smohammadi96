import ReactMarkdown from "react-markdown";
import dedent from "dedent";

import Education from "@/components/education";

export const experiences = [
  {
    title: "Machine Learning Engineer",
    subtitle: "Max Holding",
    description: (
      <ol className="description">
        <li>
          Voice assistant chatbot
          <ol>
            <li>
              R&D on Text to Speech (TTS) and Automatic Speech Recognition (ASR)
            </li>
            <li>Languages: English and Persian</li>
            <li>
              TTS methods: Tacotron, FastSpeech, Flowtron, LightSpeech,
              Priorgrad
            </li>
            <li>
              ASR methods: Wav2vec (XLSR), Nvidia Nemo, Kaldi (Vosk), DeepSpeech
            </li>
          </ol>
        </li>
      </ol>
    ),
    time: "Sep 2022 - Now",
  },
  {
    title: "Machine Learning Engineer",
    subtitle: "Farasat Soft",
    description: (
      <ol className="description">
        <li>
          Fake sign verification on Cheque (Informatics Services Corporation)
          <ol className="description">
            <li>Collected signs by volunteers</li>
            <li>Trained Siamese Networks for fake sign recognition</li>
            <li>
              Installation of the software on Oracle Linux with docker and
              without docker
            </li>
          </ol>
        </li>

        <li>
          Implimentation image browser with Machine Learning algorithms.
          <ol>
            <li>
              Object detections (Yolo9000, Faster RCNN, SSD resnet) API on
              Ubuntu Linux
            </li>
            <li>
              Served Faster RCNN and SSD-resnet with TensorFlow serving (gRpc)
            </li>
            <li>Find words Connection by WordNET</li>
          </ol>
        </li>
      </ol>
    ),
    time: "Jan 2022 - Sep 2022",
  },
  {
    title: "Deep Learning Developer",
    subtitle: "Shenasa AI",
    description: (
      <ol className="description">
        <li>
          Diagnosis COVID-19 from CT-scan images. (Classification and
          Segmentation)
          <ol>
            <li>
              Data preparation: remove closed lungs in slices of CT-scan by
              three methods.
            </li>
            <li>Edge Extraction from CT-scan slices.</li>
            <li>
              Classification: Fine-tuning ResNet and DenseNet for COVID-19
              classification
            </li>
            <li>Segmentation: Trained Unet for infection segmentation</li>
          </ol>
        </li>

        <li>
          Implementation face recognition and tracking system for roll-call
          systems.
          <ol>
            <li>Face detection and verification by RetinaNet (mxnet)</li>
            <li>Face anti-spoofing</li>
            <li>Face blurring API (docker-compose, nginx)</li>
            <li>
              Hand gesture recognition API (YOLOv4, YOLOV3-tiny)
              (docker-compose, nginx)
            </li>
            <li>Face expression recognition API (docker-compose, nginx)</li>
            <li>
              Serving TensorFlow models (gRpc and Rest-API) and mxnet models
            </li>
          </ol>
        </li>
      </ol>
    ),
    time: "Jan 2019 - Jan 2022",
  },
];

export const education = [
  {
    title: "Shahid Rajayi University, Tehran, Iran",
    subtitle: "BSC",
    description: (
      <Education
        description="Computer Science & Eng."
        descriptionModal={
          <article className="prose">
            <ReactMarkdown>{dedent`
### Brain tissue segmentation in the presence of MS lesions and INU artifact

Supervisor: Prof. Mohsen Ebrahimi Moghaddam

- **Brain tissue segmentation challenges**: Intensity non-uniformity
is a crucial factor for quantitative magnetic resonance imaging
(MRI).

- The proposed method is an end-to-end method that is a
combination of **adversarial generative networks** and a
**segmentation module** to achieve better performance in brain
tissue segmentation without any additional pre-processing to
remove noise and artifacts.

- Datasets: **Brainweb**, **IBSR**, **CombiRX**
          `}</ReactMarkdown>
          </article>
        }
      />
    ),
    time: "2015 - 2019",
  },
  {
    title: "Shahid Beheshti University, Tehran, Iran",
    subtitle: "MSE",
    description: (
      <Education
        description="Artificial Intelligence"
        descriptionModal={
          <article className="prose">
            <ReactMarkdown>{dedent`
### Hand Gesture Recognition

Supervisor: Dr. Masoume Safkhani, Mr. Alireza Akhavanpour

- **Collected 8000 hand gesture dataset** in 8 classes in complex
background and different volunteers

- **Fine-tuning Imagenet models** such as **VGG16**, **ResNet**, **Xception-v3**, **inception** and **Mobilenet** to classify the proposed hand gesture
dataset

- Trained object detections (**YOLOv4**, **YOLOv3-tiny**, **SSD MobileNet** and **EfficientDet**) on proposed dataset

- Classification **hand gestures key points** by **Xgboost**

- Demo from **YOLO-v3** on LinkedIn: [Video](https://www.linkedin.com/posts/sanaz-mohammadi_one-of-projects-that-i-worked-on-in-intership-activity-6596420523805155328-ySHQ/?utm_source=linkedin_share&utm_medium=ios_app)  
  source available on GitHub: [dataset](https://github.com/smohammadi96/Diverse_hand_gesture_dataset) and [code](https://github.com/smohammadi96/handGesture_Recognition-Detection)
          `}</ReactMarkdown>
          </article>
        }
      />
    ),
    time: "2020 - 2023",
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
