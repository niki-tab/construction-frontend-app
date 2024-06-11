import Image from "next/image";
import FooterDesktop from "@/components/footer/footer-desktop";
import FooterMobile from "@/components/footer/footer-mobile";
import HeaderDesktop from "@/components/header/header-desktop";
import HeaderMobile from "@/components/header/header-mobile";

export default function SubcontractorsPage({ params }: { params: { lang: string } }) {
  const lang = params.lang;
  return (
    <div className="h-dvh">
      <HeaderDesktop lang={lang}>
      </HeaderDesktop>
      <HeaderMobile lang={lang}>
      </HeaderMobile>
      <iframe aria-label='Registro' style={{ height: '950px', width: '99%', border: 'none', overflow: 'hidden'}} src='https://forms.zohopublic.eu/nicolastabarestech/form/ContractorsLeadGenerationForm/formperma/sX62lkC9fxWYvXd8s55hJDKKMThgH4k0jIAxfugbXfQ'></iframe>
      <FooterDesktop lang={lang}>
      </FooterDesktop>
      <FooterMobile lang={lang}>
      </FooterMobile>
    </div>
  );
}
