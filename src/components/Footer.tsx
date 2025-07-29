import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"
export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="container mx-auto px-5">
        <div className="py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
            <div>
              <h3 className="font-bold mb-4">Glass House Recovery</h3>
              <div className="flex flex-col md:flex-row md:items-start md:gap-6 space-y-3 md:space-y-0 text-sm text-muted-foreground">
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
            <div className="text-center md:text-right">
              <Button className="mb-4" asChild>
                <Link href="/#contact">SUBSCRIBE TO NEWSLETTER</Link>
              </Button>
              <div className="flex justify-center md:justify-end space-x-4 text-sm">
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
  )
}
