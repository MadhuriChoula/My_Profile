"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Building2,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";

const experiences = [
  {
    company: "Cognizant Technology Solutions India, Hyderabad",
    title: "Associate Software Engineer",
    period: "Sep 2022 – Present",
    location: "Durgam Cheruvu, Hyderabad",
    description: [
      "Developed and maintained 10+ AWS Lambda functions, serverless backends that manage the infrastructure.",
      "Demonstrated deep understanding of advanced JavaScript concepts including closures, scope chain, promises, asynchronous programming, and ES6+ features.",
      "Built comprehensive unit test suites using Jest, achieving 85%+ code coverage and reducing production defects.",
      "Developed interactive and stateful React components using lifecycle methods, hooks, state, props, and event handling, delivering responsive Interfaces.",
      "Optimized high-traffic content listing pages (10k+ media records) using React.memo, useMemo, and useCallback to prevent unnecessary re-renders.",
      "Used useMemo to cache derived state for recommendation carousels and trending sections.",
      "Applied React.memo to reusable components (media cards, thumbnail grids) to improve scroll performance.",
      "Improved page load responsiveness by 30% during peak streaming hours.",
      "Reduced unnecessary re-renders in video catalog components by memoizing expensive filtering and sorting logic.",
      "Resolved SQS message failures, retry issues, and CloudFormation template errors to ensure backward compatibility and reliable deployments.",
      "Configured Amazon SQS queues to process background tasks such as media upload processing and email notifications, implemented message producers in Node.js, and handled retries using dead-letter queues (DLQ) for failed messages.",
      "Supported production releases, including branching strategies, data migrations, and automated deployments using Jenkins, resulting in a 20% faster release cycle.",
      "Actively participated in Agile Scrum methodology, contributing to daily stand-ups, sprint planning, sprint reviews, retrospectives, and release planning to ensure timely delivery.",
    ],
  },
  {
    company: "Cognizant Technology Solutions India, Hyderabad",
    title: "Full Stack Developer Intern",
    location: "Durgam Cheruvu, Hyderabad",
    period: "Mar 2022 - Sep 2022",
    description: [
      "Developed responsive single-page applications using React.js and React Router.",
      "Implemented state management using Context API / Redux Toolkit.",
      "Consumed REST APIs using Axios and handled asynchronous data fetching.",
      "Collaborated in pair programming sessions, gaining hands-on experience with Agile methodologies and Git workflows.",
      "Improved strong soft skills in communication, teamwork, time management, and consistently meeting deadlines.",
    ],
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen pt-14 sm:pt-20 px-2 sm:px-4 w-full pb-10 sm:pb-20">
      <ScrollAnimation>
        <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-6 sm:mb-12 gradient-text flex items-center gap-2 sm:gap-3">
          <Briefcase className="w-6 h-6 sm:w-8 sm:h-8" />
          Professional Experience
        </h2>
      </ScrollAnimation>

      <div className="space-y-6 sm:space-y-12 w-full">
        {experiences.map((exp, index) => (
          <ScrollAnimation key={exp.title}>
            <div className="group relative bg-gray-800/50 rounded-xl sm:rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5 w-2/3 sm:w-2/3 mx-auto">
              <div className="p-4 sm:p-8">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="p-2 sm:p-3 bg-white/10 rounded-lg sm:rounded-xl group-hover:bg-white/20 transition-colors">
                    <Building2 className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-gray-400 text-base sm:text-lg">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                  <MapPin className="w-4 h-4" />
                  <span>{exp.location}</span>
                  <span>•</span>
                  <span>{exp.period}</span>
                </div>

                <ul className="space-y-3 sm:space-y-4">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-300 text-sm sm:text-base"
                    >
                      <ArrowRight className="w-5 h-5 mt-0.5 text-gray-400 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* View Certificate button removed */}
              </div>

              {/* Image removed */}
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Experience;
