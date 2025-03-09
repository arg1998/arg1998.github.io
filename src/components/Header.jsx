import Head from "next/head";

const Header = ({ title, pagePreviewData}) => {

  const { description, keywords, image, url, type = "website" } = pagePreviewData;
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1" />

      <title>{title}</title>
      <meta name="description" content={description || ""} />
      <meta name="keywords" content={keywords || ""} />

      {/* telegram, linkedin, facebook, etc. preview */}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}
      <meta property="og:type" content={type} />

      {/* twitter preview */}
      <meta name="twitter:card" content={image ? "summary_large_image" : "summary"} />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}
      {url && <meta name="twitter:url" content={url} />}


      {/* Favicons */}
      <link rel="icon" href="/assets/images/favicon.png" />
      <link rel="apple-touch-icon" href="/assets/images/apple-touch-icon.png" />
    </Head>
  );
};

export default Header;
