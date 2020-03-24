# Be the hero
## Resumo
Projeto da semana omnistack 11 da Rocketseat.  

Be The Hero visa ser uma plataforma onde ONGs poderão se cadastrar e registrar suas campanhas. Interessados poderão contribuir com causas destas ONGs através da plataforma.

## API
A API criada neste projeto ira permitir que o frontend da aplicação possa utilizar dos dados cadastrados no backend da aplicação de varias formas, seja no desenvolvimento da pagina web ou da aplicação mobile.  

Neste caso contamos com as seguintes rotas para requisições:

#### Ongs
``` Javascript
routes.get('/ongs/',OngController.index);//Lista todas as ongs cadastradas
routes.post('/ongs/',OngController.create);//Cadastra uma nova ong
routes.delete('/ongs/',OngController.delete);//Deleta a ong cadastrada pelo usuario
```
As rotas serão manipuladas através de seu controlador.

