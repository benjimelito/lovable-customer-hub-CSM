import { StickyNavWrapper } from "./StickyNavWrapper";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = ({ className }: { className?: string }) => {
  return (
    <StickyNavWrapper className={className}>
      <div className="flex w-full items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center">
            <img
              src="/images/lovable-logo-text-light.svg"
              alt="Lovable"
              className="h-5 w-auto"
            />
          </a>

          {/* Navigation Items */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#"
              className="text-sm font-normal text-foreground transition-colors hover:text-foreground/80"
            >
              Pricing
            </a>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-auto px-0 py-0 bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent text-sm font-normal text-foreground">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[500px] p-6">
                      <div className="grid grid-cols-2 gap-8">
                        <div>
                          <p className="text-xs font-medium text-muted-foreground mb-4">
                            BY PERSONA
                          </p>
                          <ul className="space-y-3">
                            <li>
                              <a
                                href="#"
                                className="text-sm text-foreground hover:text-foreground/80 transition-colors"
                              >
                                Founder
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-sm text-foreground hover:text-foreground/80 transition-colors"
                              >
                                Product Manager
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-sm text-foreground hover:text-foreground/80 transition-colors"
                              >
                                Designer
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-sm text-foreground hover:text-foreground/80 transition-colors"
                              >
                                Marketer
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-sm text-foreground hover:text-foreground/80 transition-colors"
                              >
                                Enterprise
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-muted-foreground mb-4">
                            BY USE CASE
                          </p>
                          <ul className="space-y-3">
                            <li>
                              <a
                                href="#"
                                className="text-sm text-foreground hover:text-foreground/80 transition-colors"
                              >
                                Consumer Apps
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-sm text-foreground hover:text-foreground/80 transition-colors"
                              >
                                B2B Apps
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-sm text-foreground hover:text-foreground/80 transition-colors"
                              >
                                Prototypes
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-sm text-foreground hover:text-foreground/80 transition-colors"
                              >
                                Internal tools
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="text-sm text-foreground hover:text-foreground/80 transition-colors"
                              >
                                Integrations
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <a
              href="#"
              className="text-sm font-normal text-foreground transition-colors hover:text-foreground/80"
            >
              Enterprise
            </a>

            <a
              href="#"
              className="text-sm font-normal text-foreground transition-colors hover:text-foreground/80"
            >
              Community
            </a>
          </nav>
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-sm font-normal">
            Log in
          </Button>
          <Button size="sm" className="text-sm font-normal">
            Get started
          </Button>
        </div>
      </div>
    </StickyNavWrapper>
  );
};
export default Navigation;
