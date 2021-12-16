import { Component, OnInit } from '@angular/core';
import { Cadeau } from 'src/app/models/Cadeau';
import { CadeauHttpService } from 'src/app/services/cadeau-http.service';

@Component({
  selector: 'app-cadeaux-page',
  templateUrl: './cadeaux-page.component.html',
  styleUrls: ['./cadeaux-page.component.css']
})
export class CadeauxPageComponent implements OnInit {

  cadeaux:Cadeau[] = [];

  constructor(private service: CadeauHttpService) { }

  ngOnInit(): void {
    this.service.findAll().subscribe(cadeaux=>this.cadeaux = cadeaux);
  }

  onDeleteCard(id: string){
    this.service.deleteById(id).subscribe(()=>{
      this.cadeaux = this.cadeaux.filter(cadeau=>cadeau.id!=id);
    })
  }

  save(cadeau:Cadeau){
    this.service.save(cadeau).subscribe(cadeau=>{
      this.cadeaux.push(cadeau);
    })
  }

}
