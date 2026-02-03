import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { Phone, Users, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import azerbaijanBanner from "@/assets/azerbaijan-banner.jpg";
import azerbaijanImg from "@/assets/azerbaijan.png";

const Packages = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const destination = queryParams.get("destination") || "Azerbaijan";

    // Mock data based on the image provided
    const packages = [
        {
            id: 1,
            image: azerbaijanImg, // Heydar Aliyev Center style
            title: destination,
            nights: 3,
            days: 4,
            price: 1800,
            hasBorder: true // To mimic the blue border in the first card
        },
        {
            id: 2,
            image: azerbaijanImg, // Flame Towers style
            title: destination,
            nights: 3,
            days: 4,
            price: 1800
        },
        {
            id: 3,
            image: azerbaijanImg, // Government House style
            title: destination,
            nights: 4,
            days: 5,
            price: 1800
        },
        {
            id: 4,
            image: azerbaijanImg, // Heydar Aliyev Center (similar to another)
            title: destination,
            nights: 5,
            days: 6,
            price: 1800
        },
        {
            id: 5,
            isCustom: true,
            image: azerbaijanImg, // Scenic view
            title: "Customized Package"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section */}
            <div className="relative h-[283px] lg:h-[500px] w-full mt-20 lg:mt-20 rounded-b-[15px] lg:rounded-b-[30px] overflow-hidden max-w-[1440px] mx-auto">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${azerbaijanBanner})`
                    }}
                />
                <div className="absolute inset-0 bg-black/40" />

                {/* Tag - Top Hanging */}
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 z-20 bg-[#98D5D4] rounded-b-[5px] lg:rounded-b-[20px] shadow-sm flex items-center justify-center 
                               w-[80px] h-[12px] lg:w-[286px] lg:h-[44px]"
                >
                    <span
                        className="uppercase font-medium text-[#000000] leading-none 
                                   text-[5px] lg:text-[20px]"
                        style={{ fontFamily: 'Inter' }}
                    >
                        INSPIRE TO TRAVEL
                    </span>
                </div>

                <div className="relative h-full flex items-center justify-center text-center px-4">
                    <h1
                        className="w-full px-4 lg:whitespace-nowrap"
                        style={{
                            fontFamily: "Inter",
                            fontWeight: 700,
                            fontSize: "clamp(36px, 6vw, 74px)",
                            lineHeight: "1",
                            letterSpacing: "-0.03em",
                            background: "linear-gradient(180deg, #98D5D4 0%, #FFFFFF 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            textAlign: "center",
                        }}
                    >
                        {destination} Packages
                    </h1>
                </div>
            </div>

            {/* Packages Grid */}
            <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {packages.map((pkg) => (
                        <div
                            key={pkg.id}
                            onClick={() => navigate('/package-details')}
                            className={`relative overflow-hidden group cursor-pointer transition-transform duration-0 w-full ${pkg.hasBorder ? 'ring-4 ring-[#3B82F6]' : ''}`}
                            style={{
                                maxWidth: '384px',
                                height: '336px',
                                borderRadius: '20px'
                            }}
                        >
                            {/* Background Image */}
                            <img
                                src={pkg.image}
                                alt={pkg.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay Gradient */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    background: 'linear-gradient(180.17deg, rgba(0, 0, 0, 0) 47.19%, #050505 99.86%)'
                                }}
                            />

                            {/* Content */}
                            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                                {pkg.isCustom ? (
                                    // Custom Package Content
                                    <div className="text-center">
                                        <h3 className="text-3xl font-bold mb-4">{pkg.title}</h3>
                                        <Button
                                            className="hover:bg-[#8ddad8] transition-colors flex items-center justify-center gap-3 mx-auto w-full"
                                            style={{
                                                maxWidth: '290.81px',
                                                height: '52.13px',
                                                borderRadius: '10px',
                                                background: '#98D5D4',
                                                padding: 0
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontFamily: 'Inter',
                                                    fontWeight: 500,
                                                    fontSize: '25px',
                                                    lineHeight: '100%',
                                                    letterSpacing: '-0.03em',
                                                    color: '#233F50'
                                                }}
                                            >
                                                Contact us now
                                            </span>
                                            <span className="bg-[#25D366] rounded-full p-1.5 text-white flex items-center justify-center">
                                                <svg width="25" height="25" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                                </svg>
                                            </span>
                                        </Button>
                                    </div>
                                ) : (
                                    // Standard Package Content
                                    <div className="flex flex-col items-start gap-2">
                                        <h3
                                            style={{
                                                fontFamily: 'Inter',
                                                fontWeight: 600,
                                                fontSize: 'clamp(20px, 5vw, 33px)',
                                                lineHeight: '1.2',
                                                letterSpacing: '-0.02em',
                                                textAlign: 'left',
                                                color: '#FFFFFF',
                                                marginBottom: '8px',
                                                width: '100%'
                                            }}
                                        >
                                            {pkg.title}
                                        </h3>

                                        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider mb-1">
                                            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-md border border-white/30">
                                                {pkg.nights} Nights
                                            </span>
                                            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-md border border-white/30">
                                                {pkg.days} Days
                                            </span>
                                        </div>

                                        <div className="flex items-baseline gap-2 mt-1">
                                            <span className="text-sm text-gray-300">Starts From</span>
                                            <span className="text-xl font-bold text-[#99F6E4]">AED {pkg.price}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Packages;
