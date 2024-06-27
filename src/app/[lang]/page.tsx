// @ts-nocheck

import HeaderMobile from "@/components/header/header-mobile";
import { createClient } from "@/prismicio";
import HeroSection from "@/slices/HeroSection";
import LandingContainer from "@/components/landing/landing-container";
import LandingCenteredTitles2 from "@/components/landing/landing-centered-tittles-2";
import LandingCenteredTitles3 from "@/components/landing/landing-centered-tittles-3";
import LandingSimpleGridContainer from "@/components/landing/landing-simple-grid-container";
import LandingInfoImageAnd2ButtonsContainer from "@/components/landing/landing-info-image-and-2-buttons";
import LandingHorizontalScrollGridContainer from "@/components/landing/landing-horizontal-scroll-grid-container";

export default async function HomeLangPage({
  params,
}: {
  params: { lang: string };
}) {
  const lang = params.lang;
  const client = createClient();
  const page = await client.getSingle("homepage");
  const slices = page.data.slices;
  const heroSlice = slices.find((slice) => slice.slice_type === "hero_section");
  return (
    <div>
      <div className="bg-white pb-12">
        <LandingInfoImageAnd2ButtonsContainer lang="en" mainTitleValue ="Hola" secondaryTitleValue ="Hola" imagePath="/images/home-page/home-page-image-1.jpg"></LandingInfoImageAnd2ButtonsContainer>
      </div>
      <div className="bg-slate-100 py-12">
        <LandingCenteredTitles2 titleValue = "Proyectos disponibles en ObraNet"></LandingCenteredTitles2>
        <LandingHorizontalScrollGridContainer lang="en" marginTop = "mt-12" gridColumns = "md:grid-cols-5" spaceSeparatorCards="4"></LandingHorizontalScrollGridContainer>
      </div>
      <div className="bg-white h-32">

      </div>
      <div className="bg-slate-100 py-12">
        <LandingCenteredTitles2 titleValue = "Oficios demandados por subcontratistas y contratantes"></LandingCenteredTitles2>
        <LandingCenteredTitles3 className="mt-20" relativeTop = "top-6" titleValue = "ObraNet ofrece encargos para diferentes tipos de trabajos. En nuestro portafolio de subcontratistas se incluyen empresas de electricidad, obra gruesa, obra civil, construcción en seco y fontanería, calefacción y climatización."></LandingCenteredTitles3>
        <LandingSimpleGridContainer lang="en" marginTop = "mt-12" gridColumns = "md:grid-cols-5" spaceSeparatorCards="4"></LandingSimpleGridContainer>
      </div>
      <div className="bg-white h-32">

      </div>
    </div>
  );
}
