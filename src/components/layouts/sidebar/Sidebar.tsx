"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Ticket,
  FileText,
  Lock,
  ChevronDown,
  ChevronRight,
  Settings,
} from "lucide-react";

import { cn } from "@/lib/utils";

type Role = "superadmin" | "admin" | "support";

const menuItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    roles: ["superadmin", "admin", "support"],
  },
  {
    label: "User Management",
    icon: Users,
    roles: ["superadmin", "admin"],
    children: [
      { label: "Manage Users", href: "/users/manage" },
      { label: "Add User", href: "/users/add" },
      { label: "Registration Requests", href: "/users/requests" },
    ],
  },
  {
    label: "Ticket Management",
    icon: Ticket,
    href: "/tickets",
    roles: ["superadmin", "support"],
  },
  {
    label: "Subscription Plans",
    icon: Settings,
    href: "/subscriptions",
    roles: ["superadmin"],
  },
  {
    label: "Static Pages",
    icon: FileText,
    href: "/pages",
    roles: ["superadmin"],
  },
  {
    label: "Roles & Permissions",
    icon: Lock,
    roles: ["superadmin"],
    children: [
      { label: "Manage Roles", href: "/roles" },
      { label: "Permissions", href: "/permissions" },
    ],
  },
];

const Sidebar = ({ role = "superadmin" as Role }) => {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleExpand = (label: string) => {
    setExpanded(expanded === label ? null : label);
  };

  return (
    <nav className="h-full px-4 py-6 w-60 bg-background border-r text-sm text-foreground space-y-2 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4 text-indigo-600">CryptoAuth</h2>
      {menuItems
        .filter((item) => item.roles.includes(role))
        .map((item) => (
          <div key={item.label}>
            {item.children ? (
              <div>
                <button
                  onClick={() => toggleExpand(item.label)}
                  className={cn(
                    "w-full flex items-center justify-between py-2 px-3 rounded-md hover:bg-muted transition",
                    expanded === item.label && "bg-muted"
                  )}
                >
                  <span className="flex items-center gap-2">
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </span>
                  {expanded === item.label ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </button>
                {expanded === item.label && (
                  <div className="ml-6 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className={cn(
                          "block px-3 py-1.5 rounded hover:bg-muted text-foreground transition",
                          pathname === child.href && "bg-muted font-semibold"
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                href={item.href!}
                className={cn(
                  "flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition",
                  pathname === item.href && "bg-muted font-semibold"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            )}
          </div>
        ))}
    </nav>
  );
};

export default Sidebar;
