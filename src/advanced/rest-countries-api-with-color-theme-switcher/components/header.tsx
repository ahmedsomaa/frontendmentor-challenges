"use client";

// --------- EXTERNAL ---------
import { useTheme } from "next-themes";
import { MoonStar, SunDimIcon } from "lucide-react";

// --------- INTERNAL ---------
import { Button } from "./ui/button";

// --------- LAYOUT ---------
export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="w-full flex items-center justify-between bg-white dark:bg-slate-800 p-6 shadow-md">
      <h1 className="text-lg font-semibold">Where in the world ?</h1>
      <Button
        size="icon"
        variant="outline"
        className="bg-white dark:bg-slate-800 border-none shadow-none"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? <MoonStar /> : <SunDimIcon />}
      </Button>
    </header>
  );
}
