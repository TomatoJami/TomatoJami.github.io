Projekti struktuur.
Andmebaasiga suhtlemise eest vastutavad teenused ja mudelid on projekti peamiseks konstrueerijaks.
Need kõik on lingitud failis script.js

Webpack on mooduli komplekteerija. Selle peamine eesmärk on JavaScripti failide komplekteerimine brauseris kasutamiseks, kuid see on võimeline teisendama, komplekteerima või pakkima peaaegu kõiki ressursse või varasid.
Json-server on tööriist, mis võimaldab teil JSON-andmete põhjal kiiresti luua RESTful API. See on eriti kasulik rakenduste arendamiseks ja testimiseks.
See pakett võimaldab JavaScripti faile üle kanda Babeli ja webpacki abil.
Core-js on teek, mis pakub tänapäevastele JavaScripti võimalustele polüfiile, võimaldades arendajatel kasutada uusi funktsioone ja tehnikaid, mis võivad mõnes brauseris või käitusajas puududa.
Webpack CLI pakub arendajatele paindlikku käskude komplekti, et kohandatud webpacki projekti seadistamisel kiirust suurendada. Alates webpack v4-St ei oota webpack konfiguratsioonifaili, kuid sageli soovivad arendajad luua nende kasutusjuhtumite ja vajaduste põhjal kohandatud webpacki konfiguratsiooni. webpack CLI tegeleb nende vajadustega, pakkudes tööriistade komplekti kohandatud webpacki konfiguratsiooni seadistamise parandamiseks.

Projekti alustamiseks:

1. Laadige projekt Githubist alla

2. Kleepige projekt teele xampp/htdocs

3. Nimeta projekti toit

4. Käivitage xampp, see sisaldab apache'i

5. Kirjutage projekti terminali:
npm i
npx json-server -- vaadake faili db.json

6. Avage uus terminal ja tippige:
npx veebipakett

7. Avage brauser ja tippige:
localhost/food (või teie projekti nimi)