import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CreditCard, Building2 } from 'lucide-react';

const Checkout = () => {
    const [selectedPayment, setSelectedPayment] = useState('debit');

    // Mock booking data
    const bookingData = {
        hotelName: 'Radisson Red Dubai Silicon Oasis',
        checkIn: { day: '15', month: 'June', year: '2025' },
        checkOut: { day: '18', month: 'June', year: '2025' },
        rooms: 2,
        nights: 3,
        guests: { adults: 4, children: 2 },
        contactEmail: 'Mohamedabdulth58@Gmail.Com',
        contactPhone: '708 413 8865',
        roomPrice: 1350,
        totalPrice: 2700
    };

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <Navigation />

            <div className="max-w-7xl mx-auto px-6 py-8" style={{ paddingTop: '100px' }}>
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Left Column - Payment Options */}
                    <div className="flex-shrink-0">
                        <h1
                            className="mb-6"
                            style={{
                                fontFamily: 'Inter',
                                fontWeight: 600,
                                fontSize: '30px',
                                lineHeight: '35px',
                                letterSpacing: '-0.03em',
                                color: '#233F50'
                            }}
                        >
                            Payment Options
                        </h1>

                        {/* Two Column Layout: Payment Methods | Card Form */}
                        {/* Two Column Layout: Payment Methods | Card Form */}
                        <div
                            className="bg-white flex flex-col md:grid md:grid-cols-[274.2px_1fr] gap-0 w-full"
                            style={{
                                maxWidth: '831px',
                                minHeight: '509px',
                                border: '1px solid #DBDBDB',
                                borderRadius: '16px',
                                overflow: 'hidden'
                            }}
                        >
                            {/* Left Side - Payment Methods */}
                            <div className="bg-[#F5F5F5] border-r border-[#DBDBDB] flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible">
                                {/* Debit Card */}
                                <div
                                    className={`flex items-center justify-center gap-3 px-6 cursor-pointer border-r md:border-r-0 md:border-b border-[#DBDBDB] min-w-[150px] md:min-w-0 ${selectedPayment === 'debit' ? 'bg-white' : 'bg-[#F5F5F5]'
                                        }`}
                                    style={{ height: '65.88px' }}
                                    onClick={() => setSelectedPayment('debit')}
                                >
                                    <CreditCard
                                        style={{ width: '28px', height: '18px' }}
                                        className="text-slate-700"
                                    />
                                    <span
                                        style={{
                                            fontFamily: 'Inter',
                                            fontWeight: 600,
                                            fontSize: '17px',
                                            lineHeight: '18px',
                                            letterSpacing: '-0.03em',
                                            color: '#233F50',
                                            whiteSpace: 'nowrap'
                                        }}
                                    >
                                        Debit Card
                                    </span>
                                </div>

                                {/* Credit Card */}
                                <div
                                    className={`flex items-center justify-center gap-3 px-6 cursor-pointer border-r md:border-r-0 md:border-b border-[#DBDBDB] min-w-[150px] md:min-w-0 ${selectedPayment === 'credit' ? 'bg-white' : 'bg-[#F5F5F5]'
                                        }`}
                                    style={{ height: '65.88px' }}
                                    onClick={() => setSelectedPayment('credit')}
                                >
                                    <CreditCard
                                        style={{ width: '28px', height: '18px' }}
                                        className="text-slate-700"
                                    />
                                    <span
                                        style={{
                                            fontFamily: 'Inter',
                                            fontWeight: 600,
                                            fontSize: '17px',
                                            lineHeight: '18px',
                                            letterSpacing: '-0.03em',
                                            color: '#233F50',
                                            whiteSpace: 'nowrap'
                                        }}
                                    >
                                        Credit Card
                                    </span>
                                </div>

                                {/* Net Banking */}
                                <div
                                    className={`flex items-center justify-center gap-3 px-6 cursor-pointer border-r md:border-r-0 md:border-b border-[#DBDBDB] min-w-[150px] md:min-w-0 ${selectedPayment === 'netbanking' ? 'bg-white' : 'bg-[#F5F5F5]'
                                        }`}
                                    style={{ height: '65.88px' }}
                                    onClick={() => setSelectedPayment('netbanking')}
                                >
                                    <Building2
                                        style={{ width: '28px', height: '18px' }}
                                        className="text-slate-700"
                                    />
                                    <span
                                        style={{
                                            fontFamily: 'Inter',
                                            fontWeight: 600,
                                            fontSize: '17px',
                                            lineHeight: '18px',
                                            letterSpacing: '-0.03em',
                                            color: '#233F50',
                                            whiteSpace: 'nowrap'
                                        }}
                                    >
                                        Net Banking
                                    </span>
                                </div>

                                {/* Tabby */}
                                <div
                                    className={`flex items-center justify-center gap-3 px-6 cursor-pointer border-r md:border-r-0 md:border-b border-[#DBDBDB] min-w-[150px] md:min-w-0 ${selectedPayment === 'tabby' ? 'bg-white' : 'bg-[#F5F5F5]'
                                        }`}
                                    style={{ height: '65.88px' }}
                                    onClick={() => setSelectedPayment('tabby')}
                                >
                                    <img
                                        src="/src/assets/tabby.png"
                                        alt="Tabby"
                                        style={{
                                            width: '107.74px',
                                            height: '24.22px',
                                            objectFit: 'contain'
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Right Side - Card Form */}
                            <div className="p-6">
                                {(selectedPayment === 'debit' || selectedPayment === 'credit') && (
                                    <div className="space-y-4">
                                        {/* Card Number */}
                                        <div>
                                            <label
                                                className="block mb-2"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontWeight: 500,
                                                    fontSize: '18px',
                                                    lineHeight: '18px',
                                                    letterSpacing: '-0.03em',
                                                    color: '#000000'
                                                }}
                                            >
                                                Enter Your Card No.
                                            </label>
                                            <Input
                                                placeholder="Enter Card No"
                                                className="w-full"
                                                style={{
                                                    maxWidth: '489.22px',
                                                    height: '47.78px',
                                                    border: '0.8px solid #000000',
                                                    borderRadius: '7px'
                                                }}
                                            />
                                        </div>

                                        {/* Valid Through and CVV */}
                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <div className="flex-1">
                                                <label
                                                    className="block mb-2"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontWeight: 500,
                                                        fontSize: '18px',
                                                        lineHeight: '18px',
                                                        letterSpacing: '-0.03em',
                                                        color: '#000000'
                                                    }}
                                                >
                                                    Valid Through (MM/YY)
                                                </label>
                                                <Input
                                                    placeholder="MM/YY"
                                                    className="w-full"
                                                    style={{
                                                        maxWidth: '225.23px',
                                                        height: '47.78px',
                                                        border: '0.8px solid #000000',
                                                        borderRadius: '7px'
                                                    }}
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <label
                                                    className="block mb-2"
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontWeight: 500,
                                                        fontSize: '18px',
                                                        lineHeight: '18px',
                                                        letterSpacing: '-0.03em',
                                                        color: '#000000'
                                                    }}
                                                >
                                                    CVV
                                                </label>
                                                <Input
                                                    placeholder="CVV"
                                                    type="password"
                                                    maxLength={3}
                                                    className="w-full"
                                                    style={{
                                                        maxWidth: '181.67px',
                                                        height: '47.78px',
                                                        border: '0.8px solid #000000',
                                                        borderRadius: '7px'
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        {/* Card Holder Name */}
                                        <div>
                                            <label
                                                className="block mb-2"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontWeight: 500,
                                                    fontSize: '18px',
                                                    lineHeight: '18px',
                                                    letterSpacing: '-0.03em',
                                                    color: '#000000'
                                                }}
                                            >
                                                Enter Card Holder Name
                                            </label>
                                            <Input
                                                placeholder="Name on the Card"
                                                className="w-full"
                                                style={{
                                                    maxWidth: '489.22px',
                                                    height: '47.78px',
                                                    border: '0.8px solid #000000',
                                                    borderRadius: '7px'
                                                }}
                                            />
                                        </div>

                                        {/* Grand Fare and Make Payment Button */}
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-6 pt-4 gap-4">
                                            <div>
                                                <p
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontWeight: 400,
                                                        fontSize: '18px',
                                                        lineHeight: '28px',
                                                        letterSpacing: '-2%',
                                                        color: '#233F50' // Using theme color to match price, or could be slate-600
                                                    }}
                                                >
                                                    Grand Fare
                                                </p>
                                                <p
                                                    style={{
                                                        fontFamily: 'Inter',
                                                        fontWeight: 600,
                                                        fontSize: '27px',
                                                        lineHeight: '28px',
                                                        letterSpacing: '-2%',
                                                        color: '#233F50'
                                                    }}
                                                >
                                                    {bookingData.totalPrice} AED
                                                </p>
                                            </div>
                                            <Button
                                                className="rounded-full shadow-none hover:bg-[#8acccc] w-full sm:w-auto"
                                                style={{
                                                    width: '100%',
                                                    maxWidth: '222.77px',
                                                    height: '50.84px',
                                                    borderRadius: '25.42px',
                                                    backgroundColor: '#98D5D4',
                                                    fontFamily: 'Inter',
                                                    fontWeight: 600,
                                                    fontSize: '24px',
                                                    lineHeight: '15px',
                                                    letterSpacing: '0%',
                                                    color: '#233F50',
                                                    padding: 0
                                                }}
                                            >
                                                Make Payment
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Booking Summary */}
                    <div className="flex-shrink-0">
                        <h2
                            className="mb-6"
                            style={{
                                fontFamily: 'Inter',
                                fontWeight: 600,
                                fontSize: '30px',
                                lineHeight: '35px',
                                letterSpacing: '-0.03em',
                                color: '#233F50'
                            }}
                        >
                            Booking Summary
                        </h2>

                        {/* Main Booking Info Box */}
                        {/* Main Booking Info Box */}
                        <div
                            className="bg-white mb-6 w-full"
                            style={{
                                maxWidth: '355px',
                                minHeight: '327px',
                                border: '1px solid #DBDBDB',
                                borderRadius: '16px',
                                overflow: 'hidden'
                            }}
                        >
                            {/* Hotel Name */}
                            <h3
                                className="mb-4 px-6 pt-6"
                                style={{
                                    fontFamily: 'Inter',
                                    fontWeight: 500,
                                    fontSize: '25px',
                                    lineHeight: '32px',
                                    letterSpacing: '-0.03em',
                                    color: '#000000'
                                }}
                            >
                                {bookingData.hotelName}
                            </h3>

                            {/* Check-in and Check-out Box */}
                            <div
                                className="flex items-center mb-4 w-full"
                                style={{
                                    maxWidth: '355px',
                                    height: '71px',
                                    backgroundColor: '#EFF3F7',
                                    padding: '0 16px' // Keep internal padding for content alignment
                                }}
                            >
                                {/* Check-In */}
                                <div className="flex-1">
                                    <p
                                        style={{
                                            fontFamily: 'Inter',
                                            fontWeight: 500,
                                            fontSize: '12px',
                                            lineHeight: '15px',
                                            color: '#818494',
                                            marginBottom: '2px', // Slight spacing
                                            textTransform: 'capitalize'
                                        }}
                                    >
                                        Check-In
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <div
                                            style={{
                                                fontFamily: 'Inter',
                                                fontWeight: 500,
                                                fontSize: '42px',
                                                lineHeight: '35px',
                                                letterSpacing: '-0.03em',
                                                color: '#000000'
                                            }}
                                        >
                                            {bookingData.checkIn.day}
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <span style={{ fontSize: '13px', fontWeight: 600, lineHeight: '14px', color: '#000000' }}>{bookingData.checkIn.month}</span>
                                            <span style={{ fontSize: '13px', fontWeight: 600, lineHeight: '14px', color: '#000000' }}>{bookingData.checkIn.year}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div style={{ width: '1px', height: '40px', backgroundColor: '#000000', opacity: 0.1, margin: '0 16px' }}></div>

                                {/* Check-Out */}
                                <div className="flex-1">
                                    <p
                                        style={{
                                            fontFamily: 'Inter',
                                            fontWeight: 500,
                                            fontSize: '12px',
                                            lineHeight: '15px',
                                            color: '#818494',
                                            marginBottom: '2px',
                                            textTransform: 'capitalize'
                                        }}
                                    >
                                        Check-Out
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <div
                                            style={{
                                                fontFamily: 'Inter',
                                                fontWeight: 500,
                                                fontSize: '42px',
                                                lineHeight: '35px',
                                                letterSpacing: '-0.03em',
                                                color: '#000000'
                                            }}
                                        >
                                            {bookingData.checkOut.day}
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <span style={{ fontSize: '13px', fontWeight: 600, lineHeight: '14px', color: '#000000' }}>{bookingData.checkOut.month}</span>
                                            <span style={{ fontSize: '13px', fontWeight: 600, lineHeight: '14px', color: '#000000' }}>{bookingData.checkOut.year}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Room and Guests Info */}
                            {/* Room and Guests Info */}
                            <p className="text-sm text-slate-600 mb-4 pb-4 border-b border-[#E5E7EB] mx-6">
                                {bookingData.rooms} Room | {bookingData.nights} Nights · {bookingData.guests.adults} Adults, {bookingData.guests.children} Child
                            </p>

                            {/* Contact Details */}
                            <div className="px-6">
                                <p
                                    className="mb-2"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontWeight: 600,
                                        fontSize: '15px',
                                        lineHeight: '18px',
                                        letterSpacing: '-0.03em',
                                        color: '#233F50',
                                        textTransform: 'capitalize'
                                    }}
                                >
                                    Contact Details
                                </p>
                                <p
                                    className="mb-1"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontWeight: 600,
                                        fontSize: '15px',
                                        lineHeight: '18px',
                                        letterSpacing: '-0.03em',
                                        color: '#52525B', // slate-600 equivalent-ish or darker
                                        textTransform: 'capitalize'
                                    }}
                                >
                                    Email: {bookingData.contactEmail}
                                </p>
                                <p
                                    style={{
                                        fontFamily: 'Inter',
                                        fontWeight: 600,
                                        fontSize: '15px',
                                        lineHeight: '18px',
                                        letterSpacing: '-0.03em',
                                        color: '#52525B',
                                        textTransform: 'capitalize'
                                    }}
                                >
                                    Phone: {bookingData.contactPhone}
                                </p>
                            </div>
                        </div>

                        {/* Payment Details Box */}
                        <div
                            className="bg-white w-full"
                            style={{
                                maxWidth: '355px',
                                height: 'auto', // Allow height to fit content
                                border: '1px solid #DBDBDB',
                                borderRadius: '16px',
                                overflow: 'hidden'
                            }}
                        >
                            {/* Title Section with Background */}
                            <div className="px-6 pt-6 pb-4 bg-[#EFF3F7] border-b border-[#DBDBDB]">
                                <p
                                    style={{
                                        fontFamily: 'Inter',
                                        fontWeight: 600,
                                        fontSize: '30px',
                                        lineHeight: '35px',
                                        letterSpacing: '-0.02em',
                                        color: '#233F50'
                                    }}
                                >
                                    Payment Details
                                </p>
                            </div>

                            <div className="p-6 pt-4">
                                <div className="space-y-2 mb-4">
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
                                            {bookingData.rooms} Rooms X {bookingData.nights} Nights
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
                                            {bookingData.totalPrice} AED
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span
                                            style={{
                                                fontFamily: 'Inter',
                                                fontWeight: 500,
                                                fontSize: '12px',
                                                lineHeight: '20px',
                                                letterSpacing: '-0.02em',
                                                color: '#818494'
                                            }}
                                        >
                                            Room 1
                                        </span>
                                        <span
                                            style={{
                                                fontFamily: 'Inter',
                                                fontWeight: 500,
                                                fontSize: '12px',
                                                lineHeight: '20px',
                                                letterSpacing: '-0.02em',
                                                color: '#818494'
                                            }}
                                        >
                                            {bookingData.roomPrice} AED
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span
                                            style={{
                                                fontFamily: 'Inter',
                                                fontWeight: 500,
                                                fontSize: '12px',
                                                lineHeight: '20px',
                                                letterSpacing: '-0.02em',
                                                color: '#818494'
                                            }}
                                        >
                                            Room 2
                                        </span>
                                        <span
                                            style={{
                                                fontFamily: 'Inter',
                                                fontWeight: 500,
                                                fontSize: '12px',
                                                lineHeight: '20px',
                                                letterSpacing: '-0.02em',
                                                color: '#818494'
                                            }}
                                        >
                                            {bookingData.roomPrice} AED
                                        </span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center pt-3 border-t border-[#E5E7EB]">
                                    <span
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
                                    </span>
                                    <span
                                        style={{
                                            fontFamily: 'Inter',
                                            fontWeight: 600,
                                            fontSize: '24px',
                                            lineHeight: '20px',
                                            letterSpacing: '-2%',
                                            color: '#000000'
                                        }}
                                    >
                                        {bookingData.totalPrice} AED
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Checkout;
