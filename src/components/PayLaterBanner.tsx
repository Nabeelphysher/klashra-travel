import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Using the imported asset as requested
import bannerHotel from "@/assets/banner-hotel.jpg";

export const PayLaterBanner = () => {
    return (
        <section className="pt-2 pb-10 lg:py-16 md:lg:py-24 container mx-auto px-4 flex justify-center">
            <div
                className="relative overflow-hidden group flex flex-col justify-center items-start pl-6 md:pl-8 lg:md:pl-16 shadow-lg transition-all duration-300 hover:shadow-xl w-full"
                id="pay-later-banner"
                style={{
                    maxWidth: '1217.23px',
                    backgroundColor: '#8B3D88',
                    backgroundImage: `url(${bannerHotel})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'right center',
                }}
            >
                <style>{`
                    #pay-later-banner {
                        min-height: 152.3px;
                        border-radius: 20px;
                    }
                    #pay-later-title {
                        font-size: 24px;
                        line-height: 28px;
                        margin-bottom: 12px;
                    }
                    #pay-later-btn {
                        width: 111px;
                        height: 32px;
                        font-size: 11px;
                    }
                    @media (min-width: 1024px) {
                        #pay-later-banner {
                             min-height: 501.05px !important;
                             border-radius: 24px !important;
                             background-position: center !important;
                        }
                        #pay-later-title {
                            font-size: 56px !important;
                            line-height: 70px !important;
                            margin-bottom: 40px !important;
                        }
                        #pay-later-btn {
                            width: 212.07px !important;
                            height: 51.98px !important;
                            font-size: 16px !important;
                        }
                    }
                `}</style>

                {/* Content Container */}
                <div className="relative z-10 flex flex-col max-w-lg">
                    <h2
                        id="pay-later-title"
                        className="font-['Inter'] font-semibold text-white uppercase"
                    >
                        Buy now,<br />
                        pay later
                    </h2>

                    <Button
                        id="pay-later-btn"
                        variant="outline"
                        className="rounded-full bg-white text-black hover:bg-slate-100 hover:text-black transition-colors flex items-center justify-center gap-1 font-medium border-[1.2px] border-black"
                    >
                        Book Now <ArrowRight className="h-3 w-3 lg:h-4 lg:w-4" />
                    </Button>
                </div>
            </div>
        </section>
    );
};
