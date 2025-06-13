import React, { useState, useEffect, useRef } from 'react'
import { 
  TrendingUp, 
  Target, 
  DollarSign, 
  PieChart, 
  Shield, 
  Calculator,
  ArrowRight,
  CheckCircle,
  ArrowLeft,
  Users,
  TrendingDown,
  Building,
  Calendar,
  BarChart3
} from 'lucide-react'
import { Link } from 'react-router-dom'

  const FinancialPlanning = () => {
  const [visibleSections, setVisibleSections] = useState([])
  const [activeTab, setActiveTab] = useState('overview')
  const sectionRef = useRef(null)

  const serviceColor = "from-blue-500 to-blue-600"
  const bgColor = "bg-blue-50"
  const borderColor = "border-blue-200"

  const planningServices = [
    {
      icon: Target,
      title: "Investment Strategy Development",
      description: "Customized investment portfolios aligned with your risk tolerance and financial goals.",
      features: ["Portfolio Diversification", "Risk Assessment", "Performance Monitoring", "Rebalancing Strategy"]
    },
    {
      icon: DollarSign,
      title: "Wealth Management",
      description: "Comprehensive wealth preservation and growth strategies for high-net-worth individuals.",
      features: ["Asset Allocation", "Tax-Efficient Investing", "Estate Planning", "Legacy Management"]
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Protect your financial future with comprehensive risk assessment and mitigation.",
      features: ["Insurance Planning", "Emergency Fund Strategy", "Market Risk Analysis", "Contingency Planning"]
    },
    {
      icon: Calculator,
      title: "Retirement Planning",
      description: "Secure your retirement with strategic planning and goal-oriented savings strategies.",
      features: ["Retirement Savings", "401(k) Optimization", "Social Security Planning", "Income Distribution"]
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Comprehensive assessment of your current financial situation, goals, and risk tolerance."
    },
    {
      step: "02", 
      title: "Strategy Development",
      description: "Create a personalized financial plan tailored to your specific objectives and timeline."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Execute your financial plan with careful monitoring and professional guidance."
    },
    {
      step: "04",
      title: "Ongoing Management",
      description: "Regular reviews and adjustments to keep your plan on track with changing circumstances."
    }
  ]

  const benefits = [
    "Achieve long-term financial stability",
    "Maximize investment returns",
    "Minimize financial risks",
    "Tax-efficient wealth building",
    "Retirement security planning",
    "Estate planning optimization"
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('data-section')
            setVisibleSections(prev => [...new Set([...prev, sectionId])])
          }
        })
      },
      { threshold: 0.2 }
    )

    const sections = document.querySelectorAll('[data-section]')
    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50'>
      
      {/* Hero Section */}
      <div className='relative py-20 px-6 lg:px-12 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-r from-blue-600/10 to-emerald-600/10'></div>
        <div className='max-w-7xl mx-auto relative'>
          
          {/* Breadcrumb */}
          <div className='flex items-center mb-8'>
            <Link to="/services">
            <button className='flex items-center text-blue-600 hover:text-blue-700 transition-colors'>
              <ArrowLeft className='w-4 h-4 mr-2' />
              Back to Services
            </button>
            </Link>
          </div>

          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6'>
                <TrendingUp className='w-4 h-4 text-blue-600 mr-2' />
                <span className='text-blue-700 text-lg font-semibold'>Financial Planning</span>
              </div>
              
              <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
                Strategic{' '}
                <span className={`bg-gradient-to-r ${serviceColor} bg-clip-text text-transparent`}>
                  Financial Planning
                </span>
              </h1>
              
              <p className='text-xl text-gray-600 mb-8 leading-relaxed'>
                Build wealth, secure your future, and achieve financial freedom with our comprehensive 
                financial planning services designed to maximize your financial potential.
              </p>

              <div className='flex flex-wrap gap-4'>
                <button className={`px-8 py-4 bg-gradient-to-r ${serviceColor} text-white font-semibold rounded-lg 
                  shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300`}>
                  Get Started Today
                  <ArrowRight className='ml-2 w-5 h-5 inline' />
                </button>
                <button className='px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg 
                  hover:bg-blue-600 hover:text-white transition-all duration-300'>
                  Schedule Consultation
                </button>
              </div>
            </div>

            <div className='relative'>
              <div className={`bg-gradient-to-br ${serviceColor} rounded-2xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500`}>
                <TrendingUp className='w-16 h-16 text-white mb-4' />
                <h3 className='text-2xl font-bold text-white mb-4'>Why Choose Our Planning?</h3>
                <div className='space-y-3'>
                  {benefits.slice(0, 3).map((benefit, index) => (
                    <div key={index} className='flex items-center text-blue-100'>
                      <CheckCircle className='w-4 h-4 mr-3 text-green-300' />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div data-section="services" className='py-20 px-6 lg:px-12'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-900 mb-6'>
              Our{' '}
              <span className={`bg-gradient-to-r ${serviceColor} bg-clip-text text-transparent`}>
                Planning Services
              </span>
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Comprehensive financial planning solutions tailored to your unique goals and circumstances.
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            {planningServices.map((service, index) => {
              const IconComponent = service.icon
              const isVisible = visibleSections.includes('services')
              
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-2 ${borderColor}
                    transform transition-all duration-700 hover:-translate-y-2
                    ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className={`p-4 bg-gradient-to-br ${serviceColor} rounded-xl w-fit mb-6`}>
                    <IconComponent className='w-8 h-8 text-white' />
                  </div>
                  
                  <h3 className='text-2xl font-bold text-gray-900 mb-4'>{service.title}</h3>
                  <p className='text-gray-600 mb-6'>{service.description}</p>
                  
                  <div className='space-y-3'>
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className='flex items-center'>
                        <CheckCircle className='w-4 h-4 text-emerald-500 mr-3' />
                        <span className='text-gray-700'>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div data-section="process" className={`py-20 px-6 lg:px-12 ${bgColor}`}>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-900 mb-6'>
              Our{' '}
              <span className={`bg-gradient-to-r ${serviceColor} bg-clip-text text-transparent`}>
                Planning Process
              </span>
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              A systematic approach to creating and implementing your personalized financial strategy.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {processSteps.map((step, index) => {
              const isVisible = visibleSections.includes('process')
              
              return (
                <div
                  key={index}
                  className={`text-center transform transition-all duration-700
                    ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${serviceColor} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <span className='text-2xl font-bold text-white'>{step.step}</span>
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 mb-4'>{step.title}</h3>
                  <p className='text-gray-600'>{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div data-section="benefits" className='py-20 px-6 lg:px-12'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-4xl font-bold text-gray-900 mb-6'>
                Why Choose Our{' '}
                <span className={`bg-gradient-to-r ${serviceColor} bg-clip-text text-transparent`}>
                  Financial Planning?
                </span>
              </h2>
              <p className='text-xl text-gray-600 mb-8'>
                Our comprehensive approach ensures every aspect of your financial life is optimized for success.
              </p>
              
              <div className='grid sm:grid-cols-2 gap-4'>
                {benefits.map((benefit, index) => {
                  const isVisible = visibleSections.includes('benefits')
                  
                  return (
                    <div 
                      key={index}
                      className={`flex items-center p-4 bg-white rounded-lg shadow-md border-l-4 border-blue-500
                        transform transition-all duration-500
                        ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <CheckCircle className='w-5 h-5 text-emerald-500 mr-3 flex-shrink-0' />
                      <span className='text-gray-700 font-medium'>{benefit}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className='relative'>
              <div className='bg-white rounded-2xl p-8 shadow-2xl'>
                <BarChart3 className={`w-12 h-12 text-blue-600 mb-6`} />
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>Financial Growth Guaranteed</h3>
                <p className='text-gray-600 mb-6'>
                  Our proven strategies have helped clients achieve an average of 15% annual growth in their investment portfolios.
                </p>
                <div className='space-y-4'>
                  <div className='flex justify-between items-center'>
                    <span className='text-gray-600'>Average ROI</span>
                    <span className='font-bold text-green-600'>+15%</span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-gray-600'>Client Satisfaction</span>
                    <span className='font-bold text-blue-600'>98%</span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-gray-600'>Years of Experience</span>
                    <span className='font-bold text-purple-600'>15+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className='py-20 px-6 lg:px-12'>
        <div className='max-w-4xl mx-auto'>
          <div className={`bg-gradient-to-r ${serviceColor} rounded-2xl p-8 md:p-12 shadow-2xl text-center`}>
            <TrendingUp className='w-16 h-16 text-white mx-auto mb-6' />
            <h3 className='text-3xl md:text-4xl font-bold text-white mb-6'>
              Ready to Secure Your Financial Future?
            </h3>
            <p className='text-blue-100 mb-8 text-lg max-w-2xl mx-auto'>
              Take the first step towards financial freedom with our expert financial planning services. 
              Schedule your free consultation today.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button className='px-8 py-4 bg-white text-blue-600 font-bold rounded-lg 
                hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-300 shadow-lg'>
                Schedule Free Consultation
                <Calendar className='ml-2 w-5 h-5 inline' />
              </button>
              <button className='px-8 py-4 border-2 border-white text-white font-bold rounded-lg 
                hover:bg-white hover:text-blue-600 transition-all duration-300'>
                Download Planning Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default FinancialPlanning;