# Be the hero
## Resumo
Projeto da semana omnistack 11 da Rocketseat.  

Be The Hero visa ser uma plataforma onde ONGs poderão se cadastrar e registrar suas campanhas. Interessados poderão contribuir com causas destas ONGs através da plataforma.

## API
Neste projeto contamos com uma API que ira permitir que o frontend da aplicação possa utilizar dos dados cadastrados no backend da aplicação de varias formas, seja no desenvolvimento da pagina web ou do aplicativo mobile.  
Neste caso contamos com os seguintes metódos

#### Ongs
``` Javascript
routes.get('/ongs/',index);//Lista todas as ongs cadastradas
routes.post('/ongs/',create);//Lista todas as ongs cadastradas
routes.delete('/ongs/',delete);//Lista todas as ongs cadastradas


