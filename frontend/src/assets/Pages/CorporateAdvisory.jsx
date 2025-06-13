import React, { useState, useEffect } from 'react'
import { 
  Briefcase, 
  Target, 
  DollarSign, 
  Shield, 
  Users,
  Calendar,
  ArrowRight,
  CheckCircle,
  ArrowLeft,
  BarChart3,
  TrendingUp,
  Building,
  Award,
  Lightbulb
} from 'lucide-react'
import { Link } from 'react-router-dom'

const CorporateAdvisory = () => {
  const [visibleSections, setVisibleSections] = useState([])

  const serviceColor = "from-teal-500 to-teal-600"
  const bgColor = "bg-teal-50"
  const borderColor = "border-teal-200"

  const advisoryServices = [
    {
      icon: Target,
      title: "Strategic Planning",
      description: "Develop comprehensive business strategies aligned with your organizational goals.",
      features: ["Market Analysis", "Growth Strategy", "Competitive Positioning", "Resource Planning"]
    },
    {
      icon: DollarSign,
      title: "Financial Advisory",
      description: "Expert guidance on financial decisions and investment opportunities.",
      features: ["Capital Raising", "M&A Advisory", "Valuation Services", "Investment Strategy"]
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Identify and mitigate potential risks to protect your business interests.",
      features: ["Risk Assessment", "Compliance Review", "Crisis Management", "Insurance Planning"]
    },
    {
      icon: BarChart3,
      title: "Performance Optimization",
      description: "Enhance operational efficiency and maximize business performance.",
      features: ["Process Improvement", "Cost Optimization", "Efficiency Analysis", "Performance Metrics"]
    }
  ]

  const advisoryBenefits = [
    {
      title: "Strategic Growth",
      description: "Achieve sustainable business growth",
      icon: TrendingUp,
      percentage: "85%"
    },
    {
      title: "Risk Reduction", 
      description: "Minimize business risks and threats",
      icon: Shield,
      percentage: "70%"
    },
    {
      title: "ROI Improvement",
      description: "Enhance return on investments",
      icon: DollarSign,
      percentage: "40%"
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Business Assessment",
      description: "Comprehensive analysis of your current business situation and objectives."
    },
    {
      step: "02", 
      title: "Strategy Development",
      description: "Create tailored advisory solutions and strategic recommendations."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Execute strategies with expert guidance and support."
    },
    {
      step: "04",
      title: "Monitoring & Review",
      description: "Track progress and adjust strategies for optimal results."
    }
  ]

  const keyFeatures = [
    "Expert strategic guidance",
    "Comprehensive market analysis",
    "Risk assessment & mitigation",
    "Performance optimization",
    "Financial advisory services",
    "Growth strategy development"
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
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50'>
      
      {/* Hero Section */}
      <div className='relative py-20 px-6 lg:px-12 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-r from-teal-600/10 to-blue-600/10'></div>
        <div className='max-w-7xl mx-auto relative'>
          
          {/* Breadcrumb */}
          <div className='flex items-center mb-8'>
            <Link to="/services">
              <button className='flex items-center text-teal-600 hover:text-teal-700 transition-colors'>
                <ArrowLeft className='w-4 h-4 mr-2' />
                Back to Services
              </button>
            </Link>
          </div>

          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='inline-flex items-center px-4 py-2 bg-teal-100 rounded-full mb-6'>
                <Briefcase className='w-4 h-4 text-teal-600 mr-2' />
                <span className='text-teal-700 text-lg font-semibold'>Corporate Advisory</span>
              </div>
              
              <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
                Strategic{' '}
                <span className={`bg-gradient-to-r ${serviceColor} bg-clip-text text-transparent`}>
                  Corporate Advisory
                </span>
              </h1>
              
              <p className='text-xl text-gray-600 mb-8 leading-relaxed'>
                Expert guidance and strategic solutions to help your business grow, 
                optimize performance, and achieve sustainable success.
              </p>

              <div className='flex flex-wrap gap-4'>
                <button className={`px-8 py-4 bg-gradient-to-r ${serviceColor} text-white font-semibold rounded-lg 
                  shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300`}>
                  Get Started
                  <ArrowRight className='ml-2 w-5 h-5 inline' />
                </button>
                <button className='px-8 py-4 border-2 border-teal-600 text-teal-600 font-semibold rounded-lg 
                  hover:bg-teal-600 hover:text-white transition-all duration-300'>
                  Schedule Consultation
                </button>
              </div>
            </div>

            <div className='relative'>
              <div className={`bg-gradient-to-br ${serviceColor} rounded-2xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500`}>
                <Briefcase className='w-16 h-16 text-white mb-4' />
                <h3 className='text-2xl font-bold text-white mb-4'>Why Choose Us?</h3>
                <div className='space-y-4'>
                  <div className='flex justify-between items-center text-teal-100'>
                    <span>Client Success Rate</span>
                    <span className='text-2xl font-bold text-white'>95%</span>
                  </div>
                  <div className='flex justify-between items-center text-teal-100'>
                    <span>Years Experience</span>
                    <span className='text-2xl font-bold text-white'>15+</span>
                  </div>
                  <div className='flex justify-between items-center text-teal-100'>
                    <span>Projects Completed</span>
                    <span className='text-2xl font-bold text-white'>500+</span>
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
                Advisory Services
              </span>
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Comprehensive advisory solutions tailored to your business needs and objectives.
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            {advisoryServices.map((service, index) => {
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
                        <CheckCircle className='w-4 h-4 text-teal-500 mr-3' />
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
                Advisory Services?
              </span>
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Our proven advisory approach delivers measurable results and sustainable growth.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            {advisoryBenefits.map((benefit, index) => {
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
                Advisory Process
              </span>
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              A systematic approach to delivering strategic solutions and achieving your business goals.
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
                  Advisory Solutions
                </span>
              </h2>
              <p className='text-xl text-gray-600 mb-8'>
                From strategic planning to implementation, we provide comprehensive 
                advisory services that drive business success.
              </p>
              
              <div className='grid sm:grid-cols-2 gap-4'>
                {keyFeatures.map((feature, index) => {
                  const isVisible = visibleSections.includes('features')
                  
                  return (
                    <div 
                      key={index}
                      className={`flex items-center p-4 bg-white rounded-lg shadow-md border-l-4 border-teal-500
                        transform transition-all duration-500
                        ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <CheckCircle className='w-5 h-5 text-teal-500 mr-3 flex-shrink-0' />
                      <span className='text-gray-700 font-medium'>{feature}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className='relative'>
              <div className='bg-white rounded-2xl p-8 shadow-2xl'>
                <Lightbulb className={`w-12 h-12 text-teal-600 mb-6`} />
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>Strategic Insights</h3>
                <p className='text-gray-600 mb-6'>
                  Our expert advisors provide valuable insights and recommendations to help 
                  your business thrive in today's competitive landscape.
                </p>
                <div className='space-y-4'>
                  <div className='flex justify-between items-center'>
                    <span className='text-gray-600'>Client Satisfaction</span>
                    <span className='font-bold text-teal-600'>95%</span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-gray-600'>Success Rate</span>
                    <span className='font-bold text-teal-600'>90%</span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span className='text-gray-600'>ROI Improvement</span>
                    <span className='font-bold text-teal-600'>40%</span>
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
            <Briefcase className='w-16 h-16 text-white mx-auto mb-6' />
            <h3 className='text-3xl md:text-4xl font-bold text-white mb-6'>
              Ready to Transform Your Business?
            </h3>
            <p className='text-teal-100 mb-8 text-lg max-w-2xl mx-auto'>
              Take the first step towards sustainable growth with our expert corporate advisory services. 
              Schedule your consultation today.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button className='px-8 py-4 bg-white text-teal-600 font-bold rounded-lg 
                hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-300 shadow-lg'>
                Schedule Consultation
                <Calendar className='ml-2 w-5 h-5 inline' />
              </button>
              <button className='px-8 py-4 border-2 border-white text-white font-bold rounded-lg 
                hover:bg-white hover:text-teal-600 transition-all duration-300'>
                Download Advisory Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CorporateAdvisory