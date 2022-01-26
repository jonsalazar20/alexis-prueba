import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  userName : string = ''
  constructor() { }
getName(): any {
  return this.userName
}
  ngOnInit(): void {
  }

}
