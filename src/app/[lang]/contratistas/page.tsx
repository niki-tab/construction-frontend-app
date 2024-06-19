import Image from "next/image";
import FooterDesktop from "@/components/footer/footer-desktop";
import FooterMobile from "@/components/footer/footer-mobile";
import HeaderDesktop from "@/components/header/header-desktop";
import HeaderMobile from "@/components/header/header-mobile";
import ContactFormContractors from "@/components/shared/contact-form-contractors";

export default function ContractorsPage({ params }: { params: { lang: string } }) {
  const lang = params.lang;
  return (

    <ContactFormContractors/>
    
  );
}
