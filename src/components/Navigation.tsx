import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navItems = [
  { label: "Holidays", path: "/" },
  { label: "Activities", path: "/activities" },
  { label: "Flight", path: "/flight" },
  { label: "Hotel", path: "/hotel" },
  { label: "Visa", path: "/visa" },
];

const companyItems = [
  { label: "About Us", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Blog", path: "/blog" },
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "Terms & Conditions", path: "/terms-conditions" },
];

export const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1e293b] border-b border-white/5 shadow-lg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 relative">
          {/* Mobile Menu Button - Left */}
          <div className="lg:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10"
                >
                  <Menu className="h-8 w-8" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 border-none w-[82%] sm:max-w-[340px] h-full flex flex-col bg-white">
                {/* More compact Header */}
                <div className="bg-[#1e293b] h-16 flex items-center justify-between px-4">
                  <SheetClose asChild>
                    <button className="text-white/90 hover:text-white transition-colors">
                      <X className="h-7 w-7" strokeWidth={1.5} />
                    </button>
                  </SheetClose>
                  <div className="flex flex-col items-center flex-1">
                    <span className="text-2xl font-sans font-bold text-[#c2fbf0] leading-none tracking-wide">
                      KLASHRA
                    </span>
                    <span className="text-[8px] uppercase tracking-[0.25em] text-white/60 mt-0.5">
                      Travel & Tourism
                    </span>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <User className="h-5 w-5 text-slate-400 fill-slate-400" />
                  </div>
                </div>

                {/* Compact Menu Content to fit in one view */}
                <div className="flex-1 overflow-y-auto pt-4">
                  {/* Our Services Section */}
                  <div className="px-5 mb-5">
                    <h3 className="text-[#27445d] font-bold text-[17px] mb-2">Our Services</h3>
                    <div className="border-t border-slate-100">
                      {navItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setIsMenuOpen(false)}
                          className={`block py-[10px] px-2 text-[15px] border-b border-slate-100 transition-colors ${location.pathname === item.path || (item.label === "Holidays" && location.pathname === "/")
                            ? "bg-[#eff3f6] text-[#1a202c] font-medium"
                            : "text-[#1a202c] hover:bg-[#eff3f6]/50"
                            }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Company Section */}
                  <div className="px-5 pb-6">
                    <h3 className="text-[#27445d] font-bold text-[17px] mb-2">Company</h3>
                    <div className="border-t border-slate-100">
                      {companyItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setIsMenuOpen(false)}
                          className={`block py-[10px] px-2 text-[15px] border-b border-slate-100 transition-colors ${location.pathname === item.path
                            ? "bg-[#eff3f6] text-[#1a202c] font-medium"
                            : "text-[#1a202c] hover:bg-[#eff3f6]/50"
                            }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo - Center on Mobile, Left on Desktop */}
          <Link to="/" className="flex flex-col leading-none absolute left-1/2 -translate-x-1/2 lg:static lg:left-0 lg:translate-x-0">
            <span className="text-[22px] lg:text-3xl font-sans font-bold text-[#99f6e4] tracking-wide text-center lg:text-left">
              KLASHRA
            </span>
            <span className="text-[7px] lg:text-[10px] uppercase tracking-[0.2em] text-white/80 text-center lg:text-left">
              Travel & Tourism
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 items-center justify-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-base font-medium transition-colors duration-200 ${location.pathname === item.path
                  ? "text-white"
                  : "text-white/80 hover:text-white"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Section - Profile and Search */}
          <div className="flex items-center gap-2 lg:gap-6">
            {/* Desktop Search */}
            <div className="hidden lg:block relative w-72">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-[#334155]/50 border border-slate-600 rounded-lg py-2.5 px-4 text-white placeholder:text-slate-400 focus:outline-none focus:border-[#99f6e4] transition-all text-sm"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            </div>

            {/* Profile */}
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-8 w-8 lg:h-10 lg:w-10 bg-white hover:bg-slate-100 text-slate-400"
            >
              <User className="h-5 w-5 lg:h-6 lg:w-6 fill-current" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

