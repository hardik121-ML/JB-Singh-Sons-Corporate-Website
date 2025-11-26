"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "@/components/ui/Section";
import FloatingOrbs from "@/components/ui/FloatingOrbs";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { COMPANY_INFO } from "@/lib/constants";
import { UsersFour } from "@phosphor-icons/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// This would come from CMS or database in production
interface JobListing {
  id: number;
  title: string;
  department: string;
  location: string;
  description: string;
}

const jobListings: JobListing[] = [
  // {
  //   id: 1,
  //   title: "Logistics Coordinator",
  //   department: "Operations",
  //   location: "Mumbai, Maharashtra",
  //   description: "Manage daily logistics operations and coordinate with clients...",
  // },
];

export default function CareersPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const hasJobs = jobListings.length > 0;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content > *", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".careers-card", {
        opacity: 0,
        y: 40,
        scale: 0.98,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Hero Section with Gradient Mesh */}
      <div ref={heroRef} className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 gradient-mesh" />

        <FloatingOrbs variant="hero" />

        <Section className="relative z-10">
          <div className="hero-content max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A0A0A] mb-6 tracking-tight">
              Careers at J B Singh & Sons
            </h1>
            <p className="text-lg md:text-xl text-[#4B5563] leading-relaxed max-w-3xl mx-auto">
              We hire professionals who value structured work, accuracy in execution, and clear
              communication across teams and partners.
            </p>
          </div>
        </Section>
      </div>

      {/* Job Listings or No Vacancies */}
      <Section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F8F9FC]/50" />

        <FloatingOrbs variant="section" />

        <div ref={contentRef} className="relative z-10">
          {!hasJobs ? (
            <div className="max-w-4xl mx-auto text-center">
              <div className="careers-card rounded-2xl p-12 relative overflow-hidden bg-[#0A0A0A]">

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="bg-white/20 backdrop-blur-xl p-6 rounded-2xl inline-block hover:scale-110 transition-transform duration-300">
                      <UsersFour size={64} weight="duotone" className="text-white" />
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    No Current Openings
                  </h2>
                  <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
                    Currently, there are no vacancies. However, if you'd like to be considered for
                    future roles, you're welcome to send your resume to our team.
                  </p>
                  <p className="text-gray-300 mb-2">
                    Send your resume to:
                  </p>
                  <a
                    href={`mailto:${COMPANY_INFO.contact.email}`}
                    className="text-primary-orange font-semibold hover:underline text-lg"
                  >
                    {COMPANY_INFO.contact.email}
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-8">Open Positions</h2>
              <div className="space-y-6">
                {jobListings.map((job) => (
                  <Card key={job.id} className="careers-card glass-card">
                    <CardHeader>
                      <CardTitle>{job.title}</CardTitle>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-2">
                        <span>📍 {job.location}</span>
                        <span>🏢 {job.department}</span>
                      </div>
                      <CardDescription className="mt-4">{job.description}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <a href={`mailto:${COMPANY_INFO.contact.email}?subject=Application for ${job.title}`}>
                        <Button>Apply Now</Button>
                      </a>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </Section>
    </>
  );
}
