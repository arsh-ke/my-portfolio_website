"use client"

import { useState } from "react"

export default function Home() {
  const [showContactModal, setShowContactModal] = useState(false)

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[oklch(0.08_0_0)] text-[oklch(0.95_0_0)]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/5 border border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div
            className="text-2xl font-bold"
            style={{
              background: "linear-gradient(to right, rgb(52, 211, 153), rgb(34, 197, 226))",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Arsh Kureshi
          </div>
          <button 
            onClick={scrollToContact}
            className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 bg-gradient-to-r from-emerald-500 to-cyan-500 text-[oklch(0.08_0_0)] hover:shadow-lg hover:shadow-emerald-500/50"
          >
            Hire Me
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-[oklch(0.95_0_0)]">Hi, I'm</span>
            <span
              style={{
                background: "linear-gradient(to right, rgb(52, 211, 153), rgb(34, 197, 226))",
                backgroundClip: "text",
                color: "transparent",
              }}
              className="text-7xl md:text-8xl drop-shadow-lg block"
            >
              Arsh Kureshi
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl text-emerald-400 mb-8 font-semibold"
            style={{ filter: "drop-shadow(0 0 20px rgba(16, 185, 129, 0.3))" }}
          >
            Full-Stack MERN Developer
          </p>

          <p className="text-lg md:text-xl text-[oklch(0.85_0_0)] mb-12 max-w-2xl mx-auto leading-relaxed">
            I build high-performance, scalable web applications that turn ideas into real-world products.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={scrollToProjects}
              className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 bg-gradient-to-r from-emerald-500 to-emerald-600 text-[oklch(0.08_0_0)] shadow-lg shadow-emerald-500/40 hover:shadow-emerald-500/60"
            >
              View My Work
            </button>
            <button 
              onClick={scrollToContact}
              className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-md bg-white/5 border border-white/10 text-[oklch(0.95_0_0)] hover:bg-white/10 hover:border-white/20 hover:shadow-emerald-500/40"
            >
              Hire Me
            </button>
          </div>

          <div className="mt-20 flex justify-center">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur-2xl opacity-40 animate-pulse"></div>

              {/* Glass circle frame */}
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 p-2 rounded-full relative shadow-[0_0_80px_rgba(0,255,170,0.35)]">
                <img
                  src="/me.png"
                  alt="Arsh Kureshi"
                  className="w-60 h-69 object-cover rounded-full border-4 border-white/10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2
            style={{
              background: "linear-gradient(to right, rgb(52, 211, 153), rgb(34, 197, 226))",
              backgroundClip: "text",
              color: "transparent",
            }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            About Me
          </h2>

          <div className="backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 p-8 md:p-12 rounded-2xl hover:shadow-lg hover:shadow-emerald-500/20">
            <p className="text-lg md:text-xl leading-relaxed text-[oklch(0.85_0_0)] mb-6">
              I am a passionate Full-Stack MERN Developer focused on building modern, scalable and user-friendly web
              applications.
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-[oklch(0.85_0_0)]">
              I enjoy turning complex ideas into clean, efficient solutions using React, Node.js, MongoDB and modern UI
              design. My goal is to create software that not only looks great but also solves real-world problems.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2
            style={{
              background: "linear-gradient(to right, rgb(52, 211, 153), rgb(34, 197, 226))",
              backgroundClip: "text",
              color: "transparent",
            }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            Experience & Education
          </h2>

          <div className="relative pl-8" style={{ borderLeft: "2px solid rgb(16, 185, 129)" }}>
            {[
              {
                year: "2023 – Present",
                title: "Freelance Web Developer",
                description:
                  "Building modern web applications for clients using React, Next.js and Tailwind CSS. Working on dashboards, landing pages, APIs and authentication systems.",
              },
              {
                year: "2022 – 2023",
                title: "Web Development Intern",
                description:
                  "Worked on frontend development, implemented responsive UI designs, integrated APIs and collaborated with backend developers.",
              },
              {
                year: "2020 – 2023",
                title: "BCA – Bachelor of Computer Applications",
                description: "Studied computer science fundamentals, programming, databases and software development.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-lg mb-6"
                style={{ marginLeft: "-2px", paddingLeft: "20px", position: "relative" }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: "-12px",
                    top: "0",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "rgb(16, 185, 129)",
                    border: "2px solid var(--background)",
                    boxShadow: "0 0 10px rgba(16, 185, 129, 0.6)",
                  }}
                ></div>
                <div className="text-emerald-400 font-bold text-sm mb-2">{item.year}</div>
                <h3 className="text-2xl font-bold text-[oklch(0.95_0_0)] mb-3">{item.title}</h3>
                <p className="text-[oklch(0.8_0_0)] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2
            style={{
              background: "linear-gradient(to right, rgb(52, 211, 153), rgb(34, 197, 226))",
              backgroundClip: "text",
              color: "transparent",
            }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            Certifications
          </h2>

          <div className="backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 p-8 md:p-12 rounded-2xl hover:shadow-lg hover:shadow-emerald-500/20">
            <h3 className="text-2xl md:text-3xl font-bold text-[oklch(0.95_0_0)] mb-3">
              Udemy – Full Stack Web Development Course
            </h3>
            <p className="text-emerald-400 mb-6 font-semibold">Instructor: Hitesh Choudhary</p>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-[oklch(0.85_0_0)] mb-4">Learned:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "HTML, CSS, JavaScript",
                  "React & Frontend Architecture",
                  "Node.js, Express",
                  "MongoDB",
                  "REST APIs",
                  "Full-Stack Application Development",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span>
                    <span className="text-[oklch(0.8_0_0)]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2
            style={{
              background: "linear-gradient(to right, rgb(52, 211, 153), rgb(34, 197, 226))",
              backgroundClip: "text",
              color: "transparent",
            }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            Tech Stack
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Frontend", items: ["React", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"] },
              { title: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"] },
              { title: "Database", items: ["MongoDB"] },
              { title: "Tools", items: ["Git", "GitHub", "Postman", "Vercel"] },
            ].map((category, index) => (
              <div
                key={index}
                className="backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 p-6 rounded-lg group hover:shadow-lg hover:shadow-emerald-500/20"
              >
                <h3 className="text-xl font-bold text-emerald-400 mb-4 group-hover:text-cyan-400 transition-colors">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-[oklch(0.8_0_0)] flex items-center gap-2 hover:text-emerald-400 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2
            style={{
              background: "linear-gradient(to right, rgb(52, 211, 153), rgb(34, 197, 226))",
              backgroundClip: "text",
              color: "transparent",
            }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            Projects
          </h2>

          <div className="backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 p-8 md:p-12 rounded-2xl hover:shadow-lg hover:shadow-emerald-500/20">
            <h3 className="text-2xl md:text-3xl font-bold text-[oklch(0.95_0_0)] mb-3">
              Smart Restaurant Management System
            </h3>
            <div className="inline-block px-3 py-1 bg-emerald-500/20 border border-emerald-400/30 rounded-full mb-6">
              <span className="text-emerald-400 text-sm font-semibold">In Development</span>
            </div>

            <p className="text-[oklch(0.85_0_0)] mb-6 text-lg">
              A MERN stack based restaurant platform to manage orders, billing, staff and analytics.
            </p>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-[oklch(0.85_0_0)] mb-4">Features:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Order Management",
                  "Billing System",
                  "Admin Dashboard",
                  "Staff Management",
                  "Secure Authentication",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-emerald-400">•</span>
                    <span className="text-[oklch(0.8_0_0)]">{feature}</span>
                  </div>
                ))}
              </ul>
            </div>

            <button className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 bg-gradient-to-r from-emerald-500 to-emerald-600 text-[oklch(0.08_0_0)] shadow-lg shadow-emerald-500/40 hover:shadow-emerald-500/60">
              GitHub Repository
            </button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
<section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-5xl mx-auto">
    <h2
      style={{
        background: "linear-gradient(to right, rgb(52, 211, 153), rgb(34, 197, 226))",
        backgroundClip: "text",
        color: "transparent",
      }}
      className="text-4xl md:text-5xl font-bold mb-12 text-center"
    >
      Projects
    </h2>

    {/* Project Card */}
    <div className="backdrop-blur-md bg-white/5 border border-white/10 p-8 md:p-12 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20">

      <h3 className="text-2xl md:text-3xl font-bold text-[oklch(0.95_0_0)] mb-3">
        Modern Admin Dashboard
      </h3>

      <div className="inline-block px-3 py-1 bg-emerald-500/20 border border-emerald-400/30 rounded-full mb-6">
        <span className="text-emerald-400 text-sm font-semibold">
          Next.js • Shadcn UI • Admin Panel
        </span>
      </div>

      <p className="text-[oklch(0.85_0_0)] mb-8 text-lg leading-relaxed">
        A fully responsive Admin Dashboard built using Next.js, Shadcn UI and Tailwind CSS.
        Includes analytics charts, project & task management, authentication, and light/dark theme.
      </p>

      {/* Screenshots */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        {[
  "/screenshots/dashboard-dark.png",
  "/screenshots/dashboard-light.png",
  "/screenshots/analytics.png",
  "/screenshots/reports.png",
]
.map((img, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl border border-white/10 group"
          >
            <img
              src={img}
              alt="Admin Dashboard Screenshot"
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-[oklch(0.85_0_0)] mb-4">
          Key Features:
        </h4>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            "Light & Dark Theme",
            "Analytics & Reports",
            "Admin Panel Management",
            "Authentication (Login/Register)",
            "Project & Task Management",
            "Responsive UI",
          ].map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="text-emerald-400">✔</span>
              <span className="text-[oklch(0.8_0_0)]">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
  <a
  href="https://github.com/arsh-ke/Next-Shadcn"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105 bg-gradient-to-r from-emerald-500 to-emerald-600 text-[oklch(0.08_0_0)] shadow-lg shadow-emerald-500/40 hover:shadow-emerald-500/60"
>
  GitHub Repository
</a>


        <a
          href="#"
          className="px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105 backdrop-blur-md bg-white/5 border border-white/10 text-[oklch(0.95_0_0)] hover:bg-white/10 hover:border-white/20"
        >
          Live Demo (Coming Soon)
        </a>
      </div>
    </div>
  </div>
</section>


      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2
            style={{
              background: "linear-gradient(to right, rgb(52, 211, 153), rgb(34, 197, 226))",
              backgroundClip: "text",
              color: "transparent",
            }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            Skills
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Frontend Development",
              "Backend Development",
              "Full-Stack Application Design",
              "API Development",
              "Authentication & Security",
              "Database Design",
              "Responsive UI",
              "Admin Dashboards",
            ].map((skill, index) => (
              <div
                key={index}
                className="backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 p-4 rounded-lg group hover:shadow-lg hover:shadow-emerald-500/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full group-hover:scale-150 transition-transform"></div>
                  <span className="text-[oklch(0.85_0_0)] font-semibold group-hover:text-emerald-400 transition-colors">
                    {skill}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2
            style={{
              background: "linear-gradient(to right, rgb(52, 211, 153), rgb(34, 197, 226))",
              backgroundClip: "text",
              color: "transparent",
            }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            Get in Touch
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "✉️",
                label: "Email",
                value: "kureshimohammadarsh@gmail.com",
                link: "mailto:Kureshimohammadarsh@gmail.com",
              },
              {
                icon: "💼",
                label: "LinkedIn",
                value: "linkedin.com/in/arsh",
                link: "https://www.linkedin.com/in/arsh-kureshi-934895373?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              },
              {
                icon: "🐙",
                label: "GitHub",
                value: "github.com/arsh",
                link: "https://github.com/arsh-ke",
              },
              {
                icon: "💬",
                label: "WhatsApp",
                value: "+91 7862878461",
                link: "https://wa.me/917862878461",
              },
            ].map((contact, index) => (
              <div
                key={index}
                className="backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 p-6 rounded-lg text-center group hover:shadow-lg hover:shadow-emerald-500/30"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {contact.icon}
                </div>

                <h3 className="text-emerald-400 font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  {contact.label}
                </h3>

                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[oklch(0.8_0_0)] text-sm group-hover:text-[oklch(0.9_0_0)] transition-colors hover:underline"
                >
                  {contact.value}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-[oklch(0.7_0_0)] text-sm">© 2026 Arsh Kureshi. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  )
}