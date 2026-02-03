
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const PackageBooking = () => {
    // Mock Data matching the reference image
    const bookingData = {
        packageName: "Azerbaijan Packages",
        duration: "3 NIGHTS 4 DAYS",
        date: "Wednesday, Jul 30, 2025",
        rooms: 2,
        guests: { adults: 4, children: 2 },
        totalPrice: 3599,
        currency: "AED"
    };

    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white font-sans overflow-x-hidden">
            <Navigation />



            {/* Mobile View */}
            <main className="lg:hidden container mx-auto px-4 pt-24 pb-8">
                {/* Header with Back Button */}
                <div className="flex items-center gap-2 mb-6">
                    <button onClick={() => navigate(-1)} className="p-1 -ml-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left text-[#1e293b]"><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg>
                    </button>
                    <h1 className="text-[22px] font-bold text-[#233F50] leading-none">Review Package</h1>
                </div>

                <div className="space-y-6">
                    {/* Package Info Card */}
                    <div className="bg-[#EFF3F7] rounded-[16px] p-5 border border-gray-200">
                        <div className="mb-3">
                            <h2 className="text-[20px] font-bold text-[#233F50] mb-2">{bookingData.packageName}</h2>
                            <span className="bg-white border border-gray-300 px-2 py-0.5 text-[10px] font-bold uppercase rounded-[3px] text-black inline-block">
                                {bookingData.duration}
                            </span>
                        </div>
                        <p className="text-[11px] text-gray-800 mb-1 leading-snug tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">
                            {bookingData.date} | <span className="font-bold">{bookingData.rooms} Room</span>, {bookingData.guests.adults} Adults, {bookingData.guests.children} Children
                        </p>
                        <button className="text-[#3B82F6] text-[13px] font-medium">
                            Cancellation Policy
                        </button>
                    </div>

                    {/* Payment Details Card */}
                    <div className="bg-[#EFF3F7] rounded-[16px] overflow-hidden border border-gray-200">
                        <div className="px-5 py-3 border-b border-gray-300">
                            <h3 className="text-[18px] font-bold text-[#233F50]">Payment Details</h3>
                        </div>
                        <div className="bg-white px-5 py-4 flex justify-between items-center">
                            <div>
                                <p className="font-bold text-black text-[15px]">Grand Total</p>
                                <p className="text-[12px] text-gray-600">({bookingData.guests.adults} Adults, {bookingData.guests.children} Children)</p>
                            </div>
                            <p className="font-bold text-[18px] text-black">{bookingData.totalPrice} {bookingData.currency}</p>
                        </div>
                    </div>

                    {/* Traveller Details */}
                    <div>
                        <h2 className="text-[20px] font-bold text-[#233F50] mb-4">Traveller Details</h2>
                        <div className="space-y-4">
                            {[...Array(bookingData.rooms)].map((_, index) => {
                                const roomNum = index + 1;
                                return (
                                    <div key={roomNum} className="bg-[#EFF3F7] rounded-[16px] overflow-hidden border border-gray-200">
                                        <div className="bg-[#EFF3F7] px-5 py-3 border-b border-gray-200">
                                            <h3 className="text-[18px] font-bold text-[#233F50]">Room {roomNum}</h3>
                                        </div>
                                        <div className="bg-white p-5 space-y-4">
                                            {[1, 2, 3].map((guestNum) => (
                                                <div key={guestNum} className={`space-y-3 pb-4 ${guestNum !== 3 ? 'border-b border-gray-100' : ''}`}>
                                                    {/* Row 1: Title & First Name */}
                                                    <div className="flex gap-3">
                                                        <div className="w-[85px] flex-shrink-0">
                                                            <Select>
                                                                <SelectTrigger className="h-[34px] text-[13px] bg-white border border-gray-300 rounded-[4px] px-2">
                                                                    <SelectValue placeholder="Title" />
                                                                </SelectTrigger>
                                                                <SelectContent>
                                                                    <SelectItem value="mr">Mr</SelectItem>
                                                                    <SelectItem value="mrs">Mrs</SelectItem>
                                                                    <SelectItem value="ms">Ms</SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                        </div>
                                                        <div className="flex-1">
                                                            <Input
                                                                placeholder="First Name"
                                                                className="h-[34px] text-[13px] bg-white border border-gray-300 rounded-[4px] placeholder:text-gray-400"
                                                            />
                                                        </div>
                                                    </div>
                                                    {/* Row 2: Last Name & DOB */}
                                                    <div className="flex gap-3">
                                                        <div className="flex-1">
                                                            <Input
                                                                placeholder="Last Name"
                                                                className="h-[34px] text-[13px] bg-white border border-gray-300 rounded-[4px] placeholder:text-gray-400"
                                                            />
                                                        </div>
                                                        <div className="flex-1">
                                                            <Input
                                                                placeholder="Date of Birth"
                                                                type="text"
                                                                className="h-[34px] text-[13px] bg-white border border-gray-300 rounded-[4px] placeholder:text-gray-400"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Contact Details - Mobile */}
                    <div>
                        <h2 className="text-[20px] font-bold text-[#233F50] mb-4">Please enter contact details</h2>
                        <div className="space-y-3">
                            {/* Phone Input */}
                            <div className="flex bg-white border border-gray-300 rounded-[4px] overflow-hidden">
                                <div className="flex items-center gap-1.5 px-3 border-r border-gray-300 bg-white">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Burglar_Emirates.svg" alt="UAE" className="w-5 h-3.5 object-cover" />
                                    <span className="text-[13px] font-medium text-black">+971</span>
                                    <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
                                </div>
                                <input
                                    type="tel"
                                    placeholder="54 403 0000"
                                    className="flex-1 h-[40px] px-3 text-[13px] outline-none text-black placeholder:text-gray-300"
                                />
                            </div>

                            {/* Email Input */}
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full h-[40px] px-3 text-[13px] bg-white border border-gray-300 rounded-[4px] outline-none text-black placeholder:text-gray-300"
                            />
                        </div>
                    </div>

                    {/* Booking Summary Section - Mobile Inline */}
                    <div className="bg-[#1F3D53] p-4 rounded-[12px] mt-2">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-white text-[11px] mb-0.5 opacity-90">
                                    {bookingData.rooms} Room, {bookingData.guests.adults} Adults, {bookingData.guests.children} Children
                                </p>
                                <div className="flex items-center gap-1">
                                    <span className="text-white text-[13px]">Grand Total - </span>
                                    <span className="text-[#64FFDA] text-[15px] font-bold">{bookingData.totalPrice} {bookingData.currency}</span>
                                </div>
                            </div>
                            <Button
                                onClick={() => navigate('/package/checkout')}
                                className="bg-[#98D5D4] hover:bg-[#80E0CE] text-[#1F3D53] font-bold px-6 h-[38px] rounded-full text-[14px]"
                            >
                                Book Now
                            </Button>
                        </div>
                    </div>
                </div>
            </main>

            {/* Desktop View */}
            <main className="hidden lg:block container mx-auto px-4 pt-28 pb-8 max-w-7xl">
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
                    Review Package
                </h1>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Column - Booking Details */}
                    <div className="flex-1 space-y-8">

                        {/* Package Info Card */}
                        <div
                            className="bg-[#EFF3F7] rounded-xl p-8 relative"
                            style={{
                                borderRadius: '16px',
                                border: '1px solid #DBDBDB' // Assuming similar border style
                            }}
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <h2
                                    style={{
                                        fontFamily: 'Inter',
                                        fontWeight: 600,
                                        fontSize: '40px',
                                        lineHeight: '35px',
                                        letterSpacing: '-3%',
                                        color: '#233F50'
                                    }}
                                >
                                    {bookingData.packageName}
                                </h2>
                                <span
                                    className="bg-white border border-slate-200 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontSize: '10px',
                                        color: '#000000'
                                    }}
                                >
                                    {bookingData.duration}
                                </span>
                            </div>

                            <div className="flex justify-between items-end">
                                <p
                                    style={{
                                        width: 'auto', // Removing fixed width to allow full content
                                        fontFamily: 'Inter',
                                        fontWeight: 400,
                                        fontSize: '22.6px',
                                        lineHeight: '100%',
                                        letterSpacing: '-1%',
                                        color: '#000000'
                                    }}
                                >
                                    {bookingData.date} | <span className="font-semibold">{bookingData.rooms} Room</span>, {bookingData.guests.adults} Adults, {bookingData.guests.children} Children
                                </p>

                                <button className="text-[#2196F3] text-sm font-medium hover:underline">
                                    Cancellation Policy
                                </button>
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

                            {[...Array(bookingData.rooms)].map((_, index) => {
                                const roomNum = index + 1;
                                return (
                                    <div
                                        key={roomNum}
                                        className="bg-white overflow-hidden mb-4 w-full"
                                        style={{
                                            maxWidth: '831.76px', // Matched HotelBooking size
                                            minHeight: '230.31px',
                                            borderRadius: '16px',
                                            border: '1px solid #DBDBDB'
                                        }}
                                    >
                                        <div
                                            className="px-6 py-3 border-b border-slate-200"
                                            style={{
                                                backgroundColor: '#F1F5F9' // Matched HotelBooking background
                                            }}
                                        >
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
                                );
                            })}
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
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Burglar_Emirates.svg" alt="UAE" className="w-5 h-3.5 object-cover" />
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
                        <div className="flex justify-center mt-8">
                            <Button
                                className="rounded-full shadow-lg hover:opacity-90 transition-opacity"
                                onClick={() => navigate('/package/checkout')}
                                style={{
                                    width: '100%',
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
                            className="overflow-hidden sticky top-24 bg-[#EFF3F7] w-full"
                            style={{
                                maxWidth: '355px',
                                borderRadius: '16px',
                                border: '1px solid #DBDBDB'
                            }}
                        >
                            <div className="px-6 py-3 border-b border-[#DBDBDB]">
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
                            <div className="px-6 py-6 space-y-4 bg-white">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p
                                            style={{
                                                fontFamily: 'Inter',
                                                fontWeight: 600,
                                                fontSize: '24px',
                                                lineHeight: '20px',
                                                letterSpacing: '-2%',
                                                color: '#000000'
                                            }}
                                        >
                                            Grand Total
                                        </p>
                                        <p
                                            style={{
                                                fontFamily: 'Inter',
                                                fontWeight: 400,
                                                fontSize: '16px',
                                                lineHeight: '20px',
                                                letterSpacing: '-2%',
                                                color: '#000000'
                                            }}
                                        >
                                            ({bookingData.guests.adults} Adults, {bookingData.guests.children} Children)
                                        </p>
                                    </div>
                                    <span
                                        style={{
                                            fontFamily: 'Inter',
                                            fontWeight: 700,
                                            fontSize: '24px',
                                            color: '#000000'
                                        }}
                                    >
                                        {bookingData.totalPrice} {bookingData.currency}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Button outside the card */}
                        <Button
                            className="bg-[#98D5D4] hover:bg-[#83c3c2] shadow-md hover:opacity-90 transition-opacity w-full"
                            onClick={() => navigate('/package/checkout')}
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

export default PackageBooking;
