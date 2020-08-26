import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-binding',
  templateUrl: './example-binding.component.html',
  styleUrls: ['./example-binding.component.scss']
})
export class ExampleBindingComponent implements OnInit {

  url: string = 'github.com/IsJordanBraz';

  aprendendoAngular: boolean = true;
  urlImage: string = 'http://lorempixel.com/400/200/cats/';

  valorAtual: string = '';
  valorSalvo: string = '';

  isMouseOver: boolean = false;
  nomeVariable: string = 'Jordan Braz';

  courseName: string = 'Angular';

  courseCount: number = 15;

  person: any = {
    name: 'Jordan',
    age: 21
  }

  getValor(){
    return 1;
  }
  salvarValor(evento){
    this.valorSalvo = evento;
  }

  getBoolean(){
    return true;
  }

  pressedButton(){
    alert('Button pressed');
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  inputChange(evento: KeyboardEvent){
   this.valorAtual = (<HTMLInputElement>evento.target).value;
  }


  onMudouValor(evento) {
    console.log(evento.novoValor);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
