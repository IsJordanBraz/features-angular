import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateCursosComponent } from './create-cursos.component';
import { GetCursosComponent } from './../get-cursos/get-cursos.component';

@NgModule({
  declarations: [
    CreateCursosComponent,
    GetCursosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CreateCursosComponent
  ]
})
export class CreateCursosModule { }
