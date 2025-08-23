'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, ChevronDown, ChevronUp, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
}

const faqData: FAQItem[] = [
  // Services & Treatment Approaches
  {
    id: "services-1",
    question: "What types of therapy do you offer for men?",
    answer: "Glass House Recovery specializes in creative therapy approaches for men including cognitive behavioral therapy (CBT), art therapy, music therapy, trauma-informed care, and evidence-based addiction recovery treatment. We focus on discovering the person your pain took away from the world and bringing them back to life.",
    category: "Services & Treatment"
  },
  {
    id: "services-2", 
    question: "What makes your creative therapy approach different?",
    answer: "We cut away the redundant and boring artifacts of traditional treatment and put a fresh spin on the recovery process. Our approach combines evidence-based practices with creative perspectives, making treatment engaging, transforming, and life-altering. We're especially suited for creative personalities due to our backgrounds in music and arts.",
    category: "Services & Treatment"
  },
  {
    id: "services-3",
    question: "Do you treat trauma and PTSD?",
    answer: "Yes, we specialize in trauma-informed care and address underlying disorders that lead to maladaptive behaviors. We help develop tools and skills to deal with trauma, using evidence-based therapies in a refreshing and comfortable environment.",
    category: "Services & Treatment"
  },
  {
    id: "services-4",
    question: "What conditions do you treat?",
    answer: "We treat a wide range of mental health and addiction issues including depression, anxiety, trauma, PTSD, substance abuse, social anxiety, isolation issues, suicidal ideation, self-harm behaviors, and various addiction disorders. We focus on the underlying causes rather than just symptoms.",
    category: "Services & Treatment"
  },

  // Programs & Levels of Care
  {
    id: "programs-1",
    question: "What is your Partial Hospitalization Program (PHP)?",
    answer: "Our PHP is a dynamic, comprehensive program for those needing higher-level support. It's rooted in evidence-based practices but with engaging, fresh approaches. Topics include Honesty in Practice, dealing with isolation and social anxiety, examining historical figures with mental health issues, understanding addiction patterns, and CBT approaches for daily life.",
    category: "Programs & Levels of Care"
  },
  {
    id: "programs-2",
    question: "What is Intensive Outpatient Program (IOP)?",
    answer: "Our IOP is perfect for working individuals, offering flexible schedules and remote support options. It's tailored to professional commitments while providing comprehensive recovery support. This program allows you to maintain work responsibilities while receiving intensive treatment.",
    category: "Programs & Levels of Care"
  },
  {
    id: "programs-3",
    question: "Do you offer individual therapy sessions?",
    answer: "Yes, we offer individual therapy sessions as part of our comprehensive treatment approach. Our therapists specialize in men's mental health and use creative, evidence-based approaches tailored to each individual's needs and goals.",
    category: "Programs & Levels of Care"
  },
  {
    id: "programs-4",
    question: "Can I work while in treatment?",
    answer: "Absolutely! Our programs are structured to support working individuals. Our IOP program specifically offers flexible scheduling and remote support options to accommodate professional commitments while ensuring you receive the treatment you need.",
    category: "Programs & Levels of Care"
  },

  // Location & Logistics
  {
    id: "location-1",
    question: "Where is Glass House Recovery located?",
    answer: "Glass House Recovery is located in the heart of Old Ellicott City, Maryland, in a beautiful and discreet converted industrial space. We're a close drive from Baltimore, Columbia, Washington DC, and Annapolis. Call 410-970-3374 for directions and appointments.",
    category: "Location & Logistics"
  },
  {
    id: "location-2",
    question: "What are your hours of operation?",
    answer: "We're open Monday through Friday, 9:00 AM to 5:00 PM. We offer flexible scheduling to accommodate working professionals and various life commitments. Contact us at 410-970-3374 to discuss scheduling options.",
    category: "Location & Logistics"
  },
  {
    id: "location-3",
    question: "Is your facility private and discreet?",
    answer: "Yes, our space is private, comfortable, and discreet. Located in a converted industrial space in Old Ellicott City, our facility is designed to be engaging and built for creative minds while maintaining complete confidentiality.",
    category: "Location & Logistics"
  },

  // Insurance & Payment
  {
    id: "payment-1",
    question: "Do you accept insurance for therapy sessions?",
    answer: "Yes, Glass House Recovery accepts various insurance plans, cash, and credit card payments. Contact us at 410-970-3374 to verify your specific insurance coverage and discuss payment options.",
    category: "Insurance & Payment"
  },
  {
    id: "payment-2",
    question: "What if I don't have insurance?",
    answer: "We accept cash and credit card payments for those without insurance coverage. Contact us to discuss self-pay rates and potential payment plan options. We believe everyone deserves access to quality mental health treatment.",
    category: "Insurance & Payment"
  },
  {
    id: "payment-3",
    question: "How much does treatment cost?",
    answer: "Treatment costs vary depending on the level of care and your insurance coverage. We're in the moderate price range ($$) for mental health services. Contact us at 410-970-3374 for specific pricing information and insurance verification.",
    category: "Insurance & Payment"
  },

  // Getting Started
  {
    id: "getting-started-1",
    question: "What should I expect in my first therapy session?",
    answer: "Your first session includes a comprehensive assessment, discussion of your goals, and development of a personalized treatment plan using our creative, evidence-based approaches. We'll explore your background, current challenges, and work together to create a path forward that fits your unique needs.",
    category: "Getting Started"
  },
  {
    id: "getting-started-2",
    question: "How do I get started with treatment?",
    answer: "Getting started is simple. Call us at 410-970-3374 or use our online contact form. We'll schedule an initial consultation to discuss your needs, verify insurance if applicable, and determine the best treatment approach for your situation.",
    category: "Getting Started"
  },
  {
    id: "getting-started-3",
    question: "Do I need a referral to start treatment?",
    answer: "No referral is required to start treatment at Glass House Recovery. You can contact us directly to begin your journey. However, we do work with healthcare providers, therapists, and other professionals who refer clients to our specialized programs.",
    category: "Getting Started"
  },
  {
    id: "getting-started-4",
    question: "What if I'm not sure if I need treatment?",
    answer: "It's completely normal to have uncertainty. We offer consultations to help you understand your options and determine if our approach is right for you. There's no commitment required for an initial conversation about your situation and goals.",
    category: "Getting Started"
  },

  // Specialized Questions
  {
    id: "specialized-1",
    question: "Why do you specialize in treating men?",
    answer: "Men often face unique challenges in seeking and engaging with mental health treatment. Our approach is specifically designed to address these challenges, creating an environment where men feel comfortable exploring their emotions, trauma, and recovery in ways that resonate with their experiences.",
    category: "Specialized Approach"
  },
  {
    id: "specialized-2",
    question: "What if I'm not a 'creative person'?",
    answer: "While we specialize in creative personalities, our curriculum encompasses all walks of life and shades of humanity. You don't need to be an artist or musician to benefit from our creative approaches - we help everyone discover and utilize their unique strengths and perspectives.",
    category: "Specialized Approach"
  },
  {
    id: "specialized-3",
    question: "Do you treat addiction and mental health together?",
    answer: "Yes, we understand that addiction and mental health issues are often interconnected. We provide integrated treatment that addresses both substance use disorders and underlying mental health conditions simultaneously, using evidence-based approaches tailored to each individual.",
    category: "Specialized Approach"
  },
  {
    id: "specialized-4",
    question: "How long does treatment typically last?",
    answer: "Treatment length varies based on individual needs, goals, and level of care. Some clients benefit from short-term intensive programs, while others engage in longer-term therapy. We work with you to develop a treatment plan that fits your specific situation and recovery goals.",
    category: "Specialized Approach"
  }
]

const categories = [
  "All",
  "Services & Treatment", 
  "Programs & Levels of Care",
  "Location & Logistics",
  "Insurance & Payment", 
  "Getting Started",
  "Specialized Approach"
]

export default function FAQPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [openItems, setOpenItems] = useState<string[]>([])

  const filteredFAQs = selectedCategory === "All" 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory)

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4">
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
              <Link href="/programs" className="text-muted-foreground hover:text-foreground">Programs</Link>
              <Link href="/admissions" className="text-muted-foreground hover:text-foreground">Admissions</Link>
              <Link href="/referrals" className="text-muted-foreground hover:text-foreground">Referrals</Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link>
              <Link href="/newsletter" className="text-muted-foreground hover:text-foreground">Newsletter</Link>
              <Link href="/faq" className="text-foreground font-semibold">FAQ</Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-accent"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-3">
                <Link href="/about" className="text-muted-foreground hover:text-foreground px-2 py-1">About</Link>
                <Link href="/programs" className="text-muted-foreground hover:text-foreground px-2 py-1">Programs</Link>
                <Link href="/admissions" className="text-muted-foreground hover:text-foreground px-2 py-1">Admissions</Link>
                <Link href="/referrals" className="text-muted-foreground hover:text-foreground px-2 py-1">Referrals</Link>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground px-2 py-1">Contact</Link>
                <Link href="/newsletter" className="text-muted-foreground hover:text-foreground px-2 py-1">Newsletter</Link>
                <Link href="/faq" className="text-foreground font-semibold px-2 py-1">FAQ</Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-5">
        <div className="mb-8 md:mb-16 mt-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
              FAQ
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground mb-8">
              Everything you need to know about Glass House Recovery's creative therapy approach for men in Baltimore.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="container mx-auto px-5 mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* FAQ Content */}
      <section className="container mx-auto px-5 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {filteredFAQs.map((faq) => (
              <Card key={faq.id} className="border">
                <CardHeader 
                  className="cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => toggleItem(faq.id)}
                >
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-left text-lg font-semibold">
                      {faq.question}
                    </CardTitle>
                    {openItems.includes(faq.id) ? (
                      <ChevronUp className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                </CardHeader>
                {openItems.includes(faq.id) && (
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-5">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our team is here to help you understand how Glass House Recovery can support your journey to mental health and recovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:410-970-3374">Call 410-970-3374</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
