import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExamplesPipesComponent } from './examples-pipes/examples-pipes.component';
import { CamelCasePipe } from './shared/camel-case.pipe';
import { PipeImpurePipe } from './shared/pipe-impure.pipe';
import { PipePurePipe } from './shared/pipe-pure.pipe';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    ExamplesPipesComponent,
    CamelCasePipe,
    PipeImpurePipe,
    PipePurePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
