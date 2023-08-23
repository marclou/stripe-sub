import Head from "next/head";
import config from "@/config";

// Strctured Data for Rich Results on Google. Learn more: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
// Find your type here (SoftwareApp, Book...): https://developers.google.com/search/docs/appearance/structured-data/search-gallery
// Use this tool to check data is well structure: https://search.google.com/test/rich-results
// You don't have to use this component, but it increase your chances of having a rich snippet on Google
// I recommend the default one below for software apps: It tells Google your AppName is a Software, and it has a rating of 4.8/5 from 12 reviews
// Fill the fields with your own data
const TagSchema = () => {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "SoftwareApplication",
            name: config.appName,
            description: "60 to 180 characters",
            image: `https://${config.domainName}/logo.png`,
            url: `https://${config.domainName}/`,
            author: {
              "@type": "Person",
              name: "Marc Lou",
            },
            datePublished: "2023-08-01",
            applicationCategory: "EducationalApplication",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              ratingCount: "12",
            },
            offers: [
              {
                "@type": "Offer",
                price: "9.00",
                priceCurrency: "USD",
              },
            ],
          }),
        }}
      ></script>
    </Head>
  );
};

export default TagSchema;
