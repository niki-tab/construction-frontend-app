// @ts-nocheck
import FooterDesktop from "@/components/footer/footer-desktop";
import FooterMobile from "@/components/footer/footer-mobile";
import HeaderDesktop from "@/components/header/header-desktop";
import HeaderMobile from "@/components/header/header-mobile";
import { createClient } from "@/prismicio";
import HeroSection from "@/slices/HeroSection";

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
    <div className="h-lvh bg-white">
      <HeaderDesktop lang={lang}></HeaderDesktop>
      <HeaderMobile lang={lang}></HeaderMobile>
      <HeroSection slice={heroSlice} lang={lang} />
      <FooterDesktop lang={lang}></FooterDesktop>
      <FooterMobile lang={lang}></FooterMobile>
    </div>
  );
}
