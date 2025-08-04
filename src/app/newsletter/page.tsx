"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, ChevronDown, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function NewsletterPage() {
  const [archiveExpanded, setArchiveExpanded] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-5">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-1">
              <Link href="/">
                <Image
                  src="/glass-house-logo.png"
                  alt="Glass House Recovery Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
              <Link href="/" className="text-2xl font-bold tracking-tighter">
                Glass House
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link href="/about" className="text-muted-foreground hover:text-foreground">About</Link>
              <Link href="/programs" className="text-muted-foreground hover:text-foreground">Programs</Link>
              <Link href="/admissions" className="text-muted-foreground hover:text-foreground">Admissions</Link>
              <Link href="/referrals" className="text-muted-foreground hover:text-foreground">Referrals</Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link>
              <Link href="/newsletter" className="text-foreground">Newsletter</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="py-8">
        <div className="container mx-auto px-5">
          {/* Collapsible Archive Sidebar - Absolute positioned */}
          <div className="absolute top-24 left-8 z-10">
            <button 
              onClick={() => setArchiveExpanded(!archiveExpanded)}
              className="flex items-center gap-2 text-sm font-medium hover:text-foreground transition-colors bg-background/80 backdrop-blur px-3 py-2 rounded"
            >
              {archiveExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              Archive
            </button>
            
            {archiveExpanded && (
              <div className="mt-2 space-y-2 text-sm bg-background/80 backdrop-blur p-3 rounded">
                <div className="text-muted-foreground">
                  <p className="font-medium">2025</p>
                  <div className="ml-2 space-y-1 mt-1">
                    <Link href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                      January
                    </Link>
                    <Link href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                      February
                    </Link>
                    <Link href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                      March
                    </Link>
                  </div>
                </div>
                <div className="text-muted-foreground mt-4">
                  <p className="font-medium">2024</p>
                  <div className="ml-2 space-y-1 mt-1">
                    <Link href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                      December
                    </Link>
                    <Link href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                      November
                    </Link>
                    <Link href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                      October
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* PDF Display - Full width centered */}
          <div className="w-full">
            <h2 className="text-2xl font-bold mb-4 text-center">Current Issue</h2>
            <div className="flex justify-center">
              <Image
                src="/gh-nl template.png"
                alt="Glass House Newsletter"
                width={1200}
                height={1500}
                className="w-full max-w-6xl h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-background">
        <div className="container mx-auto px-5">
          <div className="py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
              <div>
                <h3 className="font-bold mb-0">Glass House Recovery</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-6">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <div>
                        8318 Forrest St, Suite 100<br />
                        Ellicott City, MD 21043
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 flex-shrink-0" />
                      <div className="text-muted-foreground">
                        410.970.3374
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div></div>

              <div className="text-center">
                <Button className="mb-4" asChild>
                  <a href="/contact">SUBSCRIBE TO NEWSLETTER</a>
                </Button>
                <div className="flex justify-center space-x-4 text-sm">
                  <a href="https://www.facebook.com/glasshouserecovery/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                    Facebook
                  </a>
                  <a href="https://www.instagram.com/glasshouserecovery/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                    Instagram
                  </a>
                  <a href="https://www.linkedin.com/company/glasshouserecovery/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="py-3 relative text-center text-sm text-muted-foreground">
            <Link href="/privacy-policy" className="absolute left-0 hover:text-foreground">Privacy Policy</Link>
            <p>© 2025 Glass House</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 