import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";
import { asset } from "@/lib/assets";

// TODO(verify): the live hero also uses KRAFT-PAPER-ROLL-1.svg; check its placement.
export function Hero() {
  return (
    <section className="bg-brand-100 py-16 md:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold text-brand-900 md:text-5xl lg:text-6xl lg:leading-[1.1]">
            {site.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">
            Indonesia&apos;s trusted supplier of kraft paper, duplex board, and
            custom packaging.
          </p>
          <Button href="#productsection" className="mt-8">
            View Products
          </Button>
        </div>

        <div className="relative aspect-square w-full">
          <Image
            src={asset("Group-1.png")}
            alt="Kraft paper rolls"
            fill
            priority
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-contain"
          />
        </div>
      </Container>
    </section>
  );
}
