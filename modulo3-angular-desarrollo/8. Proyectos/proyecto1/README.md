# Angular: biblioteca de libros

npm install -g json-server

ng new proyecto1 --routing --skip-git --style=css

ng add @angular/material -y --theme=indigo-pink --typography=y

Crear archivo db.json e introducir datos demo que podemos crear con https://mockaroo.com/

json-server --watch db.json

## Modelos:

* book
* author
* editorial
* biblioteca
* reserva


## Comandos

ng generate component layout/navbar
ng generate component layout/footer

ng generate module books --routing --module app.module
ng generate component books/book-list
ng generate component books/book-gallery
ng generate component books/book-detail
ng generate component books/book-form
ng generate interface books/models/book --type=model --prefix=I
ng generate service books/services/book

ng generate module shared
ng generate pipe shared/LimitLongText
Importar SharedModule en BookModule

ng generate module authors --routing --module app.module
ng generate interface authors/models/author --type=model --prefix=I
ng generate service authors/services/author

ng generate module categories --routing --module app.module
ng generate interface categories/models/category --type=model --prefix=I
ng generate service categories/services/category
