"use client"

import { useState } from "react"
import { CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, Filter } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform built with React and Node.js",
    longDescription:
      "This comprehensive e-commerce platform features user authentication, product catalog, shopping cart, payment processing, and admin dashboard. Built with modern technologies for optimal performance and user experience.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Web Development",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication",
    longDescription:
      "A secure mobile banking application featuring biometric authentication, account management, transaction history, bill payments, and real-time notifications. Built with React Native for cross-platform compatibility.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Mobile Development",
    tags: ["React Native", "Firebase", "TypeScript", "Biometrics"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "SaaS Dashboard",
    description: "Analytics dashboard for SaaS companies",
    longDescription:
      "A comprehensive analytics dashboard for SaaS companies featuring real-time data visualization, user management, subscription tracking, and detailed reporting. Built with Next.js and PostgreSQL.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Web Development",
    tags: ["Next.js", "PostgreSQL", "Tailwind", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Task Management App",
    description: "Collaborative task management application",
    longDescription:
      "A collaborative task management application with team collaboration features, project tracking, deadline management, and real-time updates. Perfect for remote teams and project management.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Web Development",
    tags: ["Vue.js", "Express", "Socket.io", "MySQL"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Modern portfolio website with dark mode",
    longDescription:
      "A modern, responsive portfolio website featuring dark mode toggle, smooth animations, contact form, and blog functionality. Built with Next.js and Tailwind CSS for optimal performance.",
    image: "/placeholder.svg?height=400&width=600",
    category: "UI/UX Design",
    tags: ["Next.js", "Tailwind", "Framer Motion", "MDX"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Weather App",
    description: "Beautiful weather application with forecasts",
    longDescription:
      "A beautiful weather application providing current weather conditions, 7-day forecasts, weather maps, and location-based services. Features a clean, intuitive interface with smooth animations.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Mobile Development",
    tags: ["React Native", "Weather API", "Maps", "Animations"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
]

const categories = ["All", "Web Development", "Mobile Development", "UI/UX Design"]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl font-bold">My Portfolio</h1>
            <p className="text-lg text-muted-foreground">
              A collection of projects that showcase my skills and passion for creating exceptional digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="flex items-center gap-2 hover:scale-105 transition-transform duration-200"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Filter className="h-4 w-4" />
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="group hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {project.featured && <Badge className="absolute top-4 left-4 animate-pulse">Featured</Badge>}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex gap-2">
                      <Button size="sm" variant="secondary" className="hover:scale-110 transition-transform" asChild>
                        <Link href={project.liveUrl}>
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button size="sm" variant="secondary" className="hover:scale-110 transition-transform" asChild>
                        <Link href={project.githubUrl}>
                          <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer hover:scale-105"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="sm" className="w-full hover:scale-105 transition-transform">
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>{project.title}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6">
                          <div className="relative overflow-hidden rounded-lg">
                            <Image
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              width={800}
                              height={400}
                              className="w-full rounded-lg hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <p className="text-muted-foreground">{project.longDescription}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <Badge
                                key={tag}
                                variant="secondary"
                                className="hover:bg-primary hover:text-primary-foreground transition-colors"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex gap-4">
                            <Button className="hover:scale-105 transition-transform" asChild>
                              <Link href={project.liveUrl}>
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Live Demo
                              </Link>
                            </Button>
                            <Button
                              variant="outline"
                              className="hover:scale-105 transition-transform bg-transparent"
                              asChild
                            >
                              <Link href={project.githubUrl}>
                                <Github className="mr-2 h-4 w-4" />
                                Source Code
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold">Like What You See?</h2>
            <p className="text-lg text-muted-foreground">
              I'm always excited to work on new projects and bring creative ideas to life. Let's discuss how we can work
              together.
            </p>
            <Button size="lg" className="hover:scale-105 transition-transform" asChild>
              <Link href="/contact">Start a Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
