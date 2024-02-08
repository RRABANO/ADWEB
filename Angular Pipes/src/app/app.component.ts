import { Component } from '@angular/core';
import { Observable, map, interval,} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'midterms';
  time$: Observable<Date>;
  presentDate = new Date();
  
  constructor(){
    this.time$ = interval (1000).pipe (map(()=> new Date()))
  }
  price: number = 20000; 
  Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate"]
  decimalNum1: number= 8.7589623;
  decimalNum2: number= 5.43;
  decimalNum3: number= 6.42;

  object: object = {Hardsupport: 'lou', support: 'Josh', mid: 'Rymbrent', carry: 'Macam', safelane: 'Patrick'};
  ign: object = {name: "Sisca", othernickname: "Benito"};
  role: object = {lane: 'Midlane', lane2: 'SafeLane'}
  a: number = 259;
  b: number = 1.3495;
  c: number = 420;

  originalText = 'Hello Guys';
  originalSentence = 'Rymbrent';
  customMessage = 'Sunny';
  ngOnInit() {
  }
}
