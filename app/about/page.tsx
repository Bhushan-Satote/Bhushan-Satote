import { CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Download, Award, Users, Coffee, Code } from "lucide-react"

export default function AboutPage() {
  const skills = [
    { name: "JavaScript/TypeScript", level: 95 },
    { name: "React/Next.js", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "UI/UX Design", level: 75 },
    { name: "Mobile Development", level: 70 },
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
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-4xl sm:text-5xl font-bold">About Me</h1>
              <p className="text-lg text-muted-foreground">
                I'm a passionate full-stack developer with a love for creating beautiful, functional, and user-friendly
                applications. With over 5 years of experience in the industry, I've had the privilege of working with
                amazing clients and teams to bring ideas to life.
              </p>
              <p className="text-lg text-muted-foreground">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or enjoying a good cup of coffee while reading about the latest trends in web development.
              </p>
              <Button asChild className="hover:scale-105 transition-transform">
                <Link href="/contact">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
            </div>

            <div className="relative animate-slide-in-right">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="John Doe"
                width={500}
                height={600}
                className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary/30 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are the technologies and skills I've mastered over the years.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer hover:scale-105"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="space-y-4 mt-8">
                <h4 className="text-lg font-semibold">What I Do</h4>
                <div className="space-y-2">
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
                      className="flex items-center hover:text-primary transition-colors cursor-pointer"
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
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">Achievements</h2>
            <p className="text-lg text-muted-foreground">Some numbers that represent my journey so far.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="text-center hover:scale-105 transition-transform duration-300 hover:shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <achievement.icon className="h-8 w-8 text-primary mx-auto mb-4 hover:animate-bounce" />
                  <div className="text-3xl font-bold mb-2 text-primary">{achievement.number}</div>
                  <div className="text-sm text-muted-foreground">{achievement.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold">Beyond Code</h2>
            <p className="text-lg text-muted-foreground">
              While I love what I do professionally, I also have interests and hobbies that keep me balanced and
              inspired.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  icon: Code,
                  title: "Open Source",
                  description: "Contributing to open-source projects and sharing knowledge with the community.",
                },
                {
                  icon: Users,
                  title: "Mentoring",
                  description: "Helping aspiring developers learn and grow in their careers.",
                },
                {
                  icon: Coffee,
                  title: "Coffee Enthusiast",
                  description: "Exploring different coffee brewing methods and visiting local coffee shops.",
                },
              ].map((item, index) => (
                <Card
                  key={item.title}
                  className="space-y-4 text-center p-6 hover:scale-105 transition-transform duration-300 hover:shadow-lg"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto hover:bg-primary/20 transition-colors">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
