import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PracticeAreaTemplate from "@/components/PracticeAreaTemplate";
import { getPracticeAreaBySlug } from "@/lib/data/practiceAreas";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const area = getPracticeAreaBySlug(slug);

  if (!area) {
    return {
      title: "Practice Area Not Found",
    };
  }

  return {
    title: `${area.title} | DNA Mitigation`,
    description: area.description,
  };
}

export default async function PracticeAreaDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const area = getPracticeAreaBySlug(slug);

  if (!area) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-primary">
      <Navbar />
      <PracticeAreaTemplate
        title={area.title}
        description={area.description}
        intro={area.intro}
        contentSections={area.contentSections}
        // faqs={area.faqs}
      />
    </main>
  );
}
