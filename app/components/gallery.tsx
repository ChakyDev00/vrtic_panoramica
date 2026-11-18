"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Icon } from "./icons";

const photos = [
  { file: "gallery-1", alt: "Zajednički prostor sa niskim stolićima i dečjim ormarićima", caption: "Prostor za male susrete" },
  { file: "gallery-5", alt: "Prostrana sala za igru sa velikim prozorima", caption: "Mesto za pokret i igru" },
  { file: "room-2", alt: "Svetla soba sa zelenim detaljima, stolovima i stolicama za decu", caption: "Kutak za nova otkrića" },
  { file: "gallery-7", alt: "Žuti hodnik vrtića sa kružnim prozorima na vratima", caption: "Iza svakih vrata, novi svet" },
  { file: "gallery-9", alt: "Trpezarija sa dečjim stolovima i kružnim plafonskim svetlima", caption: "Za zajedničkim stolom" },
  { file: "gallery-4", alt: "Pult sa logom Panoramice ispred dečjih ormarića", caption: "Dobro došli u Panoramicu" },
  { file: "gallery-8", alt: "Ilustracija Beograda na zidu u hodniku vrtića", caption: "Naš grad, naš mali svet" },
  { file: "gallery-6", alt: "Sala sa plavim krugom na podu i velikim prozorima", caption: "Dovoljno prostora za maštu" },
];
export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (selected === null) return;
    const dialog = dialogRef.current;
    if (!dialog?.open) { dialog?.showModal(); closeRef.current?.focus(); }
  }, [selected]);
  function close() { dialogRef.current?.close(); }
  function move(direction: number) { setSelected((current) => current === null ? null : (current + direction + photos.length) % photos.length); }
  function open(index: number) {
    lastTriggerRef.current = galleryRef.current?.querySelector<HTMLButtonElement>(`[data-photo-index="${index}"]:not([data-copy])`) ?? null;
    setSelected(index);
  }
  return <>
    <div ref={galleryRef} className={`gallery-marquee${selected !== null ? " is-paused" : ""}`} data-reveal>
      {[0, 1].map((row) => <div className={`gallery-row gallery-row-${row + 1}`} key={row} role="group" aria-label={`${row + 1}. red fotografija`} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) event.currentTarget.scrollLeft = 0; }}>
        <div className="gallery-track">
          {[0, 1].map((copy) => <div className="gallery-group" key={copy}>
            {photos.slice(row * 4, row * 4 + 4).map((photo, position) => {
              const index = row * 4 + position;
              return <button key={photo.file} type="button" className={`gallery-photo gallery-photo-${index + 1}`} data-photo-index={index} data-copy={copy ? "true" : undefined} aria-hidden={copy ? true : undefined} tabIndex={copy ? -1 : 0} aria-label={`Uvećaj fotografiju ${index + 1} od ${photos.length}: ${photo.alt}`} aria-haspopup="dialog" onClick={() => open(index)} onFocus={(event) => { if (event.currentTarget.matches(":focus-visible")) event.currentTarget.scrollIntoView({ block: "nearest", inline: "nearest" }); }}>
                <Image src={`/images/panoramica/${photo.file}.webp`} alt={copy ? "" : photo.alt} width={1000} height={667} sizes="(max-width: 600px) 200px, (max-width: 1100px) 275px, 300px" /><span className="gallery-expand"><Icon name="expand" /></span><span className="gallery-caption">{photo.caption}</span>
              </button>;
            })}
          </div>)}
        </div>
      </div>)}
    </div>
    <dialog className="lightbox" ref={dialogRef} aria-labelledby="lightbox-title" onClose={() => { setSelected(null); lastTriggerRef.current?.focus({ preventScroll: true }); }} onClick={(event) => { if (event.target === event.currentTarget) close(); }} onKeyDown={(event) => { if (event.key === "ArrowRight") { event.preventDefault(); move(1); } if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); } }}>
      <div className="lightbox-content"><div className="lightbox-top"><span>Naš mali svet</span><button ref={closeRef} className="lightbox-control" type="button" onClick={close} aria-label="Zatvori uvećanu fotografiju"><Icon name="close" /></button></div>
        {selected !== null && <><Image className="lightbox-image" src={`/images/panoramica/${photos[selected].file}.webp`} width={1000} height={667} sizes="(max-width: 800px) 92vw, 1000px" alt={photos[selected].alt} /><div className="lightbox-bottom"><div aria-live="polite" aria-atomic="true"><h3 id="lightbox-title">{photos[selected].caption}</h3><span>{selected + 1} / {photos.length}</span></div><div className="lightbox-arrows"><button type="button" className="lightbox-control previous" onClick={() => move(-1)} aria-label="Prethodna fotografija"><Icon name="arrow" /></button><button type="button" className="lightbox-control" onClick={() => move(1)} aria-label="Sledeća fotografija"><Icon name="arrow" /></button></div></div></>}
      </div>
    </dialog>
  </>;
}
