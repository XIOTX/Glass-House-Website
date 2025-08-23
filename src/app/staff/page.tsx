'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Menu, X, Award, GraduationCap, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

interface StaffMember {
  id: string
  name: string
  title: string
  credentials: string[]
  specialties: string[]
  bio: string
  image: string
  experience: string
  education: string[]
  certifications: string[]
}

const staffMembers: StaffMember[] = [
  {
    id: "dr-sarah-johnson",
    name: "Dr. Sarah Johnson",
    title: "Clinical Director & Licensed Psychologist",
    credentials: ["Ph.D.", "Licensed Psychologist", "LCSW"],
    specialties: ["Trauma Therapy", "Cognitive Behavioral Therapy", "Men's Mental Health", "Addiction Recovery"],
    bio: "Dr. Johnson brings over 15 years of experience in clinical psychology with a specialized focus on trauma-informed care and creative therapeutic approaches. She has extensive experience working with men facing complex mental health challenges, addiction issues, and trauma recovery.",
    image: "/placeholder-staff-1.jpg",
    experience: "15+ years",
    education: [
      "Ph.D. in Clinical Psychology - Johns Hopkins University",
      "M.A. in Psychology - University of Maryland",
      "B.A. in Psychology - Towson University"
    ],
    certifications: [
      "Licensed Clinical Social Worker (LCSW)",
      "Certified Trauma Specialist",
      "Cognitive Behavioral Therapy Certification",
      "EMDR Therapy Certification"
    ]
  },
  {
    id: "michael-rodriguez",
    name: "Michael Rodriguez",
    title: "Lead Creative Therapist & Music Therapy Specialist",
    credentials: ["MT-BC", "LCAT", "M.A."],
    specialties: ["Music Therapy", "Art Therapy", "Creative Expression", "Group Therapy"],
    bio: "Michael combines his background in music and psychology to help clients express themselves through creative mediums. His innovative approach to therapy has helped hundreds of men discover new ways to process emotions and trauma through artistic expression.",
    image: "/placeholder-staff-2.jpg",
    experience: "12+ years",
    education: [
      "M.A. in Music Therapy - Loyola University Maryland",
      "B.M. in Music Performance - Peabody Institute",
      "Certificate in Art Therapy - Maryland Institute College of Art"
    ],
    certifications: [
      "Board Certified Music Therapist (MT-BC)",
      "Licensed Creative Arts Therapist (LCAT)",
      "Certified Group Psychotherapist",
      "Trauma-Informed Creative Arts Certification"
    ]
  },
  {
    id: "dr-james-chen",
    name: "Dr. James Chen",
    title: "Addiction Specialist & Psychiatrist",
    credentials: ["M.D.", "Board Certified Psychiatrist", "Addiction Medicine"],
    specialties: ["Addiction Medicine", "Dual Diagnosis", "Medication Management", "Substance Abuse"],
    bio: "Dr. Chen specializes in the medical aspects of addiction recovery and dual diagnosis treatment. His comprehensive approach addresses both the psychological and physiological components of addiction, ensuring clients receive holistic care throughout their recovery journey.",
    image: "/placeholder-staff-3.jpg",
    experience: "18+ years",
    education: [
      "M.D. - University of Maryland School of Medicine",
      "Residency in Psychiatry - Johns Hopkins Hospital",
      "Fellowship in Addiction Medicine - NIDA"
    ],
    certifications: [
      "Board Certified in Psychiatry",
      "Board Certified in Addiction Medicine",
      "Certified Addiction Counselor (CAC)",
      "Suboxone Prescribing Certification"
    ]
  },
  {
    id: "lisa-thompson",
    name: "Lisa Thompson",
    title: "Licensed Clinical Social Worker & Trauma Specialist",
    credentials: ["LCSW", "EMDR Certified", "M.S.W."],
    specialties: ["PTSD Treatment", "EMDR Therapy", "Anxiety Disorders", "Depression"],
    bio: "Lisa specializes in evidence-based trauma treatments and has extensive experience helping clients overcome PTSD, anxiety, and depression. Her compassionate approach and expertise in EMDR therapy have made her a trusted resource for complex trauma cases.",
    image: "/placeholder-staff-4.jpg",
    experience: "10+ years",
    education: [
      "M.S.W. - University of Maryland School of Social Work",
      "B.A. in Social Work - Salisbury University",
      "EMDR Training Institute Certification"
    ],
    certifications: [
      "Licensed Clinical Social Worker (LCSW)",
      "EMDR Certified Therapist",
      "Certified Clinical Trauma Professional",
      "Certified Anxiety Treatment Specialist"
    ]
  },
  {
    id: "david-martinez",
    name: "David Martinez",
    title: "Men's Group Facilitator & Substance Abuse Counselor",
    credentials: ["LCADC", "CAC", "M.A."],
    specialties: ["Men's Issues", "Group Therapy", "Substance Abuse", "Anger Management"],
    bio: "David brings a unique perspective to men's mental health, having overcome his own challenges with addiction. His authentic approach and deep understanding of men's issues make him particularly effective in group settings and individual counseling.",
    image: "/placeholder-staff-5.jpg",
    experience: "8+ years",
    education: [
      "M.A. in Counseling Psychology - Loyola University Maryland",
      "B.A. in Psychology - University of Baltimore",
      "Certified Addiction Counselor Training"
    ],
    certifications: [
      "Licensed Clinical Alcohol & Drug Counselor (LCADC)",
      "Certified Addiction Counselor (CAC)",
      "Certified Group Facilitator",
      "Anger Management Specialist Certification"
    ]
  }
]

export default function StaffPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedStaff, setSelectedStaff] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-1">
              <Link href="/?skip=true">
                <Image
                  src="/glass-house-logo.png"
                  alt="Glass House Recovery Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
              <Link href="/?skip=true" className="text-2xl font-bold tracking-tighter">
                Glass House
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link href="/about" className="text-muted-foreground hover:text-foreground">About</Link>
              <Link href="/programs" className="text-muted-foreground hover:text-foreground">Programs</Link>
              <Link href="/admissions" className="text-muted-foreground hover:text-foreground">Admissions</Link>
              <Link href="/staff" className="text-foreground font-semibold">Staff</Link>
              <Link href="/referrals" className="text-muted-foreground hover:text-foreground">Referrals</Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link>
              <Link href="/newsletter" className="text-muted-foreground hover:text-foreground">Newsletter</Link>
              <Link href="/faq" className="text-muted-foreground hover:text-foreground">FAQ</Link>
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
                <Link href="/staff" className="text-foreground font-semibold px-2 py-1">Staff</Link>
                <Link href="/referrals" className="text-muted-foreground hover:text-foreground px-2 py-1">Referrals</Link>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground px-2 py-1">Contact</Link>
                <Link href="/newsletter" className="text-muted-foreground hover:text-foreground px-2 py-1">Newsletter</Link>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground px-2 py-1">FAQ</Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section with Image */}
      <section className="container mx-auto px-5">
        <div className="mb-8 md:mb-16 mt-8">
          <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="https://glasshouserecovery.com/wp-content/uploads/2025/08/pexels-cottonbro-6830875-scaled.jpg"
              alt="Professional team meeting - Glass House Recovery staff"
              fill
              className="object-cover grayscale blur-[3px]"
              priority
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
                  Our Expert Team
                </h1>
                <p className="text-xl md:text-2xl leading-relaxed font-medium text-white/90">
                  Meet the experienced professionals dedicated to your recovery and mental health journey at Glass House Recovery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="bg-muted/50 py-12">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Award className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">75+ Years</h3>
              <p className="text-muted-foreground">Combined Clinical Experience</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <GraduationCap className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Advanced Degrees</h3>
              <p className="text-muted-foreground">Ph.D., M.D., M.A., M.S.W. Credentials</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">1000+ Clients</h3>
              <p className="text-muted-foreground">Successfully Treated</p>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Grid */}
      <section className="py-20">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {staffMembers.map((staff) => (
              <Card key={staff.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden bg-muted flex-shrink-0">
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary">
                          {staff.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-1">{staff.name}</CardTitle>
                      <CardDescription className="text-sm font-medium text-primary mb-2">
                        {staff.title}
                      </CardDescription>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {staff.credentials.map((cred, index) => (
                          <span key={index} className="text-xs bg-muted px-2 py-1 rounded">
                            {cred}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Specialties:</h4>
                      <div className="flex flex-wrap gap-1">
                        {staff.specialties.map((specialty, index) => (
                          <span key={index} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {staff.bio}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h4 className="font-semibold mb-1">Experience:</h4>
                        <p className="text-muted-foreground">{staff.experience}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Education:</h4>
                        <ul className="text-muted-foreground space-y-1">
                          {staff.education.slice(0, 2).map((edu, index) => (
                            <li key={index} className="text-xs">{edu}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => setSelectedStaff(selectedStaff === staff.id ? null : staff.id)}
                    >
                      {selectedStaff === staff.id ? 'Hide Details' : 'View Full Profile'}
                    </Button>

                    {selectedStaff === staff.id && (
                      <div className="mt-4 p-4 bg-muted/50 rounded-lg space-y-3">
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Complete Education:</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {staff.education.map((edu, index) => (
                              <li key={index}>• {edu}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm mb-2">Certifications & Licenses:</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {staff.certifications.map((cert, index) => (
                              <li key={index}>• {cert}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
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
              Ready to Meet Our Team?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our experienced professionals are here to support your journey to mental health and recovery. Contact us to learn more about our approach and how we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Schedule a Consultation</Link>
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
