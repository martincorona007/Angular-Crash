
import { Component, OnInit,OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild('f') courseForm: NgForm | undefined;
  onSubmit(form: NgForm){
    console.log(" Course name is: "+form.value.courseName);
    console.log("Course Desc is: "+form.value.courseDesc);
    console.log("COurse amount is: "+form.value.courseAmount);
  }
  onClear(){
    //access via 'viewchild' we can access to the form and clear it
    this.courseForm?.reset();
  }
}
