import Image from 'next/image'
import Link from 'next/link';


export default function FooterDesktop({ lang }:{ lang: string; }){

    return (
    <div className="h-40 w-full block md:hidden bg-slate-100 p-4">
        <div className = "">
            <Image src={`/images/common/logo-obranet-medium.png`} alt="Logo" width="115" height="115" />
        </div>
        <div className="relative left-0 inset-x-0 bg-slate-100 grid grid-cols-3 gap-2 py-2">
            <div className="ml-2">
                <p className="text-xs font-mono text-corporate-blue font-bold text-left">Sobre nosotros</p>
                <p className="text-xs font-mono pt-2 text-left">¿Quienes somos?</p>
                <p className="text-xs font-mono pt-1 text-left">Blog</p>
            </div>
            <div className="">
                <p className="text-xs font-mono text-corporate-blue font-bold text-left">Más información</p>
                <p className="text-xs font-mono pt-2 text-left hover:underline"><Link href={`/${lang}/subcontratistas`}>Subcontratistas</Link></p>
                <p className="text-xs font-mono pt-1 text-left hover:underline"><Link href={`/${lang}/contratistas`}>Contratistas</Link></p>
            </div>
            <div className="">
                <p className="text-xs font-mono text-corporate-blue font-bold text-left">Sobre nosotros</p>
                <p className="text-xs font-mono pt-2 text-left">+34 606874612</p>
                <p className="text-xs font-mono pt-1 text-left">jose.y@rockit.com</p>
            </div>
        </div>
    </div>

  );

}