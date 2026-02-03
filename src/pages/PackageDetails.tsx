import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2, Calendar, Users, Download, Check, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import azerbaijanImg from "@/assets/azerbaijan.png"; // Re-using existing asset for now

const PackageDetails = () => {
    const navigate = useNavigate();

    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        azerbaijanImg,
        azerbaijanImg,
        azerbaijanImg,
        azerbaijanImg,
        azerbaijanImg,
        azerbaijanImg,
        azerbaijanImg,
        azerbaijanImg,
    ];

    const openGallery = (index: number) => {
        setCurrentImageIndex(index);
        setIsGalleryOpen(true);
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="min-h-screen bg-white overflow-x-hidden relative">
            <Navigation />

            {/* Mobile View Layout */}
            <div className="lg:hidden pb-20 pt-[100px] bg-white">
                {/* Mobile Header Actions */}
                <div className="flex justify-between items-center px-5 py-2 mb-2">
                    <button onClick={() => navigate(-1)} className="p-1 -ml-2 text-[#1e293b]">
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                    <Button className="bg-[#233F50] hover:bg-[#1a2f3c] text-white rounded-full px-5 h-[34px] text-xs font-medium flex items-center gap-2">
                        <Share2 className="w-3.5 h-3.5" />
                        Search
                    </Button>
                </div>

                <div className="px-5 mb-5">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-4">
                        <h1 className="text-[22px] font-bold text-[#233F50] leading-tight">Azerbaijan Packages</h1>
                        <span className="bg-[#EFF2F5] text-[#233F50] text-[10px] font-bold px-2 py-1 rounded-[4px] uppercase tracking-wide">
                            3 NIGHTS 4 DAYS
                        </span>
                    </div>

                    {/* Mobile Image */}
                    <div className="relative w-full aspect-[4/3] rounded-[18px] overflow-hidden mb-6 shadow-sm group">
                        <img
                            src={images[currentImageIndex]}
                            alt="Azerbaijan"
                            className="w-full h-full object-cover cursor-pointer"
                            onClick={() => openGallery(currentImageIndex)}
                        />
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                prevImage();
                            }}
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/60 backdrop-blur-[2px] rounded-full flex items-center justify-center text-[#233F50] shadow-sm z-10 active:scale-95 transition-transform"
                        >
                            <ArrowLeft className="w-4 h-4" />
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                nextImage();
                            }}
                            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/60 backdrop-blur-[2px] rounded-full flex items-center justify-center text-[#233F50] shadow-sm z-10 active:scale-95 transition-transform"
                        >
                            <div className="rotate-180"><ArrowLeft className="w-4 h-4" /></div>
                        </button>

                        <div
                            className="absolute bottom-3 right-3 bg-[#1e293b]/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-md text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                            onClick={() => openGallery(0)}
                        >
                            <div className="w-3 h-3 border border-white rounded-[1px] flex items-center justify-center">
                                <div className="w-1.5 h-1.5 bg-white rounded-[0.5px]" />
                            </div>
                            12
                        </div>
                    </div>

                    {/* Price and Booking */}
                    <div className="mb-8">
                        <div className="flex items-baseline gap-1.5 mb-5">
                            <span className="text-[22px] font-bold text-black tracking-tight">From AED 1800</span>
                            <span className="text-[15px] text-gray-500 font-medium">per person</span>
                        </div>

                        <h3 className="font-bold text-[17px] text-black mb-4">Select Date and Persons</h3>

                        <div className="space-y-3 mb-5">
                            <div className="relative group">
                                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-700" />
                                <input
                                    type="text"
                                    readOnly
                                    value="Wednesday, Jul 30, 2025"
                                    className="w-full h-[50px] pl-12 pr-4 border border-gray-300 rounded-[10px] text-[15px] font-medium text-black bg-white focus:outline-none focus:border-[#98D5D4] transition-colors"
                                />
                            </div>
                            <div className="relative group">
                                <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-700" />
                                <input
                                    type="text"
                                    readOnly
                                    value="4 Adults, 2 Children"
                                    className="w-full h-[50px] pl-12 pr-4 border border-gray-300 rounded-[10px] text-[15px] font-medium text-black bg-white focus:outline-none focus:border-[#98D5D4] transition-colors"
                                />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <Button className="w-full h-[50px] bg-[#98D5D4] hover:bg-[#85d1cf] text-[#0f172a] font-bold text-[16px] rounded-[10px] shadow-sm transition-all active:scale-[0.99] border-none">
                                Update Search
                            </Button>

                            <Button
                                className="w-full h-[50px] bg-[#233F50] hover:bg-[#1a2f3c] text-white font-bold text-[16px] rounded-[10px] shadow-sm transition-all active:scale-[0.99]"
                                onClick={() => navigate('/package/booking')}
                            >
                                Book Now
                            </Button>

                            <div className="flex gap-3">
                                <Button
                                    variant="outline"
                                    className="flex-[1.8] h-[37px] bg-white hover:bg-slate-50 text-[#0f172a] font-bold text-[13px] rounded-[10px] border border-gray-300 shadow-sm transition-all active:scale-[0.99] px-2"
                                >
                                    <Download className="w-3.5 h-3.5 mr-1.5" />
                                    Download PDF Brochure
                                </Button>
                                <Button
                                    variant="outline"
                                    className="flex-1 h-[37px] bg-white hover:bg-slate-50 text-[#0f172a] font-bold text-[13px] rounded-[10px] border border-gray-300 shadow-sm transition-all active:scale-[0.99] px-2"
                                >
                                    Enquiry Now
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gray-100 mb-8" />

                    {/* Content Blocks */}
                    <div className="space-y-6">
                        {/* Overview */}
                        <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                            <div className="bg-[#98D5D4] px-5 py-3.5 font-bold text-[#0f172a] text-[17px]">Overview</div>
                            <div className="p-5 text-[15px] text-gray-600 leading-7 text-justify font-normal">
                                Azerbaijan has different regions each having their own attractions and specialties. Baku is the most famous tourist attractions. Azerbaijan comes in the category of nature's diversity and has lot of outdoor activities to explore.
                            </div>
                        </div>

                        {/* Itinerary */}
                        <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                            <div className="bg-[#98D5D4] px-5 py-3.5 font-bold text-[#0f172a] text-[17px]">Itinerary</div>
                            <div className="p-5 space-y-6">
                                {/* Day 1 */}
                                <div>
                                    <h4 className="font-bold text-[#0f172a] text-lg mb-1">Day 1</h4>
                                    <p className="font-semibold text-[15px] text-gray-800 mb-2">Arrival Airport Transfers + Check In Into Hotel</p>
                                    <ul className="text-[15px] list-disc pl-5 space-y-1.5 text-gray-600 marker:text-[#233F50]">
                                        <li>BAKU CITY TOUR</li>
                                        <li>Day will start with Highland Park to catch the view on the top of the BAKU City</li>
                                        <li>Second point is Little venice.</li>
                                        <li>Explore nearby Deniz Mall or Carpet Museum</li>
                                        <li>Next nearest stop is Old city (inner city)</li>
                                        <li>Main points : Maiden Tower , Palace of the Shirvanshahs</li>
                                        <li>Last stop will be Nizami street</li>
                                    </ul>
                                    <p className="text-xs text-slate-500 mt-2 italic">Overnight Stay At Baku</p>
                                </div>

                                {/* Day 2 */}
                                <div>
                                    <h4 className="font-bold text-[#0f172a] text-lg mb-1">Day 2</h4>
                                    <p className="font-semibold text-[15px] text-gray-800 mb-2">Shahdag Tour</p>
                                    <p className="text-[15px] text-gray-700 mb-2 text-justify">
                                        Discover the captivating beauty of Shahdag, the resort complex which offers un paralleled opportunities for skiing...
                                    </p>
                                    <p className="font-semibold text-sm mb-1">Activities To Do</p>
                                    <ul className="text-[15px] list-disc pl-5 space-y-1.5 text-gray-600 marker:text-[#233F50]">
                                        <li>Shahdag Coaster</li>
                                        <li>Paragliding</li>
                                        <li>Zipline</li>
                                        <li>Snow Boarding</li>
                                        <li>Skiing</li>
                                        <li>Sledging</li>
                                        <li>Quad/Buggy Tours.</li>
                                    </ul>
                                    <p className="text-xs text-slate-500 mt-2 italic">Overnight Stay At Baku</p>
                                </div>

                                {/* Day 3 */}
                                <div>
                                    <h4 className="font-bold text-[#0f172a] text-lg mb-1">Day 3</h4>
                                    <p className="font-semibold text-[15px] text-gray-800 mb-2">Absheron Tour</p>
                                    <ul className="text-[15px] list-disc pl-5 space-y-1.5 text-gray-600 marker:text-[#233F50]">
                                        <li>Start your day with Fire Temple</li>
                                        <li>Visit to Fire mountain</li>
                                        <li>Enjoy magnificent building by Zaha Hadid Haydar Aliyev Center</li>
                                        <li>As last point of stop you may have Green Bazaar or Baku Zoo</li>
                                    </ul>
                                    <p className="text-xs text-slate-500 mt-2 italic">Overnight Stay At Baku</p>
                                </div>

                                {/* Day 4 */}
                                <div>
                                    <h4 className="font-bold text-[#0f172a] text-lg mb-1">Day 4</h4>
                                    <p className="font-semibold text-[15px] text-gray-800 mb-2">Check Out + Departure Airport Transfers</p>
                                </div>
                            </div>
                        </div>

                        {/* Inclusions */}
                        <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                            <div className="bg-[#98D5D4] px-5 py-3.5 font-bold text-[#0f172a] text-[17px]">Inclusions</div>
                            <div className="p-5 bg-white">
                                <ul className="space-y-3">
                                    {[
                                        "2 way flight from Abu Dhabi",
                                        "10 kg hand baggage each - Normal Backpack",
                                        "4 night accommodation with breakfast",
                                        "Airport transfers",
                                        "Sightseeing as per the itinerary",
                                        "English speaking guide",
                                        "E visa"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-[15px] text-gray-700">
                                            <div className="mt-1 min-w-[16px]"><Check className="w-4 h-4 text-[#98D5D4]" /></div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Exclusions */}
                        <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                            <div className="bg-[#98D5D4] px-5 py-3.5 font-bold text-[#0f172a] text-[17px]">Exclusions</div>
                            <div className="p-5 bg-white">
                                <ul className="space-y-3">
                                    {[
                                        "Lunch and dinner",
                                        "Entrance/activity expenses",
                                        "Any personal expenses",
                                        "On arrival visa expense - passport and uae visa and emirates id must have",
                                        "6 month remaining validity from the date of return."
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-[15px] text-gray-700">
                                            <div className="mt-1 min-w-[16px]"><X className="w-4 h-4 text-red-500" /></div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* General Guidelines */}
                        <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                            <div className="bg-[#98D5D4] px-5 py-3.5 font-bold text-[#0f172a] text-[17px]">General Guidelines</div>
                            <div className="p-5 bg-white">
                                <ul className="space-y-3">
                                    {[
                                        "Each family should carry usd 500 usd as your show money/expense money.",
                                        "Single passengers should carry 250 usd as minimum expense.",
                                        "Please carry appropriate Clothing.",
                                        "Please carry emirates id, passport",
                                        "Pass port validity – 6 months from the date of return.",
                                        "Emirates ID validity - 6 month from the date of return minimum",
                                        "Please ensure to carry a multi pin adapter."
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-[15px] text-gray-700">
                                            <div className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-[#98D5D4]" />
                                            <span className="leading-snug">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Terms And Condition */}
                        <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                            <div className="bg-[#98D5D4] px-5 py-3.5 font-bold text-[#0f172a] text-[17px]">Terms And Condition</div>
                            <div className="p-5 bg-white">
                                <ul className="space-y-3">
                                    {[
                                        "This is a group travel. Personal choices of itineraries, pickup timings...",
                                        "Any changes in the Flight timings from airlines, will subject to change...",
                                        "We hold full authority - to re arrange or alter Itinerary...",
                                        "Alcohol consumption while on tour is strictly prohibited.",
                                        "All nationalities with valid UAE residence visa is eligible...",
                                        "All activities and Attraction is subject to availability..."
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-[15px] text-gray-700">
                                            <div className="mt-1.5 min-w-[6px] h-[6px] rounded-full bg-[#98D5D4]" />
                                            <span className="leading-snug truncate line-clamp-3">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Force Majeure */}
                        <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                            <div className="bg-[#98D5D4] px-5 py-3.5 font-bold text-[#0f172a] text-[17px]">Force Majeure</div>
                            <div className="p-5 text-[15px] text-grey-700 leading-7 text-justify font-normal bg-white">
                                we shall not be liable to you for any loss, additional costs or expenses connected with our inability to fulfil our obligations by reason of any force majeure event, including but not limited to fire, earthquake, flood, bad weather, epidemic, explosion, strikes, riot, act of terrorism, civil disturbance, war, act of God or any failure or delay of any transportation, computer or system failure or any other event beyond our control.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop View (Hidden on Mobile) */}
            <div className="hidden lg:block max-w-[1400px] mx-auto px-8 md:px-20 pt-28 pb-20">
                {/* Header Actions */}
                <div className="flex justify-between items-center mb-6">
                    <button onClick={() => navigate(-1)} className="p-2 hover:bg-slate-100 rounded-full">
                        <ArrowLeft className="w-6 h-6 text-slate-700" />
                    </button>
                    <Button className="bg-[#233F50] text-white rounded-full px-6 flex items-center gap-2">
                        <Share2 className="w-4 h-4" />
                        Share
                    </Button>
                </div>

                {/* Title Section */}
                {/* Title Section */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                    <h1
                        style={{
                            fontFamily: 'Inter',
                            fontWeight: 600,
                            fontSize: '40px',
                            lineHeight: '35px',
                            letterSpacing: '-0.03em',
                            textAlign: 'left',
                            color: '#233F50',
                        }}
                    >
                        Azerbaijan Packages
                    </h1>
                    <span
                        className="bg-[#EFF2F5] flex items-center justify-center px-4"
                        style={{
                            minWidth: '115.03px',
                            height: '21.54px',
                            fontFamily: 'Inter',
                            fontWeight: 600,
                            fontSize: '14px',
                            lineHeight: '18px',
                            letterSpacing: '-0.03em',
                            textAlign: 'center',
                            textTransform: 'uppercase',
                            color: '#000000'
                        }}
                    >
                        3 Nights 4 Days
                    </span>
                </div>

                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Left Column: Images & Content */}
                    <div className="space-y-8">
                        {/* Image Gallery */}
                        <div className="flex flex-col md:flex-row gap-4 h-full md:h-[342px] w-full" style={{ maxWidth: '831.76px' }}>
                            {/* Left Image */}
                            <div
                                className="relative rounded-xl overflow-hidden cursor-pointer group w-full md:w-[544.46px] aspect-[544/341] md:aspect-auto"
                                style={{ maxHeight: '341.81px' }}
                                onClick={() => openGallery(0)}
                            >
                                <img
                                    src={azerbaijanImg}
                                    className="w-full h-full object-cover transition-all duration-300 ease-in group-hover:scale-105"
                                    alt="Azerbaijan Main"
                                />
                            </div>

                            {/* Right Column */}
                            <div className="flex flex-row md:flex-col justify-between h-full gap-4 md:gap-0">
                                <div
                                    className="overflow-hidden rounded-xl cursor-pointer group flex-1 md:flex-none"
                                    style={{ width: '100%', maxWidth: '271.30px', height: '167.44px' }}
                                    onClick={() => openGallery(1)}
                                >
                                    <img
                                        src={azerbaijanImg}
                                        className="w-full h-full object-cover transition-all duration-300 ease-in group-hover:scale-105"
                                        alt="Detail 1"
                                    />
                                </div>
                                <div
                                    className="relative overflow-hidden rounded-xl cursor-pointer group flex-1 md:flex-none"
                                    style={{ width: '100%', maxWidth: '271.30px', height: '167.44px' }}
                                    onClick={() => openGallery(2)}
                                >
                                    <img
                                        src={azerbaijanImg}
                                        className="w-full h-full object-cover transition-all duration-300 ease-in group-hover:scale-105"
                                        alt="Detail 2"
                                    />
                                    <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-2.5 py-1.5 rounded-md flex items-center gap-1.5 backdrop-blur-sm group-hover:bg-black/70 transition-colors">
                                        <div className="w-3 h-3 border border-white rounded-sm" />
                                        <span className="font-medium">12</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Overview */}
                        <div
                            className="overflow-hidden mb-8 w-full"
                            style={{
                                maxWidth: '831.76px',
                                minHeight: '169.87px',
                                borderRadius: '16px',
                                border: '1px solid #DBDBDB'
                            }}
                        >
                            <div
                                style={{
                                    width: '100%',
                                    height: '44.39px',
                                    background: '#98D5D4',
                                    display: 'flex',
                                    alignItems: 'center',
                                    paddingLeft: '26px'
                                }}
                            >
                                <span style={{
                                    fontFamily: 'Inter',
                                    fontWeight: 500,
                                    fontSize: '20px',
                                    lineHeight: '15px',
                                    color: '#233F50'
                                }}>
                                    Overview
                                </span>
                            </div>
                            <div
                                className="py-6 px-4 sm:px-8"
                                style={{
                                    width: '100%',
                                    // maxWidth: '767.53px',
                                    // margin: '0 auto',
                                    paddingLeft: '26px',
                                    paddingRight: '26px',
                                    fontFamily: 'Inter',
                                    fontWeight: 400,
                                    fontSize: '16px',
                                    lineHeight: '22px',
                                    textAlign: 'justify',
                                    color: '#000000'
                                }}
                            >
                                <p>
                                    Azerbaijan has different regions each having their own attractions and specialties. Baku is the most
                                    famous tourist attractions. Azerbaijan comes in the category of nature's diversity and has lot of
                                    outdoor activities to explore. This is a country which offers variety of landscapes which can be
                                    explored. Some of the sites hold immense historic values which can enrich young minds.
                                </p>
                            </div>
                        </div>

                        {/* Itinerary */}
                        <div
                            className="overflow-hidden w-full"
                            style={{
                                maxWidth: '831.76px',
                                borderRadius: '16px',
                                border: '1px solid #DBDBDB'
                            }}
                        >
                            <div
                                style={{
                                    width: '100%',
                                    height: '44.39px',
                                    background: '#98D5D4',
                                    display: 'flex',
                                    alignItems: 'center',
                                    paddingLeft: '26px'
                                }}
                            >
                                <span style={{
                                    fontFamily: 'Inter',
                                    fontWeight: 500,
                                    fontSize: '20px',
                                    lineHeight: '15px',
                                    color: '#233F50'
                                }}>
                                    Itinerary
                                </span>
                            </div>
                            <div
                                className="py-6 space-y-8 px-4 sm:px-8"
                                style={{
                                    width: '100%',
                                    // maxWidth: '767.53px',
                                    // margin: '0 auto',
                                    paddingLeft: '26px',
                                    paddingRight: '26px',
                                    fontFamily: 'Inter',
                                    fontWeight: 400,
                                    fontSize: '16px',
                                    lineHeight: '22px',
                                    textAlign: 'justify',
                                    color: '#000000'
                                }}
                            >
                                {/* Day 1 */}
                                <div>
                                    <h3
                                        className="mb-2"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontWeight: 600,
                                            fontSize: '20px',
                                            lineHeight: '28px',
                                            textAlign: 'left',
                                            color: '#233F50'
                                        }}
                                    >
                                        Day 1
                                    </h3>
                                    <h4
                                        className="mb-2"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontWeight: 600,
                                            fontSize: '16px',
                                            lineHeight: '26px',
                                            textAlign: 'justify',
                                            color: '#000000'
                                        }}
                                    >
                                        Arrival Airport Transfers + Check In Into Hotel
                                    </h4>
                                    <ul
                                        className="list-disc pl-5 space-y-1 marker:text-[#99F6E4]"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontWeight: 400,
                                            fontSize: '16px',
                                            lineHeight: '26px',
                                            textAlign: 'justify',
                                            color: '#000000'
                                        }}
                                    >
                                        <li>BAKU CITY TOUR</li>
                                        <li>Day will start with Highland Park to catch the view on the top of the BAKU City</li>
                                        <li>Second point is Little venice.</li>
                                        <li>Explore nearby Deniz Mall or Carpet Museum</li>
                                        <li>Next nearest stop is Old city (inner city)</li>
                                        <li>Main points : Maiden Tower , Palace of the Shirvanshahs</li>
                                        <li>Last stop will be Nizami street</li>
                                    </ul>
                                    <p className="text-sm text-slate-500 mt-2 italic">Overnight Stay At Baku</p>
                                </div>

                                {/* Day 2 */}
                                <div>
                                    <h3
                                        className="mb-2"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontWeight: 600,
                                            fontSize: '20px',
                                            lineHeight: '28px',
                                            textAlign: 'left',
                                            color: '#233F50'
                                        }}
                                    >
                                        Day 2
                                    </h3>
                                    <h4
                                        className="mb-2"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontWeight: 600,
                                            fontSize: '16px',
                                            lineHeight: '26px',
                                            textAlign: 'justify',
                                            color: '#000000'
                                        }}
                                    >
                                        Shahdag Tour
                                    </h4>
                                    <p
                                        className="mb-3"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontWeight: 400,
                                            fontSize: '16px',
                                            lineHeight: '26px',
                                            textAlign: 'justify',
                                            color: '#000000'
                                        }}
                                    >
                                        Discover the captivating beauty of Shahdag, the resort complex which offers un paralleled
                                        opportunities for skiing and a wide range of winter and summer sports in Azerbaijan.. It serves as a
                                        gateway to thrilling adventures and memorable experiences on the slopes.
                                    </p>
                                    <h5 className="font-semibold text-base mb-1 text-black">Activities To Do</h5>
                                    <ul
                                        className="list-disc pl-5 space-y-1 marker:text-[#99F6E4]"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontWeight: 400,
                                            fontSize: '16px',
                                            lineHeight: '26px',
                                            textAlign: 'justify',
                                            color: '#000000'
                                        }}
                                    >
                                        <li>Shahdag Coaster</li>
                                        <li>Paragliding</li>
                                        <li>Zipline</li>
                                        <li>Snow Boarding</li>
                                        <li>Skiing</li>
                                        <li>Sledging</li>
                                        <li>Quad/Buggy Tours.</li>
                                    </ul>
                                    <p className="text-sm text-slate-500 mt-2 italic">Overnight Stay At Baku</p>
                                </div>

                                {/* Day 3 */}
                                <div>
                                    <h3
                                        className="mb-2"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontWeight: 600,
                                            fontSize: '20px',
                                            lineHeight: '28px',
                                            textAlign: 'left',
                                            color: '#233F50'
                                        }}
                                    >
                                        Day 3
                                    </h3>
                                    <h4
                                        className="mb-2"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontWeight: 600,
                                            fontSize: '16px',
                                            lineHeight: '26px',
                                            textAlign: 'justify',
                                            color: '#000000'
                                        }}
                                    >
                                        Absheron Tour
                                    </h4>
                                    <ul
                                        className="list-disc pl-5 space-y-1 marker:text-[#99F6E4]"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontWeight: 400,
                                            fontSize: '16px',
                                            lineHeight: '26px',
                                            textAlign: 'justify',
                                            color: '#000000'
                                        }}
                                    >
                                        <li>Start your day with Fire Temple</li>
                                        <li>Visit to Fire mountain</li>
                                        <li>Enjoy magnificent building by Zaha Hadid Haydar Aliyev Center</li>
                                        <li>As last point of stop you may have Green Bazaar or Baku Zoo</li>
                                    </ul>
                                    <p className="text-sm text-slate-500 mt-2 italic">Overnight Stay At Baku</p>
                                </div>

                                {/* Day 4 */}
                                <div>
                                    <h3
                                        className="mb-2"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontWeight: 600,
                                            fontSize: '20px',
                                            lineHeight: '28px',
                                            textAlign: 'left',
                                            color: '#233F50'
                                        }}
                                    >
                                        Day 4
                                    </h3>
                                    <h4 className="font-semibold text-sm mb-2">Check Out + Departure Airport Transfers</h4>
                                </div>
                            </div>
                        </div>

                        {/* Inclusions & Exclusions */}
                        <div className="flex flex-col md:flex-row gap-6 w-full" style={{ maxWidth: '831.76px' }}>
                            {/* Inclusions */}
                            <div className="overflow-hidden w-full md:w-[403.07px] min-h-[266.85px] rounded-2xl border border-[#DBDBDB]">
                                <div style={{ width: '100%', height: '44.39px', background: '#98D5D4', display: 'flex', alignItems: 'center', paddingLeft: '26px' }}>
                                    <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '20px', lineHeight: '15px', color: '#233F50' }}>Inclusions</span>
                                </div>
                                <div className="p-6">
                                    <ul className="list-none space-y-2" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', lineHeight: '26px', color: '#000000', textAlign: 'left' }}>
                                        <li className="flex items-start gap-2"><span className="text-[#98D5D4]">✓</span> 2 way flight from Abu Dhabi</li>
                                        <li className="flex items-start gap-2"><span className="text-[#98D5D4]">✓</span> 10 kg hand baggage each - Normal Backpack</li>
                                        <li className="flex items-start gap-2"><span className="text-[#98D5D4]">✓</span> 4 night accommodation with breakfast</li>
                                        <li className="flex items-start gap-2"><span className="text-[#98D5D4]">✓</span> Airport transfers</li>
                                        <li className="flex items-start gap-2"><span className="text-[#98D5D4]">✓</span> Sightseeing as per the itinerary</li>
                                        <li className="flex items-start gap-2"><span className="text-[#98D5D4]">✓</span> English speaking guide</li>
                                        <li className="flex items-start gap-2"><span className="text-[#98D5D4]">✓</span> E visa</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Exclusions */}
                            <div className="overflow-hidden w-full md:w-[403.07px] min-h-[266.85px] rounded-2xl border border-[#DBDBDB]">
                                <div style={{ width: '100%', height: '44.39px', background: '#98D5D4', display: 'flex', alignItems: 'center', paddingLeft: '26px' }}>
                                    <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '20px', lineHeight: '15px', color: '#233F50' }}>Exclusions</span>
                                </div>
                                <div className="p-6">
                                    <ul className="list-none space-y-2" style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', lineHeight: '26px', color: '#000000', textAlign: 'left' }}>
                                        <li className="flex items-start gap-2"><span className="text-red-500">×</span> Lunch and dinner</li>
                                        <li className="flex items-start gap-2"><span className="text-red-500">×</span> Entrance/activity expenses</li>
                                        <li className="flex items-start gap-2"><span className="text-red-500">×</span> Any personal expenses</li>
                                        <li className="flex items-start gap-2"><span className="text-red-500">×</span> On arrival visa expense - passport and uae visa and emirates id must have</li>
                                        <li className="flex items-start gap-2"><span className="text-red-500">×</span> 6 month remaining validity from the date of return.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* General Guidelines */}
                        <div className="overflow-hidden w-full" style={{ maxWidth: '831.76px', borderRadius: '16px', border: '1px solid #DBDBDB' }}>
                            <div style={{ width: '100%', height: '44.39px', background: '#98D5D4', display: 'flex', alignItems: 'center', paddingLeft: '26px' }}>
                                <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '20px', lineHeight: '15px', color: '#233F50' }}>General Guidelines</span>
                            </div>
                            <div className="py-6 sm:px-0" style={{ width: '100%', paddingLeft: '26px', paddingRight: '26px', fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', lineHeight: '26px', textAlign: 'justify', color: '#000000' }}>
                                <ul className="list-none space-y-2">
                                    <li className="flex items-start gap-2"><span className="text-[#98D5D4] mt-1.5 text-[8px]">•</span> Each family should carry usd 500 usd as your show money/expense money.</li>
                                    <li className="flex items-start gap-2"><span className="text-[#98D5D4] mt-1.5 text-[8px]">•</span> Single passengers should carry 250 usd as minimum expense.</li>
                                    <li className="flex items-start gap-2"><span className="text-[#98D5D4] mt-1.5 text-[8px]">•</span> Please carry appropriate Clothing.</li>
                                    <li className="flex items-start gap-2"><span className="text-[#98D5D4] mt-1.5 text-[8px]">•</span> Please carry emirates id, passport</li>
                                    <li className="flex items-start gap-2"><span className="text-[#98D5D4] mt-1.5 text-[8px]">•</span> Pass port validity – 6 months from the date of return.</li>
                                    <li className="flex items-start gap-2"><span className="text-[#98D5D4] mt-1.5 text-[8px]">•</span> Emirates ID validity - 6 month from the date of return minimum</li>
                                    <li className="flex items-start gap-2"><span className="text-[#98D5D4] mt-1.5 text-[8px]">•</span> Please ensure to carry a multi pin adapter.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Terms And Condition */}
                        <div className="overflow-hidden w-full" style={{ maxWidth: '831.76px', borderRadius: '16px', border: '1px solid #DBDBDB' }}>
                            <div style={{ width: '100%', height: '44.39px', background: '#98D5D4', display: 'flex', alignItems: 'center', paddingLeft: '26px' }}>
                                <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '20px', lineHeight: '15px', color: '#233F50' }}>Terms And Condition</span>
                            </div>
                            <div className="py-6 sm:px-0" style={{ width: '100%', paddingLeft: '26px', paddingRight: '26px', fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', lineHeight: '26px', textAlign: 'justify', color: '#000000' }}>
                                <ul className="list-none space-y-2">
                                    <li className="flex items-start gap-2"><span className="text-[#98D5D4] mt-1.5 text-[8px]">•</span> This is a group travel. Personal choices of itineraries, pickup timings, meal timings and any other while you are on ground cannot be considered. The guides will help you to do the tours in timely manner considering your meal timing and rest. However guest should have an understanding and readiness to accept any delays due to any reason because of other individuals with you, weather condition, travel distance, scarcity of restaurants in the country sides, road block etc. - which we cannot control or influence.</li>
                                    <li className="flex items-start gap-2"><span className="text-[#98D5D4] mt-1.5 text-[8px]">•</span> Any changes in the Flight timings from airlines, will subject to change in itinerary as well. In this case, we will reschedule the itinerary in a way, that we cover all the places.</li>
                                    <li className="flex items-start gap-2"><span className="text-[#98D5D4] mt-1.5 text-[8px]">•</span> We hold full authority - to re arrange or alter Itinerary’s and overall tour plan, in case of any kind of incidents like, but not limited to - technical breakdown of Vehicle, weather condition, accidents on road, medical emergencies etc.</li>
                                    <li className="flex items-start gap-2"><span className="text-[#98D5D4] mt-1.5 text-[8px]">•</span> Alcohol consumption while on tour is strictly prohibited.</li>
                                    <li className="flex items-start gap-2"><span className="text-[#98D5D4] mt-1.5 text-[8px]">•</span> All nationalities with valid UAE residence visa is eligible for visa on arrival, however final decision to enter country is by the respective countries immigration authority. We will not be responsible in case of any deportation.</li>
                                    <li className="flex items-start gap-2"><span className="text-[#98D5D4] mt-1.5 text-[8px]">•</span> All activities and Attraction is subject to availability without any prior notice. Non-operation of activities due to technical reason or any other, we cannot influence it anyway.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Force Majeure */}
                        <div className="overflow-hidden w-full" style={{ maxWidth: '831.76px', borderRadius: '16px', border: '1px solid #DBDBDB' }}>
                            <div style={{ width: '100%', height: '44.39px', background: '#98D5D4', display: 'flex', alignItems: 'center', paddingLeft: '26px' }}>
                                <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '20px', lineHeight: '15px', color: '#233F50' }}>Force Majeure</span>
                            </div>
                            <div className="py-6 sm:px-0" style={{ width: '100%', paddingLeft: '26px', paddingRight: '26px', fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', lineHeight: '26px', textAlign: 'justify', color: '#000000' }}>
                                <p>
                                    we shall not be liable to you for any loss, additional costs or expenses connected with our inability to fulfil our obligations by reason of any force majeure event, including but not limited to fire, earthquake, flood, bad weather, epidemic, explosion, strikes, riot, act of terrorism, civil disturbance, war, act of God or any failure or delay of any transportation, computer or system failure or any other event beyond our control.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Booking Card */}
                        <div
                            className="bg-white p-6 w-full"
                            style={{
                                maxWidth: '344.82px',
                                minHeight: '329px',
                                borderRadius: '19px',
                                borderWidth: '1px',
                                borderColor: '#DBDBDB',
                                boxShadow: '0px 2px 5px 0px #0000001A'
                            }}
                        >
                            <div className="mb-6">
                                <span className="text-lg font-bold text-black">From AED 1800</span>
                                <span className="text-sm text-black ml-1">per person</span>
                            </div>

                            <div className="space-y-4 mb-6">
                                <label className="block text-sm font-semibold text-black mb-[-10px]">Select Date and Persons</label>

                                <div className="relative">
                                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    <input
                                        type="text"
                                        defaultValue="Wednesday, Jul 30, 2025"
                                        className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-1 focus:ring-[#99F6E4]"
                                    />
                                </div>
                                <div className="relative">
                                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    <input
                                        type="text"
                                        defaultValue="4 Adults, 2 Children"
                                        className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 focus:outline-none focus:ring-1 focus:ring-[#99F6E4]"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <Button className="w-full bg-[#98D5D4] hover:bg-[#80e0ce] text-black font-semibold">
                                    Update Search
                                </Button>
                                <Button
                                    className="w-full bg-[#233F50] hover:bg-[#1a2f3c] text-white"
                                    onClick={() => navigate('/package/booking')}
                                >
                                    Book Now
                                </Button>
                            </div>
                        </div>

                        {/* Additional Buttons */}
                        <Button
                            variant="outline"
                            className="flex items-center justify-center gap-2 text-[#233F50] font-bold hover:text-[#233F50] hover:bg-slate-50 w-full"
                            style={{
                                maxWidth: '344.82px',
                                height: '50.84px',
                                borderRadius: '9px',
                                borderWidth: '1px',
                                borderColor: '#DBDBDB',
                                background: '#FFFFFF',
                                boxShadow: '0px 2px 5px 0px #0000001A'
                            }}
                        >
                            <Download className="w-5 h-5" />
                            Download PDF Brochure
                        </Button>
                        <Button
                            variant="outline"
                            className="text-[#233F50] font-bold hover:text-[#233F50] hover:bg-slate-50 w-full"
                            style={{
                                maxWidth: '344.82px',
                                height: '50.84px',
                                borderRadius: '9px',
                                borderWidth: '1px',
                                borderColor: '#DBDBDB',
                                background: '#FFFFFF',
                                boxShadow: '0px 2px 5px 0px #0000001A'
                            }}
                        >
                            Enquiry Now
                        </Button>
                    </div>
                </div>
            </div>

            <Footer />

            {/* Gallery Modal */}
            {/* Gallery Modal - Mobile View */}
            {isGalleryOpen && (
                <div className="lg:hidden fixed inset-0 z-[60] flex flex-col bg-[#233F50]">
                    {/* Top Bar */}
                    <div className="flex justify-between items-center px-5 py-5 z-20 absolute top-0 left-0 right-0">
                        <button
                            onClick={() => setIsGalleryOpen(false)}
                            className="text-white hover:text-gray-200 transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <div className="text-white font-medium text-[15px] font-inter">
                            {currentImageIndex + 1}/{images.length}
                        </div>
                    </div>

                    {/* Main Image Area */}
                    <div className="flex-1 relative flex items-center justify-center overflow-hidden bg-[#233F50] w-full">
                        {/* Prev Button */}
                        <button
                            onClick={prevImage}
                            className="absolute left-4 z-10 w-9 h-9 flex items-center justify-center bg-white rounded-full text-[#233F50] shadow-lg transition-transform hover:scale-105 active:scale-95"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg>
                        </button>

                        <div className="w-full h-full flex items-center justify-center p-4">
                            <img
                                src={images[currentImageIndex]}
                                alt={`Gallery ${currentImageIndex + 1}`}
                                className="max-w-full max-h-full object-contain shadow-2xl"
                            />
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={nextImage}
                            className="absolute right-4 z-10 w-9 h-9 flex items-center justify-center bg-white rounded-full text-[#233F50] shadow-lg transition-transform hover:scale-105 active:scale-95"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
                        </button>
                    </div>

                    {/* Thumbnails */}
                    <div className="h-auto py-6 bg-[#233F50] px-4 overflow-x-auto flex-shrink-0">
                        <div className="flex gap-3 justify-center min-w-max px-2">
                            {images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentImageIndex(idx)}
                                    className={`relative flex-shrink-0 w-16 h-12 rounded-[6px] overflow-hidden transition-all duration-300 ${currentImageIndex === idx
                                        ? 'opacity-100 ring-2 ring-white scale-105'
                                        : 'opacity-50 hover:opacity-80'
                                        }`}
                                >
                                    <img
                                        src={img}
                                        className="w-full h-full object-cover"
                                        alt={`Thumbnail ${idx + 1}`}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Gallery Modal - Desktop View */}
            {isGalleryOpen && (
                <div className="hidden lg:flex fixed inset-0 z-50 items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-2xl w-full max-w-6xl h-[85vh] flex flex-col overflow-hidden relative shadow-2xl">
                        {/* Header */}
                        <div className="flex-shrink-0 flex justify-between items-center p-5 border-b border-gray-100">
                            <h2 className="text-xl font-bold text-gray-900">Tour Photos</h2>
                            <button
                                onClick={() => setIsGalleryOpen(false)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6 text-gray-500" />
                            </button>
                        </div>

                        {/* Main Content */}
                        <div className="flex-1 min-h-0 relative flex items-center justify-center bg-gray-50 p-4">
                            <button
                                onClick={prevImage}
                                className="absolute left-6 z-10 w-12 h-12 bg-white border border-gray-200 hover:scale-105 active:scale-95 rounded-full shadow-lg flex items-center justify-center transition-all"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left text-gray-700"><path d="m15 18-6-6 6-6" /></svg>
                            </button>

                            <img
                                src={images[currentImageIndex]}
                                alt={`Gallery Image ${currentImageIndex + 1}`}
                                className="max-w-full max-h-full object-contain shadow-lg rounded-lg"
                            />

                            <button
                                onClick={nextImage}
                                className="absolute right-6 z-10 w-12 h-12 bg-white border border-gray-200 hover:scale-105 active:scale-95 rounded-full shadow-lg flex items-center justify-center transition-all"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right text-gray-700"><path d="m9 18 6-6-6-6" /></svg>
                            </button>
                        </div>

                        {/* Thumbnails */}
                        <div className="flex-shrink-0 p-4 bg-white border-t border-gray-100 overflow-x-auto">
                            <div className="flex gap-3 justify-center min-w-max px-2">
                                {images.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentImageIndex(idx)}
                                        className={`relative w-24 h-16 rounded-lg overflow-hidden border-2 transition-all hover:opacity-100 ${currentImageIndex === idx
                                            ? 'border-[#233F50] opacity-100 ring-2 ring-gray-200'
                                            : 'border-transparent opacity-60'
                                            }`}
                                    >
                                        <img
                                            src={img}
                                            alt={`Thumbnail ${idx + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PackageDetails;
