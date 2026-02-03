import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Facebook, Linkedin, Instagram } from "lucide-react";

import BannerImage from "@/assets/about.jpg";
import ShareefImg from "@/assets/shareef.png";
import ShuhaibImg from "@/assets/shuhaib.png";
import SadiquImg from "@/assets/sadiqu.png";

const About = () => {
    return (
        <div className="min-h-screen bg-white pt-20 overflow-x-hidden">
            <Navigation />

            {/* Hero Section */}
            <div className="relative h-[450px] w-full">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url("https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80")` }}
                />
                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#99f6e4] text-[#111827] px-12 py-3 rounded-b-2xl font-bold tracking-widest text-sm md:text-base shadow-lg z-30 uppercase">
                    INSPIRE TO TRAVEL
                </div>

                <div className="relative h-full flex items-center justify-center text-center px-4">
                    <h1
                        style={{
                            fontFamily: "Inter",
                            fontWeight: 700,
                            fontSize: "clamp(48px, 10vw, 84px)",
                            lineHeight: "1",
                            background: "linear-gradient(180deg, #98D5D4 0%, #FFFFFF 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            textAlign: "center",
                            width: "100%"
                        }}
                    >
                        Discover Your Next <br className="hidden md:block" /> Great Adventure
                    </h1>
                </div>
            </div>

            {/* About Description */}
            <section className="py-20 px-4 md:px-8 bg-[#F2F2F2] text-center">
                <h2
                    style={{
                        fontFamily: "Inter",
                        fontWeight: 600,
                        fontSize: "40px",
                        letterSpacing: "-0.03em",
                        color: "#233F50",
                    }}
                >
                    About Us
                </h2>

                <div
                    className="max-w-[1216px] mx-auto mt-8 space-y-6"
                    style={{
                        fontFamily: "Inter",
                        fontWeight: 300,
                        fontSize: "clamp(16px, 4vw, 23px)",
                        lineHeight: "1.5",
                    }}
                >
                    <p>
                        Founded in 2017, Klashra Tours & Travels is a leading name in the travel
                        and tourism industry with operations spanning Dubai and Kerala. Known
                        for our exceptional services and customer-first approach, we have
                        become a trusted partner for travelers worldwide.
                    </p>
                    <p>
                        With a focus on reliability, efficiency, and innovation, Klashra
                        continues to grow as a preferred travel partner, bringing dreams to
                        life, one journey at a time.
                    </p>
                </div>
            </section>

            {/* Founders Section */}
            <section className="bg-[#F9FAFB] py-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2
                        className="text-center mb-14"
                        style={{
                            fontFamily: "Inter",
                            fontWeight: 600,
                            fontSize: "40px",
                            letterSpacing: "-0.03em",
                            color: "#233F50",
                        }}
                    >
                        What Founders Saying
                    </h2>

                    <div className="flex flex-wrap justify-center gap-12 mb-16 px-4">
                        {/* Founder 1 - Shareef */}
                        <div className="relative w-full max-w-[283px]">
                            <div className="absolute top-0 left-0 w-full h-[350px] overflow-hidden z-20 pointer-events-none">
                                <img
                                    src={ShareefImg}
                                    alt="Shareef"
                                    className="w-full h-full object-cover object-top"
                                    style={{ transform: 'scale(1.12)', transformOrigin: 'top center' }}
                                />
                            </div>
                            <div className="mt-[50px] bg-[#EFF3F7] shadow-sm z-10 relative overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                                <div className="bg-[#F3F4F6] w-full" style={{ height: '300px' }}></div>
                                <div className="p-4 text-center pb-6 bg-[#EFF3F7]">
                                    <h3 className="text-[#233F50] font-bold text-2xl mb-2">Shareef</h3>
                                    <div className="flex justify-center gap-4">
                                        <Instagram className="w-5 h-5 text-[#233F50] cursor-pointer" />
                                        <Facebook className="w-5 h-5 text-[#233F50] cursor-pointer" />
                                        <Linkedin className="w-5 h-5 text-[#233F50] cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Founder 2 - Shuaib */}
                        <div className="relative w-full max-w-[283px]">
                            <div className="absolute top-0 left-0 w-full h-[350px] overflow-hidden z-20 pointer-events-none">
                                <img
                                    src={ShuhaibImg}
                                    alt="Shuaib"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                            <div className="mt-[50px] bg-[#EFF3F7] shadow-sm z-10 relative overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                                <div className="bg-[#F3F4F6] w-full" style={{ height: '300px' }}></div>
                                <div className="p-4 text-center pb-6 bg-[#EFF3F7]">
                                    <h3 className="text-[#233F50] font-bold text-2xl mb-2">Shuaib</h3>
                                    <div className="flex justify-center gap-4">
                                        <Instagram className="w-5 h-5 text-[#233F50] cursor-pointer" />
                                        <Facebook className="w-5 h-5 text-[#233F50] cursor-pointer" />
                                        <Linkedin className="w-5 h-5 text-[#233F50] cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Founder 3 - Sadique */}
                        <div className="relative w-full max-w-[283px]">
                            <div className="absolute top-0 left-0 w-full h-[350px] overflow-hidden z-20 pointer-events-none">
                                <img
                                    src={SadiquImg}
                                    alt="Sadique"
                                    className="w-full h-full object-cover object-top"
                                    style={{ transform: 'scale(1.12)', transformOrigin: 'top center' }}
                                />
                            </div>
                            <div className="mt-[50px] bg-[#EFF3F7] shadow-sm z-10 relative overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                                <div className="bg-[#F3F4F6] w-full" style={{ height: '300px' }}></div>
                                <div className="p-4 text-center pb-6 bg-[#EFF3F7]">
                                    <h3 className="text-[#233F50] font-bold text-2xl mb-2">Sadique</h3>
                                    <div className="flex justify-center gap-4">
                                        <Instagram className="w-5 h-5 text-[#233F50] cursor-pointer" />
                                        <Facebook className="w-5 h-5 text-[#233F50] cursor-pointer" />
                                        <Linkedin className="w-5 h-5 text-[#233F50] cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-[1150px] mx-auto text-center mt-16 px-4">
                        <p style={{
                            fontFamily: 'Inter',
                            fontWeight: 300,
                            fontSize: 'clamp(16px, 4vw, 23px)',
                            lineHeight: '1.5',
                            color: '#000000'
                        }}>
                            Klashra Tours & Travels is more than just a company—it’s the realization of a lifelong dream shared by three childhood friends. Shareef Thoombath, Sadiq Ali, and Shuhaib Abdul Kareem grew up together, bonded by their shared love for exploring new places and cultures. What started as school trips and adventures during their youth evolved into a deep passion for travel that only grew stronger over the years.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Team Section */}
            <section className="bg-[#F5F5F5] py-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2
                        className="text-center mb-12"
                        style={{
                            fontFamily: 'Inter',
                            fontWeight: 600,
                            fontSize: '40px',
                            lineHeight: '80px',
                            letterSpacing: '-0.03em',
                            color: '#233F50'
                        }}
                    >
                        Our Team
                    </h2>

                    <div className="relative w-full max-w-[1025.17px] mx-auto overflow-hidden lg:overflow-visible">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 lg:px-0 justify-items-center">
                            {[...Array(8)].map((_, i) => (
                                <div
                                    key={i}
                                    className="relative group overflow-hidden rounded-2xl w-full"
                                    style={{ maxWidth: '230.79px', height: '273.06px' }}
                                >
                                    <div className="absolute inset-0 bg-gray-300">
                                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80" alt="Team Member" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white text-center">
                                        <h3 className="font-bold text-lg">Sadique</h3>
                                        <p className="text-xs text-gray-300">Ticketing Executive</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Carousel Arrows */}
                        <button className="absolute left-[-60px] top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hidden lg:block hover:bg-gray-50 transition-colors">
                            <span className="sr-only">Previous</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left text-gray-400"><path d="m15 18-6-6 6-6" /></svg>
                        </button>
                        <button className="absolute right-[-60px] top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hidden lg:block hover:bg-gray-50 transition-colors">
                            <span className="sr-only">Next</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right text-gray-400"><path d="m9 18 6-6-6-6" /></svg>
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;
