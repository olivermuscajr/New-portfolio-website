import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import MealKit_image from '../assets/MealKit_image.jpg';
import Weather_image from '../assets/Weather-app-screenshot.png';
import Record_Management_System_image from '../assets/sal_rms_ss.png'
import Car_Rental_System_image from '../assets/car-rental-img.png';
import Inventory_Management_System_image from '../assets/Inventory-image.png';
import Ecommerce_Website_image from '../assets/e-commerce.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'MealKit: A Meal Planner Application with Admin Panel',
      description: 'A capstone project for my college degree. It is a meal planner application that allows users to plan their meals for the week.',
      image: MealKit_image,
      technologies: ['Android Studio', 'Kotlin', 'Firebase', 'JavaScript', 'JSON'],
      liveUrl: '#',
      githubUrl: 'https://github.com/olivermuscajr/Recipe-Meal-Planner-Android-Application.git',
      featured: true,
      isLiveURL: false,
    },
    {
      id: 2,
      title: 'Inventory Management System (IvenTrack)',
      description: 'An Inventory Management System with frontend only using React and TailwindCSS.',
      image: Inventory_Management_System_image,
      technologies: ['React', 'Tailwind', 'DaisyUI'],
      liveUrl: 'https://inventory-management-system-fronten-beta.vercel.app//',
      githubUrl: 'https://github.com/olivermuscajr/Inventory-management-system-frontend.git',
      featured: false,
      isLiveURL: true,
    },
    {
      id: 3,
      title: 'Car Rental System (Frontend)',
      description: 'A simple car rental system with frontend only using React and TailwindCSS.',
      image: Car_Rental_System_image,
      technologies: ['React', 'Tailwind',],
      liveUrl: 'https://car-rental-frontend-seven-topaz.vercel.app/',
      githubUrl: 'https://github.com/olivermuscajr/car-rental-frontend.git',
      featured: false,
      isLiveURL: true,
    },
    
    {
      id: 4,
      title: 'Weather App Dashboard',
      description: 'A simple yet responsive weather dashboard with location-based forecasts, and weather analytics.',
      image: Weather_image,
      technologies: ['React', 'Weather API', 'CSS', 'Express JS', 'Tailwind', 'Node.js'],
      liveUrl: 'https://weather-app-umber-beta-81.vercel.app/',
      githubUrl: 'https://github.com/olivermuscajr/weather-app.git',
      featured: false,
      isLiveURL: true,
    },
    {
      id: 5,
      title: 'Record Management System',
      description: 'A record management system for benefeciaries in Calatrava, Romblon with simple data analytics with Pie Chart using Java.',
      image: Record_Management_System_image,
      technologies: ['Java', 'SQL', 'Xampp', 'JFreeChart'],
      liveUrl: '#',
      githubUrl: 'https://github.com/olivermuscajr/Record-Management-System---Share-A-Love.git',
      featured: false,
      isLiveURL: false,
    },
    {
      id: 6,
      title: 'Ecommerce Website',
      description: 'A responsive ecommerce website with frontend only using React and TailwindCSS.',
      image: Ecommerce_Website_image,
      technologies: ['React', 'Tailwind', 'Lucide React', 'React Router'],
      liveUrl: 'https://e-commerce-website-shoplift.vercel.app/',
      githubUrl: 'https://github.com/olivermuscajr/e-commerce-website-shoplift.git',
      featured: true,
      isLiveURL: true,
    }
    
    
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

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
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
              My Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6" />
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience
              in web development and design.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className={`group relative bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                  project.featured ? 'lg:col-span-2' : ''
                }`}
                whileHover={{ y: -5 }}
              >
                {/* Project Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.liveUrl}
                      className="p-3 bg-white rounded-full text-gray-900 hover:bg-blue-600 hover:text-white transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="View live demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-800 hover:text-white transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="View source code"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-full">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  {project.isLiveURL && (
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.liveUrl}
                      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      className="flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4 mr-2" />
                        Code
                      </motion.a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View More Button */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            {/* <motion.button
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
            </motion.button> */}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
