import Image from "next/image";
import Footer from "@/components/footer/footer-desktop";
import HeaderDesktop from "@/components/header/header-desktop";

export default function AboutPage({ params }: { params: { lang: string } }) {
  const lang = params.lang;
  return (
    <div>
      <HeaderDesktop lang={lang}>

    </HeaderDesktop>
    <Footer lang={lang}>
  
  </Footer>
    </div>
  );
}
