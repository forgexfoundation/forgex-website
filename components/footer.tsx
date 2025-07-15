import Link from "next/link";
import { Github, Mail, Twitter, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="ForgeX Logo"
                width={110}
                height={110}
                className="rounded-full"
              />
              {/* Optional: Add text beside logo if needed */}
              {/* <span className="font-bold text-xl">ForgeX Foundation</span> */}
            </Link>
            <p className="text-base text-muted-foreground leading-relaxed max-w-sm">
              Empowering developers through open-source innovation and community collaboration.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-base text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/docs" className="block text-base text-muted-foreground hover:text-primary transition-colors">
                Documentation
              </Link>
              <Link href="/projects" className="block text-base text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="/events" className="block text-base text-muted-foreground hover:text-primary transition-colors">
                Events
              </Link>

            </div>
          </div>

          {/* Community */}
          <div className="space-y-5">
            <h3 className="font-semibold text-lg">Community</h3>
            <div className="space-y-2">
              <Link href="/contribute" className="block text-base text-muted-foreground hover:text-primary transition-colors">
                Contribute
              </Link>
              <Link
                href="https://github.com/forgexfoundation"
                target="_blank"
                className="block text-base text-muted-foreground hover:text-primary transition-colors"
              >
                GitHub
              </Link>
              <Link href="https://discord.gg/VwxdQxEqcw" className="block text-base text-muted-foreground hover:text-primary transition-colors">
                Discord
              </Link>

              <Link href="/contact" className="block text-base text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-5">
            <h3 className="font-semibold text-lg">Connect</h3>
            <div className="flex space-x-5">
              <Link
                href="https://github.com/forgexfoundation"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://x.com/forgexorg"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/forgexfoundation"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
                <Link
                href="https://www.instagram.com/forgexfoundation"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link 
                href="https://discord.gg/VwxdQxEqcw"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Image
                  src="/discord.svg"
                  alt="Discord"
                  width={24}
                  height={24}
                  className="h-6 w-6 hover:text-primary transition-colors"
                />
                <span className="sr-only">Discord</span>
               
                
                
              </Link>
            
              <Link
                href="mailto:forgexfoundation@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <p className="text-base text-muted-foreground">
            © {new Date().getFullYear()} ForgeX Foundation. All rights reserved.
          </p>
          <p className="text-base text-muted-foreground mt-2 sm:mt-0">
            Licensed under{" "}
            <Link
              href="https://opensource.org/licenses/MIT"
              target="_blank"
              className="hover:text-primary transition-colors"
            >
              MIT License
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
