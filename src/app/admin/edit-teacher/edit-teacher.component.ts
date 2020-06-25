import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.css']
})
export class EditTeacherComponent implements OnInit {
  editTeacherForm=this.fb.group({
    firstName:['',Validators.required],
    lastName:['',Validators.required],
    dob:['',Validators.required],
    mobile:['',Validators.required]
  });
  constructor(private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  editTeacher(){
    if(this.editTeacherForm.invalid){
      window.alert("invalid data");
    }else{
      this.router.navigate(["/admin/teachers"])
    }
  }
}
