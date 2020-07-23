import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.css']
})
export class FirstFormComponent implements OnInit {
  topics = ['angular','python','java'];
  userModel = new User('','ttttt',22222,'','morning',true)
  constructor() { }

  ngOnInit(): void {
  }

}
