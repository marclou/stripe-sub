import Head from "next/head";
import PropTypes from "prop-types";
import config from "@/config";

const defaults = {
  title: "up to 50 characters | App Name",
  description: "60 to 180 characters",
  keywords: "App Name, some other keywords if needed",
  og: {
    title: "up to 50 characters | App Name",
    description: "60 to 180 characters",
    image: `https://${config.domainName}/shareMain.png`,
    url: `https://${config.domainName}/`,
  },
};

// This components should be added to every pages you want to rank on Google (in /pages directory)
const SEOTags = ({
  children,
  title,
  description,
  keywords,
  og,
  canonicalSlug,
}) => {
  return (
    <Head>
      {/* TITLE */}
      <title key="title">{title || defaults.title}</title>

      {/* METAS */}
      <meta
        name="description"
        key="description"
        content={description || defaults.description}
      />
      <meta
        name="keywords"
        key="keywords"
        content={keywords || defaults.keywords}
      />

      {/* OG METAS */}
      <meta property="og:title" content={og?.title || defaults.og.title} />
      <meta
        property="og:description"
        key="og:description"
        content={og?.description || defaults.og.description}
      />
      <meta
        property="og:image"
        key="og:image"
        content={og?.image || defaults.og.image}
      />
      <meta property="og:url" content={og?.url || defaults.og.url} />

      {/* CANONICAL TAG */}
      <link
        rel="canonical"
        href={`https://${config.domainName}/${canonicalSlug}`}
      />

      {/* CHILDREN TAGS */}
      {children}
    </Head>
  );
};

export default SEOTags;

SEOTags.propTypes = {
  canonicalSlug: PropTypes.string.isRequired,
};
