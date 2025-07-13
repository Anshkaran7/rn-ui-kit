import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Palette, Shield, Smartphone, Users, Zap } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: Smartphone,
      title: "React Native Ready",
      description:
        "Built specifically for React Native and Expo with platform-specific optimizations",
      color: "linear-gradient(135deg, #004030, #4A9782)",
    },
    {
      icon: Code2,
      title: "TypeScript First",
      description:
        "Full TypeScript support with comprehensive type definitions and IntelliSense",
      color: "linear-gradient(135deg, #004030, #4A9782)",
    },
    {
      icon: Palette,
      title: "Customizable Themes",
      description:
        "Easy theming system with design tokens and runtime theme switching",
      color: "linear-gradient(135deg, #004030, #4A9782)",
    },
    {
      icon: Shield,
      title: "Accessible Design",
      description:
        "Built with accessibility in mind, following WCAG guidelines and screen readers",
      color: "linear-gradient(135deg, #004030, #4A9782)",
    },
    {
      icon: Zap,
      title: "Performance Optimized",
      description:
        "Lightweight components with minimal bundle size and optimized rendering",
      color: "linear-gradient(135deg, #004030, #4A9782)",
    },
    {
      icon: Users,
      title: "Community Driven",
      description:
        "Open source with active community contributions and regular updates",
      color: "linear-gradient(135deg, #004030, #4A9782)",
    },
  ];

  return (
    <section
      id="features"
      className="py-16 sm:py-20 lg:py-24 relative"
      style={{
        background:
          "linear-gradient(135deg, #DCDD8 0%, #FFF9E5 50%, #DCDD8 100%)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl mb-4"
            style={{ color: "#004030" }}
          >
            Everything You Need to Build Faster
          </h2>
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto font-medium leading-relaxed"
            style={{ color: "#004030", opacity: 0.8 }}
          >
            Production-ready components with TypeScript support and
            comprehensive documentation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 gap-1">
              <CardHeader className="text-center">
                <div
                  className="h-12 w-12 rounded-lg flex items-center justify-center mx-auto"
                  style={{ background: feature.color }}
                >
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle
                  className="text-lg font-bold"
                  style={{ color: "#004030" }}
                >
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p
                  className="leading-relaxed font-medium text-sm"
                  style={{ color: "#004030", opacity: 0.8 }}
                >
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
