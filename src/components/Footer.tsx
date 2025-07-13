import { Separator } from "@/components/ui/separator";
import { Code2 } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer
      className="border-t relative"
      style={{ backgroundColor: "#FFF9E5", borderColor: "#4A9782" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-lg shadow-lg"
              style={{
                background: "linear-gradient(135deg, #004030, #4A9782)",
              }}
            >
              <Code2 className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span
                className="font-bold text-lg"
                style={{
                  background: "linear-gradient(to right, #004030, #4A9782)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                rn-ui-kit
              </span>
              <span
                className="text-xs font-medium"
                style={{ color: "#4A9782" }}
              >
                React Native Components
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 text-sm font-medium">
            <Link
              href="#"
              className="transition-all duration-200 text-center sm:text-left hover:scale-105 hover:underline"
              style={{ color: "#004030" }}
            >
              Documentation
            </Link>
            <Link
              href="#"
              className="transition-all duration-200 text-center sm:text-left hover:scale-105 hover:underline"
              style={{ color: "#004030" }}
            >
              GitHub
            </Link>
            <Link
              href="#"
              className="transition-all duration-200 text-center sm:text-left hover:scale-105 hover:underline"
              style={{ color: "#004030" }}
            >
              Contact
            </Link>
          </div>
        </div>

        <Separator className="my-6" style={{ backgroundColor: "#4A9782" }} />

        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p
            className="text-sm font-medium mb-4 sm:mb-0"
            style={{ color: "#004030", opacity: 0.7 }}
          >
            © 2024 rn-ui-kit. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="text-xs hover:scale-105 transition-transform"
              style={{ color: "#4A9782" }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs hover:scale-105 transition-transform"
              style={{ color: "#4A9782" }}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
