import Link from "next/link";
import React from "react";
import { Button } from "../../ui/button";
import SearchInput from "./search-input";
import ToggleMode from "./toggle-mode";


const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 w-full border border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* left section */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  Nish
                </span>
                <span className="text-foreground">Code</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/articles"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Articles
            </Link>
            <Link
              href="/tutorials"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Tutorials
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="/dashboard"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Dashboard
            </Link>
          </div>

          {/* Right Section - Search & Actions */}
          <div className="flex items-center gap-4">
            <SearchInput />

            <ToggleMode />

            <div className="hidden md:flex items-center gap-2">
              <Button>Login</Button>
              <Button>Signup</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
