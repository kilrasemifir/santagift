import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cadeau } from 'src/app/models/Cadeau';

@Component({
  selector: 'app-cadeaux-card',
  templateUrl: './cadeaux-card.component.html',
  styleUrls: ['./cadeaux-card.component.css']
})
export class CadeauxCardComponent implements OnInit {

  @Input() cadeau:Cadeau = {
    id: "",
    nom:"Nom du cadeau",
    description:"description du cadeau",
    imgUrl:"https://tesla-cdn.thron.com/delivery/public/image/tesla/56cb8c41-e898-44ce-b6b7-fe9b9a05f529/bvlatuR/std/1200x628/MS-Social",
    url:""
  };

  @Output() delete = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(){
    this.delete.emit(this.cadeau.id)
  }

}
