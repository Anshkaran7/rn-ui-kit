import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  AlertTriangle,
  ArrowRight,
  Bell,
  ChevronDown,
  Code2,
  CreditCard,
  FileText,
  MessageSquare,
  Sliders,
  Tag,
  Type,
  User,
} from "lucide-react";

export function ComponentsPreview() {
  const components = [
    {
      name: "Input",
      icon: Type,
      description: "Text input fields with validation",
      color: "linear-gradient(135deg, #004030, #4A9782)",
    },
    {
      name: "Button",
      icon: Code2,
      description: "Interactive buttons with variants",
      color: "linear-gradient(135deg, #004030, #4A9782)",
    },
    {
      name: "Toast",
      icon: Bell,
      description: "Notification messages",
      color: "linear-gradient(135deg, #004030, #4A9782)",
    },
    {
      name: "Card",
      icon: CreditCard,
      description: "Content containers with shadows",
      color: "linear-gradient(135deg, #004030, #4A9782)",
    },
    {
      name: "Badge",
      icon: Tag,
      description: "Status indicators and labels",
      color: "linear-gradient(135deg, #004030, #4A9782)",
    },
    {
      name: "Input with Label",
      icon: FileText,
      description: "Labeled form inputs",
      color: "linear-gradient(135deg, #004030, #4A9782)",
    },
    {
      name: "Alert",
      icon: AlertTriangle,
      description: "Important messages",
      color: "linear-gradient(135deg, #004030, #4A9782)",
    },
    {
      name: "Accordion",
      icon: ChevronDown,
      description: "Collapsible content sections",
      color: "linear-gradient(135deg, #004030, #4A9782)",
    },
    {
      name: "Text Area",
      icon: MessageSquare,
      description: "Multi-line text input",
      color: "linear-gradient(135deg, #004030, #4A9782)",
    },
    {
      name: "Avatar",
      icon: User,
      description: "User profile images",
      color: "linear-gradient(135deg, #004030, #4A9782)",
    },
    {
      name: "Slider",
      icon: Sliders,
      description: "Range input controls",
      color: "linear-gradient(135deg, #004030, #4A9782)",
    },
  ];

  return (
    <section
      id="components"
      className="py-16 sm:py-20 lg:py-24 relative"
      style={{ backgroundColor: "#FFF9E5" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl mb-4"
            style={{ color: "#004030" }}
          >
            11 Essential Components
          </h2>
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto font-medium"
            style={{ color: "#004030", opacity: 0.8 }}
          >
            Everything you need to build beautiful mobile interfaces
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-6xl mx-auto">
          {components.map((component, index) => {
            const IconComponent = component.icon;

            return (
              <Card
                key={component.name}
                style={{
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  border: "none",
                }}
                className=" cursor-pointer"
              >
                <CardContent className=" text-center flex flex-row items-center w-full gap-x-3">
                  <div className="flex justify-center">
                    <div
                      className="h-12 w-12 rounded-lg flex items-center justify-center"
                      style={{ background: component.color }}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-start flex flex-col ">
                    <h3
                      className="font-bold text-base "
                      style={{ color: "#004030" }}
                    >
                      {component.name}
                    </h3>
                    <p
                      className="text-sm leading-relaxed font-medium"
                      style={{ color: "#004030", opacity: 0.7 }}
                    >
                      {component.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="group bg-transparent px-8 py-3 hover:scale-105 transition-all duration-300 font-semibold"
            style={{
              borderColor: "#4A9782",
              color: "#004030",
              backgroundColor: "rgba(74, 151, 130, 0.1)",
            }}
          >
            <Code2 className="mr-2 h-4 w-4" />
            View All Components
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div> */}
      </div>
    </section>
  );
}
