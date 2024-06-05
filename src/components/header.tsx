export default function Header({ lang }:{ lang: string; }){

    return (
        
        <div className="fixed h-20 bg-white grid grid-cols-3 gap-3 border-t-0 border-l-0 border-r-0 border-b-2 border-solid border-strong-green">
            <div className="flex items-center justify-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    LOGO
                </button>
            </div>
            <div className="">

            </div>
            <div className="grid gap-20 grid-cols-2 grid-rows-1 items-center">
                <button className="h-12 bg-strong-green hover:bg-white text-white hover:text-strong-green py-2 px-4 rounded font-bold">
                    Buscar contratos
                </button>
                <button className="h-12 bg-strong-green hover:bg-white text-white hover:text-strong-green py-2 px-4 rounded font-bold mr-8">
                    Publicar contratos
                </button>
            </div>
        </div>
          
      );

}