import React, { useState, useEffect, useRef } from 'react'
import { 
  TrendingUp, 
  Target, 
  Zap, 
  Cpu,
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react'

// Reusable Feature Component
const FeatureCard = ({ icon: IconComponent, title, description, index, isVisible, colorScheme }) => {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <div
      className={`group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 
        transform transition-all duration-700 hover:-translate-y-3 overflow-hidden
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
      style={{ 
        transitionDelay: `${index * 200}ms`,
        background: isHovered ? `linear-gradient(135deg, ${colorScheme.bg1}, ${colorScheme.bg2})` : 'white'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${colorScheme.gradient} opacity-10 rounded-full blur-2xl`}></div>
        <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr ${colorScheme.gradient} opacity-10 rounded-full blur-xl`}></div>
      </div>

      <div className='relative p-8 h-full flex flex-col'>
        
        {/* Icon Section */}
        <div className='mb-6'>
          <div className={`relative inline-flex p-4 bg-gradient-to-br ${colorScheme.gradient} rounded-2xl shadow-lg 
            transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
            <IconComponent className='w-8 h-8 text-white' />
            
            {/* Icon Glow Effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${colorScheme.gradient} rounded-2xl blur-md opacity-0 
              group-hover:opacity-40 transition-opacity duration-300 -z-10 transform scale-150`}></div>
            
            {/* Sparkle Effect */}
            <div className='absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
              <Sparkles className={`w-4 h-4 ${colorScheme.text} animate-pulse`} />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className='flex-grow'>
          <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 
            ${isHovered ? colorScheme.text : 'text-gray-900'}`}>
            {title}
          </h3>
          
          {/* Animated Divider */}
          <div className={`h-1 bg-gradient-to-r ${colorScheme.gradient} rounded-full mb-6 
            transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
          
          <p className={`leading-relaxed transition-colors duration-300 
            ${isHovered ? 'text-gray-700' : 'text-gray-600'}`}>
            {description}
          </p>
        </div>

        {/* Bottom Action */}
        <div className='mt-6 pt-4 border-t border-gray-100 group-hover:border-transparent transition-colors duration-300'>
          <div className={`flex items-center text-sm font-semibold transition-colors duration-300 
            ${isHovered ? colorScheme.text : 'text-gray-400'} group-hover:text-opacity-100`}>
            <CheckCircle2 className='w-4 h-4 mr-2' />
            <span>Professionally Certified</span>
          </div>
        </div>

        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${colorScheme.gradient} opacity-0 
          group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
      </div>
    </div>
  )
}

// Main Features Section Component
const HomeComponent = () => {
  const [visibleCards, setVisibleCards] = useState([])
  const sectionRef = useRef(null)

  const features = [
    {
      id: 1,
      icon: TrendingUp,
      title: "Financial Planning",
      description: "Comprehensive financial strategies involving understanding, managing, and optimizing your finances to achieve long-term stability, wealth, and financial freedom. Our expert approach encompasses budgeting, saving, investing, debt management, and strategic financial planning for sustainable growth.",
      colorScheme: {
        gradient: "from-blue-500 to-blue-600",
        bg1: "#eff6ff",
        bg2: "#dbeafe",
        text: "text-blue-600"
      }
    },
    {
      id: 2,
      icon: Target,
      title: "A Perfect Decision",
      description: "Our commitment goes beyond technical accuracy—we embody a strategic, ethical, and client-centric approach that stands up to rigorous scrutiny and delivers lasting value. Every recommendation is crafted with precision and foresight for optimal outcomes.",
      colorScheme: {
        gradient: "from-emerald-500 to-emerald-600",
        bg1: "#ecfdf5",
        bg2: "#d1fae5",
        text: "text-emerald-600"
      }
    },
    {
      id: 3,
      icon: Zap,
      title: "Perfect Precision",
      description: "Delivering work that is technically accurate, highly reliable, and perfectly aligned with professional and ethical standards. Our meticulous attention to detail ensures every aspect of your financial management meets the highest benchmarks of excellence.",
      colorScheme: {
        gradient: "from-purple-500 to-purple-600",
        bg1: "#faf5ff",
        bg2: "#e9d5ff",
        text: "text-purple-600"
      }
    },
    {
      id: 4,
      icon: Cpu,
      title: "Tech Edge",
      description: "Leveraging cutting-edge technology to enhance efficiency, accuracy, and value in accounting, auditing, tax advisory, and financial consulting services. Our digital-first approach ensures you stay ahead in an increasingly automated business landscape.",
      colorScheme: {
        gradient: "from-orange-500 to-orange-600",
        bg1: "#fff7ed",
        bg2: "#fed7aa",
        text: "text-orange-600"
      }
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.getAttribute('data-feature-id'))
            setVisibleCards(prev => [...new Set([...prev, cardId])])
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = document.querySelectorAll('[data-feature-id]')
    cards.forEach(card => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={sectionRef} className=' px-6 lg:px-12 bg-gradient-to-br from-gray-50 via-white to-slate-50'>
      <div className='max-w-7xl mx-auto'>
        
        {/* Section Header */}
        <div className='text-center mb-16'>
          <div className='inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-emerald-100 rounded-full mb-6'>
            <Sparkles className='w-5 h-5 text-blue-600 mr-2' />
            <span className='text-gray-700 font-semibold'>Why Choose Us</span>
          </div>
          
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight'>
            Excellence in Every{' '}
            <span className='relative'>
              <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent'>
                Detail
              </span>
              <div className='absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 transform scale-x-0 animate-expand-underline'></div>
            </span>
          </h2>
          
          <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            Our chartered accountancy firm combines traditional expertise with modern innovation, 
            delivering unparalleled financial services that drive your success forward.
          </p>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {features.map((feature, index) => (
            <div
              key={feature.id}
              data-feature-id={feature.id}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
                isVisible={visibleCards.includes(feature.id)}
                colorScheme={feature.colorScheme}
              />
            </div>
          ))}
        </div>

        {/* Bottom Statistics */}
        <div className='mt-20 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-12 text-white'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
            <div className='group hover:scale-105 transition-transform duration-300'>
              <div className='text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent'>
                98%
              </div>
              <p className='text-gray-300 group-hover:text-white transition-colors duration-300'>
                Client Satisfaction
              </p>
            </div>
            <div className='group hover:scale-105 transition-transform duration-300'>
              <div className='text-4xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent'>
                24/7
              </div>
              <p className='text-gray-300 group-hover:text-white transition-colors duration-300'>
                Expert Support
              </p>
            </div>
            <div className='group hover:scale-105 transition-transform duration-300'>
              <div className='text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent'>
                500+
              </div>
              <p className='text-gray-300 group-hover:text-white transition-colors duration-300'>
                Satisfied Clients
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes expand-underline {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        
        .animate-expand-underline {
          animation: expand-underline 1s ease-out 0.5s forwards;
        }
      `}</style>
    </div>
  )
}

export default HomeComponent