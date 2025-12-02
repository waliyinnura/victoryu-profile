import React from "react";
import { ContactSection } from "../ui/contact";

/**
 * Demo component to showcase the ContactSection.
 * This demonstrates how to use the ContactSection component with various props.
 */
const ContactUsSection: React.FC = () => {
  const customSocialLinks = [
    {
      id: "1",
      name: "Facebook",
      iconSrc:
        "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/facebook.svg",
      href: "https://facebook.com/yourprofile",
    },
    {
      id: "2",
      name: "Twitter",
      iconSrc: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/twitter.svg",
      href: "https://twitter.com/yourprofile",
    },
  ];

  const handleFormSubmit = (data: {
    name: string;
    email: string;
    message: string;
    projectType: string[];
  }) => {
    alert("Demo form submitted! Check console for data.");
    console.log("Demo form data:", data);
    // In a real application, you'd send this data to an API
  };

  return (
    <section id="contact">
      {/*
          The ContactSection component is highly customizable via props.
          Here we demonstrate overriding some default values and providing
          a custom submission handler.
        */}
      <ContactSection
        title="Let's build something amazing together!"
        mainMessage="Reach out to us today! ✨"
        contactEmail="info@yourcompany.com"
        socialLinks={customSocialLinks}
        onSubmit={handleFormSubmit}
        // You can also change the background image
        // backgroundImageSrc="https://images.unsplash.com/photo-1507525428034-b723cf961faf?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </section>
  );
};

export default ContactUsSection;
