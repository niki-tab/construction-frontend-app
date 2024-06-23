
import Image from 'next/image';
import Link from 'next/link';
import LandingCenteredTitles3 from "@/components/landing/landing-centered-tittles-3";

export default function LandingSimpleGridContainer({ lang, marginTop }:{ lang: string, marginTop: string; }){

    const cardsInfo = [
        { id: 1, name: 'Electricidad', imagePath: '/images/home-page/servicio-yeso-2.jpg'}, 
        { id: 2, name: 'Yeso', imagePath: '/images/home-page/servicio-yeso-2.jpg'}, 
        { id: 3, name: 'Ingeniería civil', imagePath: '/images/home-page/servicio-yeso-2.jpg'}, 
        { id: 4, name: 'HVAC y saneamiento', imagePath: '/images/home-page/servicio-yeso-2.jpg'}, 
        { id: 5, name: 'Obra estructural', imagePath: '/images/home-page/servicio-yeso-2.jpg'}, 
      ];
    
    return (
        <div className={`grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-1 mt-10 mx-auto ${marginTop}`}>
            
            {cardsInfo.map((item) => (

                <div className="text-center">
                    <h3 className="font-mono font-bold text-1xl md:text-2xl">{item.name}</h3>
                    <Link href={`/${lang}/subcontratistas`}>
                        <Image className="mt-2 mx-auto" src={`${item.imagePath}`} alt="Logo" width="208" height="208" />
                        <div className="bg-primary-brand-color text-white font-mono font-bold h-8 leading-8 w-52 mx-auto">Encargos</div>
                    </Link>
                </div>

            ))}

        </div>
        
    );
}