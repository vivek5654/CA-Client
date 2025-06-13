import React, { useState, useEffect, useRef } from 'react'
import { 
  Shield, 
  FileText, 
  CheckCircle2, 
  Eye, 
  BookOpen,
  Users,
  Calendar,
  ArrowRight,
  CheckCircle,
  ArrowLeft,
  AlertTriangle,
  Target,
  BarChart3,
  Lock,
  Award
} from 'lucide-react'
import { Link } from 'react-router-dom'

const AuditAssurance = () => {
  const [visibleSections, setVisibleSections] = useState([])
  const sectionRef = useRef(null)

  const serviceColor = "from-indigo-500 to-indigo-600"
  const bgColor = "bg-indigo-50"
  const borderColor = "border-indigo-200"

  const auditServices = [
    {
      icon: FileText,
      title: "Financial Statement Audits",
      description: "Independent examination of financial statements to provide assurance on accuracy and compliance with accounting standards.",
      features: ["GAAP Compliance Review", "Financial Statement Analysis", "Management Letter", "Audit Opinion"]
    },
    {
      icon: Shield,
      title: "Internal Control Assessment",
      description: "Comprehensive evaluation of internal controls to identify weaknesses and recommend improvements.",
      features: ["Control Testing", "Risk Assessment", "SOX Compliance", "Remediation Plans"]
    },
    {
      icon: Eye,
      title: "Compliance Audits",
      description: "Specialized audits to ensure adherence to industry regulations and government requirements.",
      features: ["Regulatory Compliance", "Industry Standards", "Government Audits", "Certification Support"]
    },
    {
      icon: BarChart3,
      title: "Operational Audits",
      description: "Performance-focused audits to improve efficiency, effectiveness, and operational excellence.",
      features: ["Process Evaluation", "Efficiency Analysis", "Best Practices", "Performance Metrics"]
    }
  ]

  const auditBenefits = [
    {
      title: "Enhanced Credibility",
      description: "Independent verification builds stakeholder confidence",
      icon: Award,
      percentage: "95%"
    },
    {
      title: "Risk Mitigation", 
      description: "Identify and address potential financial risks",
      icon: Shield,
      percentage: "80%"
    },
    {
      title: "Improved Controls",
      description: "Strengthen internal controls and processes",
      icon: Lock,
      percentage: "70%"
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Planning & Risk Assessment",
      description: "Comprehensive planning phase including risk assessment, materiality determination, and audit strategy development."
    },
    {
      step: "02", 
      title: "Fieldwork & Testing",
      description: "Detailed testing of transactions, balances, and internal controls using statistical sampling and analytical procedures."
    },
    {
      step: "03",
      title: "Evaluation & Analysis",
      description: "Analysis of findings, evaluation of results, and assessment of compliance with applicable standards."
    },
    {
      step: "04",
      title: "Reporting & Communication",
      description: "Delivery of audit opinion, management letter, and recommendations for operational improvements."
    }
  ]

  const keyFeatures = [
    "Independent audit opinions",
    "Comprehensive risk assessment",
    "Internal control evaluation",
    "Regulatory compliance review",
    "Management advisory services",
    "Continuous audit support"
  ]

  const industries = [
    "Healthcare & Medical",
    "Financial Services",
    "Manufacturing",
    "Technology",
    "Non-Profit Organizations",
    "Government Entities"
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
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50'>
      
      {/* Hero Section */}
      <div className='relative py-20 px-6 lg:px-12 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10'></div>
        <div className='max-w-7xl mx-auto relative'>
          
          {/* Breadcrumb */}
          <div className='flex items-center mb-8'>
            <Link to="/services">
              <button className='flex items-center text-indigo-600 hover:text-indigo-700 transition-colors'>
                <ArrowLeft className='w-4 h-4 mr-2' />
                Back to Services
              </button>
            </Link>
          </div>

          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full mb-6'>
                <Shield className='w-4 h-4 text-indigo-600 mr-2' />
                <span className='text-indigo-700 text-lg font-semibold'>Audit & Assurance</span>
              </div>
              
              <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
                Professional{' '}
                <span className={`bg-gradient-to-r ${serviceColor} bg-clip-text text-transparent`}>
                  Audit & Assurance
                </span>
              </h1>
              
              <p className='text-xl text-gray-600 mb-8 leading-relaxed'>
                Build trust and credibility with stakeholders through independent audit services 
                that provide assurance on financial statements and internal controls.
              </p>

              <div className='flex flex-wrap gap-4'>
                <button className={`px-8 py-4 bg-gradient-to-r ${serviceColor} text-white font-semibold rounded-lg 
                  shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300`}>
                  Request Audit Quote
                  <ArrowRight className='ml-2 w-5 h-5 inline' />
                </button>
                <button className='px-8 py-4 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-lg 
                  hover:bg-indigo-600 hover:text-white transition-all duration-300'>
                  Schedule Consultation
                </button>
              </div>
            </div>

            <div className='relative'>
              <div className={`bg-gradient-to-br ${serviceColor} rounded-2xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500`}>
                <Shield className='w-16 h-16 text-white mb-4' />
                <h3 className='text-2xl font-bold text-white mb-4'>Audit Excellence</h3>
                <div className='space-y-4'>
                  <div className='flex justify-between items-center text-indigo-100'>
                    <span>Audit Accuracy</span>
                    <span className='text-2xl font-bold text-white'>99.9%</span>
                  </div>
                  <div className='flex justify-between items-center text-indigo-100'>
                    <span>Client Retention</span>
                    <span className='text-2xl font-bold text-white'>98%</span>
                  </div>
                  <div className='flex justify-between items-center text-indigo-100'>
                    <span>Years Experience</span>
                    <span className='text-2xl font-bold text-white'>20+</span>
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
                Audit Services
              </span>
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Comprehensive audit solutions designed to ensure accuracy, compliance, and operational excellence.
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            {auditServices.map((service, index) => {
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
                        <CheckCircle className='w-4 h-4 text-indigo-500 mr-3' />
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
                Audit Services?
              </span>
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Our proven audit methodologies deliver measurable results and peace of mind.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            {auditBenefits.map((benefit, index) => {
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
                Audit Process
              </span>
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              A systematic approach to conducting thorough and effective audits.
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
                  Audit Solutions
                </span>
              </h2>
              <p className='text-xl text-gray-600 mb-8'>
                From financial statement audits to operational reviews, we provide comprehensive 
                services that ensure accuracy and compliance.
              </p>
              
              <div className='grid sm:grid-cols-2 gap-4'>
                {keyFeatures.map((feature, index) => {
                  const isVisible = visibleSections.includes('features')
                  
                  return (
                    <div 
                      key={index}
                      className={`flex items-center p-4 bg-white rounded-lg shadow-md border-l-4 border-indigo-500
                        transform transition-all duration-500
                        ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <CheckCircle className='w-5 h-5 text-indigo-500 mr-3 flex-shrink-0' />
                      <span className='text-gray-700 font-medium'>{feature}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className='relative'>
              <div className='bg-white rounded-2xl p-8 shadow-2xl'>
                <BarChart3 className={`w-12 h-12 text-indigo-600 mb-6`} />
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>Industries We Serve</h3>
                <p className='text-gray-600 mb-6'>
                  Our audit expertise spans across various industries, ensuring compliance and operational excellence.
                </p>
                <div className='grid grid-cols-2 gap-4'>
                  {industries.map((industry, index) => (
                    <div key={index} className='flex items-center p-3 bg-indigo-50 rounded-lg'>
                      <CheckCircle className='w-4 h-4 text-indigo-600 mr-2' />
                      <span className='text-gray-700'>{industry}</span>
                    </div>
                  ))}
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
            <Shield className='w-16 h-16 text-white mx-auto mb-6' />
            <h3 className='text-3xl md:text-4xl font-bold text-white mb-6'>
              Ready to Enhance Your Audit Process?
            </h3>
            <p className='text-indigo-100 mb-8 text-lg max-w-2xl mx-auto'>
              Take the first step towards improved compliance and operational excellence. 
              Schedule your audit consultation today.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <button className='px-8 py-4 bg-white text-indigo-600 font-bold rounded-lg 
                hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-300 shadow-lg'>
                Schedule Audit Consultation
                <Calendar className='ml-2 w-5 h-5 inline' />
              </button>
              <button className='px-8 py-4 border-2 border-white text-white font-bold rounded-lg 
                hover:bg-white hover:text-indigo-600 transition-all duration-300'>
                Download Audit Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuditAssurance