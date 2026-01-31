import { useState } from "react";
import { MapPin, Calendar, Users, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SearchPanel = () => {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [travelers, setTravelers] = useState({ adults: 2, children: 0 });

  return (
    <div className="search-panel p-4 md:p-6 lg:p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {/* Destination */}
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
            Destination
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Where to?"
              className="w-full pl-10 pr-4 py-3 border border-border rounded-lg text-lg font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
        </div>

        {/* Travel Date */}
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
            Travel Date
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="Select dates"
              className="w-full pl-10 pr-4 py-3 border border-border rounded-lg text-lg font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
        </div>

        {/* Travelers */}
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
            Travelers
          </label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <div className="w-full pl-10 pr-4 py-3 border border-border rounded-lg cursor-pointer">
              <span className="text-lg font-medium">
                {travelers.adults} Adults
                {travelers.children > 0 && `, ${travelers.children} Children`}
              </span>
            </div>
          </div>
        </div>

        {/* Search Button */}
        <div className="flex items-end">
          <Button className="w-full btn-gold py-6 text-lg font-semibold rounded-lg">
            <Search className="h-5 w-5 mr-2" />
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};
