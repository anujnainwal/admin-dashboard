"use client";

import React from "react";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";

const CustomLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full bg-muted text-foreground flex flex-col">
      {/* Grid wrapper */}
      <div className="grid grid-cols-[240px_1fr] grid-rows-[auto_1fr_auto] flex-grow">
        {/* Sidebar */}
        <aside className="row-span-3 border-r bg-background shadow-md z-10">
          <Sidebar role="superadmin" />
        </aside>

        {/* Top Navbar */}
        <header className="col-span-1 border-b bg-background shadow-sm sticky top-0 z-20">
          <Navbar />
        </header>

        {/* Main content */}
        <main className="p-6 bg-muted overflow-y-auto max-h-[calc(100vh-64px-48px)]">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>

        {/* Footer */}
        <footer className="col-span-1 bg-background border-t text-center py-4 text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} CryptoAuth. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default CustomLayout;
