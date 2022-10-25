import React from "react";
import { graphql, useStaticQuery } from "gatsby";

function SEO() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <title>{data.site.siteMetadata.title}</title>
      {/* <meta /> */}
    </>
  );
}

export default SEO;
