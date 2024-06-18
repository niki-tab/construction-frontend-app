import Image from "next/image";
import FooterDesktop from "@/components/footer/footer-desktop";
import FooterMobile from "@/components/footer/footer-mobile";
import HeaderDesktop from "@/components/header/header-desktop";
import HeaderMobile from "@/components/header/header-mobile";
import ContactForm1 from "@/components/shared/contact-form-1";

export default function SubcontractorsPage({ params }: { params: { lang: string } }) {
  const lang = params.lang;
  return (
    <ContactForm1/>
  );
}
