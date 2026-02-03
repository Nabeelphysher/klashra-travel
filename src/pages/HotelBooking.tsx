

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Star, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const HotelBooking = () => {
    // Mock Data matching the reference image
    const bookingData = {
        hotelName: "Radisson Red Dubai Silicon Oasis",
        rating: 5,
        location: "Silicon Park, Silicon Oasis",
        image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2670&auto=format&fit=crop", // Using room image from details
        checkIn: { date: "15 Jun 2025", time: "2.00 PM" },
        checkOut: { date: "18 Jun 2025", time: "12.00 PM" },
        guests: { adults: 4, children: 2, rooms: 2, duration: "3 Nights" },
        roomType: "Superior King Bed",
        inclusions: [
            "Free Cancellation",
            "Express Check-in",
            "Free Wifi",
            "Free fitness center access"
        ],
        cancellationPolicy: "Before : 15-Jun-2025 00:00:00 INR. 0 (Free Cancellation)\nFrom 14-Jun-2025 00:00:00 To 15-Jun-2025 00:00:00 AED. 34%",
        pricing: {
            detail: "2 Rooms X 3 Nights",
            room1: 1350,
            room2: 1350,
            total: 2700,
            currency: "AED"
        }
    };

    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white font-sans overflow-x-hidden">
            <Navigation />

            <main className="container mx-auto px-4 pt-28 pb-8 max-w-7xl">
                <h1
                    className="mb-8"
                    style={{
                        fontFamily: 'Inter',
                        fontWeight: 600,
                        fontSize: '30px',
                        lineHeight: '35px',
                        letterSpacing: '-0.03em',
                        color: '#233F50'
                    }}
                >
                    Review Hotel Booking
                </h1>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Column - Booking Details */}
                    <div className="flex-1 space-y-8">

                        {/* Hotel Info Card */}
                        <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] p-8">
                            {/* Header with hotel name and stars */}
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <h2
                                            style={{
                                                fontFamily: 'Inter',
                                                fontWeight: 600,
                                                fontSize: '23px',
                                                lineHeight: '28px',
                                                letterSpacing: '-0.03em',
                                                color: '#233F50'
                                            }}
                                        >
                                            {bookingData.hotelName}
                                        </h2>
                                        <div className="flex text-yellow-400">
                                            {[...Array(bookingData.rating)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-current" />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-sm text-slate-500">{bookingData.location}</p>
                                </div>
                                <button className="text-[#2196F3] text-sm font-medium hover:underline">Change Hotel</button>
                            </div>

                            {/* Main content area with image and details */}
                            <div className="flex flex-col md:flex-row gap-6">
                                {/* Left: Hotel Image */}
                                <div className="w-full md:w-[250px] h-[250px] flex-shrink-0 rounded-xl overflow-hidden">
                                    <img src={bookingData.image} alt={bookingData.hotelName} className="w-full h-full object-cover" />
                                </div>

                                {/* Right: All Details Stacked Vertically */}
                                <div className="flex-1 space-y-4">
                                    {/* Check-in, Check-out, Guest info - Light grey box */}
                                    <div
                                        className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full"
                                        style={{
                                            maxWidth: '491px',
                                            minHeight: '96px',
                                            borderRadius: '11px',
                                            background: '#EFF3F7',
                                            padding: '16px 20px'
                                        }}
                                    >
                                        <div>
                                            <p className="text-xs font-medium text-slate-600 mb-1">Check-In</p>
                                            <p className="font-bold text-[#1e293b] text-base mb-0.5">{bookingData.checkIn.date}</p>
                                            <p className="text-sm text-slate-600">{bookingData.checkIn.time}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium text-slate-600 mb-1">Check-Out</p>
                                            <p className="font-bold text-[#1e293b] text-base mb-0.5">{bookingData.checkOut.date}</p>
                                            <p className="text-sm text-slate-600">{bookingData.checkOut.time}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium text-slate-600 mb-1">Guest</p>
                                            <p className="font-bold text-[#1e293b] text-base mb-0.5">{bookingData.guests.adults} Adults, {bookingData.guests.children} Child</p>
                                            <p className="text-sm text-slate-600">{bookingData.guests.rooms} Room | {bookingData.guests.duration}</p>
                                        </div>
                                    </div>


                                    {/* Room Type, Inclusions, Cancellation - White Card */}
                                    <div
                                        className="bg-white w-full"
                                        style={{
                                            maxWidth: '491px',
                                            minHeight: '266px',
                                            borderRadius: '11px',
                                            border: '1px solid #DBDBDB'
                                        }}
                                    >
                                        {/* Room Type - Top Section */}
                                        <div className="flex justify-between items-center px-5 py-4 border-b border-[#E5E7EB]">
                                            <p
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontWeight: 600,
                                                    fontSize: '14.5px',
                                                    lineHeight: '100%',
                                                    letterSpacing: '-0.02em',
                                                    color: '#000000'
                                                }}
                                            >
                                                Room Type: <span style={{ fontWeight: 400 }}>{bookingData.roomType}</span>
                                            </p>
                                            <button className="text-[#2196F3] text-sm font-medium hover:underline">Change Room</button>
                                        </div>

                                        {/* Inclusions - Middle Section */}
                                        <div className="px-5 py-4 border-b border-[#E5E7EB]">
                                            <p
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontWeight: 600,
                                                    fontSize: '14px',
                                                    lineHeight: '22px',
                                                    letterSpacing: '-0.03em',
                                                    color: '#000000',
                                                    marginBottom: '8px'
                                                }}
                                            >
                                                Inclusions:
                                            </p>
                                            <ul className="space-y-0">
                                                {bookingData.inclusions.map((item, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="flex items-start gap-2"
                                                        style={{
                                                            fontFamily: 'Inter',
                                                            fontWeight: 400,
                                                            fontSize: '13px',
                                                            lineHeight: '22px',
                                                            letterSpacing: '-0.03em',
                                                            color: '#000000'
                                                        }}
                                                    >
                                                        <span>-</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Cancellation Policy - Bottom Section */}
                                        <div className="px-5 py-4">
                                            <p
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontWeight: 600,
                                                    fontSize: '14px',
                                                    lineHeight: '22px',
                                                    letterSpacing: '-0.03em',
                                                    color: '#000000',
                                                    marginBottom: '8px'
                                                }}
                                            >
                                                Cancellation Policy:
                                            </p>
                                            <p
                                                className="whitespace-pre-line"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontWeight: 400,
                                                    fontSize: '13px',
                                                    lineHeight: '22px',
                                                    letterSpacing: '-0.03em',
                                                    color: '#000000'
                                                }}
                                            >
                                                {bookingData.cancellationPolicy}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Traveller Details */}
                        <div>
                            <h2
                                className="mb-4"
                                style={{
                                    fontFamily: 'Inter',
                                    fontWeight: 600,
                                    fontSize: '30px',
                                    lineHeight: '35px',
                                    letterSpacing: '-0.03em',
                                    textAlign: 'left',
                                    color: '#233F50'
                                }}
                            >
                                Traveller Details
                            </h2>

                            {[1, 2].map((roomNum) => (
                                <div
                                    key={roomNum}
                                    className="bg-white overflow-hidden mb-4 w-full"
                                    style={{
                                        maxWidth: '831.76px',
                                        minHeight: '230.31px',
                                        borderRadius: '16px',
                                        border: '1px solid #DBDBDB'
                                    }}
                                >
                                    <div className="bg-[#F1F5F9] px-6 py-3 border-b border-slate-200">
                                        <h3
                                            style={{
                                                fontFamily: 'Inter',
                                                fontWeight: 600,
                                                fontSize: '20px',
                                                lineHeight: '10px',
                                                letterSpacing: '-0.03em',
                                                textAlign: 'left',
                                                color: '#233F50'
                                            }}
                                        >
                                            Room {roomNum}
                                        </h3>
                                    </div>
                                    <div className="p-6 space-y-6">
                                        {[1, 2, 3].map((guestNum) => (
                                            <div key={guestNum} className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                                                {/* Title Dropdown */}
                                                <div className="w-full md:w-auto">
                                                    <Select>
                                                        <SelectTrigger
                                                            className="w-full md:w-[108.22px]"
                                                            style={{
                                                                height: '32.74px',
                                                                borderRadius: '4px',
                                                                border: '0.5px solid #000000'
                                                            }}
                                                        >
                                                            <SelectValue placeholder="Title" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="mr">Mr</SelectItem>
                                                            <SelectItem value="mrs">Mrs</SelectItem>
                                                            <SelectItem value="ms">Ms</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>

                                                {/* First Name Input */}
                                                <div className="w-full md:w-auto">
                                                    <Input
                                                        placeholder="First Name"
                                                        className="w-full md:w-[207.30px]"
                                                        style={{
                                                            height: '32.74px',
                                                            borderRadius: '4px',
                                                            border: '0.5px solid #000000'
                                                        }}
                                                    />
                                                </div>

                                                {/* Last Name Input */}
                                                <div className="w-full md:w-auto">
                                                    <Input
                                                        placeholder="Last Name"
                                                        className="w-full md:w-[207.30px]"
                                                        style={{
                                                            height: '32.74px',
                                                            borderRadius: '4px',
                                                            border: '0.5px solid #000000'
                                                        }}
                                                    />
                                                </div>

                                                {/* Date of Birth Input */}
                                                <div className="w-full md:w-auto">
                                                    <Input
                                                        placeholder="Date of Birth"
                                                        type="text"
                                                        className="w-full md:w-[207.30px]"
                                                        style={{
                                                            height: '32.74px',
                                                            borderRadius: '4px',
                                                            border: '0.5px solid #000000'
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Contact Details */}
                        <div>
                            <h2
                                className="mb-4"
                                style={{
                                    fontFamily: 'Inter',
                                    fontWeight: 600,
                                    fontSize: '30px',
                                    lineHeight: '35px',
                                    letterSpacing: '-0.03em',
                                    textAlign: 'left',
                                    color: '#233F50'
                                }}
                            >
                                Please enter contact details
                            </h2>
                            <div
                                className="bg-white flex flex-col md:flex-row gap-4 items-start md:items-center px-6 py-6"
                                style={{
                                    maxWidth: '831.76px',
                                    minHeight: '86.38px',
                                    borderRadius: '16px',
                                    border: '1px solid #E2E8F0'
                                }}
                            >
                                {/* Phone Number Input */}
                                <div className="flex items-center w-full md:w-auto">
                                    <div
                                        className="flex items-center justify-between px-3 bg-white"
                                        style={{
                                            border: '1px solid #9CA3AF',
                                            borderRight: 'none',
                                            height: '32.74px',
                                            width: '105px',
                                            borderRadius: '4px 0 0 4px',
                                            color: '#1E293B'
                                        }}
                                    >
                                        <div className="flex items-center gap-2">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg" alt="UAE" className="w-5 h-3.5 object-cover" />
                                            <span className="text-sm font-normal">+971</span>
                                        </div>
                                        <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
                                    </div>
                                    <Input
                                        placeholder="54 403 0000"
                                        className="rounded-l-none border-l-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-slate-300 w-full sm:w-[135px]"
                                        style={{
                                            height: '32.74px',
                                            borderRadius: '0 4px 4px 0',
                                            border: '1px solid #9CA3AF',
                                            borderLeft: '0.5px solid #9CA3AF'
                                        }}
                                    />
                                </div>

                                {/* Email Input */}
                                <div className="w-full md:w-auto">
                                    <Input
                                        placeholder="Email"
                                        className="focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-slate-300 w-full md:w-[286.32px]"
                                        style={{
                                            height: '32.74px',
                                            borderRadius: '4px',
                                            border: '1px solid #9CA3AF'
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Bottom CTA - Centered Button */}
                        <div className="flex justify-center mt-8 px-4">
                            <Button
                                className="rounded-full shadow-lg w-full"
                                onClick={() => navigate('/hotel/checkout')}
                                style={{
                                    maxWidth: '421.14px',
                                    height: '50.84px',
                                    borderRadius: '25.42px',
                                    backgroundColor: '#98D5D4',
                                    fontFamily: 'Inter',
                                    fontWeight: 600,
                                    fontSize: '24px',
                                    lineHeight: '15px',
                                    letterSpacing: '0%',
                                    textAlign: 'center',
                                    color: '#000000'
                                }}
                            >
                                CONTINUE TO BOOKING
                            </Button>
                        </div>
                    </div>

                    {/* Right Column - Payment Details */}
                    <div className="lg:w-[355px] flex-shrink-0 space-y-6">
                        <div
                            className="overflow-hidden sticky top-24 bg-white w-full"
                            style={{
                                maxWidth: '355px',
                                borderRadius: '16px',
                                border: '1px solid #DBDBDB'
                            }}
                        >
                            <div className="px-6 py-3 border-b border-[#DBDBDB] bg-[#EEF4F8]">
                                <h2
                                    style={{
                                        fontFamily: 'Inter',
                                        fontWeight: 600,
                                        fontSize: '30px',
                                        lineHeight: '35px',
                                        letterSpacing: '-2%',
                                        color: '#233F50'
                                    }}
                                >
                                    Payment Details
                                </h2>
                            </div>
                            <div className="px-6 py-4 space-y-2">
                                <div className="flex justify-between items-center">
                                    <span
                                        style={{
                                            fontFamily: 'Inter',
                                            fontWeight: 500,
                                            fontSize: '18px',
                                            lineHeight: '100%',
                                            letterSpacing: '-0.02em',
                                            color: '#000000'
                                        }}
                                    >
                                        {bookingData.pricing.detail}
                                    </span>
                                    <span
                                        style={{
                                            fontFamily: 'Inter',
                                            fontWeight: 500,
                                            fontSize: '18px',
                                            lineHeight: '100%',
                                            letterSpacing: '-0.02em',
                                            color: '#000000'
                                        }}
                                    >
                                        {bookingData.pricing.total} {bookingData.pricing.currency}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center text-sm text-slate-500">
                                    <span>Room 1</span>
                                    <span>{bookingData.pricing.room1} {bookingData.pricing.currency}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm text-slate-500 pb-2">
                                    <span>Room 2</span>
                                    <span>{bookingData.pricing.room2} {bookingData.pricing.currency}</span>
                                </div>

                                <div className="flex justify-between items-center pt-2 border-t border-[#DBDBDB]">
                                    <div>
                                        <span
                                            style={{
                                                display: 'block',
                                                fontFamily: 'Inter',
                                                fontWeight: 600,
                                                fontSize: '24px',
                                                lineHeight: '20px',
                                                letterSpacing: '-2%',
                                                color: '#000000'
                                            }}
                                        >
                                            Grand Total
                                        </span>
                                    </div>
                                    <span
                                        style={{
                                            fontFamily: 'Inter',
                                            fontWeight: 600,
                                            fontSize: '24px',
                                            lineHeight: '20px',
                                            letterSpacing: '-0.02em',
                                            color: '#000000'
                                        }}
                                    >
                                        {bookingData.pricing.total} {bookingData.pricing.currency}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Button outside the card */}
                        <Button
                            className="bg-[#98D5D4] hover:bg-[#83c3c2] shadow-md w-full"
                            onClick={() => navigate('/hotel/checkout')}
                            style={{
                                maxWidth: '354.58px',
                                height: '50.84px',
                                borderRadius: '25.42px',
                                fontFamily: 'Inter',
                                fontWeight: 600,
                                fontSize: '24px',
                                lineHeight: '15px',
                                letterSpacing: '0%',
                                color: '#000000'
                            }}
                        >
                            CONTINUE TO BOOKING
                        </Button>
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
};

export default HotelBooking;
