import React from "react";
import { Helmet } from "react-helmet";
import config from "../../../data/SiteConfig";

const SEO = ({ title, description }) => {
  const schemaOrgJSONLD = {
    "@context": "https://schema.org",
    "@type": "Person",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": config.authorLocation,
    },
    "email": `mailto:${config.authorMail}`,
    "image": "image.png",
    "jobTitle": config.authorJob,
    "name": config.siteTitle,
    "telephone": config.authorNumber,
    "url": config.siteUrl
  }
  return (
    <Helmet>
      <html lang="en" />

      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, minimum-scale=1 " />

      <meta name="full-screen" content="yes" />
      <meta name="browsermode" content="application" />
      <meta name="layoutmode" content="fitscreen/standard" />
      <meta name="imagemode" content="force" />
      <meta name="screen-orientation" content="portrait" />

      <meta name="robots" content="index, follow" />
      <meta name="distribution" content="global" />
      <meta http-equiv="content-language" content="en" />
      <meta http-equiv="language" content="en" />

      <title>{title}</title>

      <meta name="description" content={description} data-react-helmet="true" />
      <meta name="image" content="https://lisandropat.com/image.png" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://lisandropat.com/image.png" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://lisandropat.com/image.png" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ottokoi" />
      <meta name="twitter:creator" content="@ottokoi" />

      <link rel="preconnect dns-prefetch" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet dns-prefetch" />
      
      <link href="//cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet dns-prefetch" />

      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
      
    </Helmet>
  )
}

export default SEO;
