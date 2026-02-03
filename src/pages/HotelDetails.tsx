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

            {/* Top Search Summary Bar - Reused styling from Listing */}
            {/* Top Search Summary Bar */}
            <div className="bg-[#f1f5f9] border-b border-slate-200 sticky top-20 z-30">
                <div
                    className="container mx-auto px-4 flex items-center min-h-[100.99px] py-4 md:py-0"
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
                        <div className="flex-1 flex flex-wrap md:flex-nowrap items-center justify-center gap-6 md:gap-12 text-[#1e293b]">
                            <div className="flex-shrink-0 text-center md:text-left">
                                <span
                                    className="block uppercase text-black mb-1 whitespace-nowrap"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontWeight: 400,
                                        fontSize: '12px',
                                        lineHeight: '100%',
                                        letterSpacing: '-0.02em'
                                    }}
                                >
                                    ENTER CITY NAME, LOCATION
                                </span>
                                <span
                                    className="block text-[#1e293b] whitespace-nowrap"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontWeight: 600,
                                        fontSize: '20px',
                                        lineHeight: '100%',
                                        letterSpacing: '-0.02em'
                                    }}
                                >
                                    Dubai
                                </span>
                            </div>

                            <div className="h-10 w-px bg-slate-300 hidden md:block flex-shrink-0" />

                            <div className="flex-shrink-0 text-center md:text-left">
                                <span
                                    className="block uppercase text-black mb-1 whitespace-nowrap"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontWeight: 400,
                                        fontSize: '12px',
                                        lineHeight: '100%',
                                        letterSpacing: '-0.02em'
                                    }}
                                >
                                    TRAVEL DATE
                                </span>
                                <span
                                    className="block text-[#1e293b] whitespace-nowrap"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontWeight: 600,
                                        fontSize: '20px',
                                        lineHeight: '100%',
                                        letterSpacing: '-0.02em'
                                    }}
                                >
                                    15 June' 25, Sunday
                                </span>
                            </div>

                            <div className="h-10 w-px bg-slate-300 hidden md:block flex-shrink-0" />

                            <div className="flex-shrink-0 text-center md:text-left">
                                <span
                                    className="block uppercase text-black mb-1 whitespace-nowrap"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontWeight: 400,
                                        fontSize: '12px',
                                        lineHeight: '100%',
                                        letterSpacing: '-0.02em'
                                    }}
                                >
                                    RETURN DATE
                                </span>
                                <span
                                    className="block text-[#1e293b] whitespace-nowrap"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontWeight: 600,
                                        fontSize: '20px',
                                        lineHeight: '100%',
                                        letterSpacing: '-0.02em'
                                    }}
                                >
                                    18 Mar' 25, Wednesday
                                </span>
                            </div>

                            <div className="h-10 w-px bg-slate-300 hidden md:block flex-shrink-0" />

                            <div className="flex-shrink-0 text-center md:text-left">
                                <span
                                    className="block uppercase text-black mb-1 whitespace-nowrap"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontWeight: 400,
                                        fontSize: '12px',
                                        lineHeight: '100%',
                                        letterSpacing: '-0.02em'
                                    }}
                                >
                                    ROOM & GUESTS
                                </span>
                                <span
                                    className="block text-[#1e293b] whitespace-nowrap"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontWeight: 600,
                                        fontSize: '20px',
                                        lineHeight: '100%',
                                        letterSpacing: '-0.02em'
                                    }}
                                >
                                    2 Room, 6 Guests
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 w-full md:w-auto justify-center">
                            <Button
                                variant="outline"
                                className="bg-[#233F50] hover:bg-[#1a2f3d] border-0 p-0 flex-1 md:flex-none"
                                style={{
                                    width: '148.35px',
                                    maxWidth: '148.35px',
                                    height: '33.42px',
                                    borderRadius: '16.71px'
                                }}
                            >
                                <span style={{
                                    fontFamily: 'Inter',
                                    fontWeight: 500,
                                    fontSize: '16px',
                                    lineHeight: '100%',
                                    letterSpacing: '0%',
                                    color: '#98D5D4'
                                }}>
                                    Modify Search
                                </span>
                            </Button>
                            <Button
                                size="icon"
                                variant="ghost"
                                className="bg-[#233F50] hover:bg-[#1a2f3d] border-0 rounded-full flex-shrink-0"
                                style={{
                                    width: '32.57px',
                                    height: '32.57px'
                                }}
                            >
                                <Share2
                                    style={{
                                        width: '15.56px',
                                        height: '16.03px',
                                        color: '#98D5D4'
                                    }}
                                />
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
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-4">
                    <div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                            <h1 style={{
                                fontFamily: 'Inter',
                                fontWeight: 600,
                                fontSize: 'clamp(24px, 5vw, 40px)',
                                lineHeight: '1.2',
                                letterSpacing: '-0.03em',
                                color: '#233F50'
                            }}>
                                {hotel.name}
                            </h1>
                            <div className="flex gap-0.5 text-[#FBBF24]">
                                {[...Array(hotel.stars)].map((_, i) => (
                                    <Star key={i} className="h-5 w-5 md:h-6 md:w-6 fill-current stroke-none" />
                                ))}
                            </div>
                        </div>
                        <p className="text-[#64748B] text-sm mt-1">
                            {hotel.location}
                        </p>
                    </div>

                    <div className="flex items-center gap-3 mt-4 md:mt-0 bg-slate-50 p-2 rounded-lg md:bg-transparent md:p-0">
                        <div className="bg-[#98D5D4] text-[#1e293b] font-bold text-lg px-2.5 py-1.5 rounded-md">
                            9.4
                        </div>
                        <div className="flex flex-col items-start leading-tight">
                            <span className="font-bold text-[#1e293b] text-base">Excellent</span>
                            <span className="text-slate-500 text-xs">1002 reviews</span>
                        </div>
                    </div>
                </div>

                {/* Image Grid */}
                <div className="flex flex-col md:flex-row gap-4 mb-12 rounded-3xl overflow-hidden h-auto md:h-[342px]">
                    <div className="w-full md:w-[603px] flex-shrink-0 h-[250px] md:h-full">
                        <img src={hotel.images[0]} alt="Main" className="w-full h-full object-cover" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 h-full flex-1">
                        {hotel.images.slice(1, 5).map((img, i) => (
                            <div key={i} className="w-full h-[120px] md:h-[168px]">
                                <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Popular Facilities */}
                <div className="mb-12">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
                        <h2 style={{
                            fontFamily: 'Inter',
                            fontWeight: 600,
                            fontSize: '25px',
                            lineHeight: '25px',
                            letterSpacing: '-0.03em',
                            color: '#1D3C50'
                        }}>Popular Facilities</h2>
                        <Button
                            variant="outline"
                            className="flex items-center justify-center gap-2 hover:bg-slate-50 transition-all font-semibold text-[#0FAA53] w-full md:w-auto"
                            style={{
                                minWidth: '200px',
                                maxWidth: '344.82px',
                                height: '50.84px',
                                borderRadius: '9px',
                                border: '1px solid #16A34A',
                                background: '#FFFFFF',
                                boxShadow: '0px 2px 5px 0px #0000001A'
                            }}
                        >
                            Enquiry Now
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" className="h-5 w-5" />
                        </Button>
                    </div>

                    <div className="flex flex-wrap gap-6 items-start mb-6">
                        {hotel.facilities.map((facility, i) => (
                            <div key={i} className="flex flex-col items-center gap-3 text-center w-[90px]">
                                <div
                                    className="rounded-full flex items-center justify-center text-[#1D3C50] hover:bg-[#98D5D460] transition-colors cursor-pointer"
                                    style={{
                                        width: '59.06px',
                                        height: '59.06px',
                                        backgroundColor: '#98D5D440'
                                    }}
                                >
                                    <facility.icon className="h-6 w-6 stroke-[1.5]" />
                                </div>
                                <span className="text-[14px] font-medium text-[#1D3C50] leading-tight font-sans">
                                    {facility.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    <button
                        className="flex items-center gap-1 mt-2 hover:underline"
                        style={{
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 600,
                            fontSize: '14px',
                            lineHeight: '100%',
                            letterSpacing: '-0.02em',
                            color: '#2196F3'
                        }}
                    >
                        View More Facilities <ChevronRight className="h-4 w-4 rotate-90" />
                    </button>
                </div>

                {/* Select Your Room */}
                <div className="mb-8">
                    <h2 style={{
                        fontFamily: 'Inter',
                        fontWeight: 600,
                        fontSize: '25px',
                        lineHeight: '25px',
                        letterSpacing: '-0.03em',
                        color: '#1D3C50'
                    }} className="mb-6">Select Your Room</h2>

                    {/* Room Filters */}
                    <div className="flex gap-3 mb-6">
                        <Button
                            variant="outline"
                            className="flex items-center justify-center p-0 hover:bg-slate-50"
                            style={{
                                width: '138px',
                                height: '31px',
                                borderRadius: '30px',
                                border: '1px solid #000000',
                                fontFamily: 'Inter',
                                fontWeight: 400,
                                fontSize: '14px',
                                lineHeight: '10px',
                                letterSpacing: '-0.03em',
                                color: '#000000'
                            }}
                        >
                            Free Cancellation
                        </Button>
                        <Button
                            variant="outline"
                            className="flex items-center justify-center p-0 hover:bg-slate-50"
                            style={{
                                width: '123px',
                                height: '31px',
                                borderRadius: '30px',
                                border: '1px solid #000000',
                                fontFamily: 'Inter',
                                fontWeight: 400,
                                fontSize: '14px',
                                lineHeight: '10px',
                                letterSpacing: '-0.03em',
                                color: '#000000'
                            }}
                        >
                            Free Breakfast
                        </Button>
                    </div>

                    {/* Room List */}
                    <div className="flex flex-col gap-8">
                        {rooms.map((room) => (
                            <div
                                key={room.id}
                                className="bg-white overflow-hidden flex flex-col md:flex-row w-full"
                                style={{
                                    border: '1px solid #DBDBDB',
                                    borderRadius: '16px',
                                    minHeight: '400px'
                                }}
                            >
                                {/* Left Side: Room Info */}
                                <div className="w-full md:w-[420px] flex-shrink-0 p-6 border-b md:border-b-0 md:border-r border-[#DBDBDB] flex flex-col">
                                    <div
                                        className="relative overflow-hidden mb-5 flex-shrink-0 w-full"
                                        style={{
                                            maxWidth: '366px',
                                            height: '197px',
                                            borderRadius: '11px'
                                        }}
                                    >
                                        <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
                                        <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2.5 py-1 rounded-md flex items-center gap-1.5 backdrop-blur-sm">
                                            <LayoutGrid className="h-3.5 w-3.5" /> 12
                                        </div>
                                    </div>
                                    <h3 className="text-[22px] font-bold text-[#1e293b] mb-5 font-sans leading-tight">{room.name}</h3>

                                    <div
                                        className="grid grid-cols-2 gap-y-4 gap-x-2 mb-6"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontWeight: 500,
                                            fontSize: '13px',
                                            lineHeight: '15px',
                                            letterSpacing: '-0.03em',
                                            color: '#000000'
                                        }}
                                    >
                                        <div className="flex items-center gap-2.5">
                                            <LayoutGrid style={{ width: '13px', height: '13px', strokeWidth: 1.5 }} />
                                            <span>35 sq. mt</span>
                                        </div>
                                        <div className="flex items-center gap-2.5">
                                            <Bed style={{ width: '13px', height: '13px', strokeWidth: 1.5 }} />
                                            <span>1 king bed</span>
                                        </div>
                                        <div className="flex items-center gap-2.5">
                                            <MapPin style={{ width: '13px', height: '13px', strokeWidth: 1.5 }} />
                                            <span>City view</span>
                                        </div>
                                        <div className="flex items-center gap-2.5">
                                            <User style={{ width: '13px', height: '13px', strokeWidth: 1.5 }} />
                                            <span>Sleeps 2</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side: Rate Plans */}
                                <div className="flex-1 flex flex-col divide-y divide-[#DBDBDB]">
                                    {/* Plan 1: Room Only */}

                                    <div className="flex flex-col md:flex-row h-full">
                                        <div className="flex-1 p-6 pt-7">
                                            <h4 className="font-bold text-[#1e293b] text-[15px] mb-3">Room Only</h4>
                                            <div
                                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-4"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontWeight: 400,
                                                    fontSize: '15px',
                                                    lineHeight: '15px',
                                                    letterSpacing: '-0.03em',
                                                    color: '#000000'
                                                }}
                                            >
                                                <div className="flex items-center gap-2" style={{ color: '#EF2D28' }}>
                                                    <XCircle style={{ width: '11px', height: '11px', strokeWidth: 1.5 }} /> Non-refundable
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <CheckCircle style={{ width: '11px', height: '11px', strokeWidth: 1.5 }} /> Parking
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <CheckCircle style={{ width: '11px', height: '11px', strokeWidth: 1.5 }} /> Coffee & tea
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <CheckCircle style={{ width: '11px', height: '11px', strokeWidth: 1.5 }} /> Express Check-in
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <CheckCircle style={{ width: '11px', height: '11px', strokeWidth: 1.5 }} /> Free Wifi
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <CheckCircle style={{ width: '11px', height: '11px', strokeWidth: 1.5 }} /> Drinking Water
                                                </div>
                                                <div className="flex items-center gap-2 col-span-2 lg:col-span-3">
                                                    <CheckCircle style={{ width: '11px', height: '11px', strokeWidth: 1.5 }} /> Free fitness center access
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-[240px] p-6 border-t md:border-t-0 md:border-l border-[#DBDBDB] flex flex-col justify-center items-start">
                                            <div className="text-[26px] font-bold text-[#1e293b] leading-none mb-1">900 AED</div>
                                            <div className="text-xs text-slate-400 mb-3 font-medium">Per night for 2 room</div>
                                            <Button
                                                onClick={() => navigate('/hotel/booking')}
                                                className="bg-[#98D5D4] hover:bg-[#83c3c2] text-[#233F50] p-0 w-full"
                                                style={{
                                                    maxWidth: '153px',
                                                    height: '39px',
                                                    borderRadius: '9px',
                                                    fontFamily: 'Inter',
                                                    fontWeight: 500,
                                                    fontSize: '16.5px',
                                                    lineHeight: '100%',
                                                    letterSpacing: '-0.02em'
                                                }}
                                            >
                                                Reserve 2 Room
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Plan 2: Breakfast */}
                                    <div className="flex flex-col md:flex-row h-full">
                                        <div className="flex-1 p-6 pt-7">
                                            <h4 className="font-bold text-[#1e293b] text-[15px] mb-3">Room With Breakfast</h4>
                                            <div
                                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-4"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontWeight: 400,
                                                    fontSize: '15px',
                                                    lineHeight: '15px',
                                                    letterSpacing: '-0.03em',
                                                    color: '#000000'
                                                }}
                                            >
                                                <div className="flex items-center gap-2" style={{ color: '#EF2D28' }}>
                                                    <XCircle style={{ width: '11px', height: '11px', strokeWidth: 1.5 }} /> Non-refundable
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <CheckCircle style={{ width: '11px', height: '11px', strokeWidth: 1.5 }} /> Breakfast
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <CheckCircle style={{ width: '11px', height: '11px', strokeWidth: 1.5 }} /> Coffee & tea
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <CheckCircle style={{ width: '11px', height: '11px', strokeWidth: 1.5 }} /> Express Check-in
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <CheckCircle style={{ width: '11px', height: '11px', strokeWidth: 1.5 }} /> Free Wifi
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <CheckCircle style={{ width: '11px', height: '11px', strokeWidth: 1.5 }} /> Drinking Water
                                                </div>
                                                <div className="flex items-center gap-2 col-span-2 lg:col-span-3">
                                                    <CheckCircle style={{ width: '11px', height: '11px', strokeWidth: 1.5 }} /> Free fitness center access
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-[240px] p-6 border-t md:border-t-0 md:border-l border-[#DBDBDB] flex flex-col justify-center items-start">
                                            <div className="text-[26px] font-bold text-[#1e293b] leading-none mb-1">950 AED</div>
                                            <div className="text-xs text-slate-400 mb-3 font-medium">Per night for 2 room</div>
                                            <Button
                                                onClick={() => navigate('/hotel/booking')}
                                                className="bg-[#98D5D4] hover:bg-[#83c3c2] text-[#233F50] p-0 w-full"
                                                style={{
                                                    maxWidth: '153px',
                                                    height: '39px',
                                                    borderRadius: '9px',
                                                    fontFamily: 'Inter',
                                                    fontWeight: 500,
                                                    fontSize: '16.5px',
                                                    lineHeight: '100%',
                                                    letterSpacing: '-0.02em'
                                                }}
                                            >
                                                Reserve 2 Room
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Plan 3: Free Cancellation */}
                                    <div className="flex flex-col md:flex-row h-full">
                                        <div className="flex-1 p-6 pt-7">
                                            <h4 className="font-bold text-[#1e293b] text-[15px] mb-3">Room With Free Cancellation</h4>
                                            <div
                                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-4"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontWeight: 400,
                                                    fontSize: '15px',
                                                    lineHeight: '15px',
                                                    letterSpacing: '-0.03em',
                                                    color: '#000000'
                                                }}
                                            >
                                                <div className="flex items-center gap-2" style={{ color: '#16A34A' }}>
                                                    <CheckCircle style={{ width: '11px', height: '11px', strokeWidth: 1.5 }} /> Free Cancellation
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <CheckCircle style={{ width: '11px', height: '11px', strokeWidth: 1.5 }} /> Express Check-in
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <CheckCircle style={{ width: '11px', height: '11px', strokeWidth: 1.5 }} /> Free Wifi
                                                </div>
                                                <div className="flex items-center gap-2 col-span-2 lg:col-span-3">
                                                    <CheckCircle style={{ width: '11px', height: '11px', strokeWidth: 1.5 }} /> Free fitness center access
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-[240px] p-6 border-t md:border-t-0 md:border-l border-[#DBDBDB] flex flex-col justify-center items-start">
                                            <div className="text-[26px] font-bold text-[#1e293b] leading-none mb-1">1000 AED</div>
                                            <div className="text-xs text-slate-400 mb-3 font-medium">Per night for 2 room</div>
                                            <Button
                                                onClick={() => navigate('/hotel/booking')}
                                                className="bg-[#98D5D4] hover:bg-[#83c3c2] text-[#233F50] p-0 w-full"
                                                style={{
                                                    maxWidth: '153px',
                                                    height: '39px',
                                                    borderRadius: '9px',
                                                    fontFamily: 'Inter',
                                                    fontWeight: 500,
                                                    fontSize: '16.5px',
                                                    lineHeight: '100%',
                                                    letterSpacing: '-0.02em'
                                                }}
                                            >
                                                Reserve 2 Room
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Plan 4: All */}
                                    <div className="flex flex-col md:flex-row h-full">
                                        <div className="flex-1 p-6 pt-7">
                                            <h4 className="font-bold text-[#1e293b] text-[15px] mb-3">Room With Free Cancellation, Breakfast</h4>
                                            <div
                                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-4"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontWeight: 400,
                                                    fontSize: '15px',
                                                    lineHeight: '15px',
                                                    letterSpacing: '-0.03em',
                                                    color: '#000000'
                                                }}
                                            >
                                                <div className="flex items-center gap-2" style={{ color: '#16A34A' }}>
                                                    <CheckCircle style={{ width: '11px', height: '11px', strokeWidth: 1.5 }} /> Free Cancellation
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Coffee style={{ width: '11px', height: '11px', strokeWidth: 1.5 }} /> Breakfast
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Wifi style={{ width: '11px', height: '11px', strokeWidth: 1.5 }} /> Free Wifi
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Coffee style={{ width: '11px', height: '11px', strokeWidth: 1.5 }} /> Coffee & Tea
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-[240px] p-6 border-t md:border-t-0 md:border-l border-[#DBDBDB] flex flex-col justify-center items-start">
                                            <div className="text-[26px] font-bold text-[#1e293b] leading-none mb-1">1050 AED</div>
                                            <div className="text-xs text-slate-400 mb-3 font-medium">Per night for 2 room</div>
                                            <Button
                                                onClick={() => navigate('/hotel/booking')}
                                                className="bg-[#98D5D4] hover:bg-[#83c3c2] text-[#233F50] p-0 w-full"
                                                style={{
                                                    maxWidth: '153px',
                                                    height: '39px',
                                                    borderRadius: '9px',
                                                    fontFamily: 'Inter',
                                                    fontWeight: 500,
                                                    fontSize: '16.5px',
                                                    lineHeight: '100%',
                                                    letterSpacing: '-0.02em'
                                                }}
                                            >
                                                Reserve 2 Room
                                            </Button>
                                        </div>
                                    </div>
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
                </div>

            </main>
            <Footer />
        </div>
    );
};

export default HotelDetails;
