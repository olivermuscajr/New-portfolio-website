import { useState  } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Facebook } from 'lucide-react';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);

    
        e.preventDefault();
    
        emailjs
          .sendForm('service_04v1qcs', 'template_0tq7myo', form.current, {
            publicKey: 'QW31g68cVVJ7UCwos',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      // Reset form
      setFormData({ user_name: '', user_email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'olivermuscajr17@gmail.com',
      href: 'mailto:olivermuscajr17@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+63 (999) 431-8519',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Andres, Romblon',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/olivermuscajr', label: 'GitHub' },
    { icon: Linkedin, href: 'www.linkedin.com/in/oliver-musca-84171b219', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://www.facebook.com/oliververgaramuscajr/', label: 'Facebook' },
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
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
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
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6" />
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you.
              Let's create something amazing together!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Send me a message
                </h3>
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="user_name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="user_name"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-200"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="user_email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="user_email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-200 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                      whileHover={{ x: 5 }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors duration-200">
                        <info.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                        <p className="text-gray-900 dark:text-white font-medium">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Follow Me
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={label}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Let's work together!
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  I'm always interested in new opportunities and exciting projects.
                  Whether you have a question or just want to say hi, I'll try my best
                  to get back to you!
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
