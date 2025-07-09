"use client";

import * as React from "react";
import { Menu, Bell, Moon, Sun, User, LogOut } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "next-themes";
import { ProfileDropdown } from "./ProfileDropdown";

const Navbar = () => {
  const { setTheme, theme } = useTheme();

  return (
    <header className="w-full border-b bg-background shadow-sm px-4 py-2 flex items-center justify-between">
      {/* Left: Sidebar toggle */}
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-5 w-5" />
        </Button>
        <h2 className="text-lg font-semibold text-muted-foreground">
          Dashboard
        </h2>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>

        {/* Notifications */}
        <Button variant="ghost" size="icon">
          <Bell className="w-5 h-5" />
          <span className="sr-only">Notifications</span>
        </Button>

        {/* Profile Dropdown */}
        <ProfileDropdown
          user={{
            name: "Jane Doe",
            email: "jane@example.com",
            role: "Administrator",
            avatarUrl: "/jane.png",
          }}
        />
      </div>
    </header>
  );
};

export default Navbar;
