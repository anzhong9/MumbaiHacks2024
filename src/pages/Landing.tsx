import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-purple-600 text-white py-20 text-center">
        <h1 className="text-5xl font-bold">Welcome to AdGenie</h1>
        <p className="text-lg mt-4">
          AI-powered Ad Campaigns and Personalized Ads tailored for your audience.
        </p>
        <div className="mt-8">
          <Link
            to="/login"
            className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500"
          >
            Login to Get Started
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-purple-600">How AdGenie Works</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-white p-8 shadow-md rounded-lg text-center">
            <h3 className="text-2xl font-semibold text-purple-600">1. Create Your Ad Campaign</h3>
            <p className="mt-4 text-gray-600">
              Easily set up campaigns and generate personalized ads within minutes.
            </p>
          </div>
          <div className="bg-white p-8 shadow-md rounded-lg text-center">
            <h3 className="text-2xl font-semibold text-purple-600">2. Target Your Audience</h3>
            <p className="mt-4 text-gray-600">
              Select and target the right audience using our AI-driven analytics.
            </p>
          </div>
          <div className="bg-white p-8 shadow-md rounded-lg text-center">
            <h3 className="text-2xl font-semibold text-purple-600">3. AI-Optimized Ads</h3>
            <p className="mt-4 text-gray-600">
              Let our AI analyze where and how to run your ads for maximum impact.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-200 py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-purple-600">Why Choose AdGenie?</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold text-purple-600">Personalized Ads</h3>
            <p className="mt-4 text-gray-600">
              Our platform generates personalized ads for each individual in your audience, ensuring relevance and higher engagement.
            </p>
          </div>
          <div className="bg-white p-8 shadow-md rounded-lg">
            <h3 className="text-2xl font-semibold text-purple-600">Smart Audience Targeting</h3>
            <p className="mt-4 text-gray-600">
              Use advanced targeting tools to ensure your ads reach the right people, increasing conversion rates.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8 text-purple-600">What Our Users Say</h2>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-gray-600 italic">
            “AdGenie transformed our marketing strategy. The personalized ads increased our conversion rates by 30%, and the AI targeting saved us hours of manual work.”
          </p>
          <p className="mt-4 text-gray-800 font-bold">— Jane Doe, Marketing Manager</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-purple-600 text-white py-16 px-8 text-center">
        <h2 className="text-3xl font-bold">Ready to Boost Your Campaigns?</h2>
        <p className="mt-4">Sign up and let AdGenie do the hard work for you!</p>
        <div className="mt-6">
          <Link
            to="/signup"
            className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500"
          >
            Get Started for Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p>© 2024 AdGenie. All Rights Reserved.</p>
        <p className="mt-2">
          <Link to="/privacy" className="underline">
            Privacy Policy
          </Link>{' '}
          |{' '}
          <Link to="/terms" className="underline">
            Terms of Service
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
