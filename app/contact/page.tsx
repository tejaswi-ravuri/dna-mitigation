"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-primary relative overflow-hidden">
      <Navbar />

      {/* Background image — sibling to content, not nested inside it */}
      <div
        className="lg:absolute hidden lg:block inset-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* Image sits on the right 60% only */}
        <div className="absolute top-0 right-0 w-[60%] h-full">
          <Image
            src="/payonlineBg.jpeg"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Horizontal blend — wide soft fade from left into image */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, var(--background) 0%, var(--background) 35%, color-mix(in srgb, var(--background) 70%, transparent) 50%, color-mix(in srgb, var(--background) 30%, transparent) 65%, transparent 80%)",
          }}
        />

        {/* Top fade */}
        <div
          className="absolute inset-x-0 top-0 h-64"
          style={{
            background: `
      linear-gradient(
        to bottom,
        var(--background) 0%,
        var(--background) 20%,
        color-mix(in srgb, var(--background) 90%, transparent) 35%,
        color-mix(in srgb, var(--background) 70%, transparent) 50%,
        color-mix(in srgb, var(--background) 45%, transparent) 70%,
        color-mix(in srgb, var(--background) 20%, transparent) 85%,
        transparent 100%
      )
    `,
          }}
        />

        {/* Bottom fade */}
        <div
          className="absolute inset-x-0 bottom-0 h-full"
          style={{
            background: `
      linear-gradient(
        to top,
        var(--background) 0%,
        var(--background) 20%,
         var(--background) 0%,
        var(--background) 20%,
        color-mix(in srgb, var(--background) 20%, transparent) 85%,
        color-mix(in srgb, var(--background) 45%, transparent) 70%,
        color-mix(in srgb, var(--background) 70%, transparent) 50%,
        color-mix(in srgb, var(--background) 90%, transparent) 35%,
        transparent 100%
      )
    `,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold text-accent mb-6">Contact Us</h2>
            <ContactForm type="contact" />
          </div>

          {/* Contact Info */}
          <div className="lg:mt-60">
            <h2 className="text-2xl lg:hidden lg:mt-60 font-bold text-accent mb-6">
              Contact Information
            </h2>

            <div className="space-y-8">
              {/* Email */}
              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground/75 mb-1">
                    Email
                  </h3>
                  <a
                    href="mailto:daron@dnamitigation.com"
                    className="text-foreground/70 hover:text-accent transition-colors"
                  >
                    daron@dnamitigation.com
                  </a>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground/75 mb-1">
                    Phone
                  </h3>
                  <a
                    href="tel:+1 3104302368"
                    className="text-foreground/70 hover:text-accent transition-colors"
                  >
                    +1 (310) 430-2368
                  </a>
                  .
                </div>
              </motion.div>

              {/* Hours */}
              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground/75 mb-1">
                    Hours
                  </h3>
                  <p className="text-foreground/70">
                    Monday - Friday: 9:00 AM - 5:00 PM EST
                  </p>
                  <p className="text-foreground/70">
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0">
                  <ArrowRight className="w-6 h-6 text-accent mt-1" />
                </div>
                <div>
                  <p>
                    If something time-sensitive comes up, my cell is{" "}
                    <span className="text-accent">
                      {" "}
                      <a href="tel:+1 3104302368">+1 (310) 430-2368</a>
                    </span>{" "}
                    — happy to jump on it quickly.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
