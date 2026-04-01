/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { Bus, Search, MapPin, Zap, ShieldCheck, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [busId, setBusId] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleTrack = (e: FormEvent) => {
    e.preventDefault();
    if (busId.trim()) {
      // As per requirement: redirect to map.html?busId=value
      // In a real SPA we might use a router, but following the prompt's specific instruction:
      window.location.href = `/map.html?busId=${encodeURIComponent(busId)}`;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Bus className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Smart<span className="text-blue-600">Track</span>
              </span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <a href="#" className="hover:text-blue-600 transition-colors">Home</a>
              <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
              <a href="#" className="hover:text-blue-600 transition-colors">About</a>
              <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition-all shadow-sm">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-600">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                <a href="#" className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md">Home</a>
                <a href="#features" className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md">Features</a>
                <a href="#" className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md">About</a>
                <button className="w-full mt-4 bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold">
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50 via-transparent to-transparent opacity-70" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-50 rounded-full">
              Live Transit Updates
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Track Your Bus in <br />
              <span className="text-blue-600">Real-Time</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Enter your Bus ID below to see the live location, estimated arrival times, and route details instantly.
            </p>

            {/* Tracking Input */}
            <div className="max-w-md mx-auto">
              <form onSubmit={handleTrack} className="relative flex items-center">
                <div className="absolute left-4 text-slate-400">
                  <Search size={20} />
                </div>
                <input
                  type="text"
                  placeholder="Enter Bus ID (e.g. B-102)"
                  value={busId}
                  onChange={(e) => setBusId(e.target.value)}
                  className="w-full pl-12 pr-32 py-4 bg-white border-2 border-slate-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-lg shadow-sm"
                />
                <button
                  type="submit"
                  className="absolute right-2 bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition-all active:scale-95 shadow-md"
                >
                  Track Bus
                </button>
              </form>
              <p className="mt-4 text-sm text-slate-500">
                Popular routes: <span className="text-blue-600 cursor-pointer hover:underline">Route 42</span>, <span className="text-blue-600 cursor-pointer hover:underline">Express 10</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose SmartTrack?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Our platform leverages cutting-edge GPS technology to provide the most accurate transit data for commuters.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Real-time Tracking</h3>
              <p className="text-slate-600 leading-relaxed">
                Get live GPS updates every 5 seconds. Never miss your bus again with precise location mapping.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
                <Search size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Search by Bus ID</h3>
              <p className="text-slate-600 leading-relaxed">
                Quickly find any bus in the fleet by its unique identifier. Access route history and schedules instantly.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:shadow-blue-500/5 transition-all"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Low-cost Solution</h3>
              <p className="text-slate-600 leading-relaxed">
                Designed for efficiency. Our lightweight platform works perfectly even on slow mobile connections.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Reliable Data You Can Trust</h2>
              <p className="text-slate-400 mb-8 text-lg">
                We partner with local transport authorities to ensure every data point is verified and accurate.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="text-blue-400" />
                  <span className="text-sm font-medium">Verified GPS</span>
                </div>
                <div className="w-px h-4 bg-slate-700" />
                <div className="flex items-center gap-2">
                  <ShieldCheck className="text-blue-400" />
                  <span className="text-sm font-medium">24/7 Monitoring</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
              <div className="bg-slate-800 p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">99.9%</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest">Uptime</div>
              </div>
              <div className="bg-slate-800 p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">50k+</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest">Daily Users</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <Bus className="text-blue-600 w-5 h-5" />
              <span className="font-bold text-slate-900">SmartTrack</span>
            </div>
            <div className="flex gap-8 text-sm text-slate-500">
              <a href="#" className="hover:text-blue-600">Privacy Policy</a>
              <a href="#" className="hover:text-blue-600">Terms of Service</a>
              <a href="#" className="hover:text-blue-600">Contact</a>
            </div>
            <p className="text-sm text-slate-400">
              © 2026 Smart Public Transport Tracker. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
