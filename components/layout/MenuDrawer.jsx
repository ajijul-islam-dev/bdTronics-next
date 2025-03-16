import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronRight } from "lucide-react";

const categories = [
  { title: "DAILY DEALS", subCategories: [] },
  { title: "New Products", subCategories: [] },
  { title: "Custom Services", subCategories: [] },
  {
    title: "Arduino, SBC & Prototyping",
    subCategories: ["Arduino Boards", "Raspberry Pi", "Development Kits"],
  },
  {
    title: "3D Printer, CNC, Laser & Spare Parts",
    subCategories: ["3D Printers", "CNC Machines", "Laser Engravers"],
  },
  {
    title: "Power Supplies & SMPS",
    subCategories: ["AC-DC Adapters", "Battery Chargers", "Power Modules"],
  },
  {
    title: "Battery, Solar & Inverter",
    subCategories: ["Lithium Batteries", "Solar Panels", "Inverters"],
  },
  {
    title: "Displays (LED/LCD/OLED)",
    subCategories: ["OLED Displays", "LCD Screens", "Touch Panels"],
  },
  {
    title: "Components",
    subCategories: ["Resistors", "Capacitors", "Transistors"],
  },
  { title: "SMD Components", subCategories: [] },
];

const MenuDrawer = ({ children }) => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent side="left" className="w-full p-0">
        <SheetHeader className="bg-primary text-white p-4">
          <SheetTitle className="text-lg">Shop by category</SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-[80vh]">
          <ul className="divide-y">
            {categories.map((category, index) => (
              <li key={index} className="px-4">
                {/* Category Item */}
                <div
                  className="py-3 flex justify-between items-center hover:bg-gray-100 cursor-pointer"
                  onClick={() => toggleCategory(index)}
                >
                  <span className={index === 0 ? "font-semibold" : ""}>
                    {category.title}
                  </span>
                  {category.subCategories.length > 0 && (
                    <ChevronRight
                      className={`w-4 h-4 text-gray-500 transition-transform ${
                        openCategory === index ? "rotate-90" : ""
                      }`}
                    />
                  )}
                </div>

                {/* Subcategories (Collapsible) */}
                {openCategory === index &&
                  category.subCategories.length > 0 && (
                    <ul className="pl-6 bg-gray-50 transition-all duration-300">
                      {category.subCategories.map((sub, subIndex) => (
                        <li
                          key={subIndex}
                          className="py-2 px-4 hover:bg-gray-200 cursor-pointer"
                        >
                          {sub}
                        </li>
                      ))}
                    </ul>
                  )}
              </li>
            ))}
          </ul>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default MenuDrawer;
