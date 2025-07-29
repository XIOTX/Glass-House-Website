import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactForm } from "@/components/ContactForm"
import { Phone, Mail, MapPin, Check, Hospital, Home, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
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
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section with Image */}
      <main>
        <section className="container mx-auto px-5">
          {/* Hero Image */}
          <div className="mb-8 md:mb-06 mt-8">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/hero-lightbulbs.png"
                alt="Glass House Recovery"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex-col md:flex-row flex items-start md:justify-between mb-06 md:mb-02">
            <div className="md:w-1/2">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 mb-4 -mt-2">
                GLASS HOUSE
              </h1>
              <div className="mb-0">
                <span className="text-lg text-muted-foreground">Creative Outpatient Treatment</span>
              </div>
              <div className="mb-4"></div>
              <p className="text-xl font-semibold mb-6 max-w-2xl">
                Welcome to Glass House. Come as you are. Leave as yourself.
              </p>
              <p className="text-lg leading-relaxed mb-8 max-w-2xl">
                Build a new foundation through intensive self-development{" "}
                and evidence-based treatment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <a href="/contact">Contact Us</a>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                  <Link href="/programs">Our Programs</Link>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:w-1/2 mt-12 md:mt-0 md:pl-8">
              <ContactForm
                title="Ready For A Change?"
                description="Request a confidential callback. All information is protected by HIPAA."
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </section>



        {/* Writing a New Chapter Section */}
        <section className="py-20">
          <div className="container mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Image
                  src="https://ext.same-assets.com/1711429588/1615094442.jpeg"
                  alt="Vintage typewriter - Is it time to write a new chapter?"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">
                  Is it time to write a new chapter?
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Breaking free from unhealthy patterns may seem an impossible task. Trapped in a self-imposed prison is a life no one wants to endure.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  At Glass House, our programs are designed to help those struggling to <strong>create a new future</strong>. We recognize the spark within and do more than just provide instruction on how to quit behaviors.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  We address trauma, help develop tools and skills, provide a refreshing and comfortable environment, and use evidence-based therapies coupled with a creative perspective to deliver treatment that brings individuals back to life.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Our approach is built on experience and expertise. Our goal for our patients is a new freedom. Let us show you that a creative outpatient rehab can lead to long lasting recovery.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <Link href="/about">Read more about our philosophy</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/programs">Check out our Programs</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Our Approach Section */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-8">
                  Our approach to your journey works by discovering the person your pain took away from the world and bringing them back to life.
                </h2>
                <Button size="lg" asChild>
                  <Link href="/about">Learn more about Glass House</Link>
                </Button>
              </div>
              <div className="relative">
                <Image
                  src="https://ext.same-assets.com/1711429588/2383305590.jpeg"
                  alt="Coffee cup with BEGIN written on it"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
            <div className="text-center max-w-4xl mx-auto mt-16">
              <p className="text-lg text-muted-foreground mb-8">
                <strong>Whether you've been in treatment before or this is your first time, our program was designed<br />to address the challenges keeping you from moving forward.</strong>
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                <strong>Your time here will be spent immersing yourself in intensive group content calibrated<br />specifically for you. We believe that anyone is capable of finding a new way of life and creating <em>something</em> to give to the world in their own way.</strong>
              </p>
              <p className="text-lg text-muted-foreground">
                We will give you the tools to navigate life after active addiction<br />and build a life you no longer want to escape from.
              </p>
            </div>
          </div>
        </section>


        {/* Certifications Section */}
        <section className="py-16">
          <div className="container mx-auto px-5">
            <div className="text-center mb-02">
              <h2 className="text-3xl font-bold tracking-tighter mb-4">
                Certified To Support Recovery
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto items-center">
              <div className="text-center">
                <Image
                  src="https://i.imgur.com/lL4zY6f.png"
                  alt="NAATP Foundation For Recovery Science and Education"
                  width={120}
                  height={120}
                  className="mx-auto"
                />
              </div>
              <div className="text-center">
                <Image
                  src="https://i.imgur.com/vN3eoyx.png"
                  alt="Joint Commission Accreditation"
                  width={120}
                  height={120}
                  className="mx-auto"
                />
              </div>
              <div className="text-center">
                <Image
                  src="https://i.imgur.com/uVFI9sF.png"
                  alt="Third Certification"
                  width={120}
                  height={120}
                  className="mx-auto"
                />
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
                  <a href="https://www.facebook.com/glasshouserecovery" className="text-muted-foreground hover:text-foreground">
                    Facebook
                  </a>
                  <a href="https://www.instagram.com/glasshouserecovery/" className="text-muted-foreground hover:text-foreground">
                    Instagram
                  </a>
                  <a href="https://www.linkedin.com/company/glasshouserecovery/" className="text-muted-foreground hover:text-foreground">
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
