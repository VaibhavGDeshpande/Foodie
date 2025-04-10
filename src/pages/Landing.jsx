import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, UtensilsCrossed, Clock, Star, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import Footer from '../components/Footer'

export default function Landing() {
  const { user } = useAuth();
  const isLoggedIn = user?.isAuthenticated;
  const destination = isLoggedIn ? '/menu' : '/login';

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <motion.div
              className="text-white max-w-2xl"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Delicious Food Delivered To Your Doorstep
              </h1>
              <p className="text-xl mb-8">
                Experience the finest cuisine from top-rated restaurants, delivered fresh and hot to your location.
              </p>
              <Link
                to={destination}
                className="bg-orange-500 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-orange-600 inline-flex items-center"
              >
                Order Now <ArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Why Choose <span className="text-orange-500">FoodieHub?</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <UtensilsCrossed className="w-12 h-12 mx-auto text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Food</h3>
              <p className="text-gray-600">
                Carefully selected restaurants serving the best cuisine
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Clock className="w-12 h-12 mx-auto text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Quick delivery to your doorstep within 30 minutes
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <Star className="w-12 h-12 mx-auto text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Best Service</h3>
              <p className="text-gray-600">
                Rated 4.8/5 by our satisfied customers
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        className="py-16 bg-orange-50 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Ready to Satisfy Your Hunger?</h2>
        <p className="text-gray-600 mb-6">
          Choose from a variety of dishes and get your meal delivered in no time.
        </p>
        <Link
          to={destination}
          className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600"
        >
          Start Ordering <ShoppingCart className="ml-2 h-5 w-5" />
        </Link>
      </motion.div>
      <Footer />
    </div>
  );
}
