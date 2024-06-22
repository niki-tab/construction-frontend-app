
import Image from 'next/image';
import Link from 'next/link';

export default function LandingSimpleGridContainer({ lang, marginTop }:{ lang: string, marginTop: string; }){

    return (
        <div className={`grid grid-cols-5 gap-1 mt-10 mx-auto ${marginTop}`}>
            <div className="text-center">
                <h3 className="font-mono font-bold text-2xl">Electricidad</h3>
                <Link href={`/${lang}/subcontratistas`}>
                    <Image className="mt-2 mx-auto" src={`/images/home-page/servicio-yeso-2.jpg`} alt="Logo" width="208" height="208" />
                    <div className="bg-primary-brand-color text-white font-mono font-bold h-8 leading-8 w-52 mx-auto">Encargos</div>
                </Link>
            </div>
            <div className="text-center">
                <h3 className="font-mono font-bold text-2xl">Paneles de yeso</h3>
                <Link href={`/${lang}/subcontratistas`}>
                    <Image className="mt-2 mx-auto" src={`/images/home-page/servicio-yeso-2.jpg`} alt="Logo" width="208" height="208" />
                    <div className="bg-primary-brand-color text-white font-mono font-bold h-8 leading-8 w-52 mx-auto">Encargos</div>
                </Link>
            </div>
            <div className="text-center">
                <h3 className="font-mono font-bold text-2xl">ingeniería civil</h3>
                <Link href={`/${lang}/subcontratistas`}>
                    <Image className="mt-2 mx-auto" src={`/images/home-page/servicio-yeso-2.jpg`} alt="Logo" width="208" height="208" />
                    <div className="bg-primary-brand-color text-white font-mono font-bold h-8 leading-8 w-52 mx-auto">Encargos</div>
                </Link>
            </div>
            <div className="text-center">
                <h3 className="font-mono font-bold text-2xl">HVAC y saneamiento</h3>
                <Link href={`/${lang}/subcontratistas`}>
                    <Image className="mt-2 mx-auto" src={`/images/home-page/servicio-yeso-2.jpg`} alt="Logo" width="208" height="208" />
                    <div className="bg-primary-brand-color text-white font-mono font-bold h-8 leading-8 w-52 mx-auto">Encargos</div>
                </Link>
            </div>
            <div className="text-center">
                    <h3 className="font-mono font-bold text-2xl">Obra estructural</h3>
                <Link href={`/${lang}/subcontratistas`}>
                    <Image className="mt-2 mx-auto" src={`/images/home-page/servicio-yeso-2.jpg`} alt="Logo" width="208" height="208" />
                    <div className="bg-primary-brand-color text-white font-mono font-bold h-8 leading-8 w-52 mx-auto">Encargos</div>
                </Link>
            </div>
        </div>
        
    );
}