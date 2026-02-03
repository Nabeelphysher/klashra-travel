import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MapPin, Calendar, Users, Search, ArrowRight, Briefcase, Mountain, Plane, FileText, BedDouble, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "holidays", label: "Holidays", icon: Briefcase },
  { id: "activities", label: "Activities", icon: Mountain },
  { id: "flight", label: "Flight", icon: Plane },
  { id: "visa", label: "Visa", icon: FileText },
  { id: "hotel", label: "Hotel", icon: BedDouble },
];

export const SearchPanel = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("holidays");

  useEffect(() => {
    const path = location.pathname.toLowerCase();
    if (path.includes("hotel")) {
      setActiveTab("hotel");
    } else if (path.includes("flight")) {
      setActiveTab("flight");
    } else if (path.includes("visa")) {
      setActiveTab("visa");
    } else if (path.includes("activities")) {
      setActiveTab("activities");
    } else {
      setActiveTab("holidays");
    }
  }, [location.pathname]);
  const [destination, setDestination] = useState("Azerbaijan");
  const [date, setDate] = useState("");
  const [travelers, setTravelers] = useState({
    adults: 4,
    children: 2,
    childAges: [11, 8],
    infants: 0
  });
  const [showTravelerPopup, setShowTravelerPopup] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  return (
    <div className="relative pb-0 px-0 lg:px-4 w-full flex flex-col items-center">
      {/* Service Tabs */}
      <div className="flex justify-center items-center gap-2 lg:gap-4 pb-4 lg:pb-0 relative z-20 w-[328px] lg:w-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex flex-col items-center justify-center rounded-[10px] lg:rounded-2xl transition-all duration-300 border",
                "w-[59.39px] h-[57.62px] lg:w-[106.37px] lg:h-[100.70px]",
                "shadow-none lg:shadow-sm",
                isActive
                  ? "bg-[#99f6e4] border-[#99f6e4] text-[#0f172a] lg:shadow-md scale-105 lg:scale-110 z-10"
                  : "bg-white border-slate-100 text-slate-500 hover:border-slate-200 hover:bg-slate-50"
              )}
            >
              <Icon className={cn("h-6 w-6 lg:h-10 lg:w-10 mb-0.5 lg:mb-2", isActive ? "stroke-[1.5px]" : "stroke-[1.2px]")} />
              <span className="text-[9px] lg:text-sm font-semibold">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Search Card */}
      <div
        className="bg-white rounded-t-[28px] lg:rounded-[28px] pt-4 lg:pt-12 pb-6 lg:pb-10 px-4 lg:px-10 -mt-6 lg:-mt-12 relative z-10 mx-auto w-full max-w-[1216px] overflow-hidden lg:overflow-visible"
        style={{
          boxShadow: window.innerWidth >= 1024 ? '0px 10px 35px 0px #00000026' : 'none',
          minHeight: window.innerWidth >= 1024 ? '297.07px' : 'auto'
        }}
      >
        <h2
          className="mx-auto text-center flex items-center justify-center pt-2 lg:pt-4 mb-4 lg:mb-10 font-['Inter'] text-[18px] lg:text-[28px] font-normal tracking-[-0.02em] text-[#000000] leading-snug"
          style={{ width: '100%', maxWidth: '800px' }}
        >
          {activeTab === 'hotel' ? "Book Domestic and International Hotel" : "Book Domestic and International Holiday Packages"}
        </h2>

        {/* Form Container */}
        <div className="flex flex-col gap-2 lg:grid lg:grid-cols-12 bg-white lg:bg-[#f1f5f9] rounded-2xl lg:border lg:border-slate-100 lg:divide-x lg:divide-slate-200">

          {activeTab === 'hotel' ? (
            <>
              {/* Hotel: City */}
              <div className="bg-[#f1f5f9] lg:bg-transparent rounded-xl lg:rounded-none lg:col-span-4 px-4 lg:px-8 py-3 lg:py-6 transition-colors hover:bg-slate-100/50 group cursor-pointer relative border-none lg:border-none">
                <label className="block text-[10px] lg:text-[12px] font-normal leading-none tracking-[-0.02em] text-black uppercase mb-1">
                  ENTER CITY NAME, LOCATION
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    defaultValue="Dubai"
                    className="bg-transparent w-full text-lg lg:text-4xl font-bold text-[#1e293b] placeholder:text-slate-300 focus:outline-none tracking-tight"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 lg:contents">
                {/* Hotel: Check-In */}
                <div className="bg-[#f1f5f9] lg:bg-transparent rounded-xl lg:rounded-none lg:col-span-2 px-4 lg:px-6 py-3 lg:py-6 transition-colors hover:bg-slate-100/50 cursor-pointer relative border-none lg:border-none">
                  <label className="flex items-center gap-1.5 text-[10px] lg:text-[12px] font-normal leading-none tracking-[-0.02em] text-black uppercase mb-1">
                    <Calendar className="h-3 w-3" /> CHECK-IN
                  </label>
                  <div className="flex flex-col">
                    <div className="flex items-baseline gap-1">
                      <span className="text-lg lg:text-3xl font-bold text-[#1e293b]">15</span>
                      <span className="text-[12px] lg:text-xl font-normal text-[#1e293b]">Jun'25</span>
                    </div>
                    <span className="text-[9px] lg:text-xs text-slate-400 font-medium">Sunday</span>
                  </div>
                </div>

                {/* Hotel: Check-Out */}
                <div className="bg-[#f1f5f9] lg:bg-transparent rounded-xl lg:rounded-none lg:col-span-2 px-4 lg:px-6 py-3 lg:py-6 transition-colors hover:bg-slate-100/50 cursor-pointer relative border-none lg:border-none">
                  <label className="flex items-center gap-1.5 text-[10px] lg:text-[12px] font-normal leading-none tracking-[-0.02em] text-black uppercase mb-1">
                    <Calendar className="h-3 w-3" /> CHECK-OUT
                  </label>
                  <div className="flex flex-col">
                    <div className="flex items-baseline gap-1">
                      <span className="text-lg lg:text-3xl font-bold text-[#1e293b]">18</span>
                      <span className="text-[12px] lg:text-xl font-normal text-[#1e293b]">Jun'25</span>
                    </div>
                    <span className="text-[9px] lg:text-xs text-slate-400 font-medium">Sunday</span>
                  </div>
                </div>
              </div>

              {/* Hotel: Rooms & Guests */}
              <div className="bg-[#f1f5f9] lg:bg-transparent rounded-xl lg:rounded-none lg:col-span-4 px-4 lg:px-8 py-3 lg:py-6 transition-colors hover:bg-slate-100/50 cursor-pointer relative border-none lg:border-none">
                <label className="flex items-center gap-1.5 text-[10px] lg:text-[12px] font-normal leading-none tracking-[-0.02em] text-black uppercase mb-1">
                  <Users className="h-3 w-3" /> ROOM & GUESTS
                </label>
                <div className="flex items-center">
                  <span className="text-lg lg:text-3xl font-bold text-[#1e293b]">
                    2 <span className="text-[12px] lg:text-2xl font-normal text-[#1e293b]">Room</span> 6 <span className="text-[12px] lg:text-2xl font-normal text-[#1e293b]">Guests</span>
                  </span>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Destination */}
              <div className="bg-[#f1f5f9] lg:bg-transparent rounded-xl lg:rounded-none lg:col-span-5 px-4 lg:px-8 py-3 lg:py-6 transition-colors hover:bg-slate-100/50 group cursor-pointer relative border-none lg:border-none">
                <label className="block text-[10px] lg:text-[12px] font-normal leading-none tracking-[-0.02em] text-black uppercase mb-1">
                  FIND HOLIDAYS BY DESTINATION
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Enter Destination"
                    className="bg-transparent w-full text-lg lg:text-4xl font-bold text-[#1e293b] placeholder:text-slate-300 focus:outline-none tracking-tight"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 lg:contents gap-2">
                {/* Travel Date */}
                <div className="bg-[#f1f5f9] lg:bg-transparent rounded-xl lg:rounded-none lg:col-span-3 px-4 lg:px-6 py-3 lg:py-6 transition-colors hover:bg-slate-100/50 cursor-pointer relative border-none lg:border-none">
                  <label className="flex items-center gap-1.5 text-[10px] lg:text-[12px] font-normal leading-none tracking-[-0.02em] text-black uppercase mb-1">
                    <Calendar className="h-3 w-3" /> TRAVEL DATE <ChevronDown className="h-2 w-2" />
                  </label>
                  <div
                    className="flex flex-col"
                    onClick={() => setShowDatePicker(!showDatePicker)}
                  >
                    <span className="text-lg lg:text-3xl font-bold text-[#1e293b]">30 <span className="text-[12px] lg:text-2xl font-normal">Jul' 2025</span></span>
                    <span className="text-[9px] lg:text-xs text-slate-400 font-medium">Wednesday</span>
                  </div>
                </div>

                {/* Travelers */}
                <div className="bg-[#f1f5f9] lg:bg-transparent rounded-xl lg:rounded-none lg:col-span-4 px-4 lg:px-6 py-3 lg:py-6 transition-colors hover:bg-slate-100/50 cursor-pointer relative border-none lg:border-none">
                  <label className="flex items-center gap-1.5 text-[10px] lg:text-[12px] font-normal leading-none tracking-[-0.02em] text-black uppercase mb-1">
                    <Users className="h-3 w-3" /> NUMBER OF PERSON
                  </label>
                  <div
                    className="flex flex-col justify-center"
                    onClick={() => setShowTravelerPopup(!showTravelerPopup)}
                  >
                    <span className="text-lg lg:text-3xl font-bold text-[#1e293b] leading-tight flex flex-wrap gap-x-1">
                      {travelers.adults} <span className="text-[11px] lg:text-2xl font-normal text-[#1e293b]">Adults,</span> {travelers.children} <span className="text-[11px] lg:text-2xl font-normal text-[#1e293b]">Children</span>
                    </span>
                  </div>
                </div>
              </div>
            </>
          )}

        </div>

        {/* Search Button */}
        <div className="mt-4 lg:absolute lg:left-0 lg:right-0 lg:bottom-[-26px] px-0 lg:px-0 flex justify-center z-20">
          <Button
            className="w-full lg:w-[204.85px] h-[52px] lg:h-[52.13px] text-white hover:bg-[#233F50] shadow-lg transition-all items-center justify-center gap-2 rounded-xl lg:rounded-[38px] bg-[#233F50]"
            onClick={() => {
              if (activeTab === 'hotel') {
                navigate('/hotel/search');
              } else if (activeTab === 'holidays') {
                navigate(`/packages?destination=${encodeURIComponent(destination)}`);
              }
            }}
          >
            <span className="font-['Inter'] font-medium text-lg lg:text-[22px]">Search</span>
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
