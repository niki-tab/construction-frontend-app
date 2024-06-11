import Image from 'next/image';
import Link from 'next/link';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

export default function HeaderMobile ({ lang }:{ lang: string; }){

    return (
        
        <div className="h-20 w-full bg-white block md:hidden align-middle border-t-0 border-l-0 border-r-0 border-b-2 border-solid border-corporate-blue">
            <div className="float-left mt-4 ml-6">
                <Link href={`/${lang}`}><Image src={`/images/common/ConnectObra.png`} alt="Logo" width="115" height="115" /></Link>
            </div>
            <div className="float-right mt-6 mr-6">
                <DropdownMenu>
                    <DropdownMenuTrigger><Image src={`/images/common/hamburger-menu.png`} alt="hamburguer menu" width="35" height="35" /></DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel></DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem><Link href={`/${lang}/subcontratistas`}>Buscar contratos</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link href={`/${lang}/contratistas`}>Publicar contratos</Link></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
          
      );

}