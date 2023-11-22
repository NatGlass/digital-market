import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/ui/maxWidthWrapper";
import { ArrowRight, CheckCircle, Download, Leaf } from "lucide-react";
import Link from "next/link";

const features = [
  {
    label: "Instant Access",
    icon: Download,
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    label: "Guaranteed Quality",
    icon: CheckCircle,
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    label: "Sustainable",
    icon: Leaf,
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
];

const Home = () => {
  return (
    <main>
      <MaxWidthWrapper>
        <div className="mx-auto py-20 text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-5xl tracking-wide">
            Marketplace for high quality digital assets
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            magnam, impedit consectetur, aliquid quaerat ad, culpa voluptate
            quos sit obcaecati non? Vel dignissimos ratione ad suscipit. Natus
            doloribus dolor dolore?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/products">
              <Button>Browse Assets</Button>
            </Link>
            <Link href="/quality-assurance">
              <Button variant="ghost" className="text-muted-foreground">
                Quality Assurance <ArrowRight className="ml-2" size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
      <section className="bg-gray-50 border-t border-t-200">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center md:flex md:items-center md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-green-100 text-green-900">
                    {<feature.icon className="w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h2 className="text-lg font-medium text-gray-900">
                    {feature.label}
                  </h2>
                  <p className="mt-3 text-">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
};

export default Home;
