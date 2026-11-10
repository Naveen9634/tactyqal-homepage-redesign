import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Menu, X, ChevronDown, ArrowUpRight, Play, Check,
  GraduationCap, Users, Landmark, Lightbulb, Code2,
  HeartHandshake, TrendingUp, ShieldCheck, MessageCircle,
  Clock3, IndianRupee, Infinity, Monitor, Trophy,
  Presentation, Search, Handshake, Scale, Globe,
  FileText, ChartNoAxesCombined
} from 'lucide-react';

import './styles.css';

const projects = [
  {
    name: 'KrishiDrishti',
    desc: 'AI-powered soil analysis & crop recommendation app that can impact millions of local farmers in India.',
    img: 'https://www.tactyqal.com/application/assets/img/apps/krishidrishti1.png'
  },
  {
    name: 'Elenor Vegan Handbags',
    desc: 'Corporate gifting platform that sells vegan handbags, started by a 16 year old and generated INR 9,000 in the first week.',
    img: 'https://www.tactyqal.com/application/assets/img/apps/elenor1.png'
  },
  {
    name: 'One Last Chapter',
    desc: 'Book subscription service for kids. Started by a 13-year-old and is generating INR 100,000 monthly revenue.',
    img: 'https://www.tactyqal.com/application/assets/img/apps/olc1.png'
  },
  {
    name: 'Paws of Promise',
    desc: 'App for virtual pet adoption that connects pet lovers with pets from shelters.',
    img: 'https://www.tactyqal.com/application/assets/img/apps/pop1.png'
  },
  {
    name: 'AudioNova',
    desc: 'AI music and video production company.',
    img: 'https://www.tactyqal.com/application/assets/img/apps/audionova1.png'
  },
  {
    name: 'Converza - Spanish Learning App',
    desc: 'Language learning app featuring Luna, the friendly AI language learning bot.',
    img: 'https://www.tactyqal.com/application/assets/img/apps/converza1.png'
  }
];

const benefits = [
  {
    icon: GraduationCap,
    title: '1:1 Personalized Mentoring',
    desc: 'Every student gets dedicated, expert guidance. No group classes.',
    color: 'green'
  },
  {
    icon: Monitor,
    title: 'Full Stack App with No-Code',
    desc: 'Build real apps using modern no-code tools and platforms.',
    color: 'blue'
  },
  {
    icon: Trophy,
    title: 'Proven Track Record',
    desc: '50+ successful students, real revenue, and top university admits.',
    color: 'orange'
  },
  {
    icon: Landmark,
    title: 'University Admission Edge',
    desc: 'Stand out in applications with real-world projects and achievements.',
    color: 'purple'
  },
  {
    icon: IndianRupee,
    title: 'Revenue Generation',
    desc: 'Students learn to build, launch, and monetize their own apps.',
    color: 'green'
  },
  {
    icon: Infinity,
    title: 'Life Long Support',
    desc: 'From ideation to launch, students master the full journey.',
    color: 'blue'
  },
  {
    icon: Presentation,
    title: 'Pitch & Presentation Skills',
    desc: 'Learn to pitch, present, and launch on Product Hunt.',
    color: 'orange'
  }
];

const tools = [
  { icon: 'fas fa-lightbulb', title: 'Startup Idea Generator',color: 'purple'},
  { icon: 'fas fa-chart-line', title: 'Fundability Assessment'},
  { icon: 'fas fa-users', title: 'Team Evaluation Tool',color: 'purple' },
  { icon: 'fas fa-file-alt', title: 'Pitch Deck Analyzer' },
  { icon: 'fas fa-search', title: 'Top 10 Traits For Business Success' },
  { icon: 'fas fa-handshake', title: 'Cofounder Compatibility Test',color: 'purple' },
  { icon: 'fas fa-balance-scale', title: 'Problem-Solution Fit' },
  { icon: 'fas fa-globe', title: 'Website Landing Page Assessment',color: 'purple' }
];

const faqs = [
  ['What if my teen has no coding experience?', 'No problem! Our program is designed for beginners. We use no-code tools and guide students step-by-step.'],
  ['How do you guarantee university admissions?', 'We help students build standout projects that strengthen their university applications.'],
  ['What kind of apps do students typically build?', 'Apps range from AI-powered tools, e-commerce platforms, subscription services, to social good projects. We help students pick ideas that excite them.'],
  ['How much time commitment is required?', 'About 2-3 hours per week, including 1 hour of live mentoring and independent work.'],
  ['What is the success rate?', '100% of our students launch a working app and achieve their goals.'],
  ['Can my teen generate real revenue?', 'Yes! Many of our students have generated real revenue and even won grants & media coverage.'],
  ['What universities have your students gotten into?', 'Our alumni have been admitted to top universities in the US, UK, including Ivy League.'],
  ['What ongoing support do you provide?', 'We offer ongoing support, alumni community, and guidance even after the program ends.']
];


const testimonials = [
  {
    name: 'Aarav Sharma',
    quote: 'I had to struggle to find a tech cofounder',
    image: 'https://randomuser.me/api/portraits/men/65.jpg'
  },
  {
    name: 'Isha Patel',
    quote: 'Now I feel independent and can build anything I want.',
    image: 'https://randomuser.me/api/portraits/women/68.jpg'
  },
  {
    name: 'Rohan Verma',
    quote: 'It’s the future.',
    image: 'https://randomuser.me/api/portraits/men/66.jpg'
  },
  {
    name: 'Simran Kaur',
    quote: 'I can focus on the creative side and don’t have to worry about whether it can be built.',
    image: 'https://randomuser.me/api/portraits/women/69.jpg'
  },
  {
    name: 'Devansh Mehta',
    quote: 'I went from having no idea to launching my app.',
    image: 'https://randomuser.me/api/portraits/men/67.jpg'
  },
  {
    name: 'Priya Nair',
    quote: 'My impact app was only in my head till I built it.',
    image: 'https://randomuser.me/api/portraits/women/70.jpg'
  }
];


const blogPosts = [
  {
    title: 'The elevator pitch for business entrepreneurs',
    desc: 'An elevator pitch is the fastest way to describe what your startup...',
    time: '3 min read',
    date: '2024-05-01',
    image: 'https://www.tactyqal.com/application/assets/images/blog-ele.png',
    url: 'https://www.tactyqal.com/blog/elevator-pitch-with-examples-for-business-entrepreneurs/'
  },
  {
    title: 'How to build a tech startup team?',
    desc: 'In the early days, the fewer employees, the better. Managing people takes up a lot of time...',
    time: '4 min read',
    date: '2024-04-20',
    image: 'https://www.tactyqal.com/application/assets/images/blog-startup.png',
    url: 'https://www.tactyqal.com/blog/how-to-build-a-tech-startup-team-2/'
  },
  {
    title: '11 reasons why startups fail at the idea stage',
    desc: 'The default state of a startup is failure and there are many...',
    time: '3 min read',
    date: '2024-04-10',
    image: 'https://www.tactyqal.com/application/assets/images/blog-fail.png',
    url: 'https://tactyqal.com/blog/11-reasons-why-startups-fail-at-idea-stage/'
  },
  {
    title: '50 No-code startup app ideas',
    desc: 'Find a list of 50 unique ideas you can explore for your startup...',
    time: '5 min read',
    date: '2025-07-09',
    image: 'https://www.tactyqal.com/application/assets/images/50-No-Code-Startup-Ideas-You-Can-Build-Without-Programming-Skills.webp',
    url: 'https://tactyqal.com/blog/50-no-code-startup-ideas-to-build-without-programming-skills/'
  },
  {
    title: '30 Startup ideas to solve food waste problems',
    desc: 'Food waste is a massive problem. Every year, we throw away one-third of all food...',
    time: '4 min read',
    date: '2024-03-15',
    image: 'https://www.tactyqal.com/application/assets/images/30-startup-ideas-for-food-waste-problems.jpg',
    url: 'https://tactyqal.com/blog/30-startup-ideas-for-solving-food-waste-problems/'
  },
  {
    title: '50 Startup ideas for Gen-Z Entrepreneurs',
    desc: 'Looking at the opportunities ahead, Generation Z entrepreneurs has advantages...',
    time: '6 min read',
    date: '2024-03-05',
    image: 'https://www.tactyqal.com/application/assets/images/50-Startup-Ideas-for-Generation-Z-Entrepreneurs.jpg',
    url: 'https://tactyqal.com/blog/50-startup-ideas-for-generation-z-entrepreneurs/'
  }
];


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="navbar">
        <a className="logo" href="#home">
          Tactyqal <span>Labs</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? 'nav-links show' : 'nav-links'}>
          {[
            ['Home', '#home'],
            ['Success Stories', '#success'],
            ['Program', '#program'],
            ['Why Us', '#why'],
            ['Tools', '#tools'],
            ['Blog', '#blog'],
            ['Pricing', '#pricing'],
            ['FAQ', '#faq']
          ].map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>
      </header>

      <main>
       
{/* HERO */}
<section className="hero" id="home">

  {/* Background Video */}
  <video className="hero-bg-video" autoPlay muted loop playsInline>
    <source src="/Videos/kid_impact.mp4" type="video/mp4" />
  </video>

  <div className="hero-overlay"></div>

  <div className="hero-content">
    <h1>
  Empower Your Kid To Build<br/> The Next{" "}
  <span className="text-blue">App That Impacts</span>{" "}<br/>
  <span className="text-purple">Millions</span>, in 8 Weeks
</h1>
    <p className="hero-subtitle">
      1:1 Mentoring • Idea To Full-Stack App • No Coding •
      Admissions To The Best Colleges • Grants • Media Coverage
    </p>

    <div className="hero-stats">
      <div className="stat-box">
        <i className="fas fa-user-graduate"></i>
        <span>100+ Students Mentored</span>
      </div>

      <div className="stat-box">
        <Landmark />
        <span>Top University Admissions</span>
      </div>

      <div className="stat-box">
        <i className="fas fa-users"></i>
        <span>₹Thousands of People Impacted</span>
      </div>
    </div>

    <div className="hero-buttons">
      <a href="#contact" className="btn-primary">
        Book Free Consultation
      </a>

      <a href="#success" className="btn-outline">
        <Play size={18} fill="currentColor" />
        Success Stories
      </a>
    </div>

    <div className="hero-offer">
      <div className="hero-price">
        <span className="old-price">₹25,000</span>
        <span className="new-price">₹16,000</span>
      </div>

      <div className="offer-badges">
        <span className="limited-offer">Limited Time Offer</span>
        <span className="guarantee-offer">Results Guaranteed</span>
      </div>
    </div>
  </div>
</section>


        {/* SUCCESS STORIES */}
        <section className="success-section section" id="success">
          <div className="section-heading">
            <h2>
  Real <span className="text-purple">Students.</span> Real{" "}
  <span className="text-blue">Apps.</span> Real{" "}
  <span className="text-purple">Success.</span>
</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <h3>{project.name}</h3>
                <p>{project.desc}</p>

                <a href="#contact" className="project-image">
                  <img src={project.img} alt={project.name} loading="lazy" />
                  <span className="image-link">
                    <ArrowUpRight />
                  </span>
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* PROGRAM */}
        <section className="program-section section" id="program">
          <div className="section-heading">
            <h2>
  From Idea to <span className="text-blue">Full App</span>{" "}
  <span className="text-purple">in 8 Weeks</span>
</h2>
          </div>

          <div className="weeks-grid">
            <div className="week-card week-one">
              <h3>Week 1-2</h3>
              <p>Ideation &amp; Market Research</p>
            </div>

            <div className="week-card week-two">
              <h3>Week 3-4</h3>
              <p>Design &amp; Prototyping</p>
            </div>

            <div className="week-card week-three">
              <h3>Week 5-6</h3>
              <p>Full-Stack Development</p>
            </div>

            <div className="week-card week-four">
              <h3>Week 7-8</h3>
              <p>Launch &amp; Marketing</p>
            </div>
          </div>

          <blockquote className="program-quote">
            “Learn to sell. Learn to build. If you can do both, you will be
            unstoppable.”
            <span>— Naval Ravikant</span>
          </blockquote>

          <p className="program-detail">
            Personal 1:1 Live Sessions • 1 Hour Each • Expert Guidance
          </p>

          <p className="program-highlight">
            University admissions, revenue generation, international
            recognition, grants
          </p>

          <a href="#contact" className="btn-primary program-button">
            Start Your Journey Today
          </a>
        </section>

        {/* WHY PARENTS CHOOSE */}
        
<section className="why-section section" id="why">

  {/* Background Video */}
  <video className="why-bg-video" autoPlay muted loop playsInline>
    <source src="/Videos/continuous-support.mp4" type="video/mp4" />
  </video>

  {/* Dark Overlay */}
  <div className="why-video-overlay"></div>

  {/* Section Content */}
  <div className="why-content">

    <div className="section-heading">
      <h2>
  Why Parents Choose <span className="text-blue">Tactyqal</span>{" "}
  <span className="text-purple">Labs</span>
</h2>
    </div>

    <div className="benefit-grid">
      {benefits.map(({ icon: Icon, title, desc, color }) => (
        <article className="benefit-card" key={title}>

          {title === 'Full Stack App with No-Code' ? (
            <i className="fas fa-laptop-code benefit-icon blue"></i>
          ) : title === '1:1 Personalized Mentoring' ? (
            <i className="fas fa-user-graduate benefit-icon green"></i>
          ) : title === 'Proven Track Record' ? (
            <i className="fas fa-trophy benefit-icon orange"></i>
          ) : title === 'Pitch & Presentation Skills' ? (
            <i className="fas fa-chalkboard-teacher benefit-icon orange"></i>
          ) : title === 'University Admission Edge' ? (
            <i className="fas fa-university benefit-icon purple"></i>
          ) : (
            <Icon className={`benefit-icon ${color}`} />
          )}

          <h3>{title}</h3>
          <p>{desc}</p>

        </article>
      ))}
    </div>

  </div>
</section>


        {/* STARTUP IDEAS VIDEO */}
        <section className="video-section section" id="video">
          <div className="section-heading">
            <h2>Startup<span className="text-blue"> Ideas</span> <span className="text-purple">101</span></h2>
            <p>
              Learn how to identify and validate profitable startup ideas
              from our founder.
            </p>
          </div>

          <div className="video-frame">
            <iframe
              src="https://www.youtube.com/embed/UyUH06CfLbk?start=105"
              title="How to Come Up with Startup Ideas"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* FREE TOOLS */}
        <section className="tools-section section" id="tools">
          <div className="section-heading">
            <h2>
  <span style={{ color: "#FFFFFF" }}>Free Tools</span>{" "}
  <span className="text-blue"> to Get</span>{" "}
  <span className="text-purple"> Started</span>
</h2>
            <p>
              Explore our startup assessment tools used by 1000+ entrepreneurs
            </p>
          </div>

          <div className="tool-grid">
  {tools.map(({ icon, title, color }) => (
  <a href="#contact" className="tool-card" key={title}>
    <i className={`${icon} tool-icon ${color || ''}`}></i>
    <h3>{title}</h3>
  </a>
))}
</div>

          <a href="#contact" className="btn-primary tools-button">
            Access All Tools Free
          </a>
        </section>

        {/* TESTIMONIALS */}
        
{/* TESTIMONIALS */}

{/* TESTIMONIALS */}
<section className="testimonial-section" id="testimonials">
  <div className="container">
   <div className="testimonial-title">
  What Our <span className="text-blue">Students</span>{" "}
  <span className="text-purple">Say</span>
</div>

    <div className="testimonial-grid">
      {testimonials.map(({ name, quote, image }) => (
        <div className="testimonial-card" key={name}>
          <img
            src={image}
            alt={name}
            className="testimonial-photo"
            loading="lazy"
          />

          <div className="testimonial-name">{name}</div>

          <p className="testimonial-quote">
            “{quote}”
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


        {/* BLOG */}
       
{/* LEARN FROM INDUSTRY EXPERTS */}

{/* LEARN FROM INDUSTRY EXPERTS */}
<section className="expert-blog-section" id="blog">
  <div className="expert-blog-container">

    <h2 className="expert-blog-heading">
  Learn from <span className="text-blue">Industry</span>{" "}
  <span className="text-purple">Experts</span>
</h2>

    <div className="expert-blog-grid">
      {blogPosts.map((post) => (
        <article className="expert-blog-card" key={post.title}>

          <a href={post.url} target="_blank" rel="noreferrer">
            <img
              src={post.image}
              alt={post.title}
              className="expert-blog-image"
              loading="lazy"
            />
          </a>

          <h3>{post.title}</h3>
<br />
<p className="expert-blog-desc">{post.desc}</p>

          <p className="expert-blog-meta">
            By Tactyqal · {post.time} read · {post.date}
          </p>

          <a
            href={post.url}
            target="_blank"
            rel="noreferrer"
            className="expert-blog-read"
          >
            Read More
          </a>
        </article>
      ))}
    </div>

    <a
      href="https://tactyqal.com/blog/"
      target="_blank"
      rel="noreferrer"
      className="expert-blog-all"
    >
      Read All Articles
    </a>

  </div>
</section>

        {/* PRICING */}
        
{/* ================================
    PRICING SECTION
================================ */}
<section className="pricing-section" id="pricing">

  {/* Section Heading */}
  <h2 className="pricing-heading">
  <span style={{ color: "#FFFFFF" }}>Start Your Teen's </span>
  <span style={{ color: "#00D9FF" }}>Entrepreneurial </span>
  <span style={{ color: "#A78BFA" }}>Journey</span>
</h2>

  {/* Pricing Card */}
  <div className="pricing-card">

    {/* Original Price */}
    <p className="old-price">₹25,000</p>

    {/* Discounted Price */}
    <h3 className="new-price">₹16,000</h3>

    {/* Program Features */}
    <ul className="pricing-features">
      <li>8 weeks of 1:1 mentoring</li>
      <li>Full-stack app development</li>
      <li>Product Hunt launch</li>
      <li>Pitch deck creation</li>
      <li>Marketing strategy</li>
      <li>Ongoing support</li>
    </ul>

    {/* Money Back Guarantee */}
    <p className="pricing-guarantee">
      Results guaranteed or money back
    </p>

    {/* Limited Time Offer */}
    <p className="pricing-offer">
      Limited time offer - Only 15 spots<br />
      available for the month
    </p>

    {/* Enroll Button */}
    <a href="#contact" className="pricing-button">
      Enroll Now
    </a>

  </div>
</section>

        {/* FAQ */}
       
{/* =====================================
    FAQ SECTION
===================================== */}
<section className="section faq-section" id="faq">

  {/* FAQ HEADING */}
  <div className="section-heading">
    <h2>
  <span style={{ color: "#FFFFFF" }}>Frequently </span>
  <span style={{ color: "#00D9FF" }}>Asked </span>
  <span style={{ color: "#A78BFA" }}>Questions</span>
</h2>
  </div>

  {/* FAQ QUESTIONS */}
  <div className="faq-list">
    {faqs.map(([question, answer], index) => (
      <div className="faq-item" key={question}>

        {/* QUESTION BUTTON */}
        <button
          onClick={() =>
            setActiveFaq(activeFaq === index ? -1 : index)
          }
        >
          <span>{question}</span>

          {/* PLUS / MINUS ICON */}
          <span className="faq-icon">
            {activeFaq === index ? "−" : "+"}
          </span>
        </button>

        {/* ANSWER */}
        {activeFaq === index && (
          <p className="faq-answer">{answer}</p>
        )}

      </div>
    ))}
  </div>

</section>

        {/* CONTACT */}
       
{/* =====================================
    CONTACT SECTION
===================================== */}
<section className="contact-section" id="contact">

  {/* MAIN HEADING */}
  <h2 className="contact-main-heading">
  <span style={{ color: "#FFFFFF" }}>Ready to Start Your </span>
  <span style={{ color: "#00D9FF" }}>Teen's </span>
  <span style={{ color: "#A78BFA" }}>Success Story?</span>
</h2>

  <div className="contact-layout">

    {/* LEFT CONTACT CARD */}
    <div className="contact-info-card">

      <h3>Contact Us</h3>

      <p className="contact-intro">
        Reach out to our dedicated team for
        any inquiries, assistance, or
        information you need.
      </p>

      {/* EMAIL */}
      <a href="mailto:tactyqal.labs@gmail.com" className="contact-detail">
        <span>tactyqal.labs@gmail.com</span>
        <span className="contact-icon" style={{ color: "#A78BFA" }}>✉</span>
      </a>

      {/* PHONE */}
      <a href="tel:+919804772106" className="contact-detail">
        <span>+91-98047-72106</span>
        <span className="contact-icon" style={{ color: "#A78BFA" }}>☎</span>
      </a>

      {/* TIMING */}
      <div className="contact-detail">
        <span>Mon-Sat, 9am-7pm</span>
        <span className="contact-icon" style={{ color: "#A78BFA" }}>◷</span>
      </div>

      {/* RESPONSE TIME */}
      <div className="contact-detail">
        <span>Response Time: Within 24 hours</span>
        <span className="contact-icon" style={{ color: "#A78BFA" }}>ϟ</span>
      </div>

    </div>

    {/* RIGHT GOOGLE CALENDAR CARD */}
    <div className="calendar-card">

      <h3>Book a Free Appointment</h3>

      <iframe
        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3JlaCrNitoPs8Bdr-FUP0cRfFI-MopSIH2azaPNDpRk56h6drYLbXSh-mDc9sfEZAQUKGdsUXs?gv=true"
        title="Book a Free Appointment"
        className="calendar-iframe"
        loading="lazy"
      ></iframe>

    </div>

  </div>
</section>
      </main>

      <footer className="footer">
        <a className="logo" href="#home">
          Tactyqal <span>Labs</span>
        </a>
        <p>Helping the next generation turn curiosity into something real.</p>
        <a href="#home">Back to Top ↑</a>
        <small>© {new Date().getFullYear()} Tactyqal Labs. All rights reserved.</small>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);