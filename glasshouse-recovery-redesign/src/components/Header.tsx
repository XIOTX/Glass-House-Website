"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-5">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-1">
            <Image
              src="/glass-house-logo.png"
              alt="Glass House Recovery Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center">
              Glass House
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/about"
              className={pathname === "/about" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}
            >
              About
            </Link>
            <Link
              href="/programs"
              className={pathname === "/programs" ? "text-foreground" : "text-muted-foreground hover:text-foreground"}
            >
              Programs
            </Link>
            <Link href="/#admissions" className="text-muted-foreground hover:text-foreground">
              Admissions
            </Link>
            <Link href="/#contact" className="text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
