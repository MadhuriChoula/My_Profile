"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Code2,
  Layout,
  Server,
  Database,
  MessageSquare,
  Lightbulb,
  Users,
  Brain,
  Cloud,
  Terminal,
  Wrench,
  Briefcase,
  GraduationCap,
  Award,
  Globe,
  Italic,
} from "lucide-react";
import {
  JavaScriptLogo,
  HTML5Logo,
  CSSLogo,
  ReactLogo,
  TypeScriptLogo,
  NodeLogo,
  MongoDBLogo,
  VSCodeLogo,
  GitLogo,
  TailwindLogo,
  NextjsLogo,
  VirtualBoxLogo,
  VercelLogo,
} from "@/components/TechLogos";
import { ScrollAnimation } from "@/components/ScrollAnimation";

const About = () => {
  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Amazon Web Services Cloud Practitioner",
      description: "Certified AWS Cloud Practitioner (Credentials)",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Sapphire Award - Cognizant",
      description: "Raising the bar - Promoted to Associate Software Engineer",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "NPTEL - C Programming Foundation",
      description: "Completed certification in C Programming (Credentials)",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Programming Foundations with JavaScript, HTML and CSS",
      description: "Completed certification (Credentials)",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "NPTEL – Programming in Core Java",
      description: "Ranked top 2% (Credentials)",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certificate of Merit (Gold Medal in Academics)",
      description: "Issued by Osmania University (Credentials)",
    },
  ];

  const interests = [
    "Frontend Engineering (React.js, Redux, UI/UX)",
    "Backend APIs (Node.js, Express.js)",
    "Serverless & AWS Cloud",
    "CI/CD & DevOps",
    "Production Support & Error Handling",
    "Agile & Scrum Methodologies",
  ];

  // Skills data and section
  const skills = [
    {
      category: "Languages",
      icon: <Code2 className="w-6 h-6" />,
      items: [
        { name: "JavaScript (ES6+)" },
        { name: "Core Java" },
        { name: "C" },
        { name: "HTML5" },
        { name: "CSS3" },
      ],
    },
    {
      category: "Frontend",
      icon: <ReactLogo className="w-6 h-6" />,
      items: [
        { name: "React.js" },
        { name: "Redux" },
        { name: "React Hooks" },
        { name: "React Router" },
        { name: "Component Lifecycle" },
        { name: "State Management" },
        { name: "UI/UX Development" },
      ],
    },
    {
      category: "Backend & Database",
      icon: <Server className="w-6 h-6" />,
      items: [
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "RESTful APIs" },
        { name: "Event-Driven Architecture" },
        { name: "MongoDB" },
        { name: "SQL" },
        { name: "JSON" },
        { name: "XML" },
      ],
    },
    {
      category: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      items: [
        { name: "AWS (Lambda, SNS, SQS, CloudWatch)" },
        { name: "Jenkins" },
        { name: "GitHub Actions" },
        { name: "CI/CD Pipelines" },
      ],
    },
    {
      category: "Testing & Quality",
      icon: <Wrench className="w-6 h-6" />,
      items: [
        { name: "Jest" },
        { name: "Unit Testing" },
        { name: "Test Coverage (85%+)" },
        { name: "ESLint" },
        { name: "SonarLint" },
        { name: "Code Quality Standards" },
      ],
    },
    {
      category: "Monitoring & Debugging",
      icon: <Lightbulb className="w-6 h-6" />,
      items: [
        { name: "Kibana" },
        { name: "Chrome Developer Tools" },
        { name: "Logging" },
        { name: "Error Handling" },
        { name: "Retry Mechanisms" },
      ],
    },
    {
      category: "Tools & Practices",
      icon: <Briefcase className="w-6 h-6" />,
      items: [
        { name: "Git" },
        { name: "Agile" },
        { name: "Scrum" },
        { name: "Test-Driven Development (TDD)" },
        { name: "Branching Strategies" },
        { name: "Code Reviews" },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-16 sm:pt-20 px-2 sm:px-4 max-w-3xl sm:max-w-4xl mx-auto pb-12 sm:pb-20 w-full">
      <ScrollAnimation>
        <motion.h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 gradient-text">
          About Me
        </motion.h2>
      </ScrollAnimation>

      <div>
        <ScrollAnimation className="space-y-6">
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed text-justify mx-auto">
              Hi, I’m Madhuri Choula. I am a Software Engineer with 4+ years of
              experience working on real-world applications using JavaScript,
              Node.js, React, and AWS. Most of my work involves building backend
              APIs and serverless services with AWS Lambda, SNS, and SQS, and
              connecting them with clean and responsive React-based user
              interfaces.
            </p>
            <p className="text-gray-300 leading-relaxed text-justify mx-auto">
              I’ve spent a lot of time fixing production issues, improving error
              handling, and making sure systems remain stable and backward
              compatible. I regularly write unit tests using Jest, work with
              CI/CD pipelines in Jenkins and GitHub Actions, and enjoy
              collaborating in Agile teams.
            </p>
            <p className="text-gray-300 leading-relaxed text-justify mx-auto">
              My focus is on building robust, maintainable, and scalable systems
              that deliver measurable business value. I am passionate about
              learning new technologies and continuously improving code quality
              and team productivity.
            </p>
          </div>

          {/* Skills Section - Redesigned */}
          <section className="pt-6 sm:pt-10">
            <ScrollAnimation>
              <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 gradient-text">
                Technical Skills
              </h2>
            </ScrollAnimation>
            <ScrollAnimation>
              <p className="mb-6 sm:mb-10 max-w-xl sm:max-w-2xl text-sm sm:text-base">
                My core technical expertise, tools, and platforms for data, ML,
                and finance.
              </p>
            </ScrollAnimation>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {skills.map((skillGroup) => (
                <ScrollAnimation key={skillGroup.category}>
                  <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 border border-white/10 rounded-xl shadow-md p-3 md:p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 bg-white/10 rounded-md text-primary">
                        {skillGroup.icon}
                      </div>
                      <h3 className="text-base font-semibold gradient-text">
                        {skillGroup.category}
                      </h3>
                    </div>
                    <ul className="flex flex-wrap gap-2 md:gap-3">
                      {skillGroup.items.map((skill) => (
                        <li
                          key={skill.name}
                          className="bg-gray-700/40 border border-white/10 rounded-full px-3 py-1.5 text-gray-200 text-xs font-medium shadow-sm hover:bg-white/10 transition-colors"
                        >
                          {skill.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </section>

          <ScrollAnimation>
            <div className="pt-4">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">
                Quick Facts
              </h3>
              <ul className="list-none space-y-3">
                {[
                  <span key="work">
                    Working as a React.JS Full Stack Engineer in Hyderabad
                  </span>,
                  <span key="bachelors">
                    B.Tech in Information Technology, MVSR Engineering College
                    <br />
                    <i>Hyderabad, India</i>
                  </span>,
                  <span key="awards">
                    Gold Medal in Academics, Osmania University
                  </span>,
                ].map((fact, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start space-x-2 text-gray-300"
                  >
                    <span className="w-2 h-2 bg-white rounded-full mt-2" />
                    <span>{fact}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="flex justify-start space-x-4">
              <Link
                href="/files/Resume/Madhu's Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Download Resume
              </Link>
              {/* Skills button removed since skills are now part of this page */}
            </div>
          </ScrollAnimation>
        </ScrollAnimation>
      </div>

      <ScrollAnimation>
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 gradient-text">
            Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <ScrollAnimation key={achievement.title}>
                <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
                  <div className="text-white mb-4">{achievement.icon}</div>
                  <h4 className="text-xl font-semibold mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-400">{achievement.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 gradient-text">
            Areas of Interest
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {interests.map((interest, index) => (
              <ScrollAnimation key={interest}>
                <div className="bg-white/5 p-4 rounded-xl backdrop-blur-sm flex items-center gap-3">
                  <Globe className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">{interest}</span>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default About;
