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
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-5">
          <div className="flex h-16 items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tighter">Glass House</h1>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link href="/about" className="transition-colors hover:text-foreground/80">About</Link>
              <a href="#programs" className="transition-colors hover:text-foreground/80">Programs</a>
              <a href="#admissions" className="transition-colors hover:text-foreground/80">Admissions</a>
              <a href="#contact" className="transition-colors hover:text-foreground/80">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section with Image */}
      <main>
        <section className="container mx-auto px-5">
          {/* Hero Image */}
          <div className="mb-8 md:mb-16 mt-8">
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

          <div className="flex-col md:flex-row flex items-center md:justify-between mb-16 md:mb-12">
            <div className="md:w-1/2">
              <div className="mb-4">
                <span className="text-lg text-muted-foreground">Creative Outpatient Rehab</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 mb-6">
                GLASS HOUSE
              </h1>
              <p className="text-lg leading-relaxed mb-6 max-w-2xl">
                Build a new foundation through intensive self-development and evidence-based treatment.
              </p>
              <p className="text-xl font-semibold mb-8 max-w-2xl">
                Welcome to Glass House. Come as you are. Leave as yourself.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <a href="#contact">Contact Us</a>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                  <a href="#programs">Our Programs</a>
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

        {/* Featured Quote */}
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-5 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              End the cycle. Create a life worth living.
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A creative Outpatient Rehab that actually works.
            </p>
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
                    <a href="#about">Read more about our philosophy</a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="#programs">PROGRAMS</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ready to Make a Change Section */}
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-5 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-8">
              Ready to make a change?
            </h2>
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <a href="#contact">CONTACT US TODAY</a>
            </Button>
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
                  <a href="#contact">Learn more about Glass House</a>
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
              <div>
                <p className="text-lg text-muted-foreground mb-8">
                  <strong>Whether you've been in treatment before or this is your first time, our program was designed to address the challenges keeping you from moving forward.</strong>
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  <strong>Your time here will be spent immersing yourself in intensive group content calibrated specifically for you. We believe that anyone is capable of finding a new way of life and creating <em>something</em> to give to the world in their own way.</strong>
                </p>
                <p className="text-lg text-muted-foreground">
                  We will give you the tools to navigate life after active addiction and build a life you no longer want to escape from.
                </p>
              </div>
              <div>
                {/* This space can be used for additional content or left as spacing */}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section id="contact" className="bg-muted/50 py-20">
          <div className="container mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">
                  Contact Glass House
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Reach out to our compassionate admissions team. All inquiries are confidential.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">
                        Call/Text: <a href="tel:4109704842" className="hover:underline">410.970.4842</a><br />
                        Fax: 410.941.0156
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">
                        <a href="mailto:admissions@glasshouserecovery.com" className="hover:underline">
                          admissions@glasshouserecovery.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-muted-foreground">
                        Glass House Recovery<br />
                        8318 Forrest St<br />
                        Suite 100<br />
                        Ellicott City, MD 21043
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-sm text-muted-foreground">
                    <a href="#" className="hover:underline font-medium">Our Privacy Policy</a>
                  </p>
                </div>
              </div>

              <ContactForm
                title="Want to find a better way?"
                description="Leave your info and we'll be in touch"
              />
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-16">
          <div className="container mx-auto px-5">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter mb-4">
                Certified To Support Recovery
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-8 max-w-lg mx-auto items-center">
              <div className="text-center">
                <Image
                  src="https://ext.same-assets.com/1711429588/3783907385.png"
                  alt="NAATP Foundation For Recovery Science and Education"
                  width={150}
                  height={173}
                  className="mx-auto"
                />
              </div>
              <div className="text-center">
                <Image
                  src="https://ext.same-assets.com/1711429588/3879021310.png"
                  alt="Joint Commission Accreditation"
                  width={150}
                  height={150}
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container mx-auto px-5">
          <div className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div>
                <h3 className="font-bold mb-4">Glass House Recovery</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  8318 Forrest St<br />
                  Suite 100<br />
                  Ellicott City, MD 21043
                </p>
                <p className="text-sm font-semibold">
                  410.970.4842 (call/text)<br />
                  410.941.0156 (fax)
                </p>
              </div>

              <div className="md:col-span-2"></div>

              <div className="text-center">
                <Button className="mb-4" asChild>
                  <a href="#contact">SUBSCRIBE TO NEWSLETTER</a>
                </Button>
                <div className="flex justify-center space-x-4">
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
          <div className="border-t py-8 text-center text-sm text-muted-foreground">
            <p>© 2025 Glass House • Built with GeneratePress</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
