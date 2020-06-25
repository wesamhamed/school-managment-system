import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  deleteTeacher(){
    window.alert("I will delete the teacher")
  }
}
