'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

const GH_ENDPOINT = 'https://script.google.com/macros/s/AKfycbyLCs-lG02lCPjJhMV_i8_fJEpMMhGJmGOnxHCbz35aHKhI__nBHEpGqn8FowJNZs_7/exec'

interface FormData {
  name: string
  email: string
  phone: string
  program: string
}

interface ContactFormProps {
  title: string
  description: string
  className?: string
}

export function ContactForm({ title, description, className = "" }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    program: ''
  })

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handlePhoneChange = (value: string) => {
    // Remove non-digits
    const cleaned = value.replace(/\D/g, '')
    setFormData(prev => ({ ...prev, phone: cleaned }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (isSubmitting) return

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.program) {
      return
    }

    if (formData.phone.length !== 10) {
      return
    }

    setIsSubmitting(true)

    const params = new URLSearchParams({
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      program: formData.program
    })

    try {
      await fetch(GH_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
        body: params.toString()
      })
    } catch (err) {
      console.warn('Fetch failed — still redirecting.')
    }

    // Redirect to thank you page
    window.location.href = 'https://glasshouserecovery.com/lander-thank-you/'
  }

  if (isSubmitted) {
    return (
      <Card className={className}>
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Thank you for reaching out.</h3>
          <p className="text-muted-foreground text-lg">We've received your info and will contact you shortly.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Your Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              pattern="^[^@\s]+@[^@\s]+\.(com|net|org|edu|gov|io)$"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Phone Number (10 digits)"
              value={formData.phone}
              onChange={(e) => handlePhoneChange(e.target.value)}
              maxLength={10}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="program">Select Program</Label>
            <Select value={formData.program} onValueChange={(value) => handleInputChange('program', value)} required>
              <SelectTrigger>
                <SelectValue placeholder="Select Program" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="PHP">Partial Hospitalization Program</SelectItem>
                <SelectItem value="IOP">Intensive Outpatient Program</SelectItem>
                <SelectItem value="OP">Outpatient Program</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Get Help Now'}
          </Button>
          <p className="text-sm text-muted-foreground text-center">
            All information is confidential and protected by HIPAA.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
