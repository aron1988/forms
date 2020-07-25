import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { EnrollmentService } from '../enrollment.service';

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.css']
})
export class FirstFormComponent implements OnInit {
  topics = ['angular','python','java'];
  userModel = new User('aron','vvvv',1234567890,'defult','morning',true);
  isHasError = true;

  constructor( private enro:EnrollmentService) { }

  ngOnInit(): void {
  }
  checkValidation(value){
    if(value==='defult'){
      return this.isHasError =true
    }else{
      this.isHasError = false;
    }

  }
  onSubmit(){
    console.log(this.userModel);
    this.enro.enroll(this.userModel)
    .subscribe(
      data => console.log('success',data),
      error => console.log('success',error)
    )
    
  }


}
