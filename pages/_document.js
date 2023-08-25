import { Html, Head, Main, NextScript } from "next/document";
import config from "@/config";

export default function Document() {
  return (
    <Html lang="en" data-theme={config.colors.theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content={config.colors.main} />
        <meta name="msapplication-TileColor" content={config.colors.main} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="icon" href="/favicon.ico" />

        <script
          defer
          data-domain={config.domainName}
          src="https://plausible.io/js/script.js"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
