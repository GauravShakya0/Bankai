import { motion } from "framer-motion";
import MotionSection from "@/components/MotionSection";
import MotionDiv from "@/components/MotionDiv";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm shadow-soft hover:shadow-medium transition-smooth p-6 group"
    >
      {icon && (
        <div className="mb-4 text-primary transform group-hover:scale-110 transition-smooth">
          {icon}
        </div>
      )}
      <h4 className="font-semibold text-lg mb-2 text-foreground">{title}</h4>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </MotionDiv>
  );
}
