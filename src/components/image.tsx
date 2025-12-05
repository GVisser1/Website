import type { StaticImageData } from "next/image";
import NextImage from "next/image";
import type { JSX, Ref } from "react";

type ImageProps = {
  ref?: Ref<HTMLImageElement>;
  src: string | StaticImageData;
  alt: string;
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
  "aria-hidden"?: boolean;
  priority?: boolean;
};

const Image = (props: ImageProps): JSX.Element => (
  <NextImage
    ref={props.ref}
    src={props.src}
    alt={props.alt}
    className={props.className}
    sizes="100vw"
    width={0}
    height={0}
    onLoad={props.onLoad}
    onError={props.onError}
    aria-hidden={props["aria-hidden"]}
    fetchPriority={props.priority ? "high" : "auto"}
    preload={props.priority}
    loading={props.priority ? "eager" : "lazy"}
  />
);

export default Image;
