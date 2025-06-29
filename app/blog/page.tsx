import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications with Next.js",
    excerpt:
      "Learn how to create performant and scalable React applications using Next.js, including best practices for routing, data fetching, and optimization.",
    content: "Full article content would go here...",
    image: "/placeholder.svg?height=300&width=500",
    author: "John Doe",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Web Development",
    tags: ["React", "Next.js", "JavaScript", "Performance"],
    featured: true,
  },
  {
    id: 2,
    title: "The Future of Mobile Development: React Native vs Flutter",
    excerpt:
      "A comprehensive comparison of React Native and Flutter, exploring their strengths, weaknesses, and use cases for modern mobile app development.",
    content: "Full article content would go here...",
    image: "/placeholder.svg?height=300&width=500",
    author: "John Doe",
    date: "2024-01-10",
    readTime: "12 min read",
    category: "Mobile Development",
    tags: ["React Native", "Flutter", "Mobile", "Cross-platform"],
    featured: false,
  },
  {
    id: 3,
    title: "Mastering CSS Grid and Flexbox for Modern Layouts",
    excerpt:
      "Deep dive into CSS Grid and Flexbox, learning when to use each layout method and how to create responsive, modern web layouts.",
    content: "Full article content would go here...",
    image: "/placeholder.svg?height=300&width=500",
    author: "John Doe",
    date: "2024-01-05",
    readTime: "10 min read",
    category: "CSS",
    tags: ["CSS", "Grid", "Flexbox", "Responsive Design"],
    featured: false,
  },
  {
    id: 4,
    title: "Database Design Best Practices for Web Applications",
    excerpt:
      "Essential database design principles and best practices for building efficient, scalable web applications with proper data modeling.",
    content: "Full article content would go here...",
    image: "/placeholder.svg?height=300&width=500",
    author: "John Doe",
    date: "2023-12-28",
    readTime: "15 min read",
    category: "Backend",
    tags: ["Database", "SQL", "Design Patterns", "Performance"],
    featured: false,
  },
  {
    id: 5,
    title: "Introduction to TypeScript for JavaScript Developers",
    excerpt:
      "Get started with TypeScript and learn how it can improve your JavaScript development workflow with static typing and better tooling.",
    content: "Full article content would go here...",
    image: "/placeholder.svg?height=300&width=500",
    author: "John Doe",
    date: "2023-12-20",
    readTime: "6 min read",
    category: "JavaScript",
    tags: ["TypeScript", "JavaScript", "Development", "Tools"],
    featured: false,
  },
  {
    id: 6,
    title: "Optimizing Web Performance: A Complete Guide",
    excerpt:
      "Learn essential techniques for optimizing web performance, including image optimization, code splitting, caching strategies, and more.",
    content: "Full article content would go here...",
    image: "/placeholder.svg?height=300&width=500",
    author: "John Doe",
    date: "2023-12-15",
    readTime: "14 min read",
    category: "Performance",
    tags: ["Performance", "Optimization", "Web Vitals", "SEO"],
    featured: true,
  },
]

const categories = ["All", "Web Development", "Mobile Development", "CSS", "Backend", "JavaScript", "Performance"]

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const recentPosts = blogPosts.filter((post) => !post.featured).slice(0, 5)

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold">Blog</h1>
            <p className="text-lg text-muted-foreground">
              Insights, tutorials, and thoughts on web development, technology trends, and best practices from my
              experience in the field.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold">Featured Article</h2>
            </div>

            <Card className="overflow-hidden max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 left-4">Featured</Badge>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="space-y-4">
                    <Badge variant="secondary">{featuredPost.category}</Badge>
                    <h3 className="text-2xl font-bold">{featuredPost.title}</h3>
                    <p className="text-muted-foreground">{featuredPost.excerpt}</p>

                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>

                    <Button asChild>
                      <Link href={`/blog/${featuredPost.id}`}>
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Recent Posts */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">Recent Articles</h2>
            <p className="text-lg text-muted-foreground">Latest insights and tutorials from my development journey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-shadow">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <Badge variant="secondary">{post.category}</Badge>
                    <h3 className="text-xl font-semibold line-clamp-2">{post.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
                      <Link href={`/blog/${post.id}`}>Read More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">Browse by Category</h2>
            <p className="text-lg text-muted-foreground">Explore articles organized by topic and technology.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button key={category} variant="outline" asChild>
                <Link href={`/blog/category/${category.toLowerCase().replace(" ", "-")}`}>{category}</Link>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">Stay Updated</h2>
            <p className="text-lg opacity-90">
              Subscribe to my newsletter to get the latest articles and insights delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md text-foreground"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
