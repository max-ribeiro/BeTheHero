# Be the hero
## Resumo
Projeto da semana omnistack 11 da Rocketseat.  

Be The Hero visa ser uma plataforma onde ONGs poderão se cadastrar e registrar suas campanhas. Interessados poderão contribuir com causas destas ONGs através da plataforma.

## API
A API criada neste projeto ira permitir que o frontend da aplicação possa utilizar dos dados cadastrados no backend da aplicação de varias formas, seja no desenvolvimento da pagina web ou da aplicação mobile.  

Neste caso contamos com as seguintes rotas para requisições:

#### Ongs
``` Javascript
routes.get('/ongs/',index);//Lista todas as ongs cadastradas
routes.post('/ongs/',create);//Lista todas as ongs cadastradas
routes.delete('/ongs/',delete);//Lista todas as ongs cadastradas


