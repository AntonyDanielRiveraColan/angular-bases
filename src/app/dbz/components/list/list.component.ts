import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name:'Trunk',
    power:10
  }]

  @Output()
  public indexDelete: EventEmitter<string> = new EventEmitter();


  onDeleteCharacter(id:string):void{
    this.indexDelete.emit(id);
  }

}
