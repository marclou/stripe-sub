const config = {
  // REQUIRED
  appName: "ShipFast",
  // REQUIRED
  domainName: "shipfa.st",
  crisp: {
    // REQUIRED — Crisp website ID. If you don't use Crisp, just remove this below
    id: "3878e3c2-74cb-498b-a360-4419fb8e7c9b",
    // Hide Crisp by default. If you want to show Crisp on every routes, just remove this below
    onlyShowOnRoutes: ["/"],
  },
  stripe: {
    plans: [
      {
        name: "Starter",
        priceId:
          process.env.NODE_ENV === "development" ? "price_123" : "price_456",
        price: 19,
        features: [
          {
            name: "Unlimited access",
          },
          { name: "24/7 support" },
        ],
      },
    ],
  },
  aws: {
    // If you use AWS S3/Cloudfront, put values in here
    bucket: "bucket-name",
    bucketUrl: `https://bucket-name.s3.amazonaws.com/`,
    cdn: "https://cdn-id.cloudfront.net/",
  },
  mailgun: {
    // subdomain to use when sending emails, if you don't have a subdomain, just remove it. Highly recommended to have one (i.e. mg.yourdomain.com or mail.yourdomain.com)
    subdomain: "mg",
    // REQUIRED — Email 'From' field to be used when sending magic login links
    fromNoReply: `ShipFast <noreply@mg.shipfa.st>`,
    // REQUIRED — Email 'From' field to be used when sending other emails, like abandoned carts, updates etc..
    fromAdmin: `Marc at ShipFast <marc@mg.shipfa.st>`,
    // When someone replies to an email sent by the app, forward it to this email. Leave empty to disable this feature
    forwardRepliesTo: "marc.louvion@gmail.com",
  },
  colors: {
    // REQUIRED — This colors will be reflected on the whole app (loading bar, Chrome tabs, etc..)
    main: "#f37055",
  },
};

export default config;
