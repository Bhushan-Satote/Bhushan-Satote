import { CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Download, Award, Users, Coffee, Code } from "lucide-react"

export default function AboutPage() {
  const skills = [
    { name: "Frontend Development", level: 95, icon: "🖥️", desc: "Building responsive, modern UIs with React, Next.js, and TypeScript." },
    { name: "Backend Development", level: 90, icon: "🗄️", desc: "Designing robust APIs and server logic with Node.js, Express, and Python." },
    { name: "UI/UX Design", level: 85, icon: "🎨", desc: "Crafting intuitive, user-centered designs and prototypes." },
    { name: "Mobile Development", level: 80, icon: "📱", desc: "Creating cross-platform mobile apps with React Native." },
    { name: "DevOps & Cloud", level: 75, icon: "☁️", desc: "Deploying and managing apps with Docker, AWS, and CI/CD pipelines." },
  ]

  const technologies = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Git",
    "Figma",
  ]

  const achievements = [
    { icon: Award, number: "50+", label: "Projects Completed" },
    { icon: Users, number: "30+", label: "Happy Clients" },
    { icon: Coffee, number: "1000+", label: "Cups of Coffee" },
    { icon: Code, number: "5+", label: "Years Experience" },
  ]

  return (
    <div className="pt-16 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary/20 rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-6 h-6 bg-secondary/30 rounded-full animate-bounce" />
      <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-accent/40 rounded-full animate-pulse" />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
        {/* Decorative blurred background accent */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 rounded-full blur-3xl opacity-40 z-0" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8 animate-fade-in-up">
              <span className="inline-block px-4 py-1 bg-primary/20 text-primary font-semibold rounded-full text-sm tracking-wide mb-2 shadow-sm">
                Get to Know Me
              </span>
              <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-foreground drop-shadow-lg">
                Hi, I'm Bhushan Satote
              </h1>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl sm:text-2xl font-medium text-primary">
                  <span className="animate-pulse">Full-Stack Developer</span>
                </span>
                <span className="hidden sm:inline-block text-lg text-accent font-mono bg-accent/10 px-2 py-1 rounded ml-2 animate-fade-in">
                  &amp; Tech Enthusiast
                </span>
              </div>
              <p className="text-lg text-muted-foreground max-w-xl">
                I craft beautiful, functional, and user-friendly applications. With 1.5+ years of experience, I've helped clients and teams bring their ideas to life through modern web and mobile solutions.
              </p>
              
              <p className="text-base text-muted-foreground max-w-lg">
                When I'm not coding, you'll find me exploring new tech, contributing to open source, or enjoying a great cup of coffee while reading about the latest in web development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button asChild size="lg" className="shadow-md hover:scale-105 transition-transform">
                  <Link href="/contact">
                    <Download className="mr-2 h-5 w-5" />
                    Contact Me
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="shadow-md hover:scale-105 transition-transform">
                  <Link href="/about">
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </Link>
                </Button>
              </div>
            </div>
            {/* Right: Image Content */}
            <div className="relative flex justify-center lg:justify-end animate-slide-in-right">
              <div className="relative w-[180px] h-[220px] sm:w-[220px] sm:h-[270px] md:w-[250px] md:h-[300px] lg:w-[300px] lg:h-[360px]">
                <Image
                  src="/aboutImg.png"
                  alt="Bhushan Satote"
                  fill
                  className="rounded-2xl shadow-2xl border-4 border-primary/30 object-cover hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
              {/* Decorative dots and shapes */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary/30 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-gradient-to-br from-background to-muted/40 relative overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute left-1/3 top-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30" />
          <div className="absolute right-1/4 bottom-0 w-80 h-80 bg-secondary/10 rounded-full blur-2xl opacity-20" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-2">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Skills &amp; Expertise</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are the technologies and skills I've mastered over the years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Technical Skills Section */}
            <div className="bg-white/10 rounded-2xl p-8 shadow-xl border border-primary/20 flex flex-col items-center hover:shadow-2xl transition-all duration-300 group">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🛠️</span>
                <h3 className="text-2xl font-semibold">Technical Skills</h3>
              </div>
              <div className="w-full space-y-7">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="flex flex-col gap-1 group-hover:scale-[1.03] transition-transform duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-lg font-bold shadow-sm">
                        {skill.name === 'JavaScript/TypeScript' && '🟨'}
                        {skill.name === 'React/Next.js' && '⚛️'}
                        {skill.name === 'Node.js' && '🟩'}
                        {skill.name === 'Python' && '🐍'}
                        {skill.name === 'UI/UX Design' && '🎨'}
                        {skill.name === 'Mobile Development' && '📱'}
                      </span>
                      <span className="font-semibold text-foreground text-base">{skill.name}</span>
                      <span className="ml-auto text-primary font-mono text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3 overflow-hidden shadow-inner">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out animate-pulse shadow-lg"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Section */}
            <div className="bg-white/10 rounded-2xl p-8 shadow-xl border border-secondary/20 flex flex-col items-center hover:shadow-2xl transition-all duration-300 group">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">💻</span>
                <h3 className="text-2xl font-semibold">Technologies</h3>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {technologies.map((tech, index) => (
                  <span
                    key={tech}
                    className="px-4 py-1 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 text-primary font-semibold text-xs shadow hover:scale-105 transition-all duration-300 border border-primary/10"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* What I Do Section */}
            <div className="bg-white/10 rounded-2xl p-8 shadow-xl border border-accent/20 flex flex-col items-center hover:shadow-2xl transition-all duration-300 group">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🚀</span>
                <h3 className="text-2xl font-semibold">What I Do</h3>
              </div>
              <div className="space-y-3 w-full">
                {[
                  "Full-stack web application development",
                  "Mobile app development (React Native)",
                  "UI/UX design and prototyping",
                  "Database design and optimization",
                  "API development and integration",
                  "Performance optimization and testing",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center hover:text-primary transition-colors cursor-pointer group-hover:scale-[1.03]"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></span>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16 bg-gradient-to-br from-muted/40 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">My Journey</span>
            </h2>
          </div>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/30 to-secondary/30 rounded-full z-0" />
            <ol className="relative z-10 space-y-10 ml-12">
              <li className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <span className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-lg font-bold shadow border-2 border-background">2018</span>
                  <span className="h-full w-1 bg-blue-400/20 block" />
                </div>
                <div className="bg-white/10 rounded-lg p-4 shadow border border-blue-400/20 w-full">
                  <h3 className="text-base font-semibold text-blue-500 mb-1">Started as a Junior Developer</h3>
                  <p className="text-muted-foreground text-xs">Learned core programming and clean code. Built a strong web foundation.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <span className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white text-lg font-bold shadow border-2 border-background">2020</span>
                  <span className="h-full w-1 bg-secondary/20 block" />
                </div>
                <div className="bg-white/10 rounded-lg p-4 shadow border border-secondary/20 w-full">
                  <h3 className="text-base font-semibold text-secondary mb-1">Full-Stack Developer</h3>
                  <p className="text-muted-foreground text-xs">Built scalable apps, automated workflows, and improved efficiency.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white text-lg font-bold shadow border-2 border-background">2022</span>
                </div>
                <div className="bg-white/10 rounded-lg p-4 shadow border border-accent/20 w-full">
                  <h3 className="text-base font-semibold text-accent mb-1">Lead Developer</h3>
                  <p className="text-muted-foreground text-xs">Led teams, introduced CI/CD, and focused on productivity.</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      
    </div>
  )
}
