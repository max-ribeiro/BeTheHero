# Be the hero
## Resumo
Projeto da semana omnistack 11 da Rocketseat.  

Be The Hero visa ser uma plataforma onde ONGs poderão se cadastrar e registrar suas campanhas. Interessados poderão contribuir com as causas destas ONGs através da plataforma.

## API
A API criada neste projeto ira permitir que o frontend da aplicação possa utilizar dos dados cadastrados no backend de varias formas, seja no desenvolvimento da pagina web ou da aplicação mobile.  

Neste caso contamos com as seguintes rotas para requisições:

#### ONGs
``` Javascript
routes.post('/sessions',SessionController.create);//Cria a sessão do usuario

routes.get('/ongs/',OngController.index);//Lista todas as ongs cadastradas
routes.post('/ongs/',OngController.create);//Cadastra uma nova ong
routes.delete('/ongs/:id',OngController.delete);//Deleta a ong cadastrada pelo usuario

routes.get('/incidents',IncidentController.index);//Lista todas as causas cadastradas
routes.post('/incidents',IncidentController.create);//Cadastra uma nova causa
routes.delete('/incidents/:id',IncidentController.delete);//Deleta uma causa existente

routes.get('/profile',ProfileController.index);//Busca causas da ONG logada

```
As rotas serão manipuladas através do controlador apropriado.
### File Tree
Be The Hero
 ┣ backend
 ┃ ┣ node_modules
 ┃ ┃ ┃ ┣ modules...
 ┃ ┣ src
 ┃ ┃ ┣ controllers
 ┃ ┃ ┃ ┣ IncidentsController.js
 ┃ ┃ ┃ ┣ OngController.js
 ┃ ┃ ┃ ┣ ProfileController.js
 ┃ ┃ ┃ ┗ SessionController.js
 ┃ ┃ ┣ database
 ┃ ┃ ┃ ┣ migrations
 ┃ ┃ ┃ ┃ ┣ 20200324114329_create_ong.js
 ┃ ┃ ┃ ┃ ┗ 20200324115328_incidents.js
 ┃ ┃ ┃ ┣ connection.js
 ┃ ┃ ┃ ┗ db.sqlite
 ┃ ┃ ┣ index.js
 ┃ ┃ ┗ routes.js
 ┃ ┣ .gitignore
 ┃ ┣ knexfile.js
 ┃ ┣ package-lock.json
 ┃ ┗ package.json
 ┣ frontend
 ┃ ┣ node_modules
 ┃ ┃ ┣ modules...
 ┃ ┣ public
 ┃ ┃ ┣ favicon.ico
 ┃ ┃ ┣ index.html
 ┃ ┃ ┣ logo192.png
 ┃ ┃ ┣ logo512.png
 ┃ ┃ ┣ manifest.json
 ┃ ┃ ┗ robots.txt
 ┃ ┣ src
 ┃ ┃ ┣ App.css
 ┃ ┃ ┣ App.js
 ┃ ┃ ┣ App.test.js
 ┃ ┃ ┣ index.css
 ┃ ┃ ┣ index.js
 ┃ ┃ ┣ logo.svg
 ┃ ┃ ┣ serviceWorker.js
 ┃ ┃ ┗ setupTests.js
 ┃ ┣ .gitignore
 ┃ ┣ package.json
 ┃ ┣ README.md
 ┃ ┗ yarn.lock
 ┗ README.md