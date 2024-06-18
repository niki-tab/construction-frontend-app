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
        
        <div className="h-20 w-full bg-white block md:hidden align-middle border-t-0 border-l-0 border-r-0 border-b-2 border-solid border-corporate-blue p-4">
            <div className="float-left">
                <Link href={`/${lang}`}><Image src={`/images/common/ConnectObra.png`} alt="Logo" width="115" height="115" /></Link>
            </div>
            <div className="float-right mt-2">
                <DropdownMenu>
                    <DropdownMenuTrigger><Image src={`/images/common/hamburger-menu.png`} alt="hamburguer menu" width="30" height="30" /></DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem><Link href={`/${lang}/subcontratistas`}>Buscar contratos</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link href={`/${lang}/contratistas`}>Publicar contratos</Link></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
          
      );

}