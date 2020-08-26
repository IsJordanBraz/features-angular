import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-examples-pipes',
  templateUrl: './examples-pipes.component.html',
  styleUrls: ['./examples-pipes.component.scss']
})
export class ExamplesPipesComponent implements OnInit {

  book: any = {
    title: 'aprender ANGULAR pode ser Muito DIVERtido',
    rating: 4.532102435,
    pages: 354,
    price: 79.00,
    discount: 0.359,
    releaseDate: new Date(2020, 8, 24)
  };

  myObject: {[minhaChave: number]: string} = {1: 'Jordan', 2: 'Braz', 3: 'Angular'};

  filter: string;

  books: string[] = ['Angular', 'Java'];

  valueAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('valor assíncrono'), 2000);
  });

  valueAsync2 = interval(2000).pipe(map(() => 'valor assíncrono Dois'));

  gender = 'male';
  inviteMap: any = {male: 'Invite him.', female: 'Invite her.', other: 'Invite them.'};

  messages: any[] = ['Primeira mensagem', 'Segunda', 'Terceira'];
  messageMapping:
      {[k: string]: string} = {'=0': 'No messages.', '=1': 'One message.', other: '# messages.'};

  str = 'Fiz um bolo';

  addCourse(value: string): void {
    if (value === '') {
      return;
    }
    this.books.push(value);
  }

  getCourses(): any {
    if (this.books.length === 0 || this.filter === undefined || this.filter.trim() === '') {
      return this.books;
    }
    return this.books.filter( data => {
        if (data.toLocaleLowerCase().includes(this.filter)) {
          return true;
        }
        return false;
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
