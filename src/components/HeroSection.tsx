import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code2,
  Download,
  FileText,
  Palette,
  Shield,
  Sparkles,
  Users,
  Check,
} from "lucide-react";
import { SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";

export function HeroSection() {
  const stats = [
    { number: "Soon", label: "Components", icon: Code2 },
    { number: "Early", label: "Access", icon: Users },
    { number: "2", label: "Design Systems", icon: Palette },
    { number: "100%", label: "TypeScript", icon: Shield },
  ];

  const features = [
    {
      color: "linear-gradient(135deg, #004030, #4A9782)",
    },
    {
      color: "linear-gradient(135deg, #004030, #4A9782)",
    },
    {
      color: "linear-gradient(135deg, #004030, #4A9782)",
    },
    {
      color: "linear-gradient(135deg, #004030, #4A9782)",
    },
  ];

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23004030' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex justify-center mb-4">
            <Badge
              variant="secondary"
              className="mb-2 border-0 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-3 py-1"
              style={{
                background: "linear-gradient(to right, #4A9782, #004030)",
              }}
            >
              <Sparkles className="mr-2 h-3 w-3" />
              <span className="font-medium text-sm">
                Early Access Available
              </span>
            </Badge>
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-4 leading-none">
            <span style={{ color: "#004030" }}>
              Beautiful UI Components for{" "}
            </span>
            <span
              className="inline-block px-4 py-2 rounded-2xl"
              style={{
                background: "linear-gradient(135deg, #2F5249, #437057)",
                color: "#fff",
                fontWeight: "800",
              }}
            >
              React Native
            </span>
          </h1>

          <p
            className="mx-auto mt-4 max-w-2xl text-base sm:text-lg leading-snug font-medium"
            style={{ color: "#004030", opacity: 0.8 }}
          >
            A comprehensive component library currently in development, offering
            two distinct design systems: elegant{" "}
            <span
              className="inline-block px-3 py-1 rounded-xl"
              style={{
                background: "linear-gradient(135deg, #B8E6B8, #90EE90)",
                color: "#1B4B36",
                fontWeight: "600",
              }}
            >
              Shadcn-inspired
            </span>{" "}
            components and bold Neo-Brutalism styles. Built for Expo and React
            Native apps.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-6 mb-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center space-y-1 sm:space-y-2"
              >
                <div
                  className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 rounded-xl flex items-center justify-center shadow-lg"
                  style={{
                    background: features[index % features.length].color,
                  }}
                >
                  <stat.icon className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-white" />
                </div>
                <div
                  className="text-sm sm:text-base md:text-lg lg:text-xl font-bold leading-none"
                  style={{ color: "#004030" }}
                >
                  {stat.number}
                </div>
                <div
                  className="text-xs sm:text-xs md:text-sm font-medium leading-none"
                  style={{ color: "#4A9782" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <SignedOut>
              <SignUpButton mode="modal">
                <Button
                  size="lg"
                  className="text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-8 py-3 border-0 font-semibold"
                  style={{
                    background: "linear-gradient(to right, #004030, #4A9782)",
                  }}
                >
                  <Users className="mr-2 h-4 w-4" />
                  Sign Up for Early Access
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <div
                className="inline-flex items-center px-8 py-3 rounded-lg shadow-lg font-semibold text-lg"
                style={{
                  background: "linear-gradient(to right, #004030, #4A9782)",
                  color: "white",
                }}
              >
                <Check className="mr-2 h-5 w-5" />
                You're on the waitlist!
              </div>
            </SignedIn>
            {/* Documentation coming soon */}
            {/* <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 hover:scale-105 transition-all duration-300 font-semibold"
              style={{
                borderColor: "#4A9782",
                color: "#004030",
                backgroundColor: "rgba(74, 151, 130, 0.1)",
              }}
            >
              <FileText className="mr-2 h-4 w-4" />
              View Documentation
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
