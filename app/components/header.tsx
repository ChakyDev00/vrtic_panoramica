"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Icon } from "./icons";
import { PresentationLink } from "./presentation-link";

export function Header() {
  const [compact, setCompact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    function onPointer(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
        headerRef.current?.querySelectorAll("details[open]").forEach((el) => el.removeAttribute("open"));
      }
    }
    function onKey(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      const openDetail = headerRef.current?.querySelector<HTMLDetailsElement>("details[open]");
      if (openDetail) { openDetail.open = false; openDetail.querySelector("summary")?.focus(); }
      else if (menuOpen) { setMenuOpen(false); toggleRef.current?.focus(); }
    }
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("pointerdown", onPointer); document.removeEventListener("keydown", onKey); };
  }, [menuOpen]);
  function onNavigate() {
    setMenuOpen(false);
    headerRef.current?.querySelectorAll("details[open]").forEach((el) => el.removeAttribute("open"));
  }
  return <header ref={headerRef} className={`site-header${compact ? " is-compact" : ""}`}>
    <div className="header-inner container">
      <a href="#pocetna" className="brand" aria-label="Panoramica, početak stranice" onClick={onNavigate}><Image src="/images/logo-transparent.png" alt="Panoramica — lepši pogled na detinjstvo, Eco-Schools" width={349} height={93} priority /></a>
      <nav className="desktop-nav" aria-label="Glavna navigacija">
        <details className="nav-dropdown"><summary>O vrtiću <Icon name="chevron" /></summary><div className="dropdown-panel"><a href="#o-vrticu" onClick={onNavigate}>Naš mali svet</a><a href="#objekti" onClick={onNavigate}>Naša dva objekta</a><a href="#ishrana" onClick={onNavigate}>Ishrana</a></div></details>
        <a href="#programi">Programi i CLIL</a>
        <details className="nav-dropdown"><summary>Život u vrtiću <Icon name="chevron" /></summary><div className="dropdown-panel"><a href="#novosti" onClick={onNavigate}>Novosti i priče</a><a href="#galerija" onClick={onNavigate}>Galerija</a></div></details>
        <a href="#kontakt">Kontakt</a>
      </nav>
      <PresentationLink className="button button-primary header-cta" href="tel:+38162595662">Pozovite nas</PresentationLink>
      <button className="menu-toggle" ref={toggleRef} type="button" aria-label={menuOpen ? "Zatvori navigaciju" : "Otvori navigaciju"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}><Icon name={menuOpen ? "close" : "menu"} /></button>
    </div>
    <nav id="mobile-navigation" className="mobile-nav" aria-label="Navigacija za telefon" hidden={!menuOpen}>
      {[["o-vrticu", "O vrtiću"], ["programi", "Programi i CLIL"], ["objekti", "Naši objekti"], ["ishrana", "Ishrana"], ["novosti", "Novosti i priče"], ["galerija", "Galerija"], ["kontakt", "Kontakt"]].map(([id, label]) => <a key={id} href={`#${id}`} onClick={onNavigate}>{label}<Icon name="arrow" /></a>)}
      <PresentationLink href="tel:+38162595662" className="button button-primary mobile-cta"><Icon name="phone" />Pozovite nas</PresentationLink>
    </nav>
  </header>;
}
