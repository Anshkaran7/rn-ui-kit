import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Code2, Sparkles, Users } from "lucide-react";
import { SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";

export function EarlyAccessCTA() {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #004030, #4A9782, #004030)",
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center text-white">
          <div className="mb-6">
            <div className="h-12 w-12 mx-auto rounded-lg flex items-center ">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-lg shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #004030, #4A9782)",
                }}
              >
                <Code2 className="h-5 w-5 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl mb-4">
              Get Early Access
            </h2>
            <p
              className="text-base sm:text-lg mb-8 leading-relaxed font-medium"
              style={{ opacity: 0.9 }}
            >
              Be among the first developers to access our React Native UI
              components. Sign up now and get notified when we launch with
              exclusive early access.
            </p>
          </div>

          <div className="flex justify-center max-w-md mx-auto mb-8">
            <SignedOut>
              <SignUpButton mode="modal">
                <Button
                  variant="secondary"
                  size="lg"
                  className="h-12 px-8 shadow-lg hover:scale-105 transition-all duration-300 font-semibold rounded-lg"
                  style={{ backgroundColor: "#DCDD8", color: "#004030" }}
                >
                  <Users className="mr-2 h-4 w-4" />
                  Sign Up for Early Access
                </Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <div className="text-center">
                <div
                  className="inline-flex items-center px-6 py-3 rounded-lg font-semibold text-lg"
                  style={{ backgroundColor: "#DCDD8", color: "#004030" }}
                >
                  <Check className="mr-2 h-5 w-5" />
                  You're on the waitlist!
                </div>
              </div>
            </SignedIn>
          </div>

          <div
            className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm font-medium"
            style={{ opacity: 0.8 }}
          >
            <div className="flex items-center">
              <Check className="h-4 w-4 mr-2" />
              Free during beta
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 mr-2" />
              No spam, ever
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 mr-2" />
              Priority support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
