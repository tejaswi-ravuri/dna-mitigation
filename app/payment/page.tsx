"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PaymentPlan {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
}

const paymentPlans: PaymentPlan[] = [
  {
    id: "comprehensive",
    name: "Comprehensive Mitigation",
    price: 5000,
    description: "Full mitigation strategy development and implementation",
    features: [
      "Complete mitigation strategy development",
      "PSR preparation and interview guidance",
      "Document preparation and organization",
      "Support letter coordination",
      "Court advocacy and sentencing representation",
      "Up to 20 hours of attorney time",
    ],
  },
  {
    id: "targeted",
    name: "Targeted Support",
    price: 2500,
    description: "Focused assistance on specific sentencing issues",
    features: [
      "PSR review and correction strategy",
      "Specific issue consultation and written analysis",
      "Document review and feedback",
      "Guideline calculation review",
      "Up to 10 hours of attorney time",
    ],
  },
  {
    id: "consultation",
    name: "Consultation Package",
    price: 1000,
    description: "Strategic consultation and planning session",
    features: [
      "Initial case assessment",
      "Mitigation strategy recommendations",
      "Timeline and action plan",
      "Followup written summary",
      "Up to 4 hours of attorney time",
    ],
  },
];

export default function PaymentPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handlePaymentClick = (planId: string) => {
    // In a real implementation, this would redirect to Stripe checkout
    // For now, we'll just show a placeholder
    alert(`Payment for ${planId} would be processed through Stripe`);
  };

  return (
    <main className="min-h-screen bg-primary">
      <Navbar />

      {/* Hero */}
      <section className="pt-20 px-4 sm:px-6 lg:px-8 lg:pt-40">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Service Fees
            </h1>
            <p className="text-lg text-foreground/80">
              Professional federal sentencing advocacy. Choose the service level
              that fits your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Payment Plans */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paymentPlans.map((plan) => (
              <motion.div
                key={plan.id}
                className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                  selectedPlan === plan.id
                    ? "border-2 border-accent scale-105"
                    : "border-2 border-accent/30 hover:border-accent/60"
                }`}
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-primary/20" />

                {/* Content */}
                <div className="relative p-8 flex flex-col h-full">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-accent mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-foreground/70 text-sm">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-foreground">
                        ${plan.price}
                      </span>
                      <span className="text-foreground/60 ml-2">flat fee</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6 flex-grow">
                    <p className="text-xs uppercase tracking-wider text-foreground/60 mb-3">
                      Includes:
                    </p>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 text-sm text-foreground/80"
                        >
                          <span className="text-accent flex-shrink-0 font-bold">
                            ✓
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Button */}
                  <button
                    onClick={() => handlePaymentClick(plan.id)}
                    className="w-full px-6 py-3 rounded-xl bg-gold-metallic text-black runded-lg hover:bg-accent/90 transition-all font-semibold mt-auto"
                  >
                    Proceed to Payment
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Box */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-3xl mx-auto p-8 bg-primary/40 border border-accent/40 rounded-xl">
          <h2 className="text-2xl font-bold text-accent mb-4">
            Payment Information
          </h2>
          <p className="text-foreground/80 mb-4">
            All payments are processed securely through Stripe. Fees shown are
            for service provisions and do not include court filing fees,
            transcript costs, or other hard expenses.
          </p>
          <p className="text-foreground/80">
            For questions about payment plans, custom arrangements, or pro bono
            considerations, please contact us directly.
          </p>
        </div>
      </section>
    </main>
  );
}
