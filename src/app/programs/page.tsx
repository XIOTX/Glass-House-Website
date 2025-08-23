'use client'

import { Button } from "@/components/ui/button"
import { Phone, MapPin, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function ProgramsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur sticky top-0 z-50">
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
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link href="/about" className="text-muted-foreground hover:text-foreground">About</Link>
              <Link href="/programs" className="text-foreground">Programs</Link>
              <Link href="/admissions" className="text-muted-foreground hover:text-foreground">Admissions</Link>
              <Link href="/referrals" className="text-muted-foreground hover:text-foreground">Referrals</Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link>
              <Link href="/newsletter" className="text-muted-foreground hover:text-foreground">Newsletter</Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-accent"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur border-t border-border z-50">
              <nav className="container mx-auto px-5 py-4">
                <div className="flex flex-col space-y-4">
                  <Link 
                    href="/about" 
                    className="text-foreground hover:text-primary py-2 px-4 rounded-md hover:bg-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link 
                    href="/programs" 
                    className="text-primary py-2 px-4 rounded-md bg-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Programs
                  </Link>
                  <Link 
                    href="/admissions" 
                    className="text-foreground hover:text-primary py-2 px-4 rounded-md hover:bg-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Admissions
                  </Link>
                  <Link 
                    href="/referrals" 
                    className="text-foreground hover:text-primary py-2 px-4 rounded-md hover:bg-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Referrals
                  </Link>
                  <Link 
                    href="/contact" 
                    className="text-foreground hover:text-primary py-2 px-4 rounded-md hover:bg-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  <Link 
                    href="/newsletter" 
                    className="text-foreground hover:text-primary py-2 px-4 rounded-md hover:bg-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Newsletter
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main>
        {/* Hero Section with Background and Text Inside */}
        <section className="container mx-auto px-5">
          <div className="mb-8 md:mb-16 mt-8">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://ext.same-assets.com/2654951941/3166330094.jpeg"
                alt="Creative therapy programs Baltimore - A new way of life at Glass House Recovery"
                fill
                className="object-cover filter grayscale"
                priority
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 bg-green-500/8" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4 max-w-4xl">
                  <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
                    A NEW WAY OF LIFE
                  </h1>
                  <p className="text-xl md:text-2xl leading-relaxed font-semibold">
                    Glass House Recovery provides programs for many levels of care to help create a new path forward.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PHP Program Section */}
        <section className="bg-muted/50 py-20">
          <div className="container mx-auto px-5">
            <div className="max-w-6xl mx-auto text-center">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                  Full-day Partial Hospitalization Program (PHP)
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
                  <div className="space-y-6 text-center">
                    <p className="text-lg leading-relaxed font-semibold">
                      PHP is a more intensive experience than our IOP groups and is geared towards people needing a more immersive experience.
                    </p>

                    <p className="text-lg leading-relaxed font-semibold">
                      Members of the PHP groups spend 6 hours a day engaged in groups and individual activities. Our PHP runs Monday to Friday.
                    </p>

                    <p className="text-lg leading-relaxed text-muted-foreground">
                      For individuals seeking a safe, stable sober living environment while they attend PHP, Glass House works with housing partners in the area to ensure a healthy residence is available close to the facility. We are able to assist patients relocating back to the area after an inpatient, residential program, or for those need a supportive living environment.
                    </p>
                  </div>

                  <div className="space-y-6 text-center">
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      For those that need a higher level of support, we offer a dynamic, comprehensive, and all-encompassing partial hospitalization program. While our content is rooted in evidence-based practices, we cut away the redundant and boring artifacts of the treatment of yesterday and put a fresh spin on the recovery process that we are confident you will find engaging, transforming, and life-altering.
                    </p>

                    <p className="text-lg leading-relaxed text-muted-foreground">
                      Subjects explored include Honesty in Practice, Lonely in a Crowded Room (dealing with isolation and social anxiety), First Rate Madness (examining iconic figures from history with mental health and drug issues), Addiction Roulette (understanding why drugs and other things are attractive despite their consequences), as well as issues related to self-harm, suicidal ideation, coping mechanisms, and cognitive behavioral therapy approaches to dealing with life on a daily basis.
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <Button size="lg" className="text-lg px-8 py-6" asChild>
                    <Link href="/contact">GET STARTED IN PHP</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IOP Program Section */}
        <section className="relative">
          <div className="relative w-full h-[500px] mb-16">
            <Image
              src="https://glasshouserecovery.com/wp-content/uploads/2023/06/Fingers.jpg"
              alt="Unlocking potential"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-4xl">
                <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                  UNLOCKING POTENTIAL
                </h3>
                <p className="text-xl md:text-2xl leading-relaxed font-semibold">
                  Programs designed to address both the root causes that led to substance use as well as begin mapping out a new direction.
                </p>
              </div>
            </div>
          </div>
          <div className="container mx-auto px-5">
              <div className="mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                  Intensive Outpatient Program (IOP)
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
                  <div className="space-y-6 text-center">
                    <p className="text-lg leading-relaxed font-semibold">
                      This program is suited for people transitioning out of an inpatient setting or for those that still have to attend to a regular day job while receiving care.
                    </p>

                    <p className="text-lg leading-relaxed font-semibold">
                      IOP members are typically enrolled in 9-12 hours a week spread across three or four days in the afternoon or evening hours.
                    </p>

                    <p className="text-lg leading-relaxed text-muted-foreground">
                      The IOP program at Glass House is drafted here, by us. We tossed aside all of the tired, ineffective approaches to treatment in favor of using content that was specifically designed to activate the best versions of the people that walk our path with us.
                    </p>
                  </div>

                  <div className="space-y-6 text-center">
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      Some of the topics covered in these groups include subjects like Purpose, Grief & Loss, Zombie Film in Reverse (Coming back to life), A Beautiful Mind (examining the link between genius and mental illness), as well as more practical and evidence-based topics that deal with drug use, life skills, and repairing damage caused by destructive behaviors.
                    </p>

                    <p className="text-lg leading-relaxed text-muted-foreground">
                      Our afternoon sessions are smaller, include more art therapy and experiential modalities, and are also dual diagnosis.
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <Button size="lg" className="text-lg px-8 py-6" asChild>
                    <Link href="/contact">GET STARTED IN IOP</Link>
                  </Button>
                </div>
              </div>
            </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background">
        <div className="container mx-auto px-5">
          <div className="py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
              <div>
                <h3 className="font-bold mb-2">Glass House Recovery</h3>
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
                  <Link href="/contact">SUBSCRIBE TO NEWSLETTER</Link>
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
          <div className="py-3 text-center text-sm text-muted-foreground">
            <p>© 2025 Glass House</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
