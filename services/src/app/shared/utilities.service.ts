import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  private names: string[] = ['Jordan', 'Braz'];

  getNames(): string[] {
    return this.names;
  }

  addNames(name: string): void {
    this.names.push(name);
  }

  constructor() {
    console.log('service');
  }
}
