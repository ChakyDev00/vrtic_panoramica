import type { ReactNode } from "react";

export type IconName = "arrow" | "phone" | "pin" | "clock" | "mail" | "leaf" | "heart" | "chat" | "chevron" | "close" | "menu" | "expand" | "check" | "pause" | "play";
const paths: Record<IconName, ReactNode> = {
  arrow: <path d="M4 12h15M13 5l7 7-7 7" />,
  phone: <path d="m7 3 3 5-2.5 2.5a15 15 0 0 0 6 6L16 14l5 3c-.5 3-2 4-4 4C9 20 4 15 3 7c0-2 1-3.5 4-4Z" />,
  pin: <><path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7 8 6 8-6" /></>,
  leaf: <><path d="M20 3C7 2 2 7 5 15c8 7 16 0 15-12Z" /><path d="M3 21 15 9m-6 6v-5m0 5h5" /></>,
  heart: <path d="M12 21 4.5 13.5C-2 7 6 0 12 7c6-7 14 0 7.5 6.5Z" />,
  chat: <><path d="M21 11a9 8 0 0 1-9 8H7l-5 3 2-6a8 8 0 0 1-1-5 9 8 0 0 1 18 0Z" /><path d="M7 11h.01M12 11h.01M17 11h.01" /></>,
  chevron: <path d="m6 9 6 6 6-6" />,
  close: <path d="m6 6 12 12M6 18 18 6" />,
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  expand: <><path d="M9 3H3v6m12-6h6v6M3 15v6h6m12-6v6h-6" /><path d="m3 3 6 6m12-6-6 6M3 21l6-6m12 6-6-6" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  pause: <path d="M8 5v14M16 5v14" />,
  play: <path d="m8 4 12 8-12 8V4Z" />,
};
export function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  return <svg className={`icon ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}
export function SunDoodle({ className = "" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 150 150" fill="none" aria-hidden="true"><g stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"><path d="m75 7-2 17m37-7-8 16m34 13-17 8m25 29-19-2m-1 38-17-12m-25 35-3-19m-37 7 10-17M13 95l19-5M10 53l19 8m7-37 12 15" /><path d="M106 57c12 24-2 52-29 54-30 2-45-20-39-43 7-29 52-37 68-11Z" /><path d="M57 77v3m29-7v3M62 91c8 7 16 6 21-3" /></g></svg>;
}
export function LeafDoodle({ className = "" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 120 160" fill="none" aria-hidden="true"><path d="M62 150C65 86 66 53 82 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /><path d="M65 108C22 111 15 87 16 63c36 0 53 17 49 45Zm4-39C95 73 115 51 109 28 81 26 68 42 69 69ZM77 37C51 35 40 20 46 3c25 1 34 15 31 34Z" fill="currentColor" /><path d="m32 81 31 26m24-59L72 65" stroke="var(--cream)" strokeWidth="2" strokeLinecap="round" /></svg>;
}
