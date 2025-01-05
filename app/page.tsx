"use client";
import Footer from "@/components/molecules/footer";
import Header from "@/components/molecules/header";
import Contact from "@/components/organisms/contact";
import Goals from "@/components/organisms/goals";
import Home from "@/components/organisms/home";
import OurServices from "@/components/organisms/our-services";
import Team from "@/components/organisms/team";
import TechnologicalStack from "@/components/organisms/technological-stack";
import Head from "next/head";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[#010207] overflow-hidden">
      <Head>
        <link rel="canonical" href="https://blackgenn.com/" key="canonical" />
      </Head>
      <Header />
      <div className="h-[calc(100dvh-92px)] overflow-y-auto scroll-smooth ">
        <Home />
        <OurServices />
        <TechnologicalStack />
        <Goals />
        <Team />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
