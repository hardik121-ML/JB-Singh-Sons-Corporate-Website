"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { COMPANY_INFO } from "@/lib/constants";

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
      <Section className="bg-gradient-to-br from-neutral-light to-white pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
            Careers at J B Singh & Sons
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            We hire professionals who work well in structured environments and value accuracy,
            communication, and operational discipline.
          </p>
        </div>
      </Section>

      {/* Job Listings or No Vacancies */}
      <Section>
        {!hasJobs ? (
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-neutral-light rounded-2xl p-12">
              <div className="text-6xl mb-6">💼</div>
              <h2 className="text-2xl font-bold text-neutral-dark mb-4">
                No Current Openings
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Currently, there are no vacancies. However, we're always looking for talented
                individuals to join our team.
              </p>
              <p className="text-gray-700 mb-2">
                You may send your resume to:
              </p>
              <a
                href={`mailto:${COMPANY_INFO.contact.email}`}
                className="text-primary-orange font-semibold hover:underline"
              >
                {COMPANY_INFO.contact.email}
              </a>
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
