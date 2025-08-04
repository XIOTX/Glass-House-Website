import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Phone, MapPin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ContactPage() {
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
              <Link href="/admissions" className="text-muted-foreground hover:text-foreground">Admissions</Link>
              <Link href="/referrals" className="text-muted-foreground hover:text-foreground">Referrals</Link>
              <Link href="/contact" className="text-foreground">Contact</Link>
              <Link href="/newsletter" className="text-muted-foreground hover:text-foreground">Newsletter</Link>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section with Hand Water Image */}
        <section className="container mx-auto px-5">
          <div className="mb-8 md:mb-16 mt-8">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://glasshouserecovery.com/wp-content/uploads/2023/08/hand-water-cropped-scaled.jpg"
                alt="Contact - Hand in water"
                fill
                className="object-cover"
                priority
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4 max-w-4xl">
                  <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight uppercase">
                    CONTACT
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information and Form Section */}
        <section className="py-20">
          <div className="container mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

              {/* Contact Information */}
              <div className="space-y-12">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-8">
                    Let's talk about how we can help.
                  </h2>


                  <div className="bg-muted/50 p-6 rounded-lg mb-12">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      If you need crisis assistance outside of our current operating hours, call 911 (for true emergencies), contact 211, your local crisis response team, or go to the nearest emergency room.
                    </p>
                  </div>
                </div>

                <div className="space-y-12">


                  {/* Call Us Section */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Call us</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Give us a call at{" "}
                      <a href="tel:4109703374" className="font-semibold text-foreground hover:underline">
                        410.970.3374
                      </a>{" "}
                      or send us an email:
                    </p>
                    <p className="text-lg text-muted-foreground">
                      <a href="mailto:admissions@glasshouserecovery.com" className="font-semibold text-foreground hover:underline">
                        admissions@glasshouserecovery.com
                      </a>
                    </p>
                  </div>

                  {/* Address Section */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Address</h3>
                    <div className="text-lg text-muted-foreground leading-relaxed">
                      <p className="font-semibold text-foreground">Glass House</p>
                      <p>
                        <a
                          href="https://goo.gl/maps/7Y3HPeQYzeGCpAVH7"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          8318 Forrest St., Suite 100<br />
                          Ellicott City, MD 21043
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="w-full">

                  <CardContent className="space-y-6 pt-6">
                    <div id="gh-form-container">
                      <form className="space-y-4 gh-intake-form-2">
                        <div className="space-y-2">
                          <Label htmlFor="contact-name">Your Name</Label>
                          <Input
                            name="name"
                            id="contact-name"
                            placeholder="Your Name"
                            required
                            className="w-full"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="contact-email">Email Address</Label>
                          <Input
                            name="email"
                            id="contact-email"
                            type="email"
                            placeholder="Email Address"
                            required
                            className="w-full"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="contact-phone">Phone Number (10 digits)</Label>
                          <Input
                            name="phone"
                            id="contact-phone"
                            type="tel"
                            placeholder="Phone Number (10 digits)"
                            required
                            className="w-full"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="contact-comments">Comments or Questions</Label>
                          <textarea
                            name="comments"
                            id="contact-comments"
                            placeholder="Let us know how we can help..."
                            className="w-full min-h-[120px] p-3 border border-input bg-background rounded-md text-sm"
                            maxLength={500}
                          />
                          <div id="charCount" className="text-xs text-muted-foreground text-right">0/500</div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="contact-method">How Should We Contact You?</Label>
                          <select
                            name="contact_method"
                            id="contact-method"
                            required
                            className="w-full p-3 border border-input bg-background rounded-md text-sm"
                          >
                            <option value="">Select Method</option>
                            <option value="Call">Call</option>
                            <option value="Text">Text</option>
                            <option value="Email">Email</option>
                          </select>
                        </div>

                        <div className="hidden" id="textConsentContainer">
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              name="text_consent"
                              value="Yes"
                              id="textConsentCheckbox"
                              className="rounded"
                            />
                            <Label htmlFor="textConsentCheckbox" className="text-sm">
                              By submitting your phone number, you agree to receive recurring automated marketing messages from Glass House. Msg & data rates may apply. Reply STOP to unsubscribe.
                            </Label>
                          </div>
                        </div>

                        <input type="hidden" name="form_source" value="contact_form" />

                        <Button type="submit" className="w-full" size="lg">
                          Get Help Now
                        </Button>

                        <p className="text-xs text-center text-muted-foreground">
                          All information is confidential and protected by HIPAA.
                        </p>
                      </form>
                    </div>

                    <div id="gh-form-thankyou" className="hidden opacity-0 transition-opacity duration-700 text-center mt-6">
                      <h3 className="text-2xl font-bold mb-4">Thank you for reaching out.</h3>
                      <p className="text-lg">We've received your info and will contact you shortly.</p>
                    </div>
                  </CardContent>
                </Card>

                <script dangerouslySetInnerHTML={{
                  __html: `
                    const GH_ENDPOINT_2 = 'https://script.google.com/macros/s/AKfycbyLCs-lG02lCPjJhMV_i8_fJEpMMhGJmGOnxHCbz35aHKhI__nBHEpGqn8FowJNZs_7/exec';

                    document.addEventListener('DOMContentLoaded', function() {
                      const textarea = document.getElementById('contact-comments');
                      const charCount = document.getElementById('charCount');

                      if (textarea && charCount) {
                        textarea.addEventListener('input', function() {
                          charCount.textContent = textarea.value.length + '/500';
                        });
                      }

                      const contactSelect = document.getElementById('contact-method');
                      if (contactSelect) {
                        contactSelect.addEventListener('change', function() {
                          const method = this.value;
                          const checkboxContainer = document.getElementById("textConsentContainer");
                          const checkbox = document.getElementById("textConsentCheckbox");
                          if (method === "Text") {
                            checkboxContainer?.classList.remove("hidden");
                            if (checkbox) checkbox.required = true;
                          } else {
                            checkboxContainer?.classList.add("hidden");
                            if (checkbox) {
                              checkbox.required = false;
                              checkbox.checked = false;
                            }
                          }
                        });
                      }
                    });

                    document.querySelectorAll('.gh-intake-form-2').forEach(form => {
                      form.addEventListener('submit', async e => {
                        e.preventDefault();
                        const submitBtn = form.querySelector('button[type="submit"]');
                        if (!form.checkValidity() || submitBtn.disabled) return;
                        submitBtn.disabled = true;
                        submitBtn.classList.add('opacity-50', 'cursor-not-allowed');
                        const params = new URLSearchParams({
                          name:           form.name.value.trim(),
                          email:          form.email.value.trim(),
                          phone:          form.phone.value.trim(),
                          program:        form.program?.value || '',
                          comments:       form.comments?.value || '',
                          contact_method: form.contact_method?.value || '',
                          text_consent:   form.text_consent?.checked ? 'Yes' : 'No',
                          form_source:    form.form_source?.value || 'unknown'
                        });
                        try {
                          await fetch(GH_ENDPOINT_2, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
                            body: params.toString()
                          });
                        } catch (err) {
                          console.warn('Fetch failed — still showing thank-you message.');
                        }
                        const formContainer = form.closest('#gh-form-container');
                        const thankYou = document.getElementById('gh-form-thankyou');
                        if (formContainer && thankYou) {
                          formContainer.style.display = 'none';
                          thankYou.classList.remove('hidden');
                          setTimeout(() => {
                            thankYou.classList.add('opacity-100');
                          }, 100);
                        }
                      });
                    });
                  `
                }} />
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
