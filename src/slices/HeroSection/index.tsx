import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PrismicNextImage } from "@prismicio/next";
import { cn } from "@/lib/utils";

/**
 * Props for `HeroSection`.
 */
export type HeroSectionProps = SliceComponentProps<Content.HeroSectionSlice> & {
  lang: string;
};

/**
 * Component for "HeroSection" Slices.
 */
const HeroSection = ({ slice, lang }: HeroSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="h-full w-full bg-white pt-12 hidden md:block">
        <div className="grid gap-10 grid-cols-2 grid-rows-1 my-20 ml-28">
          <div>
            <h1 className="inline-block w-full font-mono font-bold text-6xl text-corporate-black">
              {slice.primary.hero_title}
            </h1>
            <h2 className="inline-block w-full font-mono font-bold text-4xl text-corporate-black mt-4">
              {slice.primary.hero_medium_title}
            </h2>
            <p className="w-full font-mono font-regular text-2xl text-corporate-black mt-4">
              {slice.primary.hero_description}
            </p>
            <div className="grid gap-20 grid-cols-2 grid-rows-1 items-center mt-8">
              {slice.primary.buttons.map((button, index) => (
                <Button
                  key={index}
                  className={cn(
                    "mr-8",
                    index === 0
                      ? "bg-primary-brand-color"
                      : "bg-secondary-brand-color"
                  )}
                >
                  <Link href={`/${lang}/${button.slug}`}>{button.label}</Link>
                </Button>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center mr-16">
            <PrismicNextImage
              field={slice.primary.hero_image}
              width="1200"
              height="624"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <h1 className="">{slice.primary.hero_title}</h1>
        <h2 className="">{slice.primary.hero_medium_title}</h2>
        <p className="">{slice.primary.hero_description}</p>
      </div>
    </section>
  );
};

export default HeroSection;
