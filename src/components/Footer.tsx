import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Holidays", path: "/" },
    { label: "Activities", path: "/activities" },
    { label: "Flight", path: "/flight" },
    { label: "Hotel", path: "/hotel" },
    { label: "Visa", path: "/visa" },
  ],
  company: [
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Blog", path: "/blog" },
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Terms & Conditions", path: "/terms" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
];

export const Footer = () => {
  return (
    <footer className="bg-[#223544] text-white flex flex-col py-8 lg:pt-[88px] lg:pb-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-y-8 lg:gap-x-8 mb-8 lg:mb-12">

          {/* Mobile Header: Logo + Follow Us */}
          <div className="lg:hidden flex justify-between items-start mb-2">
            <div>
              <Link to="/" className="flex flex-col">
                <span className="text-3xl font-sans font-bold tracking-wide text-[#98D5D4] leading-none">KLASHRA</span>
                <span className="block text-[8px] uppercase tracking-[0.2em] text-white/80 mt-1">TRAVEL & TOURISM</span>
              </Link>
            </div>
            <div className="flex flex-col items-end">
              <h4 className="font-semibold text-sm mb-2">Follow Us</h4>
              <div className="flex items-center gap-2">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-6 h-6 rounded-full border border-white/60 flex items-center justify-center text-white hover:bg-[#99f6e4] hover:text-[#223544] transition-all"
                    >
                      <Icon className="h-3 w-3" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Desktop Brand Column */}
          <div className="hidden lg:flex lg:col-span-5 flex-col items-start">
            <Link to="/" className="flex flex-col mb-10">
              <span className="text-4xl font-sans font-bold tracking-wide text-[#98D5D4] leading-none">KLASHRA</span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-white/80 mt-1">TRAVEL & TOURISM</span>
            </Link>
            {/* Contact Details (Desktop) */}
            <div className="space-y-5">
              <div className="flex items-center gap-4 text-white/90">
                <div className="w-5 h-5 flex items-center justify-center"><Phone className="h-5 w-5" /></div>
                <span className="text-base font-medium">+971 52 395 1234</span>
              </div>
              <div className="flex items-center gap-4 text-white/90">
                <div className="w-5 h-5 flex items-center justify-center"><Mail className="h-5 w-5" /></div>
                <span className="text-base font-medium">Info@klashratravel.com</span>
              </div>
              <div className="flex items-start gap-4 text-white/90">
                <div className="w-5 h-5 mt-1 flex items-center justify-center"><MapPin className="h-5 w-5" /></div>
                <span className="text-base font-medium leading-relaxed">
                  New Al Safiya Building M Floor
                  <br />
                  Office No: M22 Near Abuhail Metro Station
                </span>
              </div>
            </div>
          </div>

          {/* Contact Details (Mobile Only - positioned as 2nd item) */}
          <div className="lg:hidden space-y-3 mb-2">
            <div className="flex items-center gap-3 text-white/90">
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">+971 52 395 1234</span>
            </div>
            <div className="flex items-center gap-3 text-white/90">
              <Mail className="h-4 w-4" />
              <span className="text-sm font-medium">Info@klashratravel.com</span>
            </div>
            <div className="flex items-start gap-3 text-white/90">
              <MapPin className="h-4 w-4 mt-0.5" />
              <span className="text-sm font-medium leading-snug">
                New Al Safiya Building M Floor Office No: M22
                <br />
                Near Abuhail Metro Station
              </span>
            </div>
          </div>

          {/* Link Columns */}
          <div className="col-span-12 lg:col-span-4 grid grid-cols-2 gap-8 lg:gap-8">
            {/* Our Services */}
            <div>
              <h4 className="font-semibold text-lg lg:text-xl mb-4 lg:mb-8">Our Services</h4>
              <ul className="space-y-2 lg:space-y-4">
                {footerLinks.services.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-white/70 hover:text-[#99f6e4] transition-colors text-sm lg:text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-lg lg:text-xl mb-4 lg:mb-8">Company</h4>
              <ul className="space-y-2 lg:space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-white/70 hover:text-[#99f6e4] transition-colors text-sm lg:text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Follow Us - Desktop Only */}
          <div className="hidden lg:block col-span-3">
            <h4 className="font-semibold text-xl mb-8">Follow Us</h4>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full border border-white/80 flex items-center justify-center text-white hover:bg-[#99f6e4] hover:text-[#223544] hover:border-[#99f6e4] transition-all duration-300"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 lg:pt-8 text-center">
          <p className="text-white/50 text-[10px] lg:text-sm uppercase tracking-widest">
            @ copyright 2025 - Klashra
          </p>
        </div>
      </div>
    </footer>
  );
};
