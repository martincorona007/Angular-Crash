import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  courseFormreactive!: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    //output
    console.log(this.courseFormreactive);  
  }
  private initForm(){
    this.courseFormreactive = new FormGroup({
      'courseName': new FormControl(null,Validators.required),
      'courseDes': new FormControl(null),
      'courseAmount': new FormControl(null)
    });
  }
  

}
