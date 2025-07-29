import { Button } from "@/components/ui/button"
import { Phone, MapPin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-1">
              <Image
                src="/glass-house-logo.png"
                alt="Glass House Recovery Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <Link href="/" className="text-2xl font-bold tracking-tighter">
                Glass House
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link href="/about" className="text-foreground">About</Link>
              <Link href="/programs" className="text-muted-foreground hover:text-foreground">Programs</Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">Admissions</Link>
              <Link href="/#contact" className="text-muted-foreground hover:text-foreground">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section with Library Background */}
        <section className="container mx-auto px-5">
          <div className="mb-8 md:mb-16 mt-8">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://glasshouserecovery.com/wp-content/uploads/2023/05/books.jpg"
                alt="Books and warm lighting"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4 max-w-4xl">
                  <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                    It's never too late to see what you could have been.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
                Let's find your purpose and reach your potential.
              </h2>
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="font-semibold text-xl">
                  Glass House aims to identify and treat the underlying disorders that lead to maladaptive and destructive behaviors in the lives of brilliant people.
                </p>
                <p className="font-semibold text-xl">
                  While we specialize in treating creative personalities due to our personal backgrounds in music and arts, we provide a curriculum that encompasses all walks of life and shades of humanity.
                </p>
                <p className="text-muted-foreground">
                  Drug use and mental health issues often prevent people achieving greatness, but we're here to change that.
                </p>
              </div>
            </div>
            {/* Two Column Approach */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  The staff at Glass House have spent decades in higher education studying all manner of psychotherapeutic methods and clinical applications. While it's good to have that knowledge, we have found that treatment needs a new approach.
                </p>
              </div>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  We draw heavily upon our own personal experiences when it comes to crafting the curriculum as well as widely utilized treatment modalities and evidence-based practices to ensure a comprehensive, current, and engaging experience that serves to identify the deeply rooted causes of your challenges and start developing solutions as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Center Section */}
        <section className="bg-muted/50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
                  Our Center
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground max-w-4xl mx-auto">
                  Glass House is located in the heart of Old Ellicott City, in a beautiful and discreet converted industrial space. Our space is private, comfortable, engaging and built for a creative mind. We're a close drive from Baltimore, Columbia, Washington DC and Annapolis.
                </p>
              </div>
              {/* Facility Images Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="https://glasshouserecovery.com/wp-content/uploads/2023/05/glasshouse-recovery-28-small-scaled.jpg"
                    alt="Glass House Recovery facility interior"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="https://glasshouserecovery.com/wp-content/uploads/2023/05/glasshouse-recovery-32-sq.png"
                    alt="Glass House Recovery lounge area"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="https://glasshouserecovery.com/wp-content/uploads/2023/05/glasshouse-recovery-29-sq.jpg"
                    alt="Glass House Recovery meeting space"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="https://glasshouserecovery.com/wp-content/uploads/2023/05/glasshouse-recovery-31-sq2.png"
                    alt="Glass House Recovery group therapy room"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="https://glasshouserecovery.com/wp-content/uploads/2023/06/glasshouse-updated-edit-3-scaled-1.jpg"
                    alt="Glass House Recovery updated space"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="https://glasshouserecovery.com/wp-content/uploads/2023/06/glasshouse-recovery-12-scaled-1.jpg"
                    alt="Glass House Recovery welcoming environment"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="text-center">
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <Link href="/#contact">Get In Touch</Link>
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
              <div></div>
              <div className="text-center">
                <Button className="mb-4" asChild>
                  <Link href="/#contact">SUBSCRIBE TO NEWSLETTER</Link>
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
