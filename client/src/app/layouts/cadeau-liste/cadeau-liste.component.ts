import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cadeau } from 'src/app/models/Cadeau';

@Component({
  selector: 'app-cadeau-liste',
  templateUrl: './cadeau-liste.component.html',
  styleUrls: ['./cadeau-liste.component.css']
})
export class CadeauListeComponent implements OnInit {

  @Input() cadeaux: Cadeau[] = [];
  @Output() deleteCard= new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteCard(id:string){
    this.deleteCard.emit(id);
  }

}
