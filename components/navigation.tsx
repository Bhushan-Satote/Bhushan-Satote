"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, Code2, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import { NeonText } from "@/components/animations/neon-text"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  // { name: "Services", href: "/services" },
  // { name: "Testimonials", href: "/testimonials" },
  { name: "Blog", href: "/blog" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 ease-out",
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border"
          : "bg-transparent",
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Code2 className="w-9 h-9 text-neon group-hover:text-neon-accent transition-colors duration-300" />
            </div>
            <div className="flex flex-col">
              <NeonText intensity="high" color="primary" className="text-2xl font-extrabold tracking-tight">
                Bhushan Satote
              </NeonText>
              <span className="text-xs text-neon-accent font-mono tracking-widest">IT Engineer</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 text-base font-semibold transition-all duration-300 rounded-lg group overflow-hidden active:scale-95 focus:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-neon/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  pathname === item.href
                    ? "text-neon scale-105"
                    : "text-text-secondary hover:text-neon hover:scale-105",
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">
                  {item.name}
                  <span className={cn(
                    "block h-0.5 bg-gradient-to-r from-neon via-neon-accent to-neon-secondary rounded transition-all duration-300 scale-x-0 group-hover:scale-x-100",
                    pathname === item.href && "scale-x-100"
                  )} />
                </span>
                {pathname === item.href && (
                  <div className="absolute inset-0 bg-gradient-to-r from-neon/20 via-neon-accent/20 to-neon-secondary/20 rounded-lg" />
                )}
                <div className="absolute inset-0 bg-neon/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            ))}

            {/* CTA Button */}
            <div className="ml-6 pl-6 border-l border-border">
              <Button
                asChild
                className="bg-gradient-to-r from-neon via-neon-accent to-neon-secondary text-background font-extrabold rounded-full px-8 py-2 text-base tracking-wide shadow-[0_0_24px_#00bfff55] hover:shadow-[0_0_36px_#00bfffcc] hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-neon/60"
              >
                <Link href="/contact">
                  <Zap className="w-5 h-5 mr-2" />
                  Hire Me
                </Link>
              </Button>
            </div>

            </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative text-neon hover:bg-neon/10 border border-neon/30 hover:border-neon transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,191,255,0.3)]"
                >
                  <div className="relative">
                    {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    <div className="absolute inset-0 bg-neon/20 rounded blur-sm" />
                  </div>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] bg-background/95 border-l border-neon/20 backdrop-blur-xl"
              >
                <div className="flex flex-col space-y-6 mt-8">
                  {/* Mobile Logo */}
                  <div className="flex items-center space-x-2 pb-4 border-b border-neon/20">
                    <Code2 className="w-6 h-6 text-neon" />
                    <div className="flex flex-col">
                    <NeonText intensity="high" color="primary" className="text-lg font-extrabold">
                    Bhushan Satote
                    </NeonText>
                    <span className="text-xs text-neon-accent font-mono tracking-widest">IT Engineer</span>
                    </div>
                  </div>

                  {/* Mobile Navigation Links */}
                  {navigation.map((item, index) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "relative px-4 py-3 text-lg font-medium transition-all duration-300 rounded-lg group active:scale-95 focus:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-neon/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                        pathname === item.href
                          ? "text-neon"
                          : "text-text-secondary hover:text-neon hover:translate-x-2",
                      )}
                      style={{
                        animationDelay: `${index * 0.1}s`,
                        animation: isOpen ? "slideInRight 0.3s ease-out forwards" : "none",
                      }}
                    >
                      <span className="relative z-10">{item.name}</span>
                      {pathname === item.href && (
                        <div className="absolute inset-0 bg-gradient-to-r from-neon/20 via-neon-accent/20 to-neon-secondary/20 rounded-lg" />
                      )}
                      <div className="absolute inset-0 bg-neon/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  ))}

                  {/* Mobile CTA */}
                  <div className="pt-4 border-t border-neon/20">
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-neon to-neon-accent hover:from-neon-accent hover:to-neon text-background font-semibold shadow-[0_0_20px_rgba(0,191,255,0.4)] hover:shadow-[0_0_30px_rgba(0,191,255,0.6)] transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href="/contact">
                        <Zap className="w-4 h-4 mr-2" />
                        Hire Me
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  )
}
