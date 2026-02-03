import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const blogPosts = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
        date: "Nov 14, 2022",
        title: "2023 Travel Trends - what you need to know",
        description: "2023 taught us valuable life lessons. Plans don't always work out, flexibility in life is key, and..."
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80",
        date: "Nov 14, 2022",
        title: "2023 Travel Trends - what you need to know",
        description: "2023 taught us valuable life lessons. Plans don't always work out, flexibility in life is key, and..."
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=800&q=80",
        date: "Nov 14, 2022",
        title: "2023 Travel Trends - what you need to know",
        description: "2023 taught us valuable life lessons. Plans don't always work out, flexibility in life is key, and..."
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=800&q=80",
        date: "Nov 14, 2022",
        title: "2023 Travel Trends - what you need to know",
        description: "2023 taught us valuable life lessons. Plans don't always work out, flexibility in life is key, and..."
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        date: "Nov 14, 2022",
        title: "2023 Travel Trends - what you need to know",
        description: "2023 taught us valuable life lessons. Plans don't always work out, flexibility in life is key, and..."
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
        date: "Nov 14, 2022",
        title: "2023 Travel Trends - what you need to know",
        description: "2023 taught us valuable life lessons. Plans don't always work out, flexibility in life is key, and..."
    }
];

const Blog = () => {
    return (
        <div className="min-h-screen bg-white pt-20 overflow-x-hidden">
            <Navigation />

            {/* Hero Section */}
            <div className="relative h-[250px] w-full">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=80')`
                    }}
                />
                <div className="absolute inset-0 bg-black/50" />

                <div className="relative h-full flex items-center justify-center text-center px-4">
                    <h1
                        style={{
                            fontFamily: "Inter",
                            fontWeight: 600,
                            fontSize: "clamp(32px, 8vw, 74px)",
                            lineHeight: "1.1",
                            letterSpacing: "-0.03em",
                            background: "linear-gradient(180deg, #98D5D4 0%, #FFFFFF 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            width: "100%",
                            maxWidth: "153px",
                            textAlign: "center",
                        }}
                    >
                        Blog
                    </h1>
                </div>
            </div>

            {/* Content Section */}
            <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
                <h2
                    className="mb-12"
                    style={{
                        fontFamily: "Inter",
                        fontWeight: 600,
                        fontSize: "40px",
                        letterSpacing: "-0.03em",
                        color: "#233F50",
                    }}
                >
                    Our Travel Memories
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 justify-items-center">
                    {blogPosts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-white rounded-[18px] overflow-hidden shadow-[0px_10px_35px_0px_#00000026] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full max-w-[392px] min-h-[374px] flex flex-col"
                        >
                            <div className="h-[200px] shrink-0 overflow-hidden rounded-[18px] m-0">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <span className="text-[#9CA3AF] text-xs font-medium mb-2 block">{post.date}</span>
                                <h3
                                    className="text-[20px] leading-[1.3] font-bold mb-2 text-[#233F50] line-clamp-2"
                                    style={{ fontFamily: "Inter" }}
                                >
                                    {post.title}
                                </h3>
                                <p className="text-[#6B7280] text-[14px] leading-relaxed line-clamp-3">
                                    {post.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Blog;
