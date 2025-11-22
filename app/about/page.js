import MotionSection from "@/components/MotionSection";
import MotionDiv from "@/components/MotionDiv";
import { Award, Heart, Target, Users } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";

export default function About() {
 const services = [
    {
      title: "Human-Centered",
      icon: <Heart size={40} className="text-blue-600" />,
      desc: "We believe great design starts with understanding people. Every decision we make is guided by user needs and real-world impact.",
    },
    {
      title: "Results-Driven",
      icon: <Target size={40} className="text-blue-600" />,
      desc: "Beautiful products that don't perform are just art. We focus on measurable outcomes and continuous improvement.",
    },
    {
      title: "Collaborative",
      icon: <Users size={40} className="text-blue-600" />,
      desc: "Your success is our success. We work as an extension of your team, bringing expertise while respecting your vision.",
    },
    {
      title: "Excellence",
      icon: <Award size={40} className="text-blue-600" />,
      desc: "We're not satisfied with good enough. From code quality to pixel perfection, we sweat the details that matter.",
    },
  ];


  return (
    <div className="min-h-screen flex flex-col">

      {/* HERO SECTION */}
      <MotionSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 py-20"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            About{" "}
            
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            We're a team of designers, developers, and strategists passionate
            about crafting digital experiences that make a real impact. Since
            2019, we've partnered with startups and enterprises to bring bold
            ideas to life.
          </p>
        </div>
      </MotionSection>

      {/* VALUES SECTION */}
      <section className="container mx-auto px-6 py-16">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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
        </MotionDiv>
      </section>

      {/* STORY SECTION */}
      <section className="container mx-auto px-6 py-16 mb-16">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Bankai was founded in 2019 by a group of developers and designers
              who saw an opportunity to do things differently. We were tired of
              agencies that prioritized billable hours over outcomes, and
              consultants who talked strategy but couldn't execute.
            </p>

            <p>
              Today, we're a team of 20+ specialists working with clients across
              industries. From early-stage startups building their first MVP to
              established companies launching new digital products, we bring the
              same commitment to quality and partnership.
            </p>

            <p>
              Our name comes from the Japanese word meaning "full release" — the
              moment when potential becomes reality. That's what we do: help you
              unlock the full potential of your digital products.
            </p>
          </div>
        </MotionDiv>
      </section>

    </div>
  );
}
