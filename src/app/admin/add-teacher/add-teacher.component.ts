import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {
  addTeacherForm =this.fb.group({
    firstName:['',Validators.required],
    lastName:['',Validators.required],
    dob:['',Validators.required],
    mobile:['',Validators.required]
  });
  constructor(private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  addTeacher(){
    if(this.addTeacherForm.invalid){
      window.alert("invalid data");
    }else{
      this.router.navigate(['/admin/teachers'])
    }
  }
}
