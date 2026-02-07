import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ChevronDown, Code, Database, Zap, Globe } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const skills = [
    { name: 'PHP & Laravel', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'JavaScript/TypeScript', level: 80 },
    { name: 'React & Vue.js', level: 75 },
    { name: 'Node.js', level: 70 },
    { name: 'WordPress', level: 75 },
    { name: 'API Integration', level: 85 },
    { name: 'Automation Testing', level: 80 }
  ];

  const projects = [
    {
      title: 'Health Insurance Rate File Processor',
      category: 'Python Automation',
      description: 'Automated rate file processing system with dynamic configuration for multiple health funds (HCF, NIB, AHM, BUPA). Features Google Drive integration and fund-specific transformations.',
      tech: ['Python', 'Google Drive API', 'Data Processing'],
      icon: <Database className="w-8 h-8" />,
      fullDescription: 'A comprehensive automation system that processes health insurance rate files for multiple Australian health funds. The system evolved from basic hardcoded solutions to sophisticated configuration-driven architecture with fund-specific transformations and UI management.',
      features: [
        'Dynamic configuration system for multiple health funds',
        'Google Drive API integration for automated file handling',
        'Fund-specific data transformations and validations',
        'UI management interface for non-technical users',
        'Error handling and logging system',
        'Scheduled automated processing'
      ],
      screenshots: [
        'https://via.placeholder.com/800x500/1e293b/64748b?text=Rate+File+Dashboard',
        'https://via.placeholder.com/800x500/1e293b/64748b?text=Fund+Configuration',
        'https://via.placeholder.com/800x500/1e293b/64748b?text=Processing+Logs'
      ]
    },
    {
      title: 'Datadog Synthetic Test Automation',
      category: 'Testing Framework',
      description: 'Comprehensive JavaScript automation for health insurance application forms. Handles complex interactions with Ant Design components, React validation, and Google Places API.',
      tech: ['JavaScript', 'Datadog', 'Test Automation'],
      icon: <Zap className="w-8 h-8" />,
      fullDescription: 'Advanced end-to-end testing framework for health insurance forms with complex conditional logic. Automates multi-step form workflows including address validation, dynamic field interactions, and button state management.',
      features: [
        'Custom assertions for Ant Design components',
        'Dynamic form interaction handling',
        'Google Places API integration testing',
        'Multi-step workflow validation',
        'Conditional logic testing for insurance forms',
        'Screenshot capture on failures'
      ],
      screenshots: [
        'https://via.placeholder.com/800x500/1e293b/64748b?text=Test+Dashboard',
        'https://via.placeholder.com/800x500/1e293b/64748b?text=Form+Automation',
        'https://via.placeholder.com/800x500/1e293b/64748b?text=Test+Results'
      ]
    },
    {
      title: 'Zoho Platform Integration Suite',
      category: 'Business Automation',
      description: 'Built Deluge scripts for CRM automation, WorkDrive folder management, and Analytics reporting. Resolved OAuth scope issues and implemented rate limiting strategies.',
      tech: ['Zoho Deluge', 'API Integration', 'CRM'],
      icon: <Globe className="w-8 h-8" />,
      fullDescription: 'Complete business automation suite leveraging Zoho ecosystem. Includes CRM workflow automation, document management, lead conversion processes, and custom analytics reporting.',
      features: [
        'CRM API optimization and rate limit management',
        'Deluge scripting for lead conversion automation',
        'WorkDrive folder structure management',
        'DNS configuration for email services',
        'OAuth scope resolution',
        'Multi-line field handling in Analytics'
      ],
      screenshots: [
        'https://via.placeholder.com/800x500/1e293b/64748b?text=CRM+Dashboard',
        'https://via.placeholder.com/800x500/1e293b/64748b?text=Workflow+Automation',
        'https://via.placeholder.com/800x500/1e293b/64748b?text=Analytics+Reports'
      ]
    },
    {
      title: 'GoogleSheet to CRM Lead Sync',
      category: 'PHP Laravel',
      description: 'Real-time synchronization system between Google Sheets and CRM for automated lead management and data consistency.',
      tech: ['Laravel', 'Google Sheets API', 'CRM Integration'],
      icon: <Code className="w-8 h-8" />,
      fullDescription: 'Bidirectional synchronization system that ensures data consistency between Google Sheets and CRM platforms. Features real-time updates, conflict resolution, and comprehensive error handling.',
      features: [
        'Real-time bidirectional sync',
        'Conflict resolution mechanism',
        'Custom field mapping',
        'Automated lead creation and updates',
        'Webhook integration',
        'Comprehensive logging and monitoring'
      ],
      screenshots: [
        'https://via.placeholder.com/800x500/1e293b/64748b?text=Sync+Dashboard',
        'https://via.placeholder.com/800x500/1e293b/64748b?text=Field+Mapping',
        'https://via.placeholder.com/800x500/1e293b/64748b?text=Sync+History'
      ]
    },
    {
      title: 'Multi Vendor SMS Gateway',
      category: 'Salesforce',
      description: 'Flexible SMS gateway integration supporting multiple vendors with failover capabilities and delivery tracking.',
      tech: ['Salesforce', 'Apex', 'API Integration'],
      icon: <Globe className="w-8 h-8" />,
      fullDescription: 'Enterprise-grade SMS gateway solution with multi-vendor support. Implements intelligent failover, delivery tracking, and comprehensive reporting capabilities.',
      features: [
        'Multiple SMS vendor support',
        'Automatic failover mechanism',
        'Delivery status tracking',
        'Template management system',
        'Bulk SMS capabilities',
        'Cost tracking and reporting'
      ],
      screenshots: [
        'https://via.placeholder.com/800x500/1e293b/64748b?text=SMS+Dashboard',
        'https://via.placeholder.com/800x500/1e293b/64748b?text=Vendor+Management',
        'https://via.placeholder.com/800x500/1e293b/64748b?text=Delivery+Reports'
      ]
    },
    {
      title: 'Clicksend SMS Extension',
      category: 'PHP Laravel',
      description: 'Custom SMS notification system with template management and scheduling capabilities.',
      tech: ['Laravel', 'Clicksend API', 'JavaScript'],
      icon: <Code className="w-8 h-8" />,
      fullDescription: 'Comprehensive SMS notification platform with advanced template management, scheduled messaging, and analytics. Integrates seamlessly with existing Laravel applications.',
      features: [
        'Dynamic template system',
        'Scheduled SMS delivery',
        'Personalization variables',
        'Campaign management',
        'Analytics and reporting',
        'API rate limiting'
      ],
      screenshots: [
        'https://via.placeholder.com/800x500/1e293b/64748b?text=Campaign+Manager',
        'https://via.placeholder.com/800x500/1e293b/64748b?text=Template+Editor',
        'https://via.placeholder.com/800x500/1e293b/64748b?text=Analytics+Dashboard'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
          <div className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="sticky top-0 bg-slate-800 border-b border-slate-700 p-6 flex justify-between items-start z-10">
              <div>
                <div className="text-cyan-400 text-sm font-semibold mb-2">{projects[selectedProject].category}</div>
                <h3 className="text-2xl font-bold">{projects[selectedProject].title}</h3>
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Screenshot Carousel */}
              <div className="mb-6">
                <div className="relative bg-slate-900 rounded-lg overflow-hidden">
                  <img 
                    src={projects[selectedProject].screenshots[currentImageIndex]} 
                    alt={`Screenshot ${currentImageIndex + 1}`}
                    className="w-full h-96 object-cover"
                  />
                  
                  {/* Carousel Navigation */}
                  {projects[selectedProject].screenshots.length > 1 && (
                    <>
                      <button
                        onClick={() => setCurrentImageIndex((prev) => 
                          prev === 0 ? projects[selectedProject].screenshots.length - 1 : prev - 1
                        )}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700 p-2 rounded-full transition-colors"
                      >
                        <ChevronDown className="rotate-90" size={20} />
                      </button>
                      <button
                        onClick={() => setCurrentImageIndex((prev) => 
                          prev === projects[selectedProject].screenshots.length - 1 ? 0 : prev + 1
                        )}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700 p-2 rounded-full transition-colors"
                      >
                        <ChevronDown className="-rotate-90" size={20} />
                      </button>
                      
                      {/* Dots Indicator */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {projects[selectedProject].screenshots.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              idx === currentImageIndex ? 'bg-cyan-400 w-8' : 'bg-slate-600'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h4 className="text-xl font-bold mb-3">About This Project</h4>
                <p className="text-gray-300 leading-relaxed">{projects[selectedProject].fullDescription}</p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-xl font-bold mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {projects[selectedProject].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <span className="text-cyan-400 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xl font-bold mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[selectedProject].tech.map((tech, idx) => (
                    <span key={idx} className="bg-slate-700 px-4 py-2 rounded-lg text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent cursor-pointer"
                 onClick={() => scrollToSection('home')}>
              SK
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors ${activeSection === item ? 'text-cyan-400' : 'text-gray-300 hover:text-white'}`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800">
            {['home', 'about', 'skills', 'projects', 'contact'].map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-4 py-3 capitalize hover:bg-slate-800 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="text-center z-10 animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Saadman Khondaker</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full-Stack Developer & Automation Specialist
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            Building intelligent automation solutions and robust web applications for health insurance systems and business process optimization
          </p>
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </button>
          
          <div className="mt-16 animate-bounce">
            <ChevronDown className="mx-auto text-gray-400" size={32} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            About <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a Software Engineer specializing in health insurance systems, web automation, and business process optimization. Currently working with cutting-edge technologies to build robust automation solutions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With expertise in Python, PHP Laravel, and JavaScript frameworks, I create scalable applications that streamline complex workflows. My recent work includes comprehensive Datadog Synthetic test automation and health insurance rate file processing systems.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Based in Australia, I bring 5+ years of software engineering experience and hold a Master's degree from an Australian university.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: '🚀', title: 'Fast', desc: 'Optimized performance' },
                { icon: '📱', title: 'Responsive', desc: 'Works on any device' },
                { icon: '🎯', title: 'Efficient', desc: 'Clean, DRY code' },
                { icon: '⚡', title: 'Dynamic', desc: 'Interactive experiences' }
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-slate-800 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Technical <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div 
                key={idx} 
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group cursor-pointer"
                onClick={() => {
                  setSelectedProject(idx);
                  setCurrentImageIndex(0);
                }}
              >
                <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all">
                  <div className="text-cyan-400">{project.icon}</div>
                </div>
                <div className="p-6">
                  <div className="text-cyan-400 text-sm font-semibold mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs bg-slate-700 px-3 py-1 rounded-full">{tech}</span>
                    ))}
                  </div>
                  <button className="text-cyan-400 text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                    View Details 
                    <ChevronDown className="-rotate-90" size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Have a question or want to work together?
          </p>
          
          <div className="flex justify-center gap-6 mb-12">
            <a href="https://github.com/saadman061" target="_blank" rel="noopener noreferrer" 
               className="p-4 bg-slate-800 rounded-full hover:bg-slate-700 transition-all hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/saadman-khondaker" target="_blank" rel="noopener noreferrer"
               className="p-4 bg-slate-800 rounded-full hover:bg-slate-700 transition-all hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:saadmankr@gmail.com"
               className="p-4 bg-slate-800 rounded-full hover:bg-slate-700 transition-all hover:scale-110">
              <Mail size={24} />
            </a>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl max-w-2xl mx-auto">
            <div className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={5}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors resize-none"
              ></textarea>
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>Saadman Khondaker © {new Date().getFullYear()} - Built with React & TypeScript</p>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;