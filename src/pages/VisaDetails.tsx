import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Search, MessageCircle, Share2 } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import uaeHero from "@/assets/country-uae.jpg";// Default/Placeholder

// Mock Data for the page
const visaOptions = [
    {
        title: "48 Hours Transit Visa",
        processingTime: "Upto 5 days",
        stayPeriod: "2 days",
        validity: "30 days",
        entry: "Single"
    },
    {
        title: "96 Hours Transit Visa",
        processingTime: "Upto 5 days",
        stayPeriod: "4 days",
        validity: "30 days",
        entry: "Single"
    },
    {
        title: "30 Days Tourist Visa",
        processingTime: "Upto 5 days",
        stayPeriod: "30 days",
        validity: "58 days",
        entry: "Single"
    },
    {
        title: "60 Days Tourist Visa",
        processingTime: "Upto 5 days",
        stayPeriod: "60 days",
        validity: "58 days",
        entry: "Single"
    },
    {
        title: "30 Days Multiple Entry Tourist Visa",
        processingTime: "Upto 5 days",
        stayPeriod: "30 days",
        validity: "58 days",
        entry: "Multiple"
    },
    {
        title: "60 Days Multiple Entry Tourist Visa",
        processingTime: "Upto 5 days",
        stayPeriod: "60 days",
        validity: "58 days",
        entry: "Multiple"
    }
];

const VisaDetails = () => {
    const { countryId } = useParams();
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        mobile: "",
        visaType: ""
    });

    const countryName = countryId ? decodeURIComponent(countryId) : "United Arab Emirates";

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <Navigation />

            <main className="container mx-auto px-4 pt-28 pb-12 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Column: Details */}
                    <div className="flex-1">
                        {/* Mobile & Desktop Header: Back, Title, Share */}
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <Link to="/visa" className="inline-flex items-center justify-center p-1 -ml-2 lg:ml-0 transition-colors hover:bg-slate-100 rounded-full">
                                    <ArrowLeft className="h-6 w-6 text-[#1e293b]" />
                                </Link>
                                <h1 className="text-[18px] lg:text-4xl font-bold text-[#233F50] leading-tight">
                                    {countryName} Visa
                                </h1>
                            </div>

                            {/* Share Button (Mobile/Desktop) */}
                            <button className="flex items-center justify-center w-8 h-8 rounded-full bg-[#233F50] text-white hover:bg-[#1a2f3d] transition-colors">
                                <Share2 className="h-4 w-4" />
                            </button>
                        </div>

                        {/* Hero Image (Hidden on Mobile) */}
                        <div
                            className="hidden lg:block rounded-[20px] overflow-hidden mb-8 w-full"
                            style={{
                                maxWidth: '830.62px',
                                height: 'auto',
                                aspectRatio: '830 / 341'
                            }}
                        >
                            <img
                                src={uaeHero}
                                alt={countryName}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Visa Grid Options */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                            {visaOptions.map((option, index) => (
                                <div
                                    key={index}
                                    className="bg-white overflow-hidden shadow-sm border border-slate-200 flex flex-col w-full hover:shadow-md transition-shadow"
                                    style={{
                                        borderRadius: '12px', // Matches mobile screenshot (was 16px)
                                        borderWidth: '1px'
                                    }}
                                >
                                    <div className="bg-[#98D5D4] px-4 py-3 shrink-0">
                                        <h3 className="text-[16px] lg:text-[20px] leading-tight font-medium text-[#233F50]">
                                            {option.title}
                                        </h3>
                                    </div>
                                    <div className="px-4 py-2 flex-1 flex flex-col justify-center">
                                        <div className="text-[13px] lg:text-[16px] leading-[28px] lg:leading-[33px] font-normal text-black">
                                            <div className="flex justify-between items-center border-b border-slate-100 py-1">
                                                <span className="text-gray-600">Processing time:</span>
                                                <span className="font-medium">{option.processingTime}</span>
                                            </div>
                                            <div className="flex justify-between items-center border-b border-slate-100 py-1">
                                                <span className="text-gray-600">Stay period:</span>
                                                <span className="font-medium">{option.stayPeriod}</span>
                                            </div>
                                            <div className="flex justify-between items-center border-b border-slate-100 py-1">
                                                <span className="text-gray-600">Validity:</span>
                                                <span className="font-medium">{option.validity}</span>
                                            </div>
                                            <div className="flex justify-between items-center py-1">
                                                <span className="text-gray-600">Entry:</span>
                                                <span className="font-medium">{option.entry}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Enquiry Sidebar */}
                    <div className="lg:w-[380px] space-y-6">
                        {/* Search Button (Desktop Only now, as Share is moved) */}
                        <div className="hidden lg:flex justify-end w-full max-w-[345px]">
                            <button className="flex items-center gap-2 bg-[#233F50] text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-[#1a2f3d] transition-colors shadow-sm">
                                <Search className="h-4 w-4" />
                                <span>Search</span>
                            </button>
                        </div>

                        {/* Enquiry Form Widget */}
                        <div
                            className="bg-white shadow-sm border border-slate-200 sticky top-24 flex flex-col justify-between w-full"
                            style={{
                                maxWidth: '345px', // Rounded from 344.815...
                                minHeight: '294px', // Rounded from 293.98...
                                borderRadius: '19px',
                                borderWidth: '1px',
                                padding: '16px'
                            }}
                        >
                            <h3 className="text-sm font-bold text-[#1e293b] mb-2 leading-tight">
                                Fill the Form to Submit an Enquiry
                            </h3>

                            <div className="space-y-2 flex-1 flex flex-col justify-between">
                                <Input
                                    placeholder="Full Name"
                                    className="bg-white border-slate-200 h-8 text-xs placeholder:text-gray-400"
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                />
                                <Input
                                    placeholder="Email ID"
                                    className="bg-white border-slate-200 h-8 text-xs placeholder:text-gray-400"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                                <Input
                                    placeholder="Mobile No."
                                    className="bg-white border-slate-200 h-8 text-xs placeholder:text-gray-400"
                                    value={formData.mobile}
                                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                                />

                                <Select onValueChange={(val) => setFormData({ ...formData, visaType: val })}>
                                    <SelectTrigger className="bg-white border-slate-200 h-8 text-xs">
                                        <SelectValue placeholder="Visa type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="tourist">Tourist Visa</SelectItem>
                                        <SelectItem value="transit">Transit Visa</SelectItem>
                                        <SelectItem value="medical">Medical Visa</SelectItem>
                                    </SelectContent>
                                </Select>

                                <Button
                                    className="w-full bg-[#98D5D4] hover:bg-[#86c0bf] text-[#000000] font-bold h-9 text-xs rounded-lg mt-1"
                                >
                                    SUBMIT
                                </Button>
                            </div>
                        </div>

                        {/* WhatsApp Enquiry Button */}
                        <a
                            href="https://wa.me/"
                            target="_blank"
                            rel="noreferrer"
                            className="hidden lg:flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#1e293b] font-bold shadow-sm transition-colors w-full"
                            style={{
                                maxWidth: '345px',
                                height: '51px',
                                borderRadius: '19px', // Assuming same radius as form above or default from ref
                                border: '1px solid #DBDBDB'
                            }}
                        >
                            Enquiry Now
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                                alt="WhatsApp"
                                className="h-8 w-8"
                            />
                        </a>

                    </div>
                </div>
            </main>

            {/* Mobile Footer Action Buttons */}
            <div className="lg:hidden flex w-full">
                <button className="flex-1 bg-[#233F50] text-white py-4 font-bold text-[16px] leading-tight hover:bg-[#1a2f3d] transition-colors">
                    Apply Now
                </button>
                <div className="w-[1px] bg-white/20"></div>
                <a
                    href="https://wa.me/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-[#233F50] text-white py-4 font-bold text-[16px] leading-tight hover:bg-[#1a2f3d] transition-colors flex items-center justify-center gap-2"
                >
                    Enquiry Now
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                        alt="WhatsApp"
                        className="h-5 w-5"
                    />
                </a>
            </div>

            <Footer />
        </div>
    );
};

export default VisaDetails;
