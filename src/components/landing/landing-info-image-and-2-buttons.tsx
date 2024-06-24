import { Button } from "@/components/ui/button";
import Image from 'next/image';
import LandingCenteredTitles3 from "@/components/landing/landing-centered-tittles-3";
import Link from 'next/link';

export default function LandingInfoImageAnd2ButtonsContainer({ lang, maintitleValue, secondaryTitleValue, imagePath}:{ lang: string, maintitleValue: string, secondaryTitleValue: string, imagePath: string; }){

    return (
            <div className="flex">
            <div className="flex-auto w-2/4 px-8 ml-8">
                <h1 className="font-mono font-bold text-3xl md:text-5xl">Encuentra encargos de talleres artesanales y afrontadlos conjuntamente</h1>
                <h2 className="font-mono font-bold text-2xl md:text-4xl mt-6">De artesano a artesano</h2>
                <h3 className="font-mono text-lg md:text-xl mt-6">En ObraNet, negocios verificados colaboran para encargos. La búsqueda de pedidos en el sector artesanal hecha fácil. La gestión de subcontratistas aún más simple.</h3>
                <div className="flex w-full pt-8">
                    <div className="flex-auto w-3/4 md:w-2/4">
                        <Link href={`/${lang}/subcontratistas`}><Button className="md:w-3/4 mx-auto bg-primary-brand-color hover:bg-secondary-brand-color">Buscar contratos</Button></Link>
                    </div>
                    <div className="flex-auto w-3/4 md:w-2/4">
                        <Link href={`/${lang}/contratistas`}><Button className="md:w-3/4 mx-auto bg-secondary-brand-color hover:bg-primary-brand-color">Publicar contratos</Button></Link>
                    </div>
                </div>
                
            </div>
            <div className="flex w-2/4 hidden md:block">
                <div className="m-auto">
                    <Image className="rounded-full" src={`${imagePath}`} alt="Logo" width="600" height="600" />
                </div>
            </div>
            </div>
            
    );
}