import React, { useState, useEffect, useRef } from 'react'
import { 
  TrendingUp, 
  Calculator, 
  Shield, 
  FileText, 
  PieChart, 
  Briefcase,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import { Link } from 'react-router-dom'

const Services = () => {
  const [visibleCards, setVisibleCards] = useState([])
  const [hoveredCard, setHoveredCard] = useState(null)
  const sectionRef = useRef(null)

  const services = [
    {
      id: 1,
      icon: TrendingUp,
      title: "Financial Planning",
      description: "Strategic financial planning to achieve long-term stability, wealth building, and financial freedom through expert budgeting, investment strategies, and comprehensive wealth management solutions.",
      features: ["Investment Strategy", "Wealth Management", "Risk Assessment"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      link: "FinancialPlanning"
    },
    {
      id: 2,
      icon: Calculator,
      title: "Tax Consultation",
      description: "Comprehensive tax planning and optimization services to minimize your tax liability while ensuring full compliance with current regulations and maximizing available deductions.",
      features: ["Tax Planning", "Compliance Support", "Audit Assistance"],
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      link: "TaxConsultation"
    },
    {
      id: 3,
      icon: Shield,
      title: "Audit & Assurance",
      description: "Professional audit services providing independent verification of financial statements, internal controls assessment, and comprehensive assurance services for stakeholder confidence.",
      features: ["Financial Audits", "Internal Controls", "Compliance Review"],
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      link: "AuditAssurance"
    },
    {
      id: 4,
      icon: FileText,
      title: "Business Registration",
      description: "Complete business setup and registration services including company incorporation, regulatory compliance, licensing assistance, and ongoing corporate governance support.",
      features: ["Company Formation", "License Support", "Regulatory Compliance"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      link: "BusinessRegistration"
    },
    {
      id: 5,
      icon: PieChart,
      title: "Financial Reporting",
      description: "Detailed financial analysis and reporting services providing insights into business performance, cash flow management, and strategic decision-making support through data-driven recommendations.",
      features: ["Performance Analysis", "Cash Flow Management", "Strategic Insights"],
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      link: "FinancialReporting"
    },
    {
      id: 6,
      icon: Briefcase,
      title: "Corporate Advisory",
      description: "Strategic business advisory services including mergers & acquisitions support, corporate restructuring, due diligence, and comprehensive business transformation consulting.",
      features: ["M&A Support", "Business Strategy", "Due Diligence"],
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      link: "CorporateAdvisory"
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.getAttribute('data-card-id'))
            setVisibleCards(prev => [...new Set([...prev, cardId])])
          }
        })
      },
      { threshold: 0.2 }
    )

    const cards = document.querySelectorAll('[data-card-id]')
    cards.forEach(card => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={sectionRef} className='py-20 px-6 lg:px-12 bg-gradient-to-br from-slate-50 via-white to-blue-50'>
      <div className='max-w-7xl mx-auto'>
        
        {/* Section Header */}
        <div className='text-center mb-16'>
          <div className='inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6'>
            <Briefcase className='w-4 h-4 text-blue-600 mr-2' />
            <span className='text-blue-700 text-lg font-semibold'>Our Services</span>
          </div>
          
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            Comprehensive{' '}
            <span className='bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent'>
              Financial Solutions
            </span>
          </h2>
          
          <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            Expert chartered accountancy services tailored to help your business thrive, 
            ensure compliance, and achieve sustainable financial growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => {
            const IconComponent = service.icon
            const isVisible = visibleCards.includes(service.id)
            const isHovered = hoveredCard === service.id
            
            return (
              <div
                key={service.id}
                data-card-id={service.id}
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl border-2 ${service.borderColor} 
                  transform transition-all duration-700 hover:-translate-y-2 overflow-hidden
                  ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ 
                  transitionDelay: `${index * 150}ms`,
                  boxShadow: isHovered ? '0 25px 50px -12px rgba(0, 0, 0, 0.15)' : undefined
                }}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Card Content */}
                <div className='relative p-8'>
                  
                  {/* Icon Header */}
                  <div className='flex items-center mb-6'>
                    <div className={`relative p-4 bg-gradient-to-br ${service.color} rounded-xl shadow-lg 
                      transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <IconComponent className='w-8 h-8 text-white' />
                      
                      {/* Icon Glow Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-xl blur-md opacity-0 
                        group-hover:opacity-30 transition-opacity duration-300 -z-10`}></div>
                    </div>
                    
                    <div className='ml-4'>
                      <h3 className='text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300'>
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Animated Divider */}
                  <div className={`h-1 bg-gradient-to-r ${service.color} rounded-full mb-6 
                    transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>

                  {/* Description */}
                  <p className='text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300'>
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className='space-y-3 mb-6'>
                    {service.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className={`flex items-center transform transition-all duration-300 
                          ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}
                        style={{ transitionDelay: `${(index * 150) + (featureIndex * 100) + 300}ms` }}
                      >
                        <CheckCircle className={`w-5 h-5 text-emerald-500 mr-3 
                          transform group-hover:scale-110 transition-transform duration-200`} />
                        <span className='text-gray-700 font-medium'>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link to={service.link}>
                  <button className={`w-full flex items-center justify-center px-6 py-3 
                    bg-gradient-to-r ${service.color} text-white font-semibold rounded-lg 
                    shadow-md hover:shadow-lg transform hover:-translate-y-0.5 
                    transition-all duration-300 group-hover:scale-105 overflow-hidden relative`}>
                    
                    <span className='relative z-10 flex items-center'>
                      Learn More
                      <ArrowRight className={`ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300`} />
                    </span>
                    
                    {/* Button Shine Effect */}
                    <div className='absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full 
                      group-hover:-translate-x-full transition-transform duration-700'></div>
                  </button>
                  </Link>
                </div>

                {/* Card Border Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl opacity-0 
                  group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-xl transform scale-105`}></div>
                
                {/* Floating Elements */}
                <div className='absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                  <div className={`w-3 h-3 bg-gradient-to-r ${service.color} rounded-full animate-pulse`}></div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className='text-center mt-16'>
          <div className='bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 shadow-2xl'>
            <h3 className='text-2xl md:text-3xl font-bold text-white mb-4'>
              Ready to Transform Your Financial Future?
            </h3>
            <p className='text-blue-100 mb-6 max-w-2xl mx-auto'>
              Get personalized consultation from our expert chartered accountants and take the first step towards financial excellence.
            </p>
            <Link to="/contact">
            <button className='inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg 
              hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl'>
              Schedule Free Consultation
              <ArrowRight className='ml-2 w-5 h-5' />
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services