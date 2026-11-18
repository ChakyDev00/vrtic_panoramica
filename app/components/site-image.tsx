import NextImage, { type ImageProps } from "next/image";

/** Public images need the same deployment prefix as Next.js assets. */
export default function SiteImage({ src, ...props }: ImageProps) {
  const isLocalPath = typeof src === "string" && src.startsWith("/") && !src.startsWith("//");
  const resolvedSrc = isLocalPath ? `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${src}` : src;

  return <NextImage {...props} src={resolvedSrc} />;
}
