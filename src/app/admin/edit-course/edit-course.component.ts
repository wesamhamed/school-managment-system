import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {
  editCourseForm=this.fb.group({
    name:['',Validators.required],
    subtitle:['',Validators.required],
    price:['',Validators.required],
    description:['',Validators.required],
    image:['',Validators.required]
  });
  constructor(private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  editCourse(){
    if(this.editCourseForm.invalid){
      window.alert("data invalid");
    }else{
      this.router.navigate(['/courses'])
    }
  }
}
