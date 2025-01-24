"use client";
import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
export default function Home() {
  return (
    <main>
      <header>
        <Header />
      </header>
      <div>
        <Main />
      </div>
    </main>
  );
}
