import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GlobalContextProvider } from "@/context/store";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], style: ["normal"] });

export const metadata: Metadata = {
  title: "BlackGenn",
  description:
    "BlackGenn is a synthetic biology company specializing in designing, and engineering microorganisms to accelerate the development of bioproducts for agriculture.",
  metadataBase: new URL("https://blackgenn.com/"),
  openGraph: {
    type: "website",
    title: "BlackGenn",
    description:
      "BlackGenn is a Brazilian biotechnology startup specializing in accelerating biotechnological product development. Leveraging Synthetic Biology, Metagenomics, Automation, and Cloud Computing, it focuses on microbial prospecting and engineering to create innovative agricultural bioproducts efficiently.",
    url: "https://blackgenn.com/",
  },
  keywords: [
    "blackgenn",
    "biotechnology",
    "startup",
    "synthetic biology",
    "metagenomics",
    "cloud computing",
    "bioproducts",
    "agriculture",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is BlackGenn's mission?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BlackGenn is a Brazilian biotechnology startup dedicated to accelerating the development of new biotechnological products. The company integrates advanced techniques in Synthetic Biology, Metagenomics, Automation, and Cloud Computing to develop technologies for engineering microorganisms and creating innovative agricultural bioproducts.",
      },
    },
    {
      "@type": "Question",
      name: "What services does BlackGenn offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BlackGenn offers solutions for microbial prospecting, microorganism engineering, and the creation of agricultural bioproducts using cutting-edge technology to ensure efficient development of innovative biotechnological solutions.",
      },
    },
    {
      "@type": "Question",
      name: "How can I get in touch with BlackGenn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can reach out to BlackGenn via their official website at https://blackgenn.com or through their contact page for inquiries about their services and collaborations.",
      },
    },
  ],
  headline: "FAQs about BlackGenn - A Biotechnology Innovation Company",
  description:
    "Learn more about BlackGenn's mission, services, and how they leverage advanced biotechnological techniques to innovate in agriculture and beyond.",
  author: {
    "@type": "Organization",
    name: "BlackGenn",
    url: "https://blackgenn.com/",
  },
  datePublished: "2024-11-24",
  dateModified: "2024-11-24",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <Script
        id="blackgenn-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <head>
        <link rel="canonical" href="https://blackgenn.com/" key="canonical" />
      </head>

      <GlobalContextProvider>
        <body className={`${inter.className} antialiased`}>
          <main>{children}</main>
        </body>

      </GlobalContextProvider>
    </html>
  );
}
