
import Image from 'next/image';
import Link from 'next/link';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";

export default function LandingHorizontalScrollGridContainer({ lang, marginTop, gridColumns, spaceSeparatorCards }:{ lang: string, marginTop: string, gridColumns: string, spaceSeparatorCards: string; }){

    const cardsInfo = [
        { id: 1, jobName: 'Carpintería de puertas', place: 'Madrid', date: '17/05/2024', price: '50-70€', imagePath: '/images/home-page/servicio-electricista.jpg'}, 
        { id: 2, jobName: 'Carpintería de puertas', place: 'Madrid', date: '17/05/2024', price: '50-70€', imagePath: '/images/home-page/servicio-electricista.jpg'}, 
        { id: 3, jobName: 'Carpintería de puertas', place: 'Madrid', date: '17/05/2024', price: '50-70€', imagePath: '/images/home-page/servicio-electricista.jpg'}, 
        { id: 4, jobName: 'Carpintería de puertas', place: 'Madrid', date: '17/05/2024', price: '50-70€', imagePath: '/images/home-page/servicio-electricista.jpg'}, 
        { id: 5, jobName: 'Carpintería de puertas', place: 'Madrid', date: '17/05/2024', price: '50-70€', imagePath: '/images/home-page/servicio-electricista.jpg'}, 
        { id: 6, jobName: 'Carpintería de puertas', place: 'Madrid', date: '17/05/2024', price: '50-70€', imagePath: '/images/home-page/servicio-electricista.jpg'}, 
        //{ id: 7, jobName: 'Carpintería de puertas', place: 'Madrid', date: '17/05/2024', price: '50-70€', imagePath: '/images/home-page/servicio-electricista.jpg'}, 
        //{ id: 8, jobName: 'Carpintería de puertas', place: 'Madrid', date: '17/05/2024', price: '50-70€', imagePath: '/images/home-page/servicio-electricista.jpg'}, 
      ];

      const imageWidth = 220;
      const imageHeight = 200;
    //bg-red-200 
    return (
        <div className="grid-cols-3">
            <div>
            </div>
            <div className={`mx-auto flex overflow-x-auto space-x-4 w-5/6 place-items-center ${marginTop}`}>
                {cardsInfo.map((item) => (

                    <div className="flex flex-col text-left border-solid border-gray-900 bg-white pb-2 rounded-md">
                        <div className="" style={{ width: imageWidth, height: imageHeight, position: 'relative' }}>
                            <div className="">
                                <Image className="rounded-t-md" src={`${item.imagePath}`} layout="fill" alt="Logo" objectFit="cover"/>
                            </div>
                            
                        </div>
                        <div className="px-2">
                            <p className="text-lg font-mono font-bold mt-2">{item.jobName}</p>
                            <p className="text-sm font-mono">{item.jobName}</p>
                            <p className="text-sm font-mono">Comienzo: {item.date}</p>
                        </div>
                    </div>
                    
                
                ))}

            </div>
            <div>
            </div>
        </div>
        
    );
}