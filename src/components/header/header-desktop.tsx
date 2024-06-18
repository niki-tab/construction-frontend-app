import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function HeaderDesktop({ lang }:{ lang: string; }){

    return (
        
        <div className="hidden md:grid fixed top-0 left-0 h-20 w-full bg-white grid-cols-3 gap-3 border-t-0 border-l-0 border-r-0 border-b-2 border-solid border-corporate-blue mb-20">
            <div className="flex items-center justify-center">
                <Link href={`/${lang}`}><Image src={`/images/common/ConnectObra.png`} alt="Logo" width="156" height="156" /></Link>
            </div>
            <div className="">

            </div>
            <div className="grid gap-20 grid-cols-2 grid-rows-1 items-center">
                <Button className="ml-8 bg-primary-brand-color hover:bg-secondary-brand-color"><Link href={`/${lang}/subcontratistas`}>Buscar contratos</Link></Button>
                <Button className="mr-8 bg-primary-brand-color hover:bg-secondary-brand-color"><Link href={`/${lang}/contratistas`}>Publicar contratos</Link></Button>
            </div>
        </div>
          
      );

}