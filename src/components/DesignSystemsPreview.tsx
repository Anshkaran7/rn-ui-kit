import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Palette, Zap } from "lucide-react";

export function DesignSystemsPreview() {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24 relative"
      style={{ backgroundColor: "#FFF9E5" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl mb-4"
            style={{ color: "#004030" }}
          >
            Two Powerful Design Systems
          </h2>
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto font-medium"
            style={{ color: "#004030", opacity: 0.8 }}
          >
            Choose the style that matches your app's personality
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Shadcn Style */}
          <Card className="overflow-hidden border-0">
            <CardHeader
              className=""
              style={{
                background: "linear-gradient(135deg, #DCDD8, #FFF9E5)",
              }}
            >
              <div className="flex items-center space-x-3">
                <div
                  className="h-10 w-10 rounded-lg flex items-center justify-center shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, #004030, #4A9782)",
                  }}
                >
                  <Palette className="h-5 w-5 text-white" />
                </div>
                <div>
                  <CardTitle
                    className="text-lg font-bold"
                    style={{ color: "#004030" }}
                  >
                    Shadcn-Inspired
                  </CardTitle>
                  <CardDescription
                    className="text-sm font-medium"
                    style={{ color: "#004030", opacity: 0.7 }}
                  >
                    Clean & Modern Design
                  </CardDescription>
                </div>
              </div>
              <CardDescription
                className="text-sm leading-relaxed mt-3"
                style={{ color: "#004030", opacity: 0.8 }}
              >
                Clean, modern, and accessible components with subtle shadows
              </CardDescription>
            </CardHeader>
            <CardContent className="">
              <div className="space-y-4">
                <div
                  className="p-4 rounded-lg border shadow-inner"
                  style={{
                    backgroundColor: "#DCDD8",
                    borderColor: "#4A9782",
                  }}
                >
                  <div
                    className="h-10 bg-white border rounded-md flex items-center px-3 mb-3 shadow-sm"
                    style={{ borderColor: "#4A9782" }}
                  >
                    <span
                      className="text-sm font-medium"
                      style={{ color: "#004030", opacity: 0.6 }}
                    >
                      Enter your email
                    </span>
                  </div>
                  <div
                    className="h-10 text-white rounded-md flex items-center justify-center shadow-md font-semibold text-sm"
                    style={{
                      background: "linear-gradient(to right, #004030, #4A9782)",
                    }}
                  >
                    Get Started
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div
                    className="h-6 px-3 rounded-full flex items-center border font-medium text-white"
                    style={{
                      backgroundColor: "#4A9782",
                      borderColor: "#004030",
                    }}
                  >
                    <span className="text-xs">Primary</span>
                  </div>
                  <div
                    className="h-6 px-3 rounded-full flex items-center border font-medium text-white"
                    style={{
                      backgroundColor: "#fff",
                      borderColor: "#004030",
                    }}
                  >
                    <span className="text-xs text-[#4A9782]">Success</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Neo-Brutalism Style */}
          <Card className="overflow-hidden border-0">
            <CardHeader
              className=""
              style={{
                background: "linear-gradient(135deg, #4A9782, #DCDD8)",
              }}
            >
              <div className="flex items-center space-x-3">
                <div
                  className="h-10 w-10 rounded-lg flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: "#004030" }}
                >
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <div>
                  <CardTitle
                    className="text-lg font-bold"
                    style={{ color: "#004030" }}
                  >
                    Neo-Brutalism
                  </CardTitle>
                  <CardDescription
                    className="text-sm font-medium"
                    style={{ color: "#004030", opacity: 0.8 }}
                  >
                    Bold & Expressive Design
                  </CardDescription>
                </div>
              </div>
              <CardDescription
                className="text-sm leading-relaxed mt-3"
                style={{ color: "#004030", opacity: 0.8 }}
              >
                Bold, high-contrast design with thick borders vibrant colors
              </CardDescription>
            </CardHeader>
            <CardContent className="">
              <div className="space-y-4">
                <div
                  className="p-4 rounded-lg border-2 border-black shadow-lg"
                  style={{ backgroundColor: "#DCDD8" }}
                >
                  <div className="h-10 bg-white border-2 border-black rounded-none flex items-center px-3 mb-3">
                    <span
                      className="text-sm font-bold"
                      style={{ color: "#004030" }}
                    >
                      ENTER EMAIL
                    </span>
                  </div>
                  <div
                    className="h-10 border-2 border-black text-white rounded-none flex items-center justify-center font-bold text-sm"
                    style={{ backgroundColor: "#004030" }}
                  >
                    GET STARTED!
                  </div>
                </div>
                <div className="flex space-x-2">
                  <div
                    className="h-6 px-3 border border-black rounded-none flex items-center font-bold"
                    style={{ backgroundColor: "#4A9782" }}
                  >
                    <span className="text-xs text-white">PRIMARY</span>
                  </div>
                  <div
                    className="h-6 px-3 border border-black rounded-none flex items-center font-black"
                    style={{ backgroundColor: "#DCDD8" }}
                  >
                    <span className="text-xs" style={{ color: "#004030" }}>
                      SUCCESS
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
