import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { CircleUserRound, Search, ShoppingCart } from "lucide-react";
import { Badge } from "./ui/badge";
import { useStore } from "@/stores";

const Navbar = () => {
  const { count } = useStore((state) => state);
  return (
    <nav className="bg-background items-center border-2">
      <div className="flex items-center justify-between p-4 w-[1280px] m-auto">
        <Link to="/dashboard" className="text-xl font-bold text-primary">
          WEB-APP
        </Link>

        {/* Navigation Menu  Home | CLOTHINGS | ACCESSORIES*/}
        <NavigationMenu>
          <NavigationMenuList className="flex gap-8">
            <NavigationMenuItem>
              <Link
                to="/dashboard"
                className="text-sm font-medium hover:text-primary"
              >
                HOME
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                to="/about"
                className="text-sm font-medium hover:text-primary"
              >
                CLOTHINGS
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                to="/docs"
                className="text-sm font-medium hover:text-primary"
              >
                ACCESSORIES
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Navigation Menu  SEARCH | CARTS | PERSON*/}
        <NavigationMenu>
          <NavigationMenuList className="flex gap-8">
            <NavigationMenuItem>
              <Search size={25} />
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Badge
                variant="default"
                className="absolute -top-3 -right-5 text-xs"
              >
                {count}
              </Badge>
              <ShoppingCart size={25} />
            </NavigationMenuItem>

            <NavigationMenuItem>
              <CircleUserRound size={25} />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default Navbar;
