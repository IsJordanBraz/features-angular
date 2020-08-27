import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class PrivateService {

  static createdCourse = new EventEmitter<string>();
  emitEvent = new EventEmitter<string>();

  cursos: string[] = ['Java', 'Angular'];

  getCourses(): string[] {
    return this.cursos;
  }

  addCourses(course: string): void {
    this.cursos.push(course);
    this.emitEvent.emit(course);
    PrivateService.createdCourse.emit(course);
  }

  constructor() {
    console.log('private');
   }
}
