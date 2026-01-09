import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Zap, Droplets } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TabContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  imageSrc: string;
  imageAlt: string;
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface Feature108Props {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
}

const Feature108 = ({
  badge = "NanoZorb™ Technology",
  heading = "Why Choose DROP?",
  description = "Experience the power of nano-delivery for superior immune support.",
  tabs = [
    {
      value: "tab-1",
      icon: <Zap className="h-auto w-4 shrink-0" />,
      label: "Rapid Absorption",
      content: {
        badge: "60-120 Seconds",
        title: "Absorbs faster than traditional supplements",
        description:
          "NanoZorb™ technology reduces nutrients to 20-80nm particles that absorb through oral mucosa in minutes, not hours. Experience immune support that activates when you need it most.",
        buttonText: "Learn More",
        buttonHref: "/science",
        imageSrc:
          "https://lyz5cvfr0h.ufs.sh/f/tLx4hl5ikmOnAaRj0TBerOcK61jIM4ZmgSpzHL7Ci8FnD0Xt",
        imageAlt: "Rapid absorption technology",
      },
    },
    {
      value: "tab-2",
      icon: <Shield className="h-auto w-4 shrink-0" />,
      label: "Superior Protection",
      content: {
        badge: "4-10× Higher Delivery",
        title: "Maximum cellular penetration",
        description:
          "Our nano-sized particles deliver 4-10× more active ingredients directly to your cells compared to capsules or powders. Get the protection your body deserves.",
        buttonText: "See Science",
        buttonHref: "/science",
        imageSrc:
          "https://lyz5cvfr0h.ufs.sh/f/tLx4hl5ikmOnFOMwupgdhktn0l9Vv7ZApYCzG1iNX84RuD3H",
        imageAlt: "Cellular protection",
      },
    },
    {
      value: "tab-3",
      icon: <Droplets className="h-auto w-4 shrink-0" />,
      label: "All-Day Support",
      content: {
        badge: "One Dose Daily",
        title: "24-hour immune protection",
        description:
          "Just 6 pumps each morning provides sustained immune support throughout your entire day. Higher bioavailability means you need less to achieve more.",
        buttonText: "Shop Now",
        buttonHref: "/product",
        imageSrc:
          "https://lyz5cvfr0h.ufs.sh/f/tLx4hl5ikmOnlCu2bn8EfQTV7ApbyFLmjY5GCZhaPcN4nzo9",
        imageAlt: "All-day protection",
      },
    },
  ],
}: Feature108Props) => {
  return (
    <section className="py-20 bg-cream/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <Badge variant="outline" className="bg-white border-sage text-sage font-semibold">
            {badge}
          </Badge>
          <h2 className="max-w-2xl text-4xl md:text-5xl font-bold text-forest">
            {heading}
          </h2>
          <p className="text-forest/70 text-lg max-w-2xl">{description}</p>
        </div>
        <Tabs defaultValue={tabs[0].value} className="mt-8">
          <TabsList className="container flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10 bg-transparent h-auto">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-forest/60 data-[state=active]:bg-white data-[state=active]:text-sage data-[state=active]:shadow-md border border-transparent data-[state=active]:border-sage/20"
              >
                {tab.icon} {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mx-auto mt-8 max-w-screen-xl rounded-2xl bg-white shadow-xl p-8 lg:p-16">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid place-items-center gap-12 lg:grid-cols-2 lg:gap-16"
              >
                <div className="flex flex-col gap-6">
                  <Badge variant="outline" className="w-fit bg-sage/10 border-sage text-sage font-semibold">
                    {tab.content.badge}
                  </Badge>
                  <h3 className="text-3xl font-bold text-forest lg:text-4xl">
                    {tab.content.title}
                  </h3>
                  <p className="text-forest/70 lg:text-lg leading-relaxed">
                    {tab.content.description}
                  </p>
                  <Link href={tab.content.buttonHref}>
                    <Button className="mt-2.5 w-fit gap-2 bg-honey hover:bg-honey-dark" size="lg">
                      {tab.content.buttonText}
                    </Button>
                  </Link>
                </div>
                <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={tab.content.imageSrc}
                    alt={tab.content.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export { Feature108 };
