import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Contact = () => {
    return (
        <div className="min-h-screen bg-white pt-20">
            <Navigation />

            {/* Hero Section */}
            <div
                className="h-[250px] relative bg-cover bg-center"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80")'
                }}
            >
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative h-full flex items-center justify-center">
                    <h1
                        style={{
                            fontFamily: "Inter",
                            fontWeight: 700,
                            fontSize: "clamp(40px, 8vw, 74px)",
                            lineHeight: "1",
                            letterSpacing: "-0.03em",
                            background: "linear-gradient(180deg, #98D5D4 0%, #FFFFFF 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            width: "100%",
                            textAlign: "center",
                        }}
                    >
                        Contact Us
                    </h1>
                </div>
            </div>

            {/* Branch Address Section */}
            <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
                <h2 className="text-[#233F50] text-3xl font-bold mb-10">Branch Address</h2>

                <div className="flex flex-wrap lg:flex-nowrap justify-center gap-5 mb-16 px-4 md:px-0">
                    {/* Dubai Card */}
                    <div
                        className="bg-[#EFEFEF] rounded-[15px] text-center flex flex-col items-center justify-center px-4 py-8 w-full lg:w-1/2"
                        style={{ minHeight: '158px' }}
                    >
                        <h3
                            className="mb-1"
                            style={{
                                fontFamily: 'Inter',
                                fontWeight: 600,
                                fontSize: 'clamp(24px, 4vw, 30px)',
                                lineHeight: '1.2',
                                letterSpacing: '-0.03em',
                                color: '#233E50'
                            }}
                        >
                            Dubai UAE
                        </h3>
                        <div
                            style={{
                                fontFamily: 'Inter',
                                fontWeight: 400,
                                fontSize: 'clamp(16px, 3vw, 23px)',
                                lineHeight: '1.3',
                                letterSpacing: '-0.03em',
                                textTransform: 'capitalize',
                                color: '#233E50',
                                maxWidth: '552px'
                            }}
                        >
                            <p className="mb-0">
                                Office No 1M22, M Floor, New Al Safiya Building, Near Abu Hail Metro Station Abuhail, Dubai, UAE
                            </p>
                            <p className="font-semibold text-lg md:text-xl mt-2">+971 52 385 1234</p>
                        </div>
                    </div>

                    {/* Kerala Card */}
                    <div
                        className="bg-white border border-gray-200 rounded-[15px] text-center flex flex-col items-center justify-center px-4 py-8 shadow-sm w-full lg:w-1/2"
                        style={{ minHeight: '158px' }}
                    >
                        <h3
                            className="mb-1"
                            style={{
                                fontFamily: 'Inter',
                                fontWeight: 600,
                                fontSize: 'clamp(24px, 4vw, 30px)',
                                lineHeight: '1.2',
                                letterSpacing: '-0.03em',
                                color: '#233E50'
                            }}
                        >
                            Kerala India
                        </h3>
                        <div
                            style={{
                                fontFamily: 'Inter',
                                fontWeight: 400,
                                fontSize: 'clamp(16px, 3vw, 23px)',
                                lineHeight: '1.3',
                                letterSpacing: '-0.03em',
                                textTransform: 'capitalize',
                                color: '#233E50',
                                maxWidth: '552px'
                            }}
                        >
                            <p className="mb-0">
                                Thoppil Arcade, Malappuram Road, Puthoor (PO) Kottakkal, Malappuram, Kerala - 676503
                            </p>
                            <p className="font-semibold text-lg md:text-xl mt-2">+91 97474 78330</p>
                        </div>
                    </div>
                </div>

                {/* Map */}
                <div className="w-full h-[450px] bg-gray-200 rounded-xl overflow-hidden shadow-md">
                    <iframe
                        src="https://maps.google.com/maps?q=Al%20Safiya%20Building%20Dubai&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Location Map"
                    ></iframe>
                </div>
            </section>

            {/* Enquiry Section */}
            <section className="bg-[#F5F5F5] py-20 px-6 md:px-16 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <h2
                        className="mb-10"
                        style={{
                            fontFamily: 'Inter',
                            fontWeight: 600,
                            fontSize: '40px',
                            lineHeight: '80px',
                            letterSpacing: '-0.03em',
                            color: '#233F50'
                        }}
                    >
                        Enquiry
                    </h2>

                    <form className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                        {/* Row 1 */}
                        <div>
                            <input
                                type="text"
                                placeholder="First name"
                                className="w-full h-[53px] max-w-[600px] p-4 rounded-[7px] bg-white border border-[#DBDBDB] focus:outline-none focus:ring-2 focus:ring-[#233F50]/20 text-gray-700 placeholder-gray-400 text-base md:text-[20px] placeholder:text-base md:placeholder:text-[20px]"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Last name"
                                className="w-full h-[53px] max-w-[600px] p-4 rounded-[7px] bg-white border border-[#DBDBDB] focus:outline-none focus:ring-2 focus:ring-[#233F50]/20 text-gray-700 placeholder-gray-400 text-base md:text-[20px] placeholder:text-base md:placeholder:text-[20px]"
                            />
                        </div>

                        {/* Row 2 */}
                        <div>
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full h-[53px] max-w-[600px] p-4 rounded-[7px] bg-white border border-[#DBDBDB] focus:outline-none focus:ring-2 focus:ring-[#233F50]/20 text-gray-700 placeholder-gray-400 text-base md:text-[20px] placeholder:text-base md:placeholder:text-[20px]"
                            />
                        </div>
                        <div>
                            <input
                                type="tel"
                                placeholder="Phone number"
                                className="w-full h-[53px] max-w-[600px] p-4 rounded-[7px] bg-white border border-[#DBDBDB] focus:outline-none focus:ring-2 focus:ring-[#233F50]/20 text-gray-700 placeholder-gray-400 text-base md:text-[20px] placeholder:text-base md:placeholder:text-[20px]"
                            />
                        </div>

                        {/* Row 3 - Complex */}
                        <div className="flex flex-col gap-4">
                            <div>
                                <label
                                    className="block mb-2"
                                    style={{
                                        fontFamily: 'Inter',
                                        fontWeight: 600,
                                        fontSize: 'clamp(18px, 3vw, 24px)',
                                        color: '#233F50'
                                    }}
                                >
                                    What are you Looking For ?
                                </label>
                                <div className="relative max-w-[600px]">
                                    <select className="w-full h-[53px] px-4 rounded-[7px] bg-white border border-[#DBDBDB] focus:outline-none focus:ring-2 focus:ring-[#233F50]/20 text-gray-500 appearance-none cursor-pointer text-base md:text-[20px]">
                                        <option>Select category</option>
                                        <option>Holidays</option>
                                        <option>Flights</option>
                                        <option>Hotels</option>
                                        <option>Visa</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="m6 9 6 6 6-6" /></svg>
                                    </div>
                                </div>
                            </div>
                            <button
                                className="w-full h-[53px] max-w-[600px] bg-[#233F50] text-white rounded-[7px] font-bold text-xl hover:bg-[#1a303d] transition-colors mt-2"
                                style={{
                                    fontFamily: 'Inter'
                                }}
                            >
                                Enquiry Now
                            </button>
                        </div>

                        <div className="w-full max-w-[600px]">
                            <textarea
                                placeholder="Your Query"
                                className="w-full h-full min-h-[180px] p-4 rounded-[7px] bg-white border border-[#DBDBDB] focus:outline-none focus:ring-2 focus:ring-[#233F50]/20 text-gray-700 resize-none text-base md:text-[20px] placeholder-[#7B7B7B] md:placeholder:text-[21px] placeholder:font-light placeholder:leading-none"
                            ></textarea>
                        </div>
                    </form>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;
