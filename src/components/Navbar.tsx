import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';

// Define types for NavLink props
interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

// Define types for navigation items
interface NavItem {
  to: string;
  label: string;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activePath, setActivePath] = useState('/');
  const { scrollY } = useScroll();
  const location = useLocation();

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navbarVariants = {
    visible: { 
      y: 10,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30
      }
    },
    hidden: { 
      y: -100,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 30
      }
    }
  };

  const menuItemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  // NavLink component with TypeScript props
  const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
    const isActive = activePath === to;
    
    return (
      <Link to={to}>
        <motion.div
          className="relative px-3 py-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className={`text-lg ${isActive ? 'text-yellow-200 font-bold' : 'text-white font-semibold'}`}>
            {children}
          </span>
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-yellow-200"
            initial={{ width: isActive ? "100%" : "0%" }}
            animate={{ width: isActive ? "100%" : "0%" }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>
      </Link>
    );
  };

  // Define navigation items
  const navigationItems: NavItem[] = [
    { to: "/", label: "Home" },
    { to: "/addcampaign", label: "Add Campaign" },
    { to: "/dashboard", label: "Dashboard" },
    { to: "/login", label: "Login" }
  ];

  return (
    <motion.nav
      variants={navbarVariants}
      animate={hidden ? "hidden" : "visible"}
      initial="visible"
      className="fixed top-0 w-full z-50"
    >
      <motion.div 
        className="bg-gradient-to-r from-gray-900/95 to-blue-900/95 backdrop-blur-md shadow-lg border-b border-gray-800/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0"
            >
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  AdGenie
                </span>
              </Link>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.slice(0, -1).map((item) => (
                <NavLink key={item.to} to={item.to}>
                  {item.label}
                </NavLink>
              ))}
              
              {/* <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/login"
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                >
                  Login
                </Link>
              </motion.div> */}
            </div>

            <motion.div
              whileTap={{ scale: 0.9 }}
              className="md:hidden"
            >
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial="initial"
          animate={isOpen ? "animate" : "exit"}
          variants={{
            animate: {
              height: "auto",
              opacity: 1,
              transition: {
                duration: 0.3,
                staggerChildren: 0.1
              }
            },
            exit: {
              height: 0,
              opacity: 0,
              transition: {
                duration: 0.3
              }
            }
          }}
          className={`md:hidden overflow-hidden ${isOpen ? 'block' : 'hidden'}`}
        >
          <div className="px-4 pt-2 pb-3 space-y-1 bg-gradient-to-r from-gray-900/95 to-blue-900/95 backdrop-blur-md">
            {navigationItems.map((item) => (
              <motion.div
                key={item.to}
                variants={menuItemVariants}
                className="block"
              >
                <Link
                  to={item.to}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    activePath === item.to
                      ? 'text-yellow-200'
                      : 'text-white hover:text-yellow-200'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;