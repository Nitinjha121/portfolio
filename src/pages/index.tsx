import { graphql, Link, PageProps } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import React from "react";

//components
import ImageWithLoader from "src/components/ImageWithLoader";
import Layout from "src/components/layout";
import SEO from "src/components/SEO";

//types
import { ISanityHome } from "src/types";

//icons
import { GitHub } from "src/icons";

const IndexPage = (props: PageProps<{ sanityHome: ISanityHome }>) => {
  const { data } = props;
  const imageData = getImage(data.sanityHome.homeImage.asset.gatsbyImageData);

  return (
    <Layout {...props}>
      <main className="flex items-center h-full">
        <div className="flex-1 sm:flex-[0.6]">
          <h1 className="text-5xl leading-snug font-bold flex-1">
            {data.sanityHome.heading}
            <br /> <span>{data.sanityHome.name}</span>
            <br />
            <span className="text-primary-color">
              {data.sanityHome.profession}
            </span>
          </h1>

          <p className="font-bold text-gray-600 py-4">
            {data.sanityHome.description}
          </p>

          <Link
            to={"/contact-me/"}
            className="mb-4 rounded-lg inline-block overflow-hidden relative border border-primary-color [&:hover>:last-child]:-translate-y-full [&:hover>:first-child]:text-black hover:shadow-lg"
          >
            <span className="px-10 py-2 block z-30 relative font-semibold text-white transition-all duration-300">
              Contact Me
            </span>
            <span className="z-10 -translate-y-full block text-primary-color px-4 py-2 bg-white absolute"></span>
            <span className="block transition-all duration-300 pb-1 bg-primary-color text-white z-10 inset-0 absolute"></span>
          </Link>

          <a href={data.sanityHome.github} target={"_blank"}>
            <GitHub className={`hover:text-green-500`} width={30} height={30} />
          </a>
        </div>

        <ImageWithLoader
          parentClassName="flex-1 object-cover hidden sm:block w-0"
          alt="Home"
          image={imageData!}
        />
      </main>
    </Layout>
  );
};

// Query data
export const query = graphql`
  query {
    sanityHome {
      name
      heading
      homeCta
      profession
      github
      description
      homeImage {
        asset {
          url
          gatsbyImageData
        }
      }
    }
  }
`;

export const Head = () => <SEO />;

export default IndexPage;
