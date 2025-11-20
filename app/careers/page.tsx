"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/ui/Section";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { COMPANY_INFO } from "@/lib/constants";
import { UsersFour } from "@phosphor-icons/react";

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
  const hasJobs = jobListings.length > 0;

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-[#F8F9FC] pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] mb-6">
            Careers at J B Singh & Sons
          </h1>
          <p className="text-lg md:text-xl text-[#4B5563] leading-relaxed">
            We hire professionals who value structured work, accuracy in execution, and clear
            communication across teams and partners.
          </p>
        </div>
      </Section>

      {/* Job Listings or No Vacancies */}
      <Section>
        {!hasJobs ? (
          <div className="max-w-4xl mx-auto text-center">
            <div className="rounded-2xl p-12 relative overflow-hidden">
              {/* Background Image */}
              <Image
                src="/images/placeholders/Hiring.avif"
                alt="Hiring background"
                fill
                className="object-cover"
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-dark/85 to-neutral-dark/70"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl inline-block">
                    <UsersFour size={64} weight="duotone" className="text-white" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  No Current Openings
                </h2>
                <p className="text-lg text-gray-200 mb-6">
                  Currently, there are no vacancies. However, if you'd like to be considered for
                  future roles, you're welcome to send your resume to our team.
                </p>
                <p className="text-gray-300 mb-2">
                  Send your resume to:
                </p>
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="text-primary-orange font-semibold hover:underline"
                >
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-dark mb-8">Open Positions</h2>
            <div className="space-y-6">
              {jobListings.map((job) => (
                <Card key={job.id}>
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
      </Section>
    </>
  );
}
