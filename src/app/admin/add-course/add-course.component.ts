import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  addCourseForm =this.fb.group({
    name:['',Validators.required],
    subtitle:['',Validators.required],
    price:['',Validators.required],
    description:['',Validators.required],
    image:['',Validators.required]
  });
  constructor(private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
addCourse(){
  if(this.addCourseForm.invalid){
    window.alert("data invalid")
  }else{
    this.router.navigate(['/courses'])
  }
}
}
