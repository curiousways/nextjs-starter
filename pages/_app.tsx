import { useEffect } from "react";

import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";

import * as Fathom from "fathom-client";

import * as gtag from "../lib/gtag";

import "../styles/globals.css";
// import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const siteUrl = process.env.SITE_URL as string;
  const siteTitle = process.env.SITE_TITLE;
  const fathom = process.env.NEXT_PUBLIC_FATHOM_ANALYTICS_ID as string; //fathom analytics id

  useEffect(() => {
    // Load fathom analytics
    // Fathom.load(fathom, {
    //   includedDomains: [siteUrl],
    // });

    // Google Analytics
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };

    // Fathom Analytics
    // const handleRouteChange = () => {
    //   Fathom.trackPageview();
    // };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <DefaultSeo
        title={siteTitle}
        description="Enter description here"
        canonical={`${siteUrl}${router.pathname}`}
        openGraph={{
          type: "website",
          url: `${siteUrl}`,
          site_name: siteTitle,
          title: siteTitle,
          description: "Enter description here",
          images: [
            {
              url: "Enter social icon path here",
              width: 1200,
              height: 630,
              alt: "Enter social image alt text here",
            },
          ],
        }}
        twitter={{
          handle: "@twitterhandle",
          site: siteUrl,
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
