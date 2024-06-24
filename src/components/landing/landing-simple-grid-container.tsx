
import Image from 'next/image';
import Link from 'next/link';
import LandingCenteredTitles3 from "@/components/landing/landing-centered-tittles-3";

export default function LandingSimpleGridContainer({ lang, marginTop, gridColumns, spaceSeparatorCards }:{ lang: string, marginTop: string, gridColumns: string, spaceSeparatorCards: string; }){

    const cardsInfo = [
        { id: 1, name: 'Electricidad', imagePath: '/images/home-page/servicio-electricista.jpg'}, 
        { id: 2, name: 'Yeso', imagePath: '/images/home-page/servicio-yeso-1.jpg'}, 
        { id: 3, name: 'Ingeniería civil', imagePath: '/images/home-page/servicio-ingenieria-civil.jpg'}, 
        { id: 4, name: 'HVAC y saneamiento', imagePath: '/images/home-page/servicio-saneamiento.jpg'}, 
        { id: 5, name: 'Obra estructural', imagePath: '/images/home-page/servicio-obra-estructural.png'}, 
      ];

      const imageWidth = 176;
      const imageHeight = 200;
    
    return (

        <div className={`grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-2 mt-10 mx-auto ${marginTop}`}>
            
            {cardsInfo.map((item) => (

                <div className="text-center">
                    <h3 className="font-mono font-bold text-1xl md:text-2xl">{item.name}</h3>
                    <Link href={`/${lang}/subcontratistas`}>
                    <div className="mx-auto mb-2" style={{ width: imageWidth, height: imageHeight, position: 'relative' }}>
                            <Image className="mt-2 mx-auto" src={`${item.imagePath}`} layout="fill" alt="Logo" objectFit="cover"/>
                    </div>
                        <div className="bg-primary-brand-color text-white font-mono font-bold h-8 leading-8 w-44 mx-auto">Encargos</div>
                    </Link>
                </div>

            ))}

        </div>
        
    );
}