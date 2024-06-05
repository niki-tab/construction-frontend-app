import Image from "next/image";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from 'next/link';



export default function HomeLangPage({ params }: { params: { lang: string } }) {
  const lang = params.lang;
  return (
    <div className="h-dvh">
      <Header lang={lang}>

    </Header>
    <div className="h-full bg-white pt-12">
      <Image src={`/images/home-page/gettyimages-1332558192-612x612.jpg`} alt="Construction workers" width="624" height="624" />
    </div>
    <div className="h-full bg-white pt-12">
      
    </div>
      <Footer lang={lang}>
  
      </Footer>
    </div>
  );
}
