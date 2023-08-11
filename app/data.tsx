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
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-blue-800">
              Brain tissue segmentation in the presence of MS lesions and INU
              artifact
            </h3>
            <p className="text-gray-700 text-sm">
              Supervisor: Prof. Mohsen Ebrahimi Moghaddam
            </p>

            <ol className="ms-6">
              <li>
                Brain tissue segmentation challenges: Intensity non-uniformity
                is a crucial factor for quantitative magnetic resonance imaging
                (MRI).
              </li>
              <li>
                The proposed method is an end-to-end method that is a
                combination of adversarial generative networks and a
                segmentation module to achieve better performance in brain
                tissue segmentation without any additional pre-processing to
                remove noise and artifacts.
              </li>
              <li>Datasets: Brainweb, IBSR, CombiRX</li>
            </ol>
          </div>
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
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-blue-800">
              Hand Gesture Recognition
            </h3>
            <p className="text-gray-700 text-sm">
              Supervisor: Dr. Masoume Safkhani, Mr. Alireza Akhavanpour
            </p>

            <ol className="ms-6">
              <li>
                Collected 8000 hand gesture dataset in 8 classes in complex
                background and different volunteers
              </li>
              <li>
                {" "}
                Fine-tuning Imagenet models such as VGG16, ResNet, Xception-v3,
                inception and Mobilenet to classify the proposed hand gesture
                dataset
              </li>
              <li>
                {" "}
                Trained object detections (YOLOv4, YOLOv3-tiny, SSD MobileNet
                and EfficientDet) on proposed dataset
              </li>
              <li>Classification hand gestures key points by Xgboost</li>
              <li>Demo from YOLO-v3 on LinkedIn: Video</li>
              <li>Available Code on GitHub1 and GitHub2</li>
            </ol>
          </div>
        }
      />
    ),
    time: "2020 - 2023",
  },
];
