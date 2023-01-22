# spoiler_filter-api
API repository for RUAP spoiler filter project

## Sam napomena da necete morat vi nista s modelom za prepoznavanje spoilera neg ce sve vec bit ubaceno kad vam kazem pa pullajte, takoder sad morate u requestu za izradu reviewa stavljat flag is_spoiler kao sto je u postmanu, ali to ce sve kasnije bit automatski.

## Morate imati:
* Docker
* Node, tocnije express
* DBeaver ce vam koristiti isto
* Postman ce vam koristiti

## [Link na Postman rute](https://www.postman.com/descent-module-cosmonaut-27753848/workspace/public/collection/15846919-44974fc8-92c2-42fa-9c9c-6232439b9513?action=share&creator=15846919)
Tu su vam rute koje ce se koristiti za api. Ne morate se drkati s auth tokenima u postmanu sve je vec podeseno. JWT je nas token tako da znate.

## Express
Skinite node i express to znate sta je. Kad pullate projekt onda u konzolu projekta `npm install` svi dependenciji ce se sami instalirati.

## Instalacija dockera
[Docker download link](https://www.docker.com/)<br>
Za Vuka na MACU je sve jasno, Zugla ce se izdrkat na windowsima ak ne poprati [korake na yt](https://www.youtube.com/watch?v=4xK-zaCRiPQ).<br>
Nisam siguran za ovaj link al ja sam se sam drko i izvlacio tak da pogledaj bolje...

Bitno je da si skinete docker da si ne morate sami postavljat bazu nego kada pullate repo opalite<br>

`docker-compose up -d` <br>

u konzolu gdje je projekt i baza je postavljena.<br> Sad mozete npm runat i koristit app s bazom, tj. morate napraviti tablice, sql naredbe za tablice su u repozitoriju, sam kopirajte i provrtite skriptu u DBeaveru sto cu vam sad objasnit kak se spaja.


## DBbeaver
[DBeaver](https://dbeaver.io/download/)<br>
Ne morate imat al ce vam olaksat da vidite jel sve ubaceno u bazu i da provrtite skripte. Nije puno posla pa et skinite. Dolje su vam koraci za spajanje na bazu:
![step](https://user-images.githubusercontent.com/73022083/213929635-108c5f16-a505-4ce4-bcad-46d5378397c1.png)

![step2](https://user-images.githubusercontent.com/73022083/213929664-a0f407de-af4f-44c8-af6d-1944dee5eb5b.png)

![step3](https://user-images.githubusercontent.com/73022083/213929668-04be956b-b9ba-4608-a3f4-2c6aa922b142.png)

![step4](https://user-images.githubusercontent.com/73022083/213929675-12028ef0-31a6-4f4e-a018-6a8f7ae9d93d.png)

![step5](https://user-images.githubusercontent.com/73022083/213929683-290f096c-3b09-4a8e-afa7-0a53c5c07fc6.png)

![step6](https://user-images.githubusercontent.com/73022083/213929685-1604ff64-ec37-4393-b019-a0f3cfdc2c62.png)

![step7](https://user-images.githubusercontent.com/73022083/213929690-5834bbfd-8f50-4f28-acfd-8c89524824d6.png)

![step8](https://user-images.githubusercontent.com/73022083/213929694-65625ad9-53b8-4691-af34-86150fe557c1.png)

![step9](https://user-images.githubusercontent.com/73022083/213929655-e05af0b9-f4e6-4b83-9105-97de82dafedd.png)![20](https://user-images.githubusercontent.com/73022083/213929673-b2323ee3-48b2-4dfc-89c4-791f8f93ea84.png)

![step10](https://user-images.githubusercontent.com/73022083/213929661-30aa2057-5e7f-4732-a51e-d60a96eaacc8.png)

![11](https://user-images.githubusercontent.com/73022083/213929680-38d9ee25-c8a8-42ea-96cc-9b5eb4435aeb.png)

![12](https://user-images.githubusercontent.com/73022083/213929684-6aeed8ce-4830-4722-ad45-f51007f1d111.png)

![13](https://user-images.githubusercontent.com/73022083/213929688-75679469-6119-4a4a-b743-242f44d4ea51.png)

![14](https://user-images.githubusercontent.com/73022083/213929692-b90a64c8-04e3-4ac0-bdd5-f929935ba8f8.png)

![15](https://user-images.githubusercontent.com/73022083/213929697-e6b219e4-2138-41ff-b94d-1b0e46f7a595.png)

![16](https://user-images.githubusercontent.com/73022083/213929701-8fcad7d0-f15e-4484-860a-fd86372dc7a9.png)

![17](https://user-images.githubusercontent.com/73022083/213929708-b9067438-b710-47c4-83f3-1bc2824de0c2.png)

![19](https://user-images.githubusercontent.com/73022083/213929713-b2f0060c-769e-49df-85de-33b03397959d.png)
