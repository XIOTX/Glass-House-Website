"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactForm } from "@/components/ContactForm"
import { Phone, Mail, MapPin, Check, Hospital, Home, Calendar, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [animationFinalized, setAnimationFinalized] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const container = document.querySelector('.logo-reveal-container') as HTMLElement;
    const logoSections = document.querySelectorAll('.logo-layer:not(.logo-base)');
    const header = document.querySelector('header') as HTMLElement;
    const main = document.querySelector('main') as HTMLElement;
    const logoSection = document.querySelector('.logo-reveal-section') as HTMLElement;
    const background = document.querySelector('.space-background') as HTMLElement;

    let animationProgress = 0;
    let transitionStarted = false;

    function updateLogoState(scrollProgress: number) {
      const layers = [
        { name: 'top', start: 0.05, end: 0.25 },
        { name: 'top-right', start: 0.2, end: 0.45 },
        { name: 'top-right-left', start: 0.4, end: 0.65 },
        { name: 'top-right-left-in', start: 0.6, end: 0.85 },
        { name: 'full', start: 0.7, end: 0.9 }
      ];

      // Update logo container scale - starts at 50%, reaches 100% when full brightness is achieved
      const logoContainer = document.querySelector('.logo-container') as HTMLElement;
      if (logoContainer) {
        let logoScale = 0.5; // Start at 50%
        
        if (scrollProgress >= 0.05 && scrollProgress <= 0.9) {
          const scaleProgress = (scrollProgress - 0.05) / (0.9 - 0.05); // Same progression as brightness
          logoScale = 0.5 + (scaleProgress * 0.5); // 50% to 100%
        } else if (scrollProgress > 0.9) {
          logoScale = 1.0; // Final scale at 100%
        }
        
        logoContainer.style.transform = `scale(${logoScale})`;
      }

      layers.forEach(layer => {
        const element = document.querySelector(`[data-section="${layer.name}"]`) as HTMLElement;
        if (!element) return;

        let opacity = 0;

        if (scrollProgress >= layer.start && scrollProgress <= layer.end) {
          const layerProgress = (scrollProgress - layer.start) / (layer.end - layer.start);
          opacity = Math.min(1, Math.max(0, layerProgress));
        } else if (scrollProgress > layer.end) {
          opacity = 1;
        }

        element.style.opacity = opacity.toString();
        element.style.visibility = opacity === 0 ? 'hidden' : 'visible';

        if (opacity > 0) {
          let blurAmount, brightness;

          if (layer.name === 'full') {
            const blurProgress = Math.pow(opacity, 1.8);
            blurAmount = (1 - blurProgress) * 15;
            brightness = 0.3 + (blurProgress * 1.2);
          } else {
            blurAmount = 12;
            brightness = 0.2 + (opacity * 0.6);
          }

          const glowIntensity = 10;
          const glowOpacity = 0.05;

          element.style.filter = `blur(${blurAmount}px) brightness(${brightness}) drop-shadow(0 0 ${glowIntensity}px rgba(255, 255, 255, ${glowOpacity}))`;
        } else {
          element.style.filter = 'blur(15px) brightness(0.1)';
        }
      });

      // Update stars background - starts at 10% opacity, reaches 100% when logo is fully lit, same glow as logo
      if (background) {
        let bgOpacity = 0.1; // Start at 10%
        let blurAmount = 15; // Start blurred
        let brightness = 0.2; // Start dim like logo
        let glowIntensity = 30;
        let glowOpacity = 0.4;
        let scale = 1.2; // Start zoomed in at 120%

        if (scrollProgress >= 0.05 && scrollProgress <= 0.9) {
          const bgProgress = (scrollProgress - 0.05) / (0.9 - 0.05); // Start with first logo layer at 0.05
          bgOpacity = 0.1 + (bgProgress * 0.9); // 10% to 100%

          // Same glow progression as logo layers
          blurAmount = 15 * (1 - (bgProgress * 0.8)); // 15px to 3px blur (80% reduction)
          brightness = 0.2 + (bgProgress * 1.0); // Same brightness progression as logo
          glowIntensity = 30 + (bgProgress * 20); // Increase glow
          glowOpacity = 0.4 + (bgProgress * 0.4); // Increase glow opacity
          
          // Zoom from 120% to 100%
          scale = 1.2 - (bgProgress * 0.2);
        } else if (scrollProgress > 0.9 && scrollProgress <= 1.4) {
          // During the "dead zone" - keep everything at final values except scale
          bgOpacity = 1.0;
          blurAmount = 2;
          brightness = 1.2; // Final brightness like logo
          glowIntensity = 50;
          glowOpacity = 0.8;
          
          // Continue scale animation during dead zone
          const scaleProgress = (scrollProgress - 0.9) / (1.4 - 0.9);
          scale = 1.0 - (scaleProgress * 0.1); // Continue zooming from 100% to 90%
        } else if (scrollProgress > 1.4) {
          bgOpacity = 1.0;
          blurAmount = 2;
          brightness = 1.2; // Final brightness like logo
          glowIntensity = 50;
          glowOpacity = 0.8;
          scale = 0.9; // Final scale at 90%
        }

        background.style.opacity = bgOpacity.toString();
        background.style.filter = `blur(${blurAmount}px) brightness(${brightness}) drop-shadow(0 0 ${glowIntensity}px rgba(255, 255, 255, ${glowOpacity}))`;
        background.style.transform = `scale(${scale})`;
      }

      // Extended wait time - start transition at 1.4 to give much more time with fully lit logo
      if (scrollProgress >= 1.4 && !transitionStarted) {
        transitionStarted = true;
        startHeaderTransition();
      }
    }

    function startHeaderTransition() {
      // Show main content immediately when transition starts
      if (main) {
        main.style.visibility = 'visible';
        main.style.position = 'relative';
        main.style.zIndex = '1';
      }

      // Show header at bottom to start sliding up
      if (header) {
        header.style.display = 'block';
        header.style.position = 'fixed';
        header.style.top = `${window.innerHeight}px`; // Start below viewport
        header.style.left = '0';
        header.style.right = '0';
        header.style.width = '100%';
        header.style.zIndex = '100';
      }

      // Animate header sliding up and container sliding up
      let progress = 0;
      const duration = 1000; // 1 second transition
      const startTime = Date.now();

      function animateTransition() {
        const elapsed = Date.now() - startTime;
        progress = Math.min(1, elapsed / duration);

        if (container) {
          const containerOffset = progress * window.innerHeight;
          container.style.transform = `translateY(-${containerOffset}px)`;
        }

        if (header) {
          const headerTop = window.innerHeight - (progress * window.innerHeight);
          header.style.top = `${Math.max(0, headerTop)}px`;
        }

        if (progress < 1) {
          requestAnimationFrame(animateTransition);
        } else {
          // Transition complete
          setAnimationFinalized(true);

          // Hide animation elements
          if (container) {
            container.style.display = 'none';
          }
          if (logoSection) {
            logoSection.style.display = 'none';
          }

          // Set header to fixed at top
          if (header) {
            header.style.position = 'fixed';
            header.style.top = '0px';
            header.style.zIndex = '50';
          }

          // Position main content below header
          if (main) {
            main.style.marginTop = '64px';
            main.style.position = 'static';
          }

          // Allow normal scrolling
          document.body.style.overflow = 'auto';
          document.documentElement.style.overflow = 'auto';
          window.removeEventListener('wheel', handleWheel);
        }
      }

      requestAnimationFrame(animateTransition);
    }

    function handleWheel(e: WheelEvent) {
      if (transitionStarted) return; // Don't handle wheel during transition

      e.preventDefault();

      const delta = e.deltaY;
      const progressIncrement = delta / (window.innerHeight * 1.8);

      animationProgress = Math.max(0, Math.min(1.6, animationProgress + progressIncrement)); // Extended to 1.6 for much more time with fully lit logo
      updateLogoState(animationProgress);
    }

    function initializeAnimation() {
      animationProgress = 0;
      transitionStarted = false;

      if (header) {
        header.style.display = 'none';
      }

      // Initially hide main content
      if (main) {
        main.style.visibility = 'hidden';
        main.style.marginTop = '0';
        main.style.paddingTop = '0';
      }

      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';

      if (container) {
        container.style.position = 'fixed';
        container.style.top = '0';
        container.style.left = '0';
        container.style.right = '0';
        container.style.width = '100%';
        container.style.height = '100vh';
        container.style.zIndex = '9999';
        container.style.visibility = 'visible';
        container.style.transform = 'translateY(0px)';
        container.style.display = 'flex';
      }

      // Initialize logo container scale to 50%
      const logoContainer = document.querySelector('.logo-container') as HTMLElement;
      if (logoContainer) {
        logoContainer.style.transform = 'scale(0.5)';
      }

      if (logoSection) {
        logoSection.style.display = 'block';
      }

      // Initialize background with same glow style as logo
      if (background) {
        background.style.opacity = '0.1';
        background.style.filter = 'blur(15px) brightness(0.2) drop-shadow(0 0 25px rgba(255, 255, 255, 0.4))';
      }

      logoSections.forEach(layer => {
        const layerElement = layer as HTMLElement;
        layerElement.style.opacity = '0';
        layerElement.style.visibility = 'hidden';
        layerElement.style.filter = 'blur(15px) brightness(0.1)';
      });

      updateLogoState(0);
    }

    if (!animationFinalized) {
      window.addEventListener('wheel', handleWheel, { passive: false });
      initializeAnimation();
    }

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [animationFinalized]);

  return (
    <div className="min-h-screen">
      <style jsx>{`
        .logo-reveal-section {
          height: 400vh;
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

        .space-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          opacity: 0.3;
          filter: blur(8px) brightness(0.5) drop-shadow(0 0 25px rgba(255, 255, 255, 0.6));
        }



        .logo-container {
          position: relative;
          width: 70vw;
          height: 70vh;
          max-width: 700px;
          max-height: 525px;
          z-index: 2;
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
          opacity: 0.12;
          filter: blur(12px) brightness(0.4) drop-shadow(0 0 10px rgba(255, 255, 255, 0.15));
          z-index: 1;
        }

        .logo-top { z-index: 2; }
        .logo-top-right { z-index: 3; }
        .logo-top-right-left { z-index: 4; }
        .logo-top-right-left-in { z-index: 5; }
        .logo-full { z-index: 6; }

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

      <section className="logo-reveal-section">
        <div className="logo-reveal-container">
          <div className="space-background" style={{
            backgroundImage: 'url(/starstr2.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}>
          </div>
          <div className="logo-container">
            <div className="logo-layer logo-base floating">
              <Image
                src="/ghwt.png"
                alt="Glass House Logo Base"
                fill
                className="object-contain"
                priority
              />
            </div>

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

      <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 h-16" style={{display: 'none'}}>
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
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link href="/about" className="text-muted-foreground hover:text-foreground">About</Link>
              <Link href="/programs" className="text-muted-foreground hover:text-foreground">Programs</Link>
              <Link href="/admissions" className="text-muted-foreground hover:text-foreground">Admissions</Link>
              <Link href="/referrals" className="text-muted-foreground hover:text-foreground">Referrals</Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link>
              <Link href="/newsletter" className="text-muted-foreground hover:text-foreground">Newsletter</Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-accent"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur border-t border-border z-50">
              <nav className="container mx-auto px-5 py-4">
                <div className="flex flex-col space-y-4">
                  <Link 
                    href="/about" 
                    className="text-foreground hover:text-primary py-2 px-4 rounded-md hover:bg-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link 
                    href="/programs" 
                    className="text-foreground hover:text-primary py-2 px-4 rounded-md hover:bg-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Programs
                  </Link>
                  <Link 
                    href="/admissions" 
                    className="text-foreground hover:text-primary py-2 px-4 rounded-md hover:bg-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Admissions
                  </Link>
                  <Link 
                    href="/referrals" 
                    className="text-foreground hover:text-primary py-2 px-4 rounded-md hover:bg-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Referrals
                  </Link>
                  <Link 
                    href="/contact" 
                    className="text-foreground hover:text-primary py-2 px-4 rounded-md hover:bg-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  <Link 
                    href="/newsletter" 
                    className="text-foreground hover:text-primary py-2 px-4 rounded-md hover:bg-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Newsletter
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main>
        <section className="container mx-auto px-5">
          <div className="mb-6 md:mb-06 mt-6 md:mt-8">
            <div className="relative w-full h-[300px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/hero-lightbulbs.png"
                alt="Glass House Recovery"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex-col md:flex-row flex items-start md:justify-between mb-8 md:mb-02">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 mb-4 -mt-2">
                GLASS HOUSE
              </h1>
              <div className="mb-0">
                <span className="text-lg text-muted-foreground">Creative Outpatient Treatment</span>
              </div>
              <div className="mb-4"></div>
              <p className="text-lg md:text-xl font-semibold mb-4 md:mb-6 max-w-2xl">
                Welcome to Glass House. Come as you are. Leave as yourself.
              </p>
              <p className="text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-2xl">
                Build a new foundation through intensive self-development{" "}
                and evidence-based treatment.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Button size="lg" className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 min-h-[44px]" asChild>
                  <a href="/contact">Contact Us</a>
                </Button>
                <Button variant="outline" size="lg" className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 min-h-[44px]" asChild>
                  <Link href="/programs">Our Programs</Link>
                </Button>
              </div>
            </div>

            <div className="md:w-1/2 mt-12 md:mt-0 md:pl-8">
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
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
                <h2 className="text-2xl md:text-4xl font-bold tracking-tighter mb-4 md:mb-6">
                  Is it time to write a new chapter?
                </h2>
                <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6">
                  Breaking free from unhealthy patterns may seem an impossible task. Trapped in a self-imposed prison is a life no one wants to endure.
                </p>
                <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6">
                  At Glass House, our programs are designed to help those struggling to <strong>create a new future</strong>. We recognize the spark within and do more than just provide instruction on how quit behaviors.
                </p>
                <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6">
                  We address trauma, help develop tools and skills, provide a refreshing and comfortable environment, and use evidence-based therapies coupled with a creative perspective to deliver treatment that brings individuals back to life.
                </p>
                <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
                  Our approach is built on experience and expertise. Our goal for our patients is a new freedom. Let us show you that a creative outpatient rehab can lead to long lasting recovery.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <Button size="lg" className="min-h-[44px]" asChild>
                    <Link href="/about">Read more about our philosophy</Link>
                  </Button>
                  <Button variant="outline" size="lg" className="min-h-[44px]" asChild>
                    <Link href="/programs">Check out our Programs</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-12 md:py-20">
          <div className="container mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold tracking-tighter mb-6 md:mb-8">
                  Our approach to your journey works by discovering the person your pain took away from the world and bringing them back to life.
                </h2>
                <Button size="lg" className="min-h-[44px]" asChild>
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
            <div className="text-center max-w-4xl mx-auto mt-10 md:mt-16">
              <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
                <strong>Whether you've been in treatment before or this is your first time, our program was designed<br />to address the challenges keeping you from moving forward.</strong>
              </p>
              <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
                <strong>Your time here will be spent immersing yourself in intensive group content calibrated<br />specifically for you. We believe that anyone is capable of finding a new way of life and creating <em>something</em> to give to the world in their own way.</strong>
              </p>
              <p className="text-base md:text-lg text-muted-foreground">
                We will give you the tools to navigate life after active addiction<br />and build a life you no longer want to escape from.
              </p>
            </div>
          </div>
        </section>

        <section className="py-10 md:py-16">
          <div className="container mx-auto px-5">
            <div className="text-center mb-02">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4">
                Certified To Support Recovery
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto items-center">
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
