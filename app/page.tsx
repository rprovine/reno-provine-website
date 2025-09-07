'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import ImageWithFallback from '@/components/ImageWithFallback'
import { 
  FaLinkedin, 
  FaEnvelope, 
  FaPhone,
  FaChartLine,
  FaUsers,
  FaRocket,
  FaBrain,
  FaHandshake,
  FaAward,
  FaFlag,
  FaGraduationCap,
  FaArrowRight,
  FaBars,
  FaTimes,
  FaDollarSign,
  FaChevronRight,
  FaCloud,
  FaNetworkWired,
  FaCogs
} from 'react-icons/fa'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-xl border-b border-hawaiian-ocean/30' : 'bg-transparent'
      }`}>
        <div className="max-width-container section-padding">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold font-playfair text-transparent bg-clip-text bg-gradient-to-r from-hawaiian-sunset to-hawaiian-coral"
            >
              Reno Provine
            </motion.div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6 text-sm">
              <button onClick={() => scrollToSection('executive-record')} className="text-white hover:text-hawaiian-lagoon transition-colors">
                Track Record
              </button>
              <button onClick={() => scrollToSection('solutions-portfolio')} className="text-white hover:text-hawaiian-lagoon transition-colors">
                Solutions
              </button>
              <button onClick={() => scrollToSection('services')} className="text-white hover:text-hawaiian-lagoon transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('technology')} className="text-white hover:text-hawaiian-lagoon transition-colors">
                Technology
              </button>
              <button onClick={() => scrollToSection('military')} className="text-white hover:text-hawaiian-lagoon transition-colors">
                Background
              </button>
              <button onClick={() => scrollToSection('contact')} className="cta-button">
                Schedule Strategy Session
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-executive-light"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden py-4 border-t border-navy-800"
            >
              <div className="flex flex-col gap-4">
                <button onClick={() => scrollToSection('executive-record')} className="text-executive-light hover:text-hawaiian-lagoon transition-colors text-left">
                  Track Record
                </button>
                <button onClick={() => scrollToSection('solutions-portfolio')} className="text-executive-light hover:text-hawaiian-lagoon transition-colors text-left">
                  Solutions
                </button>
                <button onClick={() => scrollToSection('services')} className="text-executive-light hover:text-hawaiian-lagoon transition-colors text-left">
                  Services
                </button>
                <button onClick={() => scrollToSection('technology')} className="text-executive-light hover:text-hawaiian-lagoon transition-colors text-left">
                  Technology
                </button>
                <button onClick={() => scrollToSection('military')} className="text-executive-light hover:text-hawaiian-lagoon transition-colors text-left">
                  Background
                </button>
                <button onClick={() => scrollToSection('contact')} className="cta-button">
                  Schedule Strategy Session
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-hawaiian-ocean/20 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-hawaiian-lagoon/20 via-hawaiian-ocean/10 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-hawaiian-sunset/10 via-hawaiian-coral/5 to-transparent"></div>
        
        {/* Hero Background Image */}
        <div className="absolute inset-0 opacity-40">
          <Image 
            src="/images/hero-background.png" 
            alt="Background" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        
        <div className="relative z-10 max-width-container section-padding py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center gap-4 mb-8">
              <span className="veteran-badge">
                <FaFlag className="text-hawaiian-volcano" />
                US Marine Corps Veteran
              </span>
              <span className="metric-badge">
                20+ Years Leadership
              </span>
            </div>

            {/* Professional Headshot */}
            <div className="flex justify-center mb-8">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-hawaiian-lagoon/40 shadow-2xl">
                <ImageWithFallback
                  src="/images/professional-headshot.jpg"
                  alt="Reno Provine"
                  width={192}
                  height={192}
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-6">
              Proven Executive Leadership
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-hawaiian-ocean via-hawaiian-lagoon to-hawaiian-sunset mt-2">Meets AI Innovation</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Serial entrepreneur who built companies from startup to $2.4M monthly recurring revenue. 
              Now transforming businesses with AI-powered strategies and operational excellence.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="metric-badge">
                <FaDollarSign className="text-hawaiian-palm" />
                $2.4M Monthly Recurring Revenue
              </div>
              <div className="metric-badge">
                <FaUsers className="text-hawaiian-ocean" />
                200+ Employees Managed
              </div>
              <div className="metric-badge">
                <FaChartLine className="text-hawaiian-sunset" />
                $10M+ Annual Operations
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => scrollToSection('contact')} className="cta-button">
                Schedule Executive Strategy Session
                <FaArrowRight className="ml-2" />
              </button>
              <button onClick={() => scrollToSection('executive-record')} className="secondary-button">
                View Track Record
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Executive Track Record */}
      <section id="executive-record" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-width-container section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-center mb-4">
              Executive <span className="text-transparent bg-clip-text bg-gradient-to-r from-hawaiian-sunset to-hawaiian-coral">Track Record</span>
            </h2>
            <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
              Building and scaling successful businesses for over two decades
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="executive-card"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-hawaiian-lagoon">CEO & Co-Founder</h3>
                    <p className="text-lg text-gray-300">Great America Networks Conferencing</p>
                    <p className="text-sm text-gray-500">18-Year Tenure</p>
                  </div>
                  <FaRocket className="text-hawaiian-sunset text-3xl" />
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <FaChevronRight className="text-hawaiian-ocean mt-1 mr-2 flex-shrink-0" />
                    Built from startup to $2.4M monthly recurring revenue in 3 years
                  </li>
                  <li className="flex items-start">
                    <FaChevronRight className="text-hawaiian-ocean mt-1 mr-2 flex-shrink-0" />
                    Scaled operations to serve enterprise clients nationwide
                  </li>
                  <li className="flex items-start">
                    <FaChevronRight className="text-hawaiian-ocean mt-1 mr-2 flex-shrink-0" />
                    Achieved 40% EBITDA margins through operational excellence
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="executive-card"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-hawaiian-lagoon">Chief Operating Officer</h3>
                    <p className="text-lg text-gray-300">BTI Communications Group</p>
                    <p className="text-sm text-gray-500">$10M+ Annual Operations</p>
                  </div>
                  <FaChartLine className="text-hawaiian-lagoon text-3xl" />
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <FaChevronRight className="text-hawaiian-ocean mt-1 mr-2 flex-shrink-0" />
                    Managed 49 employees across multiple departments
                  </li>
                  <li className="flex items-start">
                    <FaChevronRight className="text-hawaiian-ocean mt-1 mr-2 flex-shrink-0" />
                    Optimized operations for 30% efficiency improvement
                  </li>
                  <li className="flex items-start">
                    <FaChevronRight className="text-hawaiian-ocean mt-1 mr-2 flex-shrink-0" />
                    Implemented scalable systems and processes
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="executive-card"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-hawaiian-lagoon">Director of Operations</h3>
                    <p className="text-lg text-gray-300">Citizens Conferencing</p>
                    <p className="text-sm text-gray-500">Infrastructure & Scaling</p>
                  </div>
                  <FaUsers className="text-hawaiian-lagoon text-3xl" />
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <FaChevronRight className="text-hawaiian-ocean mt-1 mr-2 flex-shrink-0" />
                    Managed $4M+ capital expenditures
                  </li>
                  <li className="flex items-start">
                    <FaChevronRight className="text-hawaiian-ocean mt-1 mr-2 flex-shrink-0" />
                    Deployed 200+ T-1 circuits nationwide
                  </li>
                  <li className="flex items-start">
                    <FaChevronRight className="text-hawaiian-ocean mt-1 mr-2 flex-shrink-0" />
                    Scaled to 4,000+ conferencing ports
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="executive-card"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-hawaiian-lagoon">Sales Director</h3>
                    <p className="text-lg text-gray-300">Five Star Transportation</p>
                    <p className="text-sm text-gray-500">Hawaiian Islands Operations</p>
                  </div>
                  <FaHandshake className="text-hawaiian-lagoon text-3xl" />
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <FaChevronRight className="text-hawaiian-ocean mt-1 mr-2 flex-shrink-0" />
                    Led 25+ person sales team across islands
                  </li>
                  <li className="flex items-start">
                    <FaChevronRight className="text-hawaiian-ocean mt-1 mr-2 flex-shrink-0" />
                    Achieved 150% of revenue targets
                  </li>
                  <li className="flex items-start">
                    <FaChevronRight className="text-hawaiian-ocean mt-1 mr-2 flex-shrink-0" />
                    Developed strategic partnerships
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategic Solutions Portfolio */}
      <section id="solutions-portfolio" className="py-20 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800">
        <div className="max-width-container section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-center mb-4">
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-hawaiian-ocean to-hawaiian-lagoon">Solutions Portfolio</span>
            </h2>
            <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
              AI-Powered Solutions Ready for Hawaii's Growing Businesses
            </p>

            <div className="mb-12 text-center">
              <div className="inline-flex flex-wrap gap-3 justify-center">
                <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-hawaiian-ocean/10 text-hawaiian-lagoon rounded-full border border-hawaiian-ocean/20">
                  <FaBrain className="text-hawaiian-ocean mr-1" />
                  Developed for Hawaii Market
                </span>
                <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-hawaiian-palm/10 text-hawaiian-palm rounded-full border border-hawaiian-palm/20">
                  <FaRocket className="text-hawaiian-palm mr-1" />
                  Ready to Deploy
                </span>
                <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-hawaiian-sunset/10 text-hawaiian-coral rounded-full border border-hawaiian-sunset/20">
                  <FaChartLine className="text-hawaiian-sunset mr-1" />
                  Proof of Concept Available
                </span>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="executive-card hover:border-hawaiian-lagoon group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-hawaiian-lagoon">Tourism Analytics Platform</h3>
                    <p className="text-lg text-gray-300">Real-Time Visitor Intelligence Dashboard</p>
                    <a href="https://analytics.lenilani.com" target="_blank" rel="noopener noreferrer" className="text-sm text-hawaiian-coral hover:text-gold-300 mt-1 inline-block">
                      View Live Demo →
                    </a>
                  </div>
                  <FaChartLine className="text-hawaiian-lagoon text-3xl" />
                </div>
                
                {/* Platform Screenshot */}
                <a href="https://analytics.lenilani.com" target="_blank" rel="noopener noreferrer" className="block mb-4 rounded-lg overflow-hidden border-2 border-hawaiian-ocean/30 hover:border-hawaiian-lagoon transition-all duration-300 group">
                  <div className="relative">
                    <ImageWithFallback
                      src="/images/tourism-analytics-screenshot.png"
                      alt="Tourism Analytics Platform"
                      width={600}
                      height={300}
                      className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-hawaiian-ocean/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </a>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-hawaiian-coral mb-2">MARKET PROBLEM</h4>
                    <p className="text-gray-300">Hawaii tourism businesses struggle with seasonal fluctuations and lack real-time visitor behavior insights for strategic planning.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-hawaiian-coral mb-2">STRATEGIC VALUE</h4>
                    <ul className="space-y-1 text-gray-300">
                      <li className="flex items-start">
                        <FaChevronRight className="text-hawaiian-lagoon mt-1 mr-2 flex-shrink-0 text-sm" />
                        Predictive analytics for visitor traffic patterns
                      </li>
                      <li className="flex items-start">
                        <FaChevronRight className="text-hawaiian-lagoon mt-1 mr-2 flex-shrink-0 text-sm" />
                        Revenue optimization through demand forecasting
                      </li>
                      <li className="flex items-start">
                        <FaChevronRight className="text-hawaiian-lagoon mt-1 mr-2 flex-shrink-0 text-sm" />
                        30% improvement in resource allocation
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-navy-800">
                    <button onClick={() => scrollToSection('contact')} className="text-hawaiian-lagoon font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                      Schedule consultation to discuss implementation
                      <FaArrowRight className="text-sm" />
                    </button>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="executive-card hover:border-hawaiian-lagoon group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-hawaiian-lagoon">Hawaii Emergency Hub</h3>
                    <p className="text-lg text-gray-300">24/7 Crisis Management Platform</p>
                    <a href="https://web-dashboard-seven-pi.vercel.app" target="_blank" rel="noopener noreferrer" className="text-sm text-hawaiian-coral hover:text-gold-300 mt-1 inline-block">
                      View Live Demo →
                    </a>
                  </div>
                  <FaFlag className="text-hawaiian-lagoon text-3xl" />
                </div>
                
                {/* Platform Screenshot */}
                <a href="https://web-dashboard-seven-pi.vercel.app" target="_blank" rel="noopener noreferrer" className="block mb-4 rounded-lg overflow-hidden border-2 border-hawaiian-volcano/30 hover:border-hawaiian-sunset transition-all duration-300 group">
                  <div className="relative">
                    <ImageWithFallback
                      src="/images/emergency-hub-screenshot.png"
                      alt="Hawaii Emergency Hub"
                      width={600}
                      height={300}
                      className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-hawaiian-volcano/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </a>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-hawaiian-coral mb-2">MARKET PROBLEM</h4>
                    <p className="text-gray-300">Hawaii's unique geography creates challenges for coordinated emergency response and real-time safety information dissemination.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-hawaiian-coral mb-2">STRATEGIC VALUE</h4>
                    <ul className="space-y-1 text-gray-300">
                      <li className="flex items-start">
                        <FaChevronRight className="text-hawaiian-lagoon mt-1 mr-2 flex-shrink-0 text-sm" />
                        Real-time alerts for multiple hazard types
                      </li>
                      <li className="flex items-start">
                        <FaChevronRight className="text-hawaiian-lagoon mt-1 mr-2 flex-shrink-0 text-sm" />
                        Family safety check-in system
                      </li>
                      <li className="flex items-start">
                        <FaChevronRight className="text-hawaiian-lagoon mt-1 mr-2 flex-shrink-0 text-sm" />
                        Integrated government data sources
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-navy-800">
                    <button onClick={() => scrollToSection('contact')} className="text-hawaiian-lagoon font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                      Schedule consultation to discuss implementation
                      <FaArrowRight className="text-sm" />
                    </button>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="executive-card hover:border-hawaiian-lagoon group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-hawaiian-lagoon">AI Tourism Assistant</h3>
                    <p className="text-lg text-gray-300">Hospitality Revenue Optimization Bot</p>
                    <a href="https://tourismbot.lenilani.com" target="_blank" rel="noopener noreferrer" className="text-sm text-hawaiian-coral hover:text-gold-300 mt-1 inline-block">
                      View Live Demo →
                    </a>
                  </div>
                  <FaBrain className="text-hawaiian-lagoon text-3xl" />
                </div>
                
                {/* Platform Screenshot */}
                <a href="https://tourismbot.lenilani.com" target="_blank" rel="noopener noreferrer" className="block mb-4 rounded-lg overflow-hidden border-2 border-hawaiian-palm/30 hover:border-hawaiian-palm transition-all duration-300 group">
                  <div className="relative">
                    <ImageWithFallback
                      src="/images/tourism-bot-screenshot.png"
                      alt="AI Tourism Assistant"
                      width={600}
                      height={300}
                      className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-hawaiian-palm/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </a>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-hawaiian-coral mb-2">MARKET PROBLEM</h4>
                    <p className="text-gray-300">Hotels and tour operators struggle with 24/7 guest service demands while missing revenue opportunities from personalized upselling.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-hawaiian-coral mb-2">STRATEGIC VALUE</h4>
                    <ul className="space-y-1 text-gray-300">
                      <li className="flex items-start">
                        <FaChevronRight className="text-hawaiian-lagoon mt-1 mr-2 flex-shrink-0 text-sm" />
                        85% automation of guest interactions
                      </li>
                      <li className="flex items-start">
                        <FaChevronRight className="text-hawaiian-lagoon mt-1 mr-2 flex-shrink-0 text-sm" />
                        35% revenue boost through smart upselling
                      </li>
                      <li className="flex items-start">
                        <FaChevronRight className="text-hawaiian-lagoon mt-1 mr-2 flex-shrink-0 text-sm" />
                        Multi-language support including Pidgin
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-navy-800">
                    <button onClick={() => scrollToSection('contact')} className="text-hawaiian-lagoon font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                      Schedule consultation to discuss implementation
                      <FaArrowRight className="text-sm" />
                    </button>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="executive-card hover:border-hawaiian-lagoon group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-hawaiian-lagoon">Oahu Transit Hub</h3>
                    <p className="text-lg text-gray-300">Multi-Modal Transportation Platform</p>
                    <a href="https://oahu-transit-hub.vercel.app" target="_blank" rel="noopener noreferrer" className="text-sm text-hawaiian-coral hover:text-gold-300 mt-1 inline-block">
                      View Live Demo →
                    </a>
                  </div>
                  <FaUsers className="text-hawaiian-lagoon text-3xl" />
                </div>
                
                {/* Platform Screenshot */}
                <a href="https://oahu-transit-hub.vercel.app" target="_blank" rel="noopener noreferrer" className="block mb-4 rounded-lg overflow-hidden border-2 border-hawaiian-sunset/30 hover:border-hawaiian-coral transition-all duration-300 group">
                  <div className="relative">
                    <ImageWithFallback
                      src="/images/oahu-transit-screenshot.png"
                      alt="Oahu Transit Hub"
                      width={600}
                      height={300}
                      className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-hawaiian-sunset/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </a>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-hawaiian-coral mb-2">MARKET PROBLEM</h4>
                    <p className="text-gray-300">Oahu's traffic congestion costs businesses millions in lost productivity while public transit remains underutilized.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-hawaiian-coral mb-2">STRATEGIC VALUE</h4>
                    <ul className="space-y-1 text-gray-300">
                      <li className="flex items-start">
                        <FaChevronRight className="text-hawaiian-lagoon mt-1 mr-2 flex-shrink-0 text-sm" />
                        Real-time route optimization
                      </li>
                      <li className="flex items-start">
                        <FaChevronRight className="text-hawaiian-lagoon mt-1 mr-2 flex-shrink-0 text-sm" />
                        Employee commute cost reduction
                      </li>
                      <li className="flex items-start">
                        <FaChevronRight className="text-hawaiian-lagoon mt-1 mr-2 flex-shrink-0 text-sm" />
                        25% reduction in transportation costs
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-navy-800">
                    <button onClick={() => scrollToSection('contact')} className="text-hawaiian-lagoon font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                      Schedule consultation to discuss implementation
                      <FaArrowRight className="text-sm" />
                    </button>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="executive-card hover:border-hawaiian-lagoon group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-hawaiian-lagoon">LeniLani AI Assistant</h3>
                    <p className="text-lg text-gray-300">Intelligent Business Consultation Bot</p>
                    <a href="https://ai-bot-special.lenilani.com" target="_blank" rel="noopener noreferrer" className="text-sm text-hawaiian-coral hover:text-gold-300 mt-1 inline-block">
                      View Live Demo →
                    </a>
                  </div>
                  <FaBrain className="text-hawaiian-lagoon text-3xl" />
                </div>
                
                {/* Platform Screenshot */}
                <a href="https://ai-bot-special.lenilani.com" target="_blank" rel="noopener noreferrer" className="block mb-4 rounded-lg overflow-hidden border-2 border-hawaiian-lagoon/30 hover:border-hawaiian-plumeria transition-all duration-300 group">
                  <div className="relative">
                    <ImageWithFallback
                      src="/images/lenilani-ai-screenshot.png"
                      alt="LeniLani AI Assistant"
                      width={600}
                      height={300}
                      className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-hawaiian-lagoon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </a>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-hawaiian-coral mb-2">MARKET PROBLEM</h4>
                    <p className="text-gray-300">Businesses struggle with 24/7 customer engagement while traditional chatbots frustrate users with scripted responses and miss valuable leads.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-hawaiian-coral mb-2">STRATEGIC VALUE</h4>
                    <ul className="space-y-1 text-gray-300">
                      <li className="flex items-start">
                        <FaChevronRight className="text-hawaiian-lagoon mt-1 mr-2 flex-shrink-0 text-sm" />
                        Claude AI-powered intelligent conversations
                      </li>
                      <li className="flex items-start">
                        <FaChevronRight className="text-hawaiian-lagoon mt-1 mr-2 flex-shrink-0 text-sm" />
                        Automated lead qualification & scoring
                      </li>
                      <li className="flex items-start">
                        <FaChevronRight className="text-hawaiian-lagoon mt-1 mr-2 flex-shrink-0 text-sm" />
                        60% reduction in customer service costs
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-navy-800">
                    <button onClick={() => scrollToSection('contact')} className="text-hawaiian-lagoon font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                      Schedule consultation to discuss implementation
                      <FaArrowRight className="text-sm" />
                    </button>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="executive-card hover:border-hawaiian-lagoon group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-hawaiian-lagoon">Business Growth Calculator</h3>
                    <p className="text-lg text-gray-300">AI-Powered ROI Analysis Tool</p>
                    <a href="https://hawaii-growth-calculator-df4o.vercel.app" target="_blank" rel="noopener noreferrer" className="text-sm text-hawaiian-coral hover:text-gold-300 mt-1 inline-block">
                      View Live Demo →
                    </a>
                  </div>
                  <FaChartLine className="text-hawaiian-lagoon text-3xl" />
                </div>
                
                {/* Platform Screenshot */}
                <a href="https://hawaii-growth-calculator-df4o.vercel.app" target="_blank" rel="noopener noreferrer" className="block mb-4 rounded-lg overflow-hidden border-2 border-hawaiian-ocean/30 hover:border-hawaiian-plumeria transition-all duration-300 group">
                  <div className="relative">
                    <ImageWithFallback
                      src="/images/growth-calculator-screenshot.png"
                      alt="Business Growth Calculator"
                      width={600}
                      height={300}
                      className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gold-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </a>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-hawaiian-coral mb-2">MARKET PROBLEM</h4>
                    <p className="text-gray-300">Hawaii businesses struggle to quantify technology investment ROI and identify optimal growth strategies.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-hawaiian-coral mb-2">STRATEGIC VALUE</h4>
                    <ul className="space-y-1 text-gray-300">
                      <li className="flex items-start">
                        <FaChevronRight className="text-hawaiian-lagoon mt-1 mr-2 flex-shrink-0 text-sm" />
                        Save 20-45% on technology costs
                      </li>
                      <li className="flex items-start">
                        <FaChevronRight className="text-hawaiian-lagoon mt-1 mr-2 flex-shrink-0 text-sm" />
                        3.2x efficiency gain multiplier
                      </li>
                      <li className="flex items-start">
                        <FaChevronRight className="text-hawaiian-lagoon mt-1 mr-2 flex-shrink-0 text-sm" />
                        Instant financial recommendations
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-navy-800">
                    <button onClick={() => scrollToSection('contact')} className="text-hawaiian-lagoon font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                      Schedule consultation to discuss implementation
                      <FaArrowRight className="text-sm" />
                    </button>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="executive-card hover:border-hawaiian-lagoon group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-hawaiian-lagoon">Business Intelligence System</h3>
                    <p className="text-lg text-gray-300">Enterprise Analytics Dashboard</p>
                    <a href="https://hawaii-business-intelligence-system.vercel.app" target="_blank" rel="noopener noreferrer" className="text-sm text-hawaiian-coral hover:text-gold-300 mt-1 inline-block">
                      View Live Demo →
                    </a>
                  </div>
                  <FaChartLine className="text-hawaiian-lagoon text-3xl" />
                </div>
                
                {/* Platform Screenshot */}
                <a href="https://hawaii-business-intelligence-system.vercel.app" target="_blank" rel="noopener noreferrer" className="block mb-4 rounded-lg overflow-hidden border-2 border-hawaiian-lagoon/30 hover:border-hawaiian-ocean transition-all duration-300 group">
                  <div className="relative">
                    <ImageWithFallback
                      src="/images/business-intelligence-screenshot.png"
                      alt="Business Intelligence System"
                      width={600}
                      height={300}
                      className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-hawaiian-ocean/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </a>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-hawaiian-coral mb-2">MARKET PROBLEM</h4>
                    <p className="text-gray-300">Hawaii enterprises lack unified data visibility across operations, making strategic decisions based on fragmented insights.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-hawaiian-coral mb-2">STRATEGIC VALUE</h4>
                    <ul className="space-y-1 text-gray-300">
                      <li className="flex items-start">
                        <FaChevronRight className="text-hawaiian-lagoon mt-1 mr-2 flex-shrink-0 text-sm" />
                        Real-time KPI monitoring & alerts
                      </li>
                      <li className="flex items-start">
                        <FaChevronRight className="text-hawaiian-lagoon mt-1 mr-2 flex-shrink-0 text-sm" />
                        Predictive analytics for market trends
                      </li>
                      <li className="flex items-start">
                        <FaChevronRight className="text-hawaiian-lagoon mt-1 mr-2 flex-shrink-0 text-sm" />
                        40% faster strategic decision-making
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-navy-800">
                    <button onClick={() => scrollToSection('contact')} className="text-hawaiian-lagoon font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                      Schedule consultation to discuss implementation
                      <FaArrowRight className="text-sm" />
                    </button>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="executive-card hover:border-hawaiian-lagoon group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-hawaiian-lagoon">BeachHui Safety Platform</h3>
                    <p className="text-lg text-gray-300">Ocean & Reef Safety Intelligence</p>
                    <a href="https://beachhui.lenilani.com/home" target="_blank" rel="noopener noreferrer" className="text-sm text-hawaiian-coral hover:text-gold-300 mt-1 inline-block">
                      View Live Demo →
                    </a>
                  </div>
                  <FaFlag className="text-hawaiian-lagoon text-3xl" />
                </div>
                
                {/* Platform Screenshot */}
                <a href="https://beachhui.lenilani.com/home" target="_blank" rel="noopener noreferrer" className="block mb-4 rounded-lg overflow-hidden border-2 border-hawaiian-lagoon/30 hover:border-hawaiian-ocean transition-all duration-300 group">
                  <div className="relative">
                    <ImageWithFallback
                      src="/images/beachhui-screenshot.png"
                      alt="BeachHui Safety Platform"
                      width={600}
                      height={300}
                      className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-hawaiian-ocean/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </a>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-hawaiian-coral mb-2">MARKET PROBLEM</h4>
                    <p className="text-gray-300">Hawaii's 71 beaches lack unified safety monitoring, risking tourist injuries and environmental damage to reefs.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-hawaiian-coral mb-2">STRATEGIC VALUE</h4>
                    <ul className="space-y-1 text-gray-300">
                      <li className="flex items-start">
                        <FaChevronRight className="text-hawaiian-lagoon mt-1 mr-2 flex-shrink-0 text-sm" />
                        Real-time ocean conditions & UV alerts
                      </li>
                      <li className="flex items-start">
                        <FaChevronRight className="text-hawaiian-lagoon mt-1 mr-2 flex-shrink-0 text-sm" />
                        Community-powered marine hazard reporting
                      </li>
                      <li className="flex items-start">
                        <FaChevronRight className="text-hawaiian-lagoon mt-1 mr-2 flex-shrink-0 text-sm" />
                        NOAA & OpenWeather data integration
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-navy-800">
                    <button onClick={() => scrollToSection('contact')} className="text-hawaiian-lagoon font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                      Schedule consultation to discuss implementation
                      <FaArrowRight className="text-sm" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-12 p-8 bg-gradient-to-r from-gold-500/10 to-gold-500/5 rounded-lg border border-gold-500/20 text-center"
            >
              <h3 className="text-2xl font-bold mb-3">Strategic Foresight in Action</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                These ready-to-deploy solutions demonstrate strategic business planning, 
                market opportunity identification, and execution excellence. Each represents 
                a strategic investment in Hawaii's business future.
              </p>
              <div className="flex flex-wrap gap-3 justify-center mb-6">
                <span className="metric-badge">7+ Live Platforms</span>
                <span className="metric-badge">$1M+ Potential Value</span>
                <span className="metric-badge">Ready for Partnership</span>
              </div>
              <button onClick={() => scrollToSection('contact')} className="cta-button">
                Explore Partnership Opportunities
                <FaArrowRight className="ml-2" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-width-container section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-center mb-4">
              Executive <span className="text-transparent bg-clip-text bg-gradient-to-r from-hawaiian-palm to-hawaiian-ocean">Services</span>
            </h2>
            <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
              Transforming businesses through strategic leadership and AI innovation
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="executive-card group hover:border-hawaiian-lagoon"
              >
                <FaBrain className="text-hawaiian-lagoon text-4xl mb-4" />
                <h3 className="text-2xl font-bold mb-3">Executive AI Strategy & Transformation</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive AI integration strategy for enterprise-level transformation. 
                  From assessment to implementation, ensuring your business leverages AI for competitive advantage.
                </p>
                <a href="https://hawaii.lenilani.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between hover:opacity-80 transition-opacity">
                  <span className="text-hawaiian-lagoon font-semibold">$20K - $50K Projects</span>
                  <FaArrowRight className="text-hawaiian-lagoon group-hover:translate-x-2 transition-transform" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="executive-card group hover:border-hawaiian-lagoon"
              >
                <FaAward className="text-hawaiian-lagoon text-4xl mb-4" />
                <h3 className="text-2xl font-bold mb-3">Fractional CEO/CTO Services</h3>
                <p className="text-gray-300 mb-4">
                  Experienced executive leadership without full-time commitment. 
                  Perfect for scaling businesses needing strategic direction and operational excellence.
                </p>
                <a href="https://hawaii.lenilani.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between hover:opacity-80 transition-opacity">
                  <span className="text-hawaiian-lagoon font-semibold">$15K - $25K/Month</span>
                  <FaArrowRight className="text-hawaiian-lagoon group-hover:translate-x-2 transition-transform" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="executive-card group hover:border-hawaiian-lagoon"
              >
                <FaChartLine className="text-hawaiian-lagoon text-4xl mb-4" />
                <h3 className="text-2xl font-bold mb-3">Business Scaling & Operations</h3>
                <p className="text-gray-300 mb-4">
                  Proven strategies for scaling from startup to $10M+ revenue. 
                  Operational optimization, team building, and sustainable growth frameworks.
                </p>
                <a href="https://hawaii.lenilani.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between hover:opacity-80 transition-opacity">
                  <span className="text-hawaiian-lagoon font-semibold">Custom Engagements</span>
                  <FaArrowRight className="text-hawaiian-lagoon group-hover:translate-x-2 transition-transform" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="executive-card group hover:border-hawaiian-lagoon"
              >
                <FaHandshake className="text-hawaiian-lagoon text-4xl mb-4" />
                <h3 className="text-2xl font-bold mb-3">Technology M&A Advisory</h3>
                <p className="text-gray-300 mb-4">
                  Strategic guidance for technology acquisitions and exits. 
                  Due diligence, valuation, and integration planning from an operator's perspective.
                </p>
                <a href="https://hawaii.lenilani.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between hover:opacity-80 transition-opacity">
                  <span className="text-hawaiian-lagoon font-semibold">Success-Based Fees</span>
                  <FaArrowRight className="text-hawaiian-lagoon group-hover:translate-x-2 transition-transform" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Leadership Section */}
      <section id="technology" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-width-container section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-center mb-4">
              Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-hawaiian-lagoon to-hawaiian-ocean">Leadership</span>
            </h2>
            <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
              Executive-level technology expertise driving business transformation
            </p>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="executive-card text-center"
              >
                {/* AWS Certification Badge - Uncomment when you have the image */}
                {/* <div className="mb-4 flex justify-center">
                  <ImageWithFallback
                    src="/images/aws-certified-badge.png"
                    alt="AWS Certified"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div> */}
                <FaCloud className="text-hawaiian-lagoon text-4xl mx-auto mb-4" />
                <h3 className="text-xl font-bold text-hawaiian-lagoon mb-2">AWS Solutions Architect</h3>
                <p className="text-gray-300">
                  Enterprise cloud infrastructure design and cost optimization strategies for scalable business growth
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="executive-card text-center"
              >
                <FaNetworkWired className="text-hawaiian-lagoon text-4xl mx-auto mb-4" />
                <h3 className="text-xl font-bold text-hawaiian-lagoon mb-2">CCNA Network Specialist</h3>
                <p className="text-gray-300">
                  Enterprise networking architecture enabling secure, high-performance business operations
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="executive-card text-center"
              >
                <FaGraduationCap className="text-hawaiian-lagoon text-4xl mx-auto mb-4" />
                <h3 className="text-xl font-bold text-hawaiian-lagoon mb-2">Masters in Data Science</h3>
                <p className="text-gray-300">
                  Currently advancing AI/ML expertise to deliver cutting-edge business intelligence solutions
                </p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="executive-card"
              >
                <div className="flex items-center gap-4 mb-4">
                  <FaBrain className="text-hawaiian-lagoon text-3xl" />
                  <h3 className="text-2xl font-bold">AI-Powered Development</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Leveraging advanced AI tools to accelerate development cycles and deliver superior business outcomes
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <FaChevronRight className="text-hawaiian-ocean mt-1 mr-2 flex-shrink-0" />
                    10x faster solution deployment
                  </li>
                  <li className="flex items-start">
                    <FaChevronRight className="text-hawaiian-ocean mt-1 mr-2 flex-shrink-0" />
                    Predictive analytics integration
                  </li>
                  <li className="flex items-start">
                    <FaChevronRight className="text-hawaiian-ocean mt-1 mr-2 flex-shrink-0" />
                    Automated business intelligence
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="executive-card"
              >
                <div className="flex items-center gap-4 mb-4">
                  <FaCogs className="text-hawaiian-lagoon text-3xl" />
                  <h3 className="text-2xl font-bold">Full-Stack Capabilities</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  End-to-end solution architecture from infrastructure to user experience, ensuring seamless business operations
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <FaChevronRight className="text-hawaiian-ocean mt-1 mr-2 flex-shrink-0" />
                    Enterprise system integration
                  </li>
                  <li className="flex items-start">
                    <FaChevronRight className="text-hawaiian-ocean mt-1 mr-2 flex-shrink-0" />
                    Scalable architecture design
                  </li>
                  <li className="flex items-start">
                    <FaChevronRight className="text-hawaiian-ocean mt-1 mr-2 flex-shrink-0" />
                    Performance optimization
                  </li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-12 p-8 bg-gradient-to-r from-navy-900/50 to-navy-800/50 rounded-lg border border-gold-500/20 text-center"
            >
              <h3 className="text-2xl font-bold mb-3">Technology as a Business Accelerator</h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Combining deep technical expertise with executive business acumen to deliver 
                transformative solutions that drive measurable ROI and competitive advantage.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Military Service & Technical Foundation */}
      <section id="military" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-width-container section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-center mb-12">
              Foundation of <span className="text-transparent bg-clip-text bg-gradient-to-r from-hawaiian-volcano to-hawaiian-sunset">Excellence</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4 mb-6">
                  <FaFlag className="text-hawaiian-lagoon text-4xl" />
                  <div>
                    <h3 className="text-2xl font-bold">US Marine Corps Veteran</h3>
                    <p className="text-gray-400">Telecommunications Specialist</p>
                  </div>
                </div>
                
                <div className="space-y-4 text-gray-300">
                  <p>
                    My leadership foundation was forged in the United States Marine Corps, 
                    where I specialized in telecommunications and learned the discipline, 
                    strategic thinking, and operational excellence that have defined my business career.
                  </p>
                  <p>
                    The Corps taught me that success comes from meticulous planning, 
                    flawless execution, and the ability to lead teams through challenging situations. 
                    These principles have been instrumental in building and scaling multiple successful companies.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center p-4 bg-navy-900/50 rounded-lg border border-navy-800">
                    <div className="text-3xl font-bold text-hawaiian-lagoon">20+</div>
                    <div className="text-sm text-gray-400">Years Leadership</div>
                  </div>
                  <div className="text-center p-4 bg-navy-900/50 rounded-lg border border-navy-800">
                    <div className="text-3xl font-bold text-hawaiian-lagoon">200+</div>
                    <div className="text-sm text-gray-400">Teams Led</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4 mb-6">
                  <FaGraduationCap className="text-hawaiian-lagoon text-4xl" />
                  <div>
                    <h3 className="text-2xl font-bold">Continuous Learning</h3>
                    <p className="text-gray-400">Masters in Data Science (Current)</p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-300">
                  <p>
                    Currently pursuing a Masters in Data Science to stay at the forefront of AI 
                    and machine learning technologies. This advanced education combines with decades 
                    of practical business experience to deliver unique insights for modern business transformation.
                  </p>
                  <p>
                    My approach bridges the gap between cutting-edge technology and practical business 
                    application, ensuring that AI strategies are not just innovative but also executable 
                    and profitable.
                  </p>
                </div>

                <div className="p-6 bg-gradient-to-r from-gold-500/10 to-gold-500/5 rounded-lg border border-gold-500/20">
                  <div className="flex items-center gap-3 mb-3">
                    <FaGraduationCap className="text-hawaiian-lagoon" />
                    <span className="text-sm font-semibold text-hawaiian-coral">CURRENT STUDENT</span>
                  </div>
                  <h4 className="text-lg font-bold mb-1">Masters in Data Science</h4>
                  <p className="text-sm text-gray-400">
                    Specializing in AI/ML applications for business transformation
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-width-container section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-hawaiian-ocean via-hawaiian-lagoon to-hawaiian-sunset">Transform Your Business?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
              Let's discuss how executive leadership and AI innovation can accelerate your growth
            </p>

            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Contact Info Card */}
                <div className="executive-card">
                  <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                  
                  <div className="space-y-6">
                    <p className="text-gray-300">
                      For businesses ready to scale, transform, or navigate complex challenges. 
                      Our initial strategy session will identify opportunities and create a roadmap for success.
                    </p>

                    <div className="space-y-4">
                      <a
                        href="mailto:reno@lenilani.com"
                        className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors group"
                      >
                        <FaEnvelope className="text-hawaiian-lagoon group-hover:scale-110 transition-transform" />
                        <span>reno@lenilani.com</span>
                      </a>
                      
                      <a
                        href="https://linkedin.com/in/rprovine"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors group"
                      >
                        <FaLinkedin className="text-hawaiian-lagoon group-hover:scale-110 transition-transform" />
                        <span>linkedin.com/in/rprovine</span>
                      </a>
                      
                      <a
                        href="tel:+18155569699"
                        className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors group"
                      >
                        <FaPhone className="text-hawaiian-lagoon group-hover:scale-110 transition-transform" />
                        <span>815-556-9699</span>
                      </a>
                    </div>

                    <div className="pt-6 border-t border-slate-700">
                      <p className="text-sm text-gray-400 mb-4">Ideal for:</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="metric-badge">$5M-50M+ Revenue</span>
                        <span className="metric-badge">Private Equity</span>
                        <span className="metric-badge">Scaling Startups</span>
                        <span className="metric-badge">Turnarounds</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* HubSpot Form Card */}
                <div className="executive-card">
                  <h3 className="text-2xl font-bold mb-6">Schedule Your Strategy Session</h3>
                  <div className="hs-form-frame" data-region="na2" data-form-id="41129813-9d7c-4ee9-b8c3-cc3a53d558d4" data-portal-id="242173134"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gradient-to-b from-slate-900 to-slate-800 border-t border-navy-900">
        <div className="max-width-container section-padding">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400">© 2025 Reno Provine. All rights reserved.</p>
              <p className="text-sm text-gray-500 mt-1">Executive Leadership & AI Transformation</p>
            </div>
            <div className="flex items-center gap-6">
              <a href="mailto:reno@lenilani.com" className="text-gray-400 hover:text-hawaiian-lagoon transition-colors">
                <FaEnvelope size={20} />
              </a>
              <a href="https://linkedin.com/in/rprovine" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-hawaiian-lagoon transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}