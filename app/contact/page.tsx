"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-primary">
      <Navbar />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Contact Us
            </h2>
            <ContactForm type="contact" />
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">
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
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
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
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <a
                    href="tel:+1234567890"
                    className="text-foreground/70 hover:text-accent transition-colors"
                  >
                    (123) 456-7890
                  </a>
                </div>
              </motion.div>

              {/* Address */}
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
                  <h3 className="font-semibold text-foreground mb-1">Hours</h3>
                  <p className="text-foreground/70">
                    Monday - Friday: 9:00 AM - 5:00 PM EST
                  </p>
                  <p className="text-foreground/70">
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </motion.div>

              {/* Info Box
              <motion.div
                className="mt-8 p-6 bg-primary/40 border border-accent/40 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-accent mb-2">
                  About Your Inquiry
                </h3>
                <p className="text-foreground/70 text-sm">
                  We collaborate with defense attorneys nationwide on federal
                  sentencing cases. Whether you need comprehensive mitigation
                  strategy, PSR preparation assistance, or consultation on
                  specific sentencing issues, we&apos;re here to help.
                </p>
              </motion.div> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
