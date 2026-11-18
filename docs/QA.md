# Provera početne stranice

Datum: 18. novembar 2026. Obim: lokalna radna verzija početne stranice.

## Build i statičke provere

- `npm run lint` — prolazi.
- `npm run build` — prolazi, uključujući TypeScript i statičko generisanje početne.
- Produkcioni lokalni server vraća HTTP 200 za početnu.
- Srpska latinica, jedan H1, ispravni lokalni fragmenti i učitavanje fotografija provereni su u browseru. Podnaslov sadrži traženi zarez.

## Browser i ponašanje

Chrome Headless Shell 159 / Playwright 1.65.1, Windows, lokalni produkcioni server. Nema JavaScript grešaka u pregledanim tokovima.

| Širina prikaza | Širina dokumenta | Lokalni LCP | Lokalni CLS | Funkcionalna provera |
| --- | --- | --- | --- | --- |
| 360 px | 360 px | 92 ms | 0.000 | Prolazi |
| 390 px | 390 px | 80 ms | 0.000 | Prolazi |
| 768 px | 768 px | 112 ms | 0.000 | Prolazi |
| 1024 px | 1024 px | 104 ms | 0.000 | Prolazi |
| 1440 px | 1440 px | 108 ms | 0.000 | Prolazi |

Ovo su pojedinačna lokalna merenja, bez ograničenja mreže i procesora, pri visini prikaza 844 px na telefonima i 1000 px na većim širinama. Prikazuju ponašanje lokalnog build-a; ne predstavljaju produkcioni Lighthouse izveštaj ili terenske rezultate. Konačne performanse ponovo proveriti nakon izbora fotografija, CMS povezivanja i hostinga.

Provereno:

- Bez neželjenog horizontalnog skrola na svih pet širina.
- Mobilni meni: otvaranje, zatvaranje tasterom Escape i prelazak na sekciju.
- Desktop podmeni: otvaranje klikom i zatvaranje tasterom Escape.
- Zaglavlje ostaje vidljivo i postaje kompaktnije pri skrolu.
- Galerija ima osam fotografija; uvećavanje, sledeća/prethodna, strelice tastature, kružno listanje i Escape rade na svim širinama.
- Fokus se vraća na fotografiju koja je otvorila dijalog; pozadinski skrol se oslobađa zatvaranjem.
- Hero fotografije razmiču se pri hover-u kada su animacije dozvoljene; ostaju stabilne sa smanjenim kretanjem na desktopu.
- Sve sekcije animirane pri skrolu postaju vidljive. Statičan sadržaj dostupan je i bez JavaScript-a.
- Fotografije u pregledanim tokovima učitavaju se bez grešaka.

## Pristupačnost i vizuelni pregled

Automatska axe-core provera izvršena je za početnu i otvoreni galerijski dijalog na 390 i 1440 px, sa pravilima WCAG 2 A/AA, WCAG 2.1 AA i best-practice. Posle korekcija proverena su i uključena i smanjena kretanja, ukupno osam pregleda. Provera sa animacijama izvršena je nakon završetka ulaznih prelaza. Nema prijavljenih kršenja u tim pregledima. Ovo nije sertifikacija niti potpuna ručna provera pristupačnosti.

Vizuelno pregledani su hero na 360, 768, 1024 i 1440 px, programi na telefonu i računaru, završni CTA, celina desktop stranice i mobilno uvećanje fotografije. Posle korekcija galerija ima dva neprekidna reda u suprotnim smerovima na telefonu i računaru. Svaki red ponavlja četiri originalne fotografije; pri smanjenom kretanju ostaje miran i može se pregledati horizontalno. Programske kartice imaju četiri kolone na većim, dve na srednjim i jednu na uskim ekranima.

## Provera prve četiri naknadne korekcije

Ovaj pregled prethodi sledećim korekcijama hijerarhije dugmadi i uklanjanju kontrole pauze.

- Transparentni PNG ima alfa kanal i čuva proporcije 349:93. Logo je pregledan na krem i tamnoj podlozi, a bele podloge njegovih kontejnera su uklonjene.
- Svih pet glavnih dugmadi koristi zajednički stil. Osnovna boja je `#25B4BC`, hover `#087D84`, a unutar CLIL i završnog tirkiznog bloka `#FFD56A`.
- Na 390 i 1440 px proverena su oba smera galerije, širina ponovljenih grupa, isti prikaz neposredno pre i posle granice ciklusa, pauza i nastavak, otvaranje vizuelne kopije i vraćanje fokusa na original.
- Tastaturom se prolazi kroz osam različitih fotografija, bez duplih stavki; svaka fokusirana fotografija ostaje vidljiva. Dijalog i reduced-motion prikaz i dalje rade.
- Sve tri kartice novosti imaju okvir od 1 px, zaobljenje 26 px i fotografiju uklopljenu u okvir. Pregledane su na 390 i 1440 px.
- Nakon ovih izmena ponovo prolaze lint, produkcioni build i funkcionalna provera na svih pet ciljnih širina. Nema JavaScript grešaka u pregledanim tokovima.

## Priprema za prezentaciju i poslednje korekcije

- Uklonjena je kontakt traka iznad footera i broj pored završnog dugmeta. Footer sadrži oba telefona, e-mail, adresu i radno vreme.
- Spoljni linkovi, telefon i e-mail nemaju aktivan `href`; provereni klikovi ne menjaju stranicu i ne otvaraju druge tabove. Lokalni fragmenti ostaju aktivni.
- Na svih pet ciljnih širina provereno je da granice oba galerijska reda tačno prate zajednički kontejner i da nema horizontalnog preliva stranice. Oba smera i neprimetan spoj petlje prolaze ponovnu proveru.
- Uklonjeno je dugme za pauzu. Uvećavanje, tastatura, povratak fokusa i miran prikaz uz smanjeno kretanje i dalje rade.
- Sva tri primarna dugmeta sada glase „Pozovite nas”, nemaju strelicu, imaju zaobljenje 15 px i jednake leve/desne unutrašnje razmake. Ikonica telefona nema dodatnu levu marginu. Stavka „Kontakt” vodi na kontakt sekciju.
- Galerija i CLIL koriste sekundarni tekstualni stil. CLIL link ima tekst, strelicu i donju liniju `#FFD56A`; završni primarni CTA zadržava popunu `#FFD56A` i pri hover-u.
- Ponovljeni lint i produkcioni build prolaze. Nema JavaScript grešaka u pregledanim tokovima. Poslednja axe provera prezentacione verzije na 390/1440 px i u otvorenom dijalogu nema prijavljenih kršenja.
- Posle prijave da je CLIL link i dalje taman, direktno je proverena aktivna razvojna verzija na `localhost:3000`. Ona je služila CSS bez poslednjeg pravila za boju. Nakon osvežavanja pravila, tekst, SVG strelica i donja linija imaju `rgb(255, 213, 106)` u običnom i hover stanju na 390 i 1440 px. Sačuvani su pregledi `previews/clil-390.png` i `previews/clil-1440.png`.

## Sačuvani pregledi

Poslednja korekcija mobilnog zaglavlja proverena je direktno u aktivnoj razvojnoj verziji na svih pet ciljnih širina. Na mobilnim širinama zaglavlje sadrži logo i burger, burger ima 15 px zaobljenje, a meni sadrži primarni CTA širine tačno 90% ekrana, bez prikaza ranijeg broja telefona. Otvaranje, Escape, povratak fokusa, Kontakt navigacija i prezentaciono isključen poziv rade. Desktop CTA ostaje vidljiv. Novi naslov „Dva prostora. Ista ljubav, ista pažnja.” provereno je ispisan. Nema horizontalnog preliva ni JavaScript grešaka; lint i build prolaze. Razvojni server je ponovo pokrenut da bi prestao da prikazuje zastareli CSS.

- [Otvoren mobilni meni](previews/mobile-menu-390.png)
- [Novi naslov na telefonu](previews/locations-title-390.png)
- [Novi naslov na računaru](previews/locations-title-1440.png)

- [Cela početna na računaru](previews/desktop.png)
- [Cela početna na telefonu](previews/mobile.png)
- [Hero na računaru](previews/desktop-hero.png)
- [Hero na telefonu](previews/mobile-hero.png)
- [Nova galerija na računaru](previews/gallery-1440.png)
- [Nova galerija na telefonu](previews/gallery-390.png)
- [Kartice novosti na računaru](previews/news-1440.png)
- [Kartice novosti na telefonu](previews/news-390.png)

## Preostalo za konačan sadržaj i narednu fazu

Fotografije aktivnosti i druženja za hero nisu dostavljene. Identitet fotografija oba objekta, nazivi i uzrasti programa i kontakt podaci čekaju potvrdu. Oznake radnog sadržaja vidljive su na stranici. Izvori su u [ASSETS.md](ASSETS.md).

Ostale stranice, odgovarajuća interna odredišta i harmonike programa, Sanity sadržaj, kontakt forma i javno lansiranje pripadaju ostatku projekta. Početna trenutno koristi arhivske objave i lokalne fotografije; spoljni linkovi su privremeno isključeni za prezentaciju. Radna verzija ima noindex/nofollow. Nije objavljena.
