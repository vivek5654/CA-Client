import React, { useState, useEffect } from 'react'
import { ArrowRight, TrendingUp, Calculator, Users, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const Trouble = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    { icon: Calculator, text: "Financial Analysis" },
    { icon: TrendingUp, text: "Growth Planning" },
    { icon: Users, text: "Expert Guidance" }
  ]

  return (
    <div className="relative overflow-hidden  mx-30">
      {/* Background with gradient and pattern */}
      <div className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900 rounded-3xl shadow-2xl shadow-purple-500/20">
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-ping"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-cyan-400 rounded-full opacity-40 animate-ping" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-blue-400 rounded-full opacity-50 animate-ping" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-pink-400 rounded-full opacity-70 animate-ping" style={{animationDelay: '3s'}}></div>
        </div>

        {/* Main content */}
        <div className="relative grid lg:grid-cols-2 gap-12 items-center p-8 md:p-16 lg:p-20">
          
          {/* Left side - Text content */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="space-y-8">
              
              {/* Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full shadow-lg">
                <Calculator className="w-5 h-5 text-cyan-300 mr-2 animate-pulse" />
                <span className="text-white/90 font-semibold">Financial Solutions</span>
                <Sparkles className="w-4 h-4 text-yellow-300 ml-2 animate-spin" style={{animationDuration: '3s'}} />
              </div>

              {/* Main heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                <span className="block">Having Trouble</span>
                <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent animate-pulse">
                  Evaluating Your
                </span>
                <span className="block">Finances?</span>
              </h1>

              {/* Decorative line */}
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>

              {/* Description */}
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-lg">
                Don't let financial complexity hold you back. Our expert team provides personalized guidance to help you make informed decisions and achieve your financial goals with confidence.
              </p>

              {/* Feature list */}
              <div className="flex flex-wrap gap-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <div 
                      key={index}
                      className={`flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full shadow-lg transform transition-all duration-500 hover:scale-105 hover:bg-white/20`}
                      style={{animationDelay: `${index * 200}ms`}}
                    >
                      <Icon className="w-4 h-4 text-cyan-300 mr-2" />
                      <span className="text-white/90 text-sm font-medium">{feature.text}</span>
                    </div>
                  )
                })}
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Link to="/contact">
                <button 
                  className="group relative inline-flex items-center px-8 py-4 bg-white text-purple-600 font-bold rounded-2xl shadow-2xl hover:shadow-white/25 transform hover:scale-105 transition-all duration-500 overflow-hidden"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></span>
                  <span className={`relative flex items-center transition-colors duration-500 ${isHovered ? 'text-white' : 'text-purple-600'}`}>
                    Schedule Free Consultation
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  
                  {/* Button glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-600 opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
                </button>
                </Link>
              </div>

            </div>
          </div>

          {/* Right side - Visual element */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative">
              
              {/* Main visual card */}
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                <div className="text-center space-y-6">
                  
                  {/* Icon container */}
                  <div className="relative mx-auto w-32 h-32">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-3xl shadow-2xl shadow-purple-500/50 animate-pulse"></div>
                    <div className="relative w-full h-full bg-gradient-to-br from-purple-500 to-cyan-500 rounded-3xl flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
                      <TrendingUp className="w-16 h-16 text-white animate-bounce" style={{animationDuration: '2s'}} />
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                      <div className="text-2xl font-bold text-white">95%</div>
                      <div className="text-sm text-white/70">Success Rate</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                      <div className="text-2xl font-bold text-white">500+</div>
                      <div className="text-sm text-white/70">Clients Helped</div>
                    </div>
                  </div>

                  {/* Bottom text */}
                  <p className="text-white/70 text-sm">
                    Join hundreds of satisfied clients who transformed their financial future
                  </p>

                </div>

                {/* Card glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600/20 to-cyan-600/20 blur-xl opacity-50"></div>
              </div>

              {/* Floating elements around the card */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-60 animate-bounce" style={{animationDelay: '0s'}}></div>
              <div className="absolute -top-2 -right-6 w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full opacity-70 animate-bounce" style={{animationDelay: '1s'}}></div>
              <div className="absolute -bottom-3 -left-2 w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-50 animate-bounce" style={{animationDelay: '2s'}}></div>
            </div>
          </div>

        </div>

        {/* Bottom gradient border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-b-3xl"></div>
      </div>
    </div>
  )
}

export default Trouble