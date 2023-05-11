import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { DirectivasEjemploComponent } from './directivas-ejemplo/directivas-ejemplo.component';
import { DirectivesExampleComponent } from './directives-example/directives-example.component';
import { DirectivasModule } from './directivas/directivas.module';

@NgModule({
  declarations: [
    AppComponent,
    DirectivasEjemploComponent,
    DirectivesExampleComponent
  ],
  imports: [
    BrowserModule,
    TasksModule,
    UsersModule,
    DirectivasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
