import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  Shield, 
  Clock, 
  Users, 
  Building, 
  Award,
  Phone,
  Mail,
  Star,
  Quote,
  ArrowLeft,
  Calendar,
  CheckCircle,
  Target,
  BarChart3,
  Lock
} from 'lucide-react'

const BusinessRegistration = () => {
  const [visibleSections, setVisibleSections] = useState([])
  const sectionRef = useRef(null)

  const serviceColor = "from-purple-500 to-purple-600"
  const bgColor = "bg-purple-50"
  const borderColor = "border-purple-200"

  const registrationTypes = [
    {
      id: 1,
      icon: Building,
      title: "Private Limited Company",
      description: "Popular choice for startups and growing businesses with limited liability protection.",
      features: ["Limited Liability", "Separate Legal Entity", "Easy Fund Raising", "Tax Benefits"]
    },
    {
      id: 2,
      icon: Award,
      title: "Public Limited Company", 
      description: "Suitable for large-scale businesses and IPO aspirants with public investment options.",
      features: ["Public Investment", "Transferable Shares", "Perpetual Succession", "Brand Recognition"]
    },
    {
      id: 3,
      icon: Users,
      title: "One Person Company",
      description: "Ideal for solo entrepreneurs and individual business owners seeking corporate benefits.",
      features: ["Single Member", "Limited Liability", "Corporate Benefits", "Easy Compliance"]
    },
    {
      id: 4,
      icon: Shield,
      title: "LLP Registration",
      description: "Recommended for professional services and partnership businesses with flexible structure.",
      features: ["Flexible Structure", "Limited Liability", "Tax Efficiency", "Minimal Compliance"]
    }
  ]

  const registrationBenefits = [
    {
      title: "Legal Protection",
      description: "Limited liability protection for business owners",
      icon: Shield,
      percentage: "100%"
    },
    {
      title: "Tax Efficiency", 
      description: "Optimize tax structure and maximize savings",
      icon: Target,
      percentage: "30%"
    },
    {
      title: "Business Growth",
      description: "Enhanced credibility for funding and partnerships",
      icon: BarChart3,
      percentage: "85%"
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Professional consultation to understand your business needs and recommend suitable structure based on your goals."
    },
    {
      step: "02",
      title: "Document Preparation",
      description: "Expert preparation of all necessary documents including MOA, AOA, and application forms with legal compliance."
    },
    {
      step: "03",
      title: "Name Approval",
      description: "Assistance with company name approval by the Ministry of Corporate Affairs with multiple name options."
    },
    {
      step: "04",
      title: "Registration Filing",
      description: "Professional submission of incorporation documents with ROC and real-time application tracking."
    }
  ]

  const keyFeatures = [
    "Complete incorporation service",
    "Expert legal consultation", 
    "Fast-track processing",
    "Regulatory compliance support",
    "Post-incorporation services",
    "Ongoing compliance assistance"
  ]

  const industries = [
    "Technology & IT",
    "E-commerce & Retail",
    "Manufacturing",
    "Healthcare Services",
    "Professional Services",
    "Food & Beverage"
  ]

  const testimonials = [
    {
      name: "Priya Sharma",
      company: "Tech Innovators Pvt Ltd",
      rating: 5,
      text: "Professional service! They made our company registration process smooth and completed it within the expected timeline."
    },
    {
      name: "Rajesh Kumar",
      company: "Kumar & Associates LLP", 
      rating: 5,
      text: "Knowledgeable team with strong expertise. They guided us through each step and ensured proper compliance."
    },
    {
      name: "Anita Patel",
      company: "Green Solutions OPC",
      rating: 5,
      text: "Recommended service. Cost-effective, transparent, and delivered as promised with excellent support."
    }
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
            <button className='flex items-center text-purple-600 hover:text-purple-700 transition-colors'>
              <ArrowLeft className='w-4 h-4 mr-2' />
              Back to Services
            </button>
          </div>

          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <div className='inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-6'>
                <FileText className='w-4 h-4 text-purple-600 mr-2' />
                <span className='text-purple-700 text-lg font-semibold'>Business Registration</span>
              </div>
              
              <h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
                Professional{' '}
                <span className={`bg-gradient-to-r ${serviceColor} bg-clip-text text-transparent`}>
                  Business Registration
                </span>
              </h1>
              
              <p className='text-xl text-gray-600 mb-8 leading-relaxed'>
                Complete business setup and registration services with expert guidance, 
                ensuring legal compliance and smooth business operations from day one.
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
                <h3 className='text-2xl font-bold text-white mb-4'>Registration Excellence</h3>
                <div className='space-y-4'>
                  <div className='flex justify-between items-center text-purple-100'>
                    <span>Success Rate</span>
                    <span className='text-2xl font-bold text-white'>98%</span>
                  </div>
                  <div className='flex justify-between items-center text-purple-100'>
                    <span>Client Satisfaction</span>
                    <span className='text-2xl font-bold text-white'>97%</span>
                  </div>
                  <div className='flex justify-between items-center text-purple-100'>
                    <span>Years Experience</span>
                    <span className='text-2xl font-bold text-white'>15+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Types Section */}
      <div data-section="services" className='py-20 px-6 lg:px-12'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-900 mb-6'>
              Our{' '}
              <span className={`bg-gradient-to-r ${serviceColor} bg-clip-text text-transparent`}>
                Registration Services
              </span>
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Choose the perfect business structure that aligns with your goals and requirements.
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            {registrationTypes.map((type, index) => {
              const IconComponent = type.icon
              const isVisible = visibleSections.includes('services')
              
              return (
                <div
                  key={type.id}
                  className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-2 ${borderColor}
                    transform transition-all duration-700 hover:-translate-y-2
                    ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className='flex items-start justify-between mb-6'>
                    <div className={`p-4 bg-gradient-to-br ${serviceColor} rounded-xl w-fit mb-6`}>
                      <IconComponent className='w-8 h-8 text-white' />
                    </div>
                  </div>
                  
                  <h3 className='text-2xl font-bold text-gray-900 mb-4'>{type.title}</h3>
                  <p className='text-gray-600 mb-6'>{type.description}</p>
                  
                  <div className='space-y-3 mb-6'>
                    {type.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className='flex items-center'>
                        <CheckCircle className='w-4 h-4 text-purple-500 mr-3' />
                        <span className='text-gray-700'>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full bg-gradient-to-r ${serviceColor} text-white 
                    font-semibold py-3 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 
                    transition-all duration-300`}>
                    Get Started
                  </button>
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
                Registration Services?
              </span>
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              Our proven registration methodologies deliver measurable results and peace of mind.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            {registrationBenefits.map((benefit, index) => {
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
                Registration Process
              </span>
            </h2>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
              A streamlined 4-step process to get your business registered quickly and efficiently.
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
                  Registration Solutions
                </span>
              </h2>
              <p className='text-xl text-gray-600 mb-8'>
                From company incorporation to post-registration compliance, we provide comprehensive 
                services that ensure legal compliance and business success.
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
                <BarChart3 className={`w-12 h-12 text-purple-600 mb-6`} />
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>Industries We Serve</h3>
                <p className='text-gray-600 mb-6'>
                  Our registration expertise spans across various industries, ensuring compliance and business success.
                </p>
                <div className='grid grid-cols-2 gap-4'>
                  {industries.map((industry, index) => (
                    <div key={index} className='flex items-center p-3 bg-purple-50 rounded-lg'>
                      <CheckCircle className='w-4 h-4 text-purple-600 mr-2' />
                      <span className='text-gray-700'>{industry}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div data-section="testimonials" className='py-20 px-6 lg:px-12'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-gray-900 mb-6'>
              What Our{' '}
              <span className={`bg-gradient-to-r ${serviceColor} bg-clip-text text-transparent`}>
                Clients Say
              </span>
            </h2>
            <p className='text-xl text-gray-600'>
              Trusted by hundreds of businesses across India for their registration needs.
            </p>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {testimonials.map((testimonial, index) => {
              const isVisible = visibleSections.includes('testimonials')
              
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-6 shadow-lg border-2 ${borderColor}
                    transform transition-all duration-700 hover:shadow-xl
                    ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className='flex items-center mb-4'>
                    <Quote className='w-8 h-8 text-purple-600 mr-3' />
                    <div className='flex space-x-1'>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className='w-4 h-4 text-yellow-400 fill-current' />
                      ))}
                    </div>
                  </div>
                  
                  <p className='text-gray-600 mb-4 italic'>"{testimonial.text}"</p>
                  
                  <div>
                    <div className='font-semibold text-gray-900'>{testimonial.name}</div>
                    <div className='text-sm text-gray-500'>{testimonial.company}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className='py-20 px-6 lg:px-12'>
        <div className='max-w-4xl mx-auto'>
          <div className={`bg-gradient-to-r ${serviceColor} rounded-2xl p-8 md:p-12 shadow-2xl text-center`}>
            <FileText className='w-16 h-16 text-white mx-auto mb-6' />
            <h3 className='text-3xl md:text-4xl font-bold text-white mb-6'>
              Ready to Start Your Business Journey?
            </h3>
            <p className='text-purple-100 mb-8 text-lg max-w-2xl mx-auto'>
              Join thousands of successful businesses. Get started with expert guidance and 
              professional registration services today.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link to="/contact">
              <button className='px-8 py-4 bg-white text-purple-600 font-bold rounded-lg 
                hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-300 shadow-lg'>
                Start Registration Now
                <FileText className='ml-2 w-5 h-5 inline' />
              </button></Link>
              
            </div>
            <div className='mt-8 text-purple-200'>
              <p>Call us: +91 98765 43210 | Email: info@caservices.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessRegistration