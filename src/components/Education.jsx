import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  Trophy,
  Star,
  Code,
  Smartphone,
  Palette,
  FileText,
  ExternalLink,
} from "lucide-react";
import cert1PDF from "../assets/certifications/awards-certification.pdf";

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </motion.div>

          {/* Education Content */}
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
              {/* University Info */}
              <div className="text-center mb-12">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
                    <GraduationCap className="w-12 h-12 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Romblon State University (Main Campus)
                </h3>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                  Bachelor of Science in Information Technology
                </p>
                <div className="flex items-center justify-center space-x-2 text-lg text-gray-700 dark:text-gray-300">
                  <Calendar className="w-5 h-5" />
                  <span>August 2021 - July 2025</span>
                </div>
                <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg">
                  <p className="text-lg font-semibold text-gray-800 dark:text-white">
                    General Weighted Average (GWA):{" "}
                    <span className="text-green-600 dark:text-green-400">
                      1.56
                    </span>
                  </p>
                </div>
              </div>

              {/* Academic Awards */}
              <div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center">
                  <Trophy className="w-8 h-8 mr-3 text-yellow-500" />
                  Academic Awards
                </h4>

                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    {
                      award: "Best Programmer Award",
                      year: "2025",
                      icon: Code,
                      color: "from-blue-500 to-blue-600",
                    },
                    {
                      award: "Best in Capstone Award",
                      year: "2025",
                      description: "MealKit: A Meal Planner Mobile Application",
                      icon: Smartphone,
                      color: "from-purple-500 to-purple-600",
                    },
                    {
                      award: "Best in Graphic Artist",
                      year: "2025",
                      icon: Palette,
                      color: "from-pink-500 to-pink-600",
                    },
                    {
                      award: "Multimedia Excellence Award",
                      year: "2025",
                      icon: Star,
                      color: "from-yellow-500 to-orange-500",
                    },
                  ].map((award, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div
                          className={`p-3 bg-gradient-to-r ${award.color} rounded-lg`}
                        >
                          <award.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                            {award.award}
                          </h5>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                            {award.year}
                          </p>
                          {award.description && (
                            <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                              {award.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* ===== Certifications Button ===== */}
              <div className="mt-12 text-center">
                <motion.a
                  href={cert1PDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <FileText className="w-5 h-5" />
                  <span>View Certifications</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
