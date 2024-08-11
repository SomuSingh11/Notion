"use client";

import { ChevronsLeft, MenuIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useRef, useState, ElementRef } from "react";
import { useMediaQuery } from "usehooks-ts"; //Using to create breakpoint

import { cn } from "@/lib/utils";

export const Navigation = () => {
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width: 768px)"); // isMobile == true if the screen width is 768 pixels or less.

  const isResizingRef = useRef(false);
  const sidebarRef = useRef<ElementRef<"aside">>(null);
  const navbarRef = useRef<ElementRef<"div">>(null);
  const [isResetting, setResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(isMobile); //If we're on mobile, sidebar is collapsed

  return (
    <>
      {/* Sidebar */}
      <aside
        ref={sidebarRef}
        className={cn(
          "group/sidebar h-full bg-secondary overflow-y-auto relative flex flex-col w-60 z-[99999]",
          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "w-0"
        )}
      >
        <div
          role="button"
          className={cn(
            "h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition",
            isMobile && "opacity-100"
          )}
        >
          <ChevronsLeft className="h-6 w-6" />
        </div>

        <div>
          <p>Action Items</p>
        </div>

        <div className="mt-4">
          <p>Documents</p>
        </div>

        <div className="opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize absolute h-full w-1 top-0 right-0 bg-primary/10" />
      </aside>

      {/* Navbar */}
      <div
        ref={navbarRef}
        className={cn(
          "absolute top-0 z-[99999] left-60 w-[calc(100%-240px)]",
          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "left-0 w-full"
        )}
      >
        <nav className="bg-transparent px-3 py-2 w-full">
          {isCollapsed && (
            <MenuIcon role="button" className="h-6 w-6 text-muted-foreground" />
          )}
        </nav>
      </div>
    </>
  );
};

export default Navigation;
