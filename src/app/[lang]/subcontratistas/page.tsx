import Image from "next/image";
import FooterDesktop from "@/components/footer/footer-desktop";
import FooterMobile from "@/components/footer/footer-mobile";
import HeaderDesktop from "@/components/header/header-desktop";
import HeaderMobile from "@/components/header/header-mobile";
import ContactForm1 from "@/components/shared/contact-form-1";

export default function SubcontractorsPage({ params }: { params: { lang: string } }) {
  const lang = params.lang;
  return (
    <div className="h-dvh">
    <HeaderDesktop lang={lang}>
    </HeaderDesktop>
    <HeaderMobile lang={lang}>
    </HeaderMobile>
    <div className="h-full w-full bg-white pt-12 hidden md:block mt-12 text-center">
    <ContactForm1/>
    </div>
    <FooterDesktop lang={lang}>
    </FooterDesktop>
    <FooterMobile lang={lang}>
    </FooterMobile>
  </div>
  );
}
