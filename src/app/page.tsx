"use client";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import { Inter, Noto_Sans_KR } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const notoSans = Noto_Sans_KR({ subsets: ["latin"] });
export default function Home() {
  return (
    <main className={notoSans.className}>
      <header>
        <Header />
      </header>
      <div>
        <Main />
      </div>
    </main>
  );
}
