"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc.",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "John delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise are outstanding. The project was completed on time and within budget.",
    project: "E-commerce Platform",
    featured: true,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager",
    company: "InnovateLab",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "Working with John was a fantastic experience. He understood our complex requirements and delivered a mobile app that our users love. His communication throughout the project was excellent.",
    project: "Mobile Banking App",
    featured: true,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "GrowthCo",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "John created a beautiful and functional website for our company. The design is modern, responsive, and perfectly captures our brand. We've seen a significant increase in conversions.",
    project: "Corporate Website",
    featured: false,
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Founder",
    company: "StartupXYZ",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "John's expertise in full-stack development helped us launch our SaaS platform successfully. His code quality is excellent, and he provided valuable insights throughout the development process.",
    project: "SaaS Dashboard",
    featured: false,
  },
  {
    id: 5,
    name: "Lisa Wang",
    role: "CTO",
    company: "DataFlow Systems",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "John is a reliable and skilled developer who consistently delivers high-quality work. His problem-solving abilities and technical knowledge make him an invaluable partner for any project.",
    project: "Data Analytics Platform",
    featured: false,
  },
  {
    id: 6,
    name: "Robert Kim",
    role: "Operations Manager",
    company: "LogiTech Solutions",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "The task management application John built for us has transformed how our team collaborates. It's intuitive, feature-rich, and has significantly improved our productivity.",
    project: "Task Management App",
    featured: false,
  },
]

const stats = [
  { number: "50+", label: "Happy Clients" },
  { number: "100+", label: "Projects Completed" },
  { number: "5.0", label: "Average Rating" },
  { number: "99%", label: "Client Satisfaction" },
]

export default function TestimonialsPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const featuredTestimonials = testimonials.filter((t) => t.featured)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredTestimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredTestimonials.length) % featuredTestimonials.length)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
    ))
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold">Client Testimonials</h1>
            <p className="text-lg text-muted-foreground">
              Don't just take my word for it. Here's what my clients have to say about working with me and the results
              we've achieved together.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials Carousel */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">Featured Reviews</h2>
            <p className="text-lg text-muted-foreground">
              Highlighted testimonials from some of my most valued clients.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Card className="p-8 md:p-12">
              <CardContent className="text-center space-y-6">
                <Quote className="h-12 w-12 text-primary mx-auto opacity-50" />

                <div className="flex justify-center mb-4">
                  {renderStars(featuredTestimonials[currentIndex]?.rating || 5)}
                </div>

                <blockquote className="text-lg md:text-xl text-muted-foreground italic leading-relaxed">
                  "{featuredTestimonials[currentIndex]?.text}"
                </blockquote>

                <div className="flex items-center justify-center space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage
                      src={featuredTestimonials[currentIndex]?.image || "/placeholder.svg"}
                      alt={featuredTestimonials[currentIndex]?.name}
                    />
                    <AvatarFallback>
                      {featuredTestimonials[currentIndex]?.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <div className="font-semibold">{featuredTestimonials[currentIndex]?.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {featuredTestimonials[currentIndex]?.role} at {featuredTestimonials[currentIndex]?.company}
                    </div>
                    <Badge variant="secondary" className="mt-1">
                      {featuredTestimonials[currentIndex]?.project}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-transparent"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {featuredTestimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-muted"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">All Reviews</h2>
            <p className="text-lg text-muted-foreground">
              Read what all my clients have to say about their experience working with me.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="flex">{renderStars(testimonial.rating)}</div>
                    <Badge variant="outline">{testimonial.project}</Badge>
                  </div>

                  <blockquote className="text-muted-foreground italic">"{testimonial.text}"</blockquote>

                  <div className="flex items-center space-x-3 pt-4 border-t">
                    <Avatar>
                      <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">Ready to Join My Happy Clients?</h2>
            <p className="text-lg text-muted-foreground">
              Let's work together to create something amazing. I'm committed to delivering the same level of excellence
              that my clients rave about.
            </p>
            <Button size="lg" asChild>
              <a href="/contact">Start Your Project</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
