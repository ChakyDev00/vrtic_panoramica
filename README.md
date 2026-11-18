# Vrtić Panoramica

Radna verzija početne stranice Panoramice, izrađena u postojećem Next.js projektu prema `PRD.md` i odgovorima na 20 dodatnih pitanja od 18. novembra 2026.

## Pokretanje

```sh
npm ci
npm run dev
```

Otvori http://localhost:3000.

## GitHub Pages

Produkcijska adresa je https://chakydev00.github.io/vrtic_panoramica/.

`npm run build` izvozi sajt u `out/` sa prefiksom `/vrtic_panoramica`, završnom kosom crtom i isključenom serverskom optimizacijom slika. Komponenta `SiteImage` dodaje isti prefiks lokalnim slikama u zaglavlju, sadržaju, galeriji i uvećanom prikazu; sam `basePath` ne menja njihove `src` putanje. CSS, JavaScript i lokalni fontovi koriste Next.js prefiks.

Cache Components i Partial Prefetching isključeni su samo za produkcioni izvoz. `npm run dev` zadržava razvoj na http://localhost:3000/ bez prefiksa. Produkcioni `out/` pregledati običnim HTTP serverom pod `/vrtic_panoramica/`; `next start` nije namenjen statičkom izvozu.

U Settings → Pages izabrati **Source: GitHub Actions**. Nakon commit-a i push-a svih izmena na `main`, `.github/workflows/deploy-pages.yml` automatski pokreće instalaciju, lint, build i objavu. Workflow ne ubacuje dodatnu konfiguraciju u `next.config.ts`, jer se ona već nalazi u projektu. Dodatne tajne nisu potrebne.

## Provere

```sh
npm run lint
npm run build
```

Početna stranica: `app/page.tsx`.
Globalni stilovi: `app/globals.css`.

Komponente u `app/components/` sadrže navigaciju, ilustracije programa, animacije i galeriju sa pristupačnim uvećanjem fotografija. Fredoka je smeštena lokalno u `app/fonts/`, sa priloženom OFL licencom. Za prikaz nisu potrebni Google Fonts zahtevi.

Galerija ima dva neprekidna reda u suprotnim smerovima, unutar zajedničkog kontejnera, bez posebnog dugmeta za pauzu. Pri smanjenom kretanju prikaz je miran. Osam originalnih fotografija ostaje dostupno tastaturom; vizuelna ponavljanja ne dodaju duple stavke u redosled tabulacije. Logo bez pozadine je `public/images/logo-transparent.png`. Primarna dugmad „Pozovite nas” koriste tirkiznu, a u završnom tirkiznom bloku `#FFD56A`; nemaju strelicu, zaobljenje je 15 px i bočni padding je jednak. Galerija i CLIL imaju sekundarni tekstualni link; na tirkiznoj podlozi on je `#FFD56A`.

## Obim ove faze

Implementirana je samo početna stranica. Glavni meni vodi na njene sekcije; u zaglavlju je „Pozovite nas” umesto „Upis”. Tokom prezentacije klijentu `PresentationLink` uklanja izlazne adrese sa svih linkova koji nisu fragmenti ove početne, uključujući telefon i e-mail. Oni zadržavaju izgled i imaju `aria-disabled`; ne otvaraju druge sajtove, aplikacije ili tabove. Nisu kreirane druge stranice, Sanity integracija ili kontakt forma. Pri izradi ostalih stranica zameniti prezentacione linkove konačnim odredištima iz PRD-a i povezati objave i galeriju sa CMS-om.

Mobilno zaglavlje prikazuje samo logo i burger sa zaobljenjem 15 px. „Pozovite nas” je u otvorenom mobilnom meniju umesto broja telefona, na 90% širine ekrana. Naslov objekata je „Dva prostora. Ista ljubav, ista pažnja.”

Radna verzija ima `noindex, nofollow`. Pre javnog lansiranja potvrditi materijale i podatke, završiti ostatak dogovorenog obima i zameniti ovu postavku produkcionim SEO podacima.

## Materijali za potvrdu

- Logo i reference su iz dostavljenog `public/images/` foldera; reference nisu korišćene kao fotografije vrtića.
- Fotografije prostora, kuhinje i tri arhivske objave preuzete su sa postojećeg sajta. Izvori su evidentirani u `docs/ASSETS.md`.
- Hero trenutno koristi fotografije prostora. Zameniti ih odobrenim fotografijama aktivnosti i druženja prema odgovoru 7.
- Pripadnost fotografija pojedinačnim objektima, kontakt podaci, nazivi i uzrasti programa čekaju potvrdu. Nedostaci su označeni u samom radnom prikazu.
- Predlozi kratkih tekstova i kreativnih naslova programa služe za pregled; nisu predstavljeni kao odobreni zvanični nazivi grupa.

## Provere interakcija

Proveriti meni klikom i tastaturom, zatvaranje tasterom Escape, hero na telefonu, svih osam galerijskih fotografija, listanje strelicama i dugmadima, vraćanje fokusa i sistemsko smanjenje animacija. Ciljne širine su 360, 390, 768, 1024 i 1440 px.
"# vrtic_panoramica" 
