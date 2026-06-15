"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface ContactFormProps {
  type?: "contact" | "consultation";
  onSubmit?: (data: any) => void;
}

export default function ContactForm({ type = "contact" }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    firm: "",
    message: "",
    serviceType: "general",
    preferredDate: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null,
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const endpoint =
        type === "contact" ? "/api/contact" : "/api/consultation";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          firm: "",
          message: "",
          serviceType: "general",
          preferredDate: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Name */}
      <div>
        <label className="block text-sm font-semibold text-foreground/75 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-primary/40 border border-accent/30 rounded-lg text-foreground/75 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
          placeholder="Your name"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-foreground/75 mb-2">
          Email *
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-primary/40 border border-accent/30 rounded-lg text-foreground/75 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
          placeholder="your@email.com"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-semibold text-foreground/75 mb-2">
          Phone *
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-primary/40 border border-accent/30 rounded-lg text-foreground/75 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
          placeholder="(123) 456-7890"
        />
      </div>

      {/* Firm/Company */}
      <div>
        <label className="block text-sm font-semibold text-foreground/75 mb-2">
          Firm/Company
        </label>
        <input
          type="text"
          name="firm"
          value={formData.firm}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-primary/40 border border-accent/30 rounded-lg text-foreground/75 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
          placeholder="Law firm or company name"
        />
      </div>

      {/* Service Type (for consultation) */}
      {type === "consultation" && (
        <div>
          <label className="block text-sm font-semibold text-foreground/75 mb-2">
            Service Type
          </label>
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-primary/40 border border-accent/30 rounded-lg text-foreground/75 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
          >
            <option value="general">General Sentencing Mitigation</option>
            <option value="psr">PSR Strategy & Preparation</option>
            <option value="alternative">Alternative Sentences</option>
            <option value="document">Document Preparation</option>
            <option value="appellate">Appellate Sentencing Issues</option>
          </select>
        </div>
      )}

      {/* Preferred Date (for consultation) */}
      {type === "consultation" && (
        <div>
          <label className="block text-sm font-semibold text-foreground/75 mb-2">
            Preferred Consultation Date
          </label>
          <input
            type="date"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-primary/40 border border-accent/30 rounded-lg text-foreground/75 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
          />
        </div>
      )}

      {/* Message */}
      <div>
        <label className="block text-sm font-semibold text-foreground/75 mb-2">
          {type === "consultation" ? "Notes about your case *" : "Message *"}
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 bg-primary/40 border border-accent/30 rounded-lg text-foreground/75 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all resize-none"
          placeholder="Tell us about your situation..."
        />
      </div>

      {/* Status Messages */}
      {submitStatus === "success" && (
        <motion.div
          className="p-4 bg-green-900/30 border border-green-600/50 rounded-lg text-green-200"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Thank you for your submission. We&apos;ll be in touch soon.
        </motion.div>
      )}

      {submitStatus === "error" && (
        <motion.div
          className="p-4 bg-red-900/30 border border-red-600/50 rounded-lg text-red-200"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          An error occurred. Please try again or contact us directly.
        </motion.div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-gold-metallic text-primary rounded-lg hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-semibold"
      >
        {isSubmitting
          ? "Submitting..."
          : type === "consultation"
            ? "Schedule Consultation"
            : "Send Message"}
      </button>
    </motion.form>
  );
}
