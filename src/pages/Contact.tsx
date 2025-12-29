import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    content: "+91 98765 43210",
    link: "tel:+919876543210",
    secondary: "Mon-Sat, 10am-7pm IST",
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "info@pramukhraj.com",
    link: "mailto:info@pramukhraj.com",
    secondary: "We respond within 24 hours",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    content: "Nakshi Gali, Saharanpur",
    link: "https://maps.google.com",
    secondary: "Uttar Pradesh, India 247001",
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "Mon-Sat: 10am-7pm",
    link: null,
    secondary: "Sunday: By appointment",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Enquiry Submitted",
      description: "Thank you for your interest. We'll contact you within 24 hours.",
    });

    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-hero">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-caption uppercase tracking-widest text-muted-foreground mb-4 block opacity-0 animate-fade-up">
              Get in Touch
            </span>
            <h1 className="font-serif text-display-lg font-light text-foreground mb-6 opacity-0 animate-fade-up delay-100">
              Let's Create <br />
              <span className="font-semibold">Together</span>
            </h1>
            <p className="text-body-lg text-muted-foreground max-w-xl opacity-0 animate-fade-up delay-200">
              Whether you have a specific piece in mind or need guidance on 
              what would suit your space, we're here to help. Reach out and 
              let's start a conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-serif text-heading font-semibold text-foreground mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-sm flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-brass" />
                      </div>
                      <div>
                        <p className="text-body-sm text-muted-foreground mb-1">
                          {item.title}
                        </p>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-body font-medium text-foreground hover:text-brass transition-colors"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-body font-medium text-foreground">
                            {item.content}
                          </p>
                        )}
                        <p className="text-body-sm text-muted-foreground mt-0.5">
                          {item.secondary}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="p-6 bg-secondary rounded-sm">
                <h3 className="font-serif text-heading-sm font-semibold text-foreground mb-3">
                  Prefer WhatsApp?
                </h3>
                <p className="text-body-sm text-muted-foreground mb-4">
                  For quick enquiries and sharing images, reach us directly on WhatsApp.
                </p>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="default" className="w-full">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>

              {/* Export Notice */}
              <div className="p-6 border border-brass/30 rounded-sm">
                <h3 className="font-serif text-heading-sm font-semibold text-foreground mb-3">
                  International Enquiries
                </h3>
                <p className="text-body-sm text-muted-foreground">
                  We welcome export orders and provide complete documentation, 
                  crating, and shipping assistance. Please mention your country 
                  in your enquiry for accurate quotes.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-card p-8 lg:p-12 rounded-sm shadow-soft">
                <h2 className="font-serif text-heading font-semibold text-foreground mb-8">
                  Send an Enquiry
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-body-sm font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-background"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-body-sm font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-background"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-body-sm font-medium">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-background"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-body-sm font-medium">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="bg-background"
                        placeholder="e.g., Custom Mandir Enquiry"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-body-sm font-medium">
                      Your Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-background resize-none"
                      placeholder="Tell us about your requirements, preferred dimensions, wood type, timeline, etc."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="xl"
                    disabled={isSubmitting}
                    className="w-full md:w-auto"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Submit Enquiry
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
