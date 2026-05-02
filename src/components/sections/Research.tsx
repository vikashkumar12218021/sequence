import { motion } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { Button } from "@/components/ui/button";

const papers = [
  { title: "Big Data in Cloud Computing", venue: "IEEE ICRITO", abstract: "Analyzing scalability, storage and processing paradigms for big-data workloads on cloud infrastructure." },
  { title: "Bitcoin Price Prediction using LSTM", venue: "AITA Conference", abstract: "Sequential deep-learning model forecasting cryptocurrency price movements with temporal feature engineering." },
  { title: "Skin Cancer Detection using CNN/ResNet", venue: "IEEE", abstract: "Deep convolutional architectures classifying dermoscopic images for early melanoma detection." },
  { title: "Attendance System with Face Recognition", venue: "AITA", abstract: "Real-time facial recognition pipeline automating classroom attendance with high accuracy." },
  { title: "Fight Detection using Audio + Video AI", venue: "IEEE", abstract: "Multimodal model fusing audio cues and video frames for violent event detection in surveillance." },
  { title: "Heart Disease Prediction (Hybrid ML)", venue: "AITA", abstract: "Ensemble of classical ML models predicting cardiovascular risk from clinical features." },
  { title: "Credit Card Fraud Detection", venue: "IEEE", abstract: "Imbalanced-class learning with SMOTE and gradient boosting for transaction fraud identification." },
  { title: "Flood Prediction using ML", venue: "AITA", abstract: "Geospatial and meteorological feature fusion to forecast flood-prone events." },
  { title: "Landslide Prediction Model", venue: "IEEE", abstract: "Terrain and rainfall driven ML pipeline estimating landslide susceptibility." },
  { title: "AI-driven E-learning Platform", venue: "AITA", abstract: "Adaptive learning system personalizing content delivery using AI recommender engines." },
  { title: "Video Surveillance with Mobile AI", venue: "IEEE", abstract: "On-device inference for real-time anomaly detection in surveillance feeds." },
];

export const Research = () => (
  <section id="research" className="relative py-24">
    <div className="container mx-auto px-4">
      <SectionHeading
        eyebrow="Research"
        title={<>11+ <span className="text-gradient">Publications</span></>}
        description="Peer-reviewed work across IEEE & AITA conferences spanning AI, ML, deep learning and applied systems."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
        {papers.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            whileHover={{ y: -6 }}
            className="relative group"
          >
            <div className="glass-card p-6 h-full flex flex-col transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-[0_0_40px_hsl(var(--primary)/0.25)]">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <FileText className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="text-xs font-mono px-2 py-1 rounded-full bg-primary/10 text-primary">
                  {p.venue}
                </span>
              </div>
              <h3 className="font-display font-bold text-base mb-2 leading-tight">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground flex-1 mb-4">
                {p.abstract}
              </p>
              <Button
                variant="ghost"
                size="sm"
                className="self-start text-primary hover:text-primary hover:bg-primary/10 -ml-3"
              >
                View Paper <ExternalLink className="ml-2 h-3 w-3" />
              </Button>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
