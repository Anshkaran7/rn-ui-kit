import { Button } from "@/components/ui/button";
import { Code2, Github } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header
      className="sticky top-0 z-50 w-full border-b backdrop-blur-lg shadow-lg"
      style={{
        backgroundColor: "rgba(255, 249, 229, 0.95)",
        borderColor: "#4A9782",
      }}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-3">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            style={{
              background: "linear-gradient(135deg, #004030 0%, #4A9782 100%)",
            }}
          >
            <Code2 className="h-5 w-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span
              className="text-lg font-bold"
              style={{
                background: "linear-gradient(to right, #004030, #4A9782)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              rn-ui-kit
            </span>
            <span className="text-xs font-medium" style={{ color: "#4A9782" }}>
              React Native Components
            </span>
          </div>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="#features"
            className="text-sm font-medium transition-all duration-200 hover:scale-105 relative group"
            style={{ color: "#004030" }}
          >
            Features
            <span
              className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
              style={{ backgroundColor: "#4A9782" }}
            ></span>
          </Link>
          <Link
            href="#components"
            className="text-sm font-medium transition-all duration-200 hover:scale-105 relative group"
            style={{ color: "#004030" }}
          >
            Components
            <span
              className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
              style={{ backgroundColor: "#4A9782" }}
            ></span>
          </Link>
          <Link
            href="#docs"
            className="text-sm font-medium transition-all duration-200 hover:scale-105 relative group"
            style={{ color: "#004030" }}
          >
            Documentation
            <span
              className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
              style={{ backgroundColor: "#4A9782" }}
            ></span>
          </Link>
        </nav>
        <Button
          variant="outline"
          size="sm"
          className="hover:scale-105 transition-all duration-300 font-medium"
          style={{
            borderColor: "#4A9782",
            color: "#004030",
            backgroundColor: "rgba(74, 151, 130, 0.1)",
          }}
        >
          <Github className="mr-2 h-4 w-4" />
          GitHub
        </Button>
      </div>
    </header>
  );
}
