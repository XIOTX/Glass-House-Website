"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, ChevronDown, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

// Newsletter data structure
interface NewsletterEntry {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  month: string;
  year: number;
  content: React.ReactNode;
  slug: string;
}

// Current newsletter data
const currentNewsletter: NewsletterEntry = {
  id: "august-2025",
  title: "Glass House X Carl Jung: Shadow Realm",
  subtitle: "Join us on our month-long journey into the wild",
  date: "August 2025",
  month: "August",
  year: 2025,
  slug: "glass-house-x-carl-jung-shadow-realm",
  content: (
    <>
      {/* Hero Image */}
      <div className="mb-8">
        <Image
          src="https://substack-post-media.s3.amazonaws.com/public/images/08639774-47e5-4d08-8fe7-7274ef0e1f0f_3545x3167.png"
          alt="Glass House X Carl Jung: Shadow Realm"
          width={1456}
          height={1301}
          className="w-full h-auto"
        />
      </div>

      <h2 className="text-3xl font-bold mt-8 mb-6">
        <strong>Glass House is entering a new phase.</strong>
      </h2>
      
      <p className="mb-6">
        Starting this month, our clinical environment will take on a more immersive and intentional shape—built around <strong>themed months</strong> that explore the most influential, transformative theorists in the history of psychology. These aren't academic exercises—they're tools for real growth. Each month, we'll take the ideas of one major thinker and bring them into direct conversation with recovery, creativity, identity, and change.
      </p>

      <p className="mb-8">
        To that end, we're incredibly excited to begin with <strong>the visionary Carl Jung</strong>.
      </p>

      <hr className="my-8" />

      <blockquote className="border-l-4 border-gray-300 pl-6 py-4 my-8">
        <p className="text-xl italic mb-4">
          <em>Welcome to Glass House, where we take academic psychology and plug it into a distortion pedal.</em>
        </p>
        <p className="mb-4">
          This week, we begin with one of Jung's most personal and piercing concepts: the <strong>Shadow Self</strong>. These are the parts of us that have been buried—rejected, ignored, or reshaped for survival. Often, it's not the worst in us that ends up in the shadow—it's the most vulnerable, the most potent, the most misunderstood.
        </p>
        <p className="mb-4">
          And the Shadow doesn't stay buried quietly. It leaks. It performs. It sabotages. It lashes out or shuts down.
        </p>
        <p>
          That's why we're putting a mic in its hand.
        </p>
      </blockquote>

      <h3 className="text-2xl font-bold mt-10 mb-4">
        <strong>Battle Rap as Shadow Work</strong>
      </h3>
      
      <p className="mb-6">
        We're opening the week with a <strong>battle rap exercise</strong>—not as a performance, but as a way to uncover internal narratives. Battle rap sharpens language. It shows us how words can cut, how rhythm and tone can reveal, distort, or defend. It's not just lyrical—it's psychological.
      </p>

      <p className="mb-6">
        Most of us have internalized attacks that come disguised as truth. These voices don't sound loud—they sound familiar. They tell us who we are, what we're not, and what we'll never be.
      </p>

      <p className="mb-6">
        <strong>Battle rap lets us hear them clearly.</strong> It gives us a framework to externalize those voices, to identify their tone, their vocabulary, their tactics. Writing from the Shadow doesn't make it stronger—it makes it visible. And from there, it becomes manageable.
      </p>

      <blockquote className="border-l-4 border-gray-300 pl-6 py-4 my-8">
        <p className="text-xl italic mb-2">
          This exercise isn't about performance—it's about exposure.
        </p>
        <p>
          It's a way to name the voice before it names you.
        </p>
      </blockquote>

      <p className="mb-6">
        As Jung wrote:
      </p>

      <p className="mb-8 text-xl font-bold">
        <strong>"Until you make the unconscious conscious, it will direct your life and you will call it fate."</strong>
      </p>

      <p className="mb-8">
        This week is about doing just that—stepping out of unconscious narrative and into intention.
      </p>

      {/* Second Image */}
      <div className="my-8">
        <Image
          src="https://substack-post-media.s3.amazonaws.com/public/images/651d453f-4f6b-45b8-8b38-288f54c23629_2967x931.png"
          alt="Battle Rap as Shadow Work"
          width={1456}
          height={457}
          className="w-full h-auto"
        />
      </div>

      <h3 className="text-2xl font-bold mt-10 mb-4">
        <strong>The Hero's Journey & the Individuation Process</strong>
      </h3>
      
      <p className="mb-6">
        As we face the Shadow, we also begin something larger: <strong>the journey inward</strong>.
      </p>

      <p className="mb-6">
        Jung's concept of <strong>individuation</strong>—becoming your full, integrated self—aligns powerfully with <strong>Joseph Campbell's Hero's Journey</strong>, a narrative framework found across cultures and centuries. The Hero's Journey begins in the "Ordinary World"—a life defined by routine, roles, and survival—and fractures when something unexpected pulls the hero into deeper territory.
      </p>

      <p className="mb-6">
        That pull is the <strong>Call to Adventure</strong>—a moment of disruption that demands a response.
      </p>

      <p className="mb-6">
        For many of us, that call has already happened. It may have come through pain, loss, exhaustion, relapse, or simply the quiet sense that the life we were living doesn't fit anymore. It's not always dramatic. But it's always significant.
      </p>

      <blockquote className="border-l-4 border-gray-300 pl-6 py-4 my-8">
        <p className="text-xl italic mb-2">
          This week, we'll explore that threshold—when the story begins to shift.
        </p>
        <p>
          When something inside us starts asking: "What else?"
        </p>
      </blockquote>

      <p className="mb-8">
        Group conversations will help us reflect on that call—not just the moment it happened, but the resistance that came with it. The refusal. The denial. The delay. That's part of the process, too. And it's worth examining.
      </p>

      {/* Third Image */}
      <div className="my-8">
        <Image
          src="https://substack-post-media.s3.amazonaws.com/public/images/d1df1e0e-19f9-4087-a388-1fd629b782ab_1429x903.png"
          alt="The Hero's Journey"
          width={1429}
          height={903}
          className="w-full h-auto"
        />
      </div>

      <h3 className="text-2xl font-bold mt-10 mb-4">
        <strong>Mapping the Psyche</strong>
      </h3>
      
      <p className="mb-6">
        To support all of this exploration, we'll also introduce <strong>Jung's model of the psyche</strong>. This is the structural foundation for the rest of the month. We'll break down:
      </p>

      <ul className="space-y-4 mb-8">
        <li className="flex items-start gap-4">
          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
          <div>
            <strong>The Ego</strong> – the conscious "I"
          </div>
        </li>
        <li className="flex items-start gap-4">
          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
          <div>
            <strong>The Persona</strong> – the mask we wear to function socially
          </div>
        </li>
        <li className="flex items-start gap-4">
          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
          <div>
            <strong>The Shadow</strong> – what's repressed or disowned
          </div>
        </li>
        <li className="flex items-start gap-4">
          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
          <div>
            <strong>The Self</strong> – the deeper, integrated wholeness we move toward
          </div>
        </li>
        <li className="flex items-start gap-4">
          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
          <div>
            <strong>Anima/Animus</strong> – the inner feminine/masculine aspects we contain
          </div>
        </li>
        <li className="flex items-start gap-4">
          <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
          <div>
            <strong>The Collective Unconscious</strong> – universal patterns and archetypes that shape human experience
          </div>
        </li>
      </ul>

      <p className="mb-8">
        This isn't about memorizing terms. It's about <strong>building a map</strong> of the inner world so we can stop moving through it blind. To integrate these concepts, we will use a Jungian art therapy approach to create an image of our own psyches.
      </p>

      <hr className="my-8" />

      <h3 className="text-2xl font-bold mt-10 mb-4">
        <strong>Personality Typing & Visual Integration</strong>
      </h3>
      
      <p className="mb-6">
        Later in the week, we'll take a <strong>Jung-based personality assessment</strong>—not to define ourselves, but to notice tendencies. What's been dominant? What's been underdeveloped? What traits have we led with, and what parts of us have been left out?
      </p>

      <p className="mb-6">
        This isn't about boxing anyone in. It's about <strong>reflecting</strong>, honestly and without judgment.
      </p>

      <p className="mb-8">
        We'll close the week with a <strong>response art session</strong>—a chance to represent what's been uncovered in visual form. This could be a depiction of your Shadow, a scene from your Hero's Journey, a new awareness of your type, or simply an image that holds something unspoken.
      </p>

      <p className="mb-8">
        These pieces will form the beginning of a collective mural—a visual thread we'll keep adding to as the month unfolds.
      </p>

      <hr className="my-8" />

      <div className="text-center text-sm text-gray-600">
        <p>© 2025 Glass House Recovery. All rights reserved.</p>
        <p className="mt-2">
          This newsletter is part of our commitment to sharing knowledge and supporting the recovery community.
        </p>
      </div>
    </>
  )
};

// Archive data - currently empty, will be populated as newsletters are archived
const newsletterArchive: NewsletterEntry[] = [];

// Helper function to get archive by year
const getArchiveByYear = (archive: NewsletterEntry[]) => {
  const years = [...new Set(archive.map(item => item.year))].sort((a, b) => b - a);
  return years.map(year => ({
    year,
    entries: archive.filter(item => item.year === year).sort((a, b) => {
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      return months.indexOf(b.month) - months.indexOf(a.month);
    })
  }));
};

export default function NewsletterPage() {
  const [archiveExpanded, setArchiveExpanded] = useState(false);
  const [selectedNewsletter, setSelectedNewsletter] = useState<NewsletterEntry>(currentNewsletter);
  const [isArchive, setIsArchive] = useState(false);

  const archiveByYear = getArchiveByYear(newsletterArchive);

  const handleArchiveClick = (newsletter: NewsletterEntry) => {
    setSelectedNewsletter(newsletter);
    setIsArchive(true);
  };

  const handleCurrentClick = () => {
    setSelectedNewsletter(currentNewsletter);
    setIsArchive(false);
  };

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
              <div className="mt-2 space-y-2 text-sm bg-background/80 backdrop-blur p-3 rounded min-w-48">
                {/* Current Newsletter */}
                <div className="text-muted-foreground">
                  <button
                    onClick={handleCurrentClick}
                    className={`block w-full text-left hover:text-foreground transition-colors ${!isArchive ? 'text-foreground font-medium' : ''}`}
                  >
                    Current Issue
                  </button>
                </div>

                {/* Archive by Year */}
                {archiveByYear.map(({ year, entries }) => (
                  <div key={year} className="text-muted-foreground">
                    <p className="font-medium">{year}</p>
                    <div className="ml-2 space-y-1 mt-1">
                      {entries.map((entry) => (
                        <button
                          key={entry.id}
                          onClick={() => handleArchiveClick(entry)}
                          className={`block w-full text-left hover:text-foreground transition-colors ${isArchive && selectedNewsletter.id === entry.id ? 'text-foreground font-medium' : ''}`}
                        >
                          {entry.month}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}

                {newsletterArchive.length === 0 && (
                  <div className="text-muted-foreground text-xs italic">
                    No archived newsletters yet
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Newsletter Content - Plain like Substack */}
          <div className="w-full max-w-4xl mx-auto">
            <div className="bg-white">
              {/* Plain title like Substack */}
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {selectedNewsletter.title}
                </h1>
                <p className="text-lg text-gray-600 mb-2">{selectedNewsletter.subtitle}</p>
                <p className="text-sm text-gray-500">{selectedNewsletter.date} • Glass House Recovery</p>
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none">
                {selectedNewsletter.content}
              </div>
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