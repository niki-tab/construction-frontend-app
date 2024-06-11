import Image from "next/image";
import Footer from "@/components/footer/footer-desktop";
import { redirect } from 'next/navigation'

export default function HomePage({ params }: { params: { lang: string } }) {
  
  const lang = params.lang;
  redirect('/es');

}
