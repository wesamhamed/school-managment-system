import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  editStudentForm =this.fb.group({
    firstName:['',Validators.required],
    lastName:['',Validators.required],
    dob:['',Validators.required],
    mobile:['',Validators.required]
  });
  constructor(private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  editStudent(){
    if(this.editStudentForm.invalid){
      window.alert("data invalid");
    }else{
      this.router.navigate(['/admin/students'])
    }
  }
}
