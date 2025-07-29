import { Button } from "@/components/ui/button"
import { Phone, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-background">
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
              <Link href="/admissions" className="text-foreground">Admissions</Link>
              <Link href="/referrals" className="text-muted-foreground hover:text-foreground">Referrals</Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section with Water Droplets Background */}
        <section className="container mx-auto px-5">
          <div className="mb-8 md:mb-16 mt-8">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://ext.same-assets.com/2654951941/1114432401.jpeg"
                alt="Admissions - Water droplets"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4 max-w-4xl">
                  <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight uppercase">
                    ADMISSIONS
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Let's Get Started Section */}
        <section className="py-20">
          <div className="container mx-auto px-5">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-12 text-center">
              Let's get started.
            </h2>

            <div className="text-center max-w-4xl mx-auto">
              <p className="text-lg mb-6">
                <strong>Admission into one of the programs at Glass House is an easy process.</strong> However, change can be scary and sometimes learning about what will happen may make the next step easier.
              </p>

              <p className="text-lg mb-6">
                <strong>Admission begins with <Link href="/contact" className="underline hover:no-underline">contacting us</Link>.</strong> We will do a pre-assessment to make sure our programs match what you are looking for, and if so, schedule intake as soon as possible. If not, we will provide you will referrals for a program that suits your needs.
              </p>

              <p className="text-lg mb-6">
                <strong>Our intake assessment is how we get to know you.</strong> During this process, we will learn about you and your world – history, concerns, patterns, medical information, and environment. This process allows the team to begin to meet you where you are at and begin to work with you to create individualized treatment plans and goals.
              </p>

              <p className="text-lg mb-6">
                <strong>From there, we begin to map out your recovery journey.</strong> You may know what you want recovery to look like, or not look like – peace at home, professional success, being able to tour or perform without being drunk, finally moving forward without continually backsliding. Or, you may have no idea – it's just time for a different way forward. By the end of the admissions and intake process, our team will have begun to map out what's right for you.
              </p>

              <p className="text-lg mb-6">
                <strong>Still have questions? We get it.</strong> This might be a big decision. <Link href="/contact" className="underline hover:no-underline">Contact us</Link> to talk to the team, or check out the resources below.
              </p>

              <div className="text-lg space-y-2">
                <div>• <Link href="/programs" className="underline hover:no-underline">Programs</Link></div>
                <div>• <Link href="/about" className="underline hover:no-underline">About</Link></div>
              </div>
            </div>
          </div>
        </section>

        {/* Insurance & Payment Section */}
        <section className="bg-muted/50 py-20">
          <div className="container mx-auto px-5">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-12 text-center">
              Insurance & Payment
            </h2>

            <div className="text-center max-w-4xl mx-auto">
              <p className="text-lg mb-6">
                <strong>We accept multiple types of insurance.</strong> Glass House works with most major private insurance companies, and have many ways to navigate any deductibles and out-of-pocket requirements that might be part of your plan. We are in-network with CareFirst BCBS, accept most BCBS policies as an in-network provider, and are in-network with Cigna/Evernorth. We are TriCare East and CHAMPVA certified. HSA (Health Savings Account) plans are also accepted.
              </p>

              <p className="text-lg mb-6">
                <strong>We also accept Maryland Medicaid.</strong> If you do not have any insurance coverage at all, and might be able to qualify for Maryland Medicaid, our team can provide assistance in getting that process started.
              </p>

              <p className="text-lg mb-6">
                <strong>We also create payment plans, including sliding-scale options, and often have scholarships available.</strong> Sometimes insurance isn't available or a good option, and an alternative way to cover costs is desired. We work with patients and families to create fair and feasible plans.
              </p>

              <p className="text-lg mb-6">
                <strong>Want to discuss further? <Link href="/contact" className="underline hover:no-underline">Reach out</Link>.</strong> We are happy to talk through the specifics and provide as many options as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-5">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">
                Ready to get started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Take the first step toward your recovery journey. Our compassionate team is here to help you every step of the way.
              </p>
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link href="/contact">Learn More About Our Process</Link>
              </Button>
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
