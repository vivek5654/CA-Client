import React, { useState, useEffect } from 'react'
import { 
  Users, 
  Award, 
  Target, 
  Eye, 
  Heart, 
  Sparkles, 
  ArrowRight, 
  CheckCircle,
  Star,
  Calendar,
  TrendingUp,
  Globe
} from 'lucide-react'

const Aboutus = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState(0)
  const [hoveredMember, setHoveredMember] = useState(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "We pour our heart into every project, driven by genuine enthusiasm for creating exceptional experiences."
    },
    {
      icon: Target,
      title: "Precision",
      description: "Every detail matters. We deliver solutions with meticulous attention to quality and accuracy."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Great things happen when brilliant minds work together. We value partnership and teamwork."
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "We believe in continuous learning and evolution, constantly pushing boundaries and improving."
    }
  ]

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Visionary leader with 15+ years of industry experience"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "Tech innovator passionate about cutting-edge solutions"
    },
    {
      name: "Emily Rodriguez",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Award-winning designer with an eye for perfection"
    },
    {
      name: "David Park",
      role: "Operations Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Strategic thinker ensuring seamless project delivery"
    }
  ]

  const milestones = [
    { year: "2018", title: "Company Founded", description: "Started with a vision to transform digital experiences" },
    { year: "2019", title: "First Major Client", description: "Secured partnership with Fortune 500 company" },
    { year: "2021", title: "Team Expansion", description: "Grew to 50+ talented professionals" },
    { year: "2023", title: "Global Reach", description: "Expanded operations to 3 continents" },
    { year: "2024", title: "Innovation Award", description: "Recognized for breakthrough technology solutions" }
  ]

  const stats = [
    { number: "500+", label: "Projects Completed", icon: CheckCircle },
    { number: "50+", label: "Team Members", icon: Users },
    { number: "15+", label: "Countries Served", icon: Globe },
    { number: "99%", label: "Client Satisfaction", icon: Star }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full mb-8 shadow-lg">
              <Sparkles className="w-5 h-5 text-purple-600 mr-2" />
              <span className="text-purple-800 font-semibold">About Our Company</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-8">
              We Create The Future
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Transforming ideas into extraordinary digital experiences through innovation, creativity, and unwavering commitment to excellence.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div 
                    key={index}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500"
                    style={{animationDelay: `${index * 100}ms`}}
                  >
                    <div className="flex items-center justify-center mb-2">
                      <Icon className="w-6 h-6 text-purple-600 mr-2" />
                      <span className="text-3xl font-bold text-gray-800">{stat.number}</span>
                    </div>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Mission */}
            <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To empower businesses and individuals by creating innovative digital solutions that drive growth, enhance user experiences, and make technology accessible to everyone. We believe in the power of thoughtful design and robust technology to solve real-world problems.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="bg-gradient-to-br from-cyan-50 to-green-50 rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-600 to-green-600 rounded-xl flex items-center justify-center mr-4">
                    <Eye className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To be the global leader in digital innovation, setting new standards for creativity, quality, and client satisfaction. We envision a future where technology seamlessly integrates with human needs, creating experiences that inspire, engage, and transform lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and shape the way we work with our clients and each other.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div 
                  key={index}
                  className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 cursor-pointer ${activeSection === index ? 'ring-2 ring-purple-500' : ''}`}
                  onMouseEnter={() => setActiveSection(index)}
                  style={{animationDelay: `${index * 150}ms`}}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Behind every great project is an even greater team. Meet the passionate individuals who make the magic happen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 cursor-pointer"
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-purple-600/80 to-transparent transition-opacity duration-300 ${hoveredMember === index ? 'opacity-100' : 'opacity-0'}`}></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-purple-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600">
              From humble beginnings to industry leaders - here's how we've grown over the years.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-cyan-600 rounded-full"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-500">
                    <div className="flex items-center mb-3">
                      <Calendar className="w-5 h-5 text-purple-600 mr-2" />
                      <span className="text-2xl font-bold text-purple-600">{milestone.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-full border-4 border-white shadow-lg"></div>
                
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 rounded-3xl p-12 md:p-16 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Let's turn your vision into reality. We're here to help you create something extraordinary.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-white text-purple-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Users className="w-5 h-5 mr-2" />
                Meet Our Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Elements */}
      <div className="fixed top-20 left-10 w-4 h-4 bg-purple-400 rounded-full opacity-20 animate-ping" style={{animationDelay: '0s'}}></div>
      <div className="fixed top-1/3 right-20 w-3 h-3 bg-cyan-400 rounded-full opacity-30 animate-ping" style={{animationDelay: '1s'}}></div>
      <div className="fixed bottom-20 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-40 animate-ping" style={{animationDelay: '2s'}}></div>
    </div>
  )
}

export default Aboutus