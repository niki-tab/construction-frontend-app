import Image from "next/image";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function ContractorsPage({ params }: { params: { lang: string } }) {
  const lang = params.lang;
  return (
    <div className="h-dvh">
      <Header lang={lang}>

      </Header>
      <iframe aria-label='Registro' frameborder="0" scrolling="no" style={{ height: '950px', width: '99%', border: 'none', overflow: 'hidden'}} src='https://forms.zohopublic.eu/nicolastabarestech/form/ContractorsLeadGenerationForm/formperma/sX62lkC9fxWYvXd8s55hJDKKMThgH4k0jIAxfugbXfQ'></iframe>
      <Footer lang={lang}>
  
      </Footer>
    </div>
  );
}
