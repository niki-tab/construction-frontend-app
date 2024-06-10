import Image from "next/image";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from 'next/link';



export default function HomeLangPage({ params }: { params: { lang: string } }) {
  const lang = params.lang;
  return (
    <div className="h-lvh bg-white">
      <Header lang={lang}>

    </Header>
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
          <button className="h-10 bg-corporate-orange text-white hover:text-white py-2 rounded font-medium">
            <Link href={`/${lang}/subcontratistas`}>Buscar contrato</Link>
          </button>
          <button className="h-10 bg-corporate-blue text-white hover:text-white py-2 rounded font-medium">
            <Link href={`/${lang}/contratistas`}>Publicar contrato</Link>
          </button>
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
