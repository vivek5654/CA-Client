import React, { useState, useEffect } from 'react'
import { ArrowRight, TrendingUp, Shield, Award, Users, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import HomeComponent from '../Components/HomeComponent'
import Services from '../Components/Services'
import AboutUs from '../Components/AboutUs'
import Trouble from '../Components/Trouble'

const HomePage = (props) => {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: Shield, number: "100%", label: "Compliance Rate" },
    { icon: TrendingUp, number: "₹50Cr+", label: "Managed Assets" }
  ]

  return (
   <>
    <div className='relative min-h-screen w-full overflow-hidden p-20'>
      {/* Animated Background */}
      <div className='absolute inset-0'>
        {/* Primary Background Image */}
        <div 
          className='absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 transition-all duration-1000'
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`
          }}
        ></div>
        
        {/* Animated Geometric Shapes */}
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse'></div>
          <div className='absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse' style={{ animationDelay: '1s' }}></div>
          <div className='absolute top-1/3 right-1/4 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl animate-bounce' style={{ animationDuration: '3s' }}></div>
        </div>

        {/* Overlay Gradient */}
        <div className='absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/70 to-transparent'></div>
      </div>

      {/* Floating Particles */}
      <div className='absolute inset-0'>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className='absolute w-2 h-2 bg-blue-400/30 rounded-full animate-ping'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className='relative z-10 flex flex-col justify-center min-h-screen text-white px-6 lg:px-12'>
        <div className='max-w-7xl mx-auto w-full'>
          
          {/* Main Heading */}
          <div className={`transform transition-all duration-1500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <div className='mb-8'>
              <div className='inline-flex items-center px-4 py-2 bg-emerald-500/20 backdrop-blur-sm rounded-full border border-emerald-400/30 mb-6 animate-fade-in'>
                <TrendingUp className='w-4 h-4 text-emerald-400 mr-2' />
                <span className='text-emerald-300 text-sm font-medium'>Trusted Financial Partner</span>
              </div>
              
              <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6'>
                <span className='inline-block animate-slide-up' style={{ animationDelay: '0.2s' }}>
                  CA{' '}
                </span>
                <span className='inline-block bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent animate-slide-up' style={{ animationDelay: '0.4s' }}>
                  Services
                </span>
                <br />
                <span className='inline-block bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent animate-slide-up' style={{ animationDelay: '0.6s' }}>
                  Financial
                </span>{' '}
                <span className='inline-block animate-slide-up' style={{ animationDelay: '0.8s' }}>
                  Excellence
                </span>
              </h1>
            </div>

            {/* Decorative Line */}
            <div className={`w-32 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full mb-12 transform transition-all duration-1000 ${
              isVisible ? 'scale-x-100' : 'scale-x-0'
            }`} style={{ transformOrigin: 'left', transitionDelay: '1s' }}></div>
          </div>

          {/* Subtitle */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`} style={{ transitionDelay: '1.2s' }}>
            <h2 className='text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight'>
              Trusted Chartered Accountants for{' '}
              <span className='relative'> <br></br>
                <span className='bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent'>
                  Your Business Growth
                </span>
                <div className='absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-400 transform scale-x-0 animate-expand-line'></div>
              </span>
            </h2>
            
            <p className='text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed mb-12'>
              Helping individuals and businesses with accurate, timely, and strategic financial services 
              that drive growth and ensure compliance.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`} style={{ transitionDelay: '1.4s' }}>
            <Link to={'/contact'}>
            <button className='group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-lg shadow-2xl hover:shadow-emerald-500/25 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden'> 
              <span className='relative z-10 flex items-center justify-center'>
                Get Started Today
                <ArrowRight className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
              </span>
              <div className='absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </button></Link>
            
            <button className='group px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transform hover:-translate-y-1 transition-all duration-300'>
              <span className='flex items-center justify-center'>
                Learn More
                <div className='ml-2 w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform duration-300'></div>
              </span>
            </button>
          </div>

          {/* Stats Section */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`} style={{ transitionDelay: '1.6s' }}>
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div 
                  key={index} 
                  className='text-center group hover:scale-105 transition-transform duration-300'
                  style={{ animationDelay: `${1.8 + index * 0.2}s` }}
                >
                  <div className='inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-4 group-hover:bg-white/20 transition-colors duration-300'>
                    <IconComponent className='w-8 h-8 text-emerald-400' />
                  </div>
                  <div className='text-3xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
                    {stat.number}
                  </div>
                  <div className='text-gray-400 font-medium'>{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
          <div className='flex flex-col items-center text-white/60'>
            <span className='text-sm mb-2'>Scroll to explore</span>
            <ChevronDown className='w-6 h-6' />
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes expand-line {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-expand-line {
          animation: expand-line 1s ease-out 2s forwards;
        }
      `}</style>
      
    </div>
    <AboutUs/>
    <HomeComponent />
    <Services />
    <Trouble />
    </>
  )
}

export default HomePage