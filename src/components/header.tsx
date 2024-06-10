import Image from 'next/image'

export default function Header({ lang }:{ lang: string; }){

    return (
        
        <div className="fixed top-0 left-0 h-20 w-full bg-white grid grid-cols-3 gap-3 border-t-0 border-l-0 border-r-0 border-b-2 border-solid border-corporate-blue">
            <div className="flex items-center justify-center">
                    <Image src={`/images/common/ConnectObra.png`} alt="Logo" width="156" height="156" />
            </div>
            <div className="">

            </div>
            <div className="grid gap-20 grid-cols-2 grid-rows-1 items-center">
                <button className="h-10 bg-corporate-orange hover:bg-corporate-blue text-white hover:text-white py-2 rounded font-medium ml-8">
                    Buscar contratos
                </button>
                <button className="h-10 bg-corporate-orange hover:bg-corporate-blue text-white hover:text-white py-2 rounded font-medium mr-8">
                    Publicar contratos
                </button>
            </div>
        </div>
          
      );

}