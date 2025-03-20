import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { CircleUserRound, Search, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-background items-center border-2">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-xl font-bold text-primary">
          MyApp
        </Link>

        {/* Navigation Menu  Home | CLOTHINGS | ACCESSORIES*/}
        <NavigationMenu>
          <NavigationMenuList className="flex gap-8">
            <NavigationMenuItem>
              <Link to="/" className="text-sm font-medium hover:text-primary">
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
          <NavigationMenuList className="flex gap-5">
            <NavigationMenuItem>
              <Link to="/docs">
                <Search size={25} />
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/docs">
                <ShoppingCart size={25} />
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/docs">
                <CircleUserRound size={25} />
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default Navbar;
