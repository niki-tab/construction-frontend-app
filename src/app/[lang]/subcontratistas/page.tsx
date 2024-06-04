import Image from "next/image";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function SubcontractorsPage({ params }: { params: { lang: string } }) {
  const lang = params.lang;
  return (
    <div>
      Subcontractor
      <Header>

    </Header>
    <Footer lang={lang}>

      </Footer>
    </div>
  );
}
