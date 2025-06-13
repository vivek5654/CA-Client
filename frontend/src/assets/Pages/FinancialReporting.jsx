import React, { useState, useEffect } from 'react'
import { 
  FileText, 
  BarChart3, 
  DollarSign, 
  Shield, 
  Users,
  Calendar,
  ArrowRight,
  CheckCircle,
  ArrowLeft,
  PieChart,
  TrendingUp,
  Building,
  Award,
  Clipboard
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Clock } from 'lucide-react'

const FinancialReporting = () => {
  const [visibleSections, setVisibleSections] = useState([])

  const serviceColor = "from-purple-500 to-purple-600"
  const bgColor = "bg-purple-50"
  const borderColor = "border-purple-200"

  const reportingServices = [
    {
      icon: FileText,
      title: "Financial Statements",
      description: "Comprehensive preparation of financial statements in compliance with accounting standards.",
      features: ["Balance Sheet", "Income Statement", "Cash Flow", "Notes to Accounts"]
    },
    {
      icon: BarChart3,
      title: "Management Reports",
      description: "Customized reports providing insights for informed decision-making.",
      features: ["KPI Analysis", "Performance Metrics", "Trend Analysis", "Budget Reports"]
    },
    {
      icon: Shield,
      title: "Compliance Reporting",
      description: "Ensure regulatory compliance with accurate and timely reporting.",
      features: ["Regulatory Filings", "Tax Reports", "Statutory Reports", "Compliance Updates"]
    },
    {
      icon: PieChart,
      title: "Analytical Reports",
      description: "In-depth financial analysis and business performance insights.",
      features: ["Ratio Analysis", "Trend Analysis", "Industry Comparison", "Forecasting"]
    }
  ]

  const reportingBenefits = [
    {
      title: "Improved Decision Making",
      description: "Data-driven insights for better business decisions",
      icon: TrendingUp,
      percentage: "90%"
    },
    {
      title: "Compliance Assurance", 
      description: "High regulatory compliance standards",
      icon: Shield,
      percentage: "98%"
    },
    {
      title: "Time Savings",
      description: "Automated reporting processes",
      icon: Clock,
      percentage: "60%"
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Data Collection",
      description: "Gather and organize financial data from various sources."
    },
    {
      step: "02", 
      title: "Analysis & Processing",
      description: "Process data and perform comprehensive financial analysis."
    },
    {
      step: "03",
      title: "Report Preparation",
      description: "Prepare accurate and detailed financial reports."
    },
    {
      step: "04",
      title: "Review & Delivery",
      description: "Quality review and timely delivery of reports."
    }
  ]

  const keyFeatures = [
    "Accurate financial statements",
    "Real-time reporting",
    "Custom report templates",
    "Automated calculations",
    "Data visualization",
    "Compliance monitoring"
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
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50'>
      
      {/* Hero Section */}
      <div className='relative py-20 px-6 lg:px-12 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10'></div>
        <div className='max-w-7xl mx-auto relative'>
          
          {/* Breadcrumb */}
          <div className='flex items-center mb-8'>
            <Link to="/services">
              <button className='flex items-center text-purple-600 hover:text-purple-700 transition-colors'>
                <ArrowLeft className='w-4 h-4 mr-2' />
                Back to Services
              </button>
            </Link>
          </div>

          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-6'>
                <FileText className='w-4 h-4 text-purple-600 mr-2' />
                <span className='text-purple-700 text-lg font-semibold'>Financial Reporting</span>
              </div>
              
              <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
                Professional{' '}
                <span className={`bg-gradient-to-r ${serviceColor} bg-clip-text text-transparent`}>
                  Financial Reporting
                </span>
              </h1>
              
              <p className='text-xl text-gray-600 mb-8 leading-relaxed'>
                Accurate, timely, and comprehensive financial reporting services to help you 
                make informed business decisions and maintain regulatory compliance.
              </p>

              <div className='flex flex-wrap gap-4'>
                
                <Link to="/contact">
                <button className='px-8 py-4 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg 
                  hover:bg-purple-600 hover:text-white transition-all duration-300'>
                  Schedule Consultation
                </button></Link>
              </div>
            </div>

            <div className='relative'>
              <div className={`bg-gradient-to-br ${serviceColor} rounded-2xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500`}>
                <FileText className='w-16 h-16 text-white mb-4' />
                <h3 className='text-2xl font-bold text-white mb-4'>Reporting Excellence</h3>
                <div className='space-y-4'>
                  <div className='flex justify-between items-center text-purple-100'>
                    <span>Report Accuracy</span>
                    <span className='text-2xl font-bold text-white'>99.9%</span>
                  </div>
                  <div className='flex justify-between items-center text-purple-100'>
                    <span>On-time Delivery</span>
                    <span className='text-2xl font-bold text-white'>100%</span>
                  </div>
                  <div className='flex justify-between items-center text-purple-100'>
                    <span>Client Satisfaction</span>
                    <span className='text-2xl font-bold text-white'>98%</span>
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
                Reporting Services
              </span>
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Comprehensive financial reporting solutions tailored to your business needs.
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            {reportingServices.map((service, index) => {
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
                        <CheckCircle className='w-4 h-4 text-purple-500 mr-3' />
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
                Reporting Services?
              </span>
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Our proven reporting solutions deliver accuracy, efficiency, and valuable insights.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            {reportingBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              const isVisible = visibleSections.includes('benefits')
              
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-8 shadow-lg text-center
                    transform transition-all duration-700
                    ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className={`p-4 bg-gradient-to-br ${serviceColor} rounded-xl w-fit mx-auto mb-6`}>
                    <IconComponent className='w-8 h-8 text-white' />
                  </div>
                  <div className={`text-4xl font-bold bg-gradient-to-r ${serviceColor} bg-clip-text text-transparent mb-4`}>
                    {benefit.percentage}
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 mb-2'>{benefit.title}</h3>
                  <p className='text-gray-600'>{benefit.description}</p>
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
                Reporting Process
              </span>
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              A systematic approach to delivering accurate and timely financial reports.
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
      <div data-section="features" className={`py-20 px-6 lg:px-12 ${bgColor}`}>
        <div className='max-w-7xl mx-auto'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-4xl font-bold text-gray-900 mb-6'>
                Complete{' '}
                <span className={`bg-gradient-to-r ${serviceColor} bg-clip-text text-transparent`}>
                  Reporting Solutions
                </span>
              </h2>
              <p className='text-xl text-gray-600 mb-8'>
                From financial statements to management reports, we provide comprehensive 
                reporting services that drive informed decision-making.
              </p>
              
              <div className='grid sm:grid-cols-2 gap-4'>
                {keyFeatures.map((feature, index) => {
                  const isVisible = visibleSections.includes('features')
                  
                  return (
                    <div 
                      key={index}
                      className={`flex items-center p-4 bg-white rounded-lg shadow-md border-l-4 border-purple-500
                        transform transition-all duration-500
                        ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <CheckCircle className='w-5 h-5 text-purple-500 mr-3 flex-shrink-0' />
                      <span className='text-gray-700 font-medium'>{feature}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className='relative'>
              <div className='bg-white rounded-2xl p-8 shadow-2xl'>
                <Clipboard className={`w-12 h-12 text-purple-600 mb-6`} />
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>Reporting Excellence</h3>
                <p className='text-gray-600 mb-6'>
                  Our comprehensive reporting solutions ensure accuracy, compliance, and 
                  valuable insights for your business.
                </p>
                <div className='space-y-4'>
                  <div className='flex justify-between items-center'>
                    <span className='text-gray-600'>Report Accuracy</span>
                    <span className='font-bold text-purple-600'>98%</span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-gray-600'>On-time Delivery</span>
                    <span className='font-bold text-purple-600'>98%</span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-gray-600'>Client Satisfaction</span>
                    <span className='font-bold text-purple-600'>98%</span>
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
            <FileText className='w-16 h-16 text-white mx-auto mb-6' />
            <h3 className='text-3xl md:text-4xl font-bold text-white mb-6'>
              Ready to Streamline Your Financial Reporting?
            </h3>
            <p className='text-purple-100 mb-8 text-lg max-w-2xl mx-auto'>
              Take the first step towards efficient and accurate financial reporting. 
              Schedule your consultation today.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link to="/contact">
              <button className='px-8 py-4 bg-white text-purple-600 font-bold rounded-lg 
                hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-300 shadow-lg'>
                Schedule Consultation
                <Calendar className='ml-2 w-5 h-5 inline' />
              </button></Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FinancialReporting