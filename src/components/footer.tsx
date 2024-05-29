import Image from 'next/image'

/*duda: esta bien puesto el folder de la imagen? como debo llamar a esta funcion Footer?*/
export default function Footer(){

    return (
    <div className="absolute inset-x-0 bottom-0 h-48 bg-neutral-300 grid grid-cols-4 gap-4">
        <div className="flex justify-center items-center"> 
            <Image src={`/images/common/rock-logo.png`} alt="Logo" width="156" height="156" />
        </div>
        <div className="text-center">
            <p className="text-xl font-mono font-bold text-left pt-4 ml-28">About Us</p>
            <p className="text-base font-mono pt-2 text-left ml-28">Who are we?</p>
            <p className="text-base font-mono text-left ml-28">Blog</p>
        </div>
        <div className="text-center">
            <p className="text-xl font-mono font-bold text-left pt-4 ml-28">More Info</p>
            <p className="text-base font-mono pt-2 text-left ml-28">For Subcontractors</p>
            <p className="text-base font-mono text-left ml-28">For Contractors</p>
        </div>
        <div className="text-center">
            <p className="text-xl font-mono font-bold text-left pt-4 ml-28">Contact Us</p>
            <p className="text-base font-mono pt-2 text-left ml-28">+34 606874612</p>
            <p className="text-base font-mono text-left ml-28">jose.y.benito@rockit.com</p>
        </div>
      </div>
  );

}