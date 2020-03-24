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

