import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  Github,
  ExternalLink,
  Layout,
  SquareStack,
  Layers,
  BookOpen,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const NavigationMenu = () => {
  const navItems = [
    { name: "Foundations", href: "#foundations", icon: Layout },
    { name: "Components", href: "#components", icon: SquareStack },
    { name: "Patterns", href: "#patterns", icon: Layers },
    { name: "Resources", href: "#resources", icon: BookOpen },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur pl-6 pr-6">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image
              src={"/logo-diel-full.svg"}
              width={115}
              height={50}
              alt="Logo Diel"
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors space-x-2"
            >
              <Icon className="w-4 h-4" />
              <span>{name}</span>
            </a>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-4">
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map(({ name, href, icon: Icon }) => (
                  <a
                    key={name}
                    href={href}
                    className="flex items-center space-x-3 text-lg font-medium hover:text-blue-600 transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                    <span>{name}</span>
                  </a>
                ))}
                <Button className="mt-4">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default NavigationMenu;
