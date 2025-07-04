"use client";
import { CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Code,
  Palette,
  Smartphone,
  Star,
  Sparkles,
  Zap,
  Download,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
} from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { RadialGlow } from "@/components/animations/radial-glow"
import { NeonText } from "@/components/animations/neon-text"
import { NeonButton } from "@/components/ui/neon-button"
import { NeonCard } from "@/components/ui/neon-card"
import { EnhancedTypewriter } from "@/components/ui/enhanced-typewriter"
import { EnhancedMatrix } from "@/components/animations/enhanced-matrix"
import { DeveloperAvatar } from "@/components/ui/developer-avatar"

export default function HomePage() {
  const featuredProjects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Full-featured e-commerce solution with advanced analytics and payment integration",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication and real-time transactions",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["React Native", "Firebase", "TypeScript", "Biometrics"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "SaaS Dashboard",
      description: "Comprehensive analytics dashboard with real-time data visualization and reporting",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["Next.js", "PostgreSQL", "Tailwind", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  const skills = [
    { name: "Frontend Development", level: 95, icon: Code },
    { name: "Backend Development", level: 90, icon: Zap },
    { name: "UI/UX Design", level: 85, icon: Palette },
    { name: "Mobile Development", level: 80, icon: Smartphone },
  ]

  const stats = [
    { number: "50+", label: "Projects Completed", icon: Star },
    { number: "30+", label: "Happy Clients", icon: Sparkles },
    { number: "5+", label: "Years Experience", icon: Code },
    { number: "99%", label: "Client Satisfaction", icon: Zap },
  ]

  const typewriterTexts = ["Full-Stack Developer", "UI/UX Designer", "Mobile App Creator", "Problem Solver"]

  return (
    <div className="pt-16 overflow-hidden relative">
      {/* Enhanced Matrix Rain Background */}
      <EnhancedMatrix showWaves showGlitches interactive={false} theme="blue" className="opacity-15" />

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
        <RadialGlow intensity="high" className="absolute inset-0" />
        <div className="absolute inset-0 grid-pattern opacity-20" />        

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 lg:pr-8">
              <FadeIn delay={0.2}>
                <Badge
                  variant="outline"
                  className="mb-6 border-neon text-neon bg-transparent hover:bg-neon-overlay neon-pulse px-4 py-2"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Available for new projects
                </Badge>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="space-y-4">
                  <p className="text-neon text-lg font-mono tracking-wide">Hello, I'm</p>
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                    <span className="text-white">Bhushan </span>{""}
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                       Satote
                    </span>
                  </h1>
                  <div className="text-xl sm:text-2xl text-text-secondary font-medium h-16 flex items-center">
                    <EnhancedTypewriter
                      texts={typewriterTexts}
                      className="font-semibold"
                      staticText=""
                      staticTextPosition="after"
                    />
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
                  Experienced in <span className="text-neon font-semibold">React Development</span> and{" "}
                  <span className="text-neon-accent font-semibold">Full-Stack Solutions</span>, specializing in modern
                  web technologies, mobile applications, and user experience design. Currently building amazing digital
                  experiences with cutting-edge technology.
                </p>
              </FadeIn>

              <FadeIn delay={0.6}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <NeonButton size="lg" variant="outline" glowIntensity="medium" asChild>
                    <Link href="/contact" className="flex items-center justify-center">
                      Contact Me
                    </Link>
                  </NeonButton>
                  <NeonButton size="lg" variant="filled" glowIntensity="high" asChild>
                    <Link href="/portfolio" className="flex items-center justify-center">
                      View Work
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </NeonButton>
                </div>
              </FadeIn>

              {/* Social Links */}
              <FadeIn delay={0.7}>
                <div className="flex items-center space-x-6 pt-4">
                  <span className="text-text-secondary text-sm">Follow me:</span>
                  <div className="flex space-x-4">
                    <Link
                      href="#"
                      className="text-text-secondary hover:text-neon transition-colors duration-300 hover:scale-110 transform"
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                    <Link
                      href="#"
                      className="text-text-secondary hover:text-neon transition-colors duration-300 hover:scale-110 transform"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Link>
                    <Link
                      href="#"
                      className="text-text-secondary hover:text-neon transition-colors duration-300 hover:scale-110 transform"
                    >
                      <Mail className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Avatar Removed */}
          </div>
        </div>
      </section>

    
      {/* Featured Projects */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Featured <NeonText color="primary">Projects</NeonText>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and expertise
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.2}>
            {featuredProjects.map((project) => (
              <NeonCard key={project.id} intensity="high" className="group overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                  <div className="absolute inset-0 bg-neon-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Project Links Overlay */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                      href={project.liveUrl}
                      className="p-2 bg-background/80 backdrop-blur-sm rounded-full border border-neon/30 hover:border-neon transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 text-neon" />
                    </Link>
                    <Link
                      href={project.githubUrl}
                      className="p-2 bg-background/80 backdrop-blur-sm rounded-full border border-neon/30 hover:border-neon transition-colors"
                    >
                      <Github className="h-4 w-4 text-neon" />
                    </Link>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-neon transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-divider text-text-secondary hover:border-neon hover:text-neon transition-colors text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </NeonCard>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.5} className="text-center mt-12">
            <NeonButton size="lg" variant="filled" glowIntensity="high" asChild>
              <Link href="/portfolio">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </NeonButton>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <RadialGlow intensity="high" className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeIn className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
              Ready to Start Your Next{" "}
              <NeonText >
              Amazing Project
              </NeonText>
              ?
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed">
              Let's work together to bring your ideas to life. I'm always excited to take on new challenges and create
              something extraordinary that makes a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NeonButton size="lg" variant="filled" glowIntensity="high" asChild>
                <Link href="/contact">
                  <Zap className="mr-2 h-5 w-5" />
                  Start Your Project
                </Link>
              </NeonButton>
              <NeonButton size="lg" variant="outline" glowIntensity="medium" asChild>
                <Link href="/about">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Link>
              </NeonButton>
            </div>
          </FadeIn>
        </div>

        {/* Animated Background Circles */}
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <div className="absolute left-[10%] top-[20%] w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl animate-bg-circle-1" />
          <div className="absolute right-[15%] top-[30%] w-40 h-40 bg-blue-500/20 rounded-full blur-2xl animate-bg-circle-2" />
          <div className="absolute left-[30%] bottom-[15%] w-24 h-24 bg-purple-500/20 rounded-full blur-2xl animate-bg-circle-3" />
          <div className="absolute right-[25%] bottom-[20%] w-28 h-28 bg-neon-accent/20 rounded-full blur-2xl animate-bg-circle-4" />
        </div>
      </section>
    </div>
  )
}
