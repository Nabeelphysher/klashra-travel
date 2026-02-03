import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const offers = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1571896349842-6e53ce41be03?q=80&w=2670&auto=format&fit=crop",
        title: "Up to 25% Off + Additional Saving on EMI",
        description: "Up to 25% Off + Additional Saving on EMI",
        code: "HDFCEMI",
        category: "hotel"
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2670&auto=format&fit=crop",
        title: "Up to 25% Off + Additional Saving on EMI",
        description: "Up to 25% Off + Additional Saving on EMI",
        code: "HDFCEMI",
        category: "hotel"
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670&auto=format&fit=crop",
        title: "Up to 25% Off + Additional Saving on EMI",
        description: "Up to 25% Off + Additional Saving on EMI",
        code: "HDFCEMI",
        category: "hotel"
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2670&auto=format&fit=crop",
        title: "Up to 25% Off + Additional Saving on EMI",
        description: "Up to 25% Off + Additional Saving on EMI",
        code: "HDFCEMI",
        category: "hotel"
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1571896349842-6e53ce41be03?q=80&w=2670&auto=format&fit=crop",
        title: "Up to 25% Off + Additional Saving on EMI",
        description: "Up to 25% Off + Additional Saving on EMI",
        code: "HDFCEMI",
        category: "hotel"
    }
];

export const ExclusiveOffers = () => {
    const [activeTab, setActiveTab] = useState("hotel");
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = 400;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="container mx-auto px-4 py-12 max-w-7xl">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 gap-6">
                <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 flex-1">
                    <h2
                        className="font-['Inter'] font-semibold text-[40px] text-[#233F50]"
                        style={{
                            lineHeight: '80px',
                            letterSpacing: '-0.03em',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        Exclusive Offers
                    </h2>

                    <div className="flex items-center gap-4 overflow-x-auto no-scrollbar">
                        {["Offers Bank", "Flight", "Hotel", "Holidays"].map((tab) => {
                            const isActive = activeTab === tab.toLowerCase() || (tab === "Hotel" && activeTab === "hotel");
                            return (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab.toLowerCase())}
                                    className={cn(
                                        "flex items-center justify-center px-5 text-sm font-medium whitespace-nowrap transition-all duration-200",
                                        isActive
                                            ? "text-[#1e293b] shadow-sm font-semibold"
                                            : "text-slate-500 hover:text-slate-900"
                                    )}
                                    style={{
                                        height: '30.47px',
                                        borderRadius: '15.23px',
                                        backgroundColor: isActive ? '#98D5D4' : 'transparent',
                                        minWidth: '80.22px' // ensuring consistent minimum width matching the spec
                                    }}
                                >
                                    {tab}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Navigation Arrows */}
                <div className="hidden lg:flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => scroll("left")}
                        className="rounded-full bg-transparent hover:bg-slate-50 text-[#233F50]"
                        style={{
                            width: '32.69px',
                            height: '32.69px',
                            border: '1.5px solid #E2E8F0'
                        }}
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => scroll("right")}
                        className="rounded-full bg-transparent hover:bg-slate-50 text-[#233F50]"
                        style={{
                            width: '32.69px',
                            height: '32.69px',
                            border: '1.5px solid #233F50'
                        }}
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            {/* Cards Carousel */}
            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto overflow-y-hidden scrollbar-hide pb-8 -mx-4 px-4 snap-x snap-mandatory"
            >
                {offers.map((offer, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 snap-start"
                        style={{ width: '332.27px' }}
                    >
                        <div
                            className="bg-[#EEEEEE] rounded-[20px] p-3 flex flex-col gap-3 hover:shadow-lg transition-shadow duration-300"
                            style={{ height: '259.72px' }}
                        >
                            {/* Image Container */}
                            <div className="relative rounded-2xl overflow-hidden h-[180px] w-full flex-shrink-0">
                                <img
                                    src={offer.image}
                                    alt={offer.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20" />

                                {/* Overlay Content */}
                                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                                    <h3 className="text-white font-bold text-xl leading-tight max-w-[90%] drop-shadow-md">
                                        {offer.title}
                                    </h3>

                                    <div className="bg-[#FFD700] text-black px-3 py-1.5 rounded-lg w-fit flex items-center gap-2">
                                        <span className="text-[10px] font-medium">Use Code</span>
                                        <span className="font-bold text-xs uppercase">{offer.code}</span>
                                        <div className="bg-white/20 p-0.5 rounded-sm">
                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Content */}
                            <div className="px-1 flex-1 flex items-center">
                                <p className="text-[#1e293b] text-base font-medium leading-snug line-clamp-2">
                                    {offer.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile Dots */}
            <div className="flex justify-center gap-2 mt-2 lg:hidden">
                {offers.slice(0, 4).map((_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 rounded-full ${index === 0 ? "bg-[#99f6e4]" : "bg-slate-200"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};
