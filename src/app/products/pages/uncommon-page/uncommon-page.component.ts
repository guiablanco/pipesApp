import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18n Select

  public name: string = 'Sebastian';
  public gender: 'male'|'female' = 'male';

  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  //i18n Plural

  public clients: string[] = ['Miguel', 'Daniel', 'Pedro', 'Carol', 'Claudia', 'Renata', 'Melissa'];
  public clientsMap = {
    '=0': 'no tenemos clientes esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteClient(): void {
    this.clients.shift();
  }

  //KeyValue Pipe

  public person = {
    name: 'Guía Blanco',
    age: 33,
    adress: 'Chile, Santiago'
  }

  //async pipe

  public myObservableTimer: Observable<number> =  interval(2000).pipe(
    tap( value => console.log('ta: ', value))
  );

  public promiseValue: Promise<string> = new Promise(
    (res , rej) => {
      setTimeout(() => {
        res( 'Tenemos data en la promesa');
        console.log( 'Tenemos data en la promesa');
      }, 3500);
    }
  )
}
