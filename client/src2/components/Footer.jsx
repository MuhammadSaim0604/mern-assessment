import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { SiFacebook, SiInstagram, SiX, SiLinkedin } from "react-icons/si";
import { GrSend } from "react-icons/gr";
const exploreLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Rooms", href: "/booking" },
  { label: "Special Offers", href: "#" },
  { label: "Gallery", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">F</span>
              </div>
              <span className="font-bold text-xl text-white">Floyland</span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Experience luxury and comfort at Floyland Resort. Your perfect getaway destination for relaxation and adventure.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="w-9 h-9 rounded-md bg-[#232323] shadow-[0_0_40px_rgba(0,0,0,0.6)] flex items-center justify-center transition-colors"
                data-testid="footer-link-facebook"
                aria-label="Facebook"
              >
                <SiFacebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-md bg-[#232323] shadow-[0_0_40px_rgba(0,0,0,0.6)] flex items-center justify-center transition-colors"
                data-testid="footer-link-twitter"
                aria-label="Twitter"
              >
                <SiX className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-md bg-[#232323] shadow-[0_0_40px_rgba(0,0,0,0.6)] flex items-center justify-center transition-colors"
                data-testid="footer-link-instagram"
                aria-label="Instagram"
              >
                <SiInstagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-md bg-[#232323] shadow-[0_0_40px_rgba(0,0,0,0.6)] flex items-center justify-center transition-colors"
                data-testid="footer-link-linkedin"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">EXPLORE</h3>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <ArrowRight className="w-3 h-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">CONTACT</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <Phone className="w-4 h-4 mt-0.5 text-primary" />
                <div>
                  <p className="text-zinc-400">(+1) 987 654 3210</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Mail className="w-4 h-4 mt-0.5 text-primary" />
                <div>
                  <p className="text-zinc-400">info@example.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                <div>
                  <p className="text-zinc-400">789 Gallery Way, NY Road, USA</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-[#232323] p-6 shadow-[0_0_40px_rgba(0,0,0,0.6)] backdrop-blur-md 
            max-w-md lg:-ml-10
">


            {/* Title */}
            <h3 className="mb-6 text-xl font-bold text-white">
              NEWSLETTER
            </h3>

            {/* Email Input */}
            <div className="relative mb-5">
              <input
                type="email"
                placeholder="Ex. info@domain.com"
                className="w-full bg-transparent pb-2 pr-8 text-sm text-white placeholder:text-zinc-500 focus:outline-none"
              />
              <span className="absolute right-0 top-2 text-white">
                <GrSend size={20}/>
              </span>
              <div className="mt-2 h-px w-full bg-zinc-600"></div>
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-2 mt-3">
              <input
                type="checkbox"
                id="privacy"
                className="border-zinc-600"
                data-testid="checkbox-privacy"
              />
              <label htmlFor="privacy" className="text-xs text-zinc-500">
                I agree to all terms and policies
              </label>
            </div>

          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-wrap items-center justify-between gap-4 text-sm text-zinc-500">
          <p>Copyright 2024 Flavila All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white" data-testid="footer-link-terms">
              Terms and Conditions
            </a>
            <a href="#" className="hover:text-white" data-testid="footer-link-privacy">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
