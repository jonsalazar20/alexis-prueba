import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
public name : any
  constructor() { 
    this.name = {nombre: '', apellido: ''}
  }

  ngOnInit(): void {
  }

}
