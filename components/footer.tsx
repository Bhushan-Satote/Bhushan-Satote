import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { NeonText } from "@/components/animations/neon-text"

export function Footer() {
  return (
    <footer className="bg-black border-t border-[#222222]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              <NeonText>John Doe</NeonText>
            </h3>
            <p className="text-sm text-[#B3B3B3]">
              Full-stack developer creating amazing digital experiences with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-[#B3B3B3] hover:text-[#00FF9C] transition-colors duration-300 hover:drop-shadow-[0_0_5px_#00FF9C]"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-[#B3B3B3] hover:text-[#00FF9C] transition-colors duration-300 hover:drop-shadow-[0_0_5px_#00FF9C]"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-[#B3B3B3] hover:text-[#00FF9C] transition-colors duration-300 hover:drop-shadow-[0_0_5px_#00FF9C]"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-[#B3B3B3] hover:text-[#00FF9C] transition-colors duration-300 hover:drop-shadow-[0_0_5px_#00FF9C]"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-[#B3B3B3] hover:text-[#00FF9C] transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#B3B3B3] hover:text-[#00FF9C] transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-[#B3B3B3] hover:text-[#00FF9C] transition-colors duration-300">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#B3B3B3] hover:text-[#00FF9C] transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-[#B3B3B3]">Web Development</li>
              <li className="text-[#B3B3B3]">UI/UX Design</li>
              <li className="text-[#B3B3B3]">Mobile Apps</li>
              <li className="text-[#B3B3B3]">Consulting</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white">Contact</h4>
            <ul className="space-y-2 text-sm text-[#B3B3B3]">
              <li>john@example.com</li>
              <li>+1 (555) 123-4567</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>

        <div className="neon-divider my-8" />

        <div className="text-center text-sm text-[#B3B3B3]">
          <p>
            &copy; {new Date().getFullYear()} John Doe. All rights reserved. Built with{" "}
            <NeonText intensity="low">passion</NeonText> and <NeonText intensity="low">code</NeonText>.
          </p>
        </div>
      </div>
    </footer>
  )
}
