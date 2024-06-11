import Image from 'next/image'
import Link from 'next/link';


export default function FooterDesktop({ lang }:{ lang: string; }){

    return (
    <div className="hidden md:grid relative left-0 inset-x-0 h-48 bg-slate-100 grid-cols-4 gap-4">
        <div className="flex justify-center items-center"> 
        <Image src={`/images/common/ConnectObra.png`} alt="Logo" width="186" height="156" />
        </div>
        <div className="text-center">
            <p className="text-xl font-mono text-corporate-blue font-bold text-left pt-4 ml-28">Sobre nosotros</p>
            <p className="text-base font-mono pt-2 text-left ml-28">¿Quienes somos?</p>
            <p className="text-base font-mono text-left ml-28">Blog</p>
        </div>
        <div className="text-center">
            <p className="text-xl font-mono text-corporate-blue font-bold text-left pt-4 ml-28">Más información</p>
            <p className="text-base font-mono pt-2 text-left ml-28 hover:underline"><Link href={`/${lang}/subcontratistas`}>Para Subcontratistas</Link></p>
            <p className="text-base font-mono text-left ml-28 hover:underline"><Link href={`/${lang}/contratistas`}>Para Contratistas</Link></p>
        </div>
        <div className="text-center">
            <p className="text-xl font-mono text-corporate-blue font-bold text-left pt-4 ml-28">Contacto</p>
            <p className="text-base font-mono pt-2 text-left ml-28">+34 606874612</p>
            <p className="text-base font-mono text-left ml-28">jose.y.benito@rockit.com</p>
        </div>
      </div>
  );

}