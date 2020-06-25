import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm=this.fb.group({
    email:['',[Validators.email,Validators.required]],
    password:['',Validators.required]
  })
  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
  }
  login(event){
    event.preventDefault();

    if(this.loginForm.invalid){
      window.alert("please try agin");
    }else{
      this.router.navigate(['/']);
    }
  }

}
