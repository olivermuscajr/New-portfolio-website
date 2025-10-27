import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import profileImage from "../assets/oliver-front-photo.png";
import profileImageBack from "../assets/oliver-back-photo.JPG";
import { useState } from "react";
import Typewriter from "./Typewriter";

const Hero = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] dark:opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left: Main Content */}
          <motion.div
            variants={itemVariants}
            className="space-y-6 text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Oliver Musca Jr.
              </span>
            </h1>
            <motion.p
              className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto lg:mx-0"
              variants={itemVariants}
            >
              <Typewriter />
            </motion.p>
            <motion.p
              className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0"
              variants={itemVariants}
            >
              “I create beautiful, functional, and user-centered web experiences
              that deliver impact.”
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
              <motion.button
                onClick={scrollToProjects}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>
              <motion.a
                href="/OliverMusca_CV.pdf"
                download
                className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start space-x-6"
            >
              {[
                {
                  icon: Github,
                  href: "https://github.com/olivermuscajr",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/oliver-musca-84171b219",
                  label: "LinkedIn",
                },
                /* { icon: Mail, href: '#', label: 'Email' }, */
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-48 h-64 sm:w-64 sm:h-80 lg:w-80 lg:h-[26rem] cursor-pointer perspective relative group inline-block">
              <motion.div
                className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                onClick={() => setIsFlipped(!isFlipped)}
              >
                {/* Front Side */}
                <div
                  className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-2xl"
                  style={{ transform: "rotateY(180deg)" }}
                >
                  <img
                    src={profileImage}
                    alt="Oliver Profile Front"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Back Side */}
                <div className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-2xl transform rotateY-180">
                  <img
                    src={profileImageBack}
                    alt="Oliver Profile Back"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              <span
                className="bg-dark-500 absolute bottom-full mb-2 left-1/2 -translate-x-1/2
               opacity-0 group-hover:opacity-100 transition-opacity duration-300
               bg-gray-800 text-white text-sm rounded px-2 py-1 whitespace-nowrap"
              >
                Click to Flip
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
