import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css']
})
export class ParentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  deleteParent(){
    window.alert("I will delete parent")
  }
}
