import FooterMobile from "@/components/footer/footer-mobile";
import FooterDesktop from "@/components/footer/footer-desktop";
import HeaderDesktop from "@/components/header/header-desktop";
import HeaderMobile from "@/components/header/header-mobile";

export default function MainLayout({
    children,
    params
  }: {
    children: React.ReactNode,
    params: { lang: string }
  }) {
    
    const lang = params.lang;

    return (
        <main className="">
            <div className="flex flex-col min-h-screen">
                <HeaderDesktop lang={lang}>
                </HeaderDesktop>
                <HeaderMobile lang={lang}>
                </HeaderMobile>
                <div className="flex flex-grow items-center content-center justify-center mt-20">
                    {children}
                </div>
                <FooterDesktop lang={lang}>
                </FooterDesktop>
                <FooterMobile lang={lang}>
                </FooterMobile>
            </div>
        </main>

    );
  }

