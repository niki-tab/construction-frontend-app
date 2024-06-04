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
  
      <Footer lang={lang}>
  
      </Footer>
    </div>
  );
}
