import { graphql, PageProps } from "gatsby";
import React from "react";

//components
import Layout from "src/components/layout";

//types
import { IAllSanitySkills } from "src/types";

function Skills(props: PageProps<IAllSanitySkills>) {
  const { data } = props;

  return (
    <Layout title="Skills">
      <h1 className="text-center text-3xl font-bold text-primary-color">
        Skills
      </h1>

      <div className="flex flex-wrap gap-10 py-8 justify-center">
        {data.allSanitySkills.nodes.map((node, i) => (
          <div
            className="rounded-3xl px-6 py-1 cursor-pointer flex items-center gap-3 shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] min-w-[200px] text-primary-color font-bold [&:hover>:last-child]:translate-x-0 [&:hover>:last-child]:translate-y-0 [&:hover>:last-child]:!visible relative overflow-hidden [&:hover>:first-child]:scale-75"
            key={i}
          >
            <div
              className="tw-w-14 tw-h-14"
              dangerouslySetInnerHTML={{ __html: node.icon }}
            ></div>

            <p>{node.name}</p>

            <div className="invisible backdrop-blur-md transition-all duration-100 translate-y-1/2 -translate-x-[20%] absolute inset-0 flex justify-center items-center">
              {node.proficiency}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

// Query data
export const query = graphql`
  query {
    allSanitySkills(sort: { fields: _createdAt }) {
      nodes {
        name
        icon
        proficiency
      }
    }
  }
`;

export default Skills;
