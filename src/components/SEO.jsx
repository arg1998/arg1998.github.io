import Head from "next/head";

const SEO = ({ title, description, keywords }) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, height=device-height, initial-scale=1"
      />
      <title>{title}</title>
      <meta name="description" content={description || ""} />
      <meta name="keywords" content={keywords || ""} />

      {/* Favicons */}
      <link rel="icon" href="/assets/images/favicon.png" />
      <link rel="apple-touch-icon" href="/assets/images/apple-touch-icon.png" />
    </Head>
  );
};

export default SEO;
