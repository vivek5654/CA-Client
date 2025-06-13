import React, { useState, useEffect, useRef } from 'react'
import { 
  Calculator, 
  FileText, 
  DollarSign, 
  Shield, 
  TrendingDown,
  Calendar,
  ArrowRight,
  CheckCircle,
  ArrowLeft,
  BookOpen,
  AlertTriangle,
  Target,
  Clock,
  Users
} from 'lucide-react'
import { Link } from 'react-router-dom'

const TaxConsultation = () => {
  const [visibleSections, setVisibleSections] = useState([])
  const sectionRef = useRef(null)

  const serviceColor = "from-emerald-500 to-emerald-600"
  const bgColor = "bg-emerald-50"
  const borderColor = "border-emerald-200"

  const taxServices = [
    {
      icon: Calculator,
      title: "Tax Planning & Strategy",
      description: "Proactive tax planning to minimize your tax liability and maximize savings through strategic decision-making.",
      features: ["Year-round Planning", "Tax Optimization", "Strategic Timing", "Deduction Maximization"]
    },
    {
      icon: FileText,
      title: "Tax Preparation & Filing",
      description: "Professional preparation and filing of all tax returns with accuracy and attention to detail.",
      features: ["Individual Returns", "Business Returns", "E-filing Service", "Amendment Support"]
    },
    {
      icon: Shield,
      title: "Tax Compliance & Review",
      description: "Ensure full compliance with tax regulations and review existing tax positions for optimization.",
      features: ["Compliance Monitoring", "Tax Position Review", "Regulatory Updates", "Risk Assessment"]
    },
    {
      icon: AlertTriangle,
      title: "Audit Support & Defense",
      description: "Expert representation and support during tax audits and disputes with tax authorities.",
      features: ["Audit Representation", "Documentation Support", "Negotiation Services", "Appeal Assistance"]
    }
  ]

  const taxBenefits = [
    {
      title: "Reduced Tax Liability",
      description: "Strategic planning to minimize your overall tax burden",
      percentage: "30%",
      metric: "Average Savings"
    },
    {
      title: "Compliance Assurance", 
      description: "Expert tax filing with minimal risk of penalties",
      percentage: "98%",
      metric: "Success Rate"
    },
    {
      title: "Time Savings",
      description: "Focus on your business while we handle your taxes",
      percentage: "50+",
      metric: "Hours Saved"
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Tax Situation Analysis",
      description: "Comprehensive review of your current tax situation, income sources, and potential deductions."
    },
    {
      step: "02", 
      title: "Strategy Development",
      description: "Create a customized tax strategy aligned with your financial goals and circumstances."
    },
    {
      step: "03",
      title: "Implementation & Filing",
      description: "Execute the tax strategy and prepare accurate returns with maximum deductions."
    },
    {
      step: "04",
      title: "Ongoing Support",
      description: "Year-round tax planning and support to ensure continued optimization and compliance."
    }
  ]

  const keyFeatures = [
    "Expert tax planning strategies",
    "Maximum deduction identification",
    "Penalty-free filing guarantee",
    "Audit protection services",
    "Year-round tax support",
    "Multi-state tax handling"
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
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50'>
      
      {/* Hero Section */}
      <div className='relative py-20 px-6 lg:px-12 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-blue-600/10'></div>
        <div className='max-w-7xl mx-auto relative'>
          
          {/* Breadcrumb */}
          <div className='flex items-center mb-8'>
            <Link to="/services">
            <button className='flex items-center text-emerald-600 hover:text-emerald-700 transition-colors'>
              <ArrowLeft className='w-4 h-4 mr-2' />
              Back to Services
            </button>
            </Link>
          </div>

          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full mb-6'>
                <Calculator className='w-4 h-4 text-emerald-600 mr-2' />
                <span className='text-emerald-700 text-lg font-semibold'>Tax Consultation</span>
              </div>
              
              <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
                Expert{' '}
                <span className={`bg-gradient-to-r ${serviceColor} bg-clip-text text-transparent`}>
                  Tax Consultation
                </span>
              </h1>
              
              <p className='text-xl text-gray-600 mb-8 leading-relaxed'>
                Minimize your tax burden and maximize your savings with our comprehensive tax planning, 
                preparation, and compliance services from certified tax professionals.
              </p>

              <div className='flex flex-wrap gap-4'>
                <Link to="/contact">
                <button className={`px-8 py-4 bg-gradient-to-r ${serviceColor} text-white font-semibold rounded-lg 
                  shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300`}>
                  Start Tax Planning
                  <ArrowRight className='ml-2 w-5 h-5 inline' />
                </button></Link>
                
              </div>
            </div>

            <div className='relative'>
              <div className={`bg-gradient-to-br ${serviceColor} rounded-2xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500`}>
                <Calculator className='w-16 h-16 text-white mb-4' />
                <h3 className='text-2xl font-bold text-white mb-4'>Tax Savings Guaranteed</h3>
                <div className='space-y-4'>
                  <div className='flex justify-between items-center text-emerald-100'>
                    <span>Average Tax Savings</span>
                    <span className='text-2xl font-bold text-white'>30%</span>
                  </div>
                  <div className='flex justify-between items-center text-emerald-100'>
                    <span>Filing Success Rate</span>
                    <span className='text-2xl font-bold text-white'>98%</span>
                  </div>
                  <div className='flex justify-between items-center text-emerald-100'>
                    <span>Client Satisfaction</span>
                    <span className='text-2xl font-bold text-white'>99%</span>
                  </div>
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
                Tax Services
              </span>
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Comprehensive tax solutions designed to minimize your liability and maximize your savings.
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            {taxServices.map((service, index) => {
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

      {/* Benefits Section */}
      <div data-section="benefits" className={`py-20 px-6 lg:px-12 ${bgColor}`}>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-900 mb-6'>
              Why Choose Our{' '}
              <span className={`bg-gradient-to-r ${serviceColor} bg-clip-text text-transparent`}>
                Tax Services?
              </span>
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Our proven tax strategies deliver measurable results and peace of mind.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            {taxBenefits.map((benefit, index) => {
              const isVisible = visibleSections.includes('benefits')
              
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-8 shadow-lg text-center
                    transform transition-all duration-700
                    ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className={`text-4xl font-bold bg-gradient-to-r ${serviceColor} bg-clip-text text-transparent mb-4`}>
                    {benefit.percentage}
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 mb-2'>{benefit.title}</h3>
                  <p className='text-gray-600 mb-4'>{benefit.description}</p>
                  <span className='text-sm text-emerald-600 font-semibold'>{benefit.metric}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div data-section="process" className='py-20 px-6 lg:px-12'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-900 mb-6'>
              Our{' '}
              <span className={`bg-gradient-to-r ${serviceColor} bg-clip-text text-transparent`}>
                Tax Process
              </span>
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              A systematic approach to tax planning and preparation that ensures maximum savings and compliance.
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

      {/* Features Section */}
      <div data-section="features" className='py-20 px-6 lg:px-12'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-4xl font-bold text-gray-900 mb-6'>
                Complete{' '}
                <span className={`bg-gradient-to-r ${serviceColor} bg-clip-text text-transparent`}>
                  Tax Solutions
                </span>
              </h2>
              <p className='text-xl text-gray-600 mb-8'>
                From individual tax returns to complex business taxation, we provide comprehensive 
                services that save you time and money.
              </p>
              
              <div className='grid sm:grid-cols-2 gap-4'>
                {keyFeatures.map((feature, index) => {
                  const isVisible = visibleSections.includes('features')
                  
                  return (
                    <div 
                      key={index}
                      className={`flex items-center p-4 bg-white rounded-lg shadow-md border-l-4 border-emerald-500
                        transform transition-all duration-500
                        ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <CheckCircle className='w-5 h-5 text-emerald-500 mr-3 flex-shrink-0' />
                      <span className='text-gray-700 font-medium'>{feature}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className='relative'>
              <div className='bg-white rounded-2xl p-8 shadow-2xl'>
                <TrendingDown className={`w-12 h-12 text-emerald-600 mb-6`} />
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>Tax Deadlines Approaching?</h3>
                <p className='text-gray-600 mb-6'>
                  Don't wait until the last minute. Our expedited tax services ensure you meet 
                  all deadlines while maximizing your refund potential.
                </p>
                <div className='space-y-4'>
                  <div className='flex items-center justify-between p-4 bg-emerald-50 rounded-lg'>
                    <div className='flex items-center'>
                      <Clock className='w-5 h-5 text-emerald-600 mr-3' />
                      <span className='font-medium'>Quick Turnaround</span>
                    </div>
                    <span className='text-emerald-600 font-bold'>24-48 hrs</span>
                  </div>
                  <div className='flex items-center justify-between p-4 bg-emerald-50 rounded-lg'>
                    <div className='flex items-center'>
                      <Shield className='w-5 h-5 text-emerald-600 mr-3' />
                      <span className='font-medium'>Accuracy Guarantee</span>
                    </div>
                    <span className='text-emerald-600 font-bold'>100%</span>
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
            <Calculator className='w-16 h-16 text-white mx-auto mb-6' />
            <h3 className='text-3xl md:text-4xl font-bold text-white mb-6'>
              Ready to Minimize Your Tax Burden?
            </h3>
            <p className='text-emerald-100 mb-8 text-lg max-w-2xl mx-auto'>
              Stop overpaying on taxes. Let our certified tax professionals create a strategy 
              that saves you money and ensures compliance.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link to="/contact">
              <button className='px-8 py-4 bg-white text-emerald-600 font-bold rounded-lg 
                hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-300 shadow-lg'>
                Schedule Tax Consultation
                <Calendar className='ml-2 w-5 h-5 inline' />
              </button></Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaxConsultation