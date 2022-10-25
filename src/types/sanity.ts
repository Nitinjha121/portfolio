import { GatsbyImageDataArgs } from "gatsby-source-sanity";

export interface ISanityHome {
  name: string;
  heading: string;
  homeCta: string;
  profession: string;
  homeImage: ISanityImageStructure;
  github: string;
  description: string;
}

export interface ISanitySkills {
  name: string;
  proficiency: string;
  icon: string;
}

export interface ISanityProjects {
  name: string;
  link: string;
  image: ISanityImageStructure;
  githubLink: string;
}

export interface IAllSanitySkills {
  allSanitySkills: {
    nodes: ISanitySkills[];
  };
}

export interface IAllSanityProjects {
  allSanityProject: {
    nodes: ISanityProjects[];
  };
}

export interface ISanityImageStructure {
  asset: { url: string; gatsbyImageData: GatsbyImageDataArgs };
}
