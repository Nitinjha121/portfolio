import React from "react";
import { graphql, useStaticQuery } from "gatsby";

//react helmet
import { Helmet } from "react-helmet";

//types
import { ISanityMetaTag } from "src/types";

interface IProps {
  title: string;
}

function SEO(props: IProps) {
  const { title } = props;

  const data = useStaticQuery<ISanityMetaTag>(graphql`
    query MyQuery {
      sanityMetatag {
        image {
          asset {
            url
          }
        }
        title
      }
    }
  `);

  return (
    <Helmet>
      <title>
        {title} | {data.sanityMetatag.title}
      </title>
      <link rel={"icon"} href={data.sanityMetatag.image.asset.url} />
    </Helmet>
  );
}

export default SEO;
