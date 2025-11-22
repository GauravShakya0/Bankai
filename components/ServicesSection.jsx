import { Code, Smartphone, Brush, Cloud } from "lucide-react";
import MotionSection from "@/components/MotionSection";
import MotionDiv from "@/components/MotionDiv";
import {
  Code2,
  Palette,
  Rocket,
  Users,
  TrendingUp,
  Zap,
  CheckCircle2,
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Custom Software Development",
      icon: <Code size={40} className="text-blue-600" />,
      desc: "High-quality, scalable and secure systems for enterprises.",
    },
    {
      title: "Mobile App Development",
      icon: <Smartphone size={40} className="text-blue-600" />,
      desc: "Fast, intuitive and modern Android/iOS app development.",
    },
    {
      title: "UI/UX Design",
      icon: <Brush size={40} className="text-blue-600" />,
      desc: "Beautiful, user-centric interfaces for seamless experiences.",
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud size={40} className="text-blue-600" />,
      desc: "Optimize infra with AWS, Azure, CI/CD and modern pipelines.",
    },
  ];

  return (
    <section >
      {/* <h2 className="text-4xl font-bold text-center">Our Services</h2> */}
 <MotionSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 py-20"
      >
         <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Our <span className="gradient-primary bg-clip-text ">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From initial concept to market success, we provide end-to-end digital solutions
            tailored to your business goals.
          </p>
        </div>
      </MotionSection>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mt-12 px-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="p-8 border rounded-2xl shadow hover:shadow-xl bg-white transition"
          >
            <div className="mb-4">{s.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>

<section className="container mx-auto px-6 py-16">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">How We Work</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Discovery & Planning</h3>
                  <p className="text-muted-foreground text-sm">
                    We start by understanding your goals, users, and constraints. Together we
                    define success metrics and project scope.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Design & Prototyping</h3>
                  <p className="text-muted-foreground text-sm">
                    Interactive prototypes let you experience the product before development
                    begins. We iterate based on your feedback.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Development & Testing</h3>
                  <p className="text-muted-foreground text-sm">
                    Agile sprints with regular demos. You stay involved throughout, with
                    opportunities to adjust as we learn.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Launch & Optimization</h3>
                  <p className="text-muted-foreground text-sm">
                    Smooth deployment with monitoring and support. We track performance and
                    user behavior from day one.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Growth & Iteration</h3>
                  <p className="text-muted-foreground text-sm">
                    Launch is just the beginning. We help you analyze data, test
                    improvements, and scale what works.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Ongoing Support</h3>
                  <p className="text-muted-foreground text-sm">
                    Maintenance, updates, and feature additions. We're your long-term
                    technology partner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </MotionDiv>
      </section>



    </section>
  );
}
