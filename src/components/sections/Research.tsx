import { motion } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { Button } from "@/components/ui/button";

const papers = [
  { title: "Deep Learning Approaches for Sentiment Classification", year: 2024, abstract: "Exploring transformer-based architectures for fine-grained sentiment analysis on multilingual datasets." },
  { title: "Hybrid CNN-LSTM Model for Time Series Forecasting", year: 2024, abstract: "A novel hybrid network combining convolutional feature extraction with sequential LSTM modeling." },
  { title: "Federated Learning in Edge Computing Environments", year: 2023, abstract: "Privacy-preserving distributed learning with low-bandwidth edge devices." },
  { title: "Explainable AI for Medical Image Diagnosis", year: 2023, abstract: "Grad-CAM and SHAP-driven interpretability frameworks for radiology pipelines." },
  { title: "Reinforcement Learning for Adaptive Curriculum", year: 2023, abstract: "RL agents that personalize learning trajectories for engineering students." },
  { title: "GAN-based Data Augmentation for Imbalanced Classes", year: 2023, abstract: "Synthetic minority generation improving classifier robustness on tabular data." },
  { title: "Optimization of Database Query Plans using ML", year: 2022, abstract: "Learning-based cost estimation for complex SQL queries across distributed engines." },
  { title: "NLP Techniques for Code Summarization", year: 2022, abstract: "Encoder-decoder models that generate readable summaries from source code." },
  { title: "IoT Security with Lightweight Cryptography", year: 2022, abstract: "Resource-aware crypto schemes tailored for constrained IoT nodes." },
  { title: "Cloud-native Microservices Performance Study", year: 2022, abstract: "Empirical evaluation of service mesh patterns under variable load." },
  { title: "AI Tutoring Systems in Higher Education", year: 2021, abstract: "Conversational tutors that augment classroom instruction at scale." },
];

export const Research = () => (
  <section id="research" className="relative py-24">
    <div className="container mx-auto px-4">
      <SectionHeading
        eyebrow="Research"
        title={<>11 <span className="text-gradient">Publications</span></>}
        description="Peer-reviewed work spanning AI, ML, NLP, systems and applied computing."
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
                  {p.year}
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
