import { Component, OnInit } from '@angular/core';

import { UtilitiesService } from './../shared/utilities.service';
import { PrivateService } from './../shared/private.service';

@Component({
  selector: 'app-create-cursos',
  templateUrl: './create-cursos.component.html',
  styleUrls: ['./create-cursos.component.scss'],
  providers: [PrivateService]
})
export class CreateCursosComponent implements OnInit {

  cursos: string[] = [];
  cursos2: string[] = [];

  onAddCourse(curso: string): void {
    this.privateService.addCourses(curso);
  }

  constructor(
    private utilitiesService: UtilitiesService,
    private privateService: PrivateService
  ) { }

  ngOnInit(): void {
    this.cursos = this.utilitiesService.getNames();
    this.cursos2 = this.privateService.getCourses();
  }

}
