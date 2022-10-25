import React from "react";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  state: boolean;
}

const beforeClassName = `before:w-8 before:h-1 before:-top-2 before:absolute before:bg-black before:content-[''] before:transition-all before:duration-300`;
const afterClassName = `after:w-8 after:h-1 after:bg-black after:content-[''] after:top-2 after:absolute after:transition-all after:duration-300`;
const stateChangeClassName = `!bg-transparent before:rotate-[135deg] after:-rotate-[135deg] after:!top-0 before:!top-0`;

function AnimatedCross(props: IProps) {
  const { className = "", state, ...restAttributes } = props;

  return (
    <div
      className={`cursor-pointer h-full flex items-center justify-center ${className}`}
      {...restAttributes}
    >
      <div
        className={`w-8 h-1 relative bg-black ${beforeClassName} ${afterClassName} ${
          state ? stateChangeClassName : ""
        }`}
      ></div>
    </div>
  );
}

export default AnimatedCross;
