import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HotelListing from "./pages/HotelListing";
import HotelDetails from "./pages/HotelDetails";
import HotelBooking from "./pages/HotelBooking";
import Checkout from "./pages/Checkout";
import Index from "./pages/Index";
import Visa from "./pages/Visa";
import VisaDetails from "./pages/VisaDetails";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Blog from "./pages/Blog";
import Packages from "./pages/Packages";
import PackageDetails from "./pages/PackageDetails";

import PackageBooking from "./pages/PackageBooking";
import PackageCheckout from "./pages/PackageCheckout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/visa" element={<Visa />} />
          <Route path="/visa/:countryId" element={<VisaDetails />} />
          {/* Hotel Routes */}
          <Route path="/hotel" element={<Index />} />
          <Route path="/hotel/search" element={<HotelListing />} />
          <Route path="/hotel/booking" element={<HotelBooking />} />
          <Route path="/hotel/checkout" element={<Checkout />} />
          <Route path="/hotel/:hotelId" element={<HotelDetails />} />

          <Route path="/activities" element={<Index />} />
          <Route path="/flight" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/package-details" element={<PackageDetails />} />
          <Route path="/package/booking" element={<PackageBooking />} />
          <Route path="/package/checkout" element={<PackageCheckout />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
