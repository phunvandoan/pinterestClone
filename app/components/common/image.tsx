import { IKImage } from "imagekitio-react";

type PropsOfImag = {
  path: string;
  className?: string;
  w?: number;
  h?: number;
  alt?: string;
};

export default function Image({
  path,
  className,
  w,
  h,
  alt = "",
}: PropsOfImag) {
  const urlEndpoint = import.meta.env.VITE_URL_IK_ENDPOINT;
  return (
    <IKImage
      urlEndpoint={urlEndpoint}
      path={path}
      className={className}
      alt={alt}
      transformation={[
        {
          height: h,
          width: w,
        },
      ]}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
    />
  );
}
