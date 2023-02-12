# spoiler_filter-api
API repository for RUAP spoiler filter project

# [Link na Model](https://drive.google.com/drive/folders/1iSDFu7RyEOu2PCOsWr8TAsMXpbdYcgi8?usp=sharing)
https://drive.google.com/drive/folders/1iSDFu7RyEOu2PCOsWr8TAsMXpbdYcgi8?usp=sharing <br>
Zbog prevelike velcine varijabla modela potrebno je skinuti model s ovog linka i zaljepiti ga umjesto modela u repozitoriju ili skinuti samo folder variables i zaljepiti ga u folder model. Nakon toga odvrtiti<br>
`docker-compose up -d` <br>
i kontejner s modelom bi trebao biti postavljen

## Morate imati:
* Docker
* Node, tocnije express
* DBeaver ce vam koristiti isto
* Postman ce vam koristiti

## [Link na Postman rute](https://www.postman.com/descent-module-cosmonaut-27753848/workspace/public/collection/15846919-44974fc8-92c2-42fa-9c9c-6232439b9513?action=share&creator=15846919)
Tu su vam rute koje ce se koristiti za api. Auth je vec podesen na rutama

## Express
Skinite node i express to znate sta je. Kad pullate projekt onda u konzolu projekta `npm install` svi dependenciji ce se sami instalirati.

## Instalacija dockera
[Docker download link](https://www.docker.com/)<br>

Bitno je da si skinete docker da si ne morate sami postavljati bazu nego kada pullate repozitorij pozovete komandu<br>

`docker-compose up -d` <br>

u konzolu gdje je projekt i baza je postavljena.<br> Sad mozete npm install pa start i koristit app s bazom, tj. morate napraviti tablice, sql naredbe za tablice su u repozitoriju, sam kopirajte i provrtite skriptu u DBeaveru.


## DBbeaver
[DBeaver](https://dbeaver.io/download/)<br>
Ne morate imati, ali ce vam olaksat da vidite je li sve ubaceno u bazu i da provrtite skripte.
