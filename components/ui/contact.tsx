import React from "react";
import { Button } from "./button";
import { Label } from "./label";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Checkbox } from "./checkbox";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { pacifico } from "../../lib/fonts";

interface ContactSectionProps {
  /**
   * The title for the contact section.
   */
  title?: string;
  /**
   * The subtitle or main message for the introductory part.
   */
  mainMessage?: string;
  /**
   * The contact email to display.
   */
  contactEmail?: string;
  /**
   * Array of social media links. Each object should have an 'id', 'name', 'iconSrc', and 'href'.
   */
  socialLinks?: Array<{
    id: string;
    name: string;
    iconSrc: string;
    href: string;
  }>;
  /**
   * Placeholder image for the background.
   */
  backgroundImageSrc?: string;
  /**
   * Callback function when the form is submitted.
   * @param data The form data.
   */
  onSubmit?: (data: {
    name: string;
    email: string;
    message: string;
    projectType: string[];
  }) => void;
}

const defaultSocialLinks = [
  {
    id: "1",
    name: "X",
    iconSrc: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/x.svg",
    href: "#x",
  },
  {
    id: "2",
    name: "Instagram",
    iconSrc: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/instagram.svg",
    href: "#instagram",
  },
  {
    id: "3",
    name: "LinkedIn",
    iconSrc: "https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/linkedin.svg",
    href: "#linkedin",
  },
];

export const ContactSection: React.FC<ContactSectionProps> = ({
  title = "We can turn your dream project into reality",
  mainMessage = "Lets talk! 👋",
  contactEmail = "hello@pixelperfect.com",
  socialLinks = defaultSocialLinks,
  // backgroundImageSrc = "https://images.unsplash.com/photo-1742273330004-ef9c9d228530?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY0fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=900", // Example image from Unsplash
  onSubmit,
}) => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
    projectType: [""],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (type: string, checked: boolean) => {
    setFormData((prev) => {
      const currentTypes = prev.projectType;
      if (checked) {
        return { ...prev, projectType: [...currentTypes, type] };
      } else {
        return { ...prev, projectType: currentTypes.filter((t) => t !== type) };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(formData);
    console.log("Form submitted:", formData);
    // You might want to add a success message or clear the form here
  };

  const projectTypeOptions = [
    "Website",
    "Mobile App",
    "Web App",
    "E-Commerce",
    "3D & Animation",
  ];

  return (
    <div className="font-sans">
      <section className="container mx-auto p-8">
        <h1 className="text-2xl font-bold mb-6 md:mb-8 tracking-tight text-center md:text-start">
          <span
            className={cn(
              "bg-clip-text text-transparent bg-linear-to-r from-indigo-300 via-black/90 to-rose-300 dark:from-indigo-300 dark:via-white/90 dark:to-rose-300",
              pacifico.className
            )}
          >
            Contact Us.
          </span>
        </h1>
        {/* Main Content Overlay */}
        <div className="relative z-10 flex flex-col items-stretch justify-between w-full h-full">
          {/* Main Section - Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full rounded-xl grow">
            {/* Left Side: Title */}
            <div className="flex flex-col text-center md:text-left justify-between md:justify-end items-center md:items-start">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight drop-shadow-lg max-w-lg">
                {title}
              </h1>
            </div>

            {/* Right Side: Contact Form */}
            <div className="bg-black p-6 md:p-8 rounded-lg shadow-xl border border-border justify-end items-center">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {mainMessage}
              </h2>

              {/* Email & Socials */}
              <div className="mb-6">
                <p className="text-muted-foreground mb-2">Mail us at</p>
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-primary hover:underline font-medium"
                >
                  {contactEmail}
                </a>
                <div className="flex items-center space-x-3 mt-4">
                  <span className="text-muted-foreground">OR</span>
                  {socialLinks.map((link) => (
                    <Button key={link.id} variant="outline" size="icon" asChild>
                      <a href={link.href} aria-label={link.name}>
                        {/* Using a simple placeholder for icons. In a real app, use react-icons or SVG components */}
                        <Image
                          src={link.iconSrc}
                          alt={link.name}
                          width={24}
                          height={24}
                          className="h-4 w-4 dark:invert"
                        />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>

              <hr className="my-6 border-border" />

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <p className="text-muted-foreground">
                  Leave us a brief message
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">
                    Briefly describe your project idea
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Briefly describe your project idea"
                    className="min-h-20"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    I&apos;m looking for...
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {projectTypeOptions.map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <Checkbox
                          id={option.replace(/\s/g, "-").toLowerCase()}
                          checked={formData.projectType.includes(option)}
                          onCheckedChange={(checked) =>
                            handleCheckboxChange(option, checked as boolean)
                          }
                        />
                        <Label
                          htmlFor={option.replace(/\s/g, "-").toLowerCase()}
                          className="text-sm font-normal"
                        >
                          {option}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button type="submit" className="w-full">
                  Send a message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
