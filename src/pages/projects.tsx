import { graphql, PageProps } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import React from "react";

//components
import ImageWithLoader from "src/components/ImageWithLoader";
import Layout from "src/components/layout";

//types
import { IAllSanityProjects } from "src/types";

//icons
import { GitHub, LinkAlt } from "src/icons";

function Projects(props: PageProps<IAllSanityProjects>) {
  const { data } = props;

  return (
    <Layout title="Projects">
      <h1 className="text-center text-3xl font-bold text-primary-color">
        Projects
      </h1>

      <div className="flex flex-wrap py-8 gap-10 justify-center">
        {data.allSanityProject.nodes.map((node, i) => {
          const imageData = getImage(node.image.asset.gatsbyImageData);

          return (
            <div
              className="rounded-lg px-6 py-5 cursor-pointer flex flex-col items-center gap-3 shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] max-w-xl text-primary-color font-bold [&:hover>:last-child]:!visible relative overflow-hidden [&:hover>:first-child]:scale-75"
              key={i}
            >
              <ImageWithLoader
                alt={node.name}
                image={imageData!}
                parentClassName="scale-1 transition-all duration-200"
              />
              <p>{node.name}</p>

              <div className="invisible backdrop-blur-md absolute inset-0 flex justify-center items-center gap-10">
                <a
                  href={node.link}
                  target="_blank"
                  className="rounded px-3 py-1 block hover:text-primary-color hover:bg-white bg-primary-color text-white"
                >
                  <LinkAlt width={30} height={30} />
                </a>

                <a
                  href={node.githubLink}
                  target="_blank"
                  className="rounded px-3 py-1 block hover:text-primary-color hover:bg-white bg-primary-color text-white"
                >
                  <GitHub width={30} height={30} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export default Projects;

// Query data
export const query = graphql`
  query {
    allSanityProject {
      nodes {
        image {
          asset {
            url
            gatsbyImageData
          }
        }
        name
        link
        githubLink
      }
    }
  }
`;
