import React from "react";

//gatsby image
import { GatsbyImage, GatsbyImageProps } from "gatsby-plugin-image";

interface IProps extends GatsbyImageProps {
  parentClassName: string;
}

function ImageWithLoader(props: IProps) {
  const { parentClassName, className, ...rest } = props;

  const [loader, setLoader] = React.useState(true);
  return (
    <main
      className={`customImageComponent relative flex items-center overflow-hidden justify-center ${parentClassName}`}
    >
      {loader && <mark className="customLoader !absolute"></mark>}

      <GatsbyImage
        onLoad={() => {
          setLoader(false);
        }}
        className={`${loader ? "opacity-0" : ""} ${className}`}
        {...rest}
      />
    </main>
  );
}

export default ImageWithLoader;
