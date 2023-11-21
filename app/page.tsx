import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/ui/maxWidthWrapper";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Home = () => {
  return (
    <MaxWidthWrapper>
      <main>
        <div className="mx-auto py-20 text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-5xl">Marketplace for high quality digital assets</h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magnam, impedit consectetur, aliquid quaerat ad, culpa voluptate quos sit obcaecati non? Vel dignissimos ratione ad suscipit. Natus doloribus dolor dolore?
          </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="/products">
            <Button >
              Browse Assets
            </Button>
          </Link>
          <Link href="/quality-assurance">
            <Button variant="ghost" className="text-muted-foreground">
              Quality Assurance <ArrowRight className="ml-2" size={16} />
            </Button>
          </Link>
          </div>
        </div>
        {/* TODO: feature grid */}
        <div>

        </div>
      </main>
    </MaxWidthWrapper>
  )
}

export default Home;