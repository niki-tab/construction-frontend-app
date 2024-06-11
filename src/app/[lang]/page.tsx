import Image from "next/image";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeaderMobile from "@/components/header-mobile";
import Link from 'next/link';
import { Button } from "@/components/ui/button";


export default function HomeLangPage({ params }: { params: { lang: string } }) {
  const lang = params.lang;
  return (
    <div className="h-lvh bg-white">
    <Header lang={lang}>
    </Header>
    <HeaderMobile lang={lang}>
    </HeaderMobile>
    <div className="h-full w-full bg-white pt-12">
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
      <Footer lang={lang}>
  
      </Footer>
    </div>
  );
}
