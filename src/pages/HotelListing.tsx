import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Search, MapPin, Star, Share2, Wifi, Utensils, Waves, Dumbbell, Coffee, ChevronLeft, ChevronRight } from "lucide-react";

// Mock Data
const hotels = [
    {
        id: 1,
        name: "Radisson Red Dubai Silicon Oasis",
        location: "Downtown Dubai",
        rating: 4.5,
        reviews: 1002,
        stars: 4,
        price: 900,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670&auto=format&fit=crop",
        amenities: ["Bar", "Room Service", "Restaurant", "Free Wifi", "Gym", "Outdoor Swimming Pool"],
        tags: ["Free Cancellation", "Breakfast Available"],
        score: 9.4
    },
    {
        id: 2,
        name: "Radisson Blu Hotel Apartment Dubai Silicon",
        location: "Downtown Dubai",
        rating: 3,
        reviews: 904,
        stars: 3,
        price: 980,
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2525&auto=format&fit=crop",
        amenities: ["Bar", "Room Service", "Restaurant", "Free Wifi"],
        tags: ["Breakfast Available"],
        score: 8.5
    },
    {
        id: 3,
        name: "Best Western Plus Pearl Creek",
        location: "Downtown Dubai",
        rating: 4.5,
        reviews: 1002,
        stars: 5,
        price: 880,
        image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=2670&auto=format&fit=crop",
        amenities: ["Bar", "Room Service", "Restaurant", "Free Wifi", "Gym"],
        tags: ["Free Cancellation", "Breakfast Available"],
        score: 9.4
    },
    {
        id: 4,
        name: "Radisson Red Dubai Silicon Oasis",
        location: "Downtown Dubai",
        rating: 4.5,
        reviews: 1002,
        stars: 4,
        price: 575,
        image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2649&auto=format&fit=crop",
        amenities: ["Bar", "Room Service", "Restaurant", "Free Wifi", "Gym"],
        tags: ["Free Cancellation", "Breakfast Available"],
        score: 9.4
    }
];

import { useNavigate } from "react-router-dom";

const HotelCard = ({ hotel }: { hotel: any }) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/hotel/${hotel.id}`)}
            className="bg-white flex flex-col lg:flex-row gap-0 hover:shadow-md transition-shadow cursor-pointer w-full overflow-hidden border border-[#DBDBDB] rounded-[16px] mx-auto lg:mx-0 max-w-[370px] lg:max-w-[907px] lg:min-h-[223px]"
        >
            {/* Image Section */}
            <div className="relative flex-shrink-0 group w-full lg:w-[294px] h-[180px] lg:h-auto overflow-hidden">
                <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />

                {/* Desktop Arrows */}
                <button className="hidden lg:block absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronLeft className="h-4 w-4" />
                </button>
                <button className="hidden lg:block absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <ChevronRight className="h-4 w-4" />
                </button>
            </div>

            {/* Content Section */}
            <div className="flex-1 flex flex-col p-3 lg:p-4">
                <div className="flex flex-col lg:flex-row lg:justify-between h-full">
                    <div className="flex-1">
                        <h3 className="text-[#000000] font-bold mb-1 lg:mb-2 line-clamp-1 lg:line-clamp-none font-['Inter'] text-[18px] lg:text-[22px] leading-[110%]">
                            {hotel.name}
                        </h3>

                        <div className="flex items-center gap-2 mb-3 lg:mb-4">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`h-3 w-3 lg:h-4 lg:w-4 ${i < hotel.stars ? "fill-yellow-400 text-yellow-400" : "text-slate-200"}`} />
                                ))}
                            </div>
                            <span className="text-[#000000] text-[11px] lg:text-[13.5px] font-normal font-['Inter']">
                                {hotel.location}
                            </span>

                            {/* Score (Mobile Only in this spot) */}
                            <div className="lg:hidden flex items-center gap-2 ml-auto">
                                <div className="bg-[#98D5D4] text-[#000000] font-bold px-1.5 py-0.5 rounded text-[12px]">
                                    {hotel.score}
                                </div>
                                <div className="text-[10px] leading-tight text-right">
                                    <div className="font-bold text-[#000000]">Excellent</div>
                                    <div className="text-slate-500 font-medium">{hotel.reviews} reviews</div>
                                </div>
                            </div>
                        </div>

                        {/* Amenities */}
                        <div className="flex flex-wrap gap-x-3 gap-y-2 mb-4">
                            {hotel.amenities.map((amenity: string) => {
                                let Icon = Coffee;
                                if (amenity.includes("Wifi")) Icon = Wifi;
                                if (amenity.includes("Pool")) Icon = Waves;
                                if (amenity.includes("Gym")) Icon = Dumbbell;
                                if (amenity.includes("Food") || amenity.includes("Restaurant")) Icon = Utensils;

                                return (
                                    <div key={amenity} className="flex items-center gap-1 text-[10px] lg:text-[12.5px] font-semibold text-[#000000] font-['Inter']">
                                        <Icon className="h-3 w-3 lg:h-3.5 lg:w-3.5" /> {amenity}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Desktop/Right Section: Rating & Price */}
                    <div className="flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#DBDBDB] pt-3 lg:pt-0 lg:pl-6 -mx-3 px-3 lg:mx-0 lg:px-0 mt-auto lg:mt-0">
                        {/* Rating (Desktop Only) */}
                        <div className="hidden lg:flex items-center justify-end gap-2 mb-4">
                            <div className="bg-[#98D5D4] text-[#000000] font-bold px-2 py-1 rounded text-sm">
                                {hotel.score}
                            </div>
                            <div className="text-right">
                                <div className="font-bold text-[#000000] leading-none">Excellent</div>
                                <div className="text-xs text-slate-500">{hotel.reviews} reviews</div>
                            </div>
                        </div>

                        {/* Footer (Mobile/Desktop mixed logic) */}
                        <div className="flex items-center justify-between lg:block lg:text-right w-full">
                            {/* Tags (Mobile Left) */}
                            <div className="flex flex-col gap-1 lg:flex-row lg:justify-end lg:gap-2 mb-0 lg:mb-4">
                                {hotel.tags.map((tag: string) => (
                                    <span key={tag} className="flex items-center justify-center px-1.5 py-1 bg-[#98D5D440] border border-[#98D5D4] rounded-[4px] text-[9px] lg:text-[12.5px] font-medium text-[#000000] whitespace-nowrap">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Price (Mobile Right) */}
                            <div className="text-right">
                                <div className="text-[18px] lg:text-[30px] font-bold text-[#000000] leading-none mb-0.5 lg:mb-1">
                                    {hotel.price} AED
                                </div>
                                <div className="text-[9px] lg:text-xs text-slate-500 font-medium font-['Inter']">
                                    Per night for 2 rooms
                                </div>
                            </div>
                        </div>

                        {/* Action (Desktop Only) */}
                        <Button className="hidden lg:flex w-full bg-[#98D5D4] hover:bg-[#7bc0bf] text-[#000000] font-bold h-10 mt-4">
                            View Rooms
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const HotelListing = () => {
    const isChecked = true; // Mock state for checkboxes
    const [priceRange, setPriceRange] = useState([10000, 28900]);
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#f8fafc] overflow-x-hidden">
            <Navigation />

            {/* Search Summary Bar */}
            <div className="bg-white border-b border-[#DBDBDB] sticky top-20 z-30">
                <div className="container mx-auto px-4 py-3 lg:py-0 lg:min-h-[100.99px] flex items-center">
                    {/* Mobile Header */}
                    <div className="flex lg:hidden flex-col w-full gap-2">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-3">
                                <button onClick={() => navigate(-1)} className="text-[#000000]">
                                    <ChevronLeft className="h-6 w-6" />
                                </button>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h1 className="text-[20px] font-bold text-[#233F50] font-['Inter'] leading-none">Dubai</h1>
                                        <span className="text-[12px] text-[#000000] font-medium font-['Inter']">15 Jun - 18 Jun</span>
                                    </div>
                                    <div className="text-[12px] text-[#000000] font-medium font-['Inter'] mt-1">
                                        2 Rooms, 6 Guests
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <button className="flex items-center gap-1 bg-[#98D5D4] text-[#233F50] px-2 py-1.5 rounded-[5px] h-10">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-0.5">
                                        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                                        <path d="m15 5 4 4" />
                                    </svg>
                                    <span className="text-[12px] font-bold font-['Inter']">Edit</span>
                                </button>
                                <button className="bg-[#233F50] text-white p-2 rounded-full h-10 w-10 flex items-center justify-center">
                                    <Share2 className="h-5 w-5 text-[#98D5D4]" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Header */}
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
                                <Share2 className="w-[15.56px] h-[16.03px] color-[#98D5D4]" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Mobile Filter Chips */}
                <div className="lg:hidden flex items-center gap-2 overflow-x-auto no-scrollbar px-4 pb-3">
                    <button className="flex items-center gap-1.5 bg-[#98D5D4] text-[#233F50] px-3 py-1.5 rounded-[5px] whitespace-nowrap border border-[#98D5D4] h-[32px]">
                        <span className="text-[14px] font-medium font-['Inter']">Filter</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" /><line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" /><line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" /><line x1="2" y1="14" x2="6" y2="14" /><line x1="10" y1="8" x2="14" y2="8" /><line x1="18" y1="16" x2="22" y2="16" />
                        </svg>
                    </button>
                    <div className="flex items-center gap-2">
                        <span className="text-[13px] text-[#000000] font-normal font-['Inter'] whitespace-nowrap">Sort By:</span>
                        {["Popularity", "Price (Low To High)", "Price (High To Low)"].map((chip) => (
                            <button key={chip} className="bg-white border border-[#DBDBDB] text-[#233F50] px-3 py-1.5 rounded-[5px] whitespace-nowrap h-[32px] text-[13px] font-medium font-['Inter']">
                                {chip}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 pt-8 lg:pt-32 pb-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Filters */}
                    <div
                        className="hidden lg:flex flex-shrink-0 flex-col bg-white rounded-2xl border border-[#DBDBDB] overflow-hidden w-full lg:w-[285px]"
                        style={{
                            minHeight: 'auto',
                        }}
                    >
                        {/* Filter Header */}
                        <div className="flex items-center justify-between p-4 border-b border-[#DBDBDB]">
                            <h3 className="font-bold text-[#1e293b]">FILTER</h3>
                            <button className="text-xs font-semibold text-[#1e293b] underline">Clear All</button>
                        </div>

                        {/* Filter Content */}
                        <div className="p-4 flex flex-col gap-6">
                            {/* Search Within */}
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                                <input type="text" placeholder="Enter hotel name or location" className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#99f6e4]" />
                            </div>

                            {/* Suggested For You */}
                            <div>
                                <h4
                                    className="mb-3"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontWeight: 600,
                                        fontSize: '14px',
                                        lineHeight: '101%',
                                        letterSpacing: '-0.02em',
                                        color: '#233F50'
                                    }}
                                >
                                    Suggested For You
                                </h4>
                                <div className="flex flex-col gap-2.5">
                                    {["Early Check-In Available", "Breakfast Included", "Free Cancellation", "5 Star", "Indian Food at the Property", "Breakfast with Lunch or Dinner", "Family Friendly"].map((item) => (
                                        <div key={item} className="flex items-center space-x-3">
                                            <Checkbox id={item} className="border-slate-300 data-[state=checked]:bg-[#98D5D4] data-[state=checked]:text-[#1e293b] data-[state=checked]:border-[#98D5D4] rounded-sm h-4 w-4" />
                                            <label
                                                htmlFor={item}
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontWeight: 500,
                                                    fontSize: '12.5px',
                                                    lineHeight: '29px',
                                                    letterSpacing: '-0.02em',
                                                    color: '#1e293b'
                                                }}
                                            >
                                                {item}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="h-px bg-[#DBDBDB] w-full" />

                            {/* Star Category */}
                            <div>
                                <h4
                                    className="mb-3"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontWeight: 600,
                                        fontSize: '14px',
                                        lineHeight: '100%',
                                        letterSpacing: '-0.02em',
                                        color: '#233F50'
                                    }}
                                >
                                    Star Category
                                </h4>
                                <div className="flex flex-col gap-2.5">
                                    {[5, 4, 3].map((star) => (
                                        <div key={star} className="flex items-center space-x-3">
                                            <Checkbox id={`star-${star}`} className="border-slate-300 data-[state=checked]:bg-[#98D5D4] data-[state=checked]:text-[#1e293b] data-[state=checked]:border-[#98D5D4] rounded-sm h-4 w-4" />
                                            <label
                                                htmlFor={`star-${star}`}
                                                className="flex items-center gap-1"
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontWeight: 500,
                                                    fontSize: '12.5px',
                                                    lineHeight: '29px',
                                                    letterSpacing: '-0.02em',
                                                    color: '#1e293b'
                                                }}
                                            >
                                                {star} Star
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="h-px bg-[#DBDBDB] w-full" />

                            {/* Property Type */}
                            <div>
                                <h4
                                    className="mb-3"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontWeight: 600,
                                        fontSize: '14px',
                                        lineHeight: '100%',
                                        letterSpacing: '-0.02em',
                                        color: '#233F50'
                                    }}
                                >
                                    Property Type
                                </h4>
                                <div className="flex flex-col gap-2.5">
                                    {["Apartments", "Hotel", "Homestay", "Resort", "Villa", "Hostel", "Guest House", "Camp", "Houseboat"].map((type) => (
                                        <div key={type} className="flex items-center space-x-3">
                                            <Checkbox id={type} className="border-slate-300 data-[state=checked]:bg-[#98D5D4] data-[state=checked]:text-[#1e293b] data-[state=checked]:border-[#98D5D4] rounded-sm h-4 w-4" />
                                            <label
                                                htmlFor={type}
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontWeight: 500,
                                                    fontSize: '12.5px',
                                                    lineHeight: '29px',
                                                    letterSpacing: '-0.02em',
                                                    color: '#1e293b'
                                                }}
                                            >
                                                {type}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="h-px bg-[#DBDBDB] w-full" />

                            {/* Price Range */}
                            <div>
                                <h4
                                    className="mb-3"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontWeight: 600,
                                        fontSize: '14px',
                                        lineHeight: '100%',
                                        letterSpacing: '-0.02em',
                                        color: '#233F50'
                                    }}
                                >
                                    Price Range
                                </h4>
                                <Slider
                                    value={priceRange}
                                    onValueChange={setPriceRange}
                                    max={30000}
                                    step={100}
                                    className="mb-2"
                                />
                                <div className="flex justify-between text-[10px] font-bold text-[#1e293b]">
                                    <span>AED {priceRange[0]}</span>
                                    <span>AED {priceRange[1]}</span>
                                </div>
                            </div>

                            <div className="h-px bg-[#DBDBDB] w-full" />

                            {/* User Review Rating */}
                            <div>
                                <h4
                                    className="mb-3"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontWeight: 600,
                                        fontSize: '14px',
                                        lineHeight: '100%',
                                        letterSpacing: '-0.02em',
                                        color: '#233F50'
                                    }}
                                >
                                    User Review Rating
                                </h4>
                                <div className="flex flex-col gap-2.5">
                                    {["Excellent: 4.2+", "Very Good: 3.5+", "3 & above (Good)"].map((rating) => (
                                        <div key={rating} className="flex items-center space-x-3">
                                            <Checkbox id={rating} className="border-slate-300 data-[state=checked]:bg-[#98D5D4] data-[state=checked]:text-[#1e293b] data-[state=checked]:border-[#98D5D4] rounded-sm h-4 w-4" />
                                            <label
                                                htmlFor={rating}
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontWeight: 500,
                                                    fontSize: '12.5px',
                                                    lineHeight: '29px',
                                                    letterSpacing: '-0.02em',
                                                    color: '#1e293b'
                                                }}
                                            >
                                                {rating}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="h-px bg-[#DBDBDB] w-full" />

                            {/* Neighbourhood */}
                            <div>
                                <h4
                                    className="mb-3"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontWeight: 600,
                                        fontSize: '14px',
                                        lineHeight: '100%',
                                        letterSpacing: '-0.02em',
                                        color: '#233F50'
                                    }}
                                >
                                    Neighbourhood
                                </h4>
                                <div className="flex flex-col gap-2.5">
                                    {["Dubai Marina", "Beach & Coast", "Business Bay", "Downtown Dubai", "Guests' favourite area"].map((area) => (
                                        <div key={area} className="flex items-center space-x-3">
                                            <Checkbox id={area} className="border-slate-300 data-[state=checked]:bg-[#98D5D4] data-[state=checked]:text-[#1e293b] data-[state=checked]:border-[#98D5D4] rounded-sm h-4 w-4" />
                                            <label
                                                htmlFor={area}
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontWeight: 500,
                                                    fontSize: '12.5px',
                                                    lineHeight: '29px',
                                                    letterSpacing: '-0.02em',
                                                    color: '#1e293b'
                                                }}
                                            >
                                                {area}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main List */}
                    <div className="flex-1">
                        {/* Sort Tabs (Desktop Only) */}
                        <div className="hidden lg:flex w-full relative flex-wrap items-center gap-4 mb-6">
                            <span
                                className="mr-2 flex-shrink-0"
                                style={{
                                    fontFamily: 'Inter',
                                    fontSize: '16px',
                                    fontWeight: 400,
                                    color: '#000000'
                                }}
                            >
                                Sort By:
                            </span>
                            <div className="flex flex-wrap items-center gap-3">
                                {["Popularity", "Price (Low To High)", "Price (High To Low)", "User Rating (Highest First)"].map((sort, index) => (
                                    <button
                                        key={sort}
                                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all flex-shrink-0 ${index === 0
                                            ? "bg-[#98D5D4] text-[#1e293b]"
                                            : "bg-white border border-[#DBDBDB] text-[#1e293b] hover:bg-slate-50"
                                            }`}
                                        style={{ fontFamily: 'Inter' }}
                                    >
                                        {sort}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Hotel Cards */}
                        <div className="space-y-4">
                            {hotels.map(hotel => (
                                <HotelCard key={hotel.id} hotel={hotel} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div >
    );
};

export default HotelListing;
