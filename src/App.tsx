import { useEffect, useRef, useState } from 'react'
import {
  ArrowLeft,
  ArrowDown,
  ArrowRight,
  Database,
  Download,
  Figma,
  Gamepad2,
  Github,
  Image,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  Palette,
  Send,
  Video,
  Users,
  X,
} from 'lucide-react'
import './App.css'

const sections = ['Home', 'About', 'Projects', 'Contact']

const images = {
  profile: '/assets/Thomas Dani Artha.jpg',
  about: '/assets/AboutMe.png',
  projects: '/assets/MyProject.png',
  contact: '/assets/contact-CU_e9hW7.jpg',
}

const skills = [
  'C#',
  'Python',
  'Visual Studio Code',
  'GitHub',
  'Unity',
  'MySQL',
  'Figma',
  'Framer',
  'Adobe Photoshop',
  'CorelDraw',
  'Adobe Illustrator',
  'Adobe Premiere Pro',
]

const skillFocus = [
  { icon: Gamepad2, title: 'Game Development' },
  { icon: Palette, title: 'UI/UX' },
  { icon: Database, title: 'Database Management' },
  { icon: Image, title: 'Graphic Designer' },
  { icon: Video, title: 'Video Editor' },
]

const professionalExperience = [
  {
    period: 'Sept 2021 - Oct 2022',
    place: 'Universitas Amikom Yogyakarta',
    role: 'Desktop Apps Developer | Project (Contested)',
    description: 'Responsible for developing desktop applications using the Python language. Collaborated with a team to create innovative solutions, like a Google Voice Assistant, and achieved 1st place in a competition.',
    tools: ['Python', 'UI/UX', 'Visual Studio Code'],
  },
  {
    period: 'Mar 2024 - Jun 2024',
    place: 'Universitas Amikom Yogyakarta',
    role: 'Game Development | Project (Exhibition)',
    description: 'Served as a game programmer for the development of the game "Doomsday." Fully responsible for gameplay development, ensuring a smooth and engaging user experience.',
    tools: ['C#', 'Unity', 'Visual Studio Code', 'UI/UX'],
  },
  {
    period: 'Apr 2024 - Jun 2024',
    place: 'Infinite Learning Batam',
    role: 'Game Development | Internship',
    description: 'Joined a small group from various campuses as a game programmer. Fully responsible for gameplay and UI development, ensuring seamless integration and an engaging user experience.',
    tools: ['C#', 'Unity', 'Visual Studio Code', 'UI/UX', 'Figma'],
  },
  {
    period: 'Oct 2024 - Jan 2025',
    place: 'MSV Studio',
    role: 'Game Designer | Internship',
    description: 'Served as a game designer, responsible for creating the game concept and designing the UI/UX. Implemented the UI/UX into the game and synchronized it with the game state. This project was used for making a thesis.',
    tools: ['C#', 'Unity', 'Visual Studio Code', 'UI/UX', 'Figma'],
  },
  {
    period: 'May 2025 - Present',
    place: 'Codingo Assignments Pte. Ltd.',
    role: 'UI/UX Designer | Freelance',
    description: 'Created intuitive and visually engaging user interfaces for web and mobile applications using Figma. Designed wireframes, prototypes, and interactive mockups to communicate UX flows and UI concepts clearly to stakeholders and developers.',
    tools: ['UI/UX', 'Wireframing', 'Prototyping', 'Figma'],
  },
]

const achievements = [
  {
    title: '1st Place | Awarding Member AMCC',
    detail: 'Desktop Progamming Division | July 2022',
  },
  {
    title: 'Nominator Best Gameplay (Beach Shooter)',
    detail: 'Battle Of Indie Multimedia Game Category | 2024',
  },
]

const motivation = 'Your potential is only confined by the boundaries you set in your mind. Break free, and the possibilities are endless.'

const projects = [
  { image: '/assets/Porto 12.png', category: 'UI/UX', filter: 'ui-ux', title: 'Eurolux Australia Responsive Design', text: 'My first freelance project was redesigning a client’s website to make it more intuitive and user-friendly, using Figma as the design software.' },
  { image: '/assets/Porto 11.png', category: 'UI/UX', filter: 'ui-ux', title: 'Palm Bespoke Golf Mobile App Design', text: 'This is one of my freelance projects a mobile app design for golf enthusiasts that allows users to book tee times and make payments using NFTs, created with Figma as the design software.' },
  { image: '/assets/Porto 10.png', category: 'UI/UX', filter: 'ui-ux', title: 'Cinema Booking Ticket Mobile App Design', text: 'Cinema Booking Ticket is a mobile app design I redesigned from TIX ID to make it more intuitive and easier to use.' },
  { image: '/assets/Porto 2.png', category: 'Game Development', filter: 'game', title: '2D Platformer Game "Beyond The Time"', text: 'As a game programmer, I helped develop Beyond The Time with my friends in the MBKM program, implementing the game in Unity while the UI/UX was designed in Figma.' },
  { image: '/assets/porto desktop.png', category: 'UI/UX', filter: 'ui-ux', title: 'Portfolio Website', text: 'A personal portfolio website built with Framer, featuring a clean layout, smooth scroll interactions, and a fully responsive design.' },
  { image: '/assets/Porto 20.png', category: 'UI/UX', filter: 'ui-ux', title: 'Movie Streaming Desktop Design', text: 'This project is a movie streaming desktop design that I created to be more intuitive, user-friendly, and easy to use, using Figma as the design software.' },
  { image: '/assets/Porto 9.png', category: 'UI/UX', filter: 'ui-ux', title: 'Game Streaming Mobile App Design', text: 'I designed a game streaming app inspired by Twitch, focusing on an intuitive and user-friendly interface, created with Figma.' },
  { image: '/assets/Porto 6.png', category: 'UI/UX', filter: 'ui-ux', title: 'Landing Page Clothing Design', text: 'The landing page clothing design is a fun project I created to learn how to add animations to landing pages using Figma.' },
  { image: '/assets/Porto 4.png', category: 'Game Development', filter: 'game', title: '3D RPG Game "Doomsday"', text: 'This project was for an exhibition, where I took full responsibility as the game programmer, handling gameplay development and implementing the UI/UX design.' },
  { image: '/assets/Porto 7.png', category: 'UI/UX', filter: 'ui-ux', title: 'Landing Page Dog Training Design', text: 'The landing page clothing design is a fun project I created to learn how to add animations to landing pages using Figma.' },
  { image: '/assets/Porto 13.png', category: 'UI/UX', filter: 'ui-ux', title: 'Tastlee Mobile App Design', text: 'This is one of my freelance projects a mobile app design for a food shop that sells near-expired food at lower prices, created using Figma as the design software.' },
  { image: '/assets/Porto 8.png', category: 'UI/UX', filter: 'ui-ux', title: 'Astronomy Website Design', text: 'The landing page Astronomy Website Design is a fun project I created to learn how to add animations to landing pages using Figma.' },
  { image: '/assets/Porto 1.png', category: 'UI/UX', filter: 'ui-ux', title: 'Course Class Mobile App Design', text: 'This is my first project learning UI/UX design, where I created a mobile app design using Figma as the design software.' },
  { image: '/assets/Porto 3.png', category: 'Game Development', filter: 'game', title: '3D Action Game "Angst Verloren"', text: 'Angst Verloren is a project I worked on with my friends for our thesis. I served as the game designer, responsible for creating the UI/UX design using Figma and implementing it in Unity.' },
  { image: '/assets/Porto 14.png', category: 'UI/UX', filter: 'ui-ux', title: 'Munch AR Mobile App Design', text: 'This project involves designing an AR application that can scan food items to display their ingredients and related information.' },
  { image: '/assets/Porto 15.png', category: 'UI/UX', filter: 'ui-ux', title: 'Music Streaming App Design', text: 'This is my project for designing a mobile MusicApp platform intended for development into a mobile application.' },
  { image: '/assets/Porto 21.png', category: 'UI/UX', filter: 'ui-ux', title: 'PGPI Golf Mobile App Design', text: 'This project involves designing a golf application that allows users to view the leaderboard and submit scores using AI-OCR technology.' },
  { image: '/assets/Porto 22.png', category: 'UI/UX', filter: 'ui-ux', title: 'LPV Flower Shop Website Design', text: 'This project focuses on UI/UX design, where I created a minimalist and intuitive website design for LPV Flower using Figma.' },
  { image: '/assets/Porto 23.png', category: 'UI/UX', filter: 'ui-ux', title: 'RamenGO Mobile App Design', text: 'This is a Ramen Go mobile app design I created while learning UI/UX design using Figma, focusing on intuitive usability.' },
  { image: '/assets/Porto 16.png', category: 'UI/UX', filter: 'ui-ux', title: 'MoonBank Mobile App Design', text: 'This project focuses on UI/UX design, where I created a minimalist and intuitive digital banking interface for MoonBank using Figma.' },
  { image: '/assets/Porto 17.png', category: 'UI/UX', filter: 'ui-ux', title: 'Nestoria Resorts Website Design', text: 'Designed a clean and intuitive resort booking platform for Nestoria Resorts, focusing on seamless user experience using Figma.' },
  { image: '/assets/Porto 18.png', category: 'UI/UX', filter: 'ui-ux', title: 'Corelytix Commerce Data Web Design', text: 'Built an intuitive commerce analytics dashboard for Corelytix, emphasizing clear insights and efficient navigation using Figma.' },
  { image: '/assets/Porto 19.png', category: 'UI/UX', filter: 'ui-ux', title: 'Futurix Bank Website Design', text: 'Developed a minimalist and responsive website design for Futurix Bank, improving overall user interaction using Figma.' },
]

function App() {
  const [page, setPage] = useState<'home' | 'about' | 'projects'>('home')
  const [activeSection, setActiveSection] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [filter, setFilter] = useState('all')
  const scrollRef = useRef<HTMLDivElement>(null)
  const projectContentRef = useRef<HTMLDivElement>(null)

  const showHome = () => {
    setPage('home')
    setMobileOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goToSection = (index: number) => {
    setPage('home')
    setMobileOpen(false)
    setTimeout(() => {
      const container = scrollRef.current
      if (container) container.scrollTo({ top: index * window.innerHeight, behavior: 'smooth' })
    }, 50)
  }

  const onHomeScroll = () => {
    const container = scrollRef.current
    if (!container) return
    setActiveSection(Math.round(container.scrollTop / window.innerHeight))
  }

  const filteredProjects = filter === 'all' ? projects : projects.filter((project) => project.filter === filter)

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.reveal-on-scroll')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.16, rootMargin: '0px 0px -70px 0px' },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [page, filter])

  return (
    <main className="portfolio-shell">
      <header className={`header ${activeSection > 0 || page !== 'home' ? 'scrolled' : ''} ${page !== 'home' ? 'inner-header' : ''}`}>
        <button className="logo" onClick={showHome}>Daniartha</button>
        {page === 'home' ? (
          <>
            <button className="mobile-menu-btn" onClick={() => setMobileOpen((value) => !value)} aria-label="Toggle mobile menu">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <nav className={`nav-links ${mobileOpen ? 'active' : ''}`}>
              {sections.map((item, index) => (
                <button key={item} className={activeSection === index ? 'active' : ''} onClick={() => goToSection(index)}>
                  {item}
                </button>
              ))}
            </nav>
          </>
        ) : (
          <button className="back-btn header-back-btn" onClick={showHome}><ArrowLeft size={17} /> Daniartha</button>
        )}
      </header>

      {page === 'home' && (
        <div className="section-dots">
          {sections.map((item, index) => (
            <button key={item} data-label={item} className={`section-dot ${activeSection === index ? 'active' : ''}`} onClick={() => goToSection(index)} aria-label={item} />
          ))}
        </div>
      )}

      {page === 'home' && (
        <div className="page active">
          <div className="scroll-container" ref={scrollRef} onScroll={onHomeScroll}>
            <section className="scroll-section in-view">
              <FloatingShapes />
              <div className="container">
                <div className="section-inner">
                  <div className="hero">
                    <div className="hero-content">
                      <p className="hero-subtitle"><span className="reveal-text"><span>THOMAS DANI ARTHA</span></span></p>
                      <h1 className="hero-title"><span className="reveal-text"><span>UI / UX Designer</span></span></h1>
                      <p className="hero-description">A junior UI/UX designer currently focused on web and app design. Other than that, I am also interested in game design and game programming. I love to learn new things and always open to new opportunities.</p>
                      <div className="hero-buttons">
                        <a className="btn btn-primary" href="#"><Download size={17} /> Download CV</a>
                        <button className="btn btn-secondary" onClick={() => goToSection(3)}><Send size={17} /> Contact Me</button>
                      </div>
                    </div>
                    <div className="hero-image"><img src={images.profile} alt="Thomas Dani Artha" className="profile-image" /></div>
                  </div>
                </div>
              </div>
              <ScrollIndicator />
            </section>

            <section className={`scroll-section ${activeSection === 1 ? 'in-view' : ''}`}>
              <div className="container">
                <div className="section-inner">
                  <div className="section">
                    <div className="section-content">
                      <h2 className="section-title">About Me</h2>
                      <p className="section-description">A brief introduction about me and my interest. Discover my journey, skills, and passion for creating meaningful digital experiences.</p>
                      <button className="btn btn-primary" onClick={() => setPage('about')}><Users size={17} /> Learn More</button>
                    </div>
                    <div className="section-image"><img src={images.about} alt="About Me" className="about-img" /></div>
                  </div>
                </div>
              </div>
            </section>

            <section className={`scroll-section ${activeSection === 2 ? 'in-view' : ''}`}>
              <div className="container">
                <div className="section-inner">
                  <div className="section section-reverse">
                    <div className="section-content">
                      <h2 className="section-title">My Projects</h2>
                      <p className="section-description">Explore my portfolio of UI/UX designs, web applications, and creative projects that showcase my skills and creativity.</p>
                      <button className="btn btn-primary" onClick={() => setPage('projects')}><Figma size={17} /> See All</button>
                    </div>
                    <div className="section-image"><img src={images.projects} alt="My Projects" className="projects-img" /></div>
                  </div>
                </div>
              </div>
            </section>

            <section className={`scroll-section ${activeSection === 3 ? 'in-view' : ''}`}>
              <div className="container">
                <div className="section-inner">
                  <div className="section">
                    <div className="section-content">
                      <h2 className="section-title">Get In Touch</h2>
                      <p className="section-description">Feel free to contact me if you have any questions, project ideas, or just want to say hi. I'm always open to new opportunities.</p>
                      <a href="mailto:daniartha.my@gmail.com" className="contact-email"><Mail size={18} /> daniartha.my@gmail.com</a>
                      <SocialLinks />
                    </div>
                    <div className="section-image"><img src={images.contact} alt="Contact" className="contact-img" /></div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}

      {page === 'about' && (
        <div className="page active inner-page">
          <div className="container">
            <section className="about-hero-page reveal-on-scroll">
              <div className="about-hero-content">
                <p className="about-label">WHO AM I?</p>
                <h1 className="about-heading">Thomas Dani Artha</h1>
                <p className="about-text">Hello! I'm Thomas Dani Artha, a passionate UI/UX designer based in Indonesia. I specialize in creating intuitive and visually appealing digital experiences that solve real problems for users.</p>
                <p className="about-text">My journey in design started with a curiosity about how digital products work and how they can be improved. This led me to explore UI/UX design, where I found my passion for creating meaningful user experiences.</p>
                <p className="about-text">Beyond UI/UX design, I'm also deeply interested in game design and game programming. I believe that the principles of good game design can be applied to create better digital products.</p>
                <div className="about-buttons"><a className="btn btn-primary" href="CV Thomas Dani Artha.pdf" download="CV Thomas Dani Artha.pdf"><Download size={17} /> Download CV</a><button className="btn btn-secondary" onClick={() => goToSection(3)}><Send size={17} /> Contact Me</button></div>
              </div>
              <div className="about-hero-image"><img src={images.profile} alt="Thomas Dani Artha" /></div>
            </section>

            <section className="skills-section reveal-on-scroll">
              <div className="section-header">
                <h2 className="section-heading">Skills & Expertise</h2>
                <p className="section-subheading">Explore some skills I'm proficient in to deliver high-quality solutions.</p>
              </div>
              <div className="skill-focus-grid">
                {skillFocus.map(({ icon: Icon, title }) => (
                  <article className="skill-focus-card" key={title}>
                    <div className="skill-focus-icon"><Icon size={28} /></div>
                    <h3>{title}</h3>
                  </article>
                ))}
              </div>
              <div className="language-tools">
                <h3>Language &amp; Tools</h3>
                <p className="skills-inline">{skills.join(' | ')}</p>
              </div>
            </section>

            <section className="resume-section reveal-on-scroll">
              <div className="section-header"><h2 className="section-heading">Professional Experience</h2></div>
              <div className="timeline-list">
                {professionalExperience.map((item) => (
                  <article className="timeline-card" key={`${item.period}-${item.place}`}>
                    <p className="timeline-period">{item.period}</p>
                    <h3>{item.place}</h3>
                    <p>{item.role}</p>
                    <p className="timeline-description">{item.description}</p>
                    <div className="timeline-tools">
                      {item.tools.map((tool) => <span key={tool}>{tool}</span>)}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="resume-section education-achievements-section reveal-on-scroll">
              <div className="education-achievements-grid">
                <div>
                  <div className="section-header compact">
                    <h2 className="section-heading">Education</h2>
                    <p className="section-subheading">Get to know more about my educational background.</p>
                  </div>
                  <article className="education-card">
                    <p className="timeline-period">Sept 2021 - Jan 2025</p>
                    <h3>Universitas Amikom Yogyakarta</h3>
                    <p>S1 Teknologi Informasi | Computer Science Faculty</p>
                    <strong>GPA Score : 3.85 / 4.00</strong>
                  </article>
                </div>

                <div>
                  <div className="section-header compact">
                    <h2 className="section-heading">Achivements</h2>
                    <p className="section-subheading">Some of my achievements during my study.</p>
                  </div>
                  <div className="achievements-grid compact">
                    {achievements.map((item) => (
                      <article className="achievement-card" key={item.title}>
                        <h3>{item.title}</h3>
                        <p>{item.detail}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <div className="about-closer-stack">
              <section className="quote-section reveal-on-scroll" aria-label="Motivation quote">
                <p className="quote-text">
                  “{motivation.split('').map((character, index) => (
                    <span key={`${character}-${index}`} style={{ animationDelay: `${index * 0.035}s` }}>
                      {character === ' ' ? '\u00A0' : character}
                    </span>
                  ))}”
                </p>
              </section>

              <section className="about-contact-section reveal-on-scroll">
                <button className="about-contact-link" onClick={() => goToSection(3)}>
                  <span>Get In Touch</span>
                  <span className="about-contact-arrow"><ArrowRight size={20} /></span>
                </button>
              </section>
            </div>
          </div>
        </div>
      )}

      {page === 'projects' && (
        <div className="page active inner-page project-page-snap">
          <section className="project-page-section">
            <div className="container">
            <section className="projects-intro reveal-on-scroll project-section-animate">
              <div className="projects-hero">
                <h1>My Projects</h1>
                <p>A brief introduction about me and my interest.</p>
                <button className="scroll-down-btn" onClick={() => projectContentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                  <span>Scroll Down</span>
                  <span className="scroll-down-circle"><ArrowDown size={18} /></span>
                </button>
              </div>
              <div className="projects-intro-image">
                <img src={images.projects} alt="Project preview" />
              </div>
            </section>
            </div>
          </section>

          <section className="project-page-section">
            <div className="container">
            <div ref={projectContentRef} className="project-content-anchor">
              <section className="highlight-project-section reveal-on-scroll project-section-animate">
                <div className="section-header compact">
                  <h2 className="section-heading">Highlight</h2>
                </div>
                <article className="highlight-project-card">
                  <div className="highlight-project-image"><img src="/assets/highlightproject.jpg" alt="Course Class" /></div>
                  <div className="highlight-project-info">
                    <p className="project-category">UI/UX Design</p>
                    <h3>Course Class - Mobile App Design</h3>
                    <p>A modern mobile course app designed in Figma, featuring a clean interface, intuitive navigation, harmonious color palettes, and personalized learning recommendations to create an engaging and seamless user experience. This project highlights my focus on user-centered design, visual consistency, and interactive learning solutions.</p>
                    <a href="#" className="project-link">View Project <ArrowRight size={15} /></a>
                  </div>
                </article>
              </section>
            </div>
            </div>
          </section>

          <section className="project-page-section project-page-section-tall other-projects-heading-section">
            <div className="container">
            <section className="other-projects-section reveal-on-scroll project-section-animate">
              <div className="section-header compact">
                <h2 className="section-heading">Other Note Worthy Projects</h2>
              </div>
            </section>
            <div className="projects-filter reveal-on-scroll project-section-animate">
              {['all', 'ui-ux', 'game'].map((item) => <button key={item} className={`filter-btn ${filter === item ? 'active' : ''}`} onClick={() => setFilter(item)}>{item === 'all' ? 'All Projects' : item === 'ui-ux' ? 'UI/UX' : 'Game Development'}</button>)}
            </div>
            <div className="projects-grid project-section-animate visible">
              {filteredProjects.map((project) => <article className="project-card" key={project.title}><div className="project-image-wrapper"><img className="project-image" src={project.image} alt={project.title} /><div className="project-overlay"><a className="project-overlay-btn" href="#">View Details</a></div></div><div className="project-info"><p className="project-category">{project.category}</p><h3 className="project-title">{project.title}</h3><p className="project-description">{project.text}</p><a href="#" className="project-link">View Project <ArrowRight size={15} /></a></div></article>)}
            </div>
            <section className="about-contact-section projects-contact-section reveal-on-scroll">
              <button className="about-contact-link" onClick={() => goToSection(3)}>
                <span>Get In Touch</span>
                <span className="about-contact-arrow"><ArrowRight size={20} /></span>
              </button>
            </section>
          </div>
          </section>
        </div>
      )}
    </main>
  )
}

function FloatingShapes() {
  return <div className="floating-shapes"><div className="shape shape-1" /><div className="shape shape-2" /><div className="shape shape-3" /></div>
}

function ScrollIndicator() {
  return <div className="scroll-indicator"><div className="mouse"><div className="wheel" /></div><span>Scroll</span></div>
}

function SocialLinks() {
  return <div className="social-links"><a href="https://www.linkedin.com/in/thomasdaniartha/" target="_blank" rel="noreferrer" title="LinkedIn"><Linkedin size={18} /></a><a href="https://github.com/Dybaee" target="_blank" rel="noreferrer" title="GitHub"><Github size={18} /></a><a href="https://www.instagram.com/daniarth_/" target="_blank" rel="noreferrer" title="Instagram"><Instagram size={18} /></a><a href="mailto:daniartha.my@gmail.com" title="Email"><Mail size={18} /></a></div>
}

export default App
