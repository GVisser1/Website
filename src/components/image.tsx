import type { JSX } from "react";

type ImageProps = {
  src: string;
  alt: string;
  // The file's own pixel size, so the browser can reserve the right shape before the image loads
  width: number;
  height: number;
  // Smaller versions for small screens, as an HTML srcset, with sizes describing how wide the image is shown
  srcSet?: string;
  sizes?: string;
  className?: string;
  priority?: boolean;
};

const Image = (props: ImageProps): JSX.Element => (
  <img
    src={props.src}
    alt={props.alt}
    width={props.width}
    height={props.height}
    srcSet={props.srcSet}
    sizes={props.sizes}
    className={props.className}
    fetchPriority={props.priority ? "high" : "auto"}
    loading={props.priority ? "eager" : "lazy"}
  />
);

export default Image;
