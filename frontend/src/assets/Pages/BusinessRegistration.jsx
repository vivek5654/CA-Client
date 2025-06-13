import React, { useState, useEffect } from 'react'
import { 
  FileText, 
  CheckCircle, 
  ArrowRight, 
  Shield, 
  Clock, 
  Users, 
  Building, 
  Award,
  Phone,
  Mail,
  Star,
  Quote
} from 'lucide-react'

const BusinessRegistration = () => {
  const [activeTab, setActiveTab] = useState('process')
  const [visibleElements, setVisibleElements] = useState([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = entry.target.getAttribute('data-element-id')
            setVisibleElements(prev => [...new Set([...prev, elementId])])
          }
        })
      },
      { threshold: 0.2 }
    )

    const elements = document.querySelectorAll('[data-element-id]')
    elements.forEach(element => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  const registrationTypes = [
    {
      id: 1,
      title: "Private Limited Company",
      description: "Most popular choice for startups and growing businesses",
      features: ["Limited Liability", "Separate Legal Entity", "Easy Fund Raising", "Tax Benefits"],
      timeline: "7-10 Days",
      cost: "Starting from ₹8,999"
    },
    {
      id: 2,
      title: "Public Limited Company",
      description: "Ideal for large-scale businesses and IPO aspirants",
      features: ["Public Investment", "Transferable Shares", "Perpetual Succession", "Brand Recognition"],
      timeline: "15-20 Days",
      cost: "Starting from ₹25,999"
    },
    {
      id: 3,
      title: "One Person Company",
      description: "Perfect for solo entrepreneurs and individual business owners",
      features: ["Single Member", "Limited Liability", "Corporate Benefits", "Easy Compliance"],
      timeline: "7-10 Days",
      cost: "Starting from ₹6,999"
    },
    {
      id: 4,
      title: "LLP Registration",
      description: "Best for professional services and partnership businesses",
      features: ["Flexible Structure", "Limited Liability", "Tax Efficiency", "Minimal Compliance"],
      timeline: "10-15 Days",
      cost: "Starting from ₹7,999"
    }
  ]

  const processSteps = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Free consultation to understand your business needs and recommend the best structure",
      icon: Users
    },
    {
      step: 2,
      title: "Document Preparation",
      description: "We prepare all necessary documents including MOA, AOA, and application forms",
      icon: FileText
    },
    {
      step: 3,
      title: "Name Approval",
      description: "Get your company name approved by the Ministry of Corporate Affairs",
      icon: Award
    },
    {
      step: 4,
      title: "Registration Filing",
      description: "Submit incorporation documents with ROC and track application status",
      icon: Building
    },
    {
      step: 5,
      title: "Certificate Delivery",
      description: "Receive your incorporation certificate and commence business operations",
      icon: CheckCircle
    }
  ]

  const testimonials = [
    {
      name: "Priya Sharma",
      company: "Tech Innovators Pvt Ltd",
      rating: 5,
      text: "Exceptional service! They made our company registration process seamless and completed everything within the promised timeline."
    },
    {
      name: "Rajesh Kumar",
      company: "Kumar & Associates LLP",
      rating: 5,
      text: "Professional team with deep expertise. They guided us through every step and ensured full compliance."
    },
    {
      name: "Anita Patel",
      company: "Green Solutions OPC",
      rating: 5,
      text: "Highly recommend their services. Cost-effective, transparent, and delivered exactly what they promised."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      
      {/* Hero Section */}
      <div className="relative py-20 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div 
            className="inline-flex items-center px-6 py-3 bg-purple-100 rounded-full mb-6"
            data-element-id="hero-badge"
          >
            <FileText className="w-5 h-5 text-purple-600 mr-2" />
            <span className="text-purple-700 text-lg font-semibold">Business Registration</span>
          </div>
          
          <h1 
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            data-element-id="hero-title"
          >
            Start Your Business{' '}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Journey Today
            </span>
          </h1>
          
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            data-element-id="hero-description"
          >
            Complete business setup and registration services with expert guidance, 
            ensuring legal compliance and smooth business operations from day one.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 
              text-white font-bold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              Start Registration
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-purple-600 text-purple-600 
              font-bold rounded-lg hover:bg-purple-50 transition-all duration-300">
              <Phone className="mr-2 w-5 h-5" />
              Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Registration Types Section */}
      <div className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Business Structure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the perfect business structure that aligns with your goals and requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {registrationTypes.map((type, index) => (
              <div
                key={type.id}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-2 border-purple-100 
                  transform hover:-translate-y-2 transition-all duration-500 group
                  ${visibleElements.includes(`type-${type.id}`) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
                data-element-id={`type-${type.id}`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{type.title}</h3>
                    <p className="text-gray-600">{type.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-600">{type.cost}</div>
                    <div className="text-sm text-gray-500">{type.timeline}</div>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {type.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white 
                  font-semibold py-3 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 
                  transition-all duration-300 group-hover:scale-105">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 px-6 lg:px-12 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Registration Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined 5-step process to get your business registered quickly and efficiently
            </p>
          </div>
          
          <div className="relative">
            {/* Process Timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-600 to-indigo-600 rounded-full"></div>
            
            <div className="space-y-12">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon
                const isLeft = index % 2 === 0
                
                return (
                  <div 
                    key={step.step}
                    className={`flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
                    data-element-id={`step-${step.step}`}
                  >
                    <div className={`w-1/2 ${isLeft ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className={`bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-100 
                        transform transition-all duration-500 hover:shadow-xl
                        ${visibleElements.includes(`step-${step.step}`) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                        style={{ transitionDelay: `${index * 200}ms` }}
                      >
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                    
                    <div className="relative z-10 flex items-center justify-center w-16 h-16 
                      bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-lg">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="w-1/2"></div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by hundreds of businesses across India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-100 
                  transform transition-all duration-500 hover:shadow-xl
                  ${visibleElements.includes(`testimonial-${index}`) ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
                data-element-id={`testimonial-${index}`}
              >
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-purple-600 mr-3" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16  lg:px-12 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Register Your Business?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Join thousands of successful businesses. Get started with expert guidance today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-white text-purple-600 
              font-bold rounded-lg hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-300">
              <FileText className="mr-2 w-5 h-5" />
              Start Registration Now
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white 
              font-bold rounded-lg hover:bg-white/10 transition-all duration-300">
              <Mail className="mr-2 w-5 h-5" />
              Get Free Quote
            </button>
          </div>
          
          <div className="mt-8 text-purple-200">
            <p>Call us: +91 98765 43210 | Email: info@caservices.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessRegistration