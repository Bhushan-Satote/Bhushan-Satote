import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Code, Palette, Smartphone, Database, Cloud, Users, CheckCircle, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with modern technologies and best practices.",
    features: [
      "Responsive design",
      "Performance optimization",
      "SEO-friendly",
      "Cross-browser compatibility",
      "Modern frameworks (React, Next.js, Vue)",
    ],
    price: "Starting at $2,500",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    features: [
      "React Native development",
      "Native iOS/Android",
      "App Store deployment",
      "Push notifications",
      "Offline functionality",
    ],
    price: "Starting at $5,000",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, user-centered designs that enhance user experience.",
    features: [
      "User research & analysis",
      "Wireframing & prototyping",
      "Visual design",
      "Design systems",
      "Usability testing",
    ],
    price: "Starting at $1,500",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Scalable server-side solutions and API development.",
    features: [
      "RESTful API development",
      "Database design",
      "Authentication & security",
      "Third-party integrations",
      "Performance optimization",
    ],
    price: "Starting at $3,000",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Cloud infrastructure setup and deployment services.",
    features: [
      "AWS/Azure/GCP deployment",
      "CI/CD pipeline setup",
      "Monitoring & logging",
      "Scalability planning",
      "Security implementation",
    ],
    price: "Starting at $2,000",
  },
  {
    icon: Users,
    title: "Consulting",
    description: "Technical consulting and code review services.",
    features: [
      "Architecture planning",
      "Code review & audit",
      "Performance analysis",
      "Technology selection",
      "Team mentoring",
    ],
    price: "$150/hour",
  },
]

const packages = [
  {
    name: "Starter",
    price: "$2,500",
    description: "Perfect for small businesses and personal projects",
    features: ["Responsive website", "Up to 5 pages", "Contact form", "Basic SEO", "30 days support"],
    popular: false,
  },
  {
    name: "Professional",
    price: "$5,000",
    description: "Ideal for growing businesses and e-commerce",
    features: [
      "Custom web application",
      "Database integration",
      "User authentication",
      "Admin dashboard",
      "Payment integration",
      "90 days support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large organizations",
    features: [
      "Full-stack application",
      "Microservices architecture",
      "Cloud deployment",
      "Advanced security",
      "Ongoing maintenance",
      "1 year support",
    ],
    popular: false,
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold">My Services</h1>
            <p className="text-lg text-muted-foreground">
              I offer a comprehensive range of development services to help bring your digital ideas to life. From
              concept to deployment, I've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t">
                    <div className="text-2xl font-bold text-primary mb-4">{service.price}</div>
                    <Button className="w-full" asChild>
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">Service Packages</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our pre-designed packages or let's create a custom solution that fits your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative h-full ${pkg.popular ? "border-primary shadow-lg scale-105" : ""}`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">Most Popular</Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                  <p className="text-muted-foreground">{pkg.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={pkg.popular ? "default" : "outline"} asChild>
                    <Link href="/contact">
                      Choose Plan
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">My Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here's how I work with clients to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your needs, goals, and requirements through detailed consultation.",
              },
              {
                step: "02",
                title: "Planning",
                description: "Creating a comprehensive project plan with timelines, milestones, and deliverables.",
              },
              {
                step: "03",
                title: "Development",
                description: "Building your solution using best practices and keeping you updated throughout.",
              },
              {
                step: "04",
                title: "Delivery",
                description: "Testing, deployment, and handover with documentation and ongoing support.",
              },
            ].map((process, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">Ready to Get Started?</h2>
            <p className="text-lg opacity-90">
              Let's discuss your project and see how I can help you achieve your goals. I offer free consultations to
              understand your needs better.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
