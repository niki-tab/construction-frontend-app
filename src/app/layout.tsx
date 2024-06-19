import { Inter } from "next/font/google";
import "./globals.css";

import type { Metadata, ResolvingMetadata } from "next";
import { createClient, repositoryName } from "@/prismicio";
import { PrismicPreview } from "@prismicio/next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const meta = await client.getSingle("meta_data");
  const data = meta.data;
  return {
    title: data.title || "Default title",
    description: data.description || "Default description",
  };
}

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
