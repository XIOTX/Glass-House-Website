import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Phone, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ReferralsPage() {
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
              <Link href="/referrals" className="text-foreground">Referrals</Link>
              <Link href="/#contact" className="text-muted-foreground hover:text-foreground">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section with Image Background */}
        <section className="container mx-auto px-5">
          <div className="mb-8 md:mb-16 mt-8">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://glasshouserecovery.com/wp-content/uploads/2025/07/darkwater4.png"
                alt="Referrals - Dark water"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4 max-w-4xl">
                  <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight uppercase">
                    REFERRALS
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Glass House Recovery Center Section */}
        <section className="py-20">
          <div className="container mx-auto px-5">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-12 text-center">
              Why Glass House Recovery Center?
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">The creative person thrives here:</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    At Glass House Recovery, we provide an atmosphere that fosters the unique talents and perspectives of creative people. While not limited to artists, musicians or other creatives, we aim to create a sanctuary where a patient's creativity becomes a vital tool in their recovery journey.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Programs structured to support the working individual:</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our IOP program is perfect for working individuals, offering flexible schedules and remote support options, tailored to their professional commitments and personal recovery journey.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Innovation and best practices:</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    At Glass House Recovery, innovation is paramount. We consistently integrate the latest research, techniques, and best practices, ensuring that our approach remains dynamic and effective in guiding individuals toward lasting recovery and personal growth.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Providing a solid foundation in recovery:</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We provide a comprehensive foundation in recovery, equipping patients with the necessary tools, skills, and support systems to ensure they leave our center empowered and well-prepared for continued success in their journey.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground">
                <strong>Insurance and payment:</strong> We accept multiple insurance plans as well as Maryland Medicaid. We can also create payment plans and scholarships. <Link href="/admissions" className="underline hover:no-underline">Learn more.</Link>
              </p>
            </div>
          </div>
        </section>

        {/* How to Make a Referral Section */}
        <section className="bg-muted/50 py-20">
          <div className="container mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-8">
                  How to make a referral
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    This system is HIPAA compliant. This means that the data you provide will be sent, stored and accessed safely to ensure the confidentiality, integrity and security of electronic protected health information.
                  </p>
                  <ul className="space-y-3 list-disc list-inside">
                    <li>Please complete the following form, which will be reviewed by our admissions and intake team within one business day (24 hours).</li>
                    <li>Once reviewed, we will reach out to schedule a phone screening. This process generally takes 15-30 minutes.</li>
                    <li>The clinical team will then review the pre-admission assessment and make a determination.</li>
                  </ul>
                </div>
              </div>

              {/* Referrals Form */}
              <div>
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle>Glass House Referral Form</CardTitle>
                    <CardDescription>
                      All information is confidential and protected by HIPAA.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div id="gh-form-container">
                      <form className="space-y-4 gh-intake-form-2">
                        <div className="space-y-2">
                          <Label htmlFor="referrer-name">Your Name</Label>
                          <Input
                            name="referrer_name"
                            id="referrer-name"
                            placeholder="Your Name"
                            required
                            className="w-full"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="patient-name">Patient's Name (First & Last)</Label>
                          <Input
                            name="name"
                            id="patient-name"
                            placeholder="Patient's Name (First & Last)"
                            required
                            className="w-full"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            name="email"
                            id="email"
                            type="email"
                            placeholder="Email Address"
                            required
                            className="w-full"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number (10 digits)</Label>
                          <Input
                            name="phone"
                            id="phone"
                            type="tel"
                            placeholder="Phone Number (10 digits)"
                            required
                            className="w-full"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="comments">Comments or Questions</Label>
                          <textarea
                            name="comments"
                            id="comments"
                            placeholder="Please provide any additional information that would be helpful..."
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
                              I consent to receive text messages regarding my inquiry.
                            </Label>
                          </div>
                        </div>

                        <input type="hidden" name="form_source" value="referral_form_page" />

                        <Button type="submit" className="w-full" size="lg">
                          Submit Referral
                        </Button>

                        <p className="text-xs text-center text-muted-foreground">
                          All information is confidential and protected by HIPAA.
                        </p>
                      </form>
                    </div>

                    <div id="gh-form-thankyou" className="hidden opacity-0 transition-opacity duration-700 text-center mt-6">
                      <h3 className="text-2xl font-bold mb-4">Thank you for reaching out.</h3>
                      <p className="text-lg">Thanks for submitting. Someone from our admissions team will reach out to you shortly.</p>
                    </div>
                  </CardContent>
                </Card>

                <script dangerouslySetInnerHTML={{
                  __html: `
                    const GH_ENDPOINT_2 = 'https://script.google.com/macros/s/AKfycbyLCs-lG02lCPjJhMV_i8_fJEpMMhGJmGOnxHCbz35aHKhI__nBHEpGqn8FowJNZs_7/exec';

                    document.addEventListener('DOMContentLoaded', function() {
                      const textarea = document.getElementById('comments');
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
                          referrer_name:  form.referrer_name?.value.trim() || '',
                          name:           form.name.value.trim(),
                          email:          form.email.value.trim(),
                          phone:          form.phone.value.trim(),
                          program:        '',
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
