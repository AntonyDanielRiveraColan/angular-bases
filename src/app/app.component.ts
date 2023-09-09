import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public title: String = 'Hola mundo';
  public counter: number = 10;

  increaseBy():void{
    this.counter +=1;
  }

  minBy():void{
    this.counter -=1;
  }

  reset():void{
    this.counter =10;
  }
}
