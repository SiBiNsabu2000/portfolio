import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Star, Clock } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const completedProjects = [
    {
      title: "TIC-TAC-TOE",
      description: "Tic-tac-toe may also derive from tick-tack, the name of an old version of backgammon first described in 1558. The US renaming of noughts and crosses to tic-tac-toe occurred in the 20th century.",
      image: "https://play-lh.googleusercontent.com/zPxLgj5nvl20ahJV7aFC6S5mD8kii5CEEDj25j1P9CYAfXL9sdDuO-8eES0r4DhJHrU",
      link: "https://sibinsabu2000.github.io/tic-tac-toe/"
    }
  ];

  const upcomingProjects = [
    {
      title: "Football Tournament Organizer",
      description: "A football tournament organizer is responsible for planning, executing, and managing all aspects of a football tournament, from defining goals and setting a budget to securing venues, managing teams, and ensuring a smooth and successful event. ",
      status: "In Development",
      completion: "70%"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation Bar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="text-2xl font-bold text-white">
              SIBIN<span className="text-purple-400">.</span>
            </a>
            <div className="hidden md:flex space-x-8">
              <a href="#projects" className="text-gray-300 hover:text-purple-400 transition-colors">Projects</a>
              <a href="#upcoming" className="text-gray-300 hover:text-purple-400 transition-colors">Upcoming</a>
              <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors">About</a>
              <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</a>
            </div>
            <div className="md:hidden">
              {/* Mobile menu button - simplified for this example */}
              <button className="text-gray-300 hover:text-purple-400">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-purple-900/50 to-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Hi, I'm <span className="text-purple-400">Sibin Sabu George</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Bachelor of Computer Application Student at St Joseph's University
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/SiBiNsabu2000" className="text-gray-300 hover:text-purple-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/sibin-sabu-george-a6b0b2256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-300 hover:text-purple-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:sibinsabu2000@gmai.com" className="text-gray-300 hover:text-purple-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-gray-400" />
        </div>
      </section>

      {/* Completed Projects Section */}
      <section className="py-20 bg-slate-900/50 backdrop-blur-sm" id="projects">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 justify-center mb-16">
            <Star className="text-purple-400" size={24} />
            <h2 className="text-3xl font-bold text-center text-white">Completed Projects</h2>
          </div>
          <div className="flex justify-center">
            <div className="grid  max-w-6xl mx-auto">
              {completedProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-purple-500/20"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-64 h-64 object-cover mx-auto"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2 flex-wrap">
                      </div>
                      <a href={project.link} className="text-purple-400 hover:text-purple-300">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Upcoming Projects Section */}
      <section className="py-20 bg-purple-900/30 backdrop-blur-sm" id="upcoming">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 justify-center mb-16">
            <Clock className="text-purple-400" size={24} />
            <h2 className="text-3xl font-bold text-center text-white">Upcoming Projects</h2>
          </div>
          <div className="grid w-96 mx-auto">
            {upcomingProjects.map((project, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-purple-400">{project.status}</span>
                    <span className="text-gray-300">{project.completion}</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: project.completion }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-slate-900/50 backdrop-blur-sm" id="about">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">About Me</h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-gray-300 mb-6">
              Hi, I'm Sibin Sabu George, a Bachelor of Computer Applications (BCA) student at St. Joseph's University. Passionate about technology and software development, I am constantly exploring new concepts in programming, web development, and problem-solving.
               I strive to build innovative and efficient solutions while continuously enhancing my skills in the ever-evolving tech landscape.
              </p>
              <p className="text-gray-300 mb-6">
                
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-purple-900/30 backdrop-blur-sm" id="contact">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Get In Touch</h2>
          <div className="max-w-lg mx-auto">
            <p className="text-center text-gray-300 mb-8">
              I'm currently open to new opportunities. Whether you have a question
              or just want to say hi, feel free to reach out!
            </p>
            <div className="flex justify-center">
              <a
                href="mailto:sibinsabu2000.com"
                className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Say Hello
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Sibin Sabu. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;