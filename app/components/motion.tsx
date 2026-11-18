"use client";

import { useEffect } from "react";

export function HomeMotion() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches || !("IntersectionObserver" in window)) return;
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) { (entry.target as HTMLElement).dataset.revealed = "true"; observer.unobserve(entry.target); } });
    }, { threshold: 0.08 });
    elements.forEach((element) => { if (element.getBoundingClientRect().top > window.innerHeight) { element.dataset.animate = "true"; observer.observe(element); } });
    const showAll = () => { if (preference.matches) { elements.forEach((element) => { delete element.dataset.animate; }); observer.disconnect(); } };
    const showFocused = (event: FocusEvent) => { (event.target as HTMLElement).closest<HTMLElement>("[data-reveal]")?.setAttribute("data-revealed", "true"); };
    document.addEventListener("focusin", showFocused);
    preference.addEventListener("change", showAll);
    return () => { observer.disconnect(); elements.forEach((element) => { delete element.dataset.animate; }); preference.removeEventListener("change", showAll); document.removeEventListener("focusin", showFocused); };
  }, []);
  return null;
}
