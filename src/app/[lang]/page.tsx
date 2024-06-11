import Image from "next/image";
import FooterDesktop from "@/components/footer/footer-desktop";
import FooterMobile from "@/components/footer/footer-mobile";
import HeaderDesktop from "@/components/header/header-desktop";
import HeaderMobile from "@/components/header/header-mobile";
import Link from 'next/link';
import { Button } from "@/components/ui/button";


export default function HomeLangPage({ params }: { params: { lang: string } }) {
  const lang = params.lang;
  return (
    <div className="h-lvh bg-white">
    <HeaderDesktop lang={lang}>
    </HeaderDesktop>
    <HeaderMobile lang={lang}>
    </HeaderMobile>
    <div className="h-full w-full bg-white pt-12 hidden md:block">
      <div className="grid gap-10 grid-cols-2 grid-rows-1 my-20 ml-28">
      <div>
        <h1 className="inline-block w-full font-mono font-bold text-6xl text-corporate-black">
          Encuentra encargos de talleres artesanales y afrontadlos conjuntamente
        </h1>
        <h2 className="inline-block w-full font-mono font-bold text-4xl text-corporate-black mt-4">
          De artesano a artesano
        </h2>
        <p className="w-full font-mono font-regular text-2xl text-corporate-black mt-4">
        En Cocrafter, negocios verificados colaboran para encargos. La búsqueda de pedidos en el sector artesanal hecha fácil. La gestión de subcontratistas aún más simple.
        </p>
        <div className="grid gap-20 grid-cols-2 grid-rows-1 items-center mt-8">
          <Button className="mr-8 bg-primary-brand-color hover:bg-primary-brand-color"><Link href={`/${lang}/subcontratistas`}>Buscar contrato</Link></Button>
          <Button className="mr-8 bg-secondary-brand-color hover:bg-secondary-brand-color"><Link href={`/${lang}/contratistas`}>Publicar contrato</Link></Button>
        </div>
      </div>
        <div className="flex items-center justify-center mr-16">
        <Image className="rounded-full" src={`/images/home-page/home-page-image-1.jpg`} alt="Construction workers" width="1200" height="624" />
        </div>
      </div>
    </div>
    <div className="block md:hidden">
        <h1 className="">
          Encuentra encargos de talleres artesanales y afrontadlos conjuntamente
        </h1>
        <h2 className="">
          De artesano a artesano
        </h2>
        <p className="">
        En Cocrafter, negocios verificados colaboran para encargos. La búsqueda de pedidos en el sector artesanal hecha fácil. La gestión de subcontratistas aún más simple.
        </p>
    </div>
      <FooterDesktop lang={lang}>
      </FooterDesktop>
      <FooterMobile lang={lang}>
      </FooterMobile>
    </div>
  );
}
