import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Share2, Wifi, Utensils, Waves, Dumbbell, Coffee, Check, ChevronLeft, ChevronRight, ArrowLeft, Bed, User, LayoutGrid, Ban, CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const HotelDetails = () => {
    const { hotelId } = useParams();
    const navigate = useNavigate();

    // Mock Data (In a real app, fetch based on hotelId)
    const hotel = {
        name: "Radisson Red Dubai Silicon Oasis",
        location: "Dubai Digital Park, Dubai Silicon Oasis, Dubai",
        stars: 5,
        rating: 4.5,
        reviews: 1240,
        images: [
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2525&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2670&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2649&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2670&auto=format&fit=crop"
        ],
        facilities: [
            { icon: Waves, name: "Outdoor Swimming Pool" },
            { icon: Coffee, name: "Bar" },
            { icon: Utensils, name: "Room Service" },
            { icon: Wifi, name: "Free Wifi" },
            { icon: Dumbbell, name: "Gym" },
            { icon: Utensils, name: "Restaurant" }
        ]
    };

    const rooms = [
        {
            id: 1,
            name: "Superior King Bed",
            image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2670&auto=format&fit=crop",
            size: "30 sq. m",
            bed: "King bed",
            view: "City view",
            sleeps: "Sleeps 2",
            options: [
                {
                    id: "r1-o1",
                    name: "Room Only",
                    inclusions: ["Non-refundable", "Parking", "Coffee & tea", "Express Check-in", "Free WiFi", "Drinking Water", "Free fitness center access"],
                    price: 900,
                    roomsLeft: 2
                },
                {
                    id: "r1-o2",
                    name: "Room With Breakfast",
                    inclusions: ["Non-refundable", "Breakfast", "Coffee & tea", "Express Check-in", "Free WiFi", "Drinking Water", "Free fitness center access"],
                    price: 950,
                    roomsLeft: 2
                },
                {
                    id: "r1-o3",
                    name: "Room With Free Cancellation",
                    inclusions: ["Free Cancellation", "Express Check-in", "Free WiFi", "Free fitness center access"],
                    price: 1000,
                    roomsLeft: 3
                },
                {
                    id: "r1-o4",
                    name: "Room With Free Cancellation, Breakfast",
                    inclusions: ["Free Cancellation", "Breakfast", "Free WiFi", "Coffee & Tea", "Free fitness center access", "Express Check-in"],
                    price: 1050,
                    roomsLeft: 2
                }
            ]
        },
        {
            id: 2,
            name: "Deluxe King Bed Room",
            image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2574&auto=format&fit=crop",
            size: "35 sq. m",
            bed: "King bed",
            view: "City view",
            sleeps: "Sleeps 2",
            options: [
                {
                    id: "r2-o1",
                    name: "Room Only",
                    inclusions: ["Non-refundable", "Parking", "Coffee & tea", "Express Check-in", "Free WiFi", "Drinking Water", "Free fitness center access"],
                    price: 1800,
                    roomsLeft: 3
                },
                {
                    id: "r2-o2",
                    name: "Room With Breakfast",
                    inclusions: ["Non-refundable", "Breakfast", "Coffee & tea", "Express Check-in", "Free WiFi", "Drinking Water", "Free fitness center access"],
                    price: 1850,
                    roomsLeft: 2
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans overflow-x-hidden">
            <Navigation />

            {/* Top Search Summary Bar */}
            <div className="bg-white border-b border-[#DBDBDB] sticky top-20 z-30">
                <div className="container mx-auto px-4 py-3 lg:py-0 lg:min-h-[100.99px] flex items-center">
                    {/* Mobile Header (Mockup Style) */}
                    <div className="flex lg:hidden flex-col w-full">
                        <div className="flex items-center justify-between w-full mb-1">
                            <div className="flex items-center gap-3">
                                <button onClick={() => navigate(-1)} className="text-[#000000]">
                                    <ChevronLeft className="h-6 w-6" />
                                </button>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h1 className="text-[17px] font-bold text-[#233F50] font-['Inter'] leading-none">Dubai</h1>
                                        <span className="text-[11px] text-[#000000] font-medium font-['Inter']">15 Jun - 18 Jun</span>
                                    </div>
                                    <div className="text-[11px] text-[#000000] font-medium font-['Inter'] mt-1">
                                        2 Rooms, 6 Guests
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <button className="flex items-center gap-1 bg-[#98D5D4] text-[#233F50] px-3 py-1.5 rounded-[5px] h-9">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                                        <path d="m15 5 4 4" />
                                    </svg>
                                    <span className="text-[12px] font-bold font-['Inter']">Edit</span>
                                </button>
                                <button className="bg-[#233F50] text-[#98D5D4] p-2 rounded-full h-9 w-9 flex items-center justify-center">
                                    <Share2 className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Header (Untouched Alignment) */}
                    <div className="hidden lg:flex flex-row items-center justify-between gap-4 w-full">
                        <div className="flex-1 flex flex-nowrap items-center justify-center gap-12 text-[#1e293b]">
                            <div className="flex-shrink-0">
                                <span className="block uppercase text-black mb-1 whitespace-nowrap text-[12px] font-normal font-['Inter'] tracking-[-0.02em]">
                                    ENTER CITY NAME, LOCATION
                                </span>
                                <span className="block text-[#1e293b] whitespace-nowrap text-[20px] font-semibold font-['Inter'] tracking-[-0.02em]">
                                    Dubai
                                </span>
                            </div>

                            <div className="h-10 w-px bg-slate-300 flex-shrink-0" />

                            <div className="flex-shrink-0">
                                <span className="block uppercase text-black mb-1 whitespace-nowrap text-[12px] font-normal font-['Inter'] tracking-[-0.02em]">
                                    TRAVEL DATE
                                </span>
                                <span className="block text-[#1e293b] whitespace-nowrap text-[20px] font-semibold font-['Inter'] tracking-[-0.02em]">
                                    15 June' 25, Sunday
                                </span>
                            </div>

                            <div className="h-10 w-px bg-slate-300 flex-shrink-0" />

                            <div className="flex-shrink-0">
                                <span className="block uppercase text-black mb-1 whitespace-nowrap text-[12px] font-normal font-['Inter'] tracking-[-0.02em]">
                                    RETURN DATE
                                </span>
                                <span className="block text-[#1e293b] whitespace-nowrap text-[20px] font-semibold font-['Inter'] tracking-[-0.02em]">
                                    18 Mar' 25, Wednesday
                                </span>
                            </div>

                            <div className="h-10 w-px bg-slate-300 flex-shrink-0" />

                            <div className="flex-shrink-0">
                                <span className="block uppercase text-black mb-1 whitespace-nowrap text-[12px] font-normal font-['Inter'] tracking-[-0.02em]">
                                    ROOM & GUESTS
                                </span>
                                <span className="block text-[#1e293b] whitespace-nowrap text-[20px] font-semibold font-['Inter'] tracking-[-0.02em]">
                                    2 Room, 6 Guests
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <Button
                                variant="outline"
                                className="bg-[#233F50] hover:bg-[#1a2f3d] border-0 p-0 w-[148.35px] h-[33.42px] rounded-[16.71px]"
                            >
                                <span className="text-[#98D5D4] text-[16px] font-medium font-['Inter']">
                                    Modify Search
                                </span>
                            </Button>
                            <Button
                                size="icon"
                                variant="ghost"
                                className="bg-[#233F50] hover:bg-[#1a2f3d] border-0 rounded-full w-[32.57px] h-[32.57px]"
                            >
                                <Share2 className="w-[15.56px] h-[16.03px] text-[#98D5D4]" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <main className="container mx-auto px-4 py-8 pt-20 w-full max-w-[1200px]">
                {/* Back Button */}
                <div className="mb-4 mt-2">
                    <button onClick={() => window.history.back()} className="flex items-center text-black hover:text-slate-700 transition-colors">
                        <ArrowLeft className="h-6 w-6" />
                    </button>
                </div>

                {/* Hotel Header */}
                <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-end mb-4 lg:mb-6 gap-4">
                    <div className="flex-1 w-full">
                        <h1 className="text-[#233F50] font-bold text-[24px] lg:text-[40px] leading-tight font-['Inter'] mb-1 lg:mb-2 text-left">
                            {hotel.name}
                        </h1>
                        <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-3">
                            <div className="flex items-center gap-2">
                                <span className="text-[#64748B] text-[12px] lg:text-[14px] font-medium font-['Inter']">
                                    {hotel.location}
                                </span>
                                <div className="flex gap-0.5 text-[#FBBF24]">
                                    {[...Array(hotel.stars)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 lg:h-5 lg:w-5 fill-current stroke-none" />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Mobile Score & Enquiry Row (Mockup Style) */}
                        <div className="lg:hidden flex items-center justify-between w-full mt-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-[#9.4 Excellent] bg-[#98D5D4] text-[#233F50] font-bold text-[18px] px-2 py-1 rounded-[5px]">
                                    9.4
                                </div>
                                <div className="flex flex-col leading-tight">
                                    <span className="font-bold text-[#233F50] text-[14px]">Excellent</span>
                                    <span className="text-slate-500 text-[12px]">1002 reviews</span>
                                </div>
                            </div>

                            <Button
                                variant="outline"
                                className="flex items-center justify-center gap-1 border border-[#DBDBDB] rounded-[10px] px-3 py-2 bg-white text-[#233F50] font-bold text-[13px] h-10 shadow-sm"
                            >
                                Enquiry Now
                                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Desktop Score (Hidden on Mobile) */}
                    <div className="hidden lg:flex items-center gap-3">
                        <div className="bg-[#98D5D4] text-[#1e293b] font-bold text-lg px-2.5 py-1.5 rounded-md">
                            9.4
                        </div>
                        <div className="flex flex-col items-start leading-tight">
                            <span className="font-bold text-[#1e293b] text-base">Excellent</span>
                            <span className="text-slate-500 text-xs">1002 reviews</span>
                        </div>
                    </div>
                </div>

                {/* Image Gallery Section */}
                <div className="relative mb-8 lg:mb-12">
                    {/* Mobile Carousel View (Mockup Style) */}
                    <div className="lg:hidden relative rounded-[15px] overflow-hidden group">
                        <img src={hotel.images[0]} alt="Main" className="w-full h-[250px] object-cover" />

                        {/* Navigation Arrows */}
                        <button className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-10">
                            <ChevronLeft className="h-5 w-5 text-[#233F50]" />
                        </button>
                        <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md z-10">
                            <ChevronRight className="h-5 w-5 text-[#233F50]" />
                        </button>

                        {/* Image Counter Badge */}
                        <div className="absolute bottom-3 right-3 bg-[#233F50]/80 text-white text-[12px] px-2 py-1 rounded-[5px] flex items-center gap-1.5 backdrop-blur-sm">
                            <LayoutGrid className="h-3.5 w-3.5" /> 12
                        </div>
                    </div>

                    {/* Desktop Grid View */}
                    <div className="hidden lg:flex gap-4 h-[342px] rounded-3xl overflow-hidden">
                        <div className="w-[603px] flex-shrink-0 h-full">
                            <img src={hotel.images[0]} alt="Main" className="w-full h-full object-cover" />
                        </div>
                        <div className="grid grid-cols-2 gap-4 h-full flex-1">
                            {hotel.images.slice(1, 5).map((img, i) => (
                                <div key={i} className="w-full h-[168px]">
                                    <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Popular Facilities Section */}
                <div className="mb-12">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 lg:mb-8 gap-4">
                        <h2 className="text-[#1D3C50] font-bold text-[20px] lg:text-[25px] font-['Inter']">
                            Popular Facilities
                        </h2>

                        {/* Desktop Enquiry Button */}
                        <Button
                            variant="outline"
                            className="hidden lg:flex items-center justify-center gap-2 hover:bg-slate-50 transition-all font-semibold text-[#0FAA53] min-w-[200px] h-[50px] border border-[#16A34A] rounded-[9px] shadow-sm bg-white"
                        >
                            Enquiry Now
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" className="h-5 w-5" />
                        </Button>
                    </div>

                    {/* Facilities Grid - Adjusted to fit 6 items in one view on mobile */}
                    <div className="flex items-start justify-between lg:justify-start lg:gap-12 pb-2 lg:mx-0 lg:px-0">
                        {hotel.facilities.map((facility, i) => (
                            <div key={i} className="flex flex-col items-center gap-1.5 text-center w-[16%] lg:w-auto lg:min-w-[100px]">
                                <div className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] rounded-full bg-[#98D5D430] flex items-center justify-center text-[#1D3C50]">
                                    <facility.icon className="h-5 w-5 lg:h-6 lg:w-6 stroke-[1.5]" />
                                </div>
                                <span className="text-[9px] lg:text-[14px] font-medium text-[#1D3C50] leading-[1.1] font-['Inter'] break-words">
                                    {facility.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    <button className="flex items-center gap-1 mt-4 text-[#2196F3] font-semibold text-[13px] lg:text-[14px] font-['Inter'] hover:underline">
                        View More Facilities <ChevronLeft className="h-4 w-4 rotate-[270deg]" />
                    </button>
                </div>

                {/* Select Your Room Section */}
                <div className="mb-12">
                    <h2 className="text-[#1D3C50] font-bold text-[20px] lg:text-[25px] font-['Inter'] mb-6">
                        Select Your Room
                    </h2>

                    {/* Room Filters */}
                    <div className="flex gap-2 lg:gap-3 mb-8 overflow-x-auto no-scrollbar">
                        <Button
                            variant="outline"
                            className="rounded-full border-[#000000] text-[#000000] text-[12px] lg:text-[14px] h-[31px] px-4 whitespace-nowrap"
                        >
                            Free Cancellation
                        </Button>
                        <Button
                            variant="outline"
                            className="rounded-full border-[#000000] text-[#000000] text-[12px] lg:text-[14px] h-[31px] px-4 whitespace-nowrap"
                        >
                            Free Breakfast
                        </Button>
                    </div>

                    {/* Room List */}
                    <div className="space-y-6 lg:space-y-8">
                        {rooms.map((room) => (
                            <div
                                key={room.id}
                                className="bg-white rounded-[20px] lg:rounded-[16px] border border-[#DBDBDB] overflow-hidden flex flex-col lg:flex-row"
                            >
                                {/* Room Gallery - Mobile: Top, Desktop: Left */}
                                <div className="w-full lg:w-[420px] p-4 lg:p-6 lg:border-r border-[#DBDBDB] flex flex-col">
                                    <div className="relative rounded-[12px] overflow-hidden mb-4 lg:mb-5">
                                        <img src={room.image} alt={room.name} className="w-full h-[200px] lg:h-[197px] object-cover" />

                                        {/* Mobile Carousel Badge */}
                                        <div className="absolute bottom-3 right-3 bg-black/60 text-white text-[11px] px-2 py-1 rounded-[5px] flex items-center gap-1.5 backdrop-blur-sm">
                                            <LayoutGrid className="h-3.5 w-3.5" /> 12
                                        </div>
                                    </div>

                                    <h3 className="text-[18px] lg:text-[22px] font-bold text-[#233F50] mb-4 lg:mb-5 font-['Inter']">
                                        {room.name}
                                    </h3>

                                    {/* Room Specs */}
                                    <div className="grid grid-cols-2 gap-y-3 lg:gap-y-4 text-[12px] lg:text-[13px] text-[#233F50] font-medium font-['Inter'] mb-2 lg:mb-0">
                                        <div className="flex items-center gap-2">
                                            <LayoutGrid className="h-3.5 w-3.5 text-[#64748B]" />
                                            <span>35 sq. mt</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Bed className="h-3.5 w-3.5 text-[#64748B]" />
                                            <span>1 king bed</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="h-3.5 w-3.5 text-[#64748B]" />
                                            <span>City view</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <User className="h-3.5 w-3.5 text-[#64748B]" />
                                            <span>Sleeps 2</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Rate Plans - Mobile: Bottom, Desktop: Right */}
                                <div className="flex-1 flex flex-col divide-y divide-[#DBDBDB]">
                                    {[
                                        { name: 'Room Only', price: 900 },
                                        { name: 'Room With Breakfast', price: 950 },
                                        { name: 'Room With Free Cancellation', price: 1000 },
                                        { name: 'Room With Free Cancellation, Breakfast', price: 1050 }
                                    ].map((plan, idx) => (
                                        <div key={idx} className="flex flex-col lg:flex-row">
                                            {/* Plan Details (Mobile: Top, Desktop: Left) */}
                                            <div className="flex-1 p-4 lg:p-6 lg:pt-7">
                                                <h4 className="font-bold text-[#233F50] text-[14px] lg:text-[15px] mb-3">
                                                    {plan.name}
                                                </h4>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[13px] lg:text-[15px] text-[#233F50] font-['Inter']">
                                                    <div className="flex items-center gap-2 text-[#EF2D28]">
                                                        <XCircle className="h-3.5 w-3.5" /> Non-refundable
                                                    </div>
                                                    <div className="flex items-center gap-2 text-[#16A34A]">
                                                        <CheckCircle className="h-3.5 w-3.5" /> Free Wifi
                                                    </div>
                                                    <div className="flex items-center gap-2 text-[#16A34A]">
                                                        <CheckCircle className="h-3.5 w-3.5" /> Coffee & tea
                                                    </div>
                                                    <div className="hidden lg:flex items-center gap-2 text-[#16A34A]">
                                                        <CheckCircle className="h-3.5 w-3.5" /> Express Check-in
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Plan Pricing (Mobile: Bottom, Desktop: Right) */}
                                            <div className="p-4 lg:p-6 lg:border-l border-[#DBDBDB] bg-[#F8FAFC] lg:bg-transparent flex flex-row lg:flex-col items-center lg:items-start justify-between lg:justify-center gap-4 lg:w-[240px]">
                                                <div>
                                                    <div className="text-[20px] lg:text-[26px] font-bold text-[#233F50]">
                                                        {plan.price} AED
                                                    </div>
                                                    <div className="text-[11px] lg:text-[12px] text-slate-500">
                                                        Per night for 2 room
                                                    </div>
                                                </div>
                                                <Button
                                                    onClick={() => navigate('/hotel/booking')}
                                                    className="bg-[#98D5D4] hover:bg-[#83c3c2] text-[#233F50] font-bold h-[40px] px-6 rounded-[10px] w-auto lg:w-full"
                                                >
                                                    Reserve Room
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Hotel Facilities Section */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                    <h2
                        className="mb-8"
                        style={{
                            fontFamily: 'Inter',
                            fontWeight: 600,
                            fontSize: '25px',
                            lineHeight: '25px',
                            letterSpacing: '-0.03em',
                            color: '#233F50'
                        }}
                    >
                        Hotel Facilities
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
                        {/* Column 1 */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="mb-4" style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '20px', lineHeight: '20px', letterSpacing: '-0.03em', color: '#000000' }}>Access</h3>
                                <ul className="space-y-2 text-[15px] text-gray-600 font-inter">
                                    <li>24+7 Check-in</li>
                                    <li>24+7 Front Desk</li>
                                    <li>Express Check-in/out</li>
                                    <li>Exterior corridor</li>
                                    <li>Litter boxes</li>
                                    <li>Non-smoking rooms</li>
                                    <li>Paid parking</li>
                                    <li>Smoking allowed</li>
                                    <li>Soundproof rooms</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="mb-4" style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '20px', lineHeight: '20px', letterSpacing: '-0.03em', color: '#000000' }}>Safety and security</h3>
                                <ul className="space-y-2 text-[15px] text-gray-600 font-inter">
                                    <li>24+7 Security</li>
                                    <li>CCTV in common areas</li>
                                    <li>Fire extinguisher</li>
                                    <li>Safety/security feature</li>
                                    <li>Smoke detectors</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="mb-4" style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '20px', lineHeight: '20px', letterSpacing: '-0.03em', color: '#000000' }}>Room amenities</h3>
                                <ul className="space-y-2 text-[15px] text-gray-600 font-inter">
                                    <li>Air-conditioned rooms</li>
                                    <li>Daily housekeeping</li>
                                    <li>Sauna</li>
                                    <li>Kitchen</li>
                                    <li>Adapter</li>
                                    <li>Bedside socket</li>
                                    <li>Blackout curtains</li>
                                    <li>Carpeted floor</li>
                                    <li>Cupboard</li>
                                    <li>Dressing area</li>
                                    <li>Dustbins</li>
                                    <li>First Aid kit</li>
                                    <li>Free drinking water</li>
                                    <li>Hair dryer</li>
                                    <li>Hand sanitiser</li>
                                    <li>High floor</li>
                                    <li>Ironing facilities</li>
                                    <li>Linens</li>
                                    <li>Low floor available</li>
                                    <li>Marbled/tiled floor</li>
                                    <li>Mini bar</li>
                                    <li>Mirror</li>
                                    <li>Mobility Accessibility</li>
                                    <li>Safe box</li>
                                    <li>Shelf for clothes</li>
                                    <li>Sleep comfort products</li>
                                    <li>Slippers</li>
                                    <li>Smoke detector</li>
                                    <li>Soundproofing</li>
                                    <li>Staircase access</li>
                                    <li>Study table</li>
                                    <li>Tea/Coffee maker</li>
                                    <li>Telephone</li>
                                    <li>Television</li>
                                    <li>Top floor available</li>
                                    <li>Wake-up call</li>
                                    <li>Window</li>
                                    <li>Wooden floor</li>
                                    <li>Safety Deposit Box</li>
                                    <li>Exterior corridor</li>
                                </ul>
                            </div>
                        </div>

                        {/* Column 2 */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="mb-4" style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '20px', lineHeight: '20px', letterSpacing: '-0.03em', color: '#000000' }}>Bathroom</h3>
                                <ul className="space-y-2 text-[15px] text-gray-600 font-inter">
                                    <li>Bathroom telephone</li>
                                    <li>Private bathroom</li>
                                    <li>Shower</li>
                                    <li>Toiletries</li>
                                    <li>Towels</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="mb-4" style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '20px', lineHeight: '20px', letterSpacing: '-0.03em', color: '#000000' }}>Family and kids</h3>
                                <ul className="space-y-2 text-[15px] text-gray-600 font-inter">
                                    <li>Play area</li>
                                    <li>Kids' meal</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="mb-4" style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '20px', lineHeight: '20px', letterSpacing: '-0.03em', color: '#000000' }}>Transfers and transport</h3>
                                <ul className="space-y-2 text-[15px] text-gray-600 font-inter">
                                    <li>Onsite car parking</li>
                                    <li>Airport transfer</li>
                                    <li>Car rental service</li>
                                    <li>Taxi/Cab service</li>
                                    <li>Paid parking</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="mb-4" style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '20px', lineHeight: '20px', letterSpacing: '-0.03em', color: '#000000' }}>Internet access</h3>
                                <ul className="space-y-2 text-[15px] text-gray-600 font-inter">
                                    <li>Internet services</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="mb-4" style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '20px', lineHeight: '20px', letterSpacing: '-0.03em', color: '#000000' }}>Kitchen</h3>
                                <ul className="space-y-2 text-[15px] text-gray-600 font-inter">
                                    <li>Tea/Coffee maker</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="mb-4" style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '20px', lineHeight: '20px', letterSpacing: '-0.03em', color: '#000000' }}>Food and drinks</h3>
                                <ul className="space-y-2 text-[15px] text-gray-600 font-inter">
                                    <li>Buffet Breakfast</li>
                                    <li>24+7 Room Service</li>
                                    <li>Alternative Meal Arrangement</li>
                                    <li>Coffee Shop</li>
                                    <li>Grocery Delivery</li>
                                    <li>Water Bottles</li>
                                    <li>In-Room Breakfast</li>
                                    <li>Kitchen</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="mb-4" style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '20px', lineHeight: '20px', letterSpacing: '-0.03em', color: '#000000' }}>Activities and sports</h3>
                                <ul className="space-y-2 text-[15px] text-gray-600 font-inter">
                                    <li>Indoor Swimming Pool</li>
                                    <li>Fitness Centre</li>
                                    <li>In-House Golf Course</li>
                                    <li>Game room</li>
                                    <li>Kids' swimming pool</li>
                                    <li>Billiards</li>
                                    <li>Table tennis</li>
                                    <li>Ticket Services</li>
                                    <li>Tours</li>
                                    <li>Spa/sauna</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="mb-4" style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '20px', lineHeight: '20px', letterSpacing: '-0.03em', color: '#000000' }}>Languages spoken</h3>
                                <ul className="space-y-2 text-[15px] text-gray-600 font-inter">
                                    <li>English</li>
                                    <li>Hindi</li>
                                    <li>Arabic</li>
                                    <li>Filipino</li>
                                    <li>French</li>
                                    <li>Russian</li>
                                    <li>Tamil</li>
                                </ul>
                            </div>
                        </div>

                        {/* Column 3 */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="mb-4" style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '20px', lineHeight: '20px', letterSpacing: '-0.03em', color: '#000000' }}>Services and conveniences</h3>
                                <ul className="space-y-2 text-[15px] text-gray-600 font-inter">
                                    <li>Facilities for Differently-Abled Guests</li>
                                    <li>Photocopy/fax in business center</li>
                                    <li>Luggage Storage</li>
                                    <li>Terrace</li>
                                    <li>Laundry Service</li>
                                    <li>Locker</li>
                                    <li>ATM</li>
                                    <li>Currency Exchange</li>
                                    <li>Doorman</li>
                                    <li>Dry-Cleaning</li>
                                    <li>Food Delivery</li>
                                    <li>Gift/Souvenir Shop</li>
                                    <li>Postal Service</li>
                                    <li>Salon</li>
                                    <li>Shops</li>
                                    <li>Smoking Area</li>
                                    <li>Steam room</li>
                                    <li>Concierge</li>
                                    <li>Air conditioning in Public Area</li>
                                    <li>Free car parking</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="mb-4" style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '20px', lineHeight: '20px', letterSpacing: '-0.03em', color: '#000000' }}>Safety and cleanliness</h3>
                                <ul className="space-y-2 text-[15px] text-gray-600 font-inter">
                                    <li>Anti-Viral Cleaning Items</li>
                                    <li>Body Thermometer</li>
                                    <li>Breakfast Takeaway Service</li>
                                    <li>Cashless Payment Service</li>
                                    <li>Common Area Disinfection (Daily)</li>
                                    <li>Doctor/Nurse on Call</li>
                                    <li>Free Face Masks</li>
                                    <li>Hot water linen and laundry washing</li>
                                    <li>Hygiene Certification</li>
                                    <li>Individually-wrapped food options</li>
                                    <li>Mask-wearing staff</li>
                                    <li>No Shared Stationery</li>
                                    <li>Physical Distancing of at least 1 metre</li>
                                    <li>Professional Sanitisation and Disinfection Services</li>
                                    <li>Regular Sanitisation of Rooms</li>
                                    <li>Regularly disinfected rooms</li>
                                    <li>Room Sanitisation Opt-Out Available</li>
                                    <li>Room Sealing after Sanitisation</li>
                                    <li>Safe Dining Space</li>
                                    <li>Safety Protocol-trained staff</li>
                                    <li>Sanitised kitchen and tableware</li>
                                    <li>First Aid kit</li>
                                    <li>Hand sanitiser</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div >

            </main >
            <Footer />
        </div >
    );
};

export default HotelDetails;
