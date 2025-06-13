import React, { useState, useEffect } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Globe,
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Sparkles,
  Building2,
  Award,
  Shield
} from 'lucide-react'

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      primary: "+1 (555) 123-4567",
      secondary: "Mon-Fri 9:00 AM - 6:00 PM",
      color: "text-cyan-400"
    },
    {
      icon: Mail,
      title: "Email Us",
      primary: "info@yourcompany.com",
      secondary: "24/7 Support Available",
      color: "text-purple-400"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: "123 Business Street",
      secondary: "New York, NY 10001",
      color: "text-pink-400"
    },
    {
      icon: Clock,
      title: "Business Hours",
      primary: "Monday - Friday",
      secondary: "9:00 AM - 6:00 PM EST",
      color: "text-blue-400"
    }
  ]

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#facebook', color: 'hover:text-blue-500' },
    { name: 'Twitter', icon: Twitter, href: '#twitter', color: 'hover:text-sky-400' },
    { name: 'Instagram', icon: Instagram, href: '#instagram', color: 'hover:text-pink-500' },
    { name: 'LinkedIn', icon: Linkedin, href: '#linkedin', color: 'hover:text-blue-600' }
  ]

  const companyInfo = [
    { icon: Building2, text: "Est. 2010 - 14+ Years of Excellence" },
    { icon: Award, text: "Licensed & Certified Professionals" },
    { icon: Shield, text: "Trusted by 500+ Satisfied Clients" }
  ]

  return (
    <footer className="relative overflow-hidden mt-20">
      {/* Background with gradient */}
      <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900">
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-br from-blue-600/15 to-cyan-600/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full opacity-40 animate-ping"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${10 + Math.random() * 80}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: '4s'
              }}
            ></div>
          ))}
        </div>

        {/* Main footer content */}
        <div className="relative px-6 py-16 md:px-12 lg:px-20">
          
          {/* Company Header */}
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex justify-center items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-purple-500/30 animate-pulse">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  Your Company Name
                </h2>
                <p className="text-white/70 text-lg">Professional Financial Services</p>
              </div>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto"></div>
          </div>

          {/* Contact Information Grid */}
          <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon
              return (
                <div 
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transform hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20"
                  style={{animationDelay: `${index * 200}ms`}}
                >
                  <div className="text-center space-y-4">
                    <div className={`w-12 h-12 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-2xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${contact.color}`} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg mb-2">{contact.title}</h4>
                      <p className="text-white/90 font-medium">{contact.primary}</p>
                      <p className="text-white/60 text-sm mt-1">{contact.secondary}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Company Information */}
          <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 mb-12 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-yellow-400 mr-2 animate-pulse" />
                About Our Company
              </h3>
              <p className="text-white/80 max-w-3xl mx-auto leading-relaxed">
                We are a leading financial services company dedicated to helping individuals and businesses achieve their financial goals. 
                With over a decade of experience, our team of certified professionals provides personalized solutions tailored to your unique needs.
              </p>
            </div>

            {/* Company Stats */}
            <div className="grid md:grid-cols-3 gap-6">
              {companyInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <div 
                    key={index}
                    className="flex items-center justify-center space-x-3 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <Icon className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-white/80 text-sm font-medium">{info.text}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>

          {/* Bottom Section */}
          <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              
              {/* Copyright */}
              <div className="text-center md:text-left">
                <p className="text-white/70">
                  © 2024 <span className="text-white font-semibold">Your Company Name</span>. All rights reserved.
                </p>
                <p className="text-white/50 text-sm mt-1">
                  Licensed Financial Services Provider | Registration #123456
                </p>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <span className="text-white/60 text-sm mr-2 hidden md:block">Connect with us:</span>
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-white/70 ${social.color} border border-white/20 hover:border-white/40 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 group hover:shadow-lg`}
                    >
                      <Icon className="w-5 h-5 group-hover:animate-pulse" />
                    </a>
                  )
                })}
              </div>

              {/* Website */}
              <div className="flex items-center space-x-2 text-white/70">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">www.yourcompany.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>
      </div>
    </footer>
  )
}

export default Footer