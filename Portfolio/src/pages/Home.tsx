"use client";

import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Allura } from "next/font/google";
import { VercelLogo } from "@/components/TechLogos";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  MessageCircle,
  Copy,
  Check,
  FileDown,
  User,
  Code2,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const allura = Allura({
  weight: "400",
  subsets: ["latin"],
});

const Home = () => {
  const [copied, setCopied] = useState(false);
  const email = "madhurichoula23@gmail.com";
  const whatsappNumber = "+919381933031";

  // ...existing code...

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      if (process.env.NODE_ENV === "development") {
        console.error("Failed to copy:", err);
      }
    }
  };

  const handleEmailClick = (e: React.MouseEvent) => {
    if (window.innerWidth <= 640) {
      // sm breakpoint
      window.location.href = `mailto:${email}`;
      e.preventDefault();
    } else {
      copyToClipboard();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-2 sm:px-4 mt-16 sm:mt-20 md:mt-24 lg:mt-28 w-full">
      <div className=" mb-0 text-center relative z-10 max-w-4xl mx-auto w-full">
        <div className="mb-0 flex flex-col-reverse md:flex-row items-center justify-center gap-6 md:gap-8 w-full">
          <ScrollAnimation>
            <div className="mt-0 w-full max-w-[180px] xs:max-w-[220px] sm:max-w-[260px] md:max-w-[300px] lg:w-80 mb-4 md:mb-0 overflow-hidden rounded-full mx-auto md:mx-0 flex-shrink-0">
              <motion.img
                src="/profile/Potraits.png"
                alt="Madhuri Choula Portrait"
                className="object-cover rounded-full w-full h-44 xs:h-56 sm:h-64 md:h-72 lg:h-80 shadow-xl"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
              />
            </div>
          </ScrollAnimation>
          <div className="mb-0 text-center md:text-left w-full md:w-auto">
            <motion.h1
              className="text-2xl xs:text-3xl sm:text-4xl md:text-3xl font-bold mb-2 sm:mb-3 relative tracking-tighter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Hello there!!
            </motion.h1>
            <motion.h1
              className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 relative tracking-tighter ${allura.className}`}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {"I'm  Madhuri Choula".split("").map((char, idx) => (
                <motion.span
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 24,
                      },
                    },
                  }}
                  style={{ display: char === " " ? "inline-block" : "inline" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>
            <motion.h1
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-0 sm:mb-1 relative tracking-tighter whitespace-nowrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Full Stack Engineer
            </motion.h1>
          </div>
        </div>

        <motion.p
          className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-400 mb-4 sm:mb-5 max-w-2xl mx-auto px-2 sm:px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I am a Software Engineer with 4+ years of experience working on
          real-world applications using ReactJS, Node.js, and AWS.
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-3 sm:gap-6 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex flex-col xs:flex-row justify-center gap-3 xs:gap-4 w-full">
            <Link
              href="/files/Resume/Madhu's Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-black rounded-full text-sm sm:text-base font-medium hover:bg-gray-100 transition-colors flex items-center gap-2 w-full xs:w-auto justify-center"
            >
              <FileDown className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              Download Resume
            </Link>
            <Link
              href="/about"
              className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white/10 text-white rounded-full text-sm sm:text-base font-medium hover:bg-white/20 transition-colors flex items-center gap-2 w-full xs:w-auto justify-center"
            >
              <User className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              About Me
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 justify-items-center gap-4 sm:gap-6 mt-8 sm:mt-12 max-w-xs sm:max-w-none mx-auto w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="https://www.linkedin.com/in/madhuri-choula-535218329/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group w-full"
            whileHover={{ y: -2 }}
            aria-label="Visit LinkedIn profile"
          >
            <div className="p-3 rounded-xl transition-colors mb-2 w-full max-w-[200px]">
              <Linkedin
                className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-white transition-colors mx-auto"
                aria-hidden="true"
              />
            </div>
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <span className="text-base sm:text-lg font-semibold">1500+</span>
              <span className="text-xs sm:text-sm text-gray-400">
                Connections
              </span>
            </motion.div>
          </motion.a>

          <motion.a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group w-full"
            whileHover={{ y: -2 }}
            aria-label="Contact via WhatsApp"
          >
            <div className="p-3 rounded-xl transition-colors mb-2 w-full max-w-[200px]">
              <MessageCircle
                className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-white transition-colors mx-auto"
                aria-hidden="true"
              />
            </div>
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <span className="text-base sm:text-lg font-semibold">24x7</span>
              <span className="text-xs sm:text-sm text-gray-400">
                WhatsApp Me
              </span>
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
