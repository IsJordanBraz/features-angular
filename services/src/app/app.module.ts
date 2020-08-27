import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExamplesServicesComponent } from './examples-services/examples-services.component';
import { CreateCursosModule } from './create-cursos/create-cursos.module';


@NgModule({
  declarations: [
    AppComponent,
    ExamplesServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CreateCursosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
