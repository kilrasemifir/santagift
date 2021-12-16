import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Cadeau } from 'src/app/models/Cadeau';

@Component({
  selector: 'app-cadeau-form',
  templateUrl: './cadeau-form.component.html',
  styleUrls: ['./cadeau-form.component.css']
})
export class CadeauFormComponent implements OnInit {

  form = new FormGroup({});

  @Output() save = new EventEmitter<Cadeau>()
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nom: [""],
      description:[""],
      url:[""],
      imgUrl:[""]
    })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.save.emit(this.form.value)
    this.form.reset()
  }

}
