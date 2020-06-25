import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm =this.fb.group({
    email:['',[Validators.required,Validators.email]],
    firstName:['',Validators.required],
    lastName:['',Validators.required],
    password:['',Validators.required],
    confirmPassword:['',Validators.required]
  })
  constructor(private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  private match():boolean{
    return this.signupForm.controls.password.value === this.signupForm.controls.confirmPassword.value;
  }
  signup(){
    if(this.signupForm.invalid){
      window.alert("invalid data");
    }else if(!this.match()){
      window.alert("password and confirm password are not match");
    }else{
      this.router.navigate(["/"]);
    }
  }

}
