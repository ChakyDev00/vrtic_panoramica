# PRD — novi sajt vrtića Panoramica

Verzija: 1.0  
Datum: 18. novembar 2026.  
Klijent: PU Panoramica  
Izvođač: Vladimir Milenković / Chaky Agency  
Osnova: izabrani CMS paket, 690 €  
Namena: specifikacija za dizajn, implementaciju i proveru sajta.

## 1. Sažetak projekta

Napraviti moderan, topao i pregledan prezentacioni sajt koji predstavlja Panoramicu i Panoramica Junior kao ravnopravne objekte iste ustanove. Roditelj treba brzo da razume pristup radu, pronađe program za uzrast svog deteta, upozna prostor i dobije informacije o upisu.

Početna stranica usmerava roditelja na telefonski poziv. Stranica Kontakt ravnopravno ističe telefon i kontakt formu. Ovlašćena osoba u vrtiću samostalno ažurira fotografije i novosti kroz Sanity CMS; ostali sadržaji uređuju se kroz kod, u dogovoru sa izvođačem.

Vizuelna osnova je tirkizna `#25B4BC`, topla krem pozadina, žuti i narandžasti akcenti, font Fredoka za sav tekst i postojeći Panoramica logo. Lokalna referenca `treca.webp` određuje kompoziciju hero sekcije, galerijskog prikaza na početnoj i završnog CTA bloka. `prva.jpg` određuje strukturu kartica programa.

## 2. Izvori i pravilo tumačenja

| Izvor | Šta određuje |
| --- | --- |
| [Prihvaćena ponuda](https://docs.google.com/document/d/10mBPe5suZK1Se2osuMr49tjo1Q41GX2D/edit) | Paket, stranice, CMS obim, početni unos, korekcije i uslovi |
| Klijentovi odgovori na tri slike dostavljene u razgovoru | Ciljeve, publiku, zadržavanje sadržaja, potrebe zaposlenih i materijale |
| Prilog `Pasted text.txt`, dostavljen 18.11.2026. | Odgovore izvođača na 20 projektnih pitanja i konkretne dizajnerske odluke |
| [Postojeći sajt](https://www.panoramica.rs/) | Polazni sadržaj i postojeće URL adrese; podaci za potvrdu pre objave |
| `public/images/logo.jpg` | Postojeći logo i identitet ustanove |
| `public/images/treca.webp` | Hero, početnu galeriju i završni CTA |
| `public/images/prva.jpg` | Raspored i anatomiju kartica programa |
| `package.json`, `app/`, `README.md` | Postojeću tehničku osnovu projekta |

Google Forms odgovor nije čitan kroz originalni editor; klijentovi odgovori preuzeti su sa dostavljenih slika. Specifikacija obuhvata vidljive odgovore sa tih slika.

Kada se tekst odgovora izvođača razlikuje od slova iz ponuđenog izbora, važi njegov napisani tekst. Tako odgovor 2 znači sigurnost i individualni pristup + CLIL + eko-identitet, a odgovor 19 znači da rok trenutno nije prioritet. Novije projektne odluke imaju prednost u detaljima izvedbe; proširenja plaćenog obima evidentiraju se zasebno.

**Status odluka:** potvrđeni zahtevi potiču iz prethodnih izvora. Stavke označene kao „predlog izvedbe” predstavljaju razumna implementaciona rešenja. Otvorene stavke iz odeljka 14 rešavaju se tokom pripreme materijala i infrastrukture.

## 3. Ciljevi, publika i merila uspeha

### 3.1. Ciljevi klijenta

- Moderniji i profesionalniji izgled usklađen sa identitetom vrtića.
- Pregledno predstavljanje oba objekta.
- Više upita zainteresovanih roditelja.
- Jednostavno samostalno ažuriranje galerije i novosti.
- Bolja tehnička osnova za vidljivost na Google pretrazi.
- Zadržavanje većine važnog postojećeg sadržaja, uz jasniju organizaciju.

Klijent navodi da već ima većinu fotografija, video-materijala i tekstova i da očekuje izmene retko, nekoliko puta godišnje. Između objekata postoje manje razlike. Samostalno uređivanje traženo je za fotografije/galeriju i novosti/blog/obaveštenja.

### 3.2. Publika

Podjednako su važne porodice sa decom jaslenog, vrtićkog i predškolskog uzrasta, kao i roditelji dece koja već pohađaju ustanovu. Navigacija ne sme da favorizuje samo jedan uzrast ili jedan objekat.

| Korisnik | Glavna potreba | Očekivani put |
| --- | --- | --- |
| Roditelj koji istražuje vrtić | Razumevanje pristupa i ponude | Početna → programi ili objekti → poziv |
| Roditelj spreman da kontaktira | Brzo pronalaženje broja ili forme | Vidljiv telefon ili Kontakt → upit |
| Roditelj koji razmatra upis | Proces, dokumentacija, subvencije | Upis → Kontakt ili poziv |
| Postojeći roditelj | Fotografije, novosti i korisne informacije | Galerija / Novosti / Upis |
| Odgovorna osoba vrtića | Retko i jednostavno osvežavanje sadržaja | CMS → izmena → objavljivanje |

### 3.3. Kako procenjujemo rezultat

Za lansiranje su merodavni funkcionalni kriterijumi iz odeljka 15. Poslovni rezultat posle lansiranja može se pratiti brojem stvarnih upita i povratnim informacijama roditelja; brojčani ciljevi nisu dogovoreni. Ne obećava se konkretna Google pozicija ili procenat rasta upita.

Analitika, oglasni pikseli i sistem praćenja poziva nisu deo osnovnog obima. Eventualno uvođenje definiše se posebno, uz dogovor o alatima i troškovima.

## 4. Obim projekta

### 4.1. Uključeno u paket od 690 €

- Osam glavnih stranica i šablon pojedinačne novosti.
- Responzivan dizajn za telefon, tablet i računar.
- Programi po uzrastu, CLIL, ishrana, stručni tim i oba objekta.
- Kontakt forma koja prosleđuje poruku na dogovoreni e-mail, klik za poziv, e-mail i mapa.
- Informativna stranica o upisu, dokumentaciji, subvencijama i čestim pitanjima.
- Sanity CMS za dodavanje, zamenu i uklanjanje fotografija, kao i uređivanje i objavljivanje novosti/blog tekstova.
- Početni unos do 20 dostavljenih fotografija i do tri odabrane novosti.
- Preraspodela i preoblikovanje postojećih informacija za jasnije stranice.
- Osnovna tehnička i on-page SEO priprema, povezivanje domena i dogovorena 301 preusmerenja.
- Kratko CMS uputstvo i dve objedinjene runde korekcija pre objave.
- Podrška za tehničke greške povezane sa objavljivanjem tokom 14 dana od lansiranja.

### 4.2. Granice obima

Programi, objekti, tim, ishrana, informacije o upisu, osnovni kontakt podaci, navigacija i hero ostaju statični. CMS nije opšti alat za menjanje rasporeda stranica, boja ili fontova.

Online prijava za upis, zakazivanje obilaska, obrada prijava, roditeljski portal, aplikacija, online plaćanje, dodatni jezici, kompletna migracija arhive, novo profesionalno snimanje i potpuno novo pisanje svih tekstova nisu uključeni. Video nije obavezni deo početne verzije; postojeći video može se naknadno razmotriti u okviru konačnog rasporeda materijala.

## 5. Struktura sajta i navigacija

| Stranica | Planirana putanja | Sadržaj | Način izmene |
| --- | --- | --- | --- |
| Početna | `/` | Sažet pregled ustanove i CTA za poziv | Statično + prikazi iz CMS-a |
| O vrtiću i objekti | `/o-vrticu` | Pristup, misija, tim, oba objekta i njihove posebnosti | Statično |
| Programi i CLIL | `/programi-i-clil` | Četiri programske celine, detalji i CLIL | Statično |
| Ishrana | `/ishrana` | Sopstvena kuhinja i pristup ishrani | Statično |
| Galerija | `/galerija` | Zajednička galerija, eventualni filteri | Sanity fotografije |
| Novosti i blog | `/novosti` | Pregled objava | Sanity objave |
| Pojedinačna objava | `/novosti/[slug]` | Naslov, fotografija, datum i sadržaj | Sanity objava |
| Upis i informacije za roditelje | `/upis` | Proces, dokumentacija, subvencije i FAQ | Statično |
| Kontakt | `/kontakt` | Telefon, forma, adresa, radno vreme i mapa | Statično + slanje forme |

Pojedinačna objava je šablon CMS sadržaja uz osam glavnih stranica. Predložene nove putanje finalizuju se zajedno sa mapom preusmerenja.

**Predlog izvedbe menija:** logo vodi na početnu; „O vrtiću” otvara i podmeni za objekte, tim i ishranu; „Programi i CLIL” vodi na programe; „Život u vrtiću” sadrži galeriju i novosti; „Kontakt” je zasebna stavka; „Upis” je istaknuto dugme ka `/upis`.

Podmeniji moraju raditi klikom i tastaturom, kao i pokazivačem. Na telefonu se koristi pregledan sklopivi meni. Footer ponavlja linkove ka svih osam glavnih stranica i osnovne kontakt podatke.

## 6. Specifikacija početne stranice

Redosled je potvrđen odgovorom izvođača. Kratki CLIL prikaz uklopiti u deo sa programima; potvrde poverenja uklopiti u prednosti i predstavljanje vrtića.

### 6.1. Hero i najvažnije prednosti

- Glavni naslov: **„Lepši pogled na detinjstvo”**.
- Kratak uvod predstavlja Panoramicu i vrednost za dete i porodicu.
- Tri komplementarne poruke: sigurnost i individualni pristup, CLIL, eko-identitet.
- Istaknuto dugme „Pozovite nas” otvara `tel:` link sa potvrđenim primarnim brojem.
- Centralno postavljeni tekst i tri preklopljene fotografije prema `treca.webp`, sa centralnom fotografijom kao glavnom.
- Na uređajima sa pokazivačem fotografije se na hover blago razmiču tako da se vide sve tri. Kretanje mora ostati unutar kompozicije i ne sme prekrivati naslov ili dugme.
- Na telefonu sve tri ostaju dostupne u prilagođenom, mirnom rasporedu. Suštinski sadržaj se vidi bez hover interakcije; uz smanjene animacije koristi se stabilan raspored.
- Zaobljene maske, diskretni ukrasi i organski prelaz u narednu sekciju prate referencu i Panoramica paletu.

Hero koristi autentične dostavljene fotografije. Referentne slike služe za kompoziciju; njihovi tuđi logotipi, tekstovi, ocene i fotografije ne prenose se u konačan sadržaj.

### 6.2. Novosti ukratko

Do tri najnovije objavljene novosti, sa naslovom, fotografijom, datumom i kratkim uvodom. Kartica vodi na pojedinačnu objavu, a link „Sve novosti” na `/novosti`. Prikaz koristi stvarne datume; starim tekstovima se ne dodeljuje izmišljeni novi datum. Ako nema objava, sekcija se izostavlja.

### 6.3. Ukratko o vrtiću

Sažet tekst o pristupu, podršci detetu i saradnji sa porodicom, uz autentičnu fotografiju i link ka `/o-vrticu`. Potvrđene informacije o timu, sertifikatima i iskustvima roditelja mogu ojačati ovu sekciju. Nedostajući podaci se ne zamenjuju izmišljenim ocenama, statistikama ili izjavama.

### 6.4. Pregled programa i kratak CLIL uvod

Četiri kartice prema strukturi „Our Programs” iz `prva.jpg`: zaobljena pastelna površina, vizuelni motiv ili fotografija, naziv, uzrast, kratak opis i link. Predlog rasporeda je četiri kolone na većim ekranima, dve na srednjim i jedna na uskim ekranima.

Polazna podela je: 12–24 meseca, 24–36 meseci, 3–5,5 godina i pripremni predškolski program 5,5–7 godina, prema [postojećoj početnoj stranici](https://www.panoramica.rs/). Nazivi i granice uzrasta potvrđuju se pre objave.

Klik na karticu otvara odgovarajuću harmoniku na stranici `/programi-i-clil`, preko stabilnog fragmenta adrese. Kratak CLIL uvod vodi na detaljno objašnjenje na istoj stranici. Ilustracije za kartice treba stilski uskladiti sa ostatkom sajta; preuzimanje 3D maskota iz reference nije zahtev.

### 6.5. Oba objekta

Dve ravnopravne kartice: Panoramica i Panoramica Junior. Svaka sadrži odgovarajuću fotografiju, kratak opis i potvrđene posebnosti. Linkovi vode na odgovarajuće sekcije zajedničke stranice o vrtiću. Manje razlike se jasno označavaju, bez dupliranja svih programa.

### 6.6. Ukratko o ishrani

Kratka poruka o sopstvenoj kuhinji i pristupu pripremi obroka, uz fotografiju i link ka `/ishrana`. Ako klijent dostavi jelovnik, može se prikazati kratak statični primer, jasno označen kao primer. Na početnoj se ne uvodi dnevni ili nedeljni jelovnik koji bi zahtevao dodatni CMS. Polazni sadržaj je [postojeća stranica o ishrani](https://www.panoramica.rs/ishrana/).

### 6.7. Galerija „Jedan dan u Panoramici”

Dva vizuelno pomerena reda fotografija prema „A Day in the Life” iz `treca.webp`. Prikaz koristi izabrane fotografije iz zajedničke CMS galerije. Ispod se nalazi dugme „Pogledajte galeriju” ka `/galerija`.

Novijom odlukom na početnoj je izabrano uvećavanje fotografije uz listanje ostalih. Galerija ima osam različitih fotografija u dva reda: prvi se neprekidno kreće sleva nadesno, a drugi zdesna nalevo. Ponovljene grupe spajaju se bez praznine ili vidljivog skoka, uz postepeno nestajanje i pojavljivanje na ivicama. Oba reda ostaju na telefonu. Dostupna je pauza; uz smanjeno kretanje prikaz je miran i horizontalno pregledan. Dijalog podržava Escape, strelice, dugmad i vraćanje fokusa.

### 6.8. Kontakt i završni CTA

Upadljiv zaobljeni blok prema završnom CTA-u iz `treca.webp`, usklađen sa tirkiznom, krem i toplim akcentima. Sadrži kratku poruku roditeljima, fotografiju i glavno dugme „Pozovite nas”. Osnovni kontakt sažetak može navesti broj, adresu i radno vreme.

Na početnoj se ne prikazuje kontakt forma. Poziv na slanje poruke iz ranije okvirne strukture razrađen je novijom odlukom: početna usmerava na poziv, a forma je dostupna na Kontakt stranici. Dugme „Upis” u navigaciji ostaje informativni put ka procesu upisa.

### 6.9. Footer

Postojeći logo, kratka poruka ustanove, linkovi, telefon, e-mail, potvrđena adresa i radno vreme. Društvene mreže prikazuju se samo ako klijent potvrdi tačne profile. Sadržaj i kontakt podaci moraju biti dosledni kroz sve stranice.

## 7. Specifikacija unutrašnjih stranica

### 7.1. O vrtiću i objekti

Obuhvata uvod, misiju i pristup radu, saradnju sa porodicom, stručni tim i dva objekta u ravnopravnim celinama. Za svaki objekat navesti potvrđene podatke i posebnosti. Tim predstaviti stvarnim imenima, ulogama i dostavljenim fotografijama, u obimu raspoloživog sadržaja. Polazni materijal je [postojeća stranica o vrtiću](https://www.panoramica.rs/o-vrticu/).

Eko-identitet uključiti kroz postojeći logo i potvrđene informacije. Sertifikat ili iskustva roditelja prikazuju se kada klijent dostavi materijal koji može da se objavi. Sekcije `#objekti`, `#panoramica`, `#panoramica-junior` i `#tim` mogu služiti kao odredišta internih linkova.

### 7.2. Programi i CLIL

Četiri glavne programske celine prikazati kroz harmonike sa nazivom i uzrastom vidljivim i kada je sadržaj zatvoren. Detalji obuhvataju ciljeve, način rada i aktivnosti iz postojećih tekstova. Po potrebi se unutar šire vrtićke celine objašnjavaju pojedinačne grupe, bez novih glavnih stranica.

Link iz kartice početne automatski otvara i pozicionira odgovarajuću celinu. Harmonike rade tastaturom i dodirom, sa jasnim stanjem otvoreno/zatvoreno. Predlog izvedbe dozvoljava više otvorenih celina istovremeno.

CLIL dobija detaljnu sekciju `#clil`: šta metoda znači u svakodnevnom radu, kako se sprovodi i za koji potvrđeni uzrast. [Postojeći CLIL tekst](https://www.panoramica.rs/clil-metoda-ucenja/) navodi fokus na 4–6 godina; to je podatak za potvrdu, a ne osnov za tvrdnju da CLIL važi za svu decu od 12 meseci.

### 7.3. Ishrana

Objasniti sopstvenu kuhinju, pripremu obroka i odnos prema kvalitetu ishrane. Tačan broj obroka, posebne režime ishrane, površinu kuhinje i standarde navoditi tek nakon potvrde klijenta. Sadržaj ostaje statičan; CMS za jelovnik nije deo paketa.

### 7.4. Galerija

Jedna zajednička galerija obe lokacije. Predlog izvedbe je responzivna mreža sa uvećanjem fotografije u pristupačnom dijalogu: zatvaranje dugmetom i tasterom Escape, promena fotografije i vraćanje fokusa.

Filteri na vrhu su uslovna mogućnost, prema odgovoru izvođača. Uključiti ih kada početni materijal opravdava korisne kategorije; u suprotnom prikazati jedinstvenu galeriju. Predlog kategorija: „Prostor”, „Aktivnosti”, „Događaji”. Početni filter je „Sve”. Ne prikazivati prazne kategorije; promena filtera ne zahteva novu stranicu.

Zaposleni mogu dodati, zameniti, ukloniti fotografiju i odrediti redosled. Broj početno unetih fotografija prati ugovoreni limit; kasniji samostalni unos nije ograničen na tih 20, već raspoloživim kapacitetom izabranog CMS plana.

### 7.5. Novosti i blog

Jedinstven pregled novosti, obaveštenja i korisnih tekstova, sortiran po datumu opadajuće. Pojedinačna objava sadrži naslov, datum, glavnu fotografiju i formatiran sadržaj. Prikaz i šablon ostaju isti za sve objave; kategorije, pretraga i komentari nisu obavezni za početnu verziju.

Predlog izvedbe za rast arhive: po devet objava po strani, uz paginaciju kada je potrebna. Prazan pregled ima kratku informativnu poruku. Nepostojeća ili povučena objava vraća odgovarajuću 404 stranicu. Neobjavljeni nacrti nisu vidljivi posetiocima.

### 7.6. Upis i informacije za roditelje

Prikazati korake upisa, potrebnu dokumentaciju, osnovne informacije o subvencijama i FAQ, prema potvrđenom materijalu klijenta. Stranica vodi na kontakt i poziv. Informacije o dokumentaciji i subvencijama proveravaju se pre objave; PRD ne utvrđuje aktuelne pravne uslove, iznose ili prava.

Nema online prijave, kalendara obilazaka, slanja dokumenata ili evidencije kandidata. Cena boravka i raspoloživa mesta prikazuju se samo ako klijent izričito dostavi i odobri te podatke.

### 7.7. Kontakt

Telefon i forma imaju ravnopravan vizuelni značaj. Prikazati potvrđene brojeve, e-mail, radno vreme, podatke lokacija i mapu sa odgovarajućim oznakama. Ako oba objekta dele kontakt ili lokaciju, to jasno napisati.

Polazni podaci sa [postojeće Kontakt stranice](https://www.panoramica.rs/kontakt/), za potvrdu pre objave:

| Podatak | Trenutno objavljeno |
| --- | --- |
| Mobilni telefon | +381 62 595 662 |
| Fiksni telefon | +381 11 400 3970 |
| E-mail | nevena.dinic@panoramica.rs |
| Adresa | Vojvode Stepe 363, Beograd |
| Radno vreme | Ponedeljak–petak, 07:00–18:00 |

Ovi podaci ne dokazuju zasebnu adresu ili broj za Junior. Primalac kontakt forme se potvrđuje posebno i ne pretpostavlja se samo iz javno prikazanog e-maila.

## 8. Kontakt forma

**Sva četiri polja su obavezna:** ime, e-mail, telefon i poruka.

| Ponašanje | Zahtev |
| --- | --- |
| Validacija | Jasne oznake polja, provera praznog unosa, formata e-maila i razumno fleksibilnog telefonskog broja; provera i na serveru |
| Slanje | Poruka odlazi na potvrđen e-mail; bez upisa u CMS ili CRM |
| Tokom slanja | Dugme pokazuje stanje slanja i sprečava ponovljeni klik |
| Uspeh | Potvrda se prikazuje tek kada servis prihvati poruku za slanje; forma se tada resetuje |
| Greška | Jasna poruka, očuvan unos i mogućnost ponovnog pokušaja; vidljiv telefon kao alternativa |
| Zaštita | Ograničenje dužine unosa, osnovno ograničenje učestalosti, skriveno antispam polje i bezbedna obrada sadržaja |
| E-mail zaglavlja | Pošiljalac sa autorizovanog naloga/domena; validirani e-mail roditelja kao Reply-To |
| Podaci | Prikupljaju se samo dogovorena četiri polja; privatni podaci i sadržaj poruka ne objavljuju se niti se upisuju u javne logove |

Predlog granica: ime do 100 znakova, e-mail do 254, telefon do 40, poruka do 3.000 znakova. Uz formu dati kratko obaveštenje o obradi upita, prema informacijama koje dostavi vrtić. Formular ne služi za slanje dokumentacije ili osetljivih podataka o detetu.

Slanje test poruke i potvrda prijema u dogovorenom sandučetu obavezni su pre lansiranja. Sam prikaz poruke o uspehu nije dovoljan dokaz isporuke.

## 9. Vizuelni sistem i interakcije

### 9.1. Paleta

Primarna boja i opšti pravac su potvrđeni; ostale vrednosti su predlog izvedbe koji se usklađuje tokom dizajna.

| Namena | Boja |
| --- | --- |
| Primarna brend boja | `#25B4BC` |
| Topla krem pozadina | `#FFF9E8` |
| Bela površina | `#FFFFFF` |
| Osnovni tamni tekst | `#173C3F` |
| Tamnija tirkizna za kontrastne detalje | `#087D84` |
| Žuti akcenat | `#FFD56A` |
| Narandžasti akcenat | `#F28B50` |

Tirkizna povezuje sve stranice; krem omekšava veće površine, a topli akcenti ističu detalje i CTA. Za tekst na svetloj primarnoj i žutoj podlozi koristiti tamnu boju i proveriti kontrast. Bela slova na svetloj tirkiznoj ne podrazumevaju se kao čitljiva kombinacija.

### 9.2. Tipografija i logo

Fredoka se koristi za naslove, pasuse, menije, forme i dugmad. Podržati srpsku latinicu, uključujući č, ć, š, ž i đ. Predlog osnovnog teksta je 17–18 px, prored približno 1,5–1,65 i umerena širina dužih pasusa. Hijerarhija se gradi veličinom, težinom i razmacima.

Logo koristiti u izvornim proporcijama, na podlozi na kojoj ostaje čitljiv. Ne deformisati ga ili uklanjati njegove delove. Dostupni JPG ima približno 349 × 93 px; za oštriji prikaz poželjno je pribaviti original većeg kvaliteta ili vektorski fajl.

### 9.3. Doslednost i kretanje

Zajednički sistem dugmadi, kartica, zaobljenja, senki, fotografskih maski i razmaka koristi se kroz ceo sajt. Predlog maksimalne širine sadržaja je oko 1.200 px, a zaobljenja kartica 20–32 px. Ukrasi su nenametljivi i ne otežavaju čitanje.

Diskretne animacije koriste se za hover, otvaranje menija i harmonika. Posebna potvrđena interakcija je razmicanje hero fotografija. Poštovati `prefers-reduced-motion`; izbegavati neprekidno pomeranje i uslove u kojima se sadržaj vidi samo prelaskom miša.

## 10. Sanity CMS

### 10.1. Urednički rad

Jedna odgovorna osoba iz vrtića uređuje i objavljuje sadržaj. Koristi svoj administratorski pristup; nije potreban dodatni proces odobravanja sa više uredničkih uloga. Standardno čuvanje nacrta i objavljivanje ostaju dostupni.

Studio prikazuje razumljive celine „Fotografije” i „Novosti i blog”, sa kratkim objašnjenjima polja na srpskom. Podaci o programima, timu, ishrani i upisu ne izlažu se kao CMS sekcije u ovoj fazi.

### 10.2. Predlog sadržajnih modela

| Tip | Obavezna polja | Dodatna polja |
| --- | --- | --- |
| Fotografija galerije | Slika, opis slike za pristupačnost, redosled | Kratak naslov/opis, kategorija ako se koriste filteri, izdvajanje za početnu |
| Novost / blog objava | Naslov, jedinstven slug, datum, glavna fotografija sa alt opisom, sadržaj | Kratak uvod za karticu; ako nedostaje, izvod iz sadržaja |

Sadržaj objave podržava pasuse, podnaslove, liste, osnovno isticanje i linkove. SEO naslov i opis mogu se izvesti iz naslova i uvoda; dodatna ručna SEO polja nisu neophodna za početnu verziju. Fotografije podržavaju izbor relevantnog isečka, uz očuvanje originala.

Kategorija galerije, ako se koristi, bira se iz unapred pripremljene kratke liste. Poseban sistem albuma, slobodno kreiranje kategorija i uređivanje stranica nisu potrebni. Obični dokumenti dobijaju Sanity-generisane identifikatore; slug služi za adresu objave.

### 10.3. Veza sa sajtom

- Na javnom sajtu prikazuje se samo objavljen sadržaj.
- Izmena ili povlačenje objave ažurira pregled novosti, pojedinačnu stranicu i prikaz na početnoj.
- Promena fotografije ili redosleda ažurira galeriju i odgovarajući početni prikaz.
- Izmene ne zahtevaju ručni zahvat developera ili novo ručno objavljivanje sajta.
- Predlog operativnog cilja: promene se vide na narednim posetama najkasnije u pet minuta, pri normalnom radu servisa. Ovo proveriti i za novu objavu sa novim slugom.
- Prazno stanje i nedostupnost CMS-a ne smeju srušiti statične stranice; razlikovati praznu galeriju od greške učitavanja. Gde je dostupno, zadržati poslednji uspešno učitan sadržaj.
- Uputstvo objašnjava dodavanje, izmenu, objavljivanje, povlačenje i uklanjanje sadržaja. Promena već objavljenog sluga zahteva pažnju zbog postojećih linkova i preusmerenja.

Početno je planiran Sanity Free, prema ponudi. [Aktuelni Sanity planovi](https://www.sanity.io/pricing) provereni su 18.11.2026; kapacitet i odgovarajući nivo pristupa proveravaju se pri podešavanju. Kontakt poruke i druga privatna evidencija ne čuvaju se u javnom sadržajnom datasetu. Nalozi i projekat ostaju u vlasništvu vrtića.

## 11. Tehnička osnova i kvalitet

### 11.1. Postojeći projekat i arhitektura

U radnom folderu je prazan Next.js App Router projekat sa TypeScript-om i Tailwind-om. `app/page.tsx` trenutno nema sadržaj. Postojeći projekat je osnova buduće implementacije; ovim PRD-om aplikacija nije izgrađena.

Predlog izvedbe: postojeća Next.js aplikacija za javni sajt, zaseban Sanity Studio unutar projekta i Sanity kao izvor galerije i objava. Formu obrađuje serverska ruta i dogovoreni SMTP ili transakcioni e-mail servis. Pristupni podaci čuvaju se u serverskim promenljivama okruženja, van javnog koda.

Zbog retkog osvežavanja sadržaja može se koristiti keširanje sa kratkom vremenskom revalidacijom, uz proveru cilja iz odeljka 10.3. Nova CMS objava mora biti dostupna bez ručnog rebuild-a. Tačna konfiguracija zavisi od odabranog hostinga; direktan prikaz nacrta na javnom sajtu nije deo zahteva.

### 11.2. Hosting

Provajder je poznat izvođaču, ali pristup nalogu tek treba pribaviti od klijenta. Njegovo ime nije sadržano u dostavljenim odgovorima.

Pre odluke proveriti Node.js okruženje ili kompatibilnu platformu, build i runtime mogućnosti, obradu forme, osvežavanje CMS sadržaja, DNS, HTTPS i očuvanje postojećeg e-maila. [Next.js dokumentacija za objavljivanje](https://nextjs.org/docs/app/getting-started/deploying) razlikuje serversku izvedbu i ograničeni statički izvoz; običan hosting statičnih fajlova ne potvrđuje podršku za sve planirane funkcije.

Postojeći hosting ostaje ako podržava dogovorenu izvedbu. Ako ne podržava, pripremiti konkretan predlog alternativnog smeštaja i troška pre promene. Ne menjati provajdera, aktivirati plaćeni servis ili prekidati postojeći sajt bez dogovora sa izvođačem i klijentom. Domen, hosting i nalozi ostaju vlasništvo vrtića.

### 11.3. Responzivnost, pristupačnost i performanse

- Proveriti širine 360, 390, 768, 1.024 i 1.440 px bez neželjenog horizontalnog skrola.
- Svi linkovi, meni, harmonike, dijalozi i forma rade tastaturom, uz vidljiv fokus.
- Fotografije imaju smislen alt opis; dekorativni elementi ne opterećuju čitače ekrana.
- Polja imaju vidljive oznake i povezane greške. Informacija se ne prenosi samo bojom.
- Ciljati kontrast najmanje 4,5:1 za običan i 3:1 za veliki tekst, prema [W3C smernicama za kontrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html). Ovo je zahtev za proveru, ne tvrdnja o već ostvarenoj sertifikaciji.
- Fotografije dobijaju odgovarajuće dimenzije, moderne formate i responzivne veličine; sadržaj ispod prvog ekrana učitava se odloženo.
- Rezervisati prostor za slike, optimizovati učitavanje fonta i odložiti teške mape do potrebe.
- Predlog merljivih ciljeva na reprezentativnim produkcionim stranicama: LCP do 2,5 s i CLS do 0,1 u kontrolisanoj mobilnoj proveri. Rezultat dokumentovati uz uslove merenja; terenski podaci dostupni su tek posle lansiranja.

## 12. SEO i postojeći sadržaj

### 12.1. Osnovna SEO priprema

Svaka stranica dobija odgovarajući naslov, opis, jednu jasnu glavnu temu, semantičke naslove, canonical adresu i podatke za deljenje. Pripremiti sitemap i robots konfiguraciju; sitemap uključuje objavljene novosti. Podaci o ustanovi i kontaktu moraju biti dosledni. Strukturirane podatke koristiti samo za potvrđene činjenice, bez izmišljenih ocena.

Javni sadržaj ostaje na srpskoj latinici; dokument koristi odgovarajući jezički atribut, npr. `sr-Latn`. CMS i test okruženje ne predstavljaju javne indeksabilne stranice sajta.

### 12.2. Prenos i prilagođavanje

Zadržati većinu važnih informacija uz skraćivanje, povezivanje duplikata i preoblikovanje za novu strukturu. Početni unos obuhvata do 20 dostavljenih fotografija i tri odabrane objave. Ponovno korišćenje iste fotografije na više mesta ne zahteva novi materijal. Preostala arhiva se evidentira za odluku o kasnijem prenosu.

Reference `prva.jpg` i `treca.webp` ne predstavljaju konačne fotografije vrtića. Klijent dostavlja postojeće materijale i potrebne dozvole za njihovo objavljivanje, uključujući fotografije dece.

### 12.3. Predlog mape postojećih URL adresa

| Postojeća adresa | Predlog odredišta |
| --- | --- |
| `/` | Zadržava se |
| `/o-vrticu/` | Ista sadržajna stranica, uz jedinstvenu slash politiku |
| `/panoramicini-programi/` | `/programi-i-clil` |
| `/grupe/` | `/programi-i-clil` |
| `/clil-metoda-ucenja/` | `/programi-i-clil#clil` |
| `/ishrana/` | Zadržava se sadržajna adresa |
| `/galerija/` | Zadržava se sadržajna adresa |
| `/kontakt/` | Zadržava se sadržajna adresa |
| Stara adresa odabrane novosti | Nova konkretna adresa `/novosti/[slug]` |
| Ostale arhivske adrese | Pojedinačna odluka posle inventara sadržaja |

Ovo je početna mapa, a ne popis svih postojećih stranica. Pre lansiranja proveriti stare linkove, odabrane objave i dodatne stranice poput aktivnosti, izleta i humanitarnih akcija. Njihov relevantni sadržaj može se objediniti u postojeće nove celine. Ne preusmeravati svu neprenesenu arhivu na početnu bez sadržajnog razloga. Izbeći petlje i lance preusmerenja.

## 13. Tok rada, isporuka i odobravanje

| Faza | Rezultat | Uslov za naredni korak |
| --- | --- | --- |
| Priprema | Potvrđen inventar sadržaja, pristupi i podaci objekata | Dovoljno materijala za stvaran sadržaj i proverenu infrastrukturu |
| Dizajn | Početna, unutrašnje stranice i mobilni prikaz | Prva objedinjena runda komentara |
| Implementacija | Stranice, CMS, forma i početni unos | Funkcionalna test verzija |
| Provera | Tehničke provere i pregled klijenta | Druga objedinjena runda i rešene greške |
| Objavljivanje | Domen, HTTPS, preusmerenja i isporuka uputstva | Odobren rezultat i uslovi iz ponude |
| Podrška | Otklanjanje grešaka vezanih za lansiranje | Period od 14 dana od objave |

Vladimir / Chaky Agency prikuplja klijentove komentare i dostavlja ih objedinjeno. Dve runde odnose se na dogovoreni dizajn i sadržaj; nove stranice i funkcionalnosti dogovaraju se posebno.

Kalendarski rok sada nije zadat. Ponuda navodi okvir od 15–20 radnih dana za CMS paket od prijema avansa, materijala i finalnog obima; to je polazna procena, a ne ovde potvrđen datum isporuke. Uslovi plaćanja iz ponude: 50% avansa, 50% po završetku i odobrenju, pre objavljivanja.

Predaja obuhvata sajt, CMS pristup odgovornoj osobi, kratko uputstvo, pregled konfigurisanih servisa, mapu preusmerenja i rezultate ključnih provera. Pre zamene postojećeg sajta obezbediti njegovu rezervnu kopiju i način povratka ako objavljivanje ne uspe.

## 14. Otvorene stavke i zavisnosti

Ove stavke ne menjaju potvrđeni dizajnerski pravac. Njihovo rešavanje je deo pripreme sadržaja i lansiranja.

| Stavka | Ko obezbeđuje / rešava | Do kada | Postupak do rešavanja |
| --- | --- | --- | --- |
| Pristup hostingu i DNS-u; ime provajdera i mogućnosti paketa | Klijent i izvođač | Pre konačnog plana objavljivanja | Razvoj na test okruženju; produkciona konfiguracija ostaje otvorena |
| Sanity nalog/projekat i e-mail odgovorne osobe | Klijent uz izvođača | Pre povezivanja CMS-a | Nema pretpostavljenih naloga ili deljenih lozinki |
| Primalac forme i servis za slanje | Klijent potvrđuje; izvođač podešava | Pre funkcionalne provere forme | Bez lažnog prikaza uspešnog slanja |
| Aktuelni kontakt podaci, adrese i posebnosti oba objekta | Klijent | Pre završnog unosa | Polazni javni podaci označeni za potvrdu |
| Konačni nazivi i uzrasni rasponi programa | Klijent uz izvođača | Pre finalnog sadržaja | Četiri pregledne kartice prema početnoj; detalji se usklađuju |
| Fotografije i izbor do tri objave | Klijent i izvođač | Pre sadržajne provere | Referentni screenshotovi ne koriste se kao završne fotografije |
| Dozvole za objavu dostavljenih materijala | Klijent | Pre objavljivanja | Objavljuju se samo odobreni materijali |
| Kvalitetniji logo | Klijent, ako je dostupan | Tokom dizajna | Postojeći JPG koristi se u odgovarajućoj veličini |
| Tim, sertifikati, iskustva roditelja i dodatne aktivnosti | Klijent | Pre odobravanja sadržaja | Uključuju se samo potvrđene i dostupne informacije |
| Aktuelna dokumentacija, subvencije i FAQ | Klijent | Pre objave stranice Upis | Ne prenose se neprovereni iznosi ili zastarele procedure |
| Potreba za filterima galerije i kratka lista kategorija | Izvođač, prema materijalu klijenta | Tokom prvog unosa | Zajednička galerija bez filtera je osnovni prikaz |
| Popis starih URL adresa i izbor arhive | Izvođač uz klijenta | Pre završnih SEO provera | Početna mapa iz odeljka 12.3 |

Na postojećem sajtu postoji nesklad između četiri široka uzrasna programa na početnoj i šest grupa na [stranici Grupe](https://www.panoramica.rs/grupe/). To zahteva sadržajno usklađivanje, bez automatskog povećanja broja kartica ili stranica.

## 15. Kriterijumi prihvatanja

Sledeće stavke predstavljaju plan provere buduće implementacije. Ovaj dokument ne tvrdi da je sajt već implementiran ili testiran.

| ID | Proverljiv kriterijum |
| --- | --- |
| AC-01 | Dostupno je osam glavnih stranica i funkcionalan šablon CMS objave; svi navigacioni linkovi vode na ispravna odredišta. |
| AC-02 | Početna prati redosled: hero/prednosti, novosti, o vrtiću, programi/CLIL, objekti, ishrana, galerija, kontakt/CTA, footer. |
| AC-03 | Hero ima potvrđeni slogan i tri fotografije; hover ih razmiče bez prekrivanja sadržaja, a mobilni i reduced-motion prikaz ostaju upotrebljivi. |
| AC-04 | Početna ima ispravan telefonski CTA i nema kontakt formu; Kontakt stranica ima ravnopravno istaknute telefon i formu. |
| AC-05 | Tirkizna, krem i topli akcenti koriste se dosledno; Fredoka pokriva sav tekst i srpska slova; logo čuva proporcije. |
| AC-06 | Četiri programske kartice otvaraju odgovarajuće detalje u harmonikama; direktni linkovi, tastatura i dodir rade. |
| AC-07 | CLIL je ukratko na početnoj i detaljno na programima; potvrđeni uzrast i način rada prikazani su dosledno. |
| AC-08 | Objekti imaju ravnopravne kartice i jasno izdvojene detalje; nema pretpostavljenih Junior kontakt podataka. |
| AC-09 | Početna galerija ima dva pomerena reda i dugme ka punoj galeriji. Zajednička galerija radi i bez kategorija; eventualni filteri daju ispravne rezultate. |
| AC-10 | Odgovorna osoba u CMS-u samostalno dodaje, menja, povlači i uklanja fotografije i novosti; statične stranice nisu deo tog uređivanja. |
| AC-11 | Nova i izmenjena objava, povučena objava i promenjena galerija pravilno se odražavaju na javnom sajtu u predviđenom roku, bez ručnog rebuild-a; nacrti nisu javni. |
| AC-12 | Sva četiri polja forme su obavezna; neispravan unos je odbijen i na serveru; greška zadržava unos i omogućava pokušaj ponovo. |
| AC-13 | Test poruka stiže na dogovoreno sanduče, Reply-To je ispravan, a uspeh se ne prikazuje pri neuspelom slanju. |
| AC-14 | Početni unos poštuje dogovoreni limit do 20 fotografija i tri objave; nema neodobrenih ili izmišljenih izjava, ocena i podataka. |
| AC-15 | Dogovorene širine ekrana, tastatura, fokus, smanjene animacije, kontrast, alt opisi i oznake forme prolaze proveru. |
| AC-16 | Metadata, sitemap, robots, canonical adrese, 404 i dogovorena 301 preusmerenja rade bez petlji, neispravnih linkova i indeksiranja nacrta. |
| AC-17 | Rezultati provere slika, fonta, mape i performansi dokumentovani su za početnu i reprezentativne unutrašnje stranice. |
| AC-18 | Hosting je proveren, HTTPS radi, postojeći e-mail nije narušen, pristupi ostaju klijentu i postoji plan povratka stare verzije. |
| AC-19 | Dostavljeni su CMS uputstvo i objedinjene korekcije iz dve runde; izvođač i klijent odobrili su završni sadržaj pre objave. |

Kod buduće implementacije pokrenuti postojeće projektne provere `npm run lint` i `npm run build`, zatim funkcionalno proveriti rute, CMS osvežavanje i formu. Sam build ne dokazuje isporuku e-maila, kvalitet mobilnog prikaza ili spremnost produkcionog hostinga.

## 16. Trag svih 20 odgovora izvođača

| Pitanje | Usvojena odluka | Razrađeno u odeljku |
| --- | --- | --- |
| 1 | Poziv na početnoj; telefon i forma na Kontakt stranici | 6.1, 6.8, 7.7, 8 |
| 2 | Sigurnost/individualni pristup + CLIL + eko-identitet | 3, 6.1, 7.1 |
| 3 | Istaknuto dugme Upis, ostalo kroz meni i podmenije | 5 |
| 4 | Tačan dostavljeni redosled početne | 6 |
| 5 | Tri preklopljene hero fotografije, razmicanje na hover | 6.1, 9.3 |
| 6 | Slogan „Lepši pogled na detinjstvo” | 6.1 |
| 7 | Tirkizna, topla krem i žuti/narandžasti akcenti | 9.1 |
| 8 | Fredoka za sav tekst | 9.2 |
| 9 | Kartica programa vodi na detalje u harmonikama | 6.4, 7.2 |
| 10 | Kratak CLIL na početnoj, detalji na stranici programa | 6.4, 7.2 |
| 11 | Ravnopravne kartice oba objekta i zajednička detaljna stranica | 6.5, 7.1 |
| 12 | Zajednička galerija sa mogućim filterima na vrhu | 7.4, 14 |
| 13 | Dva pomerena reda i dugme ka stranici galerije | 6.7 |
| 14 | Kombinacija dostupnih, potvrđenih dokaza poverenja | 6.3, 7.1, 14 |
| 15 | Preraspodela i preoblikovanje postojećeg sadržaja | 4.1, 12.2 |
| 16 | Jedna odgovorna osoba uređuje i objavljuje novosti | 10.1 |
| 17 | Obavezni ime, e-mail, telefon i poruka | 8 |
| 18 | Provajder poznat; pristup treba pribaviti od klijenta | 11.2, 14 |
| 19 | Rok trenutno nije bitan; nema potvrđenog datuma | 13 |
| 20 | Vladimir / Chaky Agency objedinjuje klijentove komentare | 13 |

## 17. Dodatne odluke za početnu — 18. novembar 2026.

U ovoj fazi izrađuje se **samo početna stranica u postojećem lokalnom projektu**, pre ostatka sajta. Nije zatraženo objavljivanje. Meni u radnoj verziji može voditi na sekcije početne, a sekundarni linkovi na postojeći sajt dok se ne izrade nove unutrašnje stranice. Povezivanje sa Sanity CMS-om ostaje za narednu fazu. Sledeći korisnikovi odgovori imaju prednost u detaljima izvedbe početne:

| Pitanje | Izabrana izvedba |
| --- | --- |
| 1 | Toplo i umereno razigrano, sa dosta prostora između elemenata. |
| 2 | Pretežno krem, uz tirkizne blokove i male tople akcente. |
| 3 | Diskretni listići, sunce i organske linije. |
| 4 | Sticky zaglavlje koje postaje kompaktnije pri skrolovanju. |
| 5 | Čitljiv logo na svetloj površini. |
| 6 | Podnaslov: „Mesto za igru, istraživanje i odrastanje, uz pažnju posvećenu svakom detetu.” Koristi se zarez umesto crte. |
| 7 | Aktivnost deteta u centralnoj hero fotografiji, druženje i prostor sa strane, kada postoje odgovarajući odobreni materijali. |
| 8 | Na telefonu tri blago preklopljene fotografije u kompaktnoj kompoziciji. |
| 9 | Tri male kartice prednosti, sa ikonama i po jednom kratkom rečenicom. |
| 10 | Novost ima fotografiju, datum, naslov i dve kratke linije uvoda. |
| 11 | O vrtiću: veća fotografija levo, kratak tekst i link desno. |
| 12 | Usklađene jednostavne ilustracije na četiri kartice programa. |
| 13 | Širok obojeni CLIL blok ispod programskih kartica. |
| 14 | Ravnopravne kartice objekata: velika fotografija, naziv, dve rečenice i link. |
| 15 | Ishrana: fotografija obroka ili kuhinje uz kratak tekst i link. |
| 16 | Osam galerijskih fotografija, po četiri u svakom redu na računaru. |
| 17 | Klik otvara uvećanu fotografiju sa listanjem ostalih. |
| 18 | Završna poruka: „Hajde da zajedno napravimo lepši pogled na detinjstvo.” |
| 19 | Uočljivije, ali kratke animacije pri skrolu, uz podršku za smanjeno kretanje. |
| 20 | Dostupni materijali koriste se u radnoj verziji; nedostajući sadržaj i podaci jasno su označeni. |

## 18. Korekcije početne nakon prvog pregleda

Ove novije korisnikove odluke imaju prednost u odnosu na ranije predloge:

- Logo ima transparentnu pozadinu u zaglavlju i footer-u. Izvorni JPG se čuva.
- Sva glavna dugmad koriste `#25B4BC`, uz tamniju tirkiznu na hover. U tirkiznim blokovima koriste `#FFD56A`, prema korisnikovoj naknadnoj preciznoj korekciji boje.
- Prvi red galerije ide sleva nadesno, drugi zdesna nalevo, u neprekidnim petljama sa istovetnim spojevima i blagim nestajanjem na ivicama. Zadržava se uvećavanje fotografija. Kontrola pauze, pristup tastaturom i miran reduced-motion prikaz deo su izvedbe.
- Cela kartica novosti ima zaobljen okvir usklađen sa drugim karticama, uz fotografiju uklopljenu u gornje uglove.

## 19. Priprema za predstavljanje početne klijentu

- Kontakt traka sa telefonom, adresom i radnim vremenom iznad footera se uklanja. U kolonu „Ostanimo u kontaktu” dodaje se nedostajuće radno vreme; postojeći telefoni, e-mail i adresa ostaju tamo.
- Broj telefona pored završnog dugmeta „Pozovite nas” se uklanja; sam broj dostupan je u footer-u.
- Oba glavna dugmeta u tirkiznim blokovima imaju izričitu boju `#FFD56A`, uključujući hover.
- Tokom prezentacije aktivni su samo linkovi ka sekcijama početne. Sva spoljna odredišta, uključujući pozive i e-mail, privremeno su neaktivna i nemaju izlazni `href`. Klik ne otvara drugi sajt, aplikaciju ili novi tab.
- Korisnik je konačno preformulisao naslov za dva objekta: „Dva prostora. Ista ljubav, ista pažnja.”

## 20. Širina galerije i hijerarhija dugmadi

- Galerijski redovi ostaju unutar istog `.container` kontejnera kao ostali elementi stranice. Oba su i dalje neprekidna i kreću se u suprotnim smerovima.
- Vidljivo dugme „Pauziraj kretanje” se uklanja. Zadržavaju se zaustavljanje pri pokazivanju, pristup tastaturom, miran prikaz uz smanjene animacije i uvećavanje fotografija.
- Primarni stil koriste dugmad „Pozovite nas” u zaglavlju, hero i završnom bloku. Nemaju strelicu, zaobljenje iznosi 15 px, a levi i desni unutrašnji razmak su jednaki.
- Po poslednjoj korekciji, dugme „Upis” u zaglavlju zamenjeno je dugmetom „Pozovite nas”. Stavka menija „Kontakt” vodi na kontakt sekciju (`#kontakt`); pozivi su i dalje privremeno isključeni za prezentaciju.
- Galerija i CLIL koriste isti sekundarni tekstualni stil sa strelicom kao detalji programa, ishrane i objekata.
- Sekundarni linkovi na tirkiznim pozadinama imaju tekst, strelicu i donju liniju u boji `#FFD56A`.

## 21. Mobilno zaglavlje i konačan naslov objekata

- U mobilnom prikazu zaglavlje sadrži samo logo i burger dugme. Burger ima zaobljenje 15 px, kao primarna dugmad.
- Primarno dugme „Pozovite nas” premešteno je u otvoreni mobilni meni, umesto ranijeg broja telefona, i zauzima 90% širine ekrana. Pozivi ostaju isključeni za prezentaciju.
- Desktop zaglavlje zadržava dugme „Pozovite nas”.
- Naslov sekcije objekata glasi „Dva prostora. Ista ljubav, ista pažnja.”
- Na hover linka „Pročitajte priču” u karticama novosti kružić sa strelicom koristi primarnu tirkiznu `#25B4BC`, a tekst tamniju tirkiznu.
