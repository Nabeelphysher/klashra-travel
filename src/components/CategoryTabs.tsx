import { Link, useLocation } from "react-router-dom";
import { Palmtree, Activity, Plane, Hotel, FileText } from "lucide-react";

const categories = [
  { label: "Holidays", path: "/", icon: Palmtree },
  { label: "Activities", path: "/activities", icon: Activity },
  { label: "Flight", path: "/flight", icon: Plane },
  { label: "Visa", path: "/visa", icon: FileText },
  { label: "Hotel", path: "/hotel", icon: Hotel },
];

export const CategoryTabs = () => {
  const location = useLocation();

  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-3">
      {categories.map((category) => {
        const isActive = location.pathname === category.path;
        const Icon = category.icon;
        
        return (
          <Link
            key={category.path}
            to={category.path}
            className={`
              flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium
              transition-all duration-200
              ${isActive ? "tab-active" : "tab-inactive"}
            `}
          >
            <Icon className="h-4 w-4 md:h-5 md:w-5" />
            <span>{category.label}</span>
          </Link>
        );
      })}
    </div>
  );
};
