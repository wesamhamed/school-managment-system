import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-parent',
  templateUrl: './add-parent.component.html',
  styleUrls: ['./add-parent.component.css']
})
export class AddParentComponent implements OnInit {
  addParentForm =this.fb.group({
    firstName:['',Validators.required],
    lastName:['',Validators.required],
    dob:['',Validators.required],
    mobile:['',Validators.required]
  })
  constructor(private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  addParent(){
    if(this.addParentForm.invalid){
      window.alert("invalid data");
    }else{
      this.router.navigate(["/admin/parents"])
    }
  }

}
