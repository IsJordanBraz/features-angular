import { PrivateService } from './../shared/private.service';
import { Component, OnInit } from '@angular/core';

import { UtilitiesService } from './../shared/utilities.service';

@Component({
  selector: 'app-examples-services',
  templateUrl: './examples-services.component.html',
  styleUrls: ['./examples-services.component.scss'],
  providers: [PrivateService]
})
export class ExamplesServicesComponent implements OnInit {

  cursos: string[] = [];
  cursos2: string[] = [];

  onAddName(name: string): void {
    this.utilitiesService.addNames(name);
  }

  constructor(
    private utilitiesService: UtilitiesService,
    private privateService: PrivateService
  ) { }

  ngOnInit(): void {
    this.cursos = this.utilitiesService.getNames();
    this.cursos2 = this.privateService.getCourses();
    PrivateService.createdCourse.subscribe( curso => this.cursos2.push(curso));
  }

}
