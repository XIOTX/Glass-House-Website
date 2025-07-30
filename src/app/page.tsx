"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactForm } from "@/components/ContactForm"
import { Phone, Mail, MapPin, Check, Hospital, Home, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const container = document.querySelector('.logo-reveal-container');
    const logoSections = document.querySelectorAll('.logo-layer:not(.logo-base)');
    const section = document.querySelector('.logo-reveal-section');



    function updateLogoState(scrollProgress) {

      // Define overlapping ranges for each layer (0 to 1 progress)
      const layers = [
        { name: 'top', start: 0.05, end: 0.25 },
        { name: 'top-right', start: 0.2, end: 0.45 },
        { name: 'top-right-left', start: 0.4, end: 0.65 },
        { name: 'top-right-left-in', start: 0.6, end: 0.85 },
        { name: 'full', start: 0.7, end: 0.9 }
      ];

      // Update opacity for each layer based on scroll progress
      layers.forEach(layer => {
        const element = document.querySelector(`[data-section="${layer.name}"]`);
        if (!element) return;

        let opacity = 0;

        if (scrollProgress >= layer.start && scrollProgress <= layer.end) {
          // Calculate smooth opacity within this layer's range
          const layerProgress = (scrollProgress - layer.start) / (layer.end - layer.start);
          opacity = Math.min(1, Math.max(0, layerProgress));
        } else if (scrollProgress > layer.end) {
          // Fully visible if past the end
          opacity = 1;
        }

        // Apply smooth opacity and effects
        element.style.opacity = opacity;



        // Force hide if opacity should be 0
        if (opacity === 0) {
          element.style.visibility = 'hidden';
        } else {
          element.style.visibility = 'visible';
        }

        // Apply effects - keep blur until final full logo
        if (opacity > 0) {
          let blurAmount, brightness;

          if (layer.name === 'full') {
            // Slower, more gradual unblurring for final logo
            const blurProgress = Math.pow(opacity, 1.8); // Much slower curve
            blurAmount = (1 - blurProgress) * 15; // Start more blurred
            brightness = 0.3 + (blurProgress * 1.2);
          } else {
            // All other layers stay blurred but get brighter
            blurAmount = 12; // Keep consistent blur
            brightness = 0.2 + (opacity * 0.6);
          }

          const glowIntensity = 25 + (opacity * 15);
          const glowOpacity = 0.4 + (opacity * 0.4);

          element.style.filter = `blur(${blurAmount}px) brightness(${brightness}) drop-shadow(0 0 ${glowIntensity}px rgba(255, 255, 255, ${glowOpacity}))`;
        } else {
          element.style.filter = 'blur(15px) brightness(0.1)';
        }
      });

      // Handle black section scrolling and header attachment
      const header = document.querySelector('header');

      if (scrollProgress >= 0.95) {
        // Full logo sits longer, then start black section transition
        const transitionRange = 0.25; // 0.95 to 1.2 range for much smoother control
        const transitionProgress = Math.min(1, (scrollProgress - 0.95) / transitionRange);

        if (transitionProgress <= 0.6) {
          // Phase 1: Black section and header move together until header reaches top
          const blackSectionOffset = transitionProgress * (5/3) * window.innerHeight;

          container.style.transform = `translateY(-${blackSectionOffset}px)`;
          container.style.position = 'fixed';
          container.style.zIndex = '9999';
          container.style.transition = 'none';

          if (header) {
            header.style.display = 'block';
            header.style.position = 'fixed';
            header.style.top = `${Math.max(0, window.innerHeight - blackSectionOffset)}px`;
            header.style.left = '0';
            header.style.right = '0';
            header.style.width = '100%';
            header.style.zIndex = '50';
            header.style.transition = 'none';
          }
        } else {
          // Phase 2: Header stuck at top, black section continues moving off screen
          const extraProgress = (transitionProgress - 0.6) / 0.4;
          const totalOffset = window.innerHeight + (extraProgress * window.innerHeight * 1.5);

          container.style.transform = `translateY(-${totalOffset}px)`;
          container.style.position = 'fixed';
          container.style.zIndex = '9999';
          container.style.transition = 'none';

          if (header) {
            header.style.display = 'block';
            header.style.position = 'fixed';
            header.style.top = '0px';
            header.style.left = '0';
            header.style.right = '0';
            header.style.width = '100%';
            header.style.zIndex = '50';
            header.style.transition = 'none';
          }

          // Phase 3: Only when black section is completely off screen, enable normal page scrolling
          if (transitionProgress >= 1) {
            container.style.position = 'absolute';
            container.style.top = `${section.offsetHeight - window.innerHeight * 3}px`;
            container.style.transform = 'translateY(0px)';
            container.style.zIndex = '-1';
            container.style.visibility = 'hidden';

            if (header) {
              header.style.position = 'sticky';
              header.style.zIndex = '50';
            }
          }
        }

        // Set animation complete state
        if (!animationComplete) {
          setAnimationComplete(true);
          container.classList.add('animation-complete');
          section.classList.add('completed');
        }
      } else {
        // During logo animation or scrolling back up - reset everything
        container.style.transform = 'translateY(0px)';
        container.style.position = 'fixed';
        container.style.top = '0';
        container.style.left = '0';
        container.style.right = '0';
        container.style.width = '100%';
        container.style.height = '100vh';
        container.style.zIndex = '9999';
        container.style.visibility = 'visible';
        container.style.transition = 'none';

        // Hide header during logo animation
        if (header) {
          header.style.display = 'none';
          header.style.position = 'sticky';
          header.style.top = '0';
          header.style.left = 'auto';
          header.style.right = 'auto';
          header.style.width = 'auto';
          header.style.zIndex = '50';
          header.style.transition = '';
        }

        // Reset animation state when scrolling back up
        if (animationComplete) {
          setAnimationComplete(false);
          container.classList.remove('animation-complete');
          section.classList.remove('completed');
        }
      }
    }

    // Smooth scroll handling for continuous opacity control
    function handleScroll() {
      const scrollY = window.scrollY;
      const sectionHeight = section?.offsetHeight || window.innerHeight * 10;
      const scrollProgress = Math.min(1.3, Math.max(0, scrollY / sectionHeight)); // Extended to 1.3 for full transition

      // Always update logo state for smooth continuous animation
      updateLogoState(scrollProgress);
    }

    // Throttled scroll for better performance
    let ticking = false;
    function requestTick() {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', requestTick);

    // Initialize - set up proper initial state
    function initializeAnimation() {
      const header = document.querySelector('header');
      if (header) {
        header.style.display = 'none';
        header.style.position = 'sticky';
        header.style.top = '0';
        header.style.zIndex = '50';
      }

      // Lock page scrolling initially - only animation should control scroll
      document.body.style.overflow = 'hidden';

      // Ensure black container is properly positioned
      container.style.position = 'fixed';
      container.style.top = '0';
      container.style.left = '0';
      container.style.right = '0';
      container.style.width = '100%';
      container.style.height = '100vh';
      container.style.zIndex = '9999';
      container.style.visibility = 'visible';
      container.style.transform = 'translateY(0px)';

      // Ensure all logo layers start completely hidden
      logoSections.forEach(layer => {
        layer.style.opacity = '0';
        layer.style.visibility = 'hidden';
        layer.style.filter = 'blur(15px) brightness(0.1)';
      });

      // Force initial scroll check
      handleScroll();
    }

    // Run initialization immediately and after DOM is ready
    initializeAnimation();
    setTimeout(initializeAnimation, 100);

    return () => {
      window.removeEventListener('scroll', requestTick);
    };
  }, [animationComplete]);

  return (
    <div className="min-h-screen">
      {/* Add CSS styles */}
      <style jsx>{`
        .logo-reveal-section {
          height: 1000vh;
          position: relative;
        }



        .logo-reveal-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: black;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }

        .logo-reveal-container.animation-complete {
          position: relative;
          z-index: 1;
        }

        .logo-container {
          position: relative;
          width: 70vw;
          height: 70vh;
          max-width: 700px;
          max-height: 525px;
        }

        .logo-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transform-origin: center;
        }

        .logo-base {
          opacity: 0.08;
          filter: blur(12px) brightness(0.3) drop-shadow(0 0 15px rgba(255, 255, 255, 0.2));
          z-index: 1;
        }

        .logo-top {
          z-index: 2;
        }

        .logo-top-right {
          z-index: 3;
        }

        .logo-top-right-left {
          z-index: 4;
        }

        .logo-top-right-left-in {
          z-index: 5;
        }

        .logo-full {
          z-index: 6;
        }

        .logo-layer:not(.logo-base) {
          opacity: 0;
          filter: blur(15px) brightness(0.1);
          transition: none;
        }



        .floating {
          animation: float 8s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-6px) rotate(0.3deg); }
          50% { transform: translateY(-10px) rotate(0deg); }
          75% { transform: translateY(-6px) rotate(-0.3deg); }
        }

        @media (max-width: 768px) {
          .logo-container {
            width: 85vw;
            height: 60vh;
          }
        }

        @media (max-width: 480px) {
          .logo-container {
            width: 90vw;
            height: 50vh;
          }
        }
      `}</style>

      {/* Animated Logo Reveal Section */}
      <section className="logo-reveal-section">
        <div className="logo-reveal-container">
          {/* Logo layers container */}
          <div className="logo-container">
            {/* Base full logo - always visible but dimmed */}
            <div className="logo-layer logo-base floating">
              <Image
                src="/ghwt.png"
                alt="Glass House Logo Base"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Cumulative sections */}
            <div className="logo-layer logo-top floating" data-section="top">
              <Image
                src="/logo-top.png"
                alt="Glass House Logo Top"
                fill
                className="object-contain"
              />
            </div>

            <div className="logo-layer logo-top-right floating" data-section="top-right">
              <Image
                src="/logo-top-right.png"
                alt="Glass House Logo Top Right"
                fill
                className="object-contain"
              />
            </div>

            <div className="logo-layer logo-top-right-left floating" data-section="top-right-left">
              <Image
                src="/logo-top-right-left.png"
                alt="Glass House Logo Top Right Left"
                fill
                className="object-contain"
              />
            </div>

            <div className="logo-layer logo-top-right-left-in floating" data-section="top-right-left-in">
              <Image
                src="/logo-top-right-left-in.png"
                alt="Glass House Logo Top Right Left Inside"
                fill
                className="object-contain"
              />
            </div>

            {/* Full logo for final reveal */}
            <div className="logo-layer logo-full floating" data-section="full">
              <Image
                src="/ghwt.png"
                alt="Glass House Logo Full"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Header */}
      <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50" style={{display: 'none'}}>
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
