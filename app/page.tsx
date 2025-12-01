"use client";

import ServiceSection from "@/components/section/Services";
import HeroSection from "@/components/section/Hero";
import { ResizeableNavbar } from "@/components/section/Navbar";
import ContactUsSection from "@/components/section/ContactUs";
import Team from "@/components/section/Team";
import Footer from "@/components/section/Footer";

export default function Home() {
  return (
    <main className="relative w-full flex flex-col items-center justify-center overflow-hidden md:overflow-visible bg-white dark:bg-black">
      <div className="w-full">
        <ResizeableNavbar />
        <HeroSection />
        <ServiceSection />
        <Team />
        <ContactUsSection />
        <Footer />
        {/* <div className="h-[50vh]" /> */}
      </div>
    </main>
  );
}
