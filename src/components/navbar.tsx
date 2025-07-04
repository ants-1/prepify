"use client";

import Link from "next/link";
import { Menu, ChefHat, Calendar, ShoppingCart, BookOpen, User, Settings, LogOut, Notebook } from "lucide-react";

import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "./mode-toggle";
import { useState } from "react";

const navigationItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Calendar
  },
  {
    title: "Meal Plans",
    href: "/meal-plans",
    icon: Notebook
  },
  {
    title: "Recipes",
    href: "/recipes",
    icon: BookOpen
  },
  {
    title: "Shopping List",
    href: "/shopping-list",
    icon: ShoppingCart
  },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 ">
          <ChefHat className="h-6 w-6 text-orange-600" />
          <span className="font-bold text-xl">Prepify</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-centern h-6 mt-2 space-x-1 text-sm font-medium transition-colors hover:hover:text-orange-600 hover:border-b-2 hover:border-orange-600 transition duration-200 ease-in-out"
            >
              <item.icon className="h-4 w-4" />
              <span>{item.title}</span>
            </Link>
          ))}
        </nav>

        <div className="flex gap-2">
          {/* Desktop User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8 cursor-pointer">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 " align="end" forceMount>
                <DropdownMenuItem className="cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" className="cursor-pointer" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] px-4">
              <SheetHeader className="pb-0">
                <SheetTitle className="flex items-center space-x-2">
                  <ChefHat className="h-6 w-6 text-orange-600" />
                  <span className="font-bold">Prepify</span>
                </SheetTitle>
                <SheetDescription>Plan your meals, discover recipes, and organize your shopping.</SheetDescription>
              </SheetHeader>
              <div className="flex flex-col space-y-1 px-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center space-x-3 text-lg font-medium transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    <Button variant="ghost" className="justify-start px-0 w-full cursor-pointer hover:text-orange-600">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Button>
                  </Link>
                ))}
                <div className="border-t pt-4 mt-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="" alt="User" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">John Doe</p>
                      <p className="text-sm text-muted-foreground">john@example.com</p>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <Link
                      href="/profile"
                      className="flex items-center space-x-3 text-sm font-medium transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <Button variant="ghost" className="justify-start px-0 w-full cursor-pointer hover:text-orange-600">
                        <User className="h-4 w-4" />
                        <span>Profile</span>
                      </Button>
                    </Link>
                    <Link
                      href="/settings"
                      className="flex items-center space-x-3 text-sm font-medium transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <Button variant="ghost" className="justify-start px-0 w-full cursor-pointer  hover:text-orange-600">
                        <Settings className="h-4 w-4" />
                        <span>Settings</span>
                      </Button>
                    </Link>
                    <Button variant="ghost" className="justify-start px-0 w-full cursor-pointer  hover:text-orange-600" onClick={() => setIsOpen(false)}>
                      <LogOut className="h-4 w-4"/>
                      <span>Log Out</span>
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <ModeToggle />
        </div>
      </div>
    </header>
  )
}