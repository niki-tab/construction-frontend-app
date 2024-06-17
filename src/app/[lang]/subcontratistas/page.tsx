import Image from "next/image";
import FooterDesktop from "@/components/footer/footer-desktop";
import FooterMobile from "@/components/footer/footer-mobile";
import HeaderDesktop from "@/components/header/header-desktop";
import HeaderMobile from "@/components/header/header-mobile";

export default function SubcontractorsPage({ params }: { params: { lang: string } }) {
  const lang = params.lang;
  return (
    <div className="h-dvh">
      <HeaderDesktop lang={lang}>
      </HeaderDesktop>
      <HeaderMobile lang={lang}>
      </HeaderMobile>
      <div className="h-full w-full bg-white pt-12 hidden md:block">
      <form name="contact" method="POST" netlify>
  <p>
    <label>Your Name: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
      </div>
    
      <FooterDesktop lang={lang}>
      </FooterDesktop>
      <FooterMobile lang={lang}>
      </FooterMobile>
    </div>
  );
}
