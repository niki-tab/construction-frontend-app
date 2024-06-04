export default function Header({ lang }:{ lang: string; }){

    return (
        
        <div className="h-16 bg-white grid grid-cols-4 gap-4 border-solid border-orange-500">
            <div className="text-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Button
                </button>
            </div>
            <div className="text-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Button
                </button>
            </div>
            <div className="text-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Buscar contratos
                </button>
            </div>
            <div className="text-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Publicar contratos
                </button>
            </div>
        </div>
          
      );

}