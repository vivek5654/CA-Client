import React, { useState, useEffect } from 'react'
import { Info, Sparkles, Award, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    { icon: Award, title: "Excellence", desc: "Committed to delivering outstanding results" },
    { icon: Users, title: "Community", desc: "Building lasting relationships with our clients" },
    { icon: Sparkles, title: "Innovation", desc: "Pioneering creative solutions for modern challenges" }
  ]

  return (
    <div className="mx-20 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative bg-white/60 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-16 shadow-2xl shadow-purple-500/10">
        
        {/* Header Section */}
        <div className="flex justify-center mb-16">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center px-8 py-4 bg-green-100 rounded-full mb-2 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-500 hover:scale-105 group">
              <Info className="w-6 h-6 text-blue-300 mr-3 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-black font-normal text-2xl tracking-wide">About Us</span>
              <Sparkles className="w-5 h-5 text-blue-300 ml-3 animate-spin" style={{animationDuration: '3s'}} />
            </div>
            
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image */}
          
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="relative group">
              <div className="absolute -inset-4  rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                <div className="aspect-square flex items-center justify-center bg-gradient-to-br from-purple-500/10 to-cyan-500/10">
                  <img src='about1.jpg' alt='about1' className='w-full h-full z-20 ' /> 
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="space-y-8">
              
              {/* Name/Title */}
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4 animate-pulse">
                  Your Company Name
                </h1>
                <div className="h-1 w-32 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full mx-auto lg:mx-0 mb-6"></div>
              </div>

              {/* Description */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 flex items-center">
                  <Sparkles className="w-6 h-6 text-purple-600 mr-2 animate-spin" style={{animationDuration: '4s'}} />
                  Transforming Ideas Into Reality
                </h3>
                
                <p className="text-gray-700 leading-relaxed text-lg">
                  We are passionate innovators dedicated to creating exceptional experiences that drive success. Our team combines creativity with cutting-edge technology to deliver solutions that not only meet your needs but exceed your expectations.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  With years of expertise and a commitment to excellence, we've helped countless clients achieve their goals through strategic thinking, innovative design, and flawless execution. Every project is an opportunity to push boundaries and create something extraordinary.
                </p>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <div 
                      key={index}
                      className={`group p-4 bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500 cursor-pointer ${activeTab === index ? 'ring-2 ring-purple-500 bg-gradient-to-br from-purple-50/80 to-blue-50/80' : ''}`}
                      onMouseEnter={() => setActiveTab(index)}
                      style={{animationDelay: `${index * 200}ms`}}
                    >
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-lg mx-auto mb-3 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-1">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <Link to="/about">
                <button className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white font-semibold rounded-full shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transform hover:scale-105 transition-all duration-500 overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                  <span className="relative flex items-center">
                    Learn More About Us
                    <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300" />
                  </span>
                </button>
                </Link>
              </div>

            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-purple-400 rounded-full opacity-30 animate-ping" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-cyan-400 rounded-full opacity-40 animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-20 w-2 h-2 bg-blue-400 rounded-full opacity-50 animate-ping" style={{animationDelay: '2s'}}></div>
      </div>
    </div>
  )
}

export default AboutUs