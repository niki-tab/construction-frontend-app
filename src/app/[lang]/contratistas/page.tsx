import Image from "next/image";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function ContractorsPage({ params }: { params: { lang: string } }) {
  const lang = params.lang;
  return (
    <div>
      Contractor
      <Header lang={lang}>

    </Header>
    <Footer lang={lang}>
  
  </Footer>
    </div>
  );
}
