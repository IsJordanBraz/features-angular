import { Component, OnInit } from '@angular/core';

import { PrivateService } from './../shared/private.service';

@Component({
  selector: 'app-get-cursos',
  templateUrl: './get-cursos.component.html',
  styleUrls: ['./get-cursos.component.scss']
})
export class GetCursosComponent implements OnInit {

  curso: string;

  constructor(private privateService: PrivateService) { }

  ngOnInit(): void {
    this.privateService.emitEvent.subscribe( course => this.curso = course);
  }

}
