import { motion } from 'framer-motion';
import { Download, Code, Palette, Smartphone, Database, Globe } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Frontend Development', icon: Code, level: 90 },
    { name: 'UI/UX Design', icon: Palette, level: 85 },
    { name: 'Mobile Development', icon: Smartphone, level: 80 },
    { name: 'Backend Development', icon: Database, level: 75 },
    { name: 'Web Development', icon: Globe, level: 95 },
  ];

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
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const techStacks = [
    { label: 'React', className: 'devicon-react-original colored' },
    { label: 'HTML5', className: 'devicon-html5-plain colored' },
    { label: 'JavaScript', className: 'devicon-javascript-plain colored' },
    { label: 'CSS3', className: 'devicon-css3-plain colored' },
    { label: 'TailwindCSS', className: 'devicon-tailwindcss-plain colored' },
    { label: 'Bootstrap', className: 'devicon-bootstrap-plain colored' },
    { label: 'SQL', className: 'devicon-mysql-plain colored' },
    { label: 'Android Studio', className: 'devicon-androidstudio-plain colored' },
    { label: 'Firebase', className: 'devicon-firebase-plain colored' },
    { label: 'PHP', className: 'devicon-php-plain colored' },
    { label: 'Java', className: 'devicon-java-plain colored' },
    { label: 'npm', className: 'devicon-npm-original-wordmark colored' },
    { label: 'GitHub', className: 'devicon-github-original' },
    { label: 'Node.js', className: 'devicon-nodejs-plain colored' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
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
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Passionate Developer & Designer
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm a creative developer with over 5 years of experience building
                  digital products that are both beautiful and functional. I specialize
                  in modern web technologies and have a keen eye for design.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies,
                  contributing to open source projects, or sharing knowledge with
                  the developer community.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">5+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
                </div>
              </div>

              {/* Download CV Button */}
              <motion.button
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </motion.button>
            </motion.div>

            {/* Skills */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center lg:text-left">
                Skills & Technologies
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <skill.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Tech Stack Icons Only */}
              <div className="pt-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 text-center lg:text-left">Tech Stack</h4>
                <div className="grid grid-cols-5 sm:grid-cols-7 lg:grid-cols-8 gap-4 justify-items-center">
                  {techStacks.map((tech) => (
                    <div key={tech.label} className="group" aria-label={tech.label} title={tech.label}>
                      <i className={`${tech.className} text-4xl transition-transform duration-200 group-hover:scale-110`}></i>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
