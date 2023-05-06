import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ComponentesModule } from './componentes/m1.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ComponentesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
