import React from "react";

type Props = {
  image: string;
};

export default function Background({ image }: Props) {
  return (
    <div
      className="hidden min-h-screen lg:flex lg:w-1/2 xl:w-2/3 2xwl:w-3/4 bg-contain bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
}
