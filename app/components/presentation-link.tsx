import type { AnchorHTMLAttributes } from "react";

/** Keep only this page's section links active during the client presentation. */
export function PresentationLink({ href, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (href?.startsWith("#") && href.length > 1) {
    return <a {...props} href={href} />;
  }

  return <a {...props} href={undefined} target={undefined} rel={undefined} onClick={undefined} role="link" aria-disabled="true" tabIndex={-1} data-presentation-disabled="true" />;
}
