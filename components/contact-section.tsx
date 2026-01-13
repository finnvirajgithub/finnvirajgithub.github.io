"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, Github, Linkedin, Send, Copy, Check } from "lucide-react"
import emailjs from "@emailjs/browser"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "svirajrajapaksha18@gmail.com",
    href: "mailto:svirajrajapaksha18@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+94 755 166 904",
    href: "tel:+94755166904",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "finnvirajgithub",
    href: "https://github.com/finnvirajgithub",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Sameera Rajapakshe",
    href: "https://www.linkedin.com/in/sameera-rajapakshe/",
  },
]

// 🔐 EmailJS Config
const SERVICE_ID = "service_dlqivnr"
const TEMPLATE_ID = "template_l0dzo6o"
const PUBLIC_KEY = "ZBEvbHnLUy1zK6DaE"

export function ContactSection() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<"success" | "error" | null>(null)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleCopy = async (value: string, index: number) => {
    await navigator.clipboard.writeText(value)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      )

      setStatus("success")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("EmailJS Error:", error)
      setStatus("error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
            Contact
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          If you would like to discuss a project or just say hi, I'm always down to chat.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-4">
            {contactInfo.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="group flex items-center gap-4 p-4 rounded-lg border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Icon size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">
                      {item.label}
                    </p>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors truncate block"
                    >
                      {item.value}
                    </a>
                  </div>
                  <button
                    onClick={() => handleCopy(item.value, index)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Copy ${item.label}`}
                  >
                    {copiedIndex === index ? (
                      <Check size={16} className="text-primary" />
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>
              )
            })}
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
            <Textarea
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
            />

            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              <Send size={16} className="mr-2" />
              {loading ? "Sending..." : "Send Message"}
            </Button>

            {status === "success" && (
              <p className="text-green-500 text-sm text-center">
                Message sent successfully!
              </p>
            )}

            {status === "error" && (
              <p className="text-red-500 text-sm text-center">
                Failed to send message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
