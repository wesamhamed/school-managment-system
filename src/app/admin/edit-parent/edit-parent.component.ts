import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-parent',
  templateUrl: './edit-parent.component.html',
  styleUrls: ['./edit-parent.component.css']
})
export class EditParentComponent implements OnInit {
  editParentForm =this.fb.group({
    firstName:['',Validators.required],
    lastName:['',Validators.required],
    dob:['',Validators.required],
    mobile:['',Validators.required]
  });
  constructor(private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  editParent(){
    if(this.editParentForm.invalid){
      window.alert("invalid data");
    }else{
      this.router.navigate(['/admin/parents'])
    }
  }
}
