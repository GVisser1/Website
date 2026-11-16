import type { JSX } from "react";

type ImageProps = {
  src: string;
  alt: string;
  // The file's own pixel size, so the browser can reserve the right shape before the image loads
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
};

const Image = (props: ImageProps): JSX.Element => (
  <img
    src={props.src}
    alt={props.alt}
    width={props.width}
    height={props.height}
    className={props.className}
    fetchPriority={props.priority ? "high" : "auto"}
    loading={props.priority ? "eager" : "lazy"}
  />
);

export default Image;
