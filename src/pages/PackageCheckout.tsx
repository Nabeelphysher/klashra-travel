import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CreditCard, Building2, ChevronLeft, ChevronRight, Landmark } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PackageCheckout = () => {
    const navigate = useNavigate();
    const [selectedPayment, setSelectedPayment] = useState('debit');
    const [showMobilePaymentForm, setShowMobilePaymentForm] = useState(false);

    // Mock booking data matching the package flow
    const bookingData = {
        packageName: 'Azerbaijan Packages',
        duration: '3 Nights 4 Days',
        guests: { adults: 4, children: 2 },
        contactEmail: 'MohamedshabeerRb56@Gmail.Com',
        contactPhone: '799 413 9865',
        totalPrice: 3599
    };

    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <Navigation />

            {/* Mobile View */}
            <div className="lg:hidden pt-24 pb-8 px-4 bg-[#F8FAFC]">
                {!showMobilePaymentForm ? (
                    // Payment selection view
                    <>
                        <div className="flex items-center gap-2 mb-6">
                            <button onClick={() => navigate(-1)} className="p-1 -ml-1">
                                <ChevronLeft className="w-6 h-6 text-[#1e293b]" />
                            </button>
                            <h1 className="text-[22px] font-bold text-[#233F50] leading-none">Booking Summary</h1>
                        </div>

                        <div className="space-y-6">
                            {/* Booking Summary Card */}
                            <div className="bg-white rounded-[16px] overflow-hidden border border-gray-200 shadow-sm">
                                <div className="bg-[#EFF3F7] px-5 py-3 border-b border-gray-200">
                                    <h2 className="text-[18px] font-bold text-[#1F2937]">{bookingData.packageName}</h2>
                                </div>
                                <div className="p-5 space-y-4">
                                    <div>
                                        <p className="text-[13px] text-gray-400 mb-1">Duration</p>
                                        <p className="text-[16px] font-bold text-[#1F2937]">{bookingData.duration}</p>
                                    </div>
                                    <div className="border-t border-gray-100 my-2"></div>
                                    <div>
                                        <p className="text-[13px] text-gray-400 mb-1">Contact Details</p>
                                        <div className="space-y-0.5">
                                            <p className="text-[13px] text-gray-400">Email: <span className="font-bold text-[#1F2937]">{bookingData.contactEmail}</span></p>
                                            <p className="text-[13px] text-gray-400">Phone: <span className="font-bold text-[#1F2937]">{bookingData.contactPhone}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Details Card */}
                            <div className="bg-white rounded-[16px] overflow-hidden border border-gray-200 shadow-sm">
                                <div className="bg-[#EFF3F7] px-5 py-3 border-b border-gray-200">
                                    <h2 className="text-[18px] font-bold text-[#233F50]">Payment Details</h2>
                                </div>
                                <div className="p-5 flex justify-between items-center">
                                    <div>
                                        <p className="font-bold text-[#1F2937] text-[16px]">Grand Total</p>
                                        <p className="text-[11px] text-[#1F2937] font-medium">({bookingData.guests.adults} Adults, {bookingData.guests.children} Children)</p>
                                    </div>
                                    <p className="font-bold text-[18px] text-[#1F2937]">{bookingData.totalPrice} AED</p>
                                </div>
                            </div>

                            {/* Payment Options */}
                            <div>
                                <h2 className="text-[18px] font-bold text-[#233F50] mb-4">Payment Options</h2>
                                <div className="space-y-3">
                                    <div
                                        onClick={() => { setSelectedPayment('debit'); setShowMobilePaymentForm(true); }}
                                        className="bg-[#EFF3F7] rounded-[8px] p-4 flex items-center justify-between border border-gray-200 cursor-pointer"
                                    >
                                        <div className="flex items-center gap-3">
                                            <CreditCard className="w-6 h-6 text-[#334155]" />
                                            <span className="text-[15px] font-bold text-[#1F2937]">Debit Card</span>
                                        </div>
                                        <ChevronRight className="w-5 h-5 text-gray-400" />
                                    </div>

                                    <div
                                        onClick={() => { setSelectedPayment('credit'); setShowMobilePaymentForm(true); }}
                                        className="bg-white rounded-[8px] p-4 flex items-center justify-between border border-gray-200 cursor-pointer"
                                    >
                                        <div className="flex items-center gap-3">
                                            <CreditCard className="w-6 h-6 text-[#334155]" />
                                            <span className="text-[15px] font-bold text-[#1F2937]">Credit Card</span>
                                        </div>
                                        <ChevronRight className="w-5 h-5 text-gray-400" />
                                    </div>

                                    <div
                                        onClick={() => { setSelectedPayment('netbanking'); setShowMobilePaymentForm(true); }}
                                        className="bg-white rounded-[8px] p-4 flex items-center justify-between border border-gray-200 cursor-pointer"
                                    >
                                        <div className="flex items-center gap-3">
                                            <Landmark className="w-6 h-6 text-[#334155]" />
                                            <span className="text-[15px] font-bold text-[#1F2937]">Net Banking</span>
                                        </div>
                                        <ChevronRight className="w-5 h-5 text-gray-400" />
                                    </div>

                                    <div
                                        onClick={() => { setSelectedPayment('tabby'); setShowMobilePaymentForm(true); }}
                                        className="bg-white rounded-[8px] p-4 flex items-center justify-between border border-gray-200 cursor-pointer"
                                    >
                                        <div className="flex items-center gap-3">
                                            <img src="/src/assets/tabby.png" alt="tabby" className="h-5 object-contain" />
                                            <span className="sr-only">Tabby</span>
                                        </div>
                                        <ChevronRight className="w-5 h-5 text-gray-400" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    // Payment details form view
                    <div className="bg-white min-h-[calc(100vh-100px)]">
                        <div className="flex items-center gap-2 mb-6">
                            <button onClick={() => setShowMobilePaymentForm(false)} className="p-1 -ml-1">
                                <ChevronLeft className="w-6 h-6 text-[#1e293b]" />
                            </button>
                            <h1 className="text-[22px] font-bold text-[#233F50] leading-none">
                                {selectedPayment === 'debit' ? 'Debit Card' :
                                    selectedPayment === 'credit' ? 'Credit Card' :
                                        selectedPayment === 'netbanking' ? 'Net Banking' : 'Tabby'}
                            </h1>
                        </div>

                        <div className="space-y-5">
                            <div>
                                <label className="block text-[15px] font-medium text-[#1F2937] mb-2">Enter Your Card No.</label>
                                <Input placeholder="Enter Card No" className="h-[48px] border-[#9CA3AF] rounded-[6px] text-[15px]" />
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <label className="block text-[15px] font-medium text-[#1F2937] mb-2">Valid Through (MM/YY)</label>
                                    <Input placeholder="MM/YY" className="h-[48px] border-[#9CA3AF] rounded-[6px] text-[15px]" />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-[15px] font-medium text-[#1F2937] mb-2">CVV</label>
                                    <Input placeholder="CVV" className="h-[48px] border-[#9CA3AF] rounded-[6px] text-[15px]" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[15px] font-medium text-[#1F2937] mb-2">Enter Card Holder Name</label>
                                <Input placeholder="Name on the Card" className="h-[48px] border-[#9CA3AF] rounded-[6px] text-[15px]" />
                            </div>

                            <div className="pt-4 mt-6">
                                <div className="flex items-center justify-between mb-2">
                                    <div>
                                        <p className="text-[14px] text-[#233F50] font-medium">Grand Fare</p>
                                        <p className="text-[24px] font-bold text-[#233F50] leading-none">{bookingData.totalPrice} AED</p>
                                    </div>
                                    <Button
                                        className="bg-[#98D5D4] hover:bg-[#80E0CE] text-[#1F3D53] font-bold px-6 h-[40px] rounded-full text-[14px]"
                                        onClick={() => navigate('/booking/success')}
                                    >
                                        Make Payment
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Desktop View */}
            <div className="hidden lg:block max-w-7xl mx-auto px-6 py-8" style={{ paddingTop: '100px' }}>
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
                                {/* Debit Card Tab */}
                                <div
                                    className={`flex items-center justify-center gap-3 px-6 cursor-pointer border-b md:border-b border-[#DBDBDB] min-w-[150px] md:min-w-0 ${selectedPayment === 'debit' ? 'bg-white' : 'bg-[#F5F5F5]'}`}
                                    style={{ height: '65.88px' }}
                                    onClick={() => setSelectedPayment('debit')}
                                >
                                    <CreditCard style={{ width: '28px', height: '18px' }} className="text-slate-700" />
                                    <span style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '17px', color: '#233F50', whiteSpace: 'nowrap' }}>Debit Card</span>
                                </div>

                                {/* Credit Card Tab */}
                                <div
                                    className={`flex items-center justify-center gap-3 px-6 cursor-pointer border-b md:border-b border-[#DBDBDB] min-w-[150px] md:min-w-0 ${selectedPayment === 'credit' ? 'bg-white' : 'bg-[#F5F5F5]'}`}
                                    style={{ height: '65.88px' }}
                                    onClick={() => setSelectedPayment('credit')}
                                >
                                    <CreditCard style={{ width: '28px', height: '18px' }} className="text-slate-700" />
                                    <span style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '17px', color: '#233F50', whiteSpace: 'nowrap' }}>Credit Card</span>
                                </div>

                                {/* Net Banking Tab */}
                                <div
                                    className={`flex items-center justify-center gap-3 px-6 cursor-pointer border-b md:border-b border-[#DBDBDB] min-w-[150px] md:min-w-0 ${selectedPayment === 'netbanking' ? 'bg-white' : 'bg-[#F5F5F5]'}`}
                                    style={{ height: '65.88px' }}
                                    onClick={() => setSelectedPayment('netbanking')}
                                >
                                    <Building2 style={{ width: '28px', height: '18px' }} className="text-slate-700" />
                                    <span style={{ fontFamily: 'Inter', fontWeight: 600, fontSize: '17px', color: '#233F50', whiteSpace: 'nowrap' }}>Net Banking</span>
                                </div>

                                {/* Tabby */}
                                <div
                                    className={`flex items-center justify-center gap-3 px-6 cursor-pointer border-b md:border-b border-[#DBDBDB] min-w-[150px] md:min-w-0 ${selectedPayment === 'tabby' ? 'bg-white' : 'bg-[#F5F5F5]'}`}
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

                            {/* Right Side - Form */}
                            <div className="p-6">
                                <div className="space-y-4">
                                    {/* Card Number */}
                                    <div>
                                        <label
                                            className="block mb-2 font-medium"
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
                                            style={{ maxWidth: '489.22px', height: '47.78px', border: '0.8px solid #000000', borderRadius: '7px' }}
                                        />
                                    </div>

                                    {/* Valid Through and CVV */}
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <div className="flex-1">
                                            <label
                                                className="block mb-2 font-medium"
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
                                                style={{ maxWidth: '225.23px', height: '47.78px', border: '0.8px solid #000000', borderRadius: '7px' }}
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <label
                                                className="block mb-2 font-medium"
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
                                                className="w-full"
                                                style={{ maxWidth: '181.67px', height: '47.78px', border: '0.8px solid #000000', borderRadius: '7px' }}
                                            />
                                        </div>
                                    </div>

                                    {/* Card Holder Name */}
                                    <div>
                                        <label
                                            className="block mb-2 font-medium"
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
                                            style={{ maxWidth: '489.22px', height: '47.78px', border: '0.8px solid #000000', borderRadius: '7px' }}
                                        />
                                    </div>

                                    {/* Footer with Grand Fare and Button */}
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-6 pt-4 gap-4">
                                        <div>
                                            <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '18px', lineHeight: '28px', color: '#233F50', opacity: 1, letterSpacing: '-2%' }}>Grand Fare</p>
                                            <p style={{ fontFamily: 'Inter', fontSize: '27px', fontWeight: 600, lineHeight: '28px', color: '#233F50', letterSpacing: '-2%' }}>{bookingData.totalPrice} AED</p>
                                        </div>
                                        <Button
                                            className="rounded-full shadow-none hover:bg-opacity-90 w-full sm:w-auto"
                                            style={{
                                                width: '100%',
                                                maxWidth: '222.77px',
                                                height: '50.84px',
                                                borderRadius: '25.42px',
                                                backgroundColor: '#98D5D4',
                                                fontFamily: 'Inter',
                                                fontWeight: 600,
                                                fontSize: '24px',
                                                color: '#233F50'
                                            }}
                                            onClick={() => navigate('/booking/success')}
                                        >
                                            Make Payment
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Summaries */}
                    <div className="flex-shrink-0 space-y-8">
                        {/* Booking Summary */}
                        <div>
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
                            <div
                                className="bg-white overflow-hidden mb-8 w-full"
                                style={{
                                    maxWidth: '355px',
                                    height: '228.33px',
                                    border: '1px solid #DBDBDB',
                                    borderRadius: '16px'
                                }}
                            >
                                <div
                                    className="flex items-center px-6 border-b border-[#DBDBDB] bg-[#EFF3F7]"
                                    style={{ height: '48px' }}
                                >
                                    <h3 style={{ fontSize: '24px', fontWeight: 600, color: '#000000' }}>{bookingData.packageName}</h3>
                                </div>

                                <div className="px-5 py-3 border-b border-[#DBDBDB]">
                                    <p style={{ fontSize: '13px', color: '#818494', fontWeight: 400, marginBottom: '2px' }}>Duration</p>
                                    <p style={{ fontSize: '16px', fontWeight: 600, color: '#000000' }}>{bookingData.duration}</p>
                                </div>

                                <div className="p-5">
                                    <p style={{ fontSize: '14px', color: '#818494', marginBottom: '4px', fontWeight: 500 }}>Contact Details</p>
                                    <p style={{ fontSize: '14px', color: '#818494' }}>Email: <span style={{ fontWeight: 600, color: '#000000' }}>{bookingData.contactEmail}</span></p>
                                    <p style={{ fontSize: '14px', color: '#818494' }}>Phone: <span style={{ fontWeight: 600, color: '#000000' }}>{bookingData.contactPhone}</span></p>
                                </div>
                            </div>
                        </div>

                        {/* Payment Details */}
                        <div>
                            <div
                                className="bg-white overflow-hidden w-full"
                                style={{
                                    maxWidth: '354.58px',
                                    border: '1px solid #DBDBDB',
                                    borderRadius: '16px'
                                }}
                            >
                                <div
                                    className="bg-[#EFF3F7] border-b border-[#DBDBDB] flex items-center px-6 w-full"
                                    style={{
                                        height: '62.83px'
                                    }}
                                >
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
                                <div className="p-6 flex justify-between items-center">
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
                                        <p style={{ fontSize: '16px', color: '#000000' }}>({bookingData.guests.adults} Adults, {bookingData.guests.children} Children)</p>
                                    </div>
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
                                        {bookingData.totalPrice} AED
                                    </p>
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

export default PackageCheckout;
