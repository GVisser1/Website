import NextImage from "next/image";
import type { JSX, Ref } from "react";

type ImageProps = {
  ref?: Ref<HTMLImageElement>;
  src: string;
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
    priority={props.priority}
  />
);

export default Image;
