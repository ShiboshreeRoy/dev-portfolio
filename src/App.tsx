import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase, User, FileCode, ChevronRight, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';


// Project data
const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, product filtering, cart management, and payment processing.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    link: "https://github.com/shiboshreeRoy/ecommerce-platform",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Task Management System",
    description: "A Kanban-style task management application with drag-and-drop functionality, team collaboration features, and real-time updates using WebSockets.",
    tags: ["TypeScript", "React", "Socket.io", "PostgreSQL", "Redux"],
    link: "https://github.com/shiboshreeRoy/task-management",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "AI Content Generator",
    description: "An application that leverages OpenAI's GPT models to generate various types of content including blog posts, product descriptions, and social media captions.",
    tags: ["Python", "Flask", "OpenAI API", "React", "Docker"],
    link: "https://github.com/shiboshreeRoy/ai-content-generator",
    image: "https://images.unsplash.com/photo-1677442135136-760c813028c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Real-time Analytics Dashboard",
    description: "A comprehensive analytics dashboard that visualizes data from multiple sources in real-time using charts, graphs, and interactive elements.",
    tags: ["D3.js", "React", "Node.js", "WebSockets", "AWS"],
    link: "https://github.com/shiboshreeRoy/analytics-dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

// Skills data
const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "HTML/CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "Python", "Django", "Java", "Spring Boot"] },
  { category: "Database", items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"] },
  { category: "DevOps", items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Git", "GitHub Actions"] },
  { category: "Tools", items: ["VS Code", "Postman", "Figma", "Jira", "Slack", "npm/yarn"] }
];

// Experience data
const experiences = [
  {
    company: "Tech Innovations Inc.",
    position: "Senior Software Engineer",
    period: "2021 - Present",
    description: "Lead developer for the company's flagship product, managing a team of 5 engineers. Implemented microservices architecture that improved system reliability by 40%.",
    technologies: ["React", "Node.js", "AWS", "Kubernetes"]
  },
  {
    company: "DataSphere Solutions",
    position: "Full Stack Developer",
    period: "2018 - 2021",
    description: "Developed and maintained multiple web applications for enterprise clients. Reduced page load time by 60% through code optimization and implementing lazy loading.",
    technologies: ["Angular", "Express", "MongoDB", "Docker"]
  },
  {
    company: "CodeCraft Studios",
    position: "Frontend Developer",
    period: "2016 - 2018",
    description: "Created responsive user interfaces for various client projects. Collaborated with designers to implement pixel-perfect designs and animations.",
    technologies: ["React", "Redux", "SASS", "Webpack"]
  }
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Header */}
      <header className="fixed w-full bg-white dark:bg-gray-800 shadow-sm z-50 transition-colors duration-300">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Code className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            <span className="text-xl font-bold">DevPortfolio</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize ${
                  activeSection === item 
                    ? 'text-indigo-600 dark:text-indigo-400 font-medium' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                } transition-colors duration-300`}
              >
                {item}
              </button>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600" />
              )}
            </button>
            
            <a 
              href="https://github.com/shiboshreeRoy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="GitHub profile"
            >
              <Github className="h-5 w-5" />
            </a>
            
            <a 
              href="https://linkedin.com/in/shiboshreeRoy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  <span className="text-indigo-600 dark:text-indigo-400">Hello, I'm</span><br />
                  Shiboshree Roy
                </h1>
                <h2 className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-6">
                  Full Stack Developer
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
                  I build exceptional digital experiences with clean code and cutting-edge technologies. Passionate about creating efficient, scalable, and user-friendly applications.
                </p>
                <div className="flex space-x-4">
                  <button 
                    onClick={() => scrollToSection('projects')}
                    className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-300 flex items-center"
                  >
                    View Projects <ChevronRight className="ml-1 h-4 w-4" />
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="px-6 py-3 border border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300"
                  >
                    Contact Me
                  </button>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-600 dark:border-indigo-400">
                  <img 
                    src="https://scontent.fdac175-1.fna.fbcdn.net/v/t39.30808-6/473389496_625017280003023_1890521047385525190_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHNk05r5Gfe7dKoP2YGlDbzfMEyCIPpr7p8wTIIg-mvulegI2M6uKUZhFTJSZvG7zvWQpOyMG0YzUGeKCnfdgFV&_nc_ohc=zNluQIs9bpwQ7kNvgEI63E_&_nc_oc=Adirv7NI7LceMFQd5cS5ibq1mmIU9qCXKd-R18WyJHdz-eHbGg7FCwnQNwJqr1ILXcQ&_nc_zt=23&_nc_ht=scontent.fdac175-1.fna&_nc_gid=AXADpfjmH0aKmiqVxEqpY5S&oh=00_AYAQ5GWxRoLSZy1CvluPzFdhZcWaql-IjYOinRhZiFJplQ&oe=67C7C923"
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
              <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 rounded"></div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Working on code" 
                  className="rounded-lg shadow-lg w-full max-w-md mx-auto"
                />
              </div>
              
              <div className="md:w-1/2 md:pl-12">
                <div className="flex items-center mb-4">
                  <User className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-2" />
                  <h3 className="text-xl font-semibold">Who I Am</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  I'm a passionate Full Stack Developer with over 6 years of experience building web applications. I specialize in JavaScript technologies across the whole stack (React, Node.js, Express) and have a strong foundation in software architecture and design patterns.
                </p>
                
                <div className="flex items-center mb-4">
                  <Briefcase className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-2" />
                  <h3 className="text-xl font-semibold">What I Do</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  I create responsive, performant web applications with clean, maintainable code. My approach combines technical excellence with a keen eye for user experience. I'm experienced in leading development teams and mentoring junior developers.
                </p>
                
                <div className="flex items-center mb-4">
                  <FileCode className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-2" />
                  <h3 className="text-xl font-semibold">My Approach</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  I believe in writing clean, well-tested code that solves real problems. I'm passionate about continuous learning and staying up-to-date with the latest technologies and best practices in the ever-evolving world of web development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
              <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 rounded"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skillGroup, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform duration-300 hover:transform hover:scale-105"
                >
                  <h3 className="text-xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
              <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 rounded"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:transform hover:scale-105"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:transform hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
                    >
                      View Project <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <a 
                href="https://github.com/shiboshreeRoy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-300"
              >
                View All Projects on GitHub <Github className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
              <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 rounded"></div>
            </div>
            
            <div className="max-w-3xl mx-auto">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className={`relative pl-8 pb-12 ${
                    index !== experiences.length - 1 ? 'border-l-2 border-indigo-200 dark:border-indigo-800' : ''
                  }`}
                >
                  <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                      <h3 className="text-xl font-semibold">{exp.position}</h3>
                      <span className="text-indigo-600 dark:text-indigo-400 font-medium">{exp.period}</span>
                    </div>
                    <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-4">{exp.company}</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
              <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 rounded"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-3" />
                      <a href="mailto:shiboshreeroy169@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                        shiboshreeroy169@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Github className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-3" />
                      <a 
                        href="https://github.com/shiboshreeRoy" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                      >
                        github.com/shiboshreeRoy
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Linkedin className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-3" />
                      <a 
                        href="https://linkedin.com/in/shiboshreeRoy" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                      >
                        linkedin.com/in/shiboshreeRoy
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2">
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Name
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="Your email"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Message
                      </label>
                      <textarea 
                        id="message" 
                        rows={4} 
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-300"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-950 text-white py-8 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Code className="h-6 w-6 text-indigo-400" />
              <span className="text-xl font-bold">DevPortfolio</span>
            </div>
            
            <div className="flex space-x-6">
              <a 
                href="https://github.com/shiboshreeRoy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors duration-300"
                aria-label="GitHub profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/shiboshreeRoy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors duration-300"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:shiboshreeroy169@gmail.com"
                className="hover:text-indigo-400 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="mt-8 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Shiboshree Roy. All rights reserved.</p>
            <p className="mt-2">Built with React and Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;