import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';
import { ChevronDown, Sparkles, Target, Brain, Users, ArrowRight } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const stagger = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.2 }
};

const LandingPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen relative flex flex-col items-center justify-center text-center px-4">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-gradient" />
        
        {/* Floating elements */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
            animate={{ backgroundPosition: ["0%", "100%"] }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          >
            AdGenie
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-3xl mt-6 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Transform Your Advertising with AI-Powered Magic
          </motion.p>

          <motion.div 
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link
              to="/addcampaign"
              className="group relative inline-flex items-center px-8 py-4 text-lg rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
            >
              Get Started
              <motion.div
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <motion.div variants={stagger} initial="initial" whileInView="whileInView" className="max-w-6xl mx-auto">
          <motion.h2 variants={fadeIn} className="text-4xl font-bold text-center mb-16">
            The Future of Advertising
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Sparkles className="w-8 h-8 text-blue-400" />,
                title: "AI-Powered Creation",
                description: "Generate stunning ad creative in seconds with our advanced AI technology"
              },
              {
                icon: <Target className="w-8 h-8 text-purple-400" />,
                title: "Precision Targeting",
                description: "Reach your ideal audience with laser-focused precision and smart analytics"
              },
              {
                icon: <Brain className="w-8 h-8 text-pink-400" />,
                title: "Smart Optimization",
                description: "Continuous learning and optimization for maximum campaign performance"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="relative p-8 rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className="absolute -top-4 left-8 p-2 bg-gray-900 rounded-xl">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-900/50">
        <motion.div 
          variants={stagger}
          initial="initial"
          whileInView="whileInView"
          className="max-w-6xl mx-auto px-4"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: "200%", label: "Average ROI" },
              { number: "10M+", label: "Ads Generated" },
              { number: "98%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="p-8 rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900"
              >
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  {stat.number}
                </div>
                <div className="mt-2 text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto text-center px-4"
        >
          <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Advertising?</h2>
          <Link
            to="/signup"
            className="inline-flex items-center px-8 py-4 text-lg rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
          >
            Start Free Trial
            <motion.div
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 text-center text-gray-400">
        <div className="max-w-6xl mx-auto px-4">
          <p>© 2024 AdGenie. All Rights Reserved.</p>
          <div className="mt-4 space-x-4">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;